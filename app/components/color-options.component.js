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
var ColorOptions = (function () {
    function ColorOptions(el) {
        this.availableColors = [];
        this.colorChanged = new core_1.EventEmitter();
    }
    ColorOptions.prototype.ngOnInit = function () {
        this.availableColors = (_a = this.availableColors).concat.apply(_a, this.colorOptions.concat([this.selectedColor]));
        var _a;
    };
    ColorOptions.prototype.onChange = function (newColor) {
        this.selectedColor = newColor;
        this.colorChanged.emit(newColor);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColorOptions.prototype, "colorOptions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColorOptions.prototype, "selectedColor", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ColorOptions.prototype, "colorChanged", void 0);
    ColorOptions = __decorate([
        core_1.Component({
            selector: 'color-options',
            template: "\n\t\t<span class=\"color_value\">{{selectedColor.name}}</span>\n\t\t<ul class=\"colorOptions\">\n\t\t\t<li *ngFor=\"let color of availableColors\" [style.background]=\"color.hexcode\" (click)=\"onChange(color)\" [class.selected]=\"color.hexcode == selectedColor.hexcode\"></li>\n\t\t</ul>\n\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ColorOptions);
    return ColorOptions;
}());
exports.ColorOptions = ColorOptions;
//# sourceMappingURL=color-options.component.js.map