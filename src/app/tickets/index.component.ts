import {Component} from '@angular/core';
import { Tickets} from "../model/tickets.model";
import { TicketRepository } from "src/app/model/tickets.repository";
import { Router } from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})

export class IndexComponent {

    public title : string = "Index Page"
    constructor(private repository: TicketRepository,
        private router: Router){}

    get ticketList(): Tickets[] {
        return this.repository.getTickets();
    
    }
}
