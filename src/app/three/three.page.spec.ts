import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { threePage } from './three.page';

describe('threePage', () => {
  let component: threePage;
  let fixture: ComponentFixture<threePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [threePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(threePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
