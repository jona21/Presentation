import React, { useState, useEffect } from "react";

import HomeView from "./HomeView";

const HomeContainer = () => {
	const [writeText, setWriteText] = useState("");
	const [showSpanAnimation, setShowSpanAnimation] = useState("");
	let timerWrittenText;
	let timerResetWrittenText;
	let index = 0;

	const handleSetText = (text, action) => {
		if (action == "write") {
			index++;
		} else if (action == "delete") {
			index--;
		}
		setWriteText(text.substr(0, index));
	};

	const handleUpdateText = (text, action, interval) => {
		if (action == "write") {
			if (index <= text.length) {
				handleSetText(text, action);
			} else {
				handleChangeWritingToDelete(text, action, interval);
			}
		} else if (action == "delete") {
			if (index >= 0) {
				handleSetText(text, action);
			} else {
				handleChangeWritingToDelete(text, action, interval);
			}
		}
	};

	const handleChangeWritingToDelete = (text, action, interval) => {
		clearInterval(timerWrittenText);
		setShowSpanAnimation("writing-text_cursor");
		let newTimeOut;
		if (action == "write") {
			action = "delete";
			interval = 30;
			newTimeOut = 3000;
			index--;
		} else if (action == "delete") {
			action = "write";
			interval = 100;
			newTimeOut = 1000;
			index = 0;
		}
		timerResetWrittenText = setTimeout(() => {
			handleWriteText(text, action, interval);
		}, newTimeOut);
	};

	const handleWriteText = (text, action, interval) => {
		setShowSpanAnimation("");
		timerWrittenText = setInterval(() => {
			handleUpdateText(text, action, interval);
		}, interval);
	};

	const handleShowMenu = () => {
		document.querySelector("#menu").className = "d-block";
	};

	useEffect(() => {
		document.querySelector("#menu").className = "d-none";
		handleWriteText("Desarrollador", "write", 100);
		return () => {
			clearInterval(timerWrittenText);
			clearTimeout(timerResetWrittenText);
		};
	}, []);

	return (
		<HomeView
			handleShowMenu={handleShowMenu}
			writeText={writeText}
			showSpanAnimation={showSpanAnimation}
		/>
	);
};

export default HomeContainer;
