import "../../styles/ImagenRotation.css"

const ImagendRotation = () => {
    return (
        <>
            <div className="pr">
                <div className="rotacion-container">
                    <div className="rotacion-slider">
                        <div className="rotacion-slide">
                            <img src="https://i.postimg.cc/FHXvPYgf/carr1.jpg" alt="" />
                        </div>
                        <div className="rotacion-slide">
                            <img src="https://i.postimg.cc/28Gpx06t/carr3.jpg" alt="" />
                        </div>
                        <div className="rotacion-slide">
                            <img src="https://i.postimg.cc/B6F9csL5/carr2.jpg" alt="" />
                        </div>
                        <div className="rotacion-slide">
                            <img src="https://i.postimg.cc/QdYR2Vck/carr4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImagendRotation;