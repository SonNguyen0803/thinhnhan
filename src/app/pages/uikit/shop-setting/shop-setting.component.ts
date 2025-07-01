import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ContextMenu, ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shop-setting',
  imports: [ImageModule, InputTextModule, ButtonModule, InputNumberModule, CommonModule, FormsModule, TableModule, ToggleSwitchModule, ContextMenuModule],
  templateUrl: './shop-setting.component.html',
  styleUrl: './shop-setting.component.scss'
})
export class ShopSettingComponent {
  checkedLimit: any;
  checkedUsePoint: any;
  menuItems: MenuItem[] = [];
  selectedRemove: any;
  removeStaff: number = 1;
  removeLevel: number = 2;
  removeAmount: number = 3;
  @ViewChild('cm') cm!: ContextMenu;
  levels = [
    { id: 1, level: 'VIP', numberOf: 50, amount: 15, discount: 15, accumulation: 10 },
    { id: 2, level: '프리미엄', numberOf: 50, amount: 10, discount: 14, accumulation: 9 },
    { id: 3, level: '골드', numberOf: 50, amount: 5, discount: 13, accumulation: 8 },
    { id: 4, level: '실버', numberOf: 50, amount: 2, discount: 12, accumulation: 7 },
    { id: 5, level: '브론즈', numberOf: 50, amount: 1, discount: 11, accumulation: 6 },
  ]

  amounts = [
    { id: 1, paymentAmount: 20, accumulatedAmount: 21, period: 6 },
    { id: 2, paymentAmount: 30, accumulatedAmount: 32, period: 6 },
    { id: 3, paymentAmount: 50, accumulatedAmount: 55, period: 8 },
    { id: 4, paymentAmount: 70, accumulatedAmount: 77, period: 0 },
    { id: 5, paymentAmount: 100, accumulatedAmount: 110, period: 0 }
  ]

  staffs = [
    { id: 1, name: '김아무개', cnt: 3 },
    { id: 2, name: '김아무개', cnt: 2 }
  ]

  constructor() {
    this.menuItems = [
      {
        label: '삭제',
        icon: 'pi pi-trash',
        command: () => this.removeRow()
      }
    ];
  }


  addStaff() {
    const maxId = Math.max(...this.staffs.map(s => s.id));
    const newRow = { id: maxId + 1, name: 'new', cnt: 0 }
    this.staffs = [newRow, ...this.staffs]
  }

  addLevel() {
    const maxId = Math.max(...this.levels.map(s => s.id));
    const newRow = { id: maxId + 1, level: 'New', numberOf: 0, amount: 0, discount: 0, accumulation: 0 }
    this.levels = [newRow, ...this.levels]
  }

  addAmount() {
    const maxId = Math.max(...this.amounts.map(s => s.id));
    const newRow = {
      id: maxId + 1, paymentAmount: 0, accumulatedAmount: 0, period: 0
    }
    this.amounts = [newRow, ...this.amounts]
  }

  onRightClick(event: MouseEvent, rowData: any, type: number) {
    this.cm.show(event);
    setTimeout(() => {
      const el = document.querySelector('.p-contextmenu-item-link');
      if (el?.hasAttribute('aria-hidden')) {
        el.removeAttribute('aria-hidden');
      }
    }, 50);
    this.removeType = type;
    this.selectedRemove = rowData;
    event.preventDefault();
  }

  removeType: number = 0;
  removeRow() {
    switch (this.removeType) {
      case this.removeStaff:
        this.staffs = this.staffs.filter(s => s !== this.selectedRemove);
        break;
      case this.removeLevel:
        this.levels = this.levels.filter(s => s !== this.selectedRemove);
        break;
      case this.removeAmount:
        this.amounts = this.amounts.filter(s => s !== this.selectedRemove);
        break;
    }
  }
}
