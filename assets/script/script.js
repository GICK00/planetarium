if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}

/* Слайдер */

$('.arrow a').click(function(){
$('.slide_1').slideToggle();
$('.slide_2').slideToggle();
})

/* Увеличение картинок */

$(document).ready(function() {
	
	$(".image").click(function(){	
	  	var img = $(this);	
		var alt = img.attr('alt'); 
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ // 
						 "<img src='"+alt+"' class='popup_img' />"+ 
						 "</div>"); 
		$(".popup").fadeIn(600); // 
		$(".popup_bg").click(function(){	   
			$(".popup").fadeOut(600);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 600);
		});
	});	
});		

/* Уведомления */

const notifElem = document.querySelector('.notification')

const notif = {
	open: (color = 'blakc') => notifElem.classList.add('go', color),
	close: () => notifElem.classList.remove('go')
}

setTimeout(() => {
	notif.open()
	setTimeout(() => {
		 notif.close()
	}, 15000);
}, 5000);	