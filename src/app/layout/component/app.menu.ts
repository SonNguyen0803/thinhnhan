import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `
    <a class="layout-topbar-logo" routerLink="/">
                <img src="../../assets/images/logo.jpg">
            </a>
            <ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Menu',
                routerLink: ['/'],
                items: [
                    { label: 'Thịt chó', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/dog'] },
                    { label: 'Tráng miệng', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/dessert'] },
                    { label: 'Giải khát', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/drink'] },
                ]
            }
        ];
    }
}
