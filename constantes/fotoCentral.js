//MUESTRA LAS IMAGENES QUE ESTAN CARGADAS EN LA DB
export const obtenerFotoCentralDesdeLaDb = async () => {
	const res = await fetch("http://localhost:4000/fotoCentral");
	return await res.json();
};

//GUARDA EL NOMBRE LA IMAGEN EN LA DB DE FOTOSCENTRALES
export const subirFotoCentralDb = async (datos) => {
	const res = await fetch(`http://localhost:4000/fotoCentral`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(datos),
	});
	const data = res.json();

	return data;
};

//GUARDA LA IMAGEN CENTRAL EN LA GALERIA DE FOTOS
export const subirFotoCentral = async (data) => {
	const res = await fetch("http://localhost:4000/fotoCentral/file", {
		method: "POST",
		mode: "cors",
		body: data,
	});
	return await res.json();
};

//CON ESTO SE MODIFICA LA POSICION DE LA FOTO CENTRAL EN EL EJE Y
export const posicionFotoCentralEnY = 1;

//ESTA ES LA FOTO CENTRAL POR DEFECTO EN CASO DE QUE NO SE QUIERA CAMBIAR

export const fotoPorDefecto = "images/fotoCentral.jpeg";
