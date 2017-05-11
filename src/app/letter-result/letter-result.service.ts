import { Injectable } from '@angular/core';
import { Result } from './letter-result.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class ResultService{
    getResult(){
        let foo = "some garbage";
        return foo;
    }
}
