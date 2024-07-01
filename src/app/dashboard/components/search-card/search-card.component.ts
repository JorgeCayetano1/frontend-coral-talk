import {
  Component,
  OnInit,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { ChatItem } from '@/app/dashboard/interfaces/chat-item.interface';
import { CoralInputComponent } from '@/app/shared/components/coral-input/coral-input.component';
import { LastMessagePipe } from '@/app/dashboard/pipes/last-message.pipe';

@Component({
  selector: 'dashboard-search-card',
  standalone: true,
  imports: [CoralInputComponent, LastMessagePipe],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css',
})
export class SearchCardComponent implements OnInit {
  public selectedItemIndex = signal<number | null>(null);

  public chatItems = input.required<ChatItem[]>();
  public selectedChatItem = output<ChatItem | null>();

  public setSelectedItem(valIndex: number) {
    this.selectedItemIndex.update(() => valIndex);

    this.selectedChatItem.emit(this.chatItems()[valIndex]);
  }

  ngOnInit() {
    this.selectedItemIndex.set(0);
    this.selectedChatItem.emit(this.chatItems()[0]);
  }
}
