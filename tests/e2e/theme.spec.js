import { test, expect } from '@playwright/test'

test('visitors can change theme and keep it after reloading', async ({
  page,
}) => {
  await page.goto('/')

  const themeSwitch = page.getByRole('switch', {
    name: 'Dark mode',
    exact: true,
  })

  const html = page.locator('html')

  // A new visitor starts in dark mode.
  await expect(html).toHaveAttribute('data-theme', 'dark')
  await expect(themeSwitch).toHaveAttribute('aria-checked', 'true')

  // Change to light mode.
  await themeSwitch.click()

  await expect(html).toHaveAttribute('data-theme', 'light')
  await expect(themeSwitch).toHaveAttribute('aria-checked', 'false')

  // Light mode should remain after reloading.
  await page.reload()

  await expect(html).toHaveAttribute('data-theme', 'light')
  await expect(themeSwitch).toHaveAttribute('aria-checked', 'false')

  // Change back to dark mode.
  await themeSwitch.click()

  await expect(html).toHaveAttribute('data-theme', 'dark')
  await expect(themeSwitch).toHaveAttribute('aria-checked', 'true')

  // Dark mode should also remain after reloading.
  await page.reload()

  await expect(html).toHaveAttribute('data-theme', 'dark')
  await expect(themeSwitch).toHaveAttribute('aria-checked', 'true')
})