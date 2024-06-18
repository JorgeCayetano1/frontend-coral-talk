import { Component, computed, input, signal } from '@angular/core';
import {
  ContentItem,
  SpeakerContentItem,
} from '@/app/dashboard/interfaces/speaker-content-item.interface';

@Component({
  selector: 'dashboard-speakers-content',
  standalone: true,
  imports: [],
  templateUrl: './speakers-content.component.html',
  styleUrl: './speakers-content.component.css',
})
export class SpeakersContentComponent {
  public speakerContentItems = input.required<SpeakerContentItem[]>();

  public contentItems = computed(() => {
    return this.speakerContentItems()
      .map((item) => item.content)
      .flat();
  });
}
