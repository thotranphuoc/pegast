import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.scss'],
})
export class RxjsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.map1();
  }

  map1() {
    let source = from([1, 2, 3, 4, 5, 6]);
    let example = source.pipe(map(val => val + 2));
    example.subscribe(data => console.log(data));
  }
}
