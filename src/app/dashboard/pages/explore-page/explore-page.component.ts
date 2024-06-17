import { Component } from '@angular/core';
import { SpeakersContentComponent } from '@/app/dashboard/components/speakers-content/speakers-content.component';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [SpeakersContentComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css',
})
export default class ExplorePageComponent {}
