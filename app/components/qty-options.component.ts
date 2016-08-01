import { Component, Input, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import {QTYDropdown} from '../directives/qtydropdown.directive';

@Component({
	selector:'quantity-options',
	directives:[QTYDropdown],
	template: `
      <select qty-dropdown [qty]="qtySelected" (change)="onChange($event.target.value)"> 
        <option *ngFor="let quant of availableQuant" [attr.value]="quant">{{quant}}</option>
      </select>
	`
})
export class QtyOptions implements OnInit {

	@Input() qtySelected:any;
	@Output() qtyChanged: EventEmitter<any>;

	currentQuantity: any;

	availableQuant:Array<number> = [this.qtySelected];


	constructor(el: ElementRef) {

		this.qtyChanged = new EventEmitter<any>();
	}

	ngOnInit() {
		console.log(this.qtySelected);
		this.availableQuant = [this.qtySelected];
		for(let i = 2; i<=10; i++) {
			this.availableQuant.push(i);
		}
		this.currentQuantity = this.qtySelected;
	}

	onChange(newQuant) {
		this.qtyChanged.emit(newQuant);
	}
}