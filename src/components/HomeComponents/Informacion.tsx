import "../../styles/informacion.css";
import img1 from "../../assets/imgs/PECN.png";
import img2 from "../../assets/imgs/PECN2.png";
import img3 from "../../assets/imgs/PECN3.png";
import img4 from "../../assets/imgs/PECN4.png";

export const Informacion = () => {
  return (
    <>
      <div className="m-10">
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          ¿Porque Estudiar Con Nosotros?
        </h2>
      </div>
      <div className="contene-card">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={img1} alt="" />
            </div>
            <div className="card-back">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti voluptas ex labore neque architecto dolores consequatur 
                maiores culpa aut. Natus delectus doloribus, 
                et animi sed corrupti minus neque iste.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={img2} alt="" />
            </div>
            <div className="card-back">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Placeat consectetur perspiciatis quidem mollitia 
                reiciendis officia ullam veniam sapiente, aliquam dolor cumque quibusdam ipsam aliquid laborum, qui adipisci? Nostrum, voluptas officiis.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={img3} alt="" />
            </div>

            <div className="card-back">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam architecto, eligendi placeat incidunt dolore, consectetur iste veritatis neque iusto illo iure quibusdam eos facere,
                 similique maiores molestias doloremque nam sed?</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={img4} alt="" />
            </div>
            <div className="card-back">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore sit blanditiis aperiam labore voluptas veritatis provident sapiente
                 eligendi quis. Excepturi ipsum libero doloremque voluptas, 
                animi nulla reprehenderit. Reiciendis, corrupti odit?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
