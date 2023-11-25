<?php
session_start();
$urlB = "index2.php";
include("inc/abtest.php");
 ?>

<?php
$pagetitle = "Kreativ Kost";
include("inc/header.php");
 ?>

    <div class="hero-container">
        <figure class="hero-section">
            <img src="img/hero-illustration.png" class="hero-img" alt="">
            <article class="content">
                <h1 class="headline mb">Du behöver inte vara rik för att äta lyxigt.</h1>
            </article>
        </figure>
    </div>
    <main class="container" id="main-content">
        <section id="search">
            <h2 class="mid-headline mb mt center">Vad är du sugen på?</h2>
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
            <section class="recipes-cards">
                <div class="popular-cards" data-user-cards></div>
            </section>
            <section class="recipes-cards">
                <div class="visa-alla-box">
                    <h3 class="small-headline mb">Asiatiskt</h3>
                    <!-- <button  class="visa-alla">
                        <p>Visa alla →</p>
                    </button>-->
                    <form id="categorys-visa-alla" action="">
                        <input class="chip-visa-alla" type="checkbox" id="categorySeven">
                        <label class="chip-label" for="categorySeven">Visa alla →</label>
                
                    </form>
                     <!-- <h3 class="small-headline mb">Filtrerade recept</h3> -->
                    
                </div>
                
                
                <div asiatisktRecipes class="cards-flexbox"></div>
            </section>
            <section class="recipes-cards">
            <div class="visa-alla-box">
                <h3 class="small-headline mb">Recept från Tik-Tok</h3>
                    <!-- <button  class="visa-alla">
                        <p>Visa alla →</p>
                    </button>-->
                    <form id="categorys-visa-alla" action="">
                        <input class="chip-visa-alla" type="checkbox" id="categoryEight">
                        <label class="chip-label" for="categoryEight">Visa alla →</label>
                
                    </form>
                </div>
                
                <section tikTokRecipes class="cards-flexbox">
                </section>
            </section>
            <section class="recipes-cards">
            <div class="visa-alla-box">
                <h3 class="small-headline mb">Soppor</h3>
                    <!-- <button  class="visa-alla">
                        <p>Visa alla →</p>
                    </button>-->
                    <form id="categorys-visa-alla" action="">
                        <input class="chip-visa-alla" type="checkbox" id="categoryThree">
                        <label class="chip-label" for="categoryThree">Visa alla →</label>
                
                    </form>
            </div>
                
                <section soupRecipes class="cards-flexbox">
                </section>
            </section>
            <section class="recipes-cards">
            <div class="visa-alla-box">
            <h3 class="small-headline mb">Vegetariskt</h3>
                    <form id="categorys-visa-alla" action="">
                        <input class="chip-visa-alla" type="checkbox" id="categoryTwo">
                        <label class="chip-label" for="categoryTwo">Visa alla →</label>
                
                    </form>
            </div>
            
                <article vegRecipes class="cards-flexbox">
                </article>
            </section>
            <section class="recipes-cards">
            <div class="visa-alla-box">
            <h3 class="small-headline mb">Pasta</h3>
                    <form id="categorys-visa-alla" action="">
                        <input class="chip-visa-alla" type="checkbox" id="categorySix">
                        <label class="chip-label" for="categorySix">Visa alla →</label>
                
                    </form>
            </div>
          
                <article pastaRecipes class="cards-flexbox">
                </article>
            </section>
            <section class="recipes-cards hidden">
                <!-- <h3 class="small-headline mb">Filtrerade recept</h3> -->
                <article searchFilteredRecipes class="cards-flexbox">
                </article>
            </section>
            <template data-user-template>
                <!-- KORTET -->
                <article class="card">
                    <a href="" data-link>
                        <figure class="bild-box">
                            <img data-image> 
                        </figure>
                        <div class="card-text">
                            <p data-cat class="visually-hidden"></p>
                            <h4 data-header class="card-headline mb"></h4>
                       
                        </div>
                        <!-- <div class="gradient"></div> -->
                    </a>
                </article>
            </template>
        </section>
    </main>
    
    <?php
        include("inc/footer.php");
    ?>
    <script src="js/script.js"></script>
</body>
</html>