import { Component, signal } from '@angular/core';
import { SpeakersContentComponent } from '@/app/dashboard/components/speakers-content/speakers-content.component';
import { SpeakerContentItem } from '@/app/dashboard/interfaces/speaker-content-item.interface';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [SpeakersContentComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css',
})
export default class ExplorePageComponent {
  public speakerContentItems = signal<SpeakerContentItem[]>([
    {
      header: 'Hablantes nativos de inglés',
      content: [
        {
          profileName: 'John Doe',
          profileBirthdate: '1990-01-01',
          title: 'Hablante nativo de inglés',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quam aperiam rerum! Iste, illum eius obcaecati nam similique explicabo dicta commodi tempore ea, eos perferendis necessitatibus quaerat iusto nisi debitis.',
        },
        {
          profileName: 'Jane Doe',
          profileBirthdate: '1990-01-01',
          title: 'Hablante nativo de inglés',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quam aperiam rerum! Iste, illum eius obcaecati nam similique explicabo dicta commodi tempore ea, eos perferendis necessitatibus quaerat iusto nisi debitis.',
        },
      ],
    },
    {
      header: '¡Encuenta a personas como tú!',
      content: [
        {
          profileName: 'Juan Pérez',
          profileBirthdate: '1990-01-01',
          title: 'Hablante nativo de español',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quam aperiam rerum! Iste, illum eius obcaecati nam similique explicabo dicta commodi tempore ea, eos perferendis necessitatibus quaerat iusto nisi debitis.',
        },
        {
          profileName: 'María Pérez',
          profileBirthdate: '1990-01-01',
          title: 'Hablante nativo de español',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quam aperiam rerum! Iste, illum eius obcaecati nam similique explicabo dicta commodi tempore ea, eos perferendis necessitatibus quaerat iusto nisi debitis.',
        },
      ],
    },
  ]);
}
