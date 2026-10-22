import { test, expect } from '@playwright/test'

test.use({
  viewport: { width: 390, height: 844 },
})

const sections = [
  {
    id: 'home',
    label: 'Home',
    heading: 'Trang',
    level: 1,
  },
  {
    id: 'about',
    label: 'About',
    heading: 'A little more about me.',
    level: 2,
  },
  {
    id: 'projects',
    label: 'Projects',
    heading: 'From ideas to interfaces.',
    level: 2,
  },
  {
    id: 'skills',
    label: 'Skills',
    heading: 'Technologies and tools I work with.',
    level: 2,
  },
  {
    id: 'experience',
    label: 'Experience',
    heading: 'Experience I bring to my work.',
    level: 2,
  },
  {
    id: 'contact',
    label: 'Contact',
    heading: "Let's build something great together.",
    level: 2,
  },
]

for (const section of sections) {
  test(`narrow-screen navigation opens ${section.label}`, async ({
    page,
  }) => {
    await page.goto('/')

    const navbar = page.getByRole('navigation', {
      name: 'Main navigation',
      exact: true,
    })

    // Start away from Home so its test checks a real return journey.
    if (section.id === 'home') {
      const contactLink = navbar.getByRole('link', {
        name: 'Contact',
        exact: true,
      })

      await contactLink.click()

      await expect(contactLink).toHaveAttribute(
        'aria-current',
        'location'
      )
    }

    const link = navbar.getByRole('link', {
      name: section.label,
      exact: true,
    })

    // Check the destination configured on the link.
    await expect(link).toHaveAttribute('href', `#${section.id}`)

    await link.click()

    // Check navigation and the target heading.
    await expect(page).toHaveURL(
      new RegExp(`#${section.id}$`)
    )

    const heading = page
      .locator(`#${section.id}`)
      .getByRole('heading', {
        name: section.heading,
        level: section.level,
        exact: true,
      })

    await expect(heading).toBeInViewport({ ratio: 0.5 })

    // Check the navbar's active state.
    await expect(link).toHaveAttribute(
      'aria-current',
      'location'
    )
  })
}