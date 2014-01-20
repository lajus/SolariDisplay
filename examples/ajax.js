function loadXMLDoc() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
	return(xmlhttp);
}

function update() {
	var xhr = loadXMLDoc();
	
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var rep = JSON.parse(xhr.responseText);
			console.debug(rep);
			console.debug(rep[1]);
			for (var i = 1; i <= rep.length; i++) {
				console.log('plop');
				var time = [rep[i].time.substr(0,2), ':',  rep[i].time.substr(3,2), ':', rep[i].time.substr(6,2)];
				var dest = ""
				for(var j = 0; j < rep[i].dest.length; j++) {
					dest += (CTR.SOLARIVALUES.eletter.indexOf(rep[i].dest.charAt(j)) !== -1) ? rep[i].dest.charAt(j) : '?';
				}
				var min = '  ';
				if (rep[i].min !== '  ') {
					var tmp = Math.floor(parseInt(rep[i].min) / 5) * 5;
					min = (tmp < 10 ? '0' : '') + tmp
				}
				var statut = (tmp[i].statut.charAt(0) == 'A') ? 'À L\'HEURE' : ((tmp[i].statut.charAt(0) == 'R') ? 'RETARDÉ' : 'ANNULÉ');
				console.debug([time, dest, statut, min]);
				display.setContent(i, [ time, [rep[i].type, rep[i].num], dest, [statut, min, rep[i].unit], rep[i].unit ]);
			}
			setTimeout(update, 2000);
        } else if (xhr.readyState == 4) {
			setTimeout(update, 500);
		}
    }

    xhr.open("GET", "http://perso.crans.org/lajus/SolariDisplay/examples/update.php", true);
    xhr.send();
}

update();