import Head from "next/head";
import OpcionesDelBackOffice from "./OpcionesDelBackOffice";

import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
} from "@chakra-ui/react";

export default function HeroBackOffice({ titulo, parrafo, color }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Container maxW={"3xl"}>
				<Stack
					as={Box}
					textAlign={"center"}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
					>
						Back office
						<br />
						<Text as={"span"} color={color}>
							{titulo}
						</Text>
					</Heading>
					<Text color={"gray.500"}>{parrafo}</Text>
					<Stack
						direction={"column"}
						spacing={3}
						align={"center"}
						alignSelf={"center"}
						position={"relative"}
					>
						<OpcionesDelBackOffice />
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
