import React from "react";
import { Box, Text } from "@chakra-ui/react";
export default function Home() {
	return (
		<Box
			height={"90px"}
			backgroundColor={"red"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Text fontWeight={"bold"}>Home</Text>
		</Box>
	);
}
