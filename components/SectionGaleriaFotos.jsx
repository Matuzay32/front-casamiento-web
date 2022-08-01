import React from "react";
import { Flex, Box, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaCameraRetro } from "react-icons/fa";
import GaleriaFotos from "./GaleriaFotos";

export default function SectionGaleriaFotos() {
	return (
		<Flex
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
			>
				<Heading
					py={5}
					fontSize={48}
					fontWeight={"bold"}
					color={useColorModeValue("gray.700", "gray.50")}
				>
					Galeria de fotos
				</Heading>
			</Box>
			<Box
				display={"flex"}
				justifyContent={"space-evenly"}
				flexFlow={{ base: "column", sm: "wrap", lg: "wrap" }}
				spacing={"2"}
				mt={10}
			></Box>
			<Box>
				<Icon w={"70px"} h={"70px"} as={FaCameraRetro}></Icon>
			</Box>

			<Box h={"auto"} w={"full"} bg={100} p={20}>
				<GaleriaFotos></GaleriaFotos>
			</Box>
		</Flex>
	);
}
