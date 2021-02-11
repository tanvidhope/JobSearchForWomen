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
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { CsvUploaderComponent } from './components/csv-uploader/csv-uploader.component';
import { ProgramsComponent } from './components/programs/programs.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    NavbarComponent,
    AddJobComponent,
    HomepageComponent,
    JobApplicationComponent,
    TrainingsComponent,
    CsvUploaderComponent,
    ProgramsComponent
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
    NgxCsvParserModule,
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
