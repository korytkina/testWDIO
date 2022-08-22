const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const ATPage = require('../pageobjects/at.page');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});




describe('My anapa.travel tests', () => {
    it('like button should get text after click', async () => {
        await ATPage.open();

        await ATPage.clickFirsButton();
        await expect(ATPage.firstLikeButtonContainer).toHaveTextContaining(
            'You liked comment number 1'
        );

    });
});

