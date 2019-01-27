import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../models/fileupload';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.page.html',
  styleUrls: ['./article-add.page.scss'],
})
export class ArticleAddPage implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

}
