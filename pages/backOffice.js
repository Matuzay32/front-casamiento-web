import React from "react";
import { Box, Text } from "@chakra-ui/react";
import OpcionesDelBackOffice from "../components/OpcionesDelBackOffice";
import HeroBackOffice from "../components/HeroBackOffice";

export default function backOffice() {
	return (
		<Box>
			<HeroBackOffice
				color={200}
				titulo={"Pagina central"}
				parrafo={
					"Esta es la página central del back Office que sirve para ver la lista de invitados, cambiar la foto central, las fotos de la galería como asi también ver las sugerencias musicales"
				}
			></HeroBackOffice>
		</Box>
	);
}
