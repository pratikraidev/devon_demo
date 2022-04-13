import { LocationStrategy } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { MockLocationStrategy } from '@angular/common/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MaterialModule ],
      providers: [{ provide: LocationStrategy, useClass: MockLocationStrategy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
