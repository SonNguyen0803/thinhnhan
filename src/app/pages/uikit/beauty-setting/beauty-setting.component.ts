import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-beauty-setting',
  imports: [ButtonModule, InputTextModule, RadioButtonModule, FormsModule, InputNumberModule, CommonModule],
  templateUrl: './beauty-setting.component.html',
  styleUrl: './beauty-setting.component.scss'
})
export class BeautySettingComponent {
  radioValue: any;
  radioValue1: any;
}
