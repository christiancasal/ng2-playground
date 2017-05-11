import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-some-box',
  templateUrl: './some-box.component.html',
  styleUrls: ['./some-box.component.css']
})
export class SomeBoxComponent implements OnInit {
    @Input() booo:string;

    private x: number;



    public onSubmit(f: NgForm){
      console.log(f.value)
    }
    public yesStill(){
      console.log(this)
    }
  
  //THIS IS BEFORE
  constructor() { 
    //FUNCTIONAL ACTIONS

  }

  //THIS IS JUST BEFORE RENDERING
  ngOnInit() {
  }

}
