//Get de fecha

export const fechasHoras = async () =>
	(await fetch("http://localhost:4000/fecha")).json();

export const cargaFechaHora = async (data) => {
	return await fetch("http://localhost:4000/fecha", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
