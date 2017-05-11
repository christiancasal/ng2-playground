import { Component, OnInit } from '@angular/core';
import { Result } from './letter-result.model';
import { ResultService } from  './letter-result.service';

@Component({
  selector: 'app-letter-result',
  templateUrl: './letter-result.component.html',
  styleUrls: ['./letter-result.component.css'],
  providers: [ResultService]
}
)
export class LetterResultComponent implements OnInit {

  private result;

  public getResult(){
    this.result = this.resultService.getResult()
  }

  constructor(private resultService: ResultService) {

  }

  ngOnInit() {
  }

}
