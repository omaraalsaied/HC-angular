import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BackgroundSelectorComponent} from "./background-selector/background-selector.component";
import {NoteComponent} from "./note/note.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundSelectorComponent, NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  onBackgroundChange(background: string)
  {
    document.body.style.background = background;
  }

  protected readonly event = event;
}
