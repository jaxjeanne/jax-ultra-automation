import LoginPage from '../pageobjects/login.page';
import QuestionBankEdit from "../pageobjects/question-banks/question-bank-edit";

describe('Instructor Question Banks', () => {
    it('can create new Bank', async() => {
        const testInstance = 'https://ultra-next.bbpd.io';
        const route = 'courses/_21_1/outline/banks'; //directly to Question Banks Manage
        await LoginPage.openTestInstance(testInstance, route);
        await LoginPage.login('jaxinstr1', 'test');

    })

    it('can create new Bank', async() => {

    })

    it('can create new Bank', async() => {

    })

    it('can create new Bank', async() => {

    })

    it('can edit question in bank', async () => {
        const testInstance = 'https://ultra-next.bbpd.io';
        const route = 'courses/_21_1/outline/banks/editBank/_1104_1';
        await LoginPage.openTestInstance(testInstance, route);
        await LoginPage.login('jaxinstr1', 'test');
        await QuestionBankEdit.enterEditMode();
        await QuestionBankEdit.questionTextEditor;
        await QuestionBankEdit.enterQuestionText('Im in edit mode');
    })

    it('can create new Bank', async() => {

    })

    it('can create new Bank', async() => {

    })

    it('can create new Bank', async() => {

    })
})



