
import { test, expect } from '@playwright/test'

const projectTitles = [
  'Healthcare Booking System',
  'Rowmora',
  'IP Address Tracker',
  'Pompey Furniture Company',
  'React Developer Portfolio',
  'Hampshire Festival App',
]

const projectSelector = (page) =>
  page.getByRole('group', { name: 'Choose a project' })

const nextProject = (page) =>
  page.getByRole('button', { name: /^Next project:/ })

const previousProject = (page) =>
  page.getByRole('button', { name: /^Previous project:/ })

async function expectProject(page, title) {
  await expect(
    page.getByRole('heading', { name: title, exact: true })
  ).toBeVisible()
}

test('visitors can select Pompey and open its case study', async ({
  page,
}) => {
  await page.goto('/')

  const pompeyButton = projectSelector(page).getByRole('button', {
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

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toBeVisible()
})

test('next and previous navigation follows project order and wraps', async ({
  page,
}) => {
  await page.goto('/')

  await expectProject(page, projectTitles[0])

  for (const title of [...projectTitles.slice(1), projectTitles[0]]) {
    await nextProject(page).click()
    await expectProject(page, title)
  }

  for (const title of [...projectTitles].reverse()) {
    await previousProject(page).click()
    await expectProject(page, title)
  }
})

test('featured previews select the correct projects', async ({
  page,
}) => {
  await page.goto('/')

  await expectProject(page, 'Healthcare Booking System')

  const rowmoraPreview = page.getByRole('button', {
    name: /Show project 02: Rowmora/i,
  })

  const ipTrackerPreview = page.getByRole('button', {
    name: /Show project 03: IP Address Tracker/i,
  })

  await expect(rowmoraPreview).toBeVisible()
  await expect(ipTrackerPreview).toBeVisible()

  await rowmoraPreview.click()
  await expectProject(page, 'Rowmora')

  await projectSelector(page).getByRole('button', {
    name: /Healthcare Booking System/i,
  }).click()

  await ipTrackerPreview.click()
  await expectProject(page, 'IP Address Tracker')
})

test('previous from Healthcare wraps to Hampshire', async ({
  page,
}) => {
  await page.goto('/')

  await expectProject(page, 'Healthcare Booking System')

  await previousProject(page).click()

  await expectProject(page, 'Hampshire Festival App')
})

test('keyboard users can operate carousel navigation', async ({
  page,
}) => {
  await page.goto('/')

  const next = nextProject(page)
  const previous = previousProject(page)

  await next.focus()
  await expect(next).toBeFocused()

  await page.keyboard.press('Enter')
  await expectProject(page, 'Rowmora')

  await previous.focus()
  await page.keyboard.press('Space')
  await expectProject(page, 'Healthcare Booking System')

  await previous.focus()
  await page.keyboard.press('Enter')
  await expectProject(page, 'Hampshire Festival App')
})

test('Rowmora provides a live demo and source link', async ({
  page,
}) => {
  await page.goto('/')

  await projectSelector(page).getByRole('button', {
    name: /Rowmora/i,
  }).click()

  await expectProject(page, 'Rowmora')

  await expect(
    page.getByRole('link', {
      name: /Open Rowmora live demo/i,
    })
  ).toHaveAttribute(
    'href',
    'https://rowmora-csv-compare.vercel.app/'
  )

  await expect(
    page.getByRole('link', {
      name: /View Rowmora source on GitHub/i,
    })
  ).toHaveAttribute(
    'href',
    'https://github.com/quhtrang-cloud/rowmora-data-reconciliation'
  )
})
