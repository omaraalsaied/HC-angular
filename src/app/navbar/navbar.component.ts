import { Component, EventEmitter, Output } from '@angular/core';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() backgroundChange = new EventEmitter<string>();

  constructor(private sharedService: SharedService) {}

  private _backgrounds: string[] = [
    '#000033', // Dark blue
    '#00ffcc', // Teal
    '#ff3366', // Pink
    'linear-gradient(to right, #3366ff, #ff3366)', // Blue to pink gradient
    'linear-gradient(to right, #ff66cc, #9966ff)'  // Pink to purple gradient
    ];

  get backgrounds(): string[] {
    return this._backgrounds;
  }

  selectBackground(bg: string) {
    this.backgroundChange.emit(bg);
  }

  deleteAllNotes() {
    this.sharedService.deletingAllNotes();
  }
}

