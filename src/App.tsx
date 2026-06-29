import { useState } from "react";
import logo from "./assets/logo.svg";
import mainImage from "./assets/image-web-3-desktop.jpg";
import gamingGrowth from "./assets/image-gaming-growth.jpg";
import retroPcs from "./assets/image-retro-pcs.jpg";
import topLaptops from "./assets/image-top-laptops.jpg";
import iconMenu from "./assets/icon-menu.svg";
import iconMenuClose from "./assets/icon-menu-close.svg";
import "./App.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <span className="logo">
                    <img src={logo} alt="logo" />
                </span>
                <button
                    className="menu-Btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                >
                    <span>
                        <img
                            src={isOpen ? iconMenuClose : iconMenu}
                            alt="iconMenu"
                        />
                    </span>
                </button>
                <div
                    className={`overlay ${isOpen ? "opened" : ""}`}
                    onClick={() => setIsOpen(false)}
                ></div>
                <nav className={`navbar ${isOpen ? "open" : ""}`}>
                    <a href="#home">Home</a>
                    <a href="#new">New</a>
                    <a href="#popular">Popular</a>
                    <a href="#trending">Trending</a>
                    <a href="#categories">Categories</a>
                </nav>
            </header>
            <main>
                <div className="grid">
                    <div className="grid__image">
                        <img src={mainImage} alt="mainImage" id="mainImage" />
                    </div>
                    <div className="grid__section">
                        <div className="grid__h1">
                            <h1>The Bright Future of Web 3.0?</h1>
                        </div>

                        <div className="grid__text">
                            <p>
                                We dive into the next evolution of the web that
                                claims to put the power of the platforms back
                                into the hands of the people. But is it really
                                fulfilling its promise?
                            </p>
                            <button className="readMore-btn">Read more</button>
                        </div>
                    </div>
                    <div className="grid__news">
                        <h2>New</h2>
                        <div className="grid__news-section">
                            <h3>Hydrogen VS Electric Cars</h3>
                            <p>
                                Will hydrogen-fueled cars ever catch up to EVs?
                            </p>
                        </div>
                        <div className="line"></div>
                        <div className="grid__news-section">
                            <h3>The Downsides of AI Artistry</h3>
                            <p>
                                What are the possible adverse effects of
                                on-demand AI image generation?
                            </p>
                        </div>
                        <div className="line"></div>
                        <div className="grid__news-section">
                            <h3>Is VC Funding Drying Up?</h3>
                            <p>
                                Private funding by VC firms is down 50% YOY. We
                                take a look at what that means.
                            </p>
                        </div>
                    </div>
                    <div className="grid__cards">
                        <div className="grid__card">
                            <div className="grid__card-image">
                                <img src={retroPcs} alt="retroPcs" />
                            </div>
                            <div className="grid__card-text">
                                <h4>01</h4>
                                <h5>Reviving Retro PCs</h5>
                                <p>
                                    What happens when old PCs are given modern
                                    upgrades?
                                </p>
                            </div>
                        </div>
                        <div className="grid__card">
                            <div className="grid__card-image">
                                <img src={topLaptops} alt="topLaptops" />
                            </div>
                            <div className="grid__card-text">
                                <h4>02</h4>
                                <h5>Top 10 Laptops of 2022</h5>
                                <p>
                                    Our best picks for various needs and
                                    budgets.
                                </p>
                            </div>
                        </div>
                        <div className="grid__card">
                            <div className="grid__card-image">
                                <img src={gamingGrowth} alt="gamingGrowth" />
                            </div>
                            <div className="grid__card-text">
                                <h4>03</h4>
                                <h5>The Growth of Gaming</h5>
                                <p>
                                    How the pandemic has sparked fresh
                                    opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a
                    href="https://github.com/ShamardinaEM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ShamardinaEM
                </a>
                .
            </footer>
        </>
    );
}

export default App;
