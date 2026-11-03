import { test, expect } from '@playwright/test'

const projectTitles = [
  'Healthcare Booking System',
  'IP Address Tracker',
  'Pompey Furniture Company',
  'React Developer Portfolio',
  'Hampshire Festival App',
]

async function expectProject(page, title) {
  await expect(
    page.getByRole('heading', { name: title, exact: true })
  ).toBeVisible()
}

test('visitors can select Pompey and open its case study', async ({
  page,
}) => {
  await page.goto('/')

  const selector = page.getByRole('group', {
    name: 'Choose a project',
  })
  const pompeyButton = selector.getByRole('button', {
    name: /Pompey Furniture Company/i,
  })

  await pompeyButton.click()
  await expect(pompeyButton).toHaveAttribute('aria-pressed', 'true')
  await expectProject(page, 'Pompey Furniture Company')

  const caseStudyLink = page.getByRole('link', {
    name: 'View case study',
    exact: true,
  })

  await expect(caseStudyLink).toHaveAttribute(
    'href',
    '/projects/furniture-retail-management-system'
  )
  await caseStudyLink.click()

  await expect(page).toHaveURL(
    /\/projects\/furniture-retail-management-system\/?$/
  )
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('visitors can move between projects using next and previous', async ({
  page,
}) => {
  await page.goto('/')

  const nextButton = page.getByRole('button', {
    name: 'Next project',
    exact: true,
  })
  const previousButton = page.getByRole('button', {
    name: 'Previous project',
    exact: true,
  })

  await expectProject(page, projectTitles[0])

  // Visit every project and wrap back to the first.
  for (const title of [...projectTitles.slice(1), projectTitles[0]]) {
    await nextButton.click()
    await expectProject(page, title)
  }

  // Wrap to the last, then return through every project.
  for (const title of [...projectTitles].reverse()) {
    await previousButton.click()
    await expectProject(page, title)
  }
})

test('visitors can cycle through all projects using arrow keys', async ({
  page,
}) => {
  await page.goto('/')

  const nextButton = page.getByRole('button', {
    name: 'Next project',
    exact: true,
  })

  await nextButton.focus()
  await expect(nextButton).toBeFocused()
  await expectProject(page, projectTitles[0])

  for (const title of [...projectTitles.slice(1), projectTitles[0]]) {
    await page.keyboard.press('ArrowRight')
    await expectProject(page, title)
  }

  for (const title of [...projectTitles].reverse()) {
    await page.keyboard.press('ArrowLeft')
    await expectProject(page, title)
  }
})