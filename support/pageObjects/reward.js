class RewardCreate {
  getEmail() {
    return cy.get("#email");
  }

  clickOnLoginButton() {
    return cy.get(".ant-btn");
  }

  getPassword() {
    return cy.get("#password");
  }

  clickOnCreateReward() {
    return cy.get(".ant-btn");
  }

  getRewardDetailsName() {
    return cy.get(
      ":nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > :nth-child(1) > .ant-input"
    );
  }

  getRewardDetailsSubtitle() {
    return cy.get(
      ":nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > :nth-child(1) > .ant-input"
    );
  }

  getRewardDetailsDescription() {
    return cy.get(
      ':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .RichTextEditor__root___2QXK- > .RichTextEditor__editor___1QqIU > .DraftEditor-root > .DraftEditor-editorContainer > .notranslate > [data-contents="true"] > .RichTextEditor__block___2Vs_D > .public-DraftStyleDefault-block'
    );
  }

  clickOnNextButton() {
    return cy.get(".BottomBar__Content-sc-1v8w992-1 > div > .ant-btn-primary");
  }

  clickOnEndDatePicker() {
    return cy.get(
      '[style="margin-bottom: 0px;"] > .ant-col > .ant-form-item-control > .ant-form-item-children > .sc-ciZhAO > .sc-iAvgwm > [style="display: flex; flex-flow: wrap;"] > .sc-cTQhss > div > .anticon > svg'
    );
  }

  clickOnSaveBtn() {
    return cy.get(".ant-btn-primary");
  }
}

export default new RewardCreate();
