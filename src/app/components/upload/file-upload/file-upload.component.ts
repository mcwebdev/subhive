import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../shared/services/file-upload.service';
import { FileUpload } from '../../../shared/models/file-upload.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {

  selectedFiles!: FileList;
  currentFileUpload!: FileUpload;
  percentage!: number;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined!;
    console.log(file);
    this.currentFileUpload = new FileUpload(<any>file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
}
