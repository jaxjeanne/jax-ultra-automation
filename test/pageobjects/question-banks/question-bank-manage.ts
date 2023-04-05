import Page from '../page';
import {ChainablePromiseElement} from "webdriverio";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class QuestionBankManage extends Page {
    constructor(rootElement?: ChainablePromiseElement<WebdriverIO.Element>) {
        super(rootElement || $('.question-banks-panel'));
    }

    get addNewButton() {
        return this.rootElement.$('button.create-new-bar');
    }

    get addNewMenu() {
        return this.rootElement.$('aria/Add question bank menu')
    }

    get addNewOption() {
        return this.addNewMenu.$('[data-analytics-id="questionBankEdit.addQuestion.menu.item.new"]')
    }

    async addNewBank() {
        await this.addNewButton.click()
        await this.addNewOption.click();
        return this;
    }
}
export default new QuestionBankManage()
