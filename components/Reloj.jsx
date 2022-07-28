import React, { useState, useRef, useEffect } from "react";
import {
	Box,
	Text,
	Center,
	useColorModeValue,
	Image,
	Heading,
	Icon,
	Stack,
} from "@chakra-ui/react";

export default function Reloj() {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");
	const interval = useRef();

	const startTimer = () => {
		const countDownDate = new Date("2022-08-29").getTime();
		console.log(new Date("2022-08-28"));
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownDate - now;
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				clearInterval(interval.current);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};
	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<Box
			w={"100%"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			flexFlow={"column"}
		>
			<Heading
				fontSize={"50px"}
				fontWeight={500}
				color={100}
				fontFamily={"body"}
				width={"100%"}
				mb={"10px"}
			>
				Faltan
			</Heading>
			<Box
				display={"flex"}
				// boxShadow={" inset 1px 1px 20px 0px black"}
				// rounded={"3xl"}
				w={"70%"}
				h={"10rem"}
				justifyContent={"space-around"}
				alignItems={"center"}
				bg={useColorModeValue("white", "gray.800")}
			>
				<Box
					display={"flex"}
					justifyContent={"center"}
					flexFlow={"column"}
					alignItems={"center"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}
				>
					<Heading
						fontSize={"4xl"}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}
					>
						{timerDays}
					</Heading>
					<Text color={"gray.500"} fontWeight={500} width={"100%"} mb={"1rem"}>
						Dias
					</Text>
				</Box>

				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					flexFlow={"column"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}
				>
					<Heading
						fontSize={"4xl"}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}
					>
						{timerHours}
					</Heading>
					<Text color={"gray.500"} fontWeight={500} width={"100%"} mb={"1rem"}>
						Horas
					</Text>
				</Box>
				<Box
					display={"flex"}
					justifyContent={"center"}
					flexFlow={"column"}
					alignItems={"center"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}
				>
					<Heading
						fontSize={"4xl"}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}
					>
						{timerMinutes}
					</Heading>
					<Text color={"gray.500"} fontWeight={500} width={"100%"} mb={"1rem"}>
						Minutos
					</Text>
				</Box>
				<Box
					display={"flex"}
					justifyContent={"center"}
					flexFlow={"column"}
					alignItems={"center"}
					height={"90px"}
					p={3}
					borderRightWidth={{ base: "1px", md: "1px" }}
					borderLeftWidth={{ base: "1px", md: "1px" }}
				>
					<Heading
						fontSize={"4xl"}
						fontWeight={500}
						color={100}
						fontFamily={"body"}
						width={"100%"}
						mb={"1rem"}
					>
						{timerSeconds}
					</Heading>
					<Text color={"gray.500"} fontWeight={500} width={"100%"} mb={"1rem"}>
						Segundos
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
