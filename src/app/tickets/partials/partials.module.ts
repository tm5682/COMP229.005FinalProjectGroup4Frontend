import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// import {PartialsModule} from './partials/partials.module';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        HeaderComponent, FooterComponent
    ],
    exports: [HeaderComponent, FooterComponent]
})

export class PartialsModule {}