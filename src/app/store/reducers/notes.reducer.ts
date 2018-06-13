import * as notesAction from './../actions/notes.action';
import { Note } from '../../models/note';

let INITIAL_STATE: Note[] = [];

//Reducer is a pure function, Cannot change state, must create a whole new object.
export function notesReducer(state = INITIAL_STATE, action: notesAction.Action) {
    switch (action.type) {
        case notesAction.LOAD_NOTES_SUCCESS: {
            return action.payload;
        }

        case notesAction.DELETE_NOTE_SUCCESS: {
            return state.filter(x => x.id != action.payload);
        }

        case notesAction.ADD_NOTE_SUCCESS: {
            let newState: Note[] = [];
            newState = newState.concat(state);
            newState.push(action.payload);
            return newState;
        }

        default:{
            return state;
        }
    }
}