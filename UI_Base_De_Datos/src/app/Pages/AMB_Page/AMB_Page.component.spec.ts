/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { AMB_PageComponent } from './AMB_Page.component'

describe('AMB_PageComponent', () => {
  let component: AMB_PageComponent
  let fixture: ComponentFixture<AMB_PageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMB_PageComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AMB_PageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
