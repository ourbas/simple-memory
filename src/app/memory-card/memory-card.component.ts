import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss'],
})
export class MemoryCardComponent implements OnInit {
  @Input() card: Card;

  //  @Output() click: EventEmitter<number>;

  constructor() {}

  ngOnInit() {}
}
