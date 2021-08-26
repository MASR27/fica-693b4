<! DOCTYPE html >
< html >
< cabeza >
	< Título > botón </ titulo >
	< meta  name = " viewport " content = " width = device-width, initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no " />
	< link  rel = " icon " type = " image / x-icon " href = " img / favicon.png " />
	< meta  name = " apple-mobile-web-app-enabled " content = " yes " >
	< meta  name = " apple-touch-fullscreen " content = " yes " >
	< meta  name = " apple-mobile-web-app-status-bar-style " content = " default " >
	< meta  content = "" name = " description " />
	< meta  content = "" name = " autor " />
	< link  rel = " stylesheet " href = " https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css " >
	< script  src = " https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js " > </ script >
	< script  src = " https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js " > </ script >
	< style  type = " text / css " >
	. formulario-correo electrónico {
		posición : absoluta;
		izquierda :  0 ;
		ancho : 70 %  ! importante ;
		padding-right :  25 %  ! importante ;
	}
	. form-email :: -moz-placeholder {
		tamaño de fuente :  16 px ;
	}
	. formulario-correo electrónico : -ms-input-placeholder {
		tamaño de fuente :  16 px ;
	}
	. formulario-correo electrónico :: -webkit-input-placeholder {
		tamaño de fuente :  16 px ;
	}
	. form-btn {
		posición : absoluta;
		margen inferior :  15 px ;
		relleno :  11 px ;
		ancho :  25 % ;
		radio del borde :  50 px ;
		derecha :  30 % ;;
		curs o :  puntero ;
		borde : ninguno ;
		color :  # ffffff ;
		caja-sombra : 0 3px 6px rgba (0 , 0 , 0 , 0.16);
		color de fondo :  # 901a1e;
	}
	. formulario-correo electrónico {
		posición : absoluta;
		izquierda :  0 ;
		ancho : 70 %  ! importante ;
		padding-right :  25 %  ! importante ;
	}
	. form-email :: -moz-placeholder {
		tamaño de fuente :  16 px ;
	}
	. formulario-correo electrónico : -ms-input-placeholder {
		tamaño de fuente :  16 px ;
	}
	. formulario-correo electrónico :: -webkit-input-placeholder {
		tamaño de fuente :  16 px ;
	}
	input [ type = text ] {
		borde :  1 px sólido # f3f3f3 ;
		color :  # 000000 ;
		color de fondo :  # ffffff ;
		ancho :  100 % ;
		radio del borde :  50 px ;
		caja-sombra :  0  2 px  6 px  rgba ( 0 ,  0 ,  0 ,  0.09 );
		margen inferior :  15 px ;
		relleno :  10 px ;
	}
	input [ type = text ] : focus {
		color del borde :  # 0c68ff ;
		color :  # 000000 ;
	}
	. pt-40 {
		padding-top :  40 px ;
	}
	. field-error {
		borde :  1 px rojo sólido ! importante ;
	}
	h2 {
		color :  # 901a1e ;
		peso de fuente :  600 ;
		margen superior :  100 px ;
		margen inferior :  20 px ;
	}
</ estilo >
</ cabeza >
< cuerpo >
	< div  class = " contenedor " >
		< div  class = " fila " >
			< div  class = " col-md-12 col-sm-12 col-xs-12 " >
				< P  clase = " PT-40 " > Enviar < b > Válido </ b > la forma de comprobar la < b > Éxito </ b > Mensaje </ p >
				< P  clase = "" > Enviar < b > Blank </ b > forma para comprobar la < b > Error </ b > Mensaje </ p >
				< h2 > Suscríbete al boletín !! </ h2 >
				< form  class = " form-email-js " >
					< input  class = " form-email validate-email " type = " text " id = " email " name = " email " placeholder = " Ingresar dirección de correo electrónico " >
					< div  class = " form-btn text-center " > Suscribirse </ div >
				</ formulario >
			</ div >
		</ div >
	</ div >
</ cuerpo >

< script  type = " text / javascript " >
	$ ( ".form-btn" ) . haga clic en ( función ( ) {
		$ ( "formulario" ) . find ( '.validate-email' ) . cada ( función ( )  {
			if  ( ! ( / ( . + ) @ ( . + ) { 2, } \. ( . + ) { 2, } / . test ( $ ( esto ) . val ( ) ) ) )  {
				$ ( esto ) . addClass ( 'error de campo' ) ;
				$ ( ".form-btn" ) . animar ( {
					ancho : "70%"
				} , 1000 ) . texto ( "Introduzca una dirección de correo electrónico válida" ) ;
				setTimeout ( function ( )  {
					$ ( ".form-btn" ) . animar ( {
						ancho : "25%"
					} , 1000 ) ;
					setTimeout ( function ( )  {
						$ ( ".form-btn" ) . texto ( "Suscribirse" ) . fadeIn ( 1000 ) ;
					} , 1000 ) ;
				} ,  2000 ) ;
			}  más  {
				$ ( esto ) . removeClass ( 'error de campo' ) ;
				$ ( ".form-btn" ) . animar ( {
					ancho : "70%" ,
				} , 1000 ) . text ( "Enviado con éxito" ) . css ( "fondo" , "# 008000" ) ;
				setTimeout ( function ( )  {
					$ ( '.form-email' ) . val ( '' ) ;
					$ ( ".form-btn" ) . animar ( {
						ancho : "25%" ,
					} , 1000 ) ;
					setTimeout ( function ( )  {
						$ ( ".form-btn" ) . texto ( "Enviar" ) . css ( "fondo" , "# 901a1e" ) ;
					} , 1000 ) ;
				} ,  2000 ) ;
			}
		} ) ;
	} )



</ script >
</ html >
