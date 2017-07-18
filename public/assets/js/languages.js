var languages = {
	'en' : {
		'about' : 'About',
		'works' : 'Works',
		'contact' : 'Contact'
	},
	'es': {
        'about' : 'Acerca',
		'works' : 'Trabajos',
		'contact' : 'Contacto'
		}
	};

  

	$(function(){
        $('.translate').click(function(){
        	event.preventDefault();
            var lang = $(this).attr('id');

            $('.lang').each(function(index,element){
            	$(this).text(languages[lang][$(this).attr('key')]);
            });
        });
	});