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
  cards$: Observable<Card[]>;
  initialized$: Observable<boolean>;

  revealedCards: Card[];

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.getAllCards);
    this.initialized$ = this.store.select(fromStore.getMemoryInitialized);

    this.store
      .select(fromStore.getRevealedCardsDetails)
      .subscribe(rc => (this.revealedCards = rc));

    this.store.dispatch(new fromStore.InitGame());
  }

  onSelect(event: Card) {
    // TODO Move to Effect

    if (this.revealedCards.length === 2) {
      // RESET pair that doesn't match
      this.store.dispatch(
        new fromStore.ResetCards(this.revealedCards.map(c => c.pos))
      );
    } else if (
      this.revealedCards.length === 1 &&
      this.revealedCards.filter(c => c.value === event.value).length > 0
    ) {
      // Pair founded!
      this.store.dispatch(
        new fromStore.RevealPair([
          ...this.revealedCards.map(c => c.pos),
          event.pos,
        ])
      );
    } else {
      // Reveal a card
      this.store.dispatch(new fromStore.RevealCard(event.pos));
    }
  }
}
