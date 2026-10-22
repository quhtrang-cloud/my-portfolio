import { test, expect } from '@playwright/test'

test('visitors can select Pompey and open its case study', async ({
  page,
}) => {
  // Open the home page.
  await page.goto('/')

  // Select Pompey using the project selector.
  const projectSelector = page.getByRole('group', {
    name: 'Choose a project',
  })

  const pompeyButton = projectSelector.getByRole('button', {
    name: /Pompey Furniture Company/i,
  })

  await pompeyButton.click()

  // Check that the selected project is shown.
  await expect(pompeyButton).toHaveAttribute('aria-pressed', 'true')

  await expect(
    page.getByRole('heading', {
      name: 'Pompey Furniture Company',
      exact: true,
    })
  ).toBeVisible()

  // Check the destination before following the link.
  const caseStudyLink = page.getByRole('link', {
    name: 'View case study',
    exact: true,
  })

  await expect(caseStudyLink).toHaveAttribute(
    'href',
    '/projects/furniture-retail-management-system'
  )

  await caseStudyLink.click()

  // Check that the case study page opens.
  await expect(page).toHaveURL(
    /\/projects\/furniture-retail-management-system\/?$/
  )

  await expect(
    page.getByRole('heading', { level: 1 })
  ).toBeVisible()
})

test('visitors can move between projects using next and previous', async ({
  page,
}) => {
  await page.goto('/')

  // The gallery starts with Healthcare.
  await expect(
    page.getByRole('heading', {
      name: 'Healthcare Booking System',
      exact: true,
    })
  ).toBeVisible()

  // Next moves to Pompey.
  await page.getByRole('button', {
    name: 'Next project',
    exact: true,
  }).click()

  await expect(
    page.getByRole('heading', {
      name: 'Pompey Furniture Company',
      exact: true,
    })
  ).toBeVisible()

  // Previous returns to Healthcare.
  await page.getByRole('button', {
    name: 'Previous project',
    exact: true,
  }).click()

  await expect(
    page.getByRole('heading', {
      name: 'Healthcare Booking System',
      exact: true,
    })
  ).toBeVisible()
})

test('visitors can cycle through all projects using arrow keys', async ({
  page,
}) => {
  await page.goto('/')

  const projectTitles = [
    'Healthcare Booking System',
    'Pompey Furniture Company',
    'React Developer Portfolio',
    'Hampshire Festival App',
  ]

  const expectProject = async (title) => {
    await expect(
      page.getByRole('heading', {
        name: title,
        exact: true,
      })
    ).toBeVisible()
  }

  const nextButton = page.getByRole('button', {
    name: 'Next project',
    exact: true,
  })

  await nextButton.focus()
  await expect(nextButton).toBeFocused()

  await expectProject(projectTitles[0])

  // Move forward through every project, then return to the first.
  for (const title of [
    ...projectTitles.slice(1),
    projectTitles[0],
  ]) {
    await page.keyboard.press('ArrowRight')
    await expectProject(title)
  }

  // Move backward from the first to the last, then through all projects.
  for (const title of [...projectTitles].reverse()) {
    await page.keyboard.press('ArrowLeft')
    await expectProject(title)
  }
})