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
                e = parseInt(e.trim());
                if (Number.isNaN(e)) throw "invalid";
                if (document.getElementById("outputT").innerHTML != "Invalid input!");
                document.getElementById("outputT").innerHTML += String.fromCharCode(e);
            } catch (error) {
                return document.getElementById("outputT").innerHTML = "Invalid input!";
            }
        });
    } else {
        document.getElementById("textA").value.split("").forEach(e => {
            document.getElementById("outputT").innerHTML += " " + e.charCodeAt(0);
        });
    }
    setTimeout(() => {
        document.getElementById("CIco").src = "../convert-icon.png"
    }, 100);
}

function swtch() {
    if (!switched) {
        document.getElementById("SwBt").style.backgroundColor = "#c5c5c5";
        document.getElementById("textA").placeholder = "Input text";
        let cont = document.getElementById("textA").value;
        document.getElementById("textA").value = document.getElementById("outputT").innerText;
        document.getElementById("outputT").innerHTML = cont;
        switched = true;
        setTimeout(() => {
            document.getElementById("SwBt").style.backgroundColor = "#d9d9d9";
        }, 100);
    } else {
        document.getElementById("SwBt").style.backgroundColor = "#c5c5c5";
        document.getElementById("textA").placeholder = "Input dec numbers seperated by space";
        let cont = document.getElementById("textA").value;
        document.getElementById("textA").value = document.getElementById("outputT").innerText;
        document.getElementById("outputT").innerHTML = cont;
        switched = false;
        setTimeout(() => {
            document.getElementById("SwBt").style.backgroundColor = "#d9d9d9";
        }, 100);
    }
}