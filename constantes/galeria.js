export const postAllPhotos = async (data) => {
	const res = await fetch("http://localhost:4000/galeria/files", {
		method: "POST",
		mode: "cors",
		body: data,
	});
	return await res.json();
};

export const guardarNombreImagenes = async (datos) => {
	const res = await fetch(`http://localhost:4000/galeria`, {
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
