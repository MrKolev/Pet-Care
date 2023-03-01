import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllPets } from "../api/data.js";


export async function dashboardPageView(ctx) {
    ctx.render(dashboardViewTemplate(await getAllPets()));

}

function dashboardViewTemplate(data) {
    return html` <section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
${data.length > 0 ? data.map(x => {
    return html`
<div class="animals-board">
    <article class="service-img">
    <img class="animal-image-cover" src="${x.image}">
    </article>
    <h2 class="name">${x.name}</h2>
    <h3 class="breed">${x.breed}</h3>
    <div class="action">
<a class="btn" href="/detailsPage/${x._id}">Details</a>
</div>
</div>`})
: html`
<div>
<p class="no-pets">No pets in dashboard</p>
</div>
</div>
</section>`
}
`
}