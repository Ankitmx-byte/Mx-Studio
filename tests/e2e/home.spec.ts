import { test, expect } from "@playwright/test";

test.describe("Mx Studio Landing Page", () => {
  test("renders branding and primary headline", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Mx Studio \| Create Beyond Limits/);
    await expect(page.locator("h1")).toContainText("Create");
    await expect(page.locator("h1")).toContainText("Beyond Limits.");
  });

  test("displays core value proposition and 3-Day Free Trial CTA", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByText("Your Entire Creative Workflow, Powered by AI.")
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Start 3-Day Free Trial/i })
    ).toBeVisible();
  });

  test("contains all four creative studio sections", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("AI Video Studio")).toBeVisible();
    await expect(page.getByText("AI Photo Studio")).toBeVisible();
    await expect(page.getByText("AI Ad Studio")).toBeVisible();
    await expect(page.getByText("Audio Studio")).toBeVisible();
  });

  test("displays transparent pricing plans", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Start Creating. Upgrade When You're Ready.")
    ).toBeVisible();
    await expect(page.getByText("Free Trial")).toBeVisible();
    await expect(page.getByText("Pro Tier")).toBeVisible();
    await expect(page.getByText("Studio Tier")).toBeVisible();
  });
});
