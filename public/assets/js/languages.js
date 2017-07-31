var languages = {
	'en' : {
		'about' : 'About me',
		'works' : 'Works',
		'contact' : 'Contact',
		'ui': '• UI DEVELOPER •',
		'hello': "Hello World! I'm Dana Franco Pittman, a developer focused on visual web design",
		'meta' : "In Laboratoria I learnt several tools to develop, which allowed me to recreate some applications and web pages already known. My short-term goal is to become a front-end developer and learn another programming language (Swift) in order to develop applications in iOS. I worked for 3 years maintaining an online web radio and I was in charge of verifying that the music was always up to date with the world releases.",
		'yo' : 'ME:'
	},
	'es': {
        'about' : 'Acerca de mí',
		'works' : 'Trabajos',
		'contact' : 'Contáctame',
		'ui' : '• DESARROLLADORA UI •',
		'hello': "Hola Mundo! Soy Dana Franco Pittman, desarrolladora enfocada en el diseño web",
		'meta' : 'En Laboratoria conocí diversas herramientas para desarrollar, lo que me ha permitido recrear diversas aplicaciones y páginas web ya conocidas. Mi meta a corto plazo es convertime en desarrolladora front-end y aprender otro lenguaje de programación (Swift) para desarrollar aplicaciones en iOS. Trabajé por 3 años dando mantenimiento a una radio web online y me encargaba de verificar que la música siempre esté al día con los lanzamientos mundiales.',
		'yo' : 'YO:'
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