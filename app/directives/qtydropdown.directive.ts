
import {Component, Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: "[qty-dropdown]",
})
export class QTYDropdown implements OnInit{
	initialQuant: any;
	el: ElementRef;
	@Input() qty:any;

  constructor(el:ElementRef) {
  	this.el=el;
  }

  ngOnInit() {
  	(<any>$(this.el.nativeElement)).dropdown({placeholder:`Qty: ${this.qty}`});
  	
  }
}