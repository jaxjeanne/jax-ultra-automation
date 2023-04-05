import { ChainablePromiseElement } from 'webdriverio';

import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QuestionBankEdit extends Page {
    constructor(rootElement?: ChainablePromiseElement<WebdriverIO.Element>) {
        super(rootElement || $('.question-bank-edit'));
    }

    get moreOptionsButton () {
        return $('.question-bank-edit-list').$('.question-controls__actions').$('button.ms-Button');
    }

    get menuEditOption () {
        return $('.ms-ContextualMenu-container').$('button[name="Edit"]');
    }

    get questionTextEditor () {
        return $('.bb-editor-wrapper');
    }

    get textEditor () {
        return $('.ql-editor');
    }

    async enterEditMode () {
        await this.moreOptionsButton.click();
        await this.menuEditOption.click();
        await this.assertQuestionEditMode();
        return this;
    }

    async assertQuestionEditMode () {
        await expect(this.questionTextEditor.isDisplayed());
        return this;
    }

    async enterQuestionText (text: string) {
        await this.textEditor.click();
        await this.textEditor.setValue(text);
        return this;
    }
}

export default new QuestionBankEdit();
