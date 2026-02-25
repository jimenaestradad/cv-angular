import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { About } from './components/about/about';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { References } from './references/references';
import { Certifications } from './components/certifications/certifications';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    About,
    SidebarComponent,
    Experience,
    Education,
    References,
    Certifications
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  isDark = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
  }

}
