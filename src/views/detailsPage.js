import { html } from "../../node_modules/lit-html/lit-html.js";
import { petDel, petInfo } from "../api/data.js";
import { getUserData } from "../utils.js";

let page = null;
export async function detailsPageView(ctx) {
    page = ctx.page
    const petId = ctx.params.id;
    const user = getUserData();
    const infoPet = await petInfo(petId);
    let isOwner = false;
    if (user) {
        if (infoPet._ownerId === user._id) {
            isOwner = true;
        }
    }

    ctx.render(detailsViewTemplate(infoPet, isOwner, user));
}

function detailsViewTemplate(infoPet, isOwner, user) {
    return html` 
    <section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${infoPet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${infoPet.name}</h1>
                <h3>Breed: ${infoPet.breed}</h3>
                <h4>Age: ${infoPet.age}</h4>
                <h4>Weight: ${infoPet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
           ${user ?
            html`
            <div class="actionBtn">
               ${isOwner ?
                    html`
                    <a href="/editPage/${infoPet._id}" class="edit">Edit</a>
                    <a @click = ${() => {
                            if (confirm("Are you sure you want to delete?")) {
                                petDel(infoPet._id)
                                page.redirect("/dashboard")
                            }
                        }
                        } class="remove" > Delete</a >`
                    :
                    html`<a href="/" class="donate">Donate</a>
                `}
             </div > `
            : "" }
    </div >
</section > `

}