/*jslint browser:true, white:true, devel:true*/
/*global $*/

(function (){
	"use strict";

	var rainbow,
		colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

	function colorStart () {
		$('.rainbow').MathFloor(Math.random() * 7){
		switch(ev.click){
			case 1 :
			$color = [0],
			break;
			case 2 :
			$color = [1],
			break;
			case 3 :
			$color = [2],
			break;
			case 4 :
			$color = [3],
			break;
			case 5 :
			$color = [4],
			break;
			case 6 :
			$color = [5],
			break;
			case 7 :
			$color = [6],
			break;
			default;
			}
		}
	}

	function rainbowStart (){
		$('.rainbow')
		.click(function(){
			colorStart()
		})
	}

	$(document).ready(function () {
		rainbowStart();
	});

}());
