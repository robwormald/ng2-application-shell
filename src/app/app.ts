import {Component} from 'angular2/core';
import {AuthService} from '../services/Auth';
import {Nav} from '../services/Nav';
import {Backend, BackendConfig} from '../services/Backend';

import {AppHeader} from '../components/header';
import {SideNav} from '../components/sidenav';
import {Toast} from '../components/toast';

@Component({
	selector: 'app',
	providers: [Nav],
	directives: [AppHeader, SideNav, Toast],
	template: `
		<app-header class="header"></app-header>
		<main class="main js-global-main" aria-role="main">
			<div class="card">
				<h1>Hello World</h1>
				<h3>{{(backend.authState | async) | json }}</h3>
				<button (click)="authenticate()">Login</button>
				<button (click)="nav.open()">Open</button>
				<button (click)="nav.close()">Close</button>
				<input type="text" #toastmessage placeholder="enter a toast message" /><button (click)="toast.show(toastmessage.value)">Show Toast</button>
			</div>
		</main>
		<toast-view #toast></toast-view>
		<side-nav></side-nav>`
})
export class App {
	constructor(public backend: Backend, public nav: Nav){
		
	}
	
	authenticate(){
		this.backend.authenticate()
	}
	showToast(message){}
}