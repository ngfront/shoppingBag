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
var product_1 = require('../models/product');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var shoppingCartService = (function () {
    function shoppingCartService(http) {
        this.http = http;
    }
    shoppingCartService.prototype.fetchProducts = function () {
        var data_fetched = this.http.get('../app/data/product-feed.json')
            .map(function (response) {
            return (response.json()).productsInCart
                .map(function (product) {
                return new product_1.Product(product);
            });
        });
        return data_fetched;
    };
    shoppingCartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], shoppingCartService);
    return shoppingCartService;
}());
exports.shoppingCartService = shoppingCartService;
//# sourceMappingURL=fetch-cart.service.js.map