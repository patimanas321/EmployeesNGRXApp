import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent {
  @Input()
  notes: Note[] = [];

  @Output()
  public onNoteDelete: EventEmitter<Note> = new EventEmitter();

  public noteDeleteClicked(note: Note){
    this.onNoteDelete.emit(note);
  }
}
