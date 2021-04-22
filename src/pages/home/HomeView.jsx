import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../assets/media/img/natan.jpg";
import video from "../../assets/media/video/landingPage.mp4";

import "../../assets/css/pages/home/home.css";
import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { FaPrayingHands, FaUserTie } from "react-icons/fa";
import { IoBookSharp, IoNewspaperSharp } from "react-icons/io5";

const HomeView = ({ handleShowMenu, writeText, showSpanAnimation }) => {
	return (
		<>
			<main id="homeWrapper" className="container-fluid vh-100">
				<div className="overlay"></div>
				<video id="homeVideo" muted="muted" loop="loop" autoPlay="autoplay" playsInline={true}>
					<source src={video} type="video/mp4" />
				</video>

				<section
					id="homeContent"
					className="d-flex flex-wrap align-items-center justify-content-center vh-100"
				>
					<div id="homeDescription" className="col-md-8 d-grid justify-content-lg-end">
						<h1>HOLA, SOY JONATHAN ECHEVERRY JARAMILLO</h1>
						<h2>
							<span>{writeText}</span>
							<span className={showSpanAnimation}>|</span>
						</h2>
						<a
							className="text-decoration-none text-dark"
							href="mailto:yonatanecheverryjaramillo@gmail.com"
							target="_blank"
						>
							<MdEmail />
							yonatanecheverryjaramillo@gmail.com
						</a>
						<br />
						<a
							className="text-decoration-none text-dark d-flex align-items-center"
							href="https://wa.me/573015364267"
							target="_blank"
						>
							<ImPhone />
							(+57) 301-536-42-67
						</a>
					</div>
					<div className="col-md-4 d-flex justify-content-center justify-content-md-start">
						<img
							id="avatar"
							className="img-fluid rounded-circle"
							src={avatar}
							alt="Foto de Jonathan"
						/>
					</div>
					<section className="row m-0 justify-content-center" id="menu-row">
						<div className="col-6 col-sm-4 col-md-3 mb-3">
							<Link to="/quien-soy" onClick={handleShowMenu}>
								<FaUserTie />
								<br />
								<span>Quien Soy</span>
							</Link>
						</div>
						<div className="col-6 col-sm-4 col-md-3 mb-3">
							<Link to="#">
								<FaPrayingHands />
								<br />
								<span>Habilidades</span>
							</Link>
						</div>
						<div className="col-6 col-sm-4 col-md-3 mb-3">
							<Link to="#">
								<IoBookSharp />
								<br />
								<span>Educacion</span>
							</Link>
						</div>
						<div className="col-6 col-sm-4 col-md-3 mb-3">
							<Link to="#">
								<IoNewspaperSharp />
								<br />
								<span>Ver HV</span>
							</Link>
						</div>
					</section>
				</section>
			</main>
		</>
	);
};

export default HomeView;
