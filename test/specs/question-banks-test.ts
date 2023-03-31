import { LoginPage } from  '../pageobjects/login.page';
import QuestionBankManage from "../pageobjects/question-bank-manage";

describe('Instructor Question Banks', () => {
    it('can edit question in bank', async () => {
        const testInstance = 'https://test-191678.dev.bbpd.io/ultra/';
        const route = 'courses/_4_1/outline/banks/editBank/_1104_1';
        await LoginPage.openTestInstance(testInstance, route);
        await LoginPage.login('jaxinstr1', 'test');
        await QuestionBankManage.enterEditMode();
        await QuestionBankManage.questionTextEditor;
        await QuestionBankManage.enterQuestionText('Im in edit mode');
    })
})


