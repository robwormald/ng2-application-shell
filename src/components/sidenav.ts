import {Component, Directive, Output, Input, EventEmitter, Renderer, ElementRef} from 'angular2/core';
import {App} from '../app/app';
import {Nav} from '../services/Nav';
import {ReplaySubject} from 'rxjs/Rx';

@Directive({
  selector: '[side-nav-content]',
  host: {
    '(transitionend)': 'cleanup()'
  }
})
class SideNavContent {
  @Input() open: boolean;
   
  constructor(private el: ElementRef, private renderer: Renderer){
    
  }
  ngOnChanges(changes:any){
    if(changes.open.currentValue && changes.open.previousValue !== undefined){
      this.setOpen()
    }
    else{
      this.setClosed()
    }
  }
  setOpen(){
    this.renderer.setElementClass(this.el, 'side-nav__content--animatable', true);
    this.renderer.setElementStyle(this.el, 'transform', 'translateX(0px)');
  }
  setClosed(){
    this.renderer.setElementClass(this.el, 'side-nav__content--animatable', true);
    this.renderer.setElementStyle(this.el, 'transform', 'translateX(-102%)');
  }
  cleanup(){
    this.renderer.setElementClass(this.el, 'side-nav__content--animatable', false);
  }
  
}

@Component({
	selector: 'side-nav',
  directives: [SideNavContent],
	template: `
	  <section class="side-nav js-side-nav" [class.side-nav--visible]="isVisible | async" (click)="nav.close()">
  	 <div side-nav-content class="side-nav__content js-side-nav-content" [open]="isVisible | async">
        <div class="side-nav__header">
        <h1 class="side-nav__title">App shell</h1>
      </div>

      <div class="side-nav__body">
        <a role="tab" tabindex="0" class="side-nav__blog-post" href="/">Index</a>
        <a role="tab" tabindex="0" class="side-nav__blog-post" href="/url-1">URL 1</a>
        <a role="tab" tabindex="0" class="side-nav__blog-post" href="/url-2">URL 2</a>
      </div>

      <div class="side-nav__version">Version @VERSION@</div>
    </div>
  </section>
	`
})
export class SideNav {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  isVisible: ReplaySubject<boolean>;
	constructor(public nav: Nav){
    this.isVisible = nav.isOpen;
  }
}