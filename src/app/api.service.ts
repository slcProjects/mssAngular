import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getTestMessage(): Observable<string> {
    const url = `${this.serverUrl}/api/test`;
    return this.http.get(url, { responseType: 'text' });
  }

  uploadFiles(formData: FormData, selectedOption: string): Observable<string> {
    const url = `${this.serverUrl}/api/upload`;
    formData.append('selectedOption', selectedOption);
    return this.http.post(url, formData, { responseType: 'text' });
  }

  getFiles(): Observable<string> {
    const url = `${this.serverUrl}/api/files`;
    return this.http.get(url, { responseType: 'text' });
  }
}
