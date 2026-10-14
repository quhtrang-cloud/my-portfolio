# Quynh Trang Nguyen - Web Developer Portfolio

A personal portfolio built with React and Vite to present my web development, software testing and UX/UI project work.

Explore project previews, detailed case studies and the experience behind my work.

[View portfolio](https://my-portfolio-ivory-ten-46.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/quynh-trang-nguyen-21a559334/)

## Portfolio features

- **Interactive project gallery:** layered previews, previous/next controls and a project selector alongside the active summary. Gallery controls support keyboard navigation.
- **Project case studies:** dedicated pages covering context, individual contributions, design decisions, implementation, evaluation and reflection, with section navigation and scroll-based active states.
- **Responsive themes:** layouts for desktop, tablet and mobile, with light and dark modes.
- **Accessibility-aware interactions:** semantic markup, visible focus states, descriptive controls and reduced-motion support.
- **Skills in context:** grouped skills with information controls explaining how I have applied them. Context panels support hover, keyboard focus and touch, with Escape-key and outside-click dismissal.
- **Image exploration:** enlarged case-study images with zoom and Escape-key dismissal.
- **Professional background:** experience, education and certifications, with links to available online certificates.
- **Contact options:** email, LinkedIn and GitHub, plus an email-copy control with success and failure feedback.
- **Maintainable styling:** shared CSS colour variables named by purpose, reusable components and incremental TypeScript adoption.

Accessibility practices are part of the implementation; full WCAG conformance has not been established.

## Technology stack

| Area | Technologies |
| --- | --- |
| Interface | React, JavaScript (ES6+), TypeScript, HTML5, CSS3 |
| Routing and icons | React Router, React Icons |
| Development | Vite, npm, ESLint, Git and GitHub |
| Hosting | Vercel |

TypeScript is adopted incrementally. `Skills.tsx` types skill data and information-control interactions. `ProjectSectionNav.tsx` types navigation props, DOM refs and events. Other components currently use JavaScript.

## Projects showcased

These summaries describe the projects presented on the site. Their backend technologies and testing tools are not dependencies of this React portfolio.

### Healthcare Booking System

**Individual MSc dissertation project · Full-stack prototype**

An academic prototype exploring more flexible GP appointment discovery and booking using simulated data. Features include city-wide appointment search, rule-based scheduling suggestions, administrator-approved appointment swaps, conflict detection, Google Calendar synchronisation, email notifications and role-based access controls.

**My contribution:** requirements research, user journeys, interface design, application and database development, and testing.

**Technologies:** JavaScript, Node.js, Express.js, PostgreSQL, EJS, Bootstrap, Google Calendar API, OAuth 2.0, Nodemailer and Brevo SMTP. Automated tests use Jest and Supertest.

**Evaluation:** requirements-based manual checks and local Lighthouse audits, supplemented by 27 automated tests across four suites. Tests cover authentication middleware, scheduling rules and selected booking, swap and administrative routes. Regression checks address a bug where the string `"false"` incorrectly triggered an urgent scheduling result.

Database queries and external services are mocked in the automated tests; live integrations are not tested end to end. This is a prototype, not a deployed clinical service.

[Read the healthcare case study](https://my-portfolio-ivory-ten-46.vercel.app/projects/healthcare-booking-system)

### Pompey Furniture Company

**Team project · Full-stack retail prototype**

A database-driven application for a fictional multi-showroom furniture retailer. It supports stock, customer orders, returns, delivery information, loyalty and coupons, employee operations and role-based workflows.

**My contribution:** project coordination, relational database design, SQL reporting and application integration. After team delivery, I independently improved password storage, session authentication, server-side authorisation, record-ownership checks, environment configuration and Stripe Checkout data validation.

**Technologies:** Node.js, Express.js, PostgreSQL, SQL, JavaScript, HTML5, CSS3 and Stripe Checkout.

**Evaluation:** SQL query checks and HTML/CSS standards validation are documented in the case study. Payments use Stripe test mode.

[Read the furniture case study](https://my-portfolio-ivory-ten-46.vercel.app/projects/furniture-retail-management-system)

### Hampshire Festival App

**Team project · UX/UI design prototype**

Explores festival discovery, personal planning and event management for visitors, event staff, exhibitors and administrators.

**My contribution:** user analysis, personas, use cases, Hierarchical Task Analysis, low-fidelity design and heuristic evaluation. I independently created the high-fidelity Figma prototype from the team's research and proposed task flows.

**Tools and methods:** Figma, Miro, draw.io, personas, task modelling, use cases, prototyping and heuristic evaluation.

**Evaluation:** reviewed using usability heuristics. The outcome is a design prototype; evaluation did not include participant testing.

[Read the festival case study](https://my-portfolio-ivory-ten-46.vercel.app/projects/hampshire-festival-app)

## Repository structure

| Path | Purpose |
| --- | --- |
| `public/` | Public assets, downloadable CV, favicon and `robots.txt` |
| `src/assets/` | Portraits, project screenshots and imported images |
| `src/components/` | Home sections and shared navigation, theme, motion and interaction components |
| `src/pages/` | Healthcare, furniture and festival case-study pages |
| `src/App.jsx` | Application routes and home layout |
| `src/App.css` | Shared colour variables, portfolio and case-study styles |
| `src/index.css` | Global base styles |
| `src/main.jsx` | Application entry point |
| `tsconfig.json` | TypeScript configuration for gradual migration |
| `eslint.config.js` | ESLint configuration |
| `vite.config.js` | Vite configuration |
| `vercel.json` | Deployment configuration |

Dependencies and npm scripts are defined in `package.json`, with versions locked in `package-lock.json`. The production build generates `dist/`; dependency installation generates `node_modules/`.

## Run locally

Install Node.js and npm, then run:

```bash
git clone https://github.com/quhtrang-cloud/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Checks and production build

```bash
npm run typecheck
npm run build
npm run preview
```

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | Runs `tsc --noEmit` without generating JavaScript output |
| `npm run build` | Runs the configured type checks and creates an optimised build in `dist/` |
| `npm run preview` | Serves the production build locally for review |

JavaScript files are not type-checked while `checkJs` is disabled. Type checks do not replace functional, interaction or cross-browser testing. The Jest/Supertest tests described above belong to the healthcare application, not this portfolio repository.

## Deployment

The portfolio is hosted on Vercel, with automatic deployment from the connected GitHub repository's `main` branch. React Router provides the home and case-study routes.

## Author

**Quynh Trang Nguyen**

[Portfolio](https://my-portfolio-ivory-ten-46.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/quynh-trang-nguyen-21a559334/)
