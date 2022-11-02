import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/login/dashboard/dashboard.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Auth service
import { AuthService } from "./shared/services/auth.service";

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { FormatFileSizePipe } from './shared/format-file-size.pipe';
import { FileUploadComponent } from './components/upload/file-upload/file-upload.component';
import { UploadListComponent } from './components/upload/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload/upload-detail/upload-detail.component';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//FLEX
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FormatFileSizePipe,
    FileUploadComponent,
    UploadListComponent,
    UploadDetailsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'subhive'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
