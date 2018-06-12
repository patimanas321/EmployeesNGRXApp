import { Component } from '@angular/core';
import { NotesService } from './services/notes.service';
import { Note } from './models/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private notesService: NotesService
  ){
    this.notes$ = this.notesService.getAllNotes();
  }

  public notes$: Observable<Note[]>;
}
