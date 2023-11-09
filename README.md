# Framework development in progress

## Will be updated soon.



# Creation of project from scratch

npm init -y
npm init wdio

to run test-specs
npx wdio config/filename
to run test-suite
npx wdio --suite smoke
to run multiple tests in parallel
npx wdio --suite smoke --smoke regression
to run a speicific spec file ffrom cli:
npx wdio --spec test/specs/home.js
to have report:
npx allure generate allure-results  && npx allure open
to run on browserstack
uncomment servcies which has browser stack and provide the below details on runtime and execute on brwoserstack
BROWSERSTACK_USERNAME= BROWSERSTACK_ACCESS_KEY= npx wdio 

#install 
lint-https://www.npmjs.com/package/eslint-plugin-wdio
auto-completion- https://webdriver.io/docs/autocompletion/
babel-https://webdriver.io/docs/babel/