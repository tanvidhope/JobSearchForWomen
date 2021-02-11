import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  title = ''
  location = ''
  cities = ["Mumbai", "Pune", "Delhi", "Banglore"]
  indeedJobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(jobs=>{
      // console.log(jobs);
      this.jobs = jobs;
    })
  }

  deleteJob(event, job){
    this.jobService.deleteJob(job);
  }

  filterJobs(){
    // todo - add filter logic
    this.jobService.filterJob(this.title, this.location).subscribe(jobs => {
      this.jobs = jobs;
      console.log(jobs);
    })
  }

  getIndeedJobs(){
    this.jobService.getIndeedJobs().subscribe(jobs =>{
      this.indeedJobs = jobs;
    })
  }

  goToPage(id){
    window.open(this.indeedJobs[id].url)
  }
}

