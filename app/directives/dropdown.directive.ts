//our root app component
import {Component, Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: "[sm-dropdown]"
})
export class SMDropdown implements OnInit {
@Input() selSize:any;
el:any;
  constructor(el: ElementRef) {
  	this.el = el;

    
  }

  ngOnInit() {
	(<any>$(this.el.nativeElement)).dropdown({placeholder:`Size: ${this.selSize}`});
  }
}