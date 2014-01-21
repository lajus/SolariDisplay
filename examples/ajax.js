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
			//console.debug(rep);
			for (var i = 1; i <= 8; i++) {
				if (typeof rep[i] === "undefined") break;
				//console.debug('plop');
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
				var statut = (rep[i].statut.charAt(0) == 'A') ? 'À L\'HEURE' : ((rep[i].statut.charAt(0) == 'R') ? 'RETARDÉ  ' : 'ANNULÉ   ');
				//console.debug([time, dest, statut, min]);
				var num = parseInt(rep[i].num);
				num = (( num < 10 ) ? '0000' : ( num < 100 ) ? '000' : ( num < 1000 ) ? '00' : ( num < 10000 ) ? '0' : '' ) + num;
				display.setContent(i, [ time, rep[i].type + num, dest, statut, [min], rep[i].unit, rep[i].voie ]);
			}
			setTimeout(update, 2000);
        } else if (xhr.readyState == 4) {
			setTimeout(update, 500);
		}
    }

    xhr.open("GET", "http://perso.crans.org/lajus/SolariDisplay/examples/update.php", true);
    xhr.send();
}