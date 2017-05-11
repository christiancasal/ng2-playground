import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-thing',
  templateUrl: './some-thing.component.html',
  styleUrls: ['./some-thing.component.css']
})
export class SomeThingComponent implements OnInit {
    @Input() name: string;

  constructor() { 
  }

  ngOnInit() {
    
  }

}
