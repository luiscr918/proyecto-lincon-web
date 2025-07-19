
import type React from "react";
import "../styles/introduccionHome.css"

const IntroduccionComponenet = () => {
    return(
        <div className="body">
        <div className="container">
            <div className="content">
                <div className="intruducir">
                    <div className="wrapper">
                        <span>
                            <h5 className="titulo" style={{'--idx': 0 }as React.CSSProperties}></h5>
                        </span>
                        <span>
                            <h1 className="place" style={{'--idx': 1 }as React.CSSProperties}></h1>
                        </span>
                        <span>
                            <p className="texto" style={{'--idx': 2 }as React.CSSProperties}></p>
                        </span>
                        <span>
                            <button className="discover-button" style={{'--idx': 3 }as React.CSSProperties}>Discover Button</button>
                        </span>
                    </div>
                </div>
                <div className="thumbnail-list">
                    <div className="wrapper"></div>
                </div>
            </div>

            <div className="navegacion">
                <button className="boton-siguiente"></button>
                <span className="linea"></span>
                <span className="numero"></span>
            </div>
        </div>

        </div>
    )
}

export default IntroduccionComponenet;