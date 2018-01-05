import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
	selector: 'list-document',
	templateUrl: './list-document.template.html'
})
export class ListDocumentComponent implements OnInit {

  private documents : Document[];

  constructor(private documentService: DocumentService) {}


	ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documents = this.documentService.getDocuments();
  }

}