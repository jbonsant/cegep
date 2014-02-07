$(function(){

	/* EXEMPLE DE CLASS EN JAVASCRIPT */
	var Person = function(name) {
	    var name = name;

	    this.getName = function() {
	        return name;
	    };

	    this.alertName = function() {
	        alert("Mon nom est : " + name);
	    };

	    this.setName = function(nom) {
	        name = nom;
	    };


	};

	var Enfant = function(name) {
	    var self = new Person(name + " Junior");

	    self.setChildName = function(nom){
	    	self.setName(nom + " Junior");
	    }
	    return self;
	};
	/***********************************/

	var obj = new Enfant("Alexandre");
	$('p').html(obj.getName());
	obj.setChildName('Marc-Olivier');
	$('p').html(obj.getName());
});