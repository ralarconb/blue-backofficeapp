import { Component, OnInit } from '@angular/core';
import { Document } from '../model/document';
import { DocumentService } from './document.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  public documents!: Document[];
  public editDocument!: Document;
  public deleteDocument!: Document;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.getDocuments();
  }

  public getDocuments(): void {
    this.documentService.getDocuments().subscribe(
      (response: Document[]) => {
        this.documents = response;
        console.log(this.documents);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddDocument(addForm: NgForm): void {
    document.getElementById('add-document-form')!.click();
    this.documentService.addDocument(addForm.value).subscribe(
      (response: Document) => {
        console.log(response);
        this.getDocuments();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateDocument(document: Document): void {
    if (document.code == '') {
      alert('Description can not be null');
      return;
    }
    if (document.description == '') {
      alert('Description can not be null');
      return;
    }
    this.documentService.updateDocument(document).subscribe(
      (response: Document) => {
        console.log(response);
        this.getDocuments();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteDocument(id: number): void {
    this.documentService.deleteDocument(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getDocuments();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchDocuments(key: string): void {
    console.log(key);
    const results: Document[] = [];
    for (const document of this.documents) {
      if (
        document.code.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        document.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(document);
      }
    }
    this.documents = results;
    if (results.length === 0 || !key) {
      this.getDocuments();
    }
  }

  public onOpenModal(entity: Document, mode: string): void {
    const container = document.getElementById('main-container')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addDocumentModal');
    }
    if (mode === 'edit') {
      this.editDocument = entity;
      button.setAttribute('data-target', '#updateDocumentModal');
    }
    if (mode === 'delete') {
      this.deleteDocument = entity;
      button.setAttribute('data-target', '#deleteDocumentModal');
    }
    container.appendChild(button);
    button.click();
  }
}
