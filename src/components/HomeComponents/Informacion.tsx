import "../../styles/informacion.css";
import img1 from "../../assets/imgs/PECN.png";
import img2 from "../../assets/imgs/PECN2.png";
import img3 from "../../assets/imgs/PECN3.png";
import img4 from "../../assets/imgs/PECN4.png";


export const Informacion = () => {
  return (
    <div>
      <div className="m-15">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-blue-950 md:text-5xl lg:text-6xl">¿Por qué Estudiar Con Nosotros?</h2>
      </div>
      <div className="card-group mt-20">
      <div>
        <div className="card">
          <img src={img1} alt="Card image cap" />
          <div className="layer layer1"></div>
          <div className="info">
            <h2><strong>Información</strong></h2>
            <p>
              <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <img src={img2} alt="Card image cap" />
          <div className="layer layer2"></div>
          <div className="info">
            <h2><strong>Información</strong></h2>
            <p>
              <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <img src={img3} alt="Card image cap" />
          <div className="layer layer3"></div>
          <div className="info">
            <h2><strong>Información</strong></h2>
            <p>
              <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <img src={img4} alt="Card image cap" />
          <div className="layer layer4"></div>
          <div className="info">
            <h2><strong>Información</strong></h2>
            <p>
              <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <script src="../introduccion.js"></script>
    </div>
    </div>
    
  );
};

