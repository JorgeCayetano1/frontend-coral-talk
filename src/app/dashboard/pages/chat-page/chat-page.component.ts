import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { SearchCardComponent } from '@/app/dashboard/components/search-card/search-card.component';
import { ChatItem } from '@/app/dashboard/interfaces/chat-item.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [SearchCardComponent, ReactiveFormsModule],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export default class ChatPageComponent implements OnInit {
  @ViewChild('chatContainer')
  private chatContainer?: ElementRef<HTMLDivElement>;

  private fb = inject(FormBuilder);

  public form = this.fb.group({
    message: ['', Validators.required],
  });

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop =
          this.chatContainer.nativeElement.scrollHeight;
      }
    }, 50);
  }

  ngOnInit(): void {
    this.scrollToBottom();
  }

  public onSendMessage() {
    if (this.form.invalid) return;
    if (this.getChatItem() !== null) {
      this.getChatItem.update((value) => {
        if (
          value === null ||
          this.form.value.message === null ||
          this.form.value.message === undefined
        )
          return null;
        value.message.push({
          message: this.form.value.message,
          time: new Date().toLocaleTimeString('es-PE', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          isMe: true,
        });
        return value;
      });
      // this.getChatItem.update(() => chatItem);
    }
    this.form.reset();
    console.log('Message sent');
    this.scrollToBottom();
  }

  public getChatItem = signal<ChatItem | null>(null);

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
