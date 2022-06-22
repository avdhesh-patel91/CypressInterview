const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url: "https://dashboard.perxtech.io/dashboard",
    testQa: "thao+test-qa-interview@perxtech.com",
    rewardTest: "thao+reward-test-qa-interview@perxtech.com",
    testQaPWD: "admin1234",
    rewardPWD: "reward_admin",
  },
});
