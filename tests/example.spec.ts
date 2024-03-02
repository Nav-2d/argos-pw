import { test, expect } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("screenshot homepage", async ({ page }) => {
  await page.goto("https://argos-ci.com/docs/why-argos");
  await argosScreenshot(page, "homepage");
});

test("screenshot pages", async ({ page }, testInfo) => {
  const browserName = testInfo.project.name;
  await page.goto("https://playwright.dev/");
  await argosScreenshot(page, `pw-home-${browserName}`);
});

test("clip a section", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium");
  await page.goto("https://playwright.dev/");
  await argosScreenshot(page, `clip-region`, {
    clip: { x: 0, y: 0, width: 500, height: 500 },
  });
});

test("capture a specific element", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium");
  await page.goto("https://playwright.dev/");
  await argosScreenshot(page, `clip-test`, {
    element: "nav",
  });
});
