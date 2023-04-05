import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class QuestionBankManage extends Page {

    get addNewButton() {
        return $('button.create-new-bar');
    }

    get addNewMenu() {
        return $('aria/Add question bank menu')
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
export default new QuestionBankManage();
