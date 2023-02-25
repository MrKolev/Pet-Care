const { html } = require("lit-html");

export function registerPageView(ctx) {
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
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`
}

function onSubmit(e) {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const { email, password, repeatPassword } = dataForm;
}