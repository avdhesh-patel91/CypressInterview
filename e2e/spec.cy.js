/// <reference types="Cypress" />

import RewardCreate from "../support/pageObjects/reward";

describe("Perxtech testsuite", () => {
  it("integration tests", () => {
    cy.visit(Cypress.env(url));
    RewardCreate.getEmail().should("be.visible").type(Cypress.env("testQa"));
    RewardCreate.getPassword()
      .should("be.visible")
      .type(Cypress.env("testQaPWD"));
    RewardCreate.clickOnLoginButton()
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    cy.url().should(
      "eq",
      "https://dashboard.perxtech.io/dashboard/p/business_intelligence/overview"
    );
  });

  it.only("creating a reward", () => {
    cy.visit(Cypress.env("url"));
    RewardCreate.getEmail()
      .should("be.visible")
      .type(Cypress.env("rewardTest"));
    RewardCreate.getPassword()
      .should("be.visible")
      .type(Cypress.env("rewardPWD"));
    RewardCreate.clickOnLoginButton()
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    cy.url().should(
      "eq",
      "https://dashboard.perxtech.io/dashboard/p/rewards/list"
    );

    RewardCreate.clickOnCreateReward()
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    cy.url().should(
      "eq",
      "https://dashboard.perxtech.io/dashboard/p/rewards/create"
    );
    RewardCreate.getRewardDetailsName()
      .should("be.visible")
      .type("TestReward_21062022", { delay: 100 })
      .and("have.value", "TestReward_21062022");

    RewardCreate.getRewardDetailsSubtitle()
      .should("be.visible")
      .type("TSTREWRD")
      .and("have.value", "TSTREWRD");

    RewardCreate.getRewardDetailsDescription()
      .should("be.visible")
      .type("this is for the testing purpose only");

    RewardCreate.clickOnNextButton().should("be.visible").click();
    RewardCreate.clickOnEndDatePicker().click();
    cy.get(".ant-calendar-tbody").contains("28").click();
    RewardCreate.clickOnNextButton().click();
    RewardCreate.clickOnSaveBtn().click();
  });
});
