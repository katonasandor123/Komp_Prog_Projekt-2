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
    var q = parseInt(document.getElementById("irasbeli").value);

    var szobeli = z + y + x + w + v + u + t + s + r;

    if (q < 15)
    {
        var elert = z + y + x + w + v + u + t + s + r + q;
        var szazalek = elert / 150 * 100;

        document.getElementById("eredmeny").innerHTML = "Az eredmény: " + elert + " pont, " + szazalek + "%";
        document.getElementById("jegy").innerHTML = "1 (ELÉGTELEN)"
    }

    
    else if (szobeli < 4)
    {
        var elert = z + y + x + w + v + u + t + s + r + q;
        var szazalek = elert / 150 * 100;

        document.getElementById("eredmeny").innerHTML = "Az eredmény: " + elert + " pont, " + szazalek + "%";
        document.getElementById("jegy").innerHTML = "1 (ELÉGTELEN)"
    }

    else
    {
        var elert = z + y + x + w + v + u + t + s + r + q;
        var szazalek = elert / 150 * 100;

        document.getElementById("eredmeny").innerHTML = "Az eredmény: " + elert + " pont, " + szazalek + "%";

        if (szazalek > 80)
        {
            document.getElementById("jegy").innerHTML = "5 (JELES)"
        }

        else if (szazalek > 60)
        {
            document.getElementById("jegy").innerHTML = "4 (JÓ)"
        }

        else if (szazalek > 40)
        {
            document.getElementById("jegy").innerHTML = "3 (KÖZEPES)"
        }

        else if (szazalek > 25)
        {
            document.getElementById("jegy").innerHTML = "2 (ELÉGSÉGES)"
        }

        else
        {
            document.getElementById("jegy").innerHTML = "1 (ELÉGTELEN)"
        }
    }
}
