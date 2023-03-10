import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/data.js";

let context = null;
export function loginPageView(ctx) {
     context = ctx;
    ctx.render(loginViewTemplate(onSubmit));

}

function loginViewTemplate(onSubmit) {
    return html` <section id="loginPage">
    <form @submit = ${onSubmit} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/registerPage">here</a></span>
        </p>
    </form>
</section>
`
}

async function onSubmit(e) {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    try {
        if (!email || !password) {
            throw new Error("all fields must be filled")
        }

        await login(email, password);

        context.page.redirect("/");

    } catch (error) {
        alert(error.message)
    }
    

}