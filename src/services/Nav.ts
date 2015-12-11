import {Injectable} from 'angular2/core';
import {Observable, ReplaySubject, Subject} from 'rxjs/Rx';

@Injectable()
export class Nav {
	isOpen: ReplaySubject<boolean> = new ReplaySubject(1);
	
	open(){
		this.isOpen.next(true);
	}
	close(){
		this.isOpen.next(false);
	}
	toggle(){
		this.isOpen.map(open => !open).take(1).subscribe(this.isOpen);
	}
}