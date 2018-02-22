import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpeedComponent } from './main/speed/app.component';
import { SearchComponent } from './main/search/app.component';
import { TabsComponent } from './main/tabs/app.component';
import { BriefCaseComponent } from './main/briefcase/app.component';
import { DatabaseComponent } from './main/database/app.component';
import { UploadComponent } from './main/upload/app.component';

const routes: Routes = [
  { path: 'speed', component: SpeedComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'briefcase', component: BriefCaseComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
