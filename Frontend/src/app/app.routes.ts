import { Routes } from '@angular/router';
import { BoardComponent } from './Components/board/board.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '**', title: 'Board', component: BoardComponent },
    { path: 'login', title: 'Log In', component: LoginComponent },
    { path: 'signup', title: 'Sign Up', component: SignUpComponent }

];
