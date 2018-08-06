const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var index = 0;
  document.body.addEventListener("keydown", 
  function onKeyDownHandler(e) {
  const key = e.key;
  if (key === codes[index]) {

    index++;
        console.log(index);
    if (index === codes.length) {
      alert("Yahoo! Mountain Dew!");
        index = 0;
    }
  } else {
    index = 0;
  }
    
  });
}

