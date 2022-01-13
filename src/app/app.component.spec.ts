import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  
  it(`should have the title 'Temperature Converter'`, async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const title = component.title;

    expect(title).toEqual('Temperature Converter');
  })
});
