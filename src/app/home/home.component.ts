import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input
          type="text"
          placeholder="Filter by city..."
          style="border: 1px black solid;"
        />
        <button class="primary" type="button" style="background: mediumpurple;">
          Chercher
        </button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
