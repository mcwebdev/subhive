// Factory
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// Router
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/login/dashboard/dashboard.component";
import { SignInComponent } from "./components/login/sign-in/sign-in.component";
import { SignUpComponent } from "./components/login/sign-up/sign-up.component";
import { ForgotPasswordComponent } from "./components/login/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "./components/login/verify-email/verify-email.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Auth Service
import { AuthService } from "./shared/services/auth.service";

// User Service
import { UsersService } from "./shared/services/user.service";

// File Upload Service
import { FileUploadService } from "./shared/services/file-upload.service";

// Firebase services + environment module
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../environments/environment";
import { FormatFileSizePipe } from "./shared/format-file-size.pipe";
import { FileUploadComponent } from "./components/upload/file-upload/file-upload.component";
import { UploadListComponent } from "./components/upload/upload-list/upload-list.component";
import { UploadDetailsComponent } from "./components/upload/upload-detail/upload-detail.component";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { FIREBASE_OPTIONS } from "@angular/fire/compat";
// PrimeNG
import { ButtonModule } from "primeng/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HotToastModule } from "@ngneat/hot-toast";
// FLEX
import { FlexLayoutModule } from "@angular/flex-layout";

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
        UploadDetailsComponent,
    ],
    imports: [
        //AngularFireModule.initializeApp(environment.firebase, 'subhive'),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
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
        ReactiveFormsModule,
        HotToastModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    //providers: [AuthService, FileUploadService, UsersService, AngularFireStorageModule, AngularFireDatabaseModule,
    //  AngularFirestoreModule, AngularFireModule],
    providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        AngularFirestoreModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
