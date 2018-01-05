import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ListDocumentComponent } from './list-document.component';
import { DocumentService } from './document.service';


@NgModule({
  declarations: [
    ListDocumentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  	DocumentService
  ],
  exports: [ListDocumentComponent]
})
export class DocumentModule { }
