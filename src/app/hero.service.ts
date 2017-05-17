import { Http, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import { Hero } from './models/hero';

import 'rxjs/add/operator/toPromise';

@Injectable()



export class HeroService {
    private heroesUrl = 'api/heroes';

    constructor(private http: Http){}

    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(res => res.json().data as Hero[])
            .catch(this.handleError);
        ;
    }
    getHero(id:number): Promise<Hero> {
        const url = '${this.heroesUrl}/${id}';

        return this.http.get(url)
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    private handleError(error:any): Promise<any>{
        console.error('An error occured',error);
        return Promise.reject(error.message || error);
    }
}