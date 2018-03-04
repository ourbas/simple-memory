import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCardComponent } from './memory-card.component';

describe('MemoryCardComponent', () => {
  let component: MemoryCardComponent;
  let fixture: ComponentFixture<MemoryCardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MemoryCardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.card = { pos: 5, faceUp: false, pairFounded: false, value: 'Z' };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
