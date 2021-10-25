const changeQuotes = (mode, event) => {
  let elements  = document.getElementsByClassName("quote-container");
  if (event === null) {
    if (mode === "first") {
      for (let i of elements) {
        i.classList.add("first-quote-container")
        i.classList.remove("second-quote-container")
      }
    }
    else {
      for (let i of elements) {
        i.classList.add("second-quote-container")
        i.classList.remove("first-quote-container")
      }
    }
  }
  else {
    if (event.target.classList.contains("quote-horizontal-changer-arrow")) {
      classList = event.target.parentElement.parentElement.parentElement.classList;
    }
    else {
      classList = event.target.parentElement.parentElement.classList;
    }
    if (mode === "first") {
      classList.add("first-quote-container");
      classList.remove("second-quote-container");
    }
    else {
      classList.add("second-quote-container");
      classList.remove("first-quote-container");
    }
  }
}


window.onload = () => {
  changeQuotes("first", null);
}

