// Name: Yupeng Wang
// Date: 4/23/2018
// Section: CSE154 AE

// This is a brief javascript file that is used to make index.html more interactive.
// It has some alerts and changes of text content when user open the webpage and
// click buttons in page.

"use strict";

(function() {

  window.onload = function() {
    alert("Hello, nice to meet you in League of Legends!");
    document.getElementById("button").onclick = aatroxClick;
    let changeCham = document.querySelectorAll("input[name='chooseCham']");
    for (let i = 0; i < changeCham.length; i++) {
      changeCham[i].onchange = changeCh;
    }
  };

  // This function is called to show some words when user click the button
  function aatroxClick() {
    document.getElementById("notAatrox").innerHTML +=
      " (Noooo, You should introduce me!, I'm Aatrox!)";
    alert("Aatrox is the best champion!");
  }

  function changeCh() {
    let current = document.getElementsByClassName("h3");
    let newChamT = document.createElement("div");
    let newContentT = document.createTextNode(
      "You will always get Teemo at bottom!");
    newChamT.id = "bottomT";
    let newChamA = document.createElement("div");
    newChamA.id = "bottomA";
    let newContentA = document.createTextNode("Aatrox!");
    if (document.getElementById("teemoo").checked) {
      document.getElementById("teemo").classList.remove("hidden");
      document.getElementById("aatrox").classList.add("hidden");
      newChamT.appendChild(newContentT);
      document.body.appendChild(newChamT);
      let remove = document.getElementById("bottomA");
      remove.parentNode.removeChild(remove);
    } else {
      document.getElementById("aatrox").classList.remove("hidden");
      document.getElementById("teemo").classList.add("hidden");
      newChamA.appendChild(newContentA);
      document.body.appendChild(newChamA);
    }
  }

})();
