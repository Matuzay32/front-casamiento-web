import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Spotify from "../../components/Spotify";
import HeroBackOffice from "../../components/HeroBackOffice";
import ContenidoListaInvitados from "../../components/ContenidoListaInvitados";

export default function listaMusica() {
	return (
		<Box
			// backgroundImage="linear-gradient(white,  #f7d7ac, #B2936C)"
			backgroundSize={"cover"}
			backgroundPosition={"50% 50%"}
			backgroundImage={"url('../images/fondoInvitaciones.jpg')"}
		>
			<Box>
				<HeroBackOffice
					colorParrafo={"white"}
					color={"white"}
					titulo={"Lista de invitados"}
					parrafo={
						"Esta es la lista de invitados confirmados para el casamiento"
					}
				></HeroBackOffice>
			</Box>
			<ContenidoListaInvitados></ContenidoListaInvitados>
		</Box>
	);
}
