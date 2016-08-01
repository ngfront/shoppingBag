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
var fetch_cart_service_1 = require('./services/fetch-cart.service');
var cart_component_1 = require('./components/cart.component');
var billing_component_1 = require('./components/billing.component');
require('rxjs/add/operator/map');
require('rxjs/add/operator/reduce');
var shoppingBagComponent = (function () {
    function shoppingBagComponent(cartService) {
        this.cartService = cartService;
    }
    shoppingBagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.fetchProducts()
            .subscribe(function (data) {
            _this.products = data;
            _this.totalItems = _this.products.length;
            _this.numberOfProducts = _this.products.length;
            _this.calculateDiscount(_this.numberOfProducts);
            _this.subTotal = _this.products
                .map(function (product) { return product.price; })
                .reduce(function (acc, curr) { return acc + curr; });
        });
    };
    shoppingBagComponent.prototype.calculateDiscount = function (noOfProducts) {
        if (noOfProducts == 3) {
            this.discount = 5;
        }
        else if (noOfProducts > 3 && noOfProducts < 10) {
            this.discount = 10;
        }
        else if (noOfProducts > 10) {
            this.discount = 25;
        }
        console.log(noOfProducts, this.discount);
    };
    shoppingBagComponent.prototype.onCartEdit = function (updatedProducts) {
        console.log(updatedProducts);
        this.subTotal = updatedProducts
            .map(function (product) { return product.price * product.quantity; })
            .reduce(function (acc, curr) { return acc + curr; });
        var noOfProducts = updatedProducts
            .map(function (product) { return product.quantity; })
            .reduce(function (acc, curr) { return acc + curr; });
        this.calculateDiscount(noOfProducts);
    };
    shoppingBagComponent = __decorate([
        core_1.Component({
            selector: 'shopping-bag',
            providers: [fetch_cart_service_1.shoppingCartService],
            directives: [cart_component_1.CartComponent, billing_component_1.BillingInfo],
            template: "\n\t\t<div class=\"mobileHead\">\n\t\t\t<h1>Your Shopping Bag</h1>\n\t\t\t<div class=\"count\">{{totalItems}} Items</div>\n\t\t</div>\n\t\t\n\t\t<cart (cartEdit)=\"onCartEdit($event)\" [totalItems]=\"totalItems\" [products]=\"products\"></cart>\n\t\t<billing-info [productSub]=\"subTotal\" [discount]=\"discount\"><billing-info>\n\t"
        }), 
        __metadata('design:paramtypes', [fetch_cart_service_1.shoppingCartService])
    ], shoppingBagComponent);
    return shoppingBagComponent;
}());
exports.shoppingBagComponent = shoppingBagComponent;
//# sourceMappingURL=shoppingBag.component.js.map