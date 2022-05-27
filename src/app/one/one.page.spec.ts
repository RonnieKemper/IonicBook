import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { onePage } from './one.page';

describe('onePage', () => {
  let component: onePage;
  let fixture: ComponentFixture<onePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [onePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(onePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
