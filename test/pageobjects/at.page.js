class ATPage {
    open() {
        return browser.url('https://anapa-travel-tau.vercel.app/')
    }
    get firstButton() {
        return $('.like_button_container[data-commentid="1"] button')
    }

    async clickFirsButton() {
        await this.firstButton.click();
    } 

    get firstLikeButtonContainer () {
        return $('.like_button_container[data-commentid="1"]')
    }
}

module.exports = new ATPage();