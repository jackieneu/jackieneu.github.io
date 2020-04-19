import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopBarComponent,
    BottomBarComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ PhotoModalComponent ]
})
export class AppModule { }
