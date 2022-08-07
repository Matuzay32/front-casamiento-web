import {
	Avatar,
	Text,
	Box,
	chakra,
	Container,
	Flex,
	Icon,
	SimpleGrid,
	useColorModeValue,
	Image,
	Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import Spotify from "./Spotify";

export default function ContenidoListaMusica() {
	const [spotyLink, setSpotyLink] = useState([
		{ url: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5" },
		{ url: "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ" },
		{ url: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz" },
	]);

	return (
		<>
			<Flex
				pos={"relative"}
				textAlign={"center"}
				pt={10}
				justifyContent={"center"}
				direction={"column"}
				width={"full"}
			>
				<Box
					height={"auto"}
					width={{ base: "full", sm: "lg", lg: "xl" }}
					margin={"auto"}
				></Box>
				<Box
					display={"flex"}
					justifyContent={"space-evenly"}
					flexFlow={{ base: "column", sm: "wrap", lg: "wrap" }}
					spacing={"2"}
					mt={10}
				>
					{spotyLink?.map((spotifyInfo, index) => {
						return (
							<Spotify
								id={`spoty${index}`}
								key={`${index}`}
								{...spotifyInfo}
								index={index}
							/>
						);
					})}
				</Box>
			</Flex>
		</>
	);
}
