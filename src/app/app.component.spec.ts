import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent, ToggleSwitchComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have fan speed as zero on start up'0'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fanState.speed).toEqual(0);
    expect(app.fanState.state).toEqual("Stopped");
  });

  it(`should have fan direction as forward`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fanState.reverse).toEqual(false);
  });

  it('should increase speed on clicking Speed button', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const serviceSpy = spyOn(app.fanService, 'updateFanState').and.returnValue(of(app.fanState));
    fixture.detectChanges();
    expect(app.fanState.speed).toEqual(0);
    const compiled = fixture.nativeElement as HTMLElement;
    const speedBtn = compiled.querySelector('#speed') as HTMLElement;
    speedBtn?.click();
    expect(app.fanState.speed).toEqual(1);
    expect(serviceSpy).toHaveBeenCalled();
  }));

  it(`should clear error message on reset`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.errorMessage = "Error";
    app.reset();
    expect(app.errorMessage).toBeFalsy();
  });
});
