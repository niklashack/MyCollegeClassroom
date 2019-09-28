import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KollegKlasseComponent } from './modules/kolleg-klasse/kolleg-klasse.component';
import { DashboardComponent }   from './modules/dashboard/dashboard.component';
import { StudentDetailsComponent }  from './modules/student-details/student-details.component';

const routes: Routes = [
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kolleg', component: KollegKlasseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }