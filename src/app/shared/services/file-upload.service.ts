import { Injectable } from "@angular/core";
import {
    AngularFireDatabase,
    AngularFireList,
} from "@angular/fire/compat/database";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { getDownloadURL, ref, uploadBytes } from "@angular/fire/storage";
import { finalize, from, map, Observable, switchMap } from "rxjs";
import { FileUpload } from "../models/file-upload.model";

@Injectable({
    providedIn: "root",
})
export class FileUploadService {
    private basePath = "/uploads";

    constructor(
        private db: AngularFireDatabase,
        private storage: AngularFireStorage
    ) {}

    uploadImage(image: File, path: string): Observable<string> {
        const storageRef = ref(this.storage.storage, path);
        const uploadTask = from(uploadBytes(storageRef, image));
        return uploadTask.pipe(
            switchMap((result) => getDownloadURL(result.ref))
        );
    }

    pushFileToStorage(fileUpload: FileUpload): Observable<number> {
        const filePath = `${this.basePath}/${fileUpload.file.name}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, fileUpload.file);

        uploadTask
            .snapshotChanges()
            .pipe(
                finalize(() => {
                    storageRef.getDownloadURL().subscribe((downloadURL) => {
                        fileUpload.url = downloadURL;
                        fileUpload.name = fileUpload.file.name;
                        this.saveFileData(fileUpload);
                    });
                })
            )
            .subscribe();

        return <any>uploadTask.percentageChanges();
    }

    private saveFileData(fileUpload: FileUpload): void {
        console.log(fileUpload);
        this.db.list(this.basePath).push(fileUpload);
    }

    getFiles(numberItems: any): AngularFireList<FileUpload> {
        return this.db.list(this.basePath, (ref) =>
            ref.limitToLast(numberItems)
        );
    }

    deleteFile(fileUpload: FileUpload): void {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
                this.deleteFileStorage(fileUpload.name);
            })
            .catch((error) => console.log(error));
    }

    private deleteFileDatabase(key: string): Promise<void> {
        return this.db.list(this.basePath).remove(key);
    }

    private deleteFileStorage(name: string): void {
        const storageRef = this.storage.ref(this.basePath);
        storageRef.child(name).delete();
    }
}
