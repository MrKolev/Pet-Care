const { html } = require("../../node_modules/lit-html/lit-html.js");

export function editPageView(ctx) {
    ctx.render(editViewTemplate(onSubmit));

}

function editViewTemplate(onSubmit) {
    return html`
    <section id="editPage">
    <form @submit = ${onSubmit} class="editForm">
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section> `
}

function onSubmit(e) {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const { name, breed, age, weight, image } = dataForm;
}