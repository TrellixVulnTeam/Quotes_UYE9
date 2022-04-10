import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MediaComponent } from './media/media.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightsDirective } from './highlights.directive';
import { TimeElaspedPipe } from './time-elasped.pipe';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MediaComponent,
    HomeComponent,
    QuoteComponent,
    HighlightsDirective,
    TimeElaspedPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
