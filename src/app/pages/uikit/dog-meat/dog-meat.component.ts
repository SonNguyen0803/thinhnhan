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
  selector: 'app-dog-meat',
  imports: [ButtonModule, InputTextModule, RadioButtonModule, FormsModule, InputNumberModule, CommonModule, CardModule],
  templateUrl: './dog-meat.component.html',
  styleUrl: './dog-meat.component.scss'
})
export class DogMeatComponent {
  dog = Constant.dog;
  drink = Constant.drink;
  dessert = Constant.dessert;
}
