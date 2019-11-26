/**
 * Main scripts file
 */
(function($) {
  'use strict';
  
  
  $('.att-grid-modal .img-grid').click(function(){
	  $(this).toggleClass('active');
	});
	
	  
  /* Define some variables */
  var app = $('.app'),
    searchState = false,
    menuState = false;


  /* $(".sticky-header").floatThead({scrollingTop:100});	*/
  
  function toggleMenu() {
    if (menuState) {
      app.removeClass('move-left move-right');
      setTimeout(function() {
        app.removeClass('offscreen');
      }, 150);
    } else {
      app.addClass('offscreen move-right');
    }
    menuState = !menuState;
  }

  /******** Open messages ********/
  $('[data-toggle=message]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    app.toggleClass('message-open');
  });

  /******** Open contact ********/
  $('[data-toggle=contact]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    app.toggleClass('contact-open');
  });

  /******** Toggle expanding menu ********/
  $('[data-toggle=expanding]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    app.toggleClass('expanding');
  });

  /******** Card collapse control ********/
  $('[data-toggle=card-collapse]').on('click', function(e) {
    var parent = $(this).parents('.card'),
      body = parent.children('.card-block');
    if (body.is(':visible')) {
      parent.addClass('card-collapsed');
      body.slideUp(200);
    } else if (!body.is(':visible')) {
      parent.removeClass('card-collapsed');
      body.slideDown(200);
    }
    e.preventDefault();
    e.stopPropagation();
  });

  /******** Card refresh control ********/
  $('[data-toggle=card-refresh]').on('click', function(e) {
    var parent = $(this).parents('.card');
    parent.addClass('card-refreshing');
    window.setTimeout(function() {
      parent.removeClass('card-refreshing');
    }, 3000);
    e.preventDefault();
    e.stopPropagation();
  });

  /******** Card remove control ********/
  $('[data-toggle=card-remove]').on('click', function(e) {
    var parent = $(this).parents('.card');
    parent.addClass('animated zoomOut');
    parent.bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      parent.remove();
    });
    e.preventDefault();
    e.stopPropagation();
  });
 
  /******** Tick Mark ********/ 
  $('.tickcard').on('click', function(){
	//$(this).parent('.text-overflow').find('.tick-mark').show();
	$('.tickcard').removeClass('activetick');
	 $(this).toggleClass('activetick');
});

 /******** Search form ********/
  $('.search-form .form-control').focusout(function() {
    $('.header-inner').removeClass('search-focus');
    searchState = false;
  }).focusin(function() {
    $('.header-inner').addClass('search-focus');
    searchState = true;
  });

  /******** Sidebar toggle menu ********/
  $('[data-toggle=sidebar]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });
  $('.main-panel').on('click', function(e) {
    var target = e.target;
    if (menuState && target !== $('[data-toggle=sidebar]') && !$('.header-secondary')) {
      toggleMenu();
    }
  });

  /******** Sidebar menu ********/
  $('.sidebar-panel nav a').on('click', function(e) {
    var $this = $(this),
      links = $this.parents('li'),
      parentLink = $this.closest('li'),
      otherLinks = $('.sidebar-panel nav li').not(links),
      subMenu = $this.next();
    if (!subMenu.hasClass('sub-menu')) {
      toggleMenu();
      return;
    }
    otherLinks.removeClass('open');
    if (subMenu.is('ul') && (subMenu.height() === 0)) {
      parentLink.addClass('open');
    } else if (subMenu.is('ul') && (subMenu.height() !== 0)) {
      parentLink.removeClass('open');
    }
    if (subMenu.is('ul')) {
      return;
    }
    e.stopPropagation();
    return;
  });
  $('.sidebar-panel').find('> li > .sub-menu').each(function() {
    if ($(this).find('ul.sub-menu').length > 0) {
      $(this).addClass('multi-level');
    }
  });
  
  
 /* SIDEBAR OPEN --- starts */
    var menuUrl = window.location.pathname;
    var tmpUrl	=	menuUrl.split("/");
	var length	=	tmpUrl.length;
    
    if(length >= 3)
    {
        if(length == 4)
        {
            var checkUrl		=	tmpUrl[tmpUrl.length - 2];
        }
        else
        {
            var checkUrl		=	tmpUrl[tmpUrl.length - 1];
        }
    }
    else
    {
        if(length == 3)
        {
            var checkUrl		=	tmpUrl[tmpUrl.length - 2];
        }
        else
        {
             var checkUrl		=	tmpUrl[tmpUrl.length - 1];
        }
       
    }
	
    switch(checkUrl)
    {
       case "createplan":
       case "viewplans":
       $("#plans-div").addClass('open');
            break;
        
        case "adduser":
        case "viewusers":
        case "edituser":
        $("#users-div").addClass('open');
           break;
           
    }

 	$('ul.sub-menu li a').each(function(){
		
			if($($(this))[0].href==String(window.location)) {
				
				$(this).parent().addClass('active-li');
				
			}
	
	});
	$('ul.nav li a').each(function(){
		
			if($($(this))[0].href==String(window.location)) {
				
				$(this).parent().addClass('active-li');
				
			}
	
	});
 
 
   /* SIDEBAR OPEN --- ends*/



/* form image upload starts here*/
$('#EdufileUpload1').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPic1").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
	  $('#EdufileUpload2').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPic2").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
		 $('#EdufileUpload3').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPic3").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
		  $('#EdufileUpload4').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPic4").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
			 $('#EdufileUpload5').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPic5").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
	  	  $('#IdenfileUpload1').on('change', function(){
				var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPicI1").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
	  	  $('#IdenfileUpload2').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPicI2").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
	  	  $('#IdenfileUpload3').on('change', function(){
		 
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPicI3").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
	  	  $('#IdenfileUpload4').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPicI4").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
				$('#IdenfileUpload5').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPicI5").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
	  	$('#EmploymentfileUpload1').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("currentPicEmployment1").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
	  });
	  
/* form image upload ends here*/

	  	  $('#invoiceUpload').on('change', function(){
		  
			var reader = new FileReader();  
			reader.onload = function (e) {
			// get loaded data and render thumbnail.
			document.getElementById("invoice-img").src = e.target.result;
			};
			// read the image file as a data URL.
			reader.readAsDataURL(this.files[0]);
				 
			});
			
		
			
/*select all checkbox start*/
$("#chkall_bgv_ref").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});
$("#chkall_bgv_edu").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});
$("#chkall_bgv_addr").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});
$("#chkall_bgv_emp").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});
$("#chkall_bgv_tlbd").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});

