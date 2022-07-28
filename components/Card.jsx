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
	const { evento, fecha, imagen, index, botonTexto, icon, datos } = props;
	const waves = keyframes`
	0% {
     clip-path: polygon(0 8%, 7% 6%, 14% 5%, 21% 5%, 28% 6%, 34% 8%, 40% 12%, 46% 17%, 50% 20%, 54% 23%, 60% 25%, 66% 26%, 70% 26%, 77% 25%, 83% 23%, 89% 21%, 95% 19%, 100% 17%, 100% 100%, 0% 100%);
  }

  50% {
         
    clip-path: polygon(0 15%, 9% 21%, 14% 23%, 18% 25%, 21% 26%, 30% 28%, 32% 28%, 40% 27%, 46% 26%, 52% 23%, 57% 19%, 62% 15%, 68% 11%, 73% 8%, 79% 6%, 86% 5%, 93% 5%, 100% 6%, 100% 100%, 0% 100%);
  }
  100% {
     clip-path: polygon(0 8%, 7% 6%, 14% 5%, 21% 5%, 28% 6%, 34% 8%, 40% 12%, 46% 17%, 50% 20%, 54% 23%, 60% 25%, 66% 26%, 70% 26%, 77% 25%, 83% 23%, 89% 21%, 95% 19%, 100% 17%, 100% 100%, 0% 100%);
  }
	`;

	return (
		<Center py={3}>
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

					<Button
						w={"full"}
						mt={8}
						bg={useColorModeValue("#151f21", "gray.900")}
						color={"white"}
						rounded={"2xl"}
						_hover={{
							transform: "translateY(-2px)",
							boxShadow: "lg",
						}}
					>
						{botonTexto}
					</Button>
				</Box>
			</Box>
		</Center>
	);
}

// <Text
// as={"span"}
// bgGradient="linear(to-r, red.400,pink.400)"
// bgClip="text"
// >
// "
// </Text>
// <Icon as={FaCarSide} />
// <Text
// as={"span"}
// bgGradient="linear(to-r, red.400,pink.400)"
// bgClip="text"
// >
// "
// </Text>
