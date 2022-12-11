import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Tickets } from "../models/tickets.model";
import { TicketRepository } from "../models/tickets.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {

    title:string = "Open New Ticket";
    editing: boolean = false;
    item: Tickets = new Tickets();

    constructor(private repository: TicketRepository, 
                private router: Router,
                activeRoute: ActivatedRoute)
    {
        //Perform Delete Action
        if(activeRoute.snapshot.params["mode"] == "delete"){
            this.deleteItem(activeRoute.snapshot.params["id"]);
             }
        this.editing = activeRoute.snapshot.params["mode"] == "edit";

        //Perform Edit Action
        if (this.editing) {
            this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
        } 

        //Perform Add Action
        else {
            this.item = new Tickets();
        }        

    }
    save(form: NgForm) {
        this.repository.saveTickets(this.item);
        this.router.navigateByUrl("landing/tickets");
    }
    private deleteItem(id: string){
        this.repository.deleteTickets(id);
        this.router.navigateByUrl("landing/tickets");
    }

}