const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Grips -RI Broking",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Francis -PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Grips -RI Broking" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});