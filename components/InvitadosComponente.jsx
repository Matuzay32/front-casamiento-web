import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Container,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";

const Invitado = ({ children }) => {
	return <Box br>{children}</Box>;
};

const InvitadoContenido = ({ children }) => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			boxShadow={"lg"}
			p={8}
			rounded={"xl"}
			align={"center"}
			pos={"relative"}
			_after={{
				content: `""`,
				w: 0,
				h: 0,
				borderLeft: "solid transparent",
				borderLeftWidth: 16,
				borderRight: "solid transparent",
				borderRightWidth: 16,
				borderTop: "solid",
				borderTopWidth: 16,
				borderTopColor: useColorModeValue("white", "gray.800"),
				pos: "absolute",
				bottom: "-16px",
				left: "50%",
				transform: "translateX(-50%)",
			}}
		>
			{children}
		</Stack>
	);
};

const InvitadoTitulo = ({ children }) => {
	return (
		<Heading
			fontSize={"xl"}
			fontWeight={500}
			color={100}
			fontFamily={"body"}
			width={"100%"}
			mb={"1rem"}
			borderBottomWidth={{ base: "2px", md: "2px" }}
			textTransform={"capitalize"}
			as={"h3"}
			// fontSize={"xl"}
		>
			{children}
		</Heading>
	);
};

const InvitadoTexto = ({ children }) => {
	return (
		<Text
			textTransform={"capitalize"}
			textAlign={"center"}
			color={"gray.500"}
			fontSize={"sm"}
		>
			{children}
		</Text>
	);
};

const InvitadoCantidad = ({ src, name, cantidad }) => {
	return (
		<Flex align={"center"} mt={8} direction={"column"}>
			<Stack
				boxShadow={"2xl"}
				h="100px"
				w="100px"
				borderRadius={"full"}
				alignItems={"center"}
				bg={"white"}
				spacing={-1}
				align={"center"}
			>
				<Text
					fontSize={"lg"}
					fontWeight={500}
					p="1"
					color={100}
					fontFamily={"body"}
					width={"100%"}
					mb={3}
					borderBottomWidth={{ base: "1px", md: "1px" }}
					textTransform={"capitalize"}
					mt={3}
				>
					{name}
				</Text>

				<Text color={"gray.500"} fontWeight={500}>
					{cantidad}
				</Text>
			</Stack>
		</Flex>
	);
};

export default function InvitadosComponente({
	nombre,
	apellido,
	estado,
	cantidad,
}) {
	return (
		<Box>
			<Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 10, md: 4, lg: 10 }}
				>
					<Invitado>
						<InvitadoContenido>
							<InvitadoTitulo>{`${nombre} ${apellido} `}</InvitadoTitulo>
							<InvitadoTexto>{estado}</InvitadoTexto>
						</InvitadoContenido>
						<InvitadoCantidad
							src={
								"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
							}
							name={"Cantidad"}
							cantidad={cantidad}
						/>
					</Invitado>
				</Stack>
			</Container>
		</Box>
	);
}
