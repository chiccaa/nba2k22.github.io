//
$(document).ready(function() {

	// Domain Subfolder Name
	var $subfolder_name = 'nba2k20';

	// Human Verification Timer
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds

	// Panel Titles
	var $panel_title_generator = 'NBA2k19 Generator';
	var $panel_title_activity = 'Recent Activity';
	var $panel_title_chat = 'Live Chat';

	// Console Messages
	var $console_message_VC = 'VC';
	var $console_message_1 = 'Loading generator files...';
	var $console_message_2 = 'Extracting generator files...';
	var $console_message_3 = 'Connecting to proxy server...';
	var $console_message_4 = 'Establishing connection with game database...';
	var $console_message_5 = 'Searching for username';
	var $console_message_6 = 'Succesfully connected to username';
	var $console_message_7 = 'Preparing to generate NBA 2k19 VC';
	var $console_message_8 = 'Generating';
	var $console_message_9 = 'Succesfully generated';
	var $console_message_10 = 'Cleaning up injection traces';
	var $console_message_11 = 'Performing automatic human verification';
	var $console_message_12 = 'Automatic human verification failed';
	var $console_message_13 = 'Manual verification required';

	// Resource 1 Values
	var resource_1_value_min = 250000;
	var resource_1_value_max = 1000000;
	var $resource_1_value_1 = '250000';
	var $resource_1_value_2 = '500000';
	var $resource_1_value_3 = '750000';
	var $resource_1_value_4 = '1000000';

	// Resource 2 Values
	var resource_2_value_min = 250000;
	var resource_2_value_max = 1000000;
	var $resource_2_value_1 = '250000';
	var $resource_2_value_2 = '500000';
	var $resource_2_value_3 = '750000';
	var $resource_2_value_4 = '1000000';


	
    // Consoles 3d 

	  $('input').click(function() {
		$('input:not(:checked)').parent().removeClass("checked");
		$('input:checked').parent().addClass("checked");
		
	  });

    // 

// proceed btn
$.fn.extend({
	animateCss: function(animationName, callback) {
	  var animationEnd = (function(el) {
		var animations = {
		  animation: 'animationend',
		  OAnimation: 'oAnimationEnd',
		  MozAnimation: 'mozAnimationEnd',
		  WebkitAnimation: 'webkitAnimationEnd',
		};

		for (var t in animations) {
		  if (el.style[t] !== undefined) {
			return animations[t];
		  }
		}
	  })(document.createElement('div'));

	  this.addClass('animated ' + animationName).one(animationEnd, function() {
		$(this).removeClass('animated ' + animationName);

		if (typeof callback === 'function') callback();
	  });

	  return this;
	},
  });

  







// 

setTimeout(function() { vcpick(); }, 0);
var $selected_vc = '';


function vcpick() {

  setTimeout(function() { vcpick(); }, 1);


  if( $("#checkmark11").css('opacity') == '1') {

	  $selected_vc = '200000';
	  document.getElementById("firstresource").src = "./img/250K.png";
	  document.getElementById("myprize").src = "./img/250K.png";
 
	}

  else if( $("#checkmark22").css('opacity') == '1') {

	  $selected_vc = '450000';
	  document.getElementById("firstresource").src = "./img/500K.png";
	  document.getElementById("myprize").src = "./img/500K.png";


  }
  else if( $("#checkmark33").css('opacity') == '1') {

	  $selected_vc = '750000';
	  document.getElementById("firstresource").src = "./img/750K.png";
	  document.getElementById("myprize").src = "./img/750K.png";


  }
  else if( $("#checkmark44").css('opacity') == '1') {

	  $selected_vc = '1000000';
	  document.getElementById("firstresource").src = "./img/1KK.png";
	  document.getElementById("myprize").src = "./img/1KK.png";


  }

  
  
  
  
  
  else {
	  $selected_vc = '';

  }

  
}



// 









  setTimeout(function() { consolepick(); }, 1);

  var $selected_platform = '';
  function consolepick() {
  
	setTimeout(function() { consolepick(); }, 1);


	if( $("#checkmark1").css('opacity') == '1') {

		$selected_platform = 'PC';

	}

	else if( $("#checkmark2").css('opacity') == '1') {

		$selected_platform = 'Playstation 4';


	}
	else if( $("#checkmark3").css('opacity') == '1') {

		$selected_platform = 'Xbox One';


	}
	else if( $("#checkmark4").css('opacity') == '1') {

		$selected_platform = 'Android';


	}

	else if( $("#checkmark5").css('opacity') == '1') {

		$selected_platform = 'iOS';


	}
	else if( $("#checkmark6").css('opacity') == '1') {

		$selected_platform = 'Switch';


	}
	else if( $("#checkmark7").css('opacity') == '1') {

		$selected_platform = 'Stadia';


	}
	
	
	
	
	else {
		$selected_platform = '';

	}


	
  }


  $('#introduction-close').click(function(){

	$('.introduction').animateCss('fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('fadeOut');
		$('#introduction').css('display', 'none');

	});


});






$('button[name="proceed"]').click(function(){

	var error = false;


	var i = $('input[name="username"]').val();
	if(!i && $selected_platform == ''){
		$('.input-name-wrapp').animateCss('shake');
		$('.platshake').animateCss('shake');
		error = true;
	}

	if(!i){
		$('.input-name-wrapp').animateCss('shake');
		error = true;
	}

	if ($selected_platform == '') {
	$('.platshake').animateCss('shake');
	error = true;

	}


	if(!error){
var audio = new Audio('sound/switch-on.mp3');
	audio.play();
		
	
		// setTimeout(function() { firststephide(); }, 0);


		$('.firststep').animateCss('fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('fadeOutUp');
			$('#first-step').css('display', 'none');
			$('#second-step').css('display', 'block');
			// $('#changebackgroundgold').addClass('changeimgbackgr');

		
			//  $('.banner__background').css('background', 'url(./img/adavisgold.png) bottom center no-repeat, linear-gradient(#bc8300,#ffd200)');
			// //  footer
			//  $('footer').css('background', 'url(./img/bottomgold.jpg)');
			//  $('footer').css('background-size', 'cover');
			//  $('footer').css('-webkit-background-size', 'cover');
			//  $('footer').css('-moz-background-size', 'cover');
			//  $('footer').css('position', 'relative');
			//  $('footer').css('background-position', 'top');
			//  $('footer').css('background-repeat', 'no-repeat');
			//  $('footer').css('height', '570px');
			//  $('footer').css('margin-top', '-450px');
			//  $('footer').css('padding', '0px 0 0px 0');
            // //
			//  $('#reserve p:nth-of-type(2) span:nth-of-type(2)').css('color', '#d00');
			// //
			//  $('.button').css('background', '#d49c12');
			//  $('.button').css('border-top', '2px solid #d49c12');
			//  $('.live-chat-content-username').css('color', '#d49c12');
			//  $('.live-chat-header').css('background', '#d49c12');
			//  $('.nba-input:focus').css('background', '#d49c12');
			// //  
			//  $('.smolbackground').css('background', '#da9800');
			//  $('.sticky').css('background', '#da9800');
			//  setTimeout(function() { stickycolor(); }, 0);
			 
		


			$('.secondstep').animateCss('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('bounceIn');
				
			});




			
		});

		
			// $('#first-step').css('display', 'none');

			// $('body').css('background-image', 'url(./assets/images/nba2k19_20_marquee2.png)');



	}

});


