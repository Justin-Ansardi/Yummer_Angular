import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreation } from './recipe-creation';

describe('RecipeCreation', () => {
  let component: RecipeCreation;
  let fixture: ComponentFixture<RecipeCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCreation],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
