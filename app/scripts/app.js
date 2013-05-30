/*global define */
define(['jquery'], function ($) {
    'use strict';

    var container = document.querySelector('#container');
	var pckry = new Packery( container, {
	  // options
 		gutter: 10,
 		itemSelector: '.item'
	});

	

    return pckry;
});