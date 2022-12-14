import {Component} from '@angular/core';
import {Tickets} from "./models/tickets.model";
import { TicketRepository } from "src/app/tickets/models/tickets.repository";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './homepage.html'
})

export class homeComponent {

title = "Home Page"
}
