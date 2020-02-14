import { Component, OnInit} from '@angular/core';
import { NoteListService } from 'src/app/services/note-list.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  private loading: boolean = true;

  constructor( private noteListService: NoteListService) { }

  ngOnInit() {
    this.noteListService.fetchNotes()
      .pipe(delay(1000))
      .subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.noteListService.onToggle(id)
  }

  removeNote(id: number) {
    this.noteListService.removeNote(id)
  }


}
