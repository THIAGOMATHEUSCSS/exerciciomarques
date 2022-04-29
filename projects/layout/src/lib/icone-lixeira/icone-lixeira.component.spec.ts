import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeLixeiraComponent } from './icone-lixeira.component';

describe('IconeLixeiraComponent', () => {
  let component: IconeLixeiraComponent;
  let fixture: ComponentFixture<IconeLixeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconeLixeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconeLixeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
