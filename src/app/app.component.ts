import { Component } from '@angular/core';
import { Note } from './interfaces/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'ngKeep'

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
    }
  ]
}
