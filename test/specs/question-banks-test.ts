import LoginPage from '../pageobjects/login.page';
import QuestionBankEdit from "../pageobjects/question-banks/question-bank-edit";
import QuestionBankManage from "../pageobjects/question-banks/question-bank-manage";

describe('Instructor Question Banks', () => {
    it('can create new Bank', async() => {
        const testInstance = 'https://jaxtest.blackboard.com/ultra/';
        const route = 'courses/_3_1/outline/banks'; //directly to Question Banks Manage panel
        await LoginPage.openTestInstance(testInstance, route);
        await LoginPage.login('jaxinstr1', 'test');
        await QuestionBankManage.addNewBank();
    })

    it('can create new Bank', async() => {

    })

    it('can create new Bank', async() => {

    })

    it('can create new Bank', async() => {

    })

    it('can edit question in bank', async () => {
        const testInstance = 'https://jaxtest.blackboard.com/ultra/';
        const route = 'courses/_3_1/outline/banks/editBank/_1047_1'; //directly to Question Banks Edit panel
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



