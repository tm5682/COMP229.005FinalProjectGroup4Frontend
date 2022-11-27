import { Injectable } from "@angular/core";
import { Tickets } from "./tickets.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class TicketRepository {

    private tickets: Tickets[] = [];
    listReady: boolean = false;

    constructor(private dataSource: RestDataSource) {}

    getTickets(): Tickets[] {        
        return this.tickets;
    }
    setTickets(){
        this.listReady = false;
        this.dataSource.getTicketsList().subscribe(data => {
            this.tickets = data;
            this.listReady = true;
        });
    }

    getItem(id: string): Tickets {
        return Object.assign({}, this.tickets.find(i => i._id === id)!);      
        // return (this.tickets.find(i => i._id === id)!);        
    }

    async saveTickets(item: Tickets) {

        // If it does not have id, then create a new item.
        if (item._id == null || item._id == "") {
            this.dataSource.insertTickets(item)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.tickets.push(response);
                    }
                    else{ // If API send error.
                        // Convert into ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            // If it has id, then update a existing item.
            this.dataSource.updateTickets(item).subscribe(resp => {

                // Convert into ResponseModel to get the error message.
                let response = resp as ResponseModel;
                if (response.success == true) {
                    console.log(`Success: ${response.success}`);
                    this.tickets.splice(this.tickets.
                        findIndex(i => i._id == item._id), 1, item);
                }
                else{
                    // If API send error.
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    deleteTickets(id: string) {
        this.dataSource.deleteTickets(id).subscribe(response => {
            if (response.success) {
                this.tickets.splice(this.tickets.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(`Error: ${response.message}`);
            }
        })
    }

}