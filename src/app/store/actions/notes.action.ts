import { Note } from "../../models/note";

export const LOAD_NOTES = 'LOAD_NOTES';
export const LOAD_NOTES_SUCCESS = 'LOAD_NOTES_SUCCESS';
export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';

export class LoadNotesAction{
    readonly type = LOAD_NOTES;
    constructor(){
        
    }
}

export class LoadNotesSuccessAction{
    readonly type = LOAD_NOTES_SUCCESS;
    constructor(public payload: Note[]){
        
    }
}

export class AddNoteAction{
    readonly type = ADD_NOTE;
    constructor(public payload: Note){
        
    }
}

export class AddNoteSuccessAction{
    readonly type = ADD_NOTE_SUCCESS;
    constructor(public payload: Note){
        
    }
}

export class DeletNoteAction{
    readonly type = DELETE_NOTE;
    constructor(public payload: number){
        
    }
}

export class DeleteNoteSuccessAction{
    readonly type = DELETE_NOTE_SUCCESS;
    constructor(public payload: number){
        
    }
}

//Action Creator - Union Type
export type Action
    = LoadNotesAction
    | LoadNotesSuccessAction
    | AddNoteAction
    | AddNoteSuccessAction
    | DeletNoteAction
    | DeleteNoteSuccessAction