function answer(curEle) {
  console.log(curEle);

  ans = curEle.nextElementSibling.style.display;

  console.log(ans);

  if (ans == "none") {
    curEle.nextElementSibling.style.display = "flex";
  } else {
    curEle.nextElementSibling.style.display = "none";
  }
}

function hidepara() {
  para = document.querySelectorAll(".ans");

  for (i = 0; i < para.length; i++) {
    para[i].style.display = "none";
  }
}
