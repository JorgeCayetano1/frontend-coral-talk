import { Component, signal } from '@angular/core';
import { SearchCardComponent } from '@/app/dashboard/components/search-card/search-card.component';
import { ChatItem } from '@/app/dashboard/interfaces/chat-item.interface';

@Component({
  selector: 'app-group-page',
  standalone: true,
  imports: [SearchCardComponent],
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.css',
})
export default class GroupPageComponent {
  public chatItems = signal<ChatItem[]>([
    {
      profileName: 'John Doe',
      profileImage:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
      lastMessage: 'Hello, how are you?',
      status: 'busy',
    },
    {
      profileName: 'Charlie Parra',
      profileImage:
        'https://www.filarmonia.org/image.axd?picture=2016%2f2%2fDSCN5556+-+web.JPG',
      lastMessage: 'Hola, sigo esperando tu mensaje',
      status: 'online',
    },
  ]);
}
