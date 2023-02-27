import { ChainablePromiseElement } from 'webdriverio';
import { AdminUsersPage } from './admin/admin-users';

export default class AdminPage {
    rootElement: ChainablePromiseElement<WebdriverIO.Element>;
  
    constructor(rootElement?: ChainablePromiseElement<WebdriverIO.Element>) {
      this.rootElement = rootElement || $('.base-admin iframe-wrapper');
    }

    get btnEnable () {
        return this.rootElement.$('.ultra-module').$('.button-bar').$('a.ultra-enable')
    }

    get switchEnable () {
        return $('form#ultraConfigForm').$('#stepcontent1').$('.field').$('a#toggle_link_isEnabled')
    }

    get btnSubmit () {
        return $('form#ultraConfigForm').$('.submitStepBottom').$('input#bottom_Submit')
    }

    get bannerSuccess () {
        return $('')
    }

    get adminUsersLink () {
        return this.rootElement.$('a#nav_list_users')
    }

    /**
     * Enables the Ultra UI from Admin panel
     * 
     * @returns the Ultra Base landing page FTUE
     */
    async enableUltraUI(): Promise<AdminPage> {
        await this.btnEnable.click();
        await this.switchEnable.click();
        await this.btnSubmit.click();
        if (await (this.bannerSuccess).isDisplayed()) {
            console.log('Ultra UI enabled successfully')
        }
        console.log('Failed to Enable Ultra UI');
        return this;
    }

    async openUsersPage(): Promise<AdminUsersPage> {
        await this.adminUsersLink.click();
        return new AdminUsersPage();
    }

}


