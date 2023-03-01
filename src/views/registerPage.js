import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/data.js";

let context = null;

export function registerPageView(ctx) {
    context = ctx
    ctx.render(registerViewTemplate(onSubmit));

}

function registerViewTemplate(onSubmit) {
    return html`<section id="registerPage">
    <form @submit = ${onSubmit} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/loginPage">here</a></span>
        </p>
    </form>
</section>
`
}

async function onSubmit(e) {
    e.preventDefault();
    const { email, password, repeatPassword } = Object.fromEntries(new FormData(e.target));

    try {
        if (!email || !password || !repeatPassword) {
            throw new Error("all fields must be filled")
        }

        if (password !== repeatPassword) {
            throw new Error("password and repeatPassword must match")
        }

        await register(email, password);

        context.page.redirect("/");

    } catch (error) {
        alert(error.message)
    }
}