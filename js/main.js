(() => {
  const earbud = document.querySelector("#earbud");
  const hotspots = document.querySelectorAll(".Hotspot");

 const earbudInfo = [
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/copperinsulation.jpg"
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/copperinsulation.jpg"
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/copperinsulation.jpg"
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/copperinsulation.jpg"
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/copperinsulation.jpg"
    },

    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/copperinsulation.jpg"
    },
  ];

  //Function

  function earbudLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    earbudInfo.forEach((earbudInfo, index) => {
    let selected = document.querySelector(`#earbudInfo-${index + 2}`);

    let earbudText = document.createElement("h3");
    earbudText.textContent = earbudInfo.text;

    let image = document.createElement("img");
    image.src = earbudInfo.image;
    image.classList.add("earbudImages")

    selected.appendChild(earbudText);
    selected.appendChild(image);
    earbud.appendChild(selected);
    })  
  }

  loadInfo();

  function showInfo() {
    let selected = document.querySelector('.HotspotAnnotation');
    gsap.to(selected, 1, { autoAlpha: 1});
  }

  function hideInfo() {
    let selected = document.querySelector('.HotspotAnnotation');
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  earbud.addEventListener("load", earbudLoaded);


  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.