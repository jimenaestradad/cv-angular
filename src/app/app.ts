import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
<<<<<<< HEAD
=======
import { About } from './components/about/about';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { References } from './references/references';
import { Certifications } from './components/certifications/certifications';

>>>>>>> origin/main

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [HeaderComponent],
=======
  imports: [
    HeaderComponent,
    About,
    SidebarComponent,
    Experience,
    Education,
    References,
    Certifications
  ],
>>>>>>> origin/main
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
<<<<<<< HEAD
export class App {}
=======
export class App {

  isDark = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
  }

}
>>>>>>> origin/main
