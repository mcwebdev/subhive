import { Component, OnInit, Input } from '@angular/core';
import { FileUploadService } from '../../../shared/services/file-upload.service';
import { FileUpload } from '../../../shared/models/file-upload.model';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-detail.component.html',
  styleUrls: ['./upload-detail.component.scss']
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: FileUploadService) {
    console.log(this.fileUpload)}

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload: any): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
