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
	HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Spotify from "./Spotify";

export default function ContenidoListaMusica() {
	const [spotyLink, setSpotyLink] = useState([
		{ url: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5" },
		{ url: "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi" },
		{ url: "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ" },
		{ url: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz" },
		{ url: "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai" },
		{ url: "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi" },
		{ url: "https://open.spotify.com/artist/2vaWvC8suCFkRXejDOK7EE" },
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

				{spotyLink ? (
					<Box
						display={"flex"}
						justifyContent={"space-evenly"}
						flexFlow={{ base: "column", sm: "wrap", lg: "wrap" }}
						mt={10}
					>
						{spotyLink?.map((spotifyInfo, index) => {
							return (
								<Spotify key={`spoty${index}`} {...spotifyInfo} index={index} />
							);
						})}
					</Box>
				) : (
					<HStack mt={10} p={3} justifyContent={"center"} w={"full"}>
						<Box
							boxShadow={"dark-lg"}
							rounded={"xl"}
							p={6}
							h="auto"
							maxW={"270px"}
							bg={"white"}
						>
							<Heading
								fontSize={"xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								borderBottomWidth={{ base: "2px", md: "2px" }}
							>
								Música
							</Heading>
							<Text
								fontSize={"xl"}
								fontWeight={500}
								color={"gray.500"}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								textTransform={"capitalize"}
							>
								No hay temas en su lista de sugerencias musicales
							</Text>
						</Box>
					</HStack>
				)}
			</Flex>
		</>
	);
}
