import React from "react";
import { Box, Center } from "@chakra-ui/react";
import HeroBackOffice from "../../components/HeroBackOffice";
import CambiarHorario from "../../components/CambiarHorario";

export default function cambiarHorario() {
	return (
		<Box
			// backgroundImage="linear-gradient(wheat, #FF8C00, black)"
			backgroundSize={"cover"}
			backgroundPosition={"100% 50%"}
			backgroundImage={"url('../images/time.jpg')"}
		>
			<Box>
				<HeroBackOffice
					colorPrimerTitulo={"wheat"}
					colorParrafo={"white"}
					color={"white"}
					titulo={"Cambiar horario y fecha"}
					parrafo={
						"Esta sección  es para poder cambiar la fecha y la hora del casamiento"
					}
				></HeroBackOffice>
			</Box>
			<CambiarHorario></CambiarHorario>
		</Box>
	);
}
