<?php include('../header.php'); ?>
    <div class="wrapper">
		<?php include('../sidebar.php'); ?>
    	<article class="article">
	    <div id="tiles-map" style="width:100%;padding-bottom:56.25%;"></div>
			<div class="grid">
			    <div class="text" id="text">
			        <h1>Misc Projects</h1>
			        <br>
			        <hr />
			        <p>This is a collection of micscellaneous pieces from various projects and explorations.</p>
			    </div>
				<div id="clear"><br/></div>
				<div class="content">
				  <img src="../img/dmnd.jpg" class="content1" alt="Diamond">
				  <img src="../img/grbg.jpg" class="content1" alt="Garbage">
				  <img src="../img/hrts.jpg" class="content1" alt="Hearts">
				  <img src="../img/horns_bounce.gif" class="content2" alt="Bounce">
				  <img src="../img/horns_sneak.gif" class="content2 sneakadjust" alt="Sneak">
				</div>
			</div>
    	</article>
    </div>
<script src="../js/maps.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?&key=AIzaSyAdv9E9aEANcGaqD-B_xQc6Jljeso2sCGg&callback=initMap"></script>
<?php include('../footer.php'); ?>