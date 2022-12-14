import { Component } from '@angular/core';
import { Tickets } from './models/tickets.model';
import { TicketRepository } from 'src/app/tickets/models/tickets.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  public title: string = 'Index Page';
  public isAllTickets: boolean = false;

  constructor(private repository: TicketRepository, private router: Router) {
    repository.setTickets();
  }

  get ticketList(): Tickets[] {
    return this.repository.getTickets(this.isAllTickets);
  }
}
