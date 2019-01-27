import {Component, OnInit, Input} from '@angular/core';
import {FileUpload} from '../models/fileupload';
import {UploadFileService} from '../services/upload-file.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  fileUploads: any[];
  @Input() fileUpload: FileUpload;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}
