import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { Constants } from '../../../helpers/constants';
import { MessageService } from 'primeng/api';
import { MasterService } from '../service/master.service';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-login',
    standalone: true,
    styleUrl: './login.component.scss',
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, MessageModule, ToastModule],
    providers: [MessageService],
    template: `
        <!-- <app-floating-configurator /> -->
        <p-toast/>
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen overflow-hidden">
            <div class="bg-login">
                <div class="bg-logo"></div>
            </div>
            <div class="login-content">
                <h1 class="d-flex justify-content-center">Login</h1>
                <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                <input pInputText id="email1" type="text" placeholder="Email address" class="w-full  mb-8" [(ngModel)]="email" />

                <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                <p-password id="password1" [(ngModel)]="password" placeholder="Password" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                    <div class="flex items-center">
                        <p-checkbox [(ngModel)]="checked_remember" id="rememberme1" binary class="mr-2"></p-checkbox>
                        <label for="rememberme1">Remember me</label>
                    </div>
                    <div class="flex items-center">
                        <p-checkbox [(ngModel)]="checked_auto" id="rememberme1" binary class="mr-2"></p-checkbox>
                        <label for="rememberme1">Auto login</label>
                    </div>
                </div>
                <p-button  label="Sign In" styleClass="w-full p-button-lg"  (onClick)="login()"></p-button>
                <p-button  label="Sign Up" styleClass="w-full mt-3 p-button-white p-button-lg"  (onClick)="signup()"></p-button>
            </div>
        </div>
    `
})
export class Login {
    email: string = '';

    password: string = '';

    checked_remember: boolean = false;
    checked_auto: boolean = false;
    constructor(private router: Router, private masterService: MasterService, private messageService: MessageService) { }
    login() {
        if (this.email) {
            //call login
            localStorage.setItem(Constants.CurrentUser, this.email);
            this.router.navigate(['/'])
        }
        else {
            this.messageService.add({ severity: 'error', summary: 'err', detail: 'errr', life: 3000 });
        }
    }

    signup() {
        this.router.navigate(['auth/sign-up-main'])
    }
}
