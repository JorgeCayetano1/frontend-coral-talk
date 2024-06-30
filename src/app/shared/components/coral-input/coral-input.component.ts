import { Component, input } from '@angular/core';

@Component({
  selector: 'coral-input',
  standalone: true,
  imports: [],
  template: `
    <label
      class="flex flex-row p-3 pl-4 space-x-2 items-center rounded-md border-solid border border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-colors duration-150 ease-in-out"
      [class]="inputClass()"
    >
      <ng-content></ng-content>
      <input
        [type]="inputType()"
        [placeholder]="inputPlaceholder()"
        [autocomplete]="inputAutocomplete()"
        class="w-full border-0 p-0 m-0 focus:outline-none focus:shadow-none"
      />
    </label>
  `,
})
export class CoralInputComponent {
  public inputType = input<string>('text');
  public inputPlaceholder = input<string>('');
  public inputAutocomplete = input<string>('off');
  public inputClass = input<string>('');
}
