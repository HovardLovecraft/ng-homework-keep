import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './interfaces/note';

@Pipe({
    name: 'noteFilter'
})
export class NoteFilterPipe implements PipeTransform {
    transform(notesArr: Note[], search: string = ''): Note[] {
        if (!search.trim()) {
            return notesArr
        }

        return notesArr.filter( note => {
            return note.title.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1
        })
    }
}