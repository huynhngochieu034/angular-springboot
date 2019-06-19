import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AddNewComponent } from './add-new/add-new.component';

const routes: Routes = [
  { path:'', component: NewsComponent},
  { path:'addnew', component: AddNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
