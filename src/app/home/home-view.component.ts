import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home-view',
  template: `<h3>{{ message }}</h3>
  <div><a href="/test/4">переход на тест</a></div>`
})
export class HomeView {
  public message: string;

}
