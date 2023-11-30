<?php include("inc/header.php");?>
    <main class="container">
        <h1 class="headline about-us-h1">Vad, vilka & vart är Kreativ Kost?</h1>
        <p class="paragraph-text mb">Kreativ Kost skapades av Napatsara, Markus och Jennie i Sunne, Värmland och målet var att vi ville ge inspiration till våra medmänniskor att det går att laga billig mat som faktiskt är god!</p>
        <section class="cards-container">
            <article class="about-us-card jennie">
                <figure>
                    <img src="img/jennie.jpg" class="about-us-img" alt="">
                </figure>
                <h5 class="bad-script jennie">Jennie</h5>
                <p class="paragraph-text">Jag älskar mat, men äter gärna samma maträtt tills jag tröttnar på den!</p>
                <button class="btn_outlined mb">
                    <a href="padthai.php" class="btn-text-outlined">Jennies älsklingsrätt</a>
                    <!-- <span class="material-symbols-outlined"> 
                    favorite
                    </span>-->
                </button> 
            </article>
            <article class="about-us-card markus">
                <figure>
                    <img src="img/markus.jpg" class="about-us-img" alt="">
                </figure>
                <h5 class="bad-script markus">Markus</h5>
                <p class="paragraph-text">Mat är livet och jag utmanar mig med att laga nya maträtter så ofta jag orkar!</p>
                <button class="btn_outlined mb">
                    <a href="carbonara.php" class="btn-text-outlined">Markus favorit pasta</a>
                </button> 
            </article>
            <article class="about-us-card aim">
                <figure>
                    <img src="img/aim.jpg" class="about-us-img" alt="">
                </figure>
                <h5 class="bad-script aim">Napatsara</h5>
                <p class="paragraph-text">Jag gillar att titta på film, äta mat men inte laga.
                
                </p>
                <button class="btn_outlined mb">
                    <a href="fransk-soppa.php" class="btn-text-outlined">Min favorit soppa</a>
                </button> 
            </article>
        </section>
    </main>
    <?php
        include("inc/footer.php");
    ?>
    <script src="js/script.js"></script>
</body>
</html>