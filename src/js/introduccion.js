var data = [
    {
        img: src={img1},
        country: "zxlfhsjhf",
        place: "lorem",
        describe: "ljlbshlkdablsdkjbaslhb",

    },
    {
        img: src={img2},
        country: "zxlfhsjhf",
        place: "lorem",
        describe: "ljlbshlkdablsdkjbaslhb",

    },
    {
        img: src={img3},
        country: "zxlfhsjhf",
        place: "lorem",
        describe: "ljlbshlkdablsdkjbaslhb",

    },
    {
        img: src={img4},
        country: "zxlfhsjhf",
        place: "lorem",
        describe: "ljlbshlkdablsdkjbaslhb",

    }
]

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = '';
ordinalNumber.innerHTML = '';
for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        <div className="wrapper">
            <span>
                <h5 className="country"style={{ ["--idx"]: 0 }}>${data[i].country}</h5>
            </span>
            <span>
                <h1 className="place" style={{["--idx"]:1}}>${data[i].place}</h1>
            </span>
            <span>
                <p className="describe" style={{["--idx"]:2}}>${data[i].describe}</p>
            </span>
            <span>
                <button className="discover-button" style={{["--idx"]:3}}>Descubre Ahora</button>
            </span>
            </div>
    `;
    ordinalNumber.innerHTML +=`<h2>0${i+1}</h2>`;
}
introduce.children[0].classList.add("active")
ordinalNumber.children[0].classList.add("active")

const thumbnailListWrapper = document.querySelector(
    
);
thumbnailListWrapper.innerHTML +=`
<div className="thumbnail">
    <img src="${data[0].img}" alt=""/>
</div>
`;
for(let i = 1;1< data.length; i++){
    thumbnailListWrapper.innerHTML +=`
    <div className="thumbnail" sttyle="--idx: ${i-1}">
    <img src="${data[i].img}" alt=""/>
    </div>
    `
}

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex = 0;
nextBtn.addEventListener("click", ()=>{
    nextBtn.disabled = true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(()=>{
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000); 
    for(let i = 2; i < thumbnailListWrapper.childElementCount; i++){
        thumbnailListWrapper.children[i].style = `--idx: ${i-2}`;
    }if(currentIndex < data.length - 1){
        currentIndex++;
    }else currentIndex = 0;
    for(let i =0; i < data.length; i++){
        introduce.children[i].classList.remove("active")
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active")
        ordinalNumber.children[currentIndex].classList.add("active");
        ordinalNumber.children[currentIndex].textContent = `0$
        {currentIndex + 1}`;
});
