import { Component, OnInit} from '@angular/core';
import { NoteListService } from 'src/app/services/note-list.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {



  constructor( private noteListService: NoteListService) { }

  ngOnInit() {
    
  }

  onChange(id: number) {
    this.noteListService.onToggle(id)
  }

  removeNote(id: number) {
    this.noteListService.removeNote(id)
  }

}
