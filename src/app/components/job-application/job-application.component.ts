import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  id:string;
  job:Job;

  constructor(private route: ActivatedRoute, private jobService: JobService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    jobService.getJobDoc(this.id).subscribe(job => {
      this.job = job;
      console.log(this.job)
    }
      )
   }

  ngOnInit(): void {

    
    }

    openApplication(){
      
    }

}
