import React from "react";
import { Box, Center } from "@chakra-ui/react";
import HeroBackOffice from "../../components/HeroBackOffice";
import CambiarFotoCentral from "../../components/CambiarFotoCentral";

export default function fotoCentral() {
	return (
		<Box
			// backgroundImage="linear-gradient(wheat, #FF8C00, black)"
			backgroundSize={"cover"}
			backgroundPosition={"100% 50%"}
			backgroundImage={"url('../images/fondoGalerias.jpg')"}
		>
			<Box>
				<HeroBackOffice
					colorParrafo={"white"}
					color={"white"}
					titulo={"Cambiar foto central"}
					parrafo={"Esta sección  es para poder cambiar la imagen principal"}
				></HeroBackOffice>
			</Box>
			<CambiarFotoCentral></CambiarFotoCentral>
		</Box>
	);
}
