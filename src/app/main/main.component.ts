import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Transcript } from '../transcript';
import {VideoService} from '../video.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  unsubscribe$ = new Subject<void>();
  transcript$!: Observable<Transcript[]>;
  id:string = '';

  constructor(private videoService:VideoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.transcript$ = this.videoService.fetchTranscript(this.id).pipe(map((data:any[]) =>{
      data.sort((a,b) => a.time - b.time);
      return data;
}));
    // this.videoService.fetchTranscript().pipe(takeUntil(this.unsubscribe$))
    // .subscribe(data => {
    //   console.log(data);
    // });

  }

}
