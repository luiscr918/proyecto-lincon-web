import "../styles/intrduccionHome.css"

const IntroduccionHome = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="introduce"></div>
          <div className="thumbnail-List">
            <div className="wrapper"></div>
          </div>
        </div>
        <div className="navigation">
          <button className="next-button">Siguiente</button>
          <span className="line"></span>
          <span className="ordinal-number"></span>
        </div>
      </div>
    </div>
  )
}

export default IntroduccionHome;