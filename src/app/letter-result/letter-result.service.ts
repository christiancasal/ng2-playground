import { Injectable } from '@angular/core';
import { Result } from './letter-result.model';
import { mockResult } from './letter-result.mock';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResultService {
    dataUrl = './data/letters.json';

    constructor (private http: Http) {}

    getResult() {
        const foo = 'some garbage';

        // return this.http.get(this.dataUrl)
        // .toPromise()
        // .then(response => response.json().data as Result[])
        // let bar: Result ;
        console.log(Result);
        console.log(this.dataUrl);
        console.log(foo);
        return foo;
    }
}
