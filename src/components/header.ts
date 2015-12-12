import {Component} from 'angular2/core';
import {Nav} from '../services/Nav';

@Component({
	selector: 'app-header',
	template: `
		<img role="tab" class="header__menu js-toggle-menu" src="/images/ic_menu_24px.svg" alt="toggle_nav" (click)="openSideNav()"/>

		<h1 class="header__title">NG2 App Shell</h1>
	`
})
export class AppHeader {
	constructor(private nav: Nav){
		
	}
	openSideNav(){
		this.nav.open()
	}
}