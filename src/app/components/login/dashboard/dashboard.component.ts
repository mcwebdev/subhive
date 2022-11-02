import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { FileUploadComponent } from '../../../components/upload/file-upload/file-upload.component';
import { UploadDetailsComponent } from '../../../components/upload/upload-detail/upload-detail.component';
import { UploadListComponent } from '../../../components/upload/upload-list/upload-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    
  }


}
