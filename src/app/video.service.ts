import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from "../environments/environment";
import {Transcript} from "../app/transcript"




@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  public fetchTranscript(id:string): Observable<Transcript[]> { 
    return this.http.get<Transcript[]>(
      `${environment.videoNetworkApiUrl}/${id}.json`
    );

  } 
}
