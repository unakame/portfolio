var languages = {
	'en' : {
		'about' : 'About me',
		'works' : 'Works',
		'contact' : 'Contact'
	},
	'es': {
        'about' : 'Acerca de mí',
		'works' : 'Trabajos',
		'contact' : 'Contáctame'
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