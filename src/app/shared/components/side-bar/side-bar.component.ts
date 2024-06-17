import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {}
