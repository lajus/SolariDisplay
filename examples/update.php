<?php
$f = fopen("toshow", "r");
if ($f) {
	if ($t = fread($f, filesize("toshow"))
		echo $t;
	fclose($f);
}
?>