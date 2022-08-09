import React from "react";
import { Box, Center } from "@chakra-ui/react";
import HeroBackOffice from "../../components/HeroBackOffice";
import GaleriaFotosCargar from "../../components/GaleriaFotosCargar";

export default function fotosGaleria() {
	return (
		<Box
			// backgroundImage="linear-gradient(wheat, #FF8C00, black)"
			backgroundSize={"cover"}
			backgroundPosition={"10% 50%"}
			backgroundImage={"url('../images/fondoGalerias.jpg')"}
		>
			<Box>
				<HeroBackOffice
					colorParrafo={"white"}
					color={"white"}
					titulo={"Galeria de fotos"}
					parrafo={
						"Esta sección  es para poder cambiar las imagenes de la galeria"
					}
				></HeroBackOffice>
			</Box>
			<GaleriaFotosCargar></GaleriaFotosCargar>
		</Box>
	);
}
