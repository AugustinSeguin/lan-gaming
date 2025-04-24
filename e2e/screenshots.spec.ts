import { test, expect } from "@playwright/test";
import { describe } from "node:test";

describe("screenshot", () => {
  test("screen shot home page", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await page.screenshot({
      path: "tests-screenshot/screenshot-homepage.png"
    });
  });
  test("screen shot register page", async ({ page }) => {
    await page.goto("http://localhost:5173/register");
    await page.screenshot({
      path: "tests-screenshot/screenshot-register.png"
    });
  });
  test("screen shot confirm register page", async ({
    page
  }) => {
    await page.goto(
      "http://localhost:5173/confirm-register"
    );
    await page.screenshot({
      path: "tests-screenshot/screenshot-confirm-register.png"
    });
  });
  test("screen shot result page", async ({ page }) => {
    await page.goto("http://localhost:5173/result");
    await page.screenshot({
      path: "tests-screenshot/screenshot-result.png"
    });
  });
  test("screen shot tournament page", async ({ page }) => {
    await page.goto("http://localhost:5173/tournament");
    await page.screenshot({
      path: "tests-screenshot/screenshot-tournament.png"
    });
  });
});
