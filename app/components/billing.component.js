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
var BillingInfo = (function () {
    function BillingInfo() {
    }
    BillingInfo.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BillingInfo.prototype, "productSub", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BillingInfo.prototype, "discount", void 0);
    BillingInfo = __decorate([
        core_1.Component({
            selector: 'billing-info',
            template: "\n\n\t\t<div class=\"contactBlock\">\n\t<ul>\n\t\t<li class=\"bold\">Need Help<br/> or have Questions</li>\n\t\t<li>Call Customer Care Service at:<br/>1-800-555-5555</li>\n\t\t<li><a href=\"#\">Chat with one of our Advisors</a></li>\n\t\t<li><a href=\"#\">See Return and Exchange Policy</a></li>\n\t</ul>\n\t\n\n</div>\n\n\n\t\t<div class=\"billingBlock\">\n\t<ul>\n\t\t<li class=\"promoBlock\">\n\t\t\t<p>Enter Promotion Code<br/> Or Gift Card</p>\n\t\t\t<input type=\"text\" class=\"pro_code\" />\n\t\t\t<button class=\"apply\">Apply</button>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<label>Subtotal</label>\n\t\t\t<div class=\"value\"><span class=\"currency\">$</span>{{productSub}}</div>\n\t\t</li>\n\n\t\t\t<li>\n\t\t\t<label>Promotion Code JF10 Applied</label>\n\t\t\t<div class=\"value\"><span class=\"metaSymbol\">-</span><span class=\"currency\">$</span>{{discount}}</div>\n\t\t</li>\n\t\t\n\t\t<li class=\"borderMe\">\n\t\t\t<label>\n\t\t\t\t<span class=\"headText\">Estimated Shipping</span>\n\t\t\t\t<span class=\"tagline\">You Qualify for free Shipping<br/> because your order is over $50</span>\n\t\t\t</label>\n\t\t\t<div class=\"value\">Free</div>\n\t\t</li>\n\t\t\n\t\t<li>\n\t\t\t<label>\n\t\t\t\t<span class=\"headText\">Estimated Total</span>\n\t\t\t\t<span class=\"tagline\">Tax will be applied during checkout</span>\n\t\t\t</label>\n\t\t\t<div class=\"value\"><span class=\"currency\">$</span>{{productSub - discount/100}}</div>\n\t\t</li>\n\t</ul>\n\n</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], BillingInfo);
    return BillingInfo;
}());
exports.BillingInfo = BillingInfo;
//# sourceMappingURL=billing.component.js.map