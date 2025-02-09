import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  private valueSubject = new BehaviorSubject<number[]>([]);
  value$ = this.valueSubject.asObservable();

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }

  receiveValue(value: number): void {
    const currentValues = this.valueSubject.getValue(); 
    this.valueSubject.next([...currentValues, value]);
  }
}
