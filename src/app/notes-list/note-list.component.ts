import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent {
  @Input()
  notes: Note[] = []
}
