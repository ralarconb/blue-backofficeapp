import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentService } from './documents/document.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, DocumentsComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [DocumentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
