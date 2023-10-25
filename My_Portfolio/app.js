const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

// console.log("length", secBtn.length);

function PageTransition() {
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", (e) => {
      let currentBtn = document.querySelector(".active-btn");

      currentBtn.className = currentBtn.className.replace("active-btn", "");
      //   currentBtn.className=currentBtn.className.replace(
      //     "active",
      //     ""
      //   );
      //   console.log("yeh ", currentBtn.className);
      e.target.className += " active-btn";
    });
  }

  //   sections are Active
  allSections.addEventListener("click", (e) => {
    // console.log(e.target);
    const id = e.target.dataset.id;
    // console.log(id);
    if (id) {
      // remove selected from the other button
    //   secBtn.forEach((btn) => {
    //     btn.classList.remove("active");
    //   });

    //   e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  document.querySelector('.theme-btn').addEventListener('click',(e)=>{
    let element =document.body;
    element.classList.toggle('light-mode');
    
  })
}



PageTransition();
