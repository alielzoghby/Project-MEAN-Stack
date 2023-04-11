import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddauthorsComponent } from './addauthors.component';

describe('AddauthorsComponent', () => {
  let component: AddauthorsComponent;
  let fixture: ComponentFixture<AddauthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddauthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
