/*
 * Angular
 */
import {Component} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {shoppingBagComponent} from './shoppingBag.component';
import 'jquery';
import 'semantic';
bootstrap(shoppingBagComponent, [
	HTTP_PROVIDERS
]);
