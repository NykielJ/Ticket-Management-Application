import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'add-ticket', component: TicketFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
