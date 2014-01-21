<?php
session_start();

if(!isset($_SESSION["data"]) or !isset($_SESSION["cid"])) {
	$_SESSION["data"] = array();
	$_SESSION["cid"] = 0;
}
$data = $_SESSION["data"];
$cid = $_SESSION["cid"];

function dumpall($data, $cid) {
	$_SESSION["data"] = $data;
	$_SESSION["cid"] = $cid;
	$tmp = array();
	$i = 1;
	foreach($data as $id => $arr) {
		$tmp[$i] = $arr;
		$i++;
		if ($i > 8) break;
	}
	$tmp = json_encode($tmp);
	if ($tmp and $f = fopen("toshow", "w")) {
		fwrite($f, $tmp);
		fclose($f);
	} else { printd(error_get_last()); die("Writing failed"); }
}

if (isset($_GET["delete"]) and isset($_GET["id"]) and array_key_exists($_GET["id"], $data)) {
	unset($data[$_GET["id"]]);
	dumpall($data, $cid);
}

if (isset($_GET["type"])) {
	$arr = array();
	$arr["type"] = $_GET["type"];
	$arr["num"] = $_GET["num"];
	$arr["dest"] = $_GET["dest"];
	$arr["statut"] = $_GET["statut"];
	$arr["min"] = ($_GET["min"]) ? $_GET["min"] : '  ';
	$arr["unit"] = $_GET["unit"];
	$arr["voie"] = $_GET["voie"];
	if (isset($_GET["id"])) {				// modification
		$arr["time"] = $data[$_GET["id"]]["time"];
		$data[$_GET["id"]] = $arr;
	} else {								// ajout
		$arr["time"] = date('H:i:s');
		$data[$cid] = $arr;
		$cid++;
	}
	dumpall($data, $cid);
}
?>
<html>
<head><title>Administdation du panneau d'affichage</title></head>
<body>
<?php
if (isset($_GET["modify"]) and isset($_GET["id"]) and array_key_exists($_GET["id"], $data)) {
	$id = $_GET["id"];
?>
<form action="admin.php" method="get">
<input type="hidden" name="id" value="<?= $id ?>">
<table>
<tr><th>Heure</th><th>tdain</th><th>num</th><th>Destination</th><th>Statut</th><th></th><th></th><th>Voie</th><th>Action</th></tr>
<tr><td>Auto</td>
<td><select name="type">
			<option value="THA" <?php if ($data[$id]["type"] == "TGV") echo "selected"; ?>>Thalys</option>
			<option value="TER" <?php if ($data[$id]["type"] == "TGV") echo "selected"; ?>>TER</option>
			<option value="TGV" <?php if ($data[$id]["type"] == "TGV") echo "selected"; ?>>TGV></option></select></td>
<td><input name="num" value="<?= $data[$id]["num"] ?>" maxlength="5"/></td>
<td><input name="dest" value="<?= $data[$id]["dest"] ?>" maxlength="21"></td>
<td><select name="statut">
			<option value="A L'HEURE" <?php if ($data[$id]["statut"] == "A L'HEURE") echo "selected"; ?>>A L'HEURE</option>
			<option value="RETARD" <?php if ($data[$id]["statut"] == "RETARD") echo "selected"; ?>>RETARD</option>
			<option value="ANNULE" <?php if ($data[$id]["statut"] == "ANNULE") echo "selected"; ?>>ANNULE</option></select></td>
<td><input name="min" value="<?= $data[$id]["min"] ?>"></td>
<td><select name="unit">
			<option value="   " <?php if ($data[$id]["unit"] == "   ") echo "selected"; ?>></option>
			<option value="SEC" <?php if ($data[$id]["unit"] == "SEC") echo "selected"; ?>>Secondes</option>
			<option value="MIN" <?php if ($data[$id]["unit"] == "MIN") echo "selected"; ?>>Minutes</option>
			<option value="HRS" <?php if ($data[$id]["unit"] == "HRS") echo "selected"; ?>>Heures</option>
			<option value="ANS" <?php if ($data[$id]["unit"] == "ANS") echo "selected"; ?>>Ans</option>
			<option value="SIE" <?php if ($data[$id]["unit"] == "SIE") echo "selected"; ?>>Siecles</option>
			<option value="INF" <?php if ($data[$id]["unit"] == "INF") echo "selected"; ?>>Infini</option></select></td>
<td><input name="voie" value="<?= $data[$id]["voie"] ?>" maxlength="1" type="number"></td>
<td><input type="submit" value="Modifier">
</tr>
</table>
<?php
} else {
?>
<form action="admin.php" method="get">
<table>
<tr><th>Heure</th><th>tdain</th><th>num</th><th>Destination</th><th>Statut</th><th></th><th></th><th>Voie</th><th>Action</th></tr>
<?php
	foreach ($data as $id => $arr) {
?>
<tr><td><?= $arr["time"] ?></td><td><?= $arr["type"] ?></td><td><?= $arr["num"] ?></td><td><?= $arr["dest"] ?></td><td><?= $arr["statut"] ?></td>
<td><?= $arr["min"] ?></td><td><?= $arr["unit"] ?></td><td><?= $arr["voie"] ?></td><td><a href="?modify=t&id=<?= $id ?>">Modifier </a><a href="?delete=t&id=<?= $id ?>">Supprimer</a></td></tr>
<?php
}
?>
<tr><td>Auto</td>
<td><select name="type">
			<option value="THA">Thalys</option>
			<option value="TER">TER</option>
			<option value="TGV" selected>TGV</option></select></td>
<td><input name="num" value="1" maxlength="5"/></td>
<td><input name="dest" maxlength="21"></td>
<td><select name="statut">
			<option value="A L'HEURE" selected>A L'HEURE</option>
			<option value="RETARD">RETARD</option>
			<option value="ANNULE">ANNULE</option></select></td>
<td><input name="min" value="  "></td>
<td><select name="unit">
			<option value="   " selected></option>
			<option value="SEC">Secondes</option>
			<option value="MIN">Minutes</option>
			<option value="HRS">Heures</option>
			<option value="ANS">Ans</option>
			<option value="SIE">Siecles</option>
			<option value="INF">Infini</option></select></td>
<td><input name="voie" value="-1" maxlength="1" type="number"></td>
<td><input type="submit" value="+">
</tr>
</table>
<?php
}
?>
</body>
</html>