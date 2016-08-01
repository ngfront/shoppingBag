"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var shoppingBag_component_1 = require('./shoppingBag.component');
require('jquery');
require('semantic');
platform_browser_dynamic_1.bootstrap(shoppingBag_component_1.shoppingBagComponent, [
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map