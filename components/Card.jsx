import React from "react";
import {
	Icon,
	keyframes,
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	Button,
	useColorModeValue,
	useBreakpointValue,
} from "@chakra-ui/react";

export default function Card(props) {
	const { evento, fecha, imagen, index, botonTexto, icon, datos, verBoton } =
		props;

	return (
		<Center py={20} width={{ base: "full", sm: "full", lg: "30%" }}>
			<Box
				maxW={"270px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"md"}
				overflow={"hidden"}
			>
				<Image h={"120px"} w={"full"} src={imagen} objectFit={"cover"} />

				<Box p={6}>
					<Stack spacing={0} align={"center"} mb={5}>
						<Heading
							fontSize={"4xl"}
							fontWeight={500}
							color={100}
							fontFamily={"body"}
							width={"100%"}
							mb={"1rem"}
							borderBottomWidth={{ base: "2px", md: "2px" }}
						>
							{evento}
						</Heading>
						<Text color={"gray.500"}>{datos}</Text>
					</Stack>
					<Stack spacing={0} align={"center"} mb={5}></Stack>

					<Stack direction={"row"} justify={"center"} spacing={6}>
						<Stack
							display={"flex"}
							justifyContent={"center"}
							w={"5rem"}
							h={"5rem"}
							spacing={0}
							borderRadius={"50px"}
							border={"2px solid black"}
							align={"center"}
						>
							<Icon fontSize={"40px"} as={icon} />
						</Stack>
					</Stack>

					{verBoton && (
						<Button
							w={"full"}
							mt={8}
							bg={useColorModeValue("#151f21", "gray.900")}
							color={"white"}
							rounded={"2xl"}
							_hover={{
								transform: "translateY(-2px)",
								boxShadow: "lg",
								backgroundColor: "#d5b063",
							}}
						>
							{botonTexto}
						</Button>
					)}
				</Box>
			</Box>
		</Center>
	);
}
