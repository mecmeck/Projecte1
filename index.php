<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	
	
	<header>
	
		<!-- Import's del CSS -->
		<link href="CSS/principal.css" rel="stylesheet" type="text/css" />
		
		<!-- Import's del js - ninot - principal -->
		<script language="JavaScript" src ="js/principal.js"> </script>
		<script language="JavaScript" src ="js/jquery-1.6.4.js"> </script>
		
		<!-- Import's per Google Maps -->
		<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&amp;language=es"></script>
		<script type="text/javascript" src="js/map.js"></script>
		

		
	</header>
	
	<body>		

		<div id="Paginaprincipal" class="Paginaprincipal" style="top:10px; height:10px;">
				
				<div id="Logo" style="position:absolute; width:110px; top:5px; left:15px;" >
					<img  SRC="img\visited.png" />
				</div>
				
				<div id="Div_opcions" class="opcions" style="position:absolute; width:100px; height:20px; top:100px; left:914px;"  >
					<div id="Identificacio"  style="position:absolute; top:0px; right:0px; width:20px; height:20px; cursor:pointer;" onclick="Identificacio()">
						<img  SRC="img\Identificacio.png" title="Identificacio" style="position:absolute; top:0px; left:0px; width:20px; height:20px; "  />
					</div>
					
				</div>
				<div id="Div_Identificacio" class="Identificacio" style="position:absolute; width:250px; height:1px; top:121px; left:764px; z-index:30; visibility:hidden;">
					<div id="Tanca_identificacio"  style="position:absolute; top:5px; right:5px; width:10px; height:10px; visibility:hidden;">
						<img SRC="img\creu.png" style="position:absolute; top:0px; left:0px; width:10px; height:10px; cursor:pointer;" onclick="Tanca_identificacio()" />
					</div>
					<div id="TB_Identificacio" >
						<br/> <label for="usr" style="position:absolute; left:10px;">Usuari:</label> <input id="TB_usr" type="text" name="TB_usr" class="Dins_Identificacio" style="position:absolute; right:10px; width:100px;"/>
						<br/> <label for="psw" style="position:absolute; left:10px; top:45px;">Contrasenya:</label> <input id="TB_psw" type="password" name="TB_psw" class="Dins_Identificacio" style="position:absolute; top:45px; right:10px; width:100px; "/>
						<br/><br/> <button type="Boto_Login" onclick="Login()" style="position:absolute; right:10px; top:72px;">Login</button>
					</div>
				</div>
					
				<div id="Div_maps" class="maps" style="top: 121px; height:0px; z-index: 3;">
					
				</div>

			
		</div>  
	</body>

</html>
