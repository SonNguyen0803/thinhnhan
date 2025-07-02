import { Constant } from './../../../../helpers/constant';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-dessert',
  imports: [ButtonModule, InputTextModule, RadioButtonModule, FormsModule, InputNumberModule, CommonModule, CardModule],

  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.scss'
})
export class DessertComponent {
  dog = Constant.dog;
  drink = Constant.drink;
  dessert = Constant.dessert;
}
