import { Component } from '@angular/core';
@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenu {
  MainMenuItems: string[] = ['Home', 'products', 'sale', 'about', 'contact'];
}
