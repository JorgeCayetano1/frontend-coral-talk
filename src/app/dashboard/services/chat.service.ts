import { Injectable, signal } from '@angular/core';
import { ChatItem } from '@/app/dashboard/interfaces/chat-item.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {}

  public chatItems = signal<ChatItem[]>([
    {
      profileName: 'John Doe',
      profileImage:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
      message: [
        {
          message: 'Hola, ¿cómo estás?',
          time: '10:00 a. m.',
          isMe: true,
        },
        {
          message: 'Hola, Buen día',
          time: '10:01 a. m.',
          isMe: false,
        },
      ],
      status: 'Ocupado',
    },
    {
      profileName: 'Charlie Parra',
      profileImage:
        'https://www.filarmonia.org/image.axd?picture=2016%2f2%2fDSCN5556+-+web.JPG',
      message: [
        {
          message: 'Hola, ¿cómo estás?',
          time: '10:00 a. m.',
          isMe: true,
        },
        {
          message: 'Hola, sigo esperando tu mensaje',
          time: '10:01 a. m.',
          isMe: false,
        },
      ],
      status: 'En línea',
    },
  ]);
}
