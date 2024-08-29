import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgClass} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Note} from "../interfaces/note"
@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})

export class NoteCardComponent {

  @Input() note!: Note;
  @Output() noteSubmit = new EventEmitter<void>();
  @Output() noteUpdate = new EventEmitter<Note>();

   backgrounds: { class: string, color: string }[] = [
    { class: 'bg-red-200', color: '#fecaca' },
    { class: 'bg-blue-200', color: '#bfdbfe' },
    { class: 'bg-green-200', color: '#bbf7d0' },
    { class: 'bg-yellow-200', color: '#fef08a' }
  ];
  currentBgColor: string = 'bg-white';
  titlePlaceholder: string = "ex: Coffee"
  contentPlaceholder: string ="ex: Reminder to pickup coffee ..."

  changeBackgroundColor(newColorClass: string) {
    console.log(newColorClass);
    this.currentBgColor = newColorClass;
    this.note.bgColor = newColorClass;
  }

  submitNote() {
    console.log(this.note);
    if(this.note.title.trim() !== '') {
      this.noteSubmit.emit();
    }
  }

  updateNote() {
    console.log(this.note)
    this.noteUpdate.emit(this.note);
  }


}
