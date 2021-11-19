import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecordsService } from './records.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { AllRecordsComponent } from './all-records/all-records.component';
import { RecordsEditComponent } from './all-records/records-edit/records-edit.component';
import { RecordsListComponent } from './all-records/records-list/records-list.component';
import { RecordsNavComponent } from './all-records/records-nav/records-nav.component';
import { PopupComponent } from './popup/popup.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewRecordComponent },
  { path: 'all', component: AllRecordsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewRecordComponent,
    AllRecordsComponent,
    RecordsEditComponent,
    RecordsListComponent,
    RecordsNavComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [RecordsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
