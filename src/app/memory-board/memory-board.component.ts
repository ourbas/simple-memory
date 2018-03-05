import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../store/index';
import { Card } from '../models/card.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.scss'],
})
export class MemoryBoardComponent implements OnInit {
  cards$: Observable<Card[]> = Observable.of([]);
  initialized$: Observable<boolean>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.cards$.subscribe(c => console.log(c));
    this.cards$ = this.store.select(fromStore.getMemoryBoard);
    this.initialized$ = this.store.select(fromStore.getMemoryInitialized);
    this.store.dispatch(new fromStore.InitGame());
  }

  cardSelected(pos: number) {
    // this.store.dispatch(new fromStore.CardSelected(pos));
  }
}
