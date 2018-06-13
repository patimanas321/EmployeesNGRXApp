import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import * as notesAction from '../store/actions/notes.action';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private store: Store<AppState>
  ){
    this.notes$ = this.store.select( x => x.notes );
  }

  public notes$: Observable<Note[]>;

  ngOnInit(): void {
    this.loadNotes();
  }
  
  loadNotes(): any {
    this.store.dispatch(new notesAction.LoadNotesAction())
  }
  
  public deleteNote(note: Note){
    var confirmation = confirm(`Are You Sure, You want to delete "${note.title}"?`);
    if(confirmation){
      this.store.dispatch(new notesAction.DeletNoteAction(note.id))
    }
  }
}
