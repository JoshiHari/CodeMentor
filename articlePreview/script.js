console.log("The Script is working");

function showshare(curele) {
  

  ans = curele.nextElementSibling.style.display;

  if (ans == "none") {
    curele.nextElementSibling.style.display = "flex";
  } else {
    curele.nextElementSibling.style.display = "none";
  }
 
}


