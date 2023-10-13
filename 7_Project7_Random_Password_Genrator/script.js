const pwdOutput = document.querySelector("#pwdContainer");
const generate = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copy");

generate.addEventListener("click", (e) => {
  e.preventDefault();

  const length = 12;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const num = "0123456789";
  const symbols = "!@#$%^&*";

  const combo =upperCase + lowerCase + symbols+num;

  let password = "";
  password += upperCase[Math.floor(Math.random()*upperCase.length)];
  password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password += num[Math.floor(Math.random()*num.length)];
  password += symbols[Math.floor(Math.random()*symbols.length)];

  while(password.length<=length){
    password+=combo[Math.floor(Math.random()*combo.length)]
  }
  
  pwdOutput.value= password;

});

copyBtn.addEventListener("click",()=>{
    pwdOutput.select();
    document.execCommand("copy")

})


