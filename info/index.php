<?php include('../header.php'); ?>
    <div class="wrapper">
        <?php include('../sidebar.php'); ?>
        <article class="article">
            <video onContextMenu="return false;" id="content-full" width="100%" height="auto" autoplay loop muted>
                <source src="../vid/doors.mp4" type="video/mp4">
                <source src="../vid/doors.webm" type="video/webm">
                <source src="../vid/doors.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video>
            <div class="grid">
                <div class="text" id="text">
                    <h1>Gabriel Vincent Moon</h1>
                    <br>
                    <hr />
                    <p>Hello. I am a young creative from Phoenix, Arizona interested in audio production, graphic design, identity, motion design, typography and web design.
                    <br><br><a href="gmoon_resume.pdf" class="hover">R&eacute;sum&eacute;</a></p>
                    <br>
                    <br>
                    <h1>Contact</h1>
                    <br>
                    <hr>
                    <a href="https://twitter.com/gvmoon" class="hover" target="_blank">Twitter</a><br>
                    <a href="https://www.linkedin.com/in/gvmoon" class="hover" target="_blank">LinkedIn</a><br>
                    <a href="mailto:gabevmoon@gmail.com" class="hover email">Email</a></p>
                </div>
                <div id="clear"><br/></div>
                <div class="content">
                    <img src="../img/az.svg" class="content1" alt="Arizona">
                    <img src="../img/hello.svg" class="content1" alt="Hello">
                </div>
            </div>
        </article>
    </div>
<?php include('../footer.php'); ?>