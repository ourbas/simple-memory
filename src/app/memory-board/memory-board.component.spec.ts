import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryBoardComponent } from './memory-board.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromStore from '../store/index';

describe('MemoryBoardComponent', () => {
  let component: MemoryBoardComponent;
  let fixture: ComponentFixture<MemoryBoardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MemoryBoardComponent],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [StoreModule.forRoot(fromStore.reducers)],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
