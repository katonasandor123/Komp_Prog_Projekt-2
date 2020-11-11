function Submit(){

    var z = parseInt(document.getElementById("a").value);
    var y = parseInt(document.getElementById("b").value);
    var x = parseInt(document.getElementById("c").value);
    var w = parseInt(document.getElementById("d").value);
    var v = parseInt(document.getElementById("e").value);
    var u = parseInt(document.getElementById("f").value);
    var t = parseInt(document.getElementById("g").value);
    var s = parseInt(document.getElementById("h").value);
    var r = parseInt(document.getElementById("i").value);
    
    var elert = z + y + x + w + v + u + t + s + r;
    var szazalek = elert / 30 * 100;

    document.getElementById("eredmeny").innerHTML = "Az eredmény: " + elert + " pont, " + szazalek + "%";

    if (szazalek > 80){
        document.getElementById("jegy").innerHTML = "5 (JELES)"
    }

    else if (szazalek > 60){
        document.getElementById("jegy").innerHTML = "4 (JÓ)"
    }

    else if (szazalek > 40){
        document.getElementById("jegy").innerHTML = "3 (KÖZEPES)"
    }

    else if (szazalek > 25){
        document.getElementById("jegy").innerHTML = "2 (ELÉGSÉGES)"
    }

    else{
        document.getElementById("jegy").innerHTML = "1 (ELÉGTELEN)"
    }
}
