import { test, expect } from '@playwright/test'

const email = 'quhtrang@gmail.com'

function getContact(page) {
  return page.getByRole('region', {
    name: "Let's build something great together.",
    exact: true,
  })
}

test('visitors can copy the correct email address', async ({
  page,
  context,
  browserName,
}) => {
  if (browserName === 'chromium') {
    // Verify the real browser clipboard on Chromium.
    await context.grantPermissions([
      'clipboard-read',
      'clipboard-write',
    ])
  } else {
    // Verify the app's clipboard write and feedback on other engines.
    await page.addInitScript(() => {
      window.__copiedEmail = ''

      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async (text) => {
            window.__copiedEmail = text
          },
        },
      })
    })
  }

  await page.goto('/')

  if (browserName === 'chromium') {
    await page.evaluate(() => navigator.clipboard.writeText(''))
  }

  const contact = getContact(page)
  const copyButton = contact.getByRole('button', {
    name: 'Copy email address',
    exact: true,
  })

  await copyButton.click()

  await expect(copyButton).toHaveText('Copied')
  await expect(contact.getByRole('status')).toHaveText(
    'Email address copied.'
  )

  if (browserName === 'chromium') {
    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText()
    )
    expect(clipboardText).toBe(email)
  } else {
    const copiedText = await page.evaluate(() => window.__copiedEmail)
    expect(copiedText).toBe(email)
  }
})

test('visitors receive guidance when copying fails', async ({ page }) => {
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

  const contact = getContact(page)
  const copyButton = contact.getByRole('button', {
    name: 'Copy email address',
    exact: true,
  })

  await copyButton.click()

  await expect(contact.getByRole('status')).toHaveText(
    'Could not copy. Please select and copy the email address above.'
  )
  await expect(
    contact.getByRole('link', { name: email, exact: true })
  ).toBeVisible()
  await expect(copyButton).toHaveText('Copy email')
  await expect(copyButton).toBeEnabled()
})