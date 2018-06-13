import { Injectable } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Effect, Actions } from '@ngrx/effects';
import * as notesActions from './../actions/notes.action';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class NotesEffect {

    constructor(
        private notesService: NotesService,
        private actions$: Actions
    ) { }

    @Effect()
    loadNotes$ = this.actions$
        .ofType(notesActions.LOAD_NOTES)
        .pipe(switchMap(() => this.notesService.getAllNotes()
            .pipe(map(notes => new notesActions.LoadNotesSuccessAction(notes))
    )));

    @Effect()
    deleteNote$ = this.actions$
        .ofType(notesActions.DELETE_NOTE)
        .pipe(switchMap((action: notesActions.DeletNoteAction) => this.notesService.deleteNote(action.payload)
            .pipe(map(note => new notesActions.DeleteNoteSuccessAction(note.id))
    )));

    @Effect()
    addNote$ = this.actions$
        .ofType(notesActions.ADD_NOTE)
        .pipe(switchMap((action: notesActions.AddNoteAction) => this.notesService.addNote(action.payload)
            .pipe(map(note => new notesActions.AddNoteSuccessAction(note))
    )));
}