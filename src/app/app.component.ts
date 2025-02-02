import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { ReceiveMessageComponent } from './receive-message/receive-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SenderMessageComponent,
    ReceiveMessageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'observers';
}
