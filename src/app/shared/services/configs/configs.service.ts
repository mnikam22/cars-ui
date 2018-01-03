import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class ConfigurationService {

  constructor() { }

  getAPIUrl(){
      return "http://localhost:3030/";
  }

}