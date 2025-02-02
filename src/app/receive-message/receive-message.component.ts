import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-receive-message',
  standalone: true,
  imports: [],
  templateUrl: './receive-message.component.html',
  styleUrl: './receive-message.component.scss'
})
export class ReceiveMessageComponent implements OnInit {
  receivedMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.message$.subscribe((message) => {
      this.receivedMessage = message;
    });
  }
}
