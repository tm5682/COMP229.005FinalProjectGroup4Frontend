import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ModelModule} from "../models/model.modules";
import { PartialsModule } from "../partials/partials.module";
import {TicketsComponent} from "./tickets.component";
import {AddEditComponent} from "./add_edit.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [TicketsComponent,AddEditComponent],
    exports: [TicketsComponent,AddEditComponent]
})

export class TicketsModule{}