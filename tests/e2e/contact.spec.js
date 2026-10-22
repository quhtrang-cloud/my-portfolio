import { test, expect } from '@playwright/test'

test('visitors can copy the correct email address', async ({
  page,
  context,
}) => {
  // Allow clipboard access in the test browser.
  await context.grantPermissions([
    'clipboard-read',
    'clipboard-write',
  ])

  await page.goto('/')

  // Clear the clipboard so an old value cannot make the test pass.
  await page.evaluate(() => navigator.clipboard.writeText(''))

  const contact = page.getByRole('region', {
    name: "Let's build something great together.",
    exact: true,
  })

  const copyButton = contact.getByRole('button', {
    name: 'Copy email address',
    exact: true,
  })

  await copyButton.click()

  // Check the feedback shown to the visitor.
  await expect(copyButton).toHaveText('Copied')

  await expect(contact.getByRole('status')).toHaveText(
    'Email address copied.'
  )

  // Check that the clipboard actually contains the correct email.
  const clipboardText = await page.evaluate(() =>
    navigator.clipboard.readText()
  )

  expect(clipboardText).toBe('quhtrang@gmail.com')
})

test('visitors receive guidance when copying fails', async ({ page }) => {
  // Simulate a browser that rejects clipboard writes.
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error('Clipboard write rejected')
        },
      },
    })
  })

  await page.goto('/')

  const contact = page.getByRole('region', {
    name: "Let's build something great together.",
    exact: true,
  })

  const copyButton = contact.getByRole('button', {
    name: 'Copy email address',
    exact: true,
  })

  await copyButton.click()

  await expect(contact.getByRole('status')).toHaveText(
    'Could not copy. Please select and copy the email address above.'
  )

  // The visitor can still access the address and try again.
  await expect(
    contact.getByRole('link', {
      name: 'quhtrang@gmail.com',
      exact: true,
    })
  ).toBeVisible()

  await expect(copyButton).toHaveText('Copy email')
  await expect(copyButton).toBeEnabled()
})