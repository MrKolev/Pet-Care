const { html } = require("lit-html");

export function loginPageView(ctx) {
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
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`
}

function onSubmit(e) {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const { email, password } = dataForm;
    

}