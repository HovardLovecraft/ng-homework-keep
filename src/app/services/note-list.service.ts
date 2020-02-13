import { Injectable } from '@angular/core';
//import { Note } from "src/app/interfaces/note"

export interface Note {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
    isArchived: boolean;
}

@Injectable({providedIn: 'root'})

export class NoteListService {
    
    public notesArr: Note[]  = [
        {
          id: 1,
          title: 'first note',
          description: 'this is a first note',
          isDone: false,
          isArchived: false
        },
        {
          id: 2,
          title: 'Second note',
          description: 'this is a second note',
          isDone: true,
          isArchived: false
        },
        {
          id: 3,
          title: 'Third note',
          description: 'this is a third note',
          isDone: false,
          isArchived: false
        }
    ]
    
    onToggle(id: number) {
        const index = this.notesArr.findIndex(note => note.id === id);
        this.notesArr[index].isDone = !this.notesArr[index].isDone
    }

    removeNote(id: number) {
        this.notesArr = this.notesArr.filter( note => note.id !== id)
    }
}