import { test, expect } from "@playwright/test";

test.describe("Mx Studio Homepage", () => {
  test("renders branding and primary heading", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Mx Studio/);
    await expect(page.locator("h1")).toContainText("Mx Studio");
  });

  test("displays development environment status", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Development Environment Active")
    ).toBeVisible();
    await expect(page.getByText("Create Beyond Limits.")).toBeVisible();
  });
});
