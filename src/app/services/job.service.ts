import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Job } from '../models/job';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobsCollection: AngularFirestoreCollection<Job>
  jobs: Observable<Job[]>;
  jobDoc: AngularFirestoreDocument<Job>;

  constructor(public afs: AngularFirestore) { 
    // this.jobs = this.afs.collection('jobs').valueChanges();
    this.jobsCollection = this.afs.collection('jobs', ref => ref.orderBy('title', 'asc'));
    this.jobs = this.afs.collection('jobs').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Job;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  getJobs(){
    return this.jobs;
  }

  addJob(job: Job){
    this.jobsCollection.add(job);
  }

  deleteJob(job:Job){
    this.jobDoc = this.afs.doc(`jobs/${job.id}`);
    console.log('delete',job.id ),
    this.jobDoc.delete();
  }

  getJobDoc(jobid){
    this.jobDoc = this.afs.doc<Job>(`jobs/${jobid}`);
    console.log(this.jobDoc);
    return this.jobDoc.valueChanges();
  }

  filterJob(category, location){
    if(location && category){
      this.jobs = this.afs.collection(('jobs'),ref => ref.where('location', '==', location).where("title", "==", category)).snapshotChanges().pipe(map(changes => {
        return changes.map(a=>{
          const data = a.payload.doc.data() as Job;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
      return this.jobs
    }
    else if(location){
      this.jobs = this.afs.collection(('jobs'),ref => ref.where('location', '==', location)).snapshotChanges().pipe(map(changes => {
        return changes.map(a=>{
          const data = a.payload.doc.data() as Job;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
      return this.jobs
    }
    else{
      this.jobs = this.afs.collection(('jobs'),ref => ref.where("title", "==", category)).snapshotChanges().pipe(map(changes => {
        return changes.map(a=>{
          const data = a.payload.doc.data() as Job;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
      return this.jobs
    }
  }

  getIndeedJobs(){
    var indeedJobs = this.afs.collection('indeedJobs').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Job;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    return indeedJobs;
  }

  getPrograms(){
    var programs = this.afs.collection('programs').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Job;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    return programs;
  }

}


