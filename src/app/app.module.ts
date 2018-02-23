import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/app.component';
import { HeaderBookmarkComponent } from './header/bookmark/app.component';
import { NavigationComponent } from './navigation/app.component';
import { MenuComponent } from './menu/app.component';
import { MainContentComponent } from './main/app.component';

import { SpeedComponent } from './main/speed/app.component';
import { SearchComponent } from './main/search/app.component';
import { TabsComponent } from './main/tabs/app.component';
import { BriefCaseComponent } from './main/briefcase/app.component';
import { DatabaseComponent } from './main/database/app.component';
import { UploadComponent } from './main/upload/app.component';

import { NavigationButtonClick } from './services/NavigationButtonClick';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBookmarkComponent,
    NavigationComponent,
    MenuComponent,
    MainContentComponent,
    SpeedComponent,
    SearchComponent,
    TabsComponent,
    BriefCaseComponent,
    DatabaseComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NavigationButtonClick],
  bootstrap: [AppComponent]
})
export class AppModule { }
