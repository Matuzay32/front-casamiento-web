import React from "react";
import { Box } from "@chakra-ui/react";

export default function Spotify(props) {
	const { url } = props;
	return (
		<Box m={5} maxW={"370px"} w={"full"}>
			<Box
				w={"100%"}
				height={"auto"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Box
					as="iframe"
					src={`https://embed.spotify.com/?uri=${url}`}
					// src="https://embed.spotify.com/?uri=https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
					width="100%"
					sx={{
						aspectRatio: "16/9",
					}}
				></Box>
			</Box>
		</Box>
	);
}
