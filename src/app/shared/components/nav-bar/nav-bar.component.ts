import {
  Component,
  booleanAttribute,
  inject,
  input,
  output,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  private router = inject(Router);

  public entered = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
