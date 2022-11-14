import { DateFilterComponent } from './Shared/Date-Filter/Date-Filter.component';
import { DateFilterPipe } from './Pipes/Date-Filter.pipe';
import { ContentCardComponent } from './Shared/Content-Card/Content-Card.component';
import { ContentPageComponent } from './Pages/Content-Page/Content-Page.component';
import { AddReplyComponent } from './Shared/Add-Reply/Add-Reply.component';
import { CardReplyComponent } from './Shared/Card-Reply/Card-Reply.component';
import { CardCommentaryComponent } from './Shared/Card-Commentary/Card-Commentary.component';
import { HeaderComponent } from './Shared/Header/Header.component';
import { FooterComponent } from './Shared/Footer/Footer.component';

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AMB_PageComponent } from './Pages/AMB_Page/AMB_Page.component'
import { Main_PageComponent } from './Pages/Main_Page/Main_Page.component'
import { Report_PageComponent } from './Pages/Report_Page/Report_Page.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReportTableComponent } from './Shared/Report-Table/Report-Table.component';
import { Error_CardComponent } from './Shared/Error_Card/Error_Card.component';

@NgModule({
  declarations: [
    AppComponent,
    Main_PageComponent,
    AMB_PageComponent,
    Report_PageComponent,
    FooterComponent,
    HeaderComponent,
    CardCommentaryComponent,
    CardReplyComponent,
    AddReplyComponent,
    ContentPageComponent,
    ContentCardComponent,
    DateFilterComponent,
    DateFilterPipe,
    ReportTableComponent,
    Error_CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
