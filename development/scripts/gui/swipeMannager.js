SwipeMannager = function(){
	this.settings= {
		isAnimated: false,
		pagesGaleria_golf: 10,
		pageGalStart_golf: 0,

		pagesGaleria_gti: 12,
		pageGalStart_gti: 0,

		pagesHighlights_gti: 5,
		currentpage_Golf: 1,
		currentpage_gti: 1,

		footerSwipe: $('#holdsFooter'),
		swipeGolfHl: $('#equipamiento-section').find('.golfView'),
		swipeGolfHlAll: $('#equipamiento-section').find('.holdImg'),
		swipeGolfHlAll2: $('#equipamiento-section').find('.holdImg2'),

		infoHighAll: $('.highlightInfo'),
		infoHighAll2: $('.highlightInfo2'),

		infoHigh: $('#detalle-in'),
		infoBlue: $('#detalle-in').find('.blueHold'),

		swipeGal_golf: $('#galeria-section').find('.conteiner-hold'),
		swipeGal_gti: $('#galeria-section').find('.conteiner-hold2'),



	
	}

	this.tlFooterSwipeUp = new TimelineLite();
	this.tlFooterSwipeDown = new TimelineLite();
	this.tlHLGolf = new TimelineLite();
	this.tlHLgti = new TimelineLite();
	this.tlHLinfo = new TimelineLite();
	this.tlInfoBlue = new TimelineLite();

	this.tlGal_golf = new TimelineLite();
	this.tlGal_gti = new TimelineLite();
};
SwipeMannager.prototype.init= function(){
	var self = this;
	self.bind();
};
SwipeMannager.prototype.bind= function(){
	var self = this,
		s = self.settings;
		$('#holdsFooter').swipe( {
			triggerOnTouchEnd : true,
			swipeStatus : swipeUpDown,
			allowPageScroll: "vertical"
		});
		$('.swipeDown').on('click', function() {
			self.animations("down-foot");
		});
		$('#equipamiento-section> .golfView').swipe({
			triggerOnTouchEnd : true,
			swipeStatus : swipeStatus2,
			allowPageScroll: "vertical"
		});
		$('#equipamiento-section> .gtiView').swipe({
			triggerOnTouchEnd : true,
			swipeStatus : swipeStatus_gti,
			allowPageScroll: "vertical"
		});
		$('#detalle-in').swipe({
			triggerOnTouchEnd : true,
			swipeStatus : swipeStatus,
			allowPageScroll: "vertical"
		});
	$('#galeria-section').swipe({
			triggerOnTouchEnd : true,
			swipeStatus : swipe_Gal,
			allowPageScroll: "vertical"
		});


	function swipeStatus2(event, phase, direction, distance, fingers){
		if( phase=="move" && (direction=="left" || direction=="right") ){
			var duration=0;
		}

		else if ( phase == "cancel" && direction == "left"){

			 self.animations("right-hightlight");

		}
		else if( phase == "cancel" && direction == "right"){
			self.animations("left-hightlight");
			
		}
		else if ( phase =="end" )
		{
			if (direction == "right"){
				self.animations("left-hightlight");
				 
			}
			else if (direction == "left"){
				self.animations("right-hightlight");

			}
		}
	};
	function swipe_Gal(event, phase, direction, distance, fingers){
		
		if( phase=="move" && (direction=="left" || direction=="right") ){
			var duration=0;
		}
		else if ( phase == "cancel" && direction == "left"){

			 self.animations("left-galeria");

		}
		else if( phase == "cancel" && direction == "right"){
			self.animations("right-galeria");
			
		}
		else if ( phase =="end" )
		{
			if (direction == "right"){
				self.animations("right-galeria");
				 
			}
			else if (direction == "left"){
				self.animations("left-galeria");

			}
		}
	};
	function swipeStatus_gti(event, phase, direction, distance, fingers){
		if( phase=="move" && (direction=="left" || direction=="right") ){
			var duration=0;
		}

		else if ( phase == "cancel" && direction == "left"){

			 self.animations("right-hightlight2");

		}
		else if( phase == "cancel" && direction == "right"){
			self.animations("left-hightlight");
			
		}
		else if ( phase =="end" )
		{
			if (direction == "right"){
				self.animations("left-hightlight");
				 
			}
			else if (direction == "left"){
				self.animations("right-hightlight2");

			}
		}
	};
	function swipeStatus(event, phase, direction, distance, fingers){
		if( phase=="move" && (direction=="left" || direction=="right") ){
			var duration=0;
		}

		else if ( phase == "cancel" && direction == "left"){

			 self.animations("close-hightlight");

		}
		else if( phase == "cancel" && direction == "right"){
			return false
			
		}
		else if ( phase =="end" )
		{
			if (direction == "right"){
				return false
				 
			}
			else if (direction == "left"){
				self.animations("close-hightlight");

			}
		}
	};

	function swipeUpDown(event, phase, direction, distance, fingers){

		if( phase=="move" && (direction=="up" || direction=="down") ){
			var duration=0;
		}

		else if ( phase == "cancel" && direction == "up"){

			self.animations("up-foot");
			s.isAnimated = true;
			return s.isAnimated;
		}
		else if( phase == "cancel" && direction == "donw"){

			self.animations("down-foot");
			s.isAnimated = true;
			return s.isAnimated;
		}
		else if ( phase =="end" )
		{
			if (direction == "down"){
				self.animations('down-foot');
				s.isAnimated = true;
				return s.isAnimated;
			}
			else if (direction == "up"){
				self.animations("up-foot");
					s.isAnimated = true;
					return s.isAnimated;
					}
		}
	};
};
SwipeMannager.prototype.animations= function(action){
	var self = this,
		s = self.settings;
		currentpage_Golf = 1;
	switch (action){
		case "up-foot":

			windowMannager.animations('close-menu');

			self.tlFooterSwipeUp.to(s.footerSwipe,0.25,{
				height: 270,
				ease: Cubic.easeOut,
				onComplete: function (){
					$('.swipeUp').css({display:'none'});
					$('.swipeDown').css({display:'block'});
				}
			});
			break;

		case "down-foot":
			self.tlFooterSwipeDown.to(s.footerSwipe,0.25,{
				height: 100,
				ease: Cubic.easeOut,
				onComplete: function (){
					$('.swipeUp').css({display:'block'});
					$('.swipeDown').css({display:'none'});
				}
			});
			break;

		case "right-hightlight":
				
				s.currentpage_Golf = self.goToPage( s.currentpage_Golf + 1 );

				s.isAnimated = true;

			break;
		case "right-hightlight2":
				
				s.currentpage_gti = self.goToPage_gti( s.currentpage_gti + 1 );

				s.isAnimated = true;

			break;
		case "left-hightlight":
				self.tlInfoBlue.to(s.infoBlue,0.5,{
					left: 0,
					ease: Cubic.easeOut,
				});
				self.tlHLinfo.to(s.infoHigh,0.5,{
					left: 0,
					ease: Cubic.easeOut,
				});

				$('.leftArrow').css({display:'block'});
				$('.rightArrow').css({display:'none'});
				$('#arrowHis').css({display:'none'});
				break;
		case "close-hightlight":
				
				self.tlHLinfo.to(s.infoHigh,0.5,{
					left: '-95%',
					ease: Cubic.easeOut,
				});
				self.tlInfoBlue.to(s.infoBlue,0.5,{
					left: '25%',
					ease: Cubic.easeOut,
				});
				$('#arrowHis').css({display:'block'});
				$('.leftArrow').css({display:'none'});
				$('.rightArrow').css({display:'block'});
			break;

		case "right-galeria":
				s.pageGalStart_golf = self.golf_gal_right( s.pageGalStart_golf + 1 );
				s.pageGalStart_gti = self.gti_gal_right( s.pageGalStart_gti + 1 );

				s.isAnimated = true;
			break;

		case "left-galeria":
				s.pageGalStart_golf = self.golf_gal_right( s.pageGalStart_golf - 1 );
				s.pageGalStart_gti = self.gti_gal_right( s.pageGalStart_gti - 1 );
				s.isAnimated = true;

			break;
	}
};

