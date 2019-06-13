import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { ListDisplayComponent } from './component/list-display/list-display.component';
import { StringLengthManagePipe } from '../app/pipes/string-length-pipe/string-length-manage.pipe';
import { EmptyValueFilterPipe } from '../app/pipes/empty-value-filter/empty-value-filter.pipe';
import { StringFilterPipe } from './pipes/string-filter.pipe';
import { DropDownMovieComponent } from './component/drop-down-movie/drop-down-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieCardComponent,
    ListDisplayComponent,
    StringLengthManagePipe,
    EmptyValueFilterPipe,
    StringFilterPipe,
    DropDownMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
