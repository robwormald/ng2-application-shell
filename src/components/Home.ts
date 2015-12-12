import {Component} from 'angular2/core';
import {Nav} from '../services/Nav';

@Component({
	selector: 'home',
	template: `
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>
		<div class="card">
			<h1>Hello World</h1>
			<button (click)="nav.open()">Open</button>
			<button (click)="nav.close()">Close</button>
		</div>

	`
})
export class Home {
	constructor(private nav: Nav){

	}
	openSideNav(){
		this.nav.open()
	}
}