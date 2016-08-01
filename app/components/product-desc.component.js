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
var ProductDesc = (function () {
    function ProductDesc() {
        this.edit = new core_1.EventEmitter();
    }
    ProductDesc.prototype.toEdit = function (product) {
        this.edit.emit(product);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductDesc.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductDesc.prototype, "edit", void 0);
    ProductDesc = __decorate([
        core_1.Component({
            selector: 'product-desc',
            template: "\n\t\t<div class=\"headline_area\">\n\t\t\t<h2>{{product.name}}</h2>\n\t\t\t<div class=\"meta\">\n\t\t\t\t<span class=\"style_no\">Style#: {{product.style}}</span>\n\t\t\t\t<span class=\"color\">Color: {{product.selected_color.name}}</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"action_area\">\n\t\t<ul>\n\t\t\t<li (click)=\"toEdit(product)\">Edit</li>\n\t\t\t<li>x Remove</li>\n\t\t\t<li>Save For Later</li>\n\t\t</ul>\n\t\t</div> \n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDesc);
    return ProductDesc;
}());
exports.ProductDesc = ProductDesc;
//# sourceMappingURL=product-desc.component.js.map