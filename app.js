

/* ================ JS range input START ================ */
// rangeinput
let rangeInput = document.querySelector(".range_input");
let currentValue = document.querySelector(".current_value");

//
rangeInput.addEventListener("input", function () {
  currentValue.innerHTML = rangeInput.value;
});
/* ================ JS range input END ================ */


/* ================ JS random bg color START ================ */
let clickBtn = document.querySelector(".click_btn");

// random background color
clickBtn.addEventListener("click", function () {
  // let randomColor = Math.random();

  let red = Number(Math.random() * 255);
  let green = Number(Math.random() * 255);
  let blue = Number(Math.random() * 255);

  let randomColor = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = randomColor;
});
/* ================ JS random bg color END ================ */
