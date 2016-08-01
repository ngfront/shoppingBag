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
//our root app component
var core_1 = require('@angular/core');
var SMDropdown = (function () {
    function SMDropdown(el) {
        this.el = el;
    }
    SMDropdown.prototype.ngOnInit = function () {
        $(this.el.nativeElement).dropdown({ placeholder: "Size: " + this.selSize });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SMDropdown.prototype, "selSize", void 0);
    SMDropdown = __decorate([
        core_1.Directive({
            selector: "[sm-dropdown]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SMDropdown);
    return SMDropdown;
}());
exports.SMDropdown = SMDropdown;
//# sourceMappingURL=dropdown.directive.js.map