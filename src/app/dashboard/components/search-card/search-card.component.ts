import { Component, input, signal } from '@angular/core';
import { ChatItem } from '@/app/dashboard/interfaces/chat-item.interface';
import { CoralInputComponent } from '@/app/shared/components/coral-input/coral-input.component';

@Component({
  selector: 'dashboard-search-card',
  standalone: true,
  imports: [CoralInputComponent],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css',
})
export class SearchCardComponent {
  public selectedItemIndex = signal<number | null>(null);

  public setSelectedItemIndex(valIndex: number) {
    this.selectedItemIndex.update(() => valIndex);
  }

  public chatItems = input.required<ChatItem[]>();
}
