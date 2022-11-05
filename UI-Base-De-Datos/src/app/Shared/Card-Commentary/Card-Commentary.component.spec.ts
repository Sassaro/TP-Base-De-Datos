/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardCommentaryComponent } from './Card-Commentary.component';

describe('CardCommentaryComponent', () => {
  let component: CardCommentaryComponent;
  let fixture: ComponentFixture<CardCommentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCommentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
