import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {


   backgrounds: { class: string, color: string }[] = [
    { class: 'bg-red-200', color: '#fecaca' },
    { class: 'bg-blue-200', color: '#bfdbfe' },
    { class: 'bg-green-200', color: '#bbf7d0' },
    { class: 'bg-yellow-200', color: '#fef08a' }
  ];
  currentBgColor: string = 'bg-white';
  titlePlaceholder: string = "ex: Coffe"
  contentPlaceholder: string ="ex: Reminder to pickup coffe ..."

  changeBackgroundColor(newColorClass: string) {
    console.log(newColorClass);
    this.currentBgColor = newColorClass;
  }

}
