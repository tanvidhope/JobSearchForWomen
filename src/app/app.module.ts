import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobService } from './services/job.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { TrainingsComponent } from './components/trainings/trainings.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProgramsComponent } from './components/programs/programs.component';
import { TrainingDetailComponent } from './components/training-detail/training-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    NavbarComponent,
    AddJobComponent,
    HomepageComponent,
    JobApplicationComponent,
    TrainingsComponent,
    ProgramsComponent,
    TrainingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
