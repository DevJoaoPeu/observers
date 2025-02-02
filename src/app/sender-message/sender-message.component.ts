import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender-message',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sender-message.component.html',
  styleUrl: './sender-message.component.scss'
})
export class SenderMessageComponent {
  message: string = '';

  constructor(private messageService: MessageService) {}

  sendMessage() {
    this.messageService.sendMessage(this.message);
    this.message = '';
  }
}
