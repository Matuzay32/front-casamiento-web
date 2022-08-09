import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Spotify from "../../components/Spotify";
import ContenidoListaMusica from "../../components/ContenidoListaMusica";
import HeroBackOffice from "../../components/HeroBackOffice";

export default function listaMusica() {
	return (
		<Box backgroundImage="linear-gradient(wheat,  teal, black)">
			<Box>
				<HeroBackOffice
					colorParrafo={"white"}
					color={"white"}
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
