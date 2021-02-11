import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJobComponent } from './components/add-job/add-job.component';
import { CsvUploaderComponent } from './components/csv-uploader/csv-uploader.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { TrainingsComponent } from './components/trainings/trainings.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'add-job', component:AddJobComponent},
  {path:'view-jobs', component:JobsComponent},
  { path: 'view-jobs/:id', component: JobApplicationComponent },
  { path:'trainings',component:TrainingsComponent},
  {path:'csv', component:CsvUploaderComponent},
  { path:'programs', component:ProgramsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
