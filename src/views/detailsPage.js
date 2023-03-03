import { html } from "../../node_modules/lit-html/lit-html.js";
import { petInfo } from "../api/data.js";
import { getUserData } from "../utils.js";


export async function detailsPageView(ctx) {
    const petId = ctx.params.id;
    const user = getUserData();
    const infoPet = await petInfo(petId);
    let isOwner = false;
    if (user) {
        if (infoPet._ownerId === user._id) {
            isOwner = true;
        }
    }

    ctx.render(detailsViewTemplate(infoPet, isOwner,user));
}

function detailsViewTemplate(infoPet, isOwner,user) {
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
           ${isOwner ? html `
           <div class="actionBtn">
           <a href="/editPage/${infoPet._id}" class="edit">Edit</a>
           <a href="/deleteArticle/${infoPet._id}" class="remove">Delete</a>
           <!--(Bonus Part) Only for no creator and user-->
           <a href="#" class="donate">Donate</a>
       </div>` : ""}            
        </div>
    </div>
</section>`

}