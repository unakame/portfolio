var languages = {
	'en' : {
		'about' : 'About me',
		'works' : 'Works',
		'contact' : 'Contact',
		'ui': '• UI DEVELOPER •',
		'hello': "Hello World! I'm Dana Franco Pittman, a developer focused on visual web design"
	},
	'es': {
        'about' : 'Acerca de mí',
		'works' : 'Trabajos',
		'contact' : 'Contáctame',
		'ui' : '• DESARROLLADORA UI •',
		'hello': "Hola Mundo! Soy Dana Franco Pittman, desarrolladora enfocada en el diseño web"
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