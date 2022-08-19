//MUESTRA LAS IMAGENES QUE ESTAN CARGADAS EN LA DB
export const obtenerFotoCentralDesdeLaDb = async () => {
	const res = await fetch("http://localhost:4000/fotoCentral");
	return await res.json();
};

//CON ESTO SE MODIFICA LA POSICION DE LA FOTO CENTRAL EN EL EJE Y
export const posicionFotoCentralEnY = 1;

//ESTA ES LA FOTO CENTRAL POR DEFECTO EN CASO DE QUE NO SE QUIERA CAMBIAR

export const fotoPorDefecto = "images/fotoCentral.jpeg";
