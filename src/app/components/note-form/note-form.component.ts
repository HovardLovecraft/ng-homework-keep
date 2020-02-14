import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteListService } from 'src/app/services/note-list.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  title: string = ''

  constructor(private noteService: NoteListService) { }

  ngOnInit() {
  }

  addNote() {
    const note: Note = {
      id: 0,
      title: this.title,
      description: '',
      isDone: false,
      isArchived: false
    }

    this.noteService.addNote(note)
    this.title = ''
  }

}
