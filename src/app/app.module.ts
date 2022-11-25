import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexModule } from './tickets/index.module';
import { IndexComponent } from './tickets/index.component';
import { PartialsModule } from './tickets/partials/partials.module';
import { TicketsModule } from './tickets/landing/inventory.module';
import { TicketsComponent } from './tickets/landing/tickets.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
    TicketsModule,
    RouterModule.forRoot([
      {path: "", component: IndexComponent},
      {path: "tickets/list", component: TicketsComponent},
      {path: "**", redirectTo: ""}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
