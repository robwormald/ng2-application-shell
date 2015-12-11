import {Injectable, Inject} from 'angular2/core';
import {Backend} from './Backend';

@Injectable()
export class AuthService {
	constructor(private backend: Backend){
		
	}
	authenticate(){
		this.backend.authenticate()
	}
}