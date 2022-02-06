
import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';
import Categorypage from '../pages/category.page'

const categorypage = new Categorypage();

Given('user is on the category page', () => {
    categorypage.launchCategorypage();
});

When('no further options are clicked', () => {
    categorypage.assertCategorypage();
});

Then('ten products should be displayed', () => {
    categorypage.assert10Products();
});

When('the user changes {string} to 25', () => {
    categorypage.row25Categorypage();
});

Then('25 products should be displayed', () => {
    categorypage.assert25Products();
});

And('user has clicked {string}', () => {
    categorypage.outofstockCategorypage();
});

Then('check there is atleast one product that show {string} in the results', () => {
    categorypage.assertOutofstockProduct();
});

When('the user the user selects {string} - {string}', () => {
    categorypage.clickSortlowtohigh();
});

Then('10 products should be displayed in order of price {string}', () => {
    categorypage.assertSortlowtohigh();
});