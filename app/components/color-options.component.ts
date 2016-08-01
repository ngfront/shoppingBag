import { Component, Input, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
	selector:'color-options',
	
	template: `
		<span class="color_value">{{selectedColor.name}}</span>
		<ul class="colorOptions">
			<li *ngFor="let color of availableColors" [style.background]="color.hexcode" (click)="onChange(color)" [class.selected]="color.hexcode == selectedColor.hexcode"></li>
		</ul>

	`
})
export class ColorOptions implements OnInit {

	@Input() colorOptions:any;
	@Input() selectedColor:any;
	@Output() colorChanged: EventEmitter<any>;
	availableColors:Array<any> = [];



	constructor(el: ElementRef) {
		this.colorChanged = new EventEmitter<any>();
	}
	ngOnInit() {
		
		this.availableColors = this.availableColors.concat(...this.colorOptions, this.selectedColor);
	
	}

	onChange(newColor) {
		this.selectedColor = newColor;
		this.colorChanged.emit(newColor);
	}
}