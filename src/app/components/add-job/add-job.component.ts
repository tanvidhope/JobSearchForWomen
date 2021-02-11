import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import {Job} from 'src/app/models/job'

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  job: Job = {
    title:'',
    description:'',
    salary:'',
    location:'',
    organization:'',
    openings:0,
    contact:'',
  }

  cities = ["Mumbai", "Pune", "Delhi", "Banglore"]
  constructor(private jobService: JobService) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.job.title!='' && this.job.location!=''){
      this.jobService.addJob(this.job);
      this.job.title='';
      this.job.description='';
      this.job.salary='';

    }
  }
}
