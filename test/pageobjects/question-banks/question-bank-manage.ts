import { ChainablePromiseElement } from 'webdriverio';

import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QuestionBankManage extends Page {
    rootElement: ChainablePromiseElement<WebdriverIO.Element>;

    public get moreOptionsButton () {
        return $('.question-bank-edit-list').$('.question-controls__actions').$('button.ms-Button');
    }

    public get menuEditOption () {
        return $('.ms-ContextualMenu-container').$('button[name="Edit"]');
    }

    public get questionTextEditor () {
        return $('.bb-editor-wrapper');
    }

    public get textEditor () {
        return $('.ql-editor');
    }

    public async enterEditMode () {
        await this.moreOptionsButton.click();
        await this.menuEditOption.click();
        return this;
    }

    public async assertQuestionEditMode () {
        await expect(this.questionTextEditor.isDisplayed());
        return this;
    }

    public async enterQuestionText (text: string) {
        await this.textEditor.click();
        await this.textEditor.setValue(text);
        return this;
    }
}

export default new QuestionBankManage();
