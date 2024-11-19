import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum TicketStatus {
  Open = 'open',
  InProgress = 'in-progress',
  Closed = 'closed',
}

export interface Ticket {
  _id?: string;
  title: string;
  description: string;
  status: TicketStatus;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {

    private apiUrl = '/api/tickets';

    constructor(private http: HttpClient) { }

    getTickets(): Observable<Ticket[]> {
      return this.http.get<Ticket[]>(this.apiUrl);
    }

    addTicket(ticket: Ticket): Observable<Ticket> {
      return this.http.post<Ticket>(this.apiUrl, ticket);
    }

    updateTicketStatus(_id: string, status: TicketStatus): Observable<Ticket> {
      return this.http.patch<Ticket>(`${this.apiUrl}/${_id}/status`, { status });
    }

    deleteTicket(_id: string): Observable<Ticket> {
      return this.http.delete<Ticket>(`${this.apiUrl}/${_id}`);
    }

}
