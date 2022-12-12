import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './tickets/auth/signin.component';
import { SignUpComponent } from './tickets/auth/signup.component';
import { AddEditComponent } from './tickets/landing/add_edit.component';
import { IndexComponent } from './tickets/index.component';
import { AuthGuard } from "./tickets/auth/auth.guard";
import { TicketsComponent } from './tickets/landing/tickets.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: IndexComponent },
            { path: "/tickets/landing", component: TicketsComponent },
            { path: "tickets/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
            { path: "tickets/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
            { path: "users/signin", component: SignInComponent },
            { path: "users/signup", component: SignUpComponent },
            { path: "**", redirectTo: "" }
        ])
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {}