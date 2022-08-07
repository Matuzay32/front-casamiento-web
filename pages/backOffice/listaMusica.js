import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Spotify from "../../components/Spotify";
import ContenidoListaMusica from "../../components/ContenidoListaMusica";
import HeroBackOffice from "../../components/HeroBackOffice";

export default function listaMusica() {
	return (
		<>
			<Box>
				<HeroBackOffice
					color={400}
					titulo={"Lista de canciones"}
					parrafo={
						"Estas son las sugerencias musicales que ponen los invitados para el casamiento, ideal para arma la playlist perfecta"
					}
				></HeroBackOffice>
			</Box>
			<ContenidoListaMusica></ContenidoListaMusica>
		</>
	);
}
