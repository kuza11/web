setInterval(() => {
    document.getElementById("cont").style.marginRight = (document.getElementById("container").scrollWidth / 86) * (document.getElementById("container").scrollWidth / 86) + "px";
    document.getElementById("cont").style.marginLeft = (document.getElementById("container").scrollWidth / 86) * (document.getElementById("container").scrollWidth / 86) + "px";

    document.getElementById("li").style.paddingBottom = (document.body.scrollHeight/2 - 166) + "px";
    document.getElementById("li").style.paddingTop = (document.body.scrollHeight/2 - 166) + "px";

}, 1);
