import { Component } from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteCardComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes: {id:number, title:string, content:string}[] = [
    {
      id:0, title:'',content:'' 
    }
  ];

  nextId = 1;



  constructor(){
    this.addNote();
  }

  addNote() {
    this.notes.push({
      id:this.nextId++,
      title: '',
      content: ''
    });
  }

}
