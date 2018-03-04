import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as fromStore from '../store/index';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.scss'],
})
export class MemoryBoardComponent implements OnInit {
  cards$: Observable<Card[]>;
  initialized$: Observable<boolean>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.getMemoryBoard);
    this.store.select(fromStore.getMemoryBoard).subscribe(c => console.log(c));
    this.initialized$ = this.store.select(fromStore.getMemoryInitialized);
    this.store.dispatch(new fromStore.InitGame());
  }
}
