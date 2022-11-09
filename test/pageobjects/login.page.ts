import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#user_id');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('.button#entry-login');
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
        return super.openlocal('login');
    }

    /**
     * Opens the desired page on your local instance
     * @param url path to feature branch test instance
     * @param route path of the sub page (e.g. /path/to/page.html)
     */
    public openTestInstance (url: string, route: string) {
        return browser.url(`${url}${route}`)
    }
}

export default new LoginPage();
