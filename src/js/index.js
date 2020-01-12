import LocomotiveScroll from "locomotive-scroll";

(function() {
  document.documentElement.classList.add("is-loaded");
  document.documentElement.classList.remove("is-loading");

  setTimeout(() => {
    document.documentElement.classList.add("is-ready");
  }, 300);

  setTimeout(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#js-scroll'),
      smooth: true,
      getSpeed: true,
      getDirection: true
    });

    scroll.on('call',(value,way,obj) => {
      if(value === "autoplay"){
        if(way === "enter"){
          
        } else{
          
        }
      }
    });

  }, 1000);
})();
