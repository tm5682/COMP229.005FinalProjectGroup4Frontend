import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ModuleModle} from "../../model/model.modules";
import { PartialsModule } from "../partials/partials.module";
import {TicketsComponent} from "./tickets.component";
// import {AddEditComponent} from "./add_edit.component";

@NgModule({
    imports: [ModuleModle, BrowserModule, FormsModule, RouterModule, PartialsModule],
    declarations: [TicketsComponent],
    exports: [TicketsComponent]
})

export class TicketsModule{}