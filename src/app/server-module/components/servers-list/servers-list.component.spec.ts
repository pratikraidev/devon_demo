import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { ServersListComponent } from './servers-list.component';

describe('ServersListComponent', () => {
  let component: ServersListComponent;
  let fixture: ComponentFixture<ServersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersListComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
      ],
      providers: [{ provide: LocationStrategy, useClass: MockLocationStrategy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersListComponent);
    component = fixture.componentInstance;
    component.filterForm.get('ram')?.patchValue(['1']);
    component.filterForm.get('hdd')?.patchValue(['']);
    component.filterForm.get('range')?.patchValue(['1','2']);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
    expect(component.isOpen).toBe(false);
  });

  it('should open filter', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('#fab-filter-btn');
    button.click();
    tick();
    expect(component.isOpen).toBe(true)
  }));
});
