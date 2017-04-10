import { Component } from '@angular/core';

import { BookComponent } from '../Books/book.component';
import { AboutPage } from '../about/about';
import { AddBook } from '../addbook/addbook';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BookComponent;
  tab2Root: any = AboutPage;
  tab3Root: any = AddBook;

  constructor() {

  }
}
