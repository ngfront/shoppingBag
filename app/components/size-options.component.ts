import { Component, Input, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import {SMDropdown} from '../directives/dropdown.directive';

@Component({
	selector:'size-options',
	directives:[SMDropdown],
	template: `

      <select [ngModel]="selValue" sm-dropdown [selSize]="selectedSize.code.toUpperCase()" name="selectSize" (ngModelChange)="onChange($event) "> 
        <option [ngValue]="size" *ngFor="let size of sizes">{{size.name}}</option>
      </select>

	`
})
export class sizeOptions {

	@Input() sizes:any;
	@Input() selectedSize:any;
	@Output() sizeChanged: EventEmitter<any>;

	constructor(el: ElementRef) {
		this.sizeChanged = new EventEmitter<any>();
	}

	onChange(newSize) {
		console.log('new Size', newSize);
		this.sizeChanged.emit(newSize);
	}
}