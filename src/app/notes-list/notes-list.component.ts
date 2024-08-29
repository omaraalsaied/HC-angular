import {Component, OnInit} from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';
import {Note} from "../interfaces/note"
import {NavbarComponent} from "../navbar/navbar.component";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteCardComponent, NavbarComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent implements OnInit{
  notes: Note[] = [];
  id = 1;

  constructor(private _sharedService: SharedService) {
    this.addNote();

  }

  ngOnInit() {
    const stringifiedNotes = localStorage.getItem('notes');
    if (stringifiedNotes) {
      this.notes = JSON.parse(stringifiedNotes);
    }

    this._sharedService.deletingNotes.subscribe(() => {
      if(this._sharedService.notesDeletedSubject.value) {
        this.notes = [];
        localStorage.removeItem('notes');
        this.addNote();
      }
    })

  }

  addNote() {
    const newNote: Note = {
        id: this.id ++,
        title: '',
        content: '',
        bgColor: 'bg-white',
        createdAt: new Date()
    };
    this.notes.push(newNote);
  }

  onNoteUpdate(updatedNote: Note) {
    const i =  this.notes.findIndex(note => note.id === updatedNote.id);
    if (i !== -1) {
      this.notes[i] = updatedNote;
    }
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }
  onNoteSubmit() {
    this.addNote();
    console.log(this.notes);
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }

}
