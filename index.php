<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="The design portfolio of Gabriel Vincent Moon from Phoenix, Arizona.">
    <meta name="keywords" content="Gabriel Moon, Gabe Moon, Arizona, Design, Portfolio, Motion, Phoenix, Typography">
    <meta name="author" content="Gabriel Moon">
    <link rel="icon" type="image/ico" href="img/gv.ico"/>   
	<link href="css/style.css" rel="stylesheet" type="text/css" media="screen" />
	<title>Design by Gabriel Vincent</title>
</head>
<script src="js/jquery-1.11.3.js"></script>
<body>
    <div class="wrapper">
		<?php include('sidebar.php'); ?>
        <div class="main-container">
			<video onContextMenu="return false;" id="reel" width="100%" height="auto" autoplay controls loop muted>
			<source src="vid/reel.mp4" type="video/mp4">
			<source src="vid/reel.webm" type="video/webm">
			Your browser does not support the video tag.
			</video>
            <section class="main" id="main">
                <a href="urban"><div class="p5" id="p5"></div></a>
                <a href="klik"><div class="p4" id="p4"></div></a>
                <a href="ptn"><div class="p9" id="p9"></div></a>
                <a href="cs"><div class="p6" id="p6"></div></a>
                <a href="3d"><div class="p8" id="p8"></div></a>
                <a href="22"><div class="p1" id="p1"></div></a>
                <a href="object"><div class="p2" id="p2"></div></a>
                <a href="illus"><div class="p10" id="p10"></div></a>
                <a href="book"><div class="p3" id="p3"></div></a>
                <a href="misc"><div class="p7" id="p7"></div></a>
            </section>
        </div>
    </div>

<?php include('footer.php'); ?>
