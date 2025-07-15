import React from 'react';
import Particles from 'react-tsparticles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.less';
import AppFoundationView from "./AppFoundation/AppFoundationView.jsx";
// Подключаем кастомный хук скрывающий стандартную прокрутку
import {useLockDefaultScroll} from "../hooks/index.js";

function App() {

    // Отключаем стандартную прокрутку при монтировании компонента
    useLockDefaultScroll();
    const particlesOptions = {
        particles: {
            number: {
                value: 10,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#2d4a77",
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#2d4a77",
                },
                polygon: {
                    nb_sides: 6,
                },
            },
            opacity: {
                value: 0.1,
                random: true,
            },
            size: {
                value: 200,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 100,
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: 10,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        retina_detect: true,
    };

    return (
        <div className="app-container">
            <Particles className="particles-background" options={particlesOptions} />
            <AppFoundationView />
        </div>
    );
}

export default App;
