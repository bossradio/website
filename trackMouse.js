(function() {
    // Get the root element
    var r = document.querySelector(':root');
    const shelf = document.querySelector(".shelf");
    const bgSize = 500 / 2;

    function setStyles(x, y) {
      // Set the value of variable --blue to another value (in this case "lightblue")
      r.style.setProperty('--mousex', x);
      r.style.setProperty('--mousey', y);
    }

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc;

        event = event || window.event; // IE-ism

        setStyles(event.pageX-shelf.offsetLeft-bgSize+'px', event.pageY-shelf.offsetTop-bgSize+'px')
    }
})();
