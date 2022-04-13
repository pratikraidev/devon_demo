import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ServesModule } from './server-module/servers.module';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ServesModule,
        SharedModule,
        MaterialModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: LocationStrategy, useClass: MockLocationStrategy }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as footerTitle 'Devon Assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.footerTitle).toEqual('Devon Assignment');
  });

  it(`should have as headerTitle 'Servers List'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.headerTitle).toEqual('Servers List');
  });

  it('should render footer title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#app-footer')?.textContent).toContain('Devon Assignment');
  });

  it('should render header title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#app-header')?.textContent).toContain('Servers List');
  });
});
