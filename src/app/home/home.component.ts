import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private notesService: NotesService
  ){
    this.notes$ = this.notesService.getAllNotes();
  }

  public notes$: Observable<Note[]>;

  public deleteNote(note: Note){
    var confirmation = confirm(`Are You Sure, You want to delete "${note.title}"?`);
    if(confirmation){
      this.notesService.deleteNote(note.id);
    }
  }
}
