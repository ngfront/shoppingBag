"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dropdown_directive_1 = require('../directives/dropdown.directive');
var sizeOptions = (function () {
    function sizeOptions(el) {
        this.sizeChanged = new core_1.EventEmitter();
    }
    sizeOptions.prototype.onChange = function (newSize) {
        console.log('new Size', newSize);
        this.sizeChanged.emit(newSize);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], sizeOptions.prototype, "sizes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], sizeOptions.prototype, "selectedSize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], sizeOptions.prototype, "sizeChanged", void 0);
    sizeOptions = __decorate([
        core_1.Component({
            selector: 'size-options',
            directives: [dropdown_directive_1.SMDropdown],
            template: "\n\n      <select [ngModel]=\"selValue\" sm-dropdown [selSize]=\"selectedSize.code.toUpperCase()\" name=\"selectSize\" (ngModelChange)=\"onChange($event) \"> \n        <option [ngValue]=\"size\" *ngFor=\"let size of sizes\">{{size.name}}</option>\n      </select>\n\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], sizeOptions);
    return sizeOptions;
}());
exports.sizeOptions = sizeOptions;
//# sourceMappingURL=size-options.component.js.map