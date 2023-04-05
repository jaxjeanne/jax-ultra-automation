import { ChainablePromiseElement } from 'webdriverio';
import Page from "./page";

class LoginPage extends Page {
    rootElement: ChainablePromiseElement<WebdriverIO.Element>;

    constructor(rootElement?: ChainablePromiseElement<WebdriverIO.Element>) {
        super();
      this.rootElement = rootElement || $('body.login-page');
    }

    get privacyPolicyPopup() {
        return this.rootElement.$('.privacyPolicyContainer').$('.consent-footer').$('button#agree_button');
    }

    get inputUsername () {
        return this.rootElement.$('#user_id');
    }

    get inputPassword () {
        return this.rootElement.$('#password');
    }

    get btnSubmit () {
        return this.rootElement.$('.button#entry-login');
    }

    /**
     * Dismiss Privacy Policy Popup
     */
   async dismissPopup () {
        await (await this.privacyPolicyPopup).click();
        return this;
    }

    /**
     * Login using username and password
     * @param username for username
     * @param password for password
     */
    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * will open your local Learn app to /login page
     */
    async openLocal () {
        // return .openlocal('login');
    }

    /**
     * Opens the desired page on your Kubernetes instance
     * @param url path to feature branch test instance
     * @param route path of the sub page (e.g. /path/to/page.html)
     */
    async openTestInstance (url: string, route: string) {
        return browser.url(`${url}${route}`)
    }
}
export default new LoginPage();

