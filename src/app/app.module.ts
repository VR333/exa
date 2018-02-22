import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.component';
import { HeaderBookmarkComponent } from './header/bookmark/app.component';
import { NavigationComponent } from './navigation/app.component';

import { NavigationMenuService } from './services/NavigationMenuService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBookmarkComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavigationMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
