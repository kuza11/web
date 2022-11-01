let switched = false

setInterval(() => {
    document.getElementById("cont").style.marginRight = (document.getElementById("container").scrollWidth / 86) * (document.getElementById("container").scrollWidth / 86) + "px";
    document.getElementById("cont").style.marginLeft = (document.getElementById("container").scrollWidth / 86) * (document.getElementById("container").scrollWidth / 86) + "px";

    document.getElementById("li").style.paddingBottom = (document.body.scrollHeight / 2 - 166) + "px";
    document.getElementById("li").style.paddingTop = (document.body.scrollHeight / 2 - 166) + "px";

}, 1);

function conversion() {
    document.getElementById("CIco").src = "../convert-icon-dark.png";
    document.getElementById("outputT").innerHTML = "";
    let val = document.getElementById("NSL").value;
    try {
        document.getElementById("textA").value.trim().split(" ").filter(e => e != "").forEach(e => {
            e.trim().split("").forEach(num => {
                if (Number.isNaN(parseInt(num, val))) throw "NaN";
            });
            e = parseInt(e.trim(), val);
            if (Number.isNaN(e)) throw "invalid";
            document.getElementById("outputT").innerHTML += " " + e.toString(parseInt(document.getElementById("NSR").value));
        
        });
    } catch{
        return document.getElementById("outputT").innerHTML = "Invalid input!";
    }
    setTimeout(() => {
        document.getElementById("CIco").src = "../convert-icon.png"
    }, 100);
}

function swtch() {
    document.getElementById("SwBt").style.backgroundColor = "#c5c5c5";
    document.getElementById("swtchI").src = "../switch-dark.png";
    if (!switched) {
        let cont = document.getElementById("textA").value;
        document.getElementById("textA").value = document.getElementById("outputT").innerText;
        document.getElementById("outputT").innerHTML = cont;
        document.getElementById("btnTL").innerHTML = document.getElementById(`NSR`).value;
        document.getElementById("btnTR").innerHTML = document.getElementById(`NSL`).value;
        document.getElementById(`NSR`).value = document.getElementById("btnTR").innerHTML;
        document.getElementById(`NSL`).value = document.getElementById("btnTL").innerHTML;
        switched = true;

    } else {
        document.getElementById("SwBt").style.backgroundColor = "#c5c5c5";
        let cont = document.getElementById("textA").value;
        document.getElementById("textA").value = document.getElementById("outputT").innerText;
        document.getElementById("outputT").innerHTML = cont;
        document.getElementById("btnTL").innerHTML = document.getElementById(`NSR`).value;
        document.getElementById("btnTR").innerHTML = document.getElementById(`NSL`).value;
        document.getElementById(`NSR`).value = document.getElementById("btnTR").innerHTML;
        document.getElementById(`NSL`).value = document.getElementById("btnTL").innerHTML;
        switched = false;
    }
    setTimeout(() => {
        document.getElementById("SwBt").style.backgroundColor = "#d9d9d9";
        document.getElementById("swtchI").src = "../switch.png";
    }, 100);
}

function nsSet(param){
    let val = document.getElementById(`NS${param}`);
    let num = parseInt(val.value);
    if(Number.isNaN(parseInt(val.value.split("")[0])) || (Number.isNaN(parseInt(val.value.split("")[1])) && val.value.length > 1) || num == 1 || num > 36)  val.value = "";
    else{
        document.getElementById(`btnT${param}`).innerHTML = val.value;
    }
}