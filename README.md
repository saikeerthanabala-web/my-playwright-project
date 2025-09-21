# Playwright Data-Driven Tests  

This project contains a Playwright test suite built with **TypeScript** that demonstrates a **data-driven testing approach**.  
The test cases are stored in JSON and dynamically consumed by the tests to reduce duplication and improve scalability.  



## 🚀 Features
- Automated login to the demo app  
- Data-driven test cases (`testCases.json`)  
- Reusable login utility (`utils/login.ts`)  
- Exact & scoped locators to avoid strict mode violations  
- Trace Viewer support for debugging  



## 📂 Project Structure
.
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .gitignore
├── README.md
├── tests/
│ ├── taskValidation.spec.ts # main data-driven test suite
│ └── testCases.json # test data
└── utils/
└── login.ts # reusable login helper


## 🛠️ Setup Instructions

### 1. Clone the repo
-- git clone https://github.com/saikeerthanabala-web/my-playwright-project
-- cd <repo-name>

### 2. Install dependencies
-- npm install
-- npx playwright install

### 3. Running the Tests
-- For running all tests (headless mode)
--- npx playwright test
-- For running with browser UI (headed mode)
--- npx playwright test --headed
-- For running with trace enabled for all tests
---npx playwright test --trace on

### 4. Debugging with Trace Viewer
-- When a test fails, Playwright generates a trace file.
-- To open the trace:
---npx playwright show-trace test-results/<your-test>/trace.zip
--or open the latest trace:
---npx playwright show-trace

### 5. Test Cases Implemented
-- Web Application → Implement user authentication → To Do → Tags: Feature, High Priority

-- Web Application → Fix navigation bug → To Do → Tags: Bug

-- Web Application → Design system updates → In Progress → Tags: Design

-- Mobile Application → Push notification system → To Do → Tags: Feature

-- Mobile Application → Offline mode → In Progress → Tags: Feature, High Priority

-- Mobile Application → App icon design → Done → Tags: Design

### 6. Credentials
-- Demo App: https://animated-gingersnap-8cf7f2.netlify.app/
-- Email: admin
-- Password: password123

### 7. Submission Notes
-- All tests are data-driven from testCases.json.
-- Reusable login is implemented in utils/login.ts.
-- Recorded a 2–3 minute walkthrough video covering:
----Project structure
----How test data drives the suite
----Example test run and trace debugging
