const LoginPage = require('../pageobjects/login.page') ;
const AdminPage = require ('../pageobjects/admin.page')


describe('Setup K8 test instance with the following', () => {
    it('Enable Ultra UI', async () => {
        const testInstance = 'https://learnci-feature-lrn-195187-uia-ia68adf98.dev.bbpd.io/';
        const route = 'ultra/admin';
        await LoginPage.openTestInstance(testInstance, route);
        await LoginPage.dismissPopup();
        await LoginPage.login('administrator', 'changeme');
        await AdminPage.enableUltraUI();
    })
})
