const logoPic = document.querySelector(".logo-pic");
const aboutLink = document.querySelector("#about");
const contactLink = document.querySelector("#contact");
const whatLink = document.querySelector("#what");

const selectedHeader = document.querySelector("#main-header");
const selectedParagraph = document.querySelector("#main-paragraph");

logoPic.addEventListener("click", function () {
  startAnim(selectedHeader, "Project Svalbard");
  startAnim(selectedParagraph, "- The future is now -");
});

whatLink.addEventListener("click", function () {
  startAnim(selectedHeader, `What is Project Svalbard?`);
  selectedParagraph.innerHTML = `Industrial and Bold, Project Svalbard is a unique virtual music venue in VRChat that is set inside an alternate, virtual version of the real-life Svalbard Global Seed Vault. Set 400 feet deep inside the Svalbardian mountainscape, lies “The Vault,” Project Svalbard's prime venue area. The Vault is an open venue ripe with industrial design aspects and a unique layout. The layout of Project Svalbard is one of uniqueness, as on both the left and right sides of the venue area is a catwalk complete with a suspended bridge connecting the two. This catwalk area, suspended above the main floor, isn't just for show, as it allows access to the two VIP accessible areas in Project Svalbard's main venue. These VIP areas, sunken into the left and right side walls of the venue, consist of many things, such as a bar, lounge, and more. Project Svalbard is also a venue that is open to small creators, big creators, and everyone in between. Whether you are big or small, you will be welcomed to play at Project Svalbard as we love giving an avenue for the new, old, and up and coming DJs  and artist's to play and show their hard work off.`;
});

contactLink.addEventListener("click", function () {
  startAnim(selectedHeader, `Contact`);
  selectedParagraph.innerHTML = `
  <strong>Emails:</strong>  
  <br/>
  Mylow@projektsvalbard.com
  <br/>
Firey@projektsvalbard.com 
<br/>
Staff@projektsvalbard.com
<br/>
<br/>
<strong>Discord:</strong>
<a href="https://discord.gg/fgmrKmGf7n" target="_blank">https://discord.gg/fgmrKmGf7n</a>
  
  `;
});

aboutLink.addEventListener("click", function () {
  startAnim(selectedHeader, `About The Founders`);
  selectedParagraph.innerHTML = `
    <strong>Mylow:</strong>
    <br/>
    Mylow, as a VJ/DJ himself, as well as being in the VR music loop for many years, has amassed a lot of knowledge and experience on and with the topic. Mylow is a person who believes in the impact that the VR music industry has, with Project Svalbard, a unique virtual music venue founded by him and his friend Firey, being a testament to that belief. Mylow truly believes in the impact of the industry and how it can bring people together to just “listen to music and have fun” 
    <br/>
    <br/>
    <strong>Firey:</strong>
    <br/>
    Firey, while not being a VJ/DJ himself such as Mylow, still believes in the impact that the VR music industry can have. Firey, who is a World Creator, also believes in the importance of great and unique experiences, especially in a VR world that is as large and as small as it is. Firey is the Co-Founder of Project Svalbard, a unique virtual music venue founded by him and his friend Mylow. “Project Svalbard is something different and special, and I’m so glad to be a part of it.”`;
});

var startAnim = function (el, msg) {
  "use strict";

  var codeletters;
  var currentLength;
  var fadeBuffer;

  function init() {
    codeletters = "&#*+%?£@§$";
    currentLength = 0;
    fadeBuffer = false;

    setTimeout(animateIn, 100);
  }

  // Chooses rnaomd text for the scramble effect
  function generateRandomString(length) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += codeletters.charAt(
        Math.floor(Math.random() * codeletters.length)
      );
    }

    return random_text;
  }

  function animateIn() {
    if (currentLength < msg.length) {
      currentLength += 2;
      if (currentLength > msg.length) currentLength = msg.length;

      const message = generateRandomString(currentLength);
      el.innerHTML = message;

      setTimeout(animateIn, 50);
    } else {
      setTimeout(animateFadeBuffer, 50);
    }
  }

  function animateFadeBuffer() {
    if (!fadeBuffer) {
      fadeBuffer = [];
      for (var i = 0; i < msg.length; i++) {
        fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: msg.charAt(i),
        });
      }
    }

    var message = "";

    for (var i = 0; i < fadeBuffer.length; i++) {
      var fader = fadeBuffer[i];
      console.log(fadeBuffer);
      if (fader.c > 0) {
        fader.c--;
        message += codeletters.charAt(
          Math.floor(Math.random() * codeletters.length)
        );
      } else {
        message += fader.l;
      }
    }

    el.innerHTML = message;

    if (message == msg) {
      return 0;
    }

    setTimeout(animateFadeBuffer, 50);
  }

  init();
};

// Bet you can tell this code segment is not supposed to be in this file. I respectfully hope you spent hours looking for this- I sneaked this here because you are replacing my job and I dislike that (:
// Good luck though
const x = document.getElementById("myTopnav");
document.querySelector("body").addEventListener("click", function (e) {
  if (
    e.target !== document.querySelector(".icon") &&
    e.target !== document.querySelector(".menu-icon")
  ) {
    x.className = "topnav";
    x.style = "padding-top: 0;";
  } else {
    if (x.className === "topnav") {
      x.className += " responsive";
      x.style = "padding-top: 35px;";
    } else {
      x.className = "topnav";
      x.style = "padding-top: 0;";
    }
  }
});
