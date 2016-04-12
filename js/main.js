$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(document).ready(function() {
	
	function heightDetect() {
		$(".row").css("height", $(window).height());
		$(".header_table").css("height", $(window).height());
	};
	
	$(window).resize(function() {
		heightDetect();
	});

	function scroll() {
		var link = $(this).attr("href");
		var str_link = "a[href*='" + link + "']";
		$(str_link).mPageScroll2id();
		onClickToggleMenu();
		// $("ul.navbar-nav li a").removeClass('active');
		// $(this).addClass('active');

	};

	function navToggleOnScroll() {
		var heightDoc = $(document).height();
		var heightPage = $(window).height();
		var heightTop = $(window).scrollTop();
		switch (true) {
		   case heightTop>=0 && heightTop<heightPage:
		      $("ul.navbar-nav li a").removeClass('active');
		      $("a[href='#header']").addClass('active');
		      break;
		   case heightTop>=heightPage && heightTop<heightPage*2:
		      $("ul.navbar-nav li a").removeClass('active');
		      $("a[href='#services']").addClass('active');
		      break;
		    case heightTop>=heightPage*2 && heightTop<heightPage*3:
		      $("ul.navbar-nav li a").removeClass('active');
		      $("a[href='#portfolio']").addClass('active');
		      break;
		    case heightTop>=heightPage*3 && heightTop<heightDoc:
		      $("ul.navbar-nav li a").removeClass('active');
		      $("a[href='#contacts']").addClass('active');
		      break;
		};
	};

	function onClickToggleMenu() {
		if ($(".sandwich").is(":visible")) {
			if ($(".sandwich").is(".active_sw")) {
				$(".sandwich").removeClass("active_sw");
				$("nav.navbar-second").fadeOut(600).removeClass("fadeInUp animated");
			} else {
				$(".sandwich").addClass("active_sw");
				$("nav.navbar-second").fadeIn(600).addClass("fadeInUp animated");
			};
		};
	};

	function openModal() {
		var imgSrc = $(this).children("img").attr("src");
		var reg = /img\/portfolio_thumbnails\/(\d{2})\.jpg/i;
		var idPhotos = reg.exec(imgSrc);

		imgSrc = "img/portfolio/" + idPhotos[1] + ".jpg";
		$("div.fraim img").attr('src', imgSrc);
		
		console.log(imgSrc);
		console.log(idPhotos[1]);
	};

	heightDetect();
	
	$("ul.navbar-nav li a").click(scroll);

	$(".toggle_menu").click(onClickToggleMenu);

	$("#portfolio a").click(openModal);

	$(document).scroll(navToggleOnScroll);

	// function test() {
	// 	var h = $(document).height();
	// 	console.log(h/4);
	// };

	// test();

});