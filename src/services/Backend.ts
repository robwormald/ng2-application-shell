import Firebase from 'firebase';
import {Injectable} from 'angular2/core';
import {Observable, ReplaySubject, Subject} from 'rxjs/Rx';

export class BackendConfig {
	url: string;
}


@Injectable()
export class Backend {
	authState: ReplaySubject = new ReplaySubject(1);
	ref: Firebase;
	constructor(config: BackendConfig){
		this.ref = new Firebase(config.url);
	}
	authenticate(){
		let authRequest = new Observable(obs => {
			
			this.ref.authWithOAuthPopup('github', (err, res) => {
				if(err){
					obs.error(err);
				}
				else {
					obs.next(res);
				}
			})
			
		});
		
		authRequest.subscribe(this.authState);
		
	}
}