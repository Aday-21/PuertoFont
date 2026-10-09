import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFontItemComponent } from './prod-font-item.component';

describe('ProdFontItemComponent', () => {
  let component: ProdFontItemComponent;
  let fixture: ComponentFixture<ProdFontItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdFontItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
