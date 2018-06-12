import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  constructor(
    private notesService: NotesService,
    private router: Router
  ){

  }
  public note: Note = new Note(new Date().valueOf(), '', new Date(), '');
  
  public createNewNote(){
    this.notesService.addNote(this.note);
    this.router.navigate(['/home']);
  }
  
  public cancel(){
    let confirmation = true;
    if(this.note.title.length != 0 || this.note.body.length != 0){
      confirmation = confirm('You have some pending changes, Do You want to cotinue?');
    }
    if(confirmation){
      this.router.navigate(['/home']);
    }
  }
}
