import { ChainablePromiseElement } from 'webdriverio';

export class AdminUsersPage {
    rootElement: ChainablePromiseElement<WebdriverIO.Element>;
  
    constructor(rootElement?: ChainablePromiseElement<WebdriverIO.Element>) {
      this.rootElement = rootElement || $('#contentPanel');
    }

    public get actionBar() {
        return this.rootElement.$('.actionBar')
    }

    public get btnCreateUser() {
        return this.actionBar.$('a=Create User')
    }

    public get inputFirstname() {
        return this.rootElement.$()
    }

    public get inputLastname() {
        return this.rootElement.$()
    }

    public get inputPasword() {
        return this.rootElement.$()
    }

    public get adminUser() {
        return this.rootElement.$()
    }

    public get btnSubmit() {
        return this.rootElement.$('')
    }

    /**
     * Creates an Admin User
     * @param username
     * @param lastname
     * @param password
     * @returns the Admin page
     */
    public async createUser(username: string, lastname: string, password: string) {
        await (await this.btnCreateUser).click();
        
        
        return this;
    }
}
