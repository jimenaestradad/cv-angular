import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  greeting: string = '';
  firstName = "Jimena";
  lastName = "Estrada";
  title = "Secretaria Bilingüe";

  constructor() {
    this.setGreeting();
  }

  setGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      this.greeting = 'Good morning/Buenos días';
    } else if (hour >= 12 && hour < 19) {
      this.greeting = 'Good afternoon/Buenas tardes';
    } else {
      this.greeting = 'Good night/Buenas noches';
    }
  }

  downloadCV() {
    alert("Descargando CV...");
  }
}
