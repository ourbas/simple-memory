import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { MemoryBoardComponent } from './memory-board/memory-board.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';

import * as fromStore from './store';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, MemoryBoardComponent, MemoryCardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot(fromStore.reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
