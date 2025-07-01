import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MasterService } from '../../service/master.service';
import { MessageService } from 'primeng/api';
import { Constants } from '../../../../helpers/constants';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-sign-up-main',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, MessageModule, ToastModule],
  templateUrl: './sign-up-main.component.html',
  styleUrl: './sign-up-main.component.scss'
})
export class SignUpMainComponent {
  constructor(private router: Router, private masterService: MasterService, private messageService: MessageService) { }
  signup() {
    this.router.navigate(['auth/sign-up'])
  }
}
