import "../styles/informacion.css";
import img1 from "../assets/imgs/1.png";
import img2 from "../assets/imgs/2.png";
import img3 from "../assets/imgs/3.png";
import img4 from "../assets/imgs/4.png";

const Informacion = () => {
  return (
    <div className="card-group">
      <div>
        <div className="card">
          <img src={img1} alt="Card image cap" />
          <div className="layer layer1"></div>
          <div className="info">
            <h2>Información</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <img src={img2} alt="Card image cap" />
          <div className="layer layer2"></div>
          <div className="info">
            <h2>Información</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <img src={img3} alt="Card image cap" />
          <div className="layer layer3"></div>
          <div className="info">
            <h2>Información</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card">
          <img src={img4} alt="Card image cap" />
          <div className="layer layer4"></div>
          <div className="info">
            <h2>Información</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, necessitatibus! Asperiores amet modi repudiandae,
              corrupti, illum repellat vero qui vitae assumenda minima aliquid
              sint, magni dolores provident error nemo. Harum.
            </p>
          </div>
        </div>
      </div>
      <script src="../introduccion.js"></script>
    </div>
  );
};

export default Informacion;
