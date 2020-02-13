import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  @Input() notesArr: Note[] = []

  constructor() { }

  ngOnInit() {
  }

}