/*select all checkbox end*/
	
  /******** Tick Mark ********/ 
  $('.tickcard').on('click', function(){
	//$(this).parent('.text-overflow').find('.tick-mark').show();
	$('.tickcard').removeClass('activetick');
	 $(this).toggleClass('activetick');
});
/******** Tick Mark end********/ 
  
 /* search filter starts */
    $('.accordion-toggle').click(function(){
		$('.accordion-heading').toggleClass('accordion-opened');		
	}); 
	
/* search filter ends */	
		//$('.company-notlisted').hide();
    $('.cmp-not-handle').click(function(){
		$('.company-notlisted').show();		
	});
		
		  $('.edu-not-handle').click(function(){
		$('.education-notlisted').show();		
	});
		

$(".onlymonthyear").datepicker( {
    format: "mm-yyyy",
    viewMode: "months", 
    minViewMode: "months"
});
//Authorization page image upload

$('#file-upload').change(function(e){
var fileName = e. target. files[0]. name;

$('#authImageName').val(fileName);

});

$('#excelupload').change(function(e){
var fileName = e. target. files[0]. name;

$('#excelName').val(fileName);

});

$('#file-upload-zip').change(function(e){
var fileName = e. target. files[0]. name;

$('#zipImageName').val(fileName);

});




})(jQuery);