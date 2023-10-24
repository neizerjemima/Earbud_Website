(() => {
  const earbud = document.querySelector("#earbud");
  const hotspots = document.querySelectorAll(".Hotspot");

 const earbudInfo = [
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/battery.svg"
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/battery.svg"
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/battery.svg" 
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/battery.svg"
    },
    { 
      text: "Sensitive touch for control and 360 Audio",
      image: "images/battery.svg"
    },

    { 
      text: "Fast Charging - Get up to 8 hours of Playtime",
      image: "images/battery.svg"
    },
  ];

  //Function

  function earbudLoaded() {
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });

    loadearbudInfo();
  }

  function loadearbudInfo() {
    earbudInfo.forEach((_earbudinfo, index) => {
      let selectedHotspot = document.querySelector (`#hotspot-${index + 2}`);

      let earbudText = document.createElement("h3");
      earbudText.textContent = _earbudinfo.text;
      
      let earbudimage = document.createElement("img");
      earbudimage.src = _earbudinfo.image;
      earbudimage.classList.add("earbudImages");

      selectedHotspot.appendChild(earbudText);
      selectedHotspot.appendChild(earbudimage);
    });

    
  }




  function showInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha:1});
    console.log ("Mouse enter")
  }

  function hideInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha:0});
    console.log ("Mouse left")
  }

  //Event Listener
  earbud.addEventListener("load", earbudLoaded);


  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.