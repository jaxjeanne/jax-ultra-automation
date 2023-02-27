import { ChainablePromiseElement } from 'webdriverio';

export default class LoginPage {
    rootElement: ChainablePromiseElement<WebdriverIO.Element>;
  
    constructor(rootElement?: ChainablePromiseElement<WebdriverIO.Element>) {
      this.rootElement = rootElement || $('body.login-page');
    }

    public get privacyPolicyPopup() {
        return this.rootElement.$('.privacyPolicyContainer').$('.consent-footer').$('button#agree_button');
    }

    public get inputUsername () {
        return this.rootElement.$('#user_id');
    }

    public get inputPassword () {
        return this.rootElement.$('#password');
    }

    public get btnSubmit () {
        return this.rootElement.$('.button#entry-login');
    }

    /**
     * Dismiss Privacy Policy Popup
     */
    public async dismissPopup () {
        await (await this.privacyPolicyPopup).click();
        return this;
    }

    /**
     * Login using username and password
     * @param username for username
     * @param password for password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * will open your local Learn app to /login page
     */
    public openLocal () {
        // return .openlocal('login');
    }

    /**
     * Opens the desired page on your Kubernetes instance
     * @param url path to feature branch test instance
     * @param route path of the sub page (e.g. /path/to/page.html)
     */
    public openTestInstance (url: string, route: string) {
        return browser.url(`${url}${route}`)
    }
}

