/*jslint browser:true, white:true, devel:true*/
/*global $*/

(function (){
	"use strict";

	var rainbow,
		col = 'rgb(' + (Math.floor(Math.random()*256)) + 
		',' + (Math.floor(Math.random()*256)) + 
		',' + (Math.floor(Math.random()*256)) + ')';

	console.log(col);

	function rainbowStart (){
		$('.rainbow')
		.click(function(){
			var col = 'rgb(' + (Math.floor(Math.random()*256)) + 
			',' + (Math.floor(Math.random()*256)) + 
			',' + (Math.floor(Math.random()*256)) + ')';
			$('.rainbow').css('background-color', col)
		})
	}

	$(document).ready(function () {
		console.log('coucou');
		rainbowStart();
	});

}());
