import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Spotify from "../../components/Spotify";
import ContenidoListaMusica from "../../components/ContenidoListaMusica";
import HeroBackOffice from "../../components/HeroBackOffice";

export default function listaMusica() {
	return (
		<Box backgroundImage="linear-gradient(white,  #f7d7ac, #B2936C)">
			<Box>
				<HeroBackOffice
					color={"#2C7A7B"}
					titulo={"Lista de canciones"}
					parrafo={
						"Estas son las sugerencias musicales que ponen los invitados para el casamiento, ideal para arma la playlist perfecta"
					}
				></HeroBackOffice>
			</Box>
			<ContenidoListaMusica></ContenidoListaMusica>
		</Box>
	);
}
