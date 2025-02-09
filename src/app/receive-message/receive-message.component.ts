import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receive-message',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './receive-message.component.html',
  styleUrl: './receive-message.component.scss'
})
export class ReceiveMessageComponent implements OnInit {
  receivedMessage: string = '';
  receivedValues: number[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.message$.subscribe((message) => {
      this.receivedMessage = message;
    });

    this.messageService.value$.subscribe((values) => {
      this.receivedValues = [...values];
    });
  }
}
