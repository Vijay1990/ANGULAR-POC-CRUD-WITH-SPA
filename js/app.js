/*
* app.js : This file splits Controllers, Directives, Filters, Services, Factories as Modules. 
*			All the splitted Modules are bound together to achieve loosely coupled architecture.
*/

var angularExtLibraries = angular.module('angularExtLibraries',['ngRoute','ngAnimate']);

var angularControllers = angular.module('angularControllers',['angularExtLibraries']);

var angularDirectives = angular.module('angularDirectives',[]);

var angularFilters = angular.module('angularFilters',[]);

var angularServices = angular.module('angularServices',[]);

var angularFactories = angular.module('angularFactories',[]);

var ContactApp = angular.module('ContactApp',['angularExtLibraries', 'angularControllers', 'angularFilters', 'angularServices', 'angularFactories', 'angularDirectives']);

