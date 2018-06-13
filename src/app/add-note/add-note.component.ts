import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import * as notesAction from '../store/actions/notes.action';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ){

  }
  public note: Note = new Note(new Date().valueOf(), '', new Date(), '');
  
  public createNewNote(){
    this.store.dispatch(new notesAction.AddNoteAction(this.note));
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
