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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Reloj from "./Reloj";

import { FaWineGlassAlt, FaRing } from "react-icons/fa";
import { IoIosBowtie } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";
import { TbConfetti } from "react-icons/tb";
import Card from "./Card";
import SectionGaleriaFotos from "./SectionGaleriaFotos";
import PillPity from "pill-pity";
import { fechasHoras } from "../constantes/fecha";
import {
	obtenerFotoCentralDesdeLaDb,
	fotoPorDefecto,
	posicionFotoCentralEnY,
} from "../constantes/fotoCentral";
import { obtenerTokenYRol } from "../constantes/tokenLogica";

export default function Home() {
	const [hora, setHora] = useState("");
	const [targetas, setTargetas] = useState();
	const [fotoCentral, setFotoCentral] = useState("images/fotoCentral.jpeg");
	const [posY, setPosY] = useState();
	const patterFill = useColorModeValue("100", "brand.300");

	useEffect(() => {
		fechasHoras().then(({ hora }) => setHora(hora));

		if (hora) {
			////console.log(hora, "esta es mi hota");
		}
		setTargetas([
			{
				href: "/confirmarAsistencia",
				verBoton: true,
				evento: "Confirmar asistencia",
				botonTexto: "Confirmar",
				fecha: "11.11.2022",
				datos: "¿Vas a venir? por favor confirma asistencia",
				icon: TbConfetti,
				imagen:
					"https://images.unsplash.com/photo-1531346618680-ab17d6dcd07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			},
			{
				href: "",
				verBoton: false,
				evento: "Ceremonia",
				botonTexto: "Ubicación",
				fecha: "11.11.2022",
				datos: `Ceremonia: Registro civil Ciudad Evita 
					Av Guemes entre el Leñatero y Bevilaqua 
					Horario: ${hora}Hs `,
				icon: FaRing,
				imagen: `https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
			},
			{
				href: "",
				verBoton: false,
				evento: "Fiesta",
				botonTexto: "Ubicacion",
				fecha: "11.11.2022",
				datos: `Veni a compartir un brindis con nosotrxs! 
					Lugar: Casa Magno 
					Horario: hasta lo que dé`,
				icon: FaWineGlassAlt,
				imagen:
					"https://images.unsplash.com/photo-1621866908556-4f0a830707c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			},
			{
				href: "#targeta3",
				verBoton: false,
				evento: "Codigo de Vestimenta",
				botonTexto: "Ver",
				fecha: "11.11.2022",
				datos: `Vestimenta: lindos y cómodos`,
				icon: IoIosBowtie,
				imagen:
					"https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			},
			{
				href: "/sugerirMusica",
				verBoton: true,
				evento: "Sugerir música",
				botonTexto: "sugerir música",
				fecha: "11.11.2022",
				datos:
					"¿Qué música no puede faltar?. Siéntase libre de sugerir una lista de reproducción ",
				icon: AiFillSound,
				imagen:
					"https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			},
		]);
		return () => {};
	}, [hora]);

	useEffect(() => {
		////console.log(fotoCentral, "esta es mi foto central desde useEffect");
		obtenerFotoCentralDesdeLaDb().then(({ nombre }) => {
			if (nombre) {
				////console.log(nombre);
				posicionFotoCentralEnY().then((x) => setPosY(x));
				setFotoCentral(`http://localhost:4000/fotoCentral/uploads/${nombre}`);
			} else {
				////console.log("no hay imagen");
				setFotoCentral(fotoPorDefecto);
			}
		});
	}, [fotoCentral]);

	return (
		<>
			<Box
				width={{ base: "full", sm: "full", lg: "full" }}
				margin={"auto"}
				height={"900px"}
				overflow={"auto"}
				backgroundPosition={`50% ${posY}%`}
				backgroundAttachment={"fixed"}
				backgroundSize={"cover"}
				clipPath={
					"polygon(50% 0%, 100% 0, 100% 35%, 100% 100%, 80% 90%, 50% 100%, 20% 90%, 0 100%, 0% 35%,0% 35%,  0 0)"
				}
				backgroundImage={`url(${fotoCentral})`}
				backgroundRepeat="no-repeat"
			>
				<Box
					bgGradient={"linear(to-r, gray.900 5%, transparent)"}
					background
					w={"full"}
					h={"full"}
					display={"flex"}
					alignContent={"flex-end"}
					color={"white"}
					backdropFilter=" grayscale(100%)"
				>
					<Flex
						textAlign={"center"}
						pt={10}
						justifyContent={"center"}
						direction={"column"}
						width={"full"}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							width={{ base: "full", sm: "lg", lg: "xl" }}
							margin={"auto"}
						>
							<Box
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								w={"100%"}
								// bg="red"
							>
								<Heading
									fontWeight={500}
									fontSize={{ base: "45px", sm: "60px", xl: "60px" }}
									color={"white"}
								>
									Maru
								</Heading>
								<Heading
									className="mariaLucho"
									color={"white"}
									as={"span"}
									borderRadius={"50%"}
									backgroundColor={100}
									display={"inline-block"}
									width="60px"
									height="60px"
									lineHeight="60px"
									fontSize={{ base: "60px", sm: "60px", xl: "60px" }}
								>
									&
								</Heading>
								<Heading
									fontWeight={500}
									fontSize={{ base: "45px", sm: "60px", xl: "60px" }}
									color={"white"}
								>
									Lucho
								</Heading>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Box>
			<Flex
				pos={"relative"}
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
					<Reloj></Reloj>
					<Box display={"flex"} flexFlow={"column"} alignItems={"center"}>
						<Icon
							as={"div"}
							className="corazon"
							viewBox="0 0 40 35"
							mt={14}
							boxSize={10}
							color={100}
						>
							<path
								fill={"currentColor"}
								d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
							/>
						</Icon>
					</Box>
					<Heading
						py={5}
						fontSize={48}
						fontWeight={"bold"}
						color={useColorModeValue("gray.700", "gray.50")}
					>
						Vengan a compartir con nosotros
					</Heading>
				</Box>
				<Box
					display={"flex"}
					justifyContent={"space-evenly"}
					flexFlow={{ base: "column", sm: "wrap", lg: "wrap" }}
					spacing={"2"}
					mt={10}
				>
					{targetas?.map((cardInfo, index) => {
						return (
							<Card
								id={`targeta${index}`}
								key={`${index}`}
								{...cardInfo}
								index={index}
							/>
						);
					})}
				</Box>
				<Box mb={"5rem"}>
					<SectionGaleriaFotos />
				</Box>
				<Footer targetas={targetas}></Footer>
			</Flex>
		</>
	);
}
