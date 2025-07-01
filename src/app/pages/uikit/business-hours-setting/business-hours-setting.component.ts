import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-business-hours-setting',
  imports: [ButtonModule, InputTextModule, RadioButtonModule, FormsModule, InputNumberModule, CommonModule],
  templateUrl: './business-hours-setting.component.html',
  styleUrl: './business-hours-setting.component.scss'
})
export class BusinessHoursSettingComponent {
  radioValue: any;
  radioValue1: any;
}
