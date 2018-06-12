import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NoteListComponent } from "./notes-list/note-list.component";
import { AddNoteComponent } from "./add-note/add-note.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([      
      { path: 'home', component: HomeComponent },
      { path: 'add', component: AddNoteComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { 
  
}
