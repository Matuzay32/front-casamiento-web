import { useEffect, useState } from "react";
import { Flex, Box, HStack, Text, Heading, Image } from "@chakra-ui/react";
import { muestraTodasLasFotosGaleria } from "../constantes/galeria";

export default function GaleriaFotos() {
	let arrowStyles = {
		cursor: "pointer",
		pos: "absolute",
		top: "50%",
		w: "auto",
		mt: "-22px",
		p: "16px",
		color: "white",
		fontWeight: "bold",
		fontSize: "18px",
		transition: "0.6s ease",
		borderRadius: "0 3px 3px 0",
		userSelect: "none",
		_hover: {
			opacity: 0.8,
			bg: "black",
		},
	};

	const [slides, setSlides] = useState([{}]);
	const [defaultImages, SetdefaultImages] = useState([
		{
			nombre: "images/notFound.jpeg",
		},
	]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const slidesCount = slides?.length;
	const prevSlide = () => {
		setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
	};
	const nextSlide = () => {
		setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
	};
	const setSlide = (slide) => {
		setCurrentSlide(slide);
	};
	const carouselStyle = {
		transition: "all 1.5s",
		ml: `-${currentSlide * 100}%`,
	};

	useEffect(() => {
		muestraTodasLasFotosGaleria().then((res) => {
			setSlides(res[0]?.imagenes);
		});
		console.log(slides, "estado fotos de prueba");
		return () => {};
	}, []);

	return (
		<Flex
			w="full"
			// bg="#424242"
			_dark={{
				Rg: "#424242",
			}}
			alignItems="center"
			justifyContent="center"
		>
			{!slides || undefined ? (
				<Flex w="full" overflow="visible" pos="relative">
					<Flex h="auto" w="full" {...carouselStyle}>
						{defaultImages?.map((slide, sid) => {
							return (
								<Box>
									<Text
										pos={"absolute"}
										fontSize={"2xl"}
										fontWeight={500}
										color={"white"}
										fontFamily={"body"}
										width={"100%"}
										mb={"1rem"}
									>
										Aun no hay fotos
									</Text>
									<Box
										p={"30px"}
										key={`slide-${sid}`}
										boxSize="full"
										shadow="md"
										flex="none"
									>
										<Image
											src={slide.nombre}
											boxShadow={"dark-lg"}
											alt="carousel image"
											boxSize="full"
											objectFit="cover"
											cursor={"pointer"}
										/>
									</Box>
								</Box>
							);
						})}
					</Flex>
				</Flex>
			) : (
				<Flex w="full" overflow="visible" pos="relative">
					<Flex h="auto" w="full" {...carouselStyle}>
						{slides?.map((slide, sid) => {
							return (
								<Box
									p={"30px"}
									key={`slide-${sid}`}
									boxSize="full"
									shadow="md"
									flex="none"
								>
									<Text
										backgroundColor={"blackAlpha.800"}
										boxShadow={"dark-lg"}
										borderRadius="30px"
										mb={"10px"}
										color="white"
										fontSize="xs"
										fontWeight={900}
										p="8px 12px"
										pos="absolute"
										top="3"
									>
										{sid + 1} / {slidesCount}
									</Text>
									<Image
										src={`http://localhost:4000/galeria/uploads/${slide.nombre}`}
										boxShadow={"dark-lg"}
										alt="carousel image"
										boxSize="full"
										objectFit="cover"
										cursor={"pointer"}
										onClick={() => setSlide(sid)}
									/>
								</Box>
							);
						})}
					</Flex>

					<Text {...arrowStyles} left="0" onClick={prevSlide}>
						&#10094;
					</Text>

					<Text {...arrowStyles} right="0" onClick={nextSlide}>
						&#10095;
					</Text>

					<HStack justify="center" pos="absolute" bottom="8px" w="full">
						{Array.from({
							length: slidesCount,
						}).map((_, slide) => (
							<Box
								key={`dots-${slide}`}
								cursor="pointer"
								boxSize={["7px", null, "15px"]}
								m="0 2px"
								bg={
									currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
								}
								rounded="50%"
								display="inline-block"
								transition="background-color 0.6s ease"
								_hover={{
									bg: "blackAlpha.800",
								}}
								onClick={() => setSlide(slide)}
							></Box>
						))}
					</HStack>
				</Flex>
			)}
		</Flex>
	);
}
