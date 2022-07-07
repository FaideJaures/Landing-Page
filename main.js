document.getElementById("close-menu").addEventListener("click", ToClick);
function ToClick(){
  document.getElementById("section").style.display="none";
  document.getElementById("close-menu").style.display="none";
}

document.getElementById("open-menu").addEventListener("click", ToClick2);
function ToClick2(){
  section.style.display="flex";
  document.getElementById("close-menu").style.display="flex";
  document.getElementById("section").style.display="flex";
}

