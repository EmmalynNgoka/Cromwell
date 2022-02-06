const { HOMEPAGE_CATEGORIES_ASRT, CATEGORYPAGE_ASRT, CATEGORYPAGE_10_PRODUCT, CATEGORYPAGE_25_PRODUCT, CATEGORYPAGE_DROPDOWN_25, CATEGORYPAGE_OUTOFSTOCK_BTN, CATEGORYPAGE_SHOWOUTOFSTOCK_CHECKBOX, CATEGORYPAGE_ASRT_OUTOFSTOCKPRODUCT, CATEGORYPAGE_SORTBY_DROPDOWN, CATEGORYPAGE_SORTBY_LOWTOHIGH, CATEGORYPAGE_ASRT_LOWTOHIGH } = require('../locators/categoryPage.locators');

class Categorypage {
    getCategorypageElements() {
        return require('../locators/categoryPage.locators')
    }

    launchCategorypage() {
        cy.visit("https://www.cromwell.co.uk/shop/abrasives/cutting-discs/c/090902?pageNo=1&pageLimit=10");
    }

    assertCategorypage() {
        cy.xpath(CATEGORYPAGE_ASRT).should('be.visible');
        cy.contains('Categories')

    }

    assert10Products() {
        cy.xpath(CATEGORYPAGE_10_PRODUCT).should('be.visible');
        cy.contains('1-10 of').should('be.visible');


    }

    row25Categorypage() {
        cy.xpath(CATEGORYPAGE_10_PRODUCT).wait(1000).click();
        cy.xpath(CATEGORYPAGE_DROPDOWN_25).wait(1000).click();
    }

    assert25Products() {
        cy.xpath(CATEGORYPAGE_25_PRODUCT).should('be.visible');
        cy.contains('1-25 of').should('be.visible');
    }


    outofstockCategorypage() {
        cy.xpath(CATEGORYPAGE_SHOWOUTOFSTOCK_CHECKBOX).wait(1000).click();

    }

    assertOutofstockProduct() {
        cy.xpath(CATEGORYPAGE_ASRT_OUTOFSTOCKPRODUCT).should('be.visible');
        cy.contains('OUT OF STOCK').should('be.visible');
    }

    clickSortlowtohigh() {
        cy.xpath(CATEGORYPAGE_SORTBY_DROPDOWN).wait(1000).click();
        cy.xpath(CATEGORYPAGE_SORTBY_LOWTOHIGH).wait(1000).click();
    }



    assertSortlowtohigh() {
        cy.xpath(CATEGORYPAGE_ASRT_LOWTOHIGH).wait(1000).click();
        cy.contains('Price High to Low').should('be.visible');
    }


}

module.exports = Categorypage;