SwipeMannager.prototype.goToPage = function(page) {
	var self = this,
		s = self.settings;

	if(s.isAnimated){
		return false;
	}
    if (page > s.pagesHighlights_gti-1) {		
        page = 1;

    }
    if(page == 3){
    	$('#swipe-golf-1').css({right: '-100%',zIndex: 2});
    }
    if (page < 1) {
        page = 4;
    }
    s.infoHighAll.css({display:'none'});
    $('#swipe-golf-'+(page + 1)).css({right: '-100%'});
    $('#hightlight-'+page+'-golf').css({display:'block'});
    self.tlHLGolf.to($('#swipe-golf-'+page),1,{
    	right: 0,
    	ease: Cubic.easeOut,
    	onComplete: function(){
    		 s.isAnimated = false;
    		 $('#swipe-golf-'+page).css({zIndex:1});
    		 if(page==1){
    		 	s.swipeGolfHlAll.css({right: '-100%'});
    		 	$('#swipe-golf-'+page).css({right: '0'});
    		 }
    		 $('#swipe-golf-'+(page + 1)).css({zIndex:2});
    	}
    });
    return page;
}
SwipeMannager.prototype.goToPage_gti = function(page) {
	var self = this,
		s = self.settings;

	if(s.isAnimated){
		return false;
	}
    if (page > s.pagesHighlights_gti-1) {		
        page = 1;

    }
    if(page == 3){
    	$('#swipe-gti-1').css({right: '-100%',zIndex: 2});
    }
    if (page < 1) {
        page = 4;
    }
    s.infoHighAll2.css({display:'none'});
    $('#swipe-gti-'+(page + 1)).css({right: '-100%'});
    $('#hightlight-'+page+'-gti').css({display:'block'});
    self.tlHLgti.to($('#swipe-gti-'+page),1,{
    	right: 0,
    	ease: Cubic.easeOut,
    	onComplete: function(){
    		 s.isAnimated = false;
    		 $('#swipe-gti-'+page).css({zIndex:1});
    		 if(page==1){
    		 	s.swipegtiHlAll2.css({right: '-100%'});
    		 	$('#swipe-gti-'+page).css({right: '0'});
    		 }
    		 $('#swipe-gti-'+(page + 1)).css({zIndex:2});
    	}
    });
    return page;
};

SwipeMannager.prototype.golf_gal_right = function(page) {
	var self = this,
		s = self.settings;

	if(s.isAnimated){
		return false;
	}
	if (page > s.pagesGaleria_golf-1) {
		page = s.pagesGaleria_golf-1;

	}
	if (page < 0) {
		page = 0;
	}

  
	self.tlGal_golf.to(s.swipeGal_golf,1,{
		right: -(page*100)+'%',
		ease: Cubic.easeOut,
		onComplete: function(){
			s.isAnimated = false;
			
		}
	});

	return page;
};


SwipeMannager.prototype.gti_gal_right = function(page) {
	var self = this,
		s = self.settings;

	if(s.isAnimated){
		return false;
	}
	if (page > s.pagesGaleria_gti-1) {
		page = s.pagesGaleria_gti-1;

	}

	if (page < 0) {
		page = 0;
	}


	self.tlGal_gti.to(s.swipeGal_gti,1,{
		right: -(page*100)+'%',
		ease: Cubic.easeOut,
		onComplete: function(){
			s.isAnimated = false;
		}
	});

	return page;
};





