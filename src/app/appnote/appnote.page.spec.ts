import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppnotePage } from './appnote.page';

describe('AppnotePage', () => {
  let component: AppnotePage;
  let fixture: ComponentFixture<AppnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppnotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
