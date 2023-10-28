
<?php
$pagetitle = "Detta är startsidan.";
include("header.php");
 ?>

    <div class="hero-container">
        <figure class="hero-section">
            <img src="img/hero-illustration.png" class="hero-img" alt="">
            <article class="content">
                <h1 class="headline mb">Du behöver inte vara rik för att äta lyxigt!!!.</h1>
            </article>
        </figure>
    </div>
    <main class="container" id="main-content">
        <section id="search">
            <h2 class="mid-headline mb center">Vad är du sugen på?</h2>
            <form id="search-bar" role='search' >
                <label for='header-search'>
                  <span class='visually-hidden'>Search</span>
                </label>
                <input type='search' id='header-search' placeholder="Sök efter smaskigheter..." data-search>
                <button type='submit' id="btn-search">
                    <span class="material-symbols-rounded">search</span>
                  <span class='visually-hidden'>Submit Search</span>
                </button>
            </form>
            <form class="m1b" id="categorys" action="">
                <input class="chip" type="checkbox" id="categorySeven">
                <label for="categorySeven">Asiatiskt</label>
                <input class="chip" type="checkbox" id="categoryOne">
                <label for="categoryOne">Kyckling</label>
                <input class="chip" type="checkbox" id="categoryTwo">
                <label for="categoryTwo">Vegetariskt</label>
                <input class="chip" type="checkbox" id="categoryThree">
                <label for="categoryThree">Soppa</label>
                <input class="chip" type="checkbox" id="categoryFour">
                <label for="categoryFour">Pizza</label>
                <input class="chip" type="checkbox" id="categorySix">
                <label for="categorySix">Pasta</label>
                <input class="chip" type="checkbox" id="categoryEight">
                <label for="categoryEight">TikTok</label>
            </form>
        </section>
        <section class="user-recipes">
            <article class="recipes-cards">
                <article class="popular-cards" data-user-cards></article>
            </article>
            <article class="recipes-cards">
                <h3 class="small-headline mb">Våra tre favoriter</h3>
                <article favoriteRecipes class="cards-flexbox"></article>
            </article>
            <article class="recipes-cards">
                <h3 class="small-headline mb">Recept från Tik-Tok</h3>
                <article tikTokRecipes class="cards-flexbox">
                </article>
            </article>
            <article class="recipes-cards">
                <h3 class="small-headline mb">Soppor</h3>
                <article soupRecipes class="cards-flexbox">
                </article>
            </article>
            <article class="recipes-cards">
                <h3 class="small-headline mb">Vegetariskt</h3>
                <article vegRecipes class="cards-flexbox">
                </article>
            </article>
            <article class="recipes-cards">
                <h3 class="small-headline mb">Pasta</h3>
                <article pastaRecipes class="cards-flexbox">
                </article>
            </article>
            <article class="recipes-cards hidden">
                <h3 class="small-headline mb">Filtrerade recept</h3>
                <article searchFilteredRecipes class="cards-flexbox">
                </article>
            </article>
            <template data-user-template>
                <div class="card">
                    <a href="" data-link>
                        <div class="card-text">
                            <p data-cat class="visually-hidden"></p>
                            <h4 data-header class="card-headline mb"></h4>
                            <button class="btn-text">Gå till receptet →</button>
                        </div>
                        <img data-image> 
                        <div class="gradient"></div>
                    </a>
                </div>
            </template>
        </section>
    </main>
    <!-- Cookie Popup -->
    <div id="cookie-popup" class="cookie-popup">
        <div class="popup-content">
            <span id="close-icon" class="close-icon">×</span>
            <h2>Vi använder kakor</h2>
            <p>Vi använder kakor för att göra ett så bra material som möjligt för sidan. Allting som samlas in är till för att förbättra upplevelsen på sidan och för att skapa ett så bra lärande material som möjligt.</p>
            <div class="cookie-switch-container">
                <span id="cookie-status" class="cookie-status">Kakinställningar</span>
                <label class="switch">
                    <input type="checkbox" id="cookie-switch">
                    <span class="slider round"></span>
                </label>
            </div>
            <button id="only-necessary-button" style="display: none;">Bara nödvändiga</button>
            <button id="ok-button" style="display: none;">Ok</button>
            <div class="b">
                <a href="privacy-policy.php" class="integrity">Integritetspolicy</a>
            </div>
        </div>
    </div>
    <footer class="main-footer">
        <div class="footer-container">
            <section class="footer-content">
                <figure>
                    <img class="footer-logotype" src="img/kreativ-kost-logo.png" alt="Kreativ Kost logotyp, en skål med en sked över samt namnet till höger">
                </figure>
                <div class="p-box">
                    <p class="footer-text">Skolprojekt av Jennie, Aim och Markus</p>
                    <p class="footer-text mb">Digital Design @ Brobygrafiska 2022</p>
                </div>
                <div class="social-media-container mb">
                    <p class="footer-text smb">Följ oss</p>
                    <a href="https://www.instagram.com/kreativ_kost">
                        <i class="fa fa-instagram"></i>
                    </a>
                </div>
            </section>
            <p class="footer-text-right">© Kreativ Kost 2023 </p>
        </div>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>