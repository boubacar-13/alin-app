import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
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
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'T3 spacieux dans le 95',
    city: 'Ermont Eaubonne',
    state: "Val d'Oise",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 9,
    wifi: true,
    laundry: false,
  };
}
