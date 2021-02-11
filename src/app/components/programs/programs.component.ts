import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/models/program';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs: Program[];

  constructor(private jobService: JobService) { 

  }

  ngOnInit(): void {
    this.jobService.getPrograms().subscribe(programs=>{
      // console.log(jobs);
      this.programs = programs;
    })
  }

}
