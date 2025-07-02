import { Constant } from './../../../../helpers/constant';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@Component({
  selector: 'app-menu-all',
  imports: [AnimateOnScrollModule, ButtonModule, InputTextModule, RadioButtonModule, FormsModule, InputNumberModule, CommonModule, CardModule],
  templateUrl: './menu-all.component.html',
  styleUrl: './menu-all.component.scss',
  styles: [
    `
            :host {
                @keyframes slidedown-icon {
                    0% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(20px);
                    }

                    100% {
                        transform: translateY(0);
                    }
                }

                .slidedown-icon {
                    animation: slidedown-icon;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                }

                .box {
                    background-image: radial-gradient(var(--primary-300), var(--primary-600));
                    border-radius: 50% !important;
                    color: var(--primary-color-text);
                }
            }
        `
  ]
})
export class MenuAllComponent {
  dog = Constant.dog;
  drink = Constant.drink;
  dessert = Constant.dessert;
}
