/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardReplyComponent } from './Card-Reply.component';

describe('CardReplyComponent', () => {
  let component: CardReplyComponent;
  let fixture: ComponentFixture<CardReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
