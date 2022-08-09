import React from "react";
import { Box, Center } from "@chakra-ui/react";
import HeroBackOffice from "../../components/HeroBackOffice";
import CambiarFotoCentral from "../../components/CambiarFotoCentral";

export default function fotoCentral() {
	return (
		<Box backgroundImage="linear-gradient(wheat, #548a8a, black)">
			<Box>
				<HeroBackOffice
					colorParrafo={"white"}
					color={"white"}
					titulo={"Galeria de fotos"}
					parrafo={"Esta sección  es para poder cambiar la imagen principal"}
				></HeroBackOffice>
			</Box>
			<CambiarFotoCentral></CambiarFotoCentral>
		</Box>
	);
}
