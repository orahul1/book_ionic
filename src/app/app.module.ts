import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BookComponent } from '../pages/Books/book.component';
import { BookService } from './services/book.service';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { AddBook } from '../pages/addbook/addbook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BookComponent,
    TabsPage,
    AboutPage,
    AddBook
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookComponent,
    TabsPage,
    AboutPage,
    AddBook
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BookService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
