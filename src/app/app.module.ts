import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexModule } from './tickets/index.module';
import { IndexComponent } from './tickets/index.component';
import { PartialsModule } from './tickets/partials/partials.module';
import { TicketsModule } from './tickets/landing/inventory.module';
import { TicketsComponent } from './tickets/landing/tickets.component';
import { AuthModule } from './tickets/auth/auth.module';
import { AppRoutingModule } from '../app/app-rounting.module';
import { AuthGuard } from "./tickets/auth/auth.guard";
import { HomeComponent } from './tickets/homepage.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    HomeComponent,
    PartialsModule,
    TicketsModule,
    AppRoutingModule,
    AuthModule,
    RouterModule.forRoot([
      {path: "", component: IndexComponent},
      {path: "tickets/list", component: TicketsComponent},
      {path: "**", redirectTo: ""}
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
