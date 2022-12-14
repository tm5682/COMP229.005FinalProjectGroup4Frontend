import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { PartialsModule } from './partials/partials.module';
import { homeComponent } from './homepage';
@NgModule({
    imports: [BrowserModule, FormsModule, PartialsModule],
    declarations: [
        homeComponent
    ],
    exports: [homeComponent]
})
  
export class HomeComponent {}