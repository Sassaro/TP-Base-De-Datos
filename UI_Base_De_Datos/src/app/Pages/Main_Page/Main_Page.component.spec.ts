/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main_PageComponent } from './Main_Page.component';

describe('Main_PageComponent', () => {
  let component: Main_PageComponent;
  let fixture: ComponentFixture<Main_PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main_PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main_PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
