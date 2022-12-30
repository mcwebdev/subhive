import { Component } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";
import { UploadDetailsComponent } from "../../../components/upload/upload-detail/upload-detail.component";
import { UploadListComponent } from "../../../components/upload/upload-list/upload-list.component";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    faSignOutAlt = faSignOutAlt;

    constructor(public authService: AuthService) {}
}
