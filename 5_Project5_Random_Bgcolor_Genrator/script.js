const starBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

const changeBg = () => {
  let letters = "123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
};


let page = document.querySelector(".container");
let interval;
async function changerFunc() {
    if(!interval){
  interval =setInterval(() => {
    let color = changeBg();
    console.log(color)
    page.style.backgroundColor = `${color}`;
  },500);}
}


starBtn.addEventListener("click", (e)=>{changerFunc()});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval=null;

});
