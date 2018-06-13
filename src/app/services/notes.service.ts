import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../models/note';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class NotesService {
    private noteList: Note[] = dummyNotes;
    private _notesList$: BehaviorSubject<Note[]> = new BehaviorSubject(this.noteList);
    private notesList$: Observable<Note[]> = this._notesList$.asObservable();

    constructor(
        private snackBar: MatSnackBar
    ) { }

    public getAllNotes(): Observable<Note[]> {
        return this.notesList$;
    }

    public addNote(newNote: Note): Observable<Note> {
        this.noteList.push(newNote);
        this._notesList$.next(this.noteList);
        this.snackBar.open('Note Added Successfully', '', {
            duration: 2000,
        });

        return Observable.create(function (observer) {
            observer.next(newNote);
        });
    }

    public deleteNote(id: number): Observable<Note> {
        let deletedNote = this.noteList.filter(note => note.id == id)[0];

        this.noteList = this.noteList.filter(note => note.id != id);
        this._notesList$.next(this.noteList);
        this.snackBar.open('Note Deleted Successfully', '', {
            duration: 2000,
        });
        return Observable.create(function (observer) {
            observer.next(deletedNote);
        });
    }
}

const dummyNotes = [
    new Note(1, 'Lorem Ipsum', new Date(2017, 11, 24), 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
    new Note(2, 'The standard Lorem Ipsum passage', new Date(2016, 3, 2), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    new Note(3, '1914 translation by H. Rackham', new Date(2015, 1, 1), 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure.')
];