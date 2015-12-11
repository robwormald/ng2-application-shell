import {Component} from 'angular2/core';

@Component({
	selector: 'toast-view',
	template: `
		<aside class="toast-view js-toast-view" [class.toast-view--visible]="visible">{{message}}</aside>
	`
})
export class Toast {
	visible = false;
	show(message){
		this.message = message;
		this.visible = true;
		setTimeout(() => {
			this.visible = false;
		},3000);
	}
}