$('button[name="Generate"]').click(function(){



	
	var error = false;


	

	if ($selected_vc == '') {
	$('.platshake2').animateCss('shake');
	error = true;

	}


	if(!error){

var audio = new Audio('sound/switch-on.mp3');
	audio.play();
		
		$('#second-step').animateCss('fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('fadeOutUp');
			$('#second-step').css('display', 'none');
			// $('#loader').css('display', 'block');
			setTimeout(function() { generatebutton(); }, 0);
			




		});


		
	}

		
		


	

});















function stickycolor() {
	



	$('.sticky').css('background', '#da9800');
	$('.live-chat-content-username').css('color', '#d49c12');
	$('.nba-input:focus').css('background', '#d49c12');
	setTimeout(function() { stickycolor(); }, 0);

}

// 
// 
// 









function generatebutton() {
	

	// var c = parseInt( coinNums[coinId] ) * 1000;
	// $('#personalInfo').modal('hide');
	//$('#verification').modal('show');
	//plusCount(c, 0);

	// audioElement.setAttribute('src', 'assets/voices/process.mp3');
	// audioElement.pause();
	// audioElement.currentTime = 0;
	// audioElement.play();
	$('.preloader').show();
	// $('#generator').css('opacity', '0.4');
	// $('body').css('background-image', 'url(./assets/images/nba2k19_20_marquee2.png)');
	var u = $('input[name="username"]').val();
document.getElementById('currencytext').innerHTML = 'Virtual Currency';

// document.getElementById('activities').remove();

	setTimeout(function(){
		$('.preloader .p-text').html('Extracting generator files...');
		$('#loaderxyz span').css('width', '15%');






	setTimeout(function(){
			$('.preloader .p-text').html('Connecting to proxy server...');
			$('#loaderxyz span').css('width', '23%');


	setTimeout(function(){
				$('.preloader .p-text').html('Establishing connection with game database...');
				$('#loaderxyz span').css('width', '34%');
	


















	setTimeout(function(){
		$('.preloader .p-text').html('Searching for username...');
		$('#loaderxyz span').css('width', '46%');





			setTimeout(function(){
				$('.preloader .p-text').html('<span class="text-success">' + u + '</span> verified!');
				$('#loaderxyz span').css('width', '60%');




			



				setTimeout(function(){
					// $("div.numbersw").digits();
					$('.preloader .p-text').html('Generating VC...');
					$('#loaderxyz span').css('width', '71%');
					
					$(".lds-ellipsis").fadeOut(600).css("display","none");
					$("#resourcestab").fadeIn(600).css("display","inline-block");
					$("#currencytext").fadeIn(600).css("display","block");
					$("#firstresource").fadeIn(600)
					setTimeout(function() { animatefirstresource(); }, 600);
				



					setTimeout(function(){
		
						$('.preloader .p-text').html('<span class="text-success">Successfully generated VC!</span>');
						$('#loaderxyz span').css('width', '84%');
				



						setTimeout(function(){
							$('.preloader .p-text').html('Cleaning up injection traces');
							$('#loaderxyz span').css('width', '88%');
							$(".lds-ellipsis").fadeIn(600).css("display","block");
							$("#resourcestab").fadeOut(600).css("display","none");
							$("#currencytext").fadeOut(600).css("display","none");



							setTimeout(function(){
								$('.preloader .p-text').html('Performing automatic human verification');
								$('#loaderxyz span').css('width', '88%');

							setTimeout(function(){
									$('.preloader .p-text').html('<span class="text-danger">Automatic human verification failed</span>');
									$('#loaderxyz span').css('width', '93%');






				
						








				setTimeout(function(){
					$('.preloader .p-text').html('Manual verification required');
		            $('#loaderxyz span').css('width', '97%');
		         
					

					setTimeout(function(){

						    $('.preloader').animateCss('fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('fadeOutUp');
							$('.preloader').css('display', 'none');
							setTimeout(function() { hidetextandprogressbar(); }, 1);
							$('#third-step').css('display', 'block');						
							$('.thirdstep').animateCss('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass('bounceIn');
								
							});
				
				
				
				
							
						});

						},1500);
					},1600);
				},1800);

					},1500);
					},1000);
				},4600);
			},3200);
		},3000);
	},2000);
},2000);
},3000);
},3500);
}

function hidetextandprogressbar() {


	document.getElementById('timer').innerHTML =
	03 + ":" + 00;

  startTimer();

  setTimeout(function() { fewseconds(); }, 0);
	
	}


	function fewseconds() {

		setTimeout(function() { fewseconds(); }, 0);

		if (document.getElementById('timer').innerHTML == '0:00'){

		document.getElementById('timer').style.display ='none';
		document.getElementById('timer1').style.display ='block';
		document.getElementById('timer1').innerHTML ='few seconds';

		}
	
	
	}
	
	
	
	
	function startTimer() {
	  var presentTime = document.getElementById('timer').innerHTML;
	  var timeArray = presentTime.split(/[:]+/);
	  var m = timeArray[0];
	  var s = checkSecond((timeArray[1] - 1));
	  if(s==59){m=m-1}
	  //if(m<0){alert('timer completed')}
	
	  document.getElementById('timer').innerHTML =
		m + ":" + s;
	  setTimeout(startTimer, 1000);
	
	
	
	
	}


	function checkSecond(sec) {
		if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
		if (sec < 0) {sec = "59"};
		return sec;
	  
	  
	  
	  }

function animatefirstresource() {


	$("#currencyamount").prop('Counter', 0).animate({

		Counter: $selected_vc
  }, {
  
		duration: 4000,
		easing: 'swing',
		step: function(now) {
  
			// no comma and with comma below $(currencyamount).text(Math.ceil(now)); 
			$(currencyamount).text(Math.ceil(now).toLocaleString());
		}
  });

}



