App = {
	init: function(){
		bodyFit= new BodyFit();
		bodyFit.init();

		conoceGolf= new ConoceGolf();
		conoceGolf.init();

		windowMannager= new WindowMannager();
		windowMannager.init();
		
		swipeMannager= new SwipeMannager();
		swipeMannager.init();
	}
	
};

$(function(){
	App.init();
});