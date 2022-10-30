let switched = false

setInterval(() => {
    document.getElementById("cont").style.marginRight = (document.getElementById("container").scrollWidth / 86) * (document.getElementById("container").scrollWidth / 86) + "px";
    document.getElementById("cont").style.marginLeft = (document.getElementById("container").scrollWidth / 86) * (document.getElementById("container").scrollWidth / 86) + "px";

    document.getElementById("li").style.paddingBottom = (document.body.scrollHeight / 2 - 182) + "px";
    document.getElementById("li").style.paddingTop = (document.body.scrollHeight / 2 - 182) + "px";

}, 1);

function conversion() {
    document.getElementById("CIco").src = "../convert-icon-dark.png"
    document.getElementById("outputT").innerHTML = "";
    if (!switched) {
        document.getElementById("textA").value.trim().split(" ").filter(e => e != "").forEach(e => {
            try {
                e.trim().split("").forEach(num => {
                    if (Number.isNaN(parseInt(num))) throw "NaN";
                });
                console.log(e);
                e = parseInt(e.trim());

                if (Number.isNaN(e)) throw "NaN";
                if (document.getElementById("outputT").innerHTML != "Invalid input!")
                    document.getElementById("outputT").innerHTML += " " + String(e);
            } catch (error) {
                return document.getElementById("outputT").innerHTML = "Invalid input!";
            }
        });
    }
    setTimeout(() => {
        document.getElementById("CIco").src = "../convert-icon.png"
    }, 100);
}