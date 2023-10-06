const form = document.querySelector("form");
const reset =document.getElementById("reset")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#ht").value).toFixed(2);
  const weight = parseFloat(document.querySelector("#wt").value).toFixed(2);
  const result = document.querySelector("#results");

  if (height === 0 || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height`;
  } else if (weight === 0 || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = (weight / (height * height)).toFixed(2);
    if (bmi < 18.5) {
      result.innerHTML = `Your BMI is ${bmi} and you are Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = `Your BMI is ${bmi} and you are Healthy Weight`;
    } else if (bmi >= 25.0 && bmi <= 25.9) {
      result.innerHTML = `Your BMI is ${bmi} and you are Overrweight`;
    } else {
      result.innerHTML = `Your BMI is ${bmi} and you are Obese`;
    }
  }
});

reset.addEventListener('click',()=>location.reload()
 )



