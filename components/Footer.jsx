import React from "react";
import {
	Box,
	chakra,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import index from "../pages/index";

export default function Footer({ targetas: footerLinks }) {
	console.log(footerLinks);
	return (
		<Box
			borderTopWidth={"3px"}
			bg={useColorModeValue("white", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={10}
				spacing={4}
				justify={"center"}
				alignItems={{ base: "center", lg: "flex-start", md: "center" }}
			>
				<Stack
					direction={{ base: "column", lg: "row", md: "row" }}
					justifyContent={"center"}
					alignItems={"center"}
					spacing={6}
				>
					{footerLinks.map((elemento, index) => {
						const { href, evento } = elemento;
						return (
							<Link
								key={`${evento}${index}`}
								fontSize={"3xl"}
								fontWeight={500}
								color={100}
								fontFamily={"body"}
								width={"100%"}
								mb={"1rem"}
								textDecoration={"none"}
								href={href}
								_hover={{
									textDecoration: "none",
								}}
							>
								{evento}
							</Link>
						);
					})}
				</Stack>
			</Container>
		</Box>
	);
}
