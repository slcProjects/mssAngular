import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  data: any;
  message: string = 'Hello, world!';
  link: string = "";
  sent: string = "";
  selectedFiles!: FileList;
  selectedOption: string = "cs";
  uploadingTags: boolean = true;




  constructor(private apiService: ApiService) { }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }
  

  ngOnInit() {
    console.log("inside ngOnit ");



    this.apiService.getTestMessage().subscribe((response: string) => {
      console.log("inside apiService call ");
      this.message = response;
    });
  }


  onUpload(): void {
    if (this.selectedFiles) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        console.log("file is " + this.selectedFiles[i]);
        formData.append('files', this.selectedFiles[i]);
      }
      this.uploadingTags = false;
      this.message = " Uploading ";

      this.sent = "waiting for server, this may take  few moments";


      this.apiService.uploadFiles(formData,this.selectedOption)
        .subscribe(
          (response) => {
            this.link = response;
            this.sent = "";

            this.message = " Complete";


            console.log('Upload successful');
          },
          (error) => {
            console.error('Upload error:', error);
            this.sent = "Error occurred, please contact cgraves@sl.on.ca";

            // Handle error response
          },
          () => {
            // Optional: Handle complete event
          }
        );
    }
  }
}