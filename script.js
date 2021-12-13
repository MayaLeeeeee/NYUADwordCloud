var c = document.getElementById("mapDisplay");
var ctx = c.getContext("2d");
ctx.font = "20px sans-serif";
ctx.fillText("NYUAD",10,50);

var menuOne = document.getElementById("menuOne");
menuOne.addEventListener("click", function() {
  noPage();
	changePage(1);
});

var menuTwo = document.getElementById("menuTwo");
menuOne.addEventListener("click", function() {
  noPage();
	changePage(0);
});

var menuThree = document.getElementById("menuThree");
menuOne.addEventListener("click", function() {
  noPage();
	changePage(2);
});

function changePage(pageNumber){
  switch(pageNumber){
    case 0: // pageZero: keyword page
      console.log("Reached case 0");
      document.getElementByClassName("keywordPage").style.display="block";
      break;

    case 1: //pageOne: aboutProject page
      noPage();
      console.log("reached case1");
      document.getElementByClassName("aboutProject").style.display="block";
      break;
    case 2: //pageTwo: contact page
      noPage();
      document.getElementByClassName("contactPage").style.display="block";
      break;
  }
}

function noPage() {
  // document.getElementById("pageContainer").style.display="none";
  document.getElementByClassName("keywordPage").style.display="none";
  document.getElementByClassName("aboutProject").style.display="none";
  document.getElementByClassName("contactPage").style.display="none";

}

// -------------------
// word cloud
