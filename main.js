const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

let div = document.querySelector("#recall");
let getResults = document.querySelector("#ending");

 
let points = document.createElement("h1");

 
ending.addEventListener("click", () => {
  let result = 0;
  if (document.getElementById("firstAltTrue").checked) {
    result++;
  }
  if (document.getElementById("secAltTrue").checked) {
    result++;
  }
  if (document.getElementById("thirdAltTrue").checked) {
    result++;
  }
  if (document.getElementById("fourAltTrue").checked) {
    result++;
  }
  if (document.getElementById("fifthAltTrue").checked) {
    result++;
  }
  if (document.getElementById("sixAltTrue").checked) {
    result++;
  }
  if (
    document.getElementById("seven7AltTrue").checked == true &&
    document.getElementById("seven8AltFalse").checked == false &&
    document.getElementById("seven7AltFalse").checked == false &&
    document.getElementById("seven8AltTrue").checked == true
  ) {
    result++;
  } else {
  }
  div.appendChild(points);
  if (result === 7) {
    points.style.color = "green";
    points.textContent = "Dina kunskaper om Gud är fasta!Du hade " + result + "/7";
  } else if (result > 3) {
    points.style.color = "yellow";
    points.textContent =
      "Dina kunskaper om Gud är skakiga du hade" + result + "/7";
  } else {
    points.style.color = "red";
    points.textContent =
      "Dina kunkspaer om Gud är svaga du hade " + result + "/7";
  }
});



