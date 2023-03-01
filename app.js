import page from "./node_modules/page/page.mjs";
import { html, render } from "./node_modules/lit-html/lit-html.js";
import { loginPageView } from "./src/views/loginPage.js";
import { registerPageView } from "./src/views/registerPage.js";
import { dashboardPageView } from "./src/views/dashboard.js";
import { createPageView } from "./src/views/createPage.js";
import { editPageView } from "./src/views/editPage.js";
import { detailsPageView } from "./src/views/detailsPage.js";
import { homePageView } from "./src/views/homePage.js";
import { getUserData } from "./src/utils.js";
import { logout } from "./src/api/data.js";

const content = document.getElementById("content");
const navBar = document.getElementById("navigation-bar");

page("index",renderMiddleware, homePageView);
page("/",renderMiddleware, homePageView);
page("/loginPage",renderMiddleware, loginPageView);
page("/registerPage",renderMiddleware, registerPageView);
page("/logout",renderMiddleware, logoutBtn);
page("/dashboard",renderMiddleware, dashboardPageView);
page("/createPage",renderMiddleware, createPageView);
page("/editPage",renderMiddleware, editPageView);
page("/detailsPage",renderMiddleware, detailsPageView);

page.start();

upadeNav();


function logoutBtn() {
  logout();
  page.redirect("/");
}


function renderMiddleware(ctx, next) {
  ctx.render = (cont) => render(cont, content);
  ctx.page = page;
  next();
}

export function upadeNav() {
  const user = getUserData();
  if (user) {
    render(html`
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/createPage">Create Postcard</a></li>
    <li><a href="/logout">Logout</a></li>`
      , navBar);
  } else {
    render(html`
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/loginPage">Login</a></li>
    <li><a href="/registerPage">Register</a></li>`
      , navBar);
  }
}
