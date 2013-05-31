/*global define */
define(['jquery'], function ($) {
    'use strict';
   
    var container = document.querySelector('#container');
	var pckry = new Packery( container, {
		gutter:10,
		itemSelector:'.item'
	});

	$('.item').click(function(){
		$('#container').addClass('mymodal');
	});



	return pckry;
});