import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoryCardComponent implements OnInit {
  @Input() card: Card;

  @Output() select: EventEmitter<number>;

  constructor() {}

  ngOnInit() {}

  onClick(pos: number) {
    this.select.emit(pos);
  }
}
