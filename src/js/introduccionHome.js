var data = [
    {
        img: "#",
        titulo: "JJAJAJAJAJA",
        place: "HOLAHOAL",
        texto: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ",
    },
    {
        img: "#",
        titulo: "JJAJAJAJAJA",
        place: "HOLAHOAL",
        texto: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ",
    },
    {
        img: "#",
        titulo: "JJAJAJAJAJA",
        place: "HOLAHOAL",
        texto: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ",
    },
    {
        img: "#",
        titulo: "JJAJAJAJAJA",
        place: "HOLAHOAL",
        texto: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ",
    },

];

const introducir = document.querySelector(".introducir");
const numero = document.querySelector(".numero");

introducir.innerHTML = "";
numero.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    introducir.innerHTML += `
     <div className="wrapper">
        <span>
            <h5 className="titulo" style={{'--idx': 0 }}>${data[i].titulo}</h5>
        </span>
        <span>
            <h1 className="place" style={{'--idx': 1 }}>${data[i].place}</h1>
        </span>
        <span>
            <p className="texto" style={{'--idx': 2 }}>${data[i].texto}</p>
        </span>
        <span>
            <button className="discover-button" style={{'--idx': 3 }}>Discover Button</button>
        </span>
    </div>
    `;

    numero.innerHTML += `<h2>${i + 1}</h2>`
}

introducir.children[0].classList.add("active");
numero.children[0].classList.add("active");