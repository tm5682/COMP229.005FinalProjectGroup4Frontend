import { Component} from "@angular/core";
import { Router} from "@angular/router";
import { Tickets} from "../../model/tickets.model";
import { TicketRepository } from "src/app/model/tickets.repository";

@Component({
    selector: "tickets-tickets",
    templateUrl: "tickets.component.html"
})

export class TicketsComponent {
    constructor(private repository: TicketRepository,
        private router: Router){}

    get ticketList(): Tickets[] {
        return this.repository.getTickets();
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure you want to delete?")) {
            this.router.navigateByUrl("tickets/delete/+id");
        }
    }
}