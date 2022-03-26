import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionesIsComponent } from './definiciones-is.component';

describe('DefinicionesIsComponent', () => {
  let component: DefinicionesIsComponent;
  let fixture: ComponentFixture<DefinicionesIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionesIsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionesIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
