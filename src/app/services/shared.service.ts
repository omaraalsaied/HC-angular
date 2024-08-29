import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  notesDeletedSubject = new BehaviorSubject<boolean>(false);
  deletingNotes = this.notesDeletedSubject.asObservable();

  deletingAllNotes() {
    this.notesDeletedSubject.next(true);
  }
}
