import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTestMessage(): Observable<string> {
    console.log("getmessage being called");
   // return this.http.get<string>('/api/test');
   return this.http.get('/api/test', { responseType: 'text' });

  }

  uploadFiles(formData: FormData) {
    console.log("uploadFiles being called");

    return this.http.post('/api/upload',formData, { responseType: 'text' });


   // return this.http.post('http://localhost:8080/api/upload', formData);
  }


  getFiles(): Observable<string> {
    console.log("getmessage being called");
   // return this.http.get<string>('/api/test');
   return this.http.get('/api/test', { responseType: 'text' });

  }

  


  
}


