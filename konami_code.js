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
  document.body.addEventListener("keydown", 
  function onKeyDownHandler(e) {
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Yahoo! Mountain Dew!");
        index = 0;
    }
  } else {
    index = 0;
  }
    
  });
}

