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
		{ url: "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai" },
		{ url: "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi" },
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
				<Heading
					fontWeight={600}
					fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
					lineHeight={"110%"}
					color={"white"}
					textShadow={"-5px -2px 0px #ffecec7a"}
				>
					Lista
				</Heading>
				<Box
					boxShadow={"dark-lg"}
					height={"auto"}
					width={{ base: "full", sm: "lg", lg: "xl" }}
					margin={"auto"}
				></Box>
				<Box
					display={"flex"}
					justifyContent={"space-evenly"}
					flexFlow={{ base: "column", sm: "wrap", lg: "wrap" }}
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
