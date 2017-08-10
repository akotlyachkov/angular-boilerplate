import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'test-view',
  template: `<h2>Тестовый вид</h2>`
})
export class TestView {
  constructor(private route:ActivatedRoute){
    console.log(this.route.snapshot.params.id);
  }

}
