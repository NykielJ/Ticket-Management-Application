import { Component, OnInit } from '@angular/core';
import { Ticket, TicketService, TicketStatus } from '../../services/ticket.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tickets: Ticket[] = [];
    statuses = Object.values(TicketStatus);

    constructor(private ticketService: TicketService) {}

    ngOnInit(): void {
        this.ticketService.getTickets().subscribe((data) => {
            this.tickets = data;
        });
    }

    updateTicketStatus(_id: string, status: TicketStatus): void {
        const ticketStatus = status as TicketStatus;
        this.ticketService.updateTicketStatus(_id, status).subscribe((newStatus) => {
            const ticket = this.tickets.find((t) => t._id === _id);
            if (ticket) {
                ticket.status = newStatus.status;
                }
                console.log('Ticket status updated:', ticket?.status);
            });
    }

    deleteTicket(_id: string): void {
        this.ticketService.deleteTicket(_id).subscribe(() =>
        {
            this.tickets = this.tickets.filter((t) => t._id !== _id);
            console.log('Ticket deleted:', _id);
        })
    }


}
