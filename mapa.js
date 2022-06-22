//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el primer punto.
function Punto1() {
	document.getElementById("Info").innerHTML = '<img class="imgM align" src="imagenes/hospital.jpeg" alt="Hospital San Antonio"><br><br><span>Hospitatal San Antonio de Padua</span><br><p>Nombrado en honor a uno de los sacerdotes cristianos apasionados por la medicina y el cuidado de personas.</p><br><p align="justify">Hospital que fue renovado completamente, el hospital original fue demolido y este nuevo se ubico justo detras, permitiendo conservar el terreno del viejo hospital como zona verde.</p>';
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el segundo punto.
function Punto2() {
	document.getElementById("Info").innerHTML = '<img class="imgM" src="imagenes/villa.jpg" alt="Villa deportiva"><br><span>Complejo deportivo Villa olimpica</span><br><p align="justify">Es un complejo deportivo el cual tiene una cancha deportiva y un segmento de atletismo de medidas olimpicas, tambien es posible jugar otros deporte como: futbol de salon, baloncesto y practicas de patinaje.</p><br>Este complejo deportivo tambien es sede de los bomberos voluntarios del minucipio, los cuales se encargan de su mantenimiento y seguridad. ';
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa interactivo para contener información sobre el tercer punto.
function Punto3() {
	document.getElementById("Info").innerHTML = '<img class="imgM" src="imagenes/pola.jpg" alt="Parque La Pola"><br><span>Parque La Pola</span><br><br>Nombrado en honor a policarpa salavarrieta. <br><br>';
	document.getElementById("Info").scrollIntoView();
}

//Función para cambiar el párrafo posterior al mapa inte	ractivo para contener información sobre el cuarto punto.
function Punto4() {
	document.getElementById("Info").innerHTML = '<img class="imgM" src="imagenes/Rovira.png" alt="Parque Garcia Roriva La Plata"><br><span>Parque Custodio Garcia Rovira</span><br><br>Nombrado en honor al ex-presidente de las provincias unidas de Nueva Granada.<br><br> En la imagen una estatua de Garcia Rovira,situada frente a la catedral principal del pueblo.';
	document.getElementById("Info").scrollIntoView();
}