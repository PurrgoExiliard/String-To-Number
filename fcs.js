function Calculate() {
    if (reset == true) {
        clearLets()
        animation()
        r()
    } else {
        animation()
        reset = true;
        r()
    }
}

function clearLets() {
    if (x = document.getElementById("newBtn")) { x.remove() }
    height = 1.75
    let clearAll = []
    intValue = 0
    stopI = false
    progress = 0
    change = false
    document.getElementById("1")
    let b = document.getElementById("log").querySelectorAll("br").forEach((x) => {
        x.classList.add("hide")
        x.classList.remove("show")
        console.log(x)
        clearAll.push(x)
    })
    let z = 1.75
    let a = document.getElementById("log").querySelectorAll("span").forEach((x) => {
        x.classList.add("hide")
        x.classList.remove("show")
        console.log(x)
        clearAll.push(x)
        z = z + 1.75
    })
    setTimeout(() => {
        let i = clearAll.length

        let x = setInterval(() => {
            if (i > 0) {
                clearAll[i - 1].remove()
                document.getElementById("log").setAttribute("style", "height : " + (z * -1) + "vh;")
                i--
            } else {
                clearInterval(x)
            }

        }, 100)

        document.getElementById("5").innerText = ""
        document.getElementById("1").innerText = ""

    }, 1000)

}

function addBtn() {
    let a = document.createElement("input")
    a.setAttribute("type", "button")
    a.setAttribute("value", "Another calculation")
    a.setAttribute("onclick", "showInputs()")
    a.setAttribute("id", "newBtn")
    document.getElementById("add").appendChild(a)

}

function showInputs() {
    let wait = 300
    document.getElementById("log").querySelectorAll("span").forEach((x) => { wait = wait + 100 })
    setTimeout(() => {
        document.querySelectorAll("input").forEach((x) => { x.setAttribute("style", "display : flex;") })


    }, wait)
    document.getElementById("newBtn").setAttribute("style", "display : none;")
    clearLets()
    document.getElementById("load").innerText = ""
}

function animation() {
    let b = document.querySelectorAll("input").forEach((x) => { x.setAttribute("style", "display : none;") })
    let load = document.getElementById("load")
    load.innerText = "Calculating"
    let i = 0
    let a = 0
    const e = setInterval(() => {
        if (stopI == true) {
            load.innerText = "Calculated"
            clearInterval(e)
        }
        load.innerText += "."


        i++
        if (i == 4) {

            if (a == 1) {
                progress++

            }
            load.innerText = "Calculating"
            i = 0
            a++

        }
    }, 500)
}


function typeWord() {
    String.prototype.getLetter = function() {
        var hex, i;

        var result = [];
        for (i = 0; i < this.length; i++) {
            hex = this.charAt(i)
            console.log(hex)
            if (hex == " ") {
                result[i] = "||?||?||?||?||?||?||?||?||?||?||?||";
            } else {
                result[i] = hex;
            }

        }

        return result
    }

    let typeOut = document.getElementById("text").value

    let array = typeOut.getLetter()
    let b = 0
    let c = setInterval(() => {
        if (array[b] == "||?||?||?||?||?||?||?||?||?||?||?||") {
            document.getElementById("1").appendChild(document.createTextNode('\u00A0'));
        } else {
            document.getElementById("1").innerText += array[b]

        }
        b++;
        if (b == array.length) {
            clearInterval(c)
            progress += 1
            change = false
        }
    }, 200)

}

function getHex() {
    StringToInt()


}

function StringToInt() {
    str = document.getElementById("text").value
        // get the function converting string to hexcode
    String.prototype.hexEncode = function() {
            var hex, i;

            var result = [];
            for (i = 0; i < this.length; i++) {
                hex = this.charCodeAt(i).toString(16);
                result[i] = ("000" + hex).slice(-4);
            }

            return result
        }
        //convert hexcode back to string
    String.prototype.hexDecode = function() {
        var j;
        var hexes = this.match(/.{1,4}/g) || [];
        var back = "";
        for (j = 0; j < hexes.length; j++) {
            back += String.fromCharCode(parseInt(hexes[j], 16));
        }

        return back;
    }


    intValue = 0
    midstep = str.hexEncode()

    let a

    document.getElementById("log").innerHTML = ""

    let i = 0
    document.getElementById("log").setAttribute("style", "height : " + i + "vh;")

    let position = 0
    let d = setInterval(() => {
        if (position < midstep.length) {

            a = document.createElement("span")
            a.setAttribute("class", "show")
            a.classList.add("flex")
            let value = parseInt(midstep[position], 16)
            if (value < 100) {
                value = "0" + parseInt(midstep[position], 16)
            } else {
                value = parseInt(midstep[position], 16)
            }


            intValue += parseInt(midstep[position], 16)
            a.innerHTML = "<span class='v'>" + midstep[position].hexDecode() + "- hex:  " + midstep[position] + "</span><span class='w'>|</span> <span class='s'>int:" + value + "</span>"
            i += 1.75
            document.getElementById("log").setAttribute("style", "height : " + i + "vh;")
            document.getElementById("log").appendChild(a)
            position++
        } else {
            progress++
            change = false
            clearInterval(d)


        }
    }, 1000)

}

function getLastStep() {
    String.prototype.getLetter = function() {
        var hex, i;

        var result = [];
        for (i = 0; i < this.length; i++) {
            hex = this.charAt(i)
            console.log(hex)
            if (hex == " ") {
                result[i] = "||?||?||?||?||?||?||?||?||?||?||?||";
            } else {
                result[i] = hex;
            }

        }

        return result
    }
    setTimeout(() => {
        addBtn()
        document.getElementById("5").classList.add("show")
        let a = "Total worth of this word is " + intValue
        let c = a.getLetter()
        let e = 0
        let d = setInterval(() => {
            if (c[e] == "||?||?||?||?||?||?||?||?||?||?||?||") {
                document.getElementById("5").appendChild(document.createTextNode('\u00A0'));
            } else {
                document.getElementById("5").innerText += c[e]

            }
            e++;
            if (e == c.length) {
                clearInterval(d)
                progress += 1
                change = false
            }
        }, 50)



    }, 1000)
}