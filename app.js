import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";
import { loginPageView } from "./src/views/loginPage.js";
import { registerPageView } from "./src/views/registerPage.js";
import { dashboardPageView } from "./src/views/dashboard.js";
import { createPageView } from "./src/views/createPage.js";
import { editPageView } from "./src/views/editPage.js";
import { detailsPageView } from "./src/views/detailsPage.js";
import { homePageView } from "./src/views/homePage.js";

const content = document.getElementById("content")

page(renderMiddleware);
page("/", homePageView);
page("/loginPage", loginPageView);
page("/registerPage", registerPageView);
page("/logout", logoutBnt);
page("/dashboard", dashboardPageView);
page("/createPage", createPageView);
page("/editPage", editPageView);
page("/detailsPage", detailsPageView);

page.start()

function logoutBnt() {

}

function renderMiddleware(ctx, next) {
  ctx.render = (cont) => render(cont, content);
  ctx.page = page;
  next();
}

export function upadeNav() {
  const user = getUserData();
  if (user) {
    render(() => {
      return html`
        <li><a href="/createPage">Create Postcard</a></li>
        <li><a href="/logout">Logout</a></li>`
    }, content);
  } else {
    render(() => {
      return html`
        <li><a href="/loginPage">Login</a></li>
        <li><a href="/registerPage">Register</a></li>`
    }, content);
  }
}
