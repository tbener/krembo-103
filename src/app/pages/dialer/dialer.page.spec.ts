import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialerPage } from './dialer.page';

describe('DialerPage', () => {
  let component: DialerPage;
  let fixture: ComponentFixture<DialerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DialerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
