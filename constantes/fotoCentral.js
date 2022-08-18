//MUESTRA LAS IMAGENES QUE ESTAN CARGADAS EN LA DB
export const obtenerFotoCentralDesdeLaDb = async () => {
	const res = await fetch("http://localhost:4000/fotoCentral");
	return await res.json();
};
