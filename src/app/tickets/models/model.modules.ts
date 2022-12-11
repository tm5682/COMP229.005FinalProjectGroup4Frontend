import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import { TicketRepository } from "./tickets.repository";
import { RestDataSource } from "./rest.datasource";
import {AuthService} from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        TicketRepository,
        AuthService,
        RestDataSource

    ]
})

export class ModelModule{}