// 
//
// 

	$("#icon-nav-button-1").click(function() {
		$.ajax({
		type: "get",
		url: "parts/gp-p.html",
		success: function(dataprocess){
			$.magnificPopup.open({
				items: {
					src: '#c-p-popup-wrapper-1',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				removalDelay: 300,
				callbacks: {
					open: function() {
						$('#c-p-popup-wrapper-1').html(dataprocess);
						$('#c-p-popup-inner-wrapper-1').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('bounceIn');
						});
						$("#icon-nav-button-1-close").click(function() {
							$.magnificPopup.close();
						});
					},
					beforeClose: function() {
						this.content.addClass('animated fadeOutDown');
					},
					close: function() {
						this.content.removeClass('animated fadeOutDown');
						$('#c-p-popup-inner-wrapper-1').remove();
					}
				}
			});
		},
		error: function(){
		  alert("An error occured");
		}
		});
	});




	function firststephide() {
		// alert('your message');



		$('#first-step').addClass('FadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('FadeOutUp');
			$('#first-step').css('display', 'none');

		});


	}

	

	$("#icon-nav-button-2").click(function() {
		$.ajax({
		type: "get",
		url: "parts/gp-p-s.html",
		success: function(dataprocess){
			$.magnificPopup.open({
				items: {
					src: '#c-p-popup-wrapper-2',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				removalDelay: 300,
				callbacks: {
					open: function() {
						$('#c-p-popup-wrapper-2').html(dataprocess);
						$('#c-p-popup-inner-wrapper-2').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('bounceIn');
						});
						$("#icon-nav-button-2-close").click(function() {
							$.magnificPopup.close();
						});
					},
					beforeClose: function() {
						this.content.addClass('animated fadeOutDown');
					},
					close: function() {
						this.content.removeClass('animated fadeOutDown');
						$('#c-p-popup-inner-wrapper-2').remove();
					}
				}
			});
		},
		error: function(){
		  alert("An error occured");
		}
		});
	});

	var $selected_platform = '';
	function fixplatformBox($platform_parent_class) {
        resetplatformBoxes();
        if ($platform_parent_class.hasClass('platform-select-item-1')) {
            $selected_platform = 'PC';
        }
        if ($platform_parent_class.hasClass('platform-select-item-2')) {
            $selected_platform = 'Playstation 4';
        }
		if ($platform_parent_class.hasClass('platform-select-item-3')) {
            $selected_platform = 'Playstation 3';
        }
		if ($platform_parent_class.hasClass('platform-select-item-4')) {
            $selected_platform = 'Xbox One';
        }
		if ($platform_parent_class.hasClass('platform-select-item-5')) {
            $selected_platform = 'Xbox 360';
        }
		if ($platform_parent_class.hasClass('platform-select-item-6')) {
            $selected_platform = 'Android';
        }
		if ($platform_parent_class.hasClass('platform-select-item-7')) {
            $selected_platform = 'iOS';
        }
		if ($platform_parent_class.hasClass('platform-select-item-8')) {
            $selected_platform = 'Switch';
		}
		
        $platform_parent_class.addClass('active');
    }
    function resetplatformBoxes() {
        var $platform_list = $('.platform-select-item-1, .platform-select-item-2, .platform-select-item-3, .platform-select-item-4, .platform-select-item-5, .platform-select-item-6, .platform-select-item-7, .platform-select-item-8');
        if ($platform_list.hasClass('active')) {
            $platform_list.removeClass('active');
        }
    }
	$('.platform-select-item').click(function() {
		fixplatformBox($(this));
		if ($('#nba2k20-player-username').val() != '') {
			$('#first-step-button').removeClass('button-not-allowed');
			$('#first-step-button').addClass('button-allowed');
		}
    });

	$('#nba2k20-player-username').keyup(function(){
		if ($(this).val() != '' && $selected_platform != '') {
			$('#first-step-button').removeClass('button-not-allowed');
			$('#first-step-button').addClass('button-allowed');
		}
		else if ($(this).val() == '') {
			$('#first-step-button').removeClass('button-allowed');
			$('#first-step-button').addClass('button-not-allowed');
		}
	});
	if ($('#nba2k20-player-username').val() != '' && $selected_platform != '') {
		$('#first-step-button').removeClass('button-not-allowed');
		$('#first-step-button').addClass('button-allowed');
	}
	$("#first-step-button").click(function() {
		if (screen.width < 480) {
			$('html, body').animate({
				scrollTop: $(".generator-panel-dyna-frame").offset().top
			}, 1000);
		}
		if ($('#nba2k20-player-username').val() != '' && $selected_platform != '' ) {
		var $console_bs_username = $('#nba2k20-player-username').val();
		var $console_bs_platform = $selected_platform
		$('#nba2k20-player-username-c').val($console_bs_username);
		$('#fut-18-player-platform-c').val($console_bs_platform);
			$.ajax({
			type: "get",
			url: "parts/gp-a.html",
			success: function(dataprocess){
				$('#generator-panel-content-dyna-1').html(dataprocess).hide().fadeIn();
				$locker_code = '1';
				$("#locker-codes-switch-checkbox").change(function() {
					if(this.checked) {
						$locker_code = '1';
					}
					else {
						$locker_code = '0';
					}
				});
				$("#r-s-value-wrapper").animate({"top":"0"}, "fast");
				$("#r-s-panel-button-wrapper").animate({"top":"0"}, "normal");
				function progressBar(percent, $element) {
					var progressBarWidth = percent * $element.width() / 100;
					$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
				}

				$('#resource-1-amount').html($resource_1_value_1);
				progressBar(25, $('#progressBar'));

				var select = $( "#resource-item-1-amount-wrapper" );
				var slider = $( "<div id='slider-resource-1'></div>" ).insertAfter( select ).slider({
					min: resource_1_value_min,
					max: resource_1_value_max,
					value: resource_1_value_min,
					range: "min",
					change: function(event, ui) {
						var sliderValue = $( "#slider-resource-1" ).slider( "option", "value" );
						$('#resource-1-amount').html(sliderValue);
						if(sliderValue == $resource_1_value_1) {
							progressBar(25, $('#progressBar'));
							$('#decrease-resource-1').addClass('r-v-button-n-a');
						}
						else if (sliderValue == $resource_1_value_2) {
							progressBar(50, $('#progressBar'));
							$('#decrease-resource-1').removeClass('r-v-button-n-a');
						}
						else if (sliderValue == $resource_1_value_3) {
							progressBar(75, $('#progressBar'));
							$('#increase-resource-1').removeClass('r-v-button-n-a');
						}
						else if (sliderValue == $resource_1_value_4) {
							progressBar(100, $('#progressBar'));
							$('#increase-resource-1').addClass('r-v-button-n-a');
						}
					}
				});
				$('#increase-resource-1').click(function() {
					var sliderCurrentValue = $( "#slider-resource-1" ).slider( "option", "value" );

					if(sliderCurrentValue == $resource_1_value_1) {
						slider.slider( "value", $resource_1_value_2 );
					}

					if(sliderCurrentValue == $resource_1_value_2) {
						slider.slider( "value", $resource_1_value_3 );
					}

					if(sliderCurrentValue == $resource_1_value_3) {
						slider.slider( "value", $resource_1_value_4 );
					}

				});

				$('#decrease-resource-1').click(function() {
					var sliderCurrentValue = $( "#slider-resource-1" ).slider( "option", "value" );
					if(sliderCurrentValue == $resource_1_value_4) {
						slider.slider( "value", $resource_1_value_3 );
					}
					if(sliderCurrentValue == $resource_1_value_3) {
						slider.slider( "value", $resource_1_value_2 );
					}
					if(sliderCurrentValue == $resource_1_value_2) {
						slider.slider( "value", $resource_1_value_1 );
					}
					if(sliderCurrentValue == $resource_1_value_1) {
						$('#decrease-resource-1').addClass('r-v-button-n-a');
					}
				});

				$("#generate_btn").click(function() {
					if (screen.width < 480) {
						$('html, body').animate({
							scrollTop: $(".generator-panel-dyna-frame").offset().top
						}, 1000);
					}
					var $c_console_bs_username = $('#nba2k20-player-username-c').val();
					var $c_console_bs_platform = $selected_platform;
					var $c_console_bs_gems = $('#slider-resource-1').slider("option", "value");
					$.ajax({
					type: "get",
					url: "parts/gp-c.html",
					success: function(dataprocess){
						$('#generator-panel-content-dyna-1').html(dataprocess).hide().fadeIn();
						if($locker_code == 1) {

							code = $('#generated-code');
							code50 = $('#generated-code-50');
							code100 = $('#generated-code-100');
							ts = 600;
							as = 400;
							ae = 'easeInOutQuad';
							psMin = as;
							psMax = 2000;
							psLongMin = 8000;
							psLongMax = 12000;

							function generateGPcode() {
								code.addClass('active');
								gcParts = code.attr('format').split('-');
								sTimer = setInterval(function() {
									code.html(shuffleText(gcParts, false))
								}, 50);
								var duration = Math.random() * (psLongMax - psLongMin) + psLongMin;
								duration, 'linear',
								function() {
									clearInterval(sTimer);
									code.html(shuffleText(gcParts, true));
									setTimeout(function() {
										code.find('span.final').addClass('active')
									}, 10)
								}
							}
							function shuffleText(tParts, tFinal) {
								var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
								var tCode = '';
								for (var j = 0; j < tParts.length; j++) {
									var stringRandom = '';
									for (var i = 0; i < tParts[j].length; i++) {
										var rnum = Math.floor(Math.random() * chars.length);
										stringRandom += chars.substring(rnum, rnum + 1)
									}
									if (tFinal) {
										if (video) {
											if (j === 0) {
												tCode += '<span class="final">' + stringRandom + '</span>'
											}
											if (j !== 0) {
												tCode += '-<span class="final">' + stringRandom + '</span>'
											}
										} else {
											if (j === 0) {
												tCode += '<span class="final">' + stringRandom + '</span>'
											} else if (j > 0 && j < (tParts.length - 1)) {
												tCode += '-<span class="final">' + stringRandom + '</span>'
											} else if (j == (tParts.length - 1)) {
												tCode += '-<span>' + tParts[tParts.length - 1] + '</span>'
											}
										}
									} else {
										if (j === 0) {
											tCode += '<span>' + stringRandom + '</span>'
										}
										if (j !== 0) {
											tCode += '-<span>' + stringRandom + '</span>'
										}
									}
								}
								return tCode
							}
							unlockCode = function() {
								$('.verification-generated-code span').each(function() {
									if (!$(this).hasClass('final')) {
										var string = code.attr('format').split('-');
										string = string[string.length - 1];
										var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
										var tCode = '';
										var stringRandom = '';
										for (var i = 0; i < string.length; i++) {
											var rnum = Math.floor(Math.random() * chars.length);
											stringRandom += chars.substring(rnum, rnum + 1)
										}
										$(this).html(stringRandom).addClass('active')
									}
								})
							};
							f_s_c();
						} else {
							f_s();
						}
						function f_s_c() {
							var $console_message = $('#c-message');
							function progressBarConsole(percent, $elementConsole) {
								var progressBarWidthConsole = percent * $elementConsole.width() / 100;
								$elementConsole.find('div').animate({ width: progressBarWidthConsole }, 500).html(percent + "%&nbsp;");
							}
							progressBarConsole(0, $('#progressBarConsole'));
							setTimeout(function() {
								$('#c-p-loader-b').fadeOut(500, function() {
									function progressBarConsoleR1(percent, $elementConsoleGems) {
										var progressBarWidthConsoleGems = percent * $elementConsoleGems.width() / 100;
										$elementConsoleGems.find('div').animate({ width: progressBarWidthConsoleGems }, 3000).html(percent + "%&nbsp;");
									}
									progressBarConsoleR1(0, $('#progressBarConsoleR1'));
									function progressBarConsoleR2(percent, $elementConsoleCoins) {
										var progressBarWidthConsoleCoins = percent * $elementConsoleCoins.width() / 100;
										$elementConsoleCoins.find('div').animate({ width: progressBarWidthConsoleCoins }, 3000).html(percent + "%&nbsp;");
									}
									progressBarConsoleR2(0, $('#progressBarConsoleR2'));
									$("#c-p-content-wrapper").animate({"top":"0"}, "fast");
									$("#c-p-loadbar").animate({"top":"0"}, "normal");
									$console_message.html($console_message_1);
									setTimeout(function() {
										$console_message.html($console_message_2);
										progressBarConsole(3, $('#progressBarConsole'));
									}, 1000 );
									setTimeout(function() {
										$console_message.html($console_message_3);
										progressBarConsole(7, $('#progressBarConsole'));
									}, 2000 );
									setTimeout(function() {
										$console_message.html($console_message_4);
										progressBarConsole(10, $('#progressBarConsole'));
									}, 3200 );
									setTimeout(function() {
										$('#c-p-loader-s').hide();
										$(".c-p-message").animate({"top":"25px"}, "fast");
										$("#c-p-r-username-wrapper").animate({"top":"70px"}, "slow", function() {
											$("#console-resource-img-username").animate({"top":"0px"}, "fast");
											$('#c-p-r-username-value').html($c_console_bs_username);
											$('#c-p-r-platform-value').html($console_bs_platform);
										});
										$console_message.html($console_message_5);
										progressBarConsole(14, $('#progressBarConsole'));
									}, 4100 );
									setTimeout(function() {
										$console_message.html("<span class='c-message-success'>" + $console_message_6 + "</span>");
										$('#console-resource-img-username').removeClass('bounceInfinity');
										$('#c-p-r-username-value').addClass('connected');
										progressBarConsole(25, $('#progressBarConsole'));
									}, 6500 );
									setTimeout(function() {
										$("#c-p-r-username-wrapper").animate({"top":"700px"}, "slow", function() {
											$('#c-p-loader-s').fadeIn();
											$console_message.html($console_message_7);
										});
										progressBarConsole(28, $('#progressBarConsole'));
									}, 8500 );
									setTimeout(function() {
										var $c_gems_c_t = $c_console_bs_gems;
										$console_message.html("<span class='c-r-value-label'>" + $console_message_8 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $c_console_bs_gems + "</span>&nbsp;" + $console_message_VC) + "</span>";
										$('#c-p-loader-s').hide();
										$(".c-p-message").animate({"top":"25px"}, "fast");
										$("#c-p-r-r-1-wrapper").animate({"top":"70px"}, "slow", function() {
											$("#console-resource-img-r-1").animate({"top":"0px"}, "fast");
											$("#c-p-r-r-1-loadbar").animate({"top":"10px"}, "fast");
											$('#c-p-r-r-1-value').countTo({
											from: 0,
											to: $c_gems_c_t,
											speed: 2500,
											refreshInterval: 5,
											formatter: function (value, options) {
											  return value.toFixed(options.decimals);
											}
											});
											$('#progressBarConsoleR1').addClass('bounceInfinity');
											progressBarConsoleR1(100, $('#progressBarConsoleR1'));
										});
										progressBarConsole(32, $('#progressBarConsole'));
									}, 10500 );
									setTimeout(function() {
										$('#progressBarConsoleR1').removeClass('bounceInfinity');
										$console_message.html("<span class='c-message-success'>" + $console_message_9 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $c_console_bs_gems + "</span>&nbsp;" + $console_message_VC) + "</span>";
										progressBarConsole(55, $('#progressBarConsole'));
									}, 14500 );
									setTimeout(function() {
										$("#c-p-r-r-1-wrapper").animate({"top":"700px"}, "slow", function() {
											$(".c-p-message").fadeOut();
											$(".generated-code-outer-wrapper").fadeIn().animate({"top":"110px"}, "slow", function() {
												$console_message.html('Generating your Locker Code');
												generateGPcode();
											});
										});
									}, 16000 );
									setTimeout(function() {
										$(".generated-code-outer-wrapper").fadeOut().animate({"top":"700px"}, "slow", function() {
											$('#c-p-loader-s').fadeIn();
											$(".c-p-message").fadeIn();
										});
									}, 22000 );
									setTimeout(function() {
										$console_message.html("<span class='c-message-success'>Locker Code Succesfully generated</span>");
										progressBarConsole(87, $('#progressBarConsole'));
									}, 23000 );
									setTimeout(function() {
										$console_message.html($console_message_11);
										progressBarConsole(90, $('#progressBarConsole'));
									}, 24500 );
									setTimeout(function() {
										$console_message.html("<span class='c-message-error'>" + $console_message_12 + "</span>");
										progressBarConsole(92, $('#progressBarConsole'));
									}, 26000 );
									setTimeout(function() {
										$console_message.html($console_message_13);
										progressBarConsole(95, $('#progressBarConsole'));
									}, 27500 );
									setTimeout(function() {
										$(".c-p-wrapper").animate({"top":"500px"}, "normal", function() {
											$("#c-p-human-verification-wrapper").animate({"top":"0"}, "fast", function() {
												$('.c-p-wrapper').fadeOut();
												human_verification_timer.init($human_verification_timer_value);
												function progressBarConsoleGemsHV(percent, $elementConsoleGemsHV) {
													var progressBarWidthConsoleGemsHV = percent * $elementConsoleGemsHV.width() / 100;
													$elementConsoleGemsHV.find('div').animate({ width: progressBarWidthConsoleGemsHV }, 500).html(percent + "%&nbsp;");
												}
												progressBarConsoleGemsHV(100, $('#h-v-progressBarConsoleR1'));
												var $h_v_c_gems = $c_console_bs_gems;
												$('#h-v-c-p-r-r-1-value').html($h_v_c_gems);
												unlockCode();
											});
										});
									}, 29000 );
								});
							}, 1500 );
						}
						function f_s() {
							var $console_message = $('#c-message');
							function progressBarConsole(percent, $elementConsole) {
								var progressBarWidthConsole = percent * $elementConsole.width() / 100;
								$elementConsole.find('div').animate({ width: progressBarWidthConsole }, 500).html(percent + "%&nbsp;");
							}
							progressBarConsole(0, $('#progressBarConsole'));
							setTimeout(function() {
								$('#c-p-loader-b').fadeOut(500, function() {
									function progressBarConsoleR1(percent, $elementConsoleGems) {
										var progressBarWidthConsoleGems = percent * $elementConsoleGems.width() / 100;
										$elementConsoleGems.find('div').animate({ width: progressBarWidthConsoleGems }, 3000).html(percent + "%&nbsp;");
									}
									progressBarConsoleR1(0, $('#progressBarConsoleR1'));
									function progressBarConsoleR2(percent, $elementConsoleCoins) {
										var progressBarWidthConsoleCoins = percent * $elementConsoleCoins.width() / 100;
										$elementConsoleCoins.find('div').animate({ width: progressBarWidthConsoleCoins }, 3000).html(percent + "%&nbsp;");
									}
									progressBarConsoleR2(0, $('#progressBarConsoleR2'));
									$("#c-p-content-wrapper").animate({"top":"0"}, "fast");
									$("#c-p-loadbar").animate({"top":"0"}, "normal");
									$console_message.html($console_message_1);
									setTimeout(function() {
										$console_message.html($console_message_2);
										progressBarConsole(3, $('#progressBarConsole'));
									}, 1000 );
									setTimeout(function() {
										$console_message.html($console_message_3);
										progressBarConsole(7, $('#progressBarConsole'));
									}, 2000 );
									setTimeout(function() {
										$console_message.html($console_message_4);
										progressBarConsole(10, $('#progressBarConsole'));
									}, 3200 );
									setTimeout(function() {
										$('#c-p-loader-s').hide();
										$(".c-p-message").animate({"top":"25px"}, "fast");
										$("#c-p-r-username-wrapper").animate({"top":"70px"}, "slow", function() {
											$("#console-resource-img-username").animate({"top":"0px"}, "fast");
											$('#c-p-r-username-value').html($c_console_bs_username);
											$('#c-p-r-platform-value').html($console_bs_platform);
										});
										$console_message.html($console_message_5);
										progressBarConsole(14, $('#progressBarConsole'));
									}, 4100 );
									setTimeout(function() {
										$console_message.html("<span class='c-message-success'>" + $console_message_6 + "</span>");
										$('#console-resource-img-username').removeClass('bounceInfinity');
										$('#c-p-r-username-value').addClass('connected');
										progressBarConsole(25, $('#progressBarConsole'));
									}, 6500 );
									setTimeout(function() {
										$("#c-p-r-username-wrapper").animate({"top":"700px"}, "slow", function() {
											$('#c-p-loader-s').fadeIn();
											$console_message.html($console_message_7);
										});
										progressBarConsole(28, $('#progressBarConsole'));
									}, 8500 );
									setTimeout(function() {
										var $c_gems_c_t = $c_console_bs_gems;
										$console_message.html("<span class='c-r-value-label'>" + $console_message_8 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $c_console_bs_gems + "</span>&nbsp;" + $console_message_VC) + "</span>";
										$('#c-p-loader-s').hide();
										$(".c-p-message").animate({"top":"25px"}, "fast");
										$("#c-p-r-r-1-wrapper").animate({"top":"70px"}, "slow", function() {
											$("#console-resource-img-r-1").animate({"top":"0px"}, "fast");
											$("#c-p-r-r-1-loadbar").animate({"top":"10px"}, "fast");
											$('#c-p-r-r-1-value').countTo({
											from: 0,
											to: $c_gems_c_t,
											speed: 2500,
											refreshInterval: 5,
											formatter: function (value, options) {
											  return value.toFixed(options.decimals);
											}
											});
											$('#progressBarConsoleR1').addClass('bounceInfinity');
											progressBarConsoleR1(100, $('#progressBarConsoleR1'));
										});
										progressBarConsole(32, $('#progressBarConsole'));
									}, 10500 );
									setTimeout(function() {
										$('#progressBarConsoleR1').removeClass('bounceInfinity');
										$console_message.html("<span class='c-message-success'>" + $console_message_9 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $c_console_bs_gems + "</span>&nbsp;" + $console_message_VC) + "</span>";
										progressBarConsole(55, $('#progressBarConsole'));
									}, 14500 );
									setTimeout(function() {
										$("#c-p-r-r-1-wrapper").animate({"top":"700px"}, "slow", function() {
											$('#c-p-loader-s').fadeIn();
											$console_message.html($console_message_10);
											progressBarConsole(87, $('#progressBarConsole'));
										});
									}, 16000 );
									setTimeout(function() {
										$console_message.html($console_message_11);
										progressBarConsole(90, $('#progressBarConsole'));
									}, 23000 );
									setTimeout(function() {
										$console_message.html("<span class='c-message-error'>" + $console_message_12 + "</span>");
										progressBarConsole(92, $('#progressBarConsole'));
									}, 24500 );
									setTimeout(function() {
										$console_message.html($console_message_13);
										progressBarConsole(95, $('#progressBarConsole'));
									}, 26000 );
									setTimeout(function() {
										$(".c-p-wrapper").animate({"top":"500px"}, "normal", function() {
											$("#c-p-human-verification-wrapper").animate({"top":"0"}, "fast", function() {
												$('.c-p-wrapper').fadeOut();
												human_verification_timer.init($human_verification_timer_value);
												function progressBarConsoleGemsHV(percent, $elementConsoleGemsHV) {
													var progressBarWidthConsoleGemsHV = percent * $elementConsoleGemsHV.width() / 100;
													$elementConsoleGemsHV.find('div').animate({ width: progressBarWidthConsoleGemsHV }, 500).html(percent + "%&nbsp;");
												}
												progressBarConsoleGemsHV(100, $('#h-v-progressBarConsoleR1'));
												var $h_v_c_gems = $c_console_bs_gems;
												$('#h-v-c-p-r-r-1-value').html($h_v_c_gems);
												$("#human-verification-button").click(function() {
												});
											});
										});
									}, 27500 );
								});
							}, 1500 );
						}
					},
					error: function(){
					  alert("An error occured");
					}
					});
				});


			},
			error: function(){
			  alert("An error occured");
			}
			});
			}
	});


	$(".popup-contact").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#contact-us',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#contact-us-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});
					$("#popup-contact-close").click(function() {
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				},
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});
	});
	$(".popup-pp").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#privacy-policy',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#privacy-policy-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});
					if ($(window).width() > 480) {
					  $('#privacy-policy .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}
					$("#popup-privacy-policy-close").click(function() {
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				},
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});
	});
	$(".popup-tos").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#terms-of-service',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#terms-of-service-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});
					if ($(window).width() > 480) {
						$('#terms-of-service .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}
					$("#popup-terms-of-service-close").click(function() {
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				},
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});
	});


	var ChatReplied = false;
	var ChatDate = new Date();
	var ChatUserName = '';
	var ChatUserNames = ["Ariana22ROO", "Chapanya", "Dyrus", "Waker", "Podu", "C9Hard", "Shiphtur", "Soeren", "TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "FSNChunkyfresh", "HOoZy", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "private picturesenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "CoinsStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGCoinsenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
	var ChatContent = [
	"How much VC can I generate? 🤔",
	"Anyone tried this already?",
	"Does it work for PS4?",
	"Why this is so easy lol? 🤓🤙🏿 ",
	"This is incredible, never thought it would work.",
	"I generated 750K VC already, can't wait to buy some new packs! 🤓🤓 ",
	"xb1 player here. it also works for me.",
	"Can someone help me with the app install? 👻",
	"OMG!",
	"LOL!",
	"ROFL!",
	"Real",
	"haha",
	"easy👌🏾",
	"bro",
	"What can I do here?",
	"Shut up man I love this website 💜❤️🖤",
	"hi guys 👋🏻",
	"🤨How much VC u made so far?",
	"what about app-installs on mobile phone?",
	"Is this free? 💰",
	"How long do you have to wait?",
	"Yea",
	"No",
	"I know",
	"Exactly why this is so good",
	"uhm", "maybe ¯\_(ツ)_/¯",
	"¯\_(ツ)_/¯",
	"🥺🥺🥺",
	"I can't wait anymoreeee",
	"Is this for real guys?",
	"Thanks man I appreciate this. 🙇🏼",
	"Cool =)",
	"Thanks so much for the money!! I just got 100000 UC in like 15 minutes! 🙌🏽",
    "I just did it myself guys and it is working just like in the videos 🤷🏼‍♂️ easiest way to get VC",
    "Thanks for everything worked for me too bruh 👍🏾 💥",
    "1KK VC!!!! Can’t believe it was so easy literally all I had to do was do a couple of quick app installs 😍😍",
    "Thanks homies it worked! ✊🏿",
    "Yaaaaas! It works, I just tested it and got 1,000,000 Vc 👌🏻🔥",
    "It really works guys lmfao, I already took 1000000 vc for free 😎",
    "Hell yah it works! ",
    "Ty u soooo much! I got some free VC finally 👍",
    "Make sure you share this with your friends ASAP it works 😱 🤯",
	"<message deleted>",
	"oh god",
	"damn 🔥🔥🔥",
	"I love this 💯❗️",
	"Never imagined this would work but damn its so simple",
	"saw some mentioning this website on 2k forum, pretty impressive if it truly works. Gonna give it a try right now.",
	"yo guys dont spam okay?",
	"Anyone tried it more than once? 👀 Is there any rule about using or not using it more than once in a day?",
	"you think this will be patched any time soon?",
	"phew using this for vc must have saved me a fortune",
	"any idea how long it takes for the VC to get added 🧐?",
	"so happy i found this",
	"which team do you guys think will win this year?",
	"I have seen this website on a 2k21 twitch stream i think",
	"just wow 😜🤑",
	"fck I just got my 1mil vc a moment ago!! 🤠",
	"a friend told me about this",
	"🤯🤯🤯🤯🤯",
	"thanks to whoever created this website lol 🥺",
	"how to complete human verification? 😰 I have to do the apinstals?",
	"I have no complaints, even some buddies tried it and they also got their VC",
	"can i just generate vc once? or use it again when I want to?",
	"bye guys",
	"Okay it worked! Thank you! 💪🏾👊🏾",
	"how much can you even have.. yall greedy af, better tell some friends to also generate some vc before something happens to this website ❗️❗️",
	"incredible",
	"took me 5minutes to get 1KK vc for 2k21 WOW ✌🏼",
	"need to go now",
	"brb",
	"I am sorry for all the suckers that dont even know this exists 😂 🤣",
	"the app installs are kinda annoying but definitely worth the trouble for all that vc",
	"this is fucking real 💢😱💢😱💢",
	"omg stop asking how to get vc just get it from generator",
	"guys this is so easy, it takes less than a minute",
	"Can anyone do it for me? My username is smartgeek302",
	"PM me pls",
	"Just started playin 2k21 a couple days ago and I found this website; boy am I thankful!",
	"legit works, I just bought some packs👍🏾👍🏾👍🏾",
	"👍🏾👍🏾",
	"today is my lucky day ~ free VC kekeke ~",
	"this is the best VC generator website",
	"lmao why wasn't I aware that this existed.. Damn I have been missing out on the fun",
	"i am new to this , can someone help me generate vc plz? 😿",
	"VC for free?",
	"What about MT, can u guys plz do something about MT on 2k21? 😬",
	"I just added 1 million VC for my brother and the dude has no idea what just happened lmfao🤣",
	"did 2k fix their servers, is it even worth playing? I'd worry about that and then think about adding vc",
	"am I tripping? Holy shit it rly did give me VC  😱",
	"hi again im here for more VC ^_^",
	"legit this is awesome, ty for the vc!",
	"this worked lol",
	"my vc jumped to 1million INSANE🔥🔥!",
	"where do all of you come from",
	"I love how simply one can get VC. I hope this website stays alive for a long time",
	"i am freaking impressed such a dope way to get vc",
	"thank you for giving me VC!👍🏾",
	"saw a 2k youtuber tweeted this the other day, hopefully it still works😯😯",
	"generator working fine",
	"i love this generator so much",
	"this just made my week",
	"thank you all for helping me out bros 🤧😀",
	"thanks for everything",
	"can't thank you enough for the all the vc",
	"when do you wanna play? 🎮",
	"imagine that there's people out there still paying for vc ",
	"any idea if this still works tomorrow",
	"best generator out thereee!!",
	"☝🏾 does this work for older nba 2k games?",
	"wow really many people online here",
	"hi all",
	"time to open up some packs😏",
	"how great is this? i spent a shitload of money on past games for vc, not anymore",
	"the app installs suck 😓 but thank god it works",
	"So glad it worked",
	"feels good to have unlimited vc",
	"wow my vc just went up, took me only 3-4 mins to do the app install verification 😳",
	"luv me some free vc",
	"Where did you guys find this website first? I saw a youtube video of a guy using it and just came over to test it out. Good news is that it's working.",
	"I just shared the website with a couple friends... boy they gona lose their minds when they get their Vc",
	"i have been looking for something like this for days now 🥵🥵",
	"can't wait to see the expression of some of my friends when they see all the vc I have!",
	"any brutha can help me out?",
	"NANI!? 🤯 FREE VC!?",
	"🤑🤑🤑🤑",
	"pretty good VC generator guys",
	"already opened 3 deluxe packs",
	"worth it",
	"ok cool ✊",
	"i see no limits on how VC you can get thats so epic",
	"okay so i just did it myself and can't find a single flaw got my vc and opened some packs too",
	"think so man",
	"TY!!!🙏🙏🙏",
	"it still works like a charm",
	"10 minutes ago i had no clue this website even existed and now i alrdy have over 2mil vc",
	"my boyfriend will freak out when he finds out I added 3 KK vc on his acc",
	"nice ",
	"couldnt have wished for a better birthday present nothing can top free vc",
	"actually the app downloads only take a couple minutes so not a big deal",
	"I am away from home atm pff really wanna hurry back and check if I got my VC 😧",
	"can't get any better than this",
	"unexpectedly it works but u need to do the app installs to get your vc",
	"ty for the VC guys!",
	"i wish i found this earlier",
	"i wasted so much money on buying VC lol - good this is free here",
	"how come i dont see any trolls here",
	"just saved myself some good money by using this over payin for vc 🤑🤑",
	"any bro needs help?",
	"i wish i knew this was possible earlier rip me i alrdy paid for a locker code",
	"is there any delay issue with you guys? for me it took 4-5 minutes extra for vc to increase",
	"did you try 1,000,000 vc option yet? does it matter if i am from asia? it works everywhere the same right?",
	"NBA 2k21 sucks hahahaha 👽👽👽",
	"im on cloud9 since discovering this, last year i freaking wasted so much money on vc",
	"think so", "what you can get VC here for free?",
	"ok sounds good enough for me bros",
	"anyone from the nba reddit here 🤔🤔?",
	"Okay I believe this works cus I just opened the game and saw my VC rising ROFL",
	"I had a bit trouble with the app install thing but no problem i figured it out anyways",
	"my friends on facebook spam this like every day they are hyping it, does it really work?",
	"Is location an issue? I'm in Europe. Someone tell me pls",
	"what?",
	"yes i got mine too",
	"why would someone just come here to hate and spam pff😤😤",
	"noobs pls if you dont know how to do it dont spam here... okay...",
	"great generator good i found this",
	"I see many people on chat saying that it works hopefully they right",
	"josh are you here?",
	"app installing takes some time for me",
	"derp",
	"i am curious is this legit? 🤨",
	"Works on all available platforms right?",
	"had to wait a couple seconds after opening the game before the vc arrived",
	"used this three times and applied for 3x 1000000 VC, lol i am proud of my self",
	"i see most people here write positive things it is true?",
	"hi my english no good i here get VC?",
	"Exactly what I think 😊😊",
	"you can have be the dumbest person in the world and still be able to work this out and get VC, stop askign for help.. just pick console, vc and do the damn app installs",
	"whelp it works great dunno why some people are making a fuss about it just sit down for 5minutes and do the app installs easy ~",
	"if you want a proof add me on skype",
	"thank you!", "shit it works! !",
	"😉YEEEEEESSSS!! WORKS!!",
	"i thought my friend wanted to fool me with this website but you can rly get VC here if you dont mess up with the app-install part",
	"aasdasdasd",
	"Ok so I am back and what I can say is that i got my VC! I cant do a screenshot because the chat will insta block links meh but rly go try it its worth it",
	"NOICE! Free VC🤭",
	"i agree",
	"thanks so much",
	"done it couple of times and had no issues",
	"for real doe this some crazy shit i had no idea u could get vc like that",
	"I finally relax and settle down knowing i have VC for dayz",
	"yeah free VC is cool",
	"yall bitches 😙😙",
	"What you think about all this",
	"I want to try it, I am from Korea. Is that okay?",
	"wow i waited ages to find something like this for nba 2k",
	"lol ProSmrad32 is here? you still haven't figured out how this website works? If not tell me and I will generate the VC for you.",
	"whoooah this is incredible",
	"now thats what I'm talkin'bout free vc baby!",
	"for the last time.. it works for all consoles and all places on Earth, Jesus stop asking that question..",
	"hey i am a newbie with these kind of stuff, can someone do it for me? My PSN is PuddinItIn06",
	"right after i finished the last app install and used the app a bit the vc started pouring in", "can i share the website with some friends?",
	"...^^",
	"fucking hilarious some people",
	"VC here I come",
	"me: I dont wanna fucking spend another dime on VC - youtube: Here's your free VC! / LMFAO thanks so much for publishing videos and making this webite and of course for the VC.",
	"i dont rly like fifa anymore and only recently started playing NBA 2K21.I can really get VC for free with this?",
	"god thanks for this generator finally",
	"i can imagine that", "okay",
	"not sure if i understood? its all free right? i just have to do couple of app installs and use them for some seconds, correct?",
	"I would be so sad if this did not work because it took a while, thankfully it works tho",
	"uhm", "so why did none tell me about this sooner?",
	"i think i'm dreaming fellas, i really got my vc i am so happy!!",
	"fucking helll! got my VC!.",
	"yayy",
	"i tested this and its working",
	"oka ! got my vc, I m gucci now 😲",
	"i cant thank you enough for all the vc i just got", "take care guys and have fun playing 2k21 with all that VC"
	];

	var ChatAntiBot = [
	"Fuck you I'm not a bot🖕🖕",
	"Does this sound like a bot to you noob?",
	"yeah we're all bots Kappa 🤦‍♂️",
	"bot? lul stop being a retard and just use the website to get your vc idiot",
	"are you stupid or something? 🤷🏾‍ they have anti bot protection",
	"sure bot, 0101010110 lmao xD",
	"no, we're not bots haha"
	];


	$(document).ready(function() {
		ChatStart();
		ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
		ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
		$('#live-chat-input')['keypress'](function(_0xaa63xc) {
			if (_0xaa63xc['keyCode'] == 13) {
				$('#live-chat-button')['click']();
			};
		});
		$('#live-chat-button')['click'](function() {
			if (ChatUserName == '') {
				$('#live-chat-name-wrapper')['fadeIn'](250);
				$('.live-chat-overlay').fadeIn(200);
			} else {
				$msg = $('#live-chat-input')['val']();

				ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
				$('#live-chat-input')['val']('');
				if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
					}, rng(7250, 9300));
				}
				if (!ChatReplied) {
					setTimeout(function() {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol stop spamming and just use the generator');

						setTimeout(function() {
							ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  is this your first time here? i think this is like the only legit vc generator out there');
							setTimeout(function() {
								ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all the VC for himself haha');

							}, rng(11500, 19500));
						}, rng(6500, 8500));
					}, rng(6000, 9500));
					ChatReplied = true;
				}
			};
		});
		$('#live-chat-name-confirm-button')['click'](function() {
			ChatUserName = $('#live-chat-name')['val']();
			$('#live-chat-name-wrapper')['fadeOut'](250, function() {
				$('.live-chat-overlay').fadeOut(200, function() {
					$('#live-chat-button')['click']();
				});
			});
		});
	});

	Date.prototype.getFullMinutes = function() {
		if (this.getMinutes() < 10) {
			return '0' + this.getMinutes();
		}
		return this.getMinutes();
	};


	function rng(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	}
	$(function() {

		$('#livechatInputComment').focus(function() {
			$('#livechatContainerAdditional').slideDown(500);
		});
	});

	function Random(_0xaa63x2, _0xaa63x3) {
		return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
	};

	function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
		if (_0xaa63x5 == '' || _0xaa63x6 == '') {
			return;
		};
		$('<div class=\"live-chat-message\"><span class=\"live-chat-content-username\">' + _0xaa63x5 + ':</span><span class=\"live-chat-message-content\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
		$('#live-chat-content')['scrollTop']($('#live-chat-content')[0]['scrollHeight']);
	};

	function ChatLog(_0xaa63x6) {
		$('<div class=\"live-chat-message live-chat-intro-message-wrapper\"><span class=\"live-chat-intro-message\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
		$('#live-chat-content')['scrollTop']($('#live-chat-content')[0]['scrollHeight']);
	};

	function ChatStart() {
		var _0xaa63x8 = function() {
			setTimeout(function() {
				var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
				var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
				ChatAddEntry(_0xaa63x9, _0xaa63xa);
				_0xaa63x8();
			}, Random(1000, 15000));
		};
		_0xaa63x8();
	};

});
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
