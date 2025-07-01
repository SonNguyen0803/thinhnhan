import { Routes } from '@angular/router';
import { Access } from './access';
import { Login } from './login';
import { Error } from './error';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';
import { SignUpComponent } from './sign-up-main/sign-up/sign-up.component';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login },
    { path: 'sign-up-main', component: SignUpMainComponent },
    { path: 'sign-up', component: SignUpComponent },
] as Routes;
