import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteCardComponent } from './note-card/note-card.component';
import {NotesListComponent} from "./notes-list/notes-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NoteCardComponent, NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  onBackgroundChange(background: string)
  {
    document.body.style.background = background;
    localStorage.setItem('bg-color', background);
  }

  ngOnInit() {
    if (localStorage.getItem('bg-color')){
      document.body.style.background = <string>localStorage.getItem('bg-color');
    }
  }



}
