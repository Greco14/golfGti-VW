App = {
	init: function(){
		bodyFit= new BodyFit();
		bodyFit.init();

		conoceGolf= new ConoceGolf();
		conoceGolf.init();
	}
	
};

$(function(){
	App.init();

});