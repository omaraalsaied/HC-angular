import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-background-selector',
  standalone: true,
  imports: [],
  templateUrl: './background-selector.component.html',
  styleUrl: './background-selector.component.css'
})
export class BackgroundSelectorComponent {
  @Output() backgroundChange = new EventEmitter<string>();
  //
  private _backgrounds: string[] = [
    '#000033', // Dark blue
    '#00ffcc', // Teal
    'linear-gradient(to right, #3366ff, #ff3366)', // Blue to pink gradient
    'linear-gradient(to right, #ff66cc, #9966ff)'  // Pink to purple gradient
  ];


  get backgrounds(): string[] {
    return this._backgrounds;
  }

  selectBackground(bg: string) {
    this.backgroundChange.emit(bg);
  }

}
