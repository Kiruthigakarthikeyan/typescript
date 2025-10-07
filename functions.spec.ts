import { test, expect } from "@playwright/test";

// Example TypeScript function (from your learning)
function formatName(firstName: string, lastName?: string, title: string = "Mr./Ms.") {
  return `${title} ${firstName} ${lastName ?? ""}`.trim();
}

test("Fill a form on demoqa.com using TypeScript function", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");

  const fullName = formatName("kirthiga", "karthikeyan");
  console.log("Full name:", fullName); // For practice

  await page.fill("#userName", fullName);
  await page.fill("#userEmail", "alice@example.com");
  await page.fill("#currentAddress", "123 Learning Street");
  await page.fill("#permanentAddress", "456 Practice Avenue");

  await page.click("#submit");

  // Assert form submission
  const output = await page.locator("#output").textContent();
  expect(output).toContain("kirthiga");
  console.log("Full name:", fullName); 
});
