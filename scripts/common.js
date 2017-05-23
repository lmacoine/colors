/*jslint browser:true, white:true, devel:true*/
/*global $*/

(function (){
	"use strict";

	var valeur,
			rainbow,
			colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

	function colorStart () {
		valeur = Math.floor(Math.random() * 6);
		console.log(valeur);
		switch(valeur){//valeur de 0 à 7 qui à été génére par le mathrandom juste en haut
			case 0 ://si c'est 1 alors...
			rainbow.css('background-color', colors[0]);//affiche la valeur du tableau index 0
			break;
			case 1 :
			rainbow.css('background-color', colors[1]);
			break;
			case 2 :
			rainbow.css('background-color', colors[2]);
			break;
			case 3 :
			rainbow.css('background-color', colors[3]);
			break;
			case 4 :
			rainbow.css('background-color', colors[4]);
			break;
			case 5 :
			rainbow.css('background-color', colors[5]);
			break;
			case 6 :
			rainbow.css('background-color', colors[6]);
			break;
			default: //none
			}
		}

	function rainbowStart(){
		$('.rainbow').click(function(){
			// colorStart()
			// console.log("clique !");
			colorStart();
		});
	}

	function initVarJquery(){
		rainbow = $('.rainbow');
	}

	$(document).ready(function () {
		initVarJquery();
		rainbowStart();
	});

}());
