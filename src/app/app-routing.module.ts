import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  { path: 'registration-component', component: RegistrationComponent },
  { path: 'documents-component', component: DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
