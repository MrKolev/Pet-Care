import { html } from "../../node_modules/lit-html/lit-html.js";


export function dashboardPageView(ctx) {
    ctx.render(dashboardViewTemplate());

}

function dashboardViewTemplate() {
    return html ` <section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="./images/cat2.jpg">
            </article>
            <h2 class="name">Athena</h2>
            <h3 class="breed">American Curl</h3>
            <div class="action">
                <a class="btn" href="#">Details</a>
            </div>
        </div>

        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="./images/dog2.jpg">
            </article>
            <h2 class="name">Apollo</h2>
            <h3 class="breed">Pug</h3>
            <div class="action">
                <a class="btn" href="#">Details</a>
            </div>
        </div>

        <div class="animals-board">
            <img class="animal-image-cover" src="./images/guinea-pig.jpg">
            <h2 class="name">Chibi</h2>
            <h3 class="breed">Teddy guinea pig</h3>
            <div class="action">
                <a class="btn" href="#">Details</a>
            </div>
        </div>

        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="./images/Shiba-Inu.png">
            </article>
            <h2 class="name">Max</h2>
            <h3 class="breed">Shiba Inu</h3>
            <div class="action">
                <a class="btn" href="#">Details</a>
            </div>
        </div>
        <!--If there is no pets in dashboard-->
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>
    </div>
</section>
`
}