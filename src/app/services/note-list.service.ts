import { Injectable } from '@angular/core';
import { Note } from "src/app/interfaces/note";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'


@Injectable({providedIn: 'root'})

export class NoteListService {
    
    public notesArr: Note[]  = []

    constructor(private http: HttpClient) {

    }

    fetchNotes(): Observable<Note[]> {
      return this.http.get<Note[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .pipe(tap(notesArr => this.notesArr = notesArr))
    }
    
    onToggle(id: number) {
        const index = this.notesArr.findIndex(note => note.id === id);
        this.notesArr[index].isDone = !this.notesArr[index].isDone
    }

    removeNote(id: number) {
        this.notesArr = this.notesArr.filter( note => note.id !== id)
    }
}