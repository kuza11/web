setInterval(() => {
    document.getElementById("cont").style.marginRight = (document.getElementById("container").scrollWidth / 90) * (document.getElementById("container").scrollWidth / 90) + "px";
    document.getElementById("cont").style.marginLeft = (document.getElementById("container").scrollWidth / 90) * (document.getElementById("container").scrollWidth / 90) + "px";
    //console.log(document.getElementById("cont").style.marginRight + "   " + document.getElementById("cont").style.marginLeft);
    //if (screen.height < 605) {
    document.getElementById("li").style.paddingBottom = (document.body.scrollHeight/2 - 182) + "px";
    document.getElementById("li").style.paddingTop = (document.body.scrollHeight/2 - 182) + "px";
    console.log(document.getElementById("li").style.paddingBottom + "    " + document.getElementById("li").style.paddingTop);
    //}
}, 1);
