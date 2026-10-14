# Quynh Trang Nguyen - Web Developer Portfolio

A personal portfolio built with React and Vite, showcasing web development, software testing and UX/UI project work.

The site pairs concise project summaries with detailed case studies covering the problem, my contribution, design decisions, implementation, testing and lessons learned.

[View portfolio](https://my-portfolio-ivory-ten-46.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/quynh-trang-nguyen-21a559334/)

## Portfolio features

- **Project gallery:** interactive previews, previous/next controls, direct project selection and keyboard navigation.
- **Detailed case studies:** dedicated project routes with section navigation and scroll-based active states.
- **Responsive presentation:** layouts for desktop, tablet and mobile, with light and dark themes.
- **Accessibility-aware interactions:** semantic markup, visible keyboard focus, descriptive controls and reduced-motion support.
- **Image previews:** enlarged images with zoom and Escape-key dismissal.
- **Professional background:** experience, education and certification cards with links to available certificates.
- **Contact options:** email, LinkedIn and GitHub, plus a copy-email control with success and failure feedback.
- **Maintainable implementation:** reusable React components, client-side routing and gradual adoption of TypeScript.

The interface includes subtle motion effects. Accessibility features are part of the implementation; they do not constitute a claim of full WCAG conformance.

## Technology stack

| Area | Technologies |
| --- | --- |
| Interface | React, JavaScript (ES6+), TypeScript, HTML5, CSS3 |
| Routing and icons | React Router, React Icons |
| Development | Vite, npm, ESLint, Git and GitHub |
| Hosting | Vercel |

TypeScript is adopted incrementally. `Skills.tsx` types the skill data, and `ProjectSectionNav.tsx` types navigation props, DOM refs and events. Other components currently use JavaScript.

## Featured projects

The technologies below describe the applications showcased in the portfolio, rather than dependencies of this React site.

### Healthcare Booking System

**Individual MSc dissertation project · Full-stack prototype**

Explores more flexible GP appointment discovery and booking using simulated data. Features include city-wide appointment search, rule-based scheduling recommendations, administrator-approved appointment swaps, conflict detection, Google Calendar synchronisation, email notifications and role-based access controls.

**My contribution:** requirements research, user journeys, interface design, application and database development, and testing.

**Stack:** JavaScript, Node.js, Express.js, PostgreSQL, EJS, Bootstrap, Google Calendar API, OAuth 2.0, Nodemailer and Brevo SMTP. Automated tests use Jest and Supertest.

**Testing:** requirements-based manual checks and local Lighthouse audits, supplemented by 27 automated tests across four suites. These cover authentication middleware, scheduling rules and selected booking, swap and administrative routes. Regression tests check a bug where the string `"false"` incorrectly triggered an urgent scheduling result, including boolean/string inputs and rule precedence.

Database queries and external services are mocked in the automated tests. These tests isolate application behaviour and do not validate live integrations end to end. The application is an academic prototype, not a deployed clinical service.

[Read the healthcare case study](https://my-portfolio-ivory-ten-46.vercel.app/projects/healthcare-booking-system)

### Pompey Furniture Company

**Team project · Full-stack retail prototype**

A database-driven application for a fictional multi-showroom furniture retailer, covering stock, customer orders, returns, loyalty and coupons, employee operations, and role-based customer, staff and administrative workflows.

**My contribution:** project coordination, relational database design, SQL reporting and application integration. After team delivery, I independently improved password storage, session authentication, server-side authorisation, record-ownership checks, environment configuration and test-mode Stripe Checkout data validation.

**Stack:** Node.js, Express.js, PostgreSQL, SQL, JavaScript, HTML5, CSS3 and Stripe Checkout.

The case study includes planning, information architecture, wireframes, database design, business reporting queries, application integration and HTML/CSS standards validation. Payments use Stripe test mode.

[Read the furniture case study](https://my-portfolio-ivory-ten-46.vercel.app/projects/furniture-retail-management-system)

### Hampshire Festival App

**Team project · UX/UI design prototype**

Explores festival discovery, personal planning and event management for visitors, event staff, exhibitors and administrators.

**My contribution:** user analysis, personas, use cases, Hierarchical Task Analysis, low-fidelity design and heuristic evaluation. I independently created the high-fidelity Figma prototype from the team's research and proposed task flows.

**Tools and methods:** Figma, Miro, draw.io, personas, task modelling, use cases, prototyping and heuristic evaluation.

The outcome is a design prototype rather than a production application. Evaluation used usability heuristics; it did not include participant testing.

[Read the festival case study](https://my-portfolio-ivory-ten-46.vercel.app/projects/hampshire-festival-app)

## Repository structure

| Path | Purpose |
| --- | --- |
| `public/` | Public assets, downloadable CV, favicon and `robots.txt` |
| `src/assets/` | Portraits, project screenshots and other imported images |
| `src/components/` | Home sections and shared navigation, theme, motion and interaction components |
| `src/pages/` | Healthcare, furniture and festival case-study pages |
| `src/App.jsx` | Application routes and home layout |
| `src/App.css` | Portfolio and case-study styles |
| `src/index.css` | Global base styles |
| `src/main.jsx` | Application entry point |
| `package.json`, `package-lock.json` | Dependencies, npm scripts and dependency lockfile |
| `tsconfig.json` | TypeScript configuration for gradual migration |
| `eslint.config.js` | ESLint configuration |
| `vite.config.js` | Vite configuration |
| `vercel.json` | Deployment configuration |
| `index.html` | HTML entry point |

`dist/` is generated by the production build. `node_modules/` is generated when dependencies are installed.

## Run locally

Install Node.js and npm before running the following commands:

```bash
git clone https://github.com/quhtrang-cloud/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Type checking and production build

```bash
npm run typecheck
npm run build
npm run preview
```

- `typecheck` runs `tsc --noEmit` without generating JavaScript output.
- `build` runs the configured type checks and creates an optimised build in `dist/`.
- `preview` serves the production build locally for review.

JavaScript files are not type-checked while `checkJs` is disabled. Type checking does not replace functional, interaction or cross-browser testing. The Jest/Supertest tests described above belong to the healthcare application, not this portfolio repository.

## Deployment

The portfolio is hosted on Vercel, with automatic deployment from the connected GitHub repository's `main` branch. React Router handles the portfolio and case-study routes.

## Author

**Quynh Trang Nguyen**

[Portfolio](https://my-portfolio-ivory-ten-46.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/quynh-trang-nguyen-21a559334/)
