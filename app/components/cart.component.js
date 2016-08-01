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
var product_image_component_1 = require('./product-image.component');
var product_desc_component_1 = require('./product-desc.component');
var product_size_component_1 = require('./product-size.component');
var product_qty_component_1 = require('./product-qty.component');
var product_price_component_1 = require('./product-price.component');
var size_options_component_1 = require('./size-options.component');
var qty_options_component_1 = require('./qty-options.component');
var color_options_component_1 = require('./color-options.component');
var CartComponent = (function () {
    function CartComponent() {
        this.viewCheck = false;
        this.cartEdit = new core_1.EventEmitter();
        this.modalStatus = false;
        this.updatedProduct = {
            id: null
        };
    }
    CartComponent.prototype.initiateEditModal = function (product) {
        this.modalStatus = true;
        this.productToEdit = product;
        this.updatedProduct.id = this.productToEdit.id;
    };
    CartComponent.prototype.onQtyChange = function (newQty) {
        this.updatedProduct.quantity = newQty;
    };
    CartComponent.prototype.onSizeChange = function (newSize) {
        this.updatedProduct.selected_size = newSize;
    };
    CartComponent.prototype.onColorChange = function (newColor) {
        this.updatedProduct.selected_color = newColor;
    };
    CartComponent.prototype.applyChanges = function (updatedProduct) {
        console.log(this.products);
        updatedProduct = {
            id: this.productToEdit.id,
            selected_color: updatedProduct.selected_color || this.productToEdit.selected_color,
            selected_size: updatedProduct.selected_size || this.productToEdit.selected_size,
            quantity: updatedProduct.quantity || this.productToEdit.quantity
        };
        this.modalStatus = false;
        var productToEdit = this.products.find(function (product) { return product.id == updatedProduct.id; });
        var newProduct = Object.assign({}, productToEdit, {
            quantity: updatedProduct.quantity,
            selected_size: updatedProduct.selected_size,
            selected_color: updatedProduct.selected_color
        });
        this.products = this.products.map(function (product) {
            if (product.id == newProduct.id) {
                return new product_1.Product({
                    img_url: product.img_url,
                    p_id: product.id,
                    p_name: product.name,
                    p_variation: product.variation,
                    p_style: product.style,
                    p_selected_color: newProduct.selected_color,
                    p_selected_size: newProduct.selected_size,
                    p_available_options: product.available_options,
                    p_quantity: newProduct.quantity,
                    p_originalprice: product.org_price,
                    p_price: product.price,
                    c_currency: product.currency
                });
            }
            return product;
        });
        this.cartEdit.emit(this.products);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CartComponent.prototype, "cartEdit", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CartComponent.prototype, "products", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CartComponent.prototype, "totalItems", void 0);
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            directives: [product_image_component_1.ProductImage, product_desc_component_1.ProductDesc, product_size_component_1.ProductSize, product_qty_component_1.ProductQty, product_price_component_1.ProductPrice, size_options_component_1.sizeOptions, qty_options_component_1.QtyOptions, color_options_component_1.ColorOptions],
            templateUrl: 'app/components/cart.tmpl.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map