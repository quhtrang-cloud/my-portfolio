# Quynh Trang Nguyen - Web Developer Portfolio

A personal portfolio built with React and Vite to showcase selected projects across web development and UX/UI design.

The portfolio combines concise project summaries with detailed project pages covering context, individual contribution, design decisions, technical implementation, evaluation, limitations and reflection.

## Live Portfolio

[View the live portfolio](https://my-portfolio-ivory-ten-46.vercel.app/)

## Portfolio Highlights

- Reusable React components for shared navigation and project presentation.
- Dedicated project pages with detailed design and implementation documentation.
- Responsive layouts for desktop, tablet and mobile.
- Semantic markup and accessibility-aware navigation.
- Image previews with zoom and Escape-key dismissal.
- Client-side routing with React Router.
- Automated deployment through Vercel.

## Built With

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router
- React Icons
- Git and GitHub
- Vercel

## Selected Projects

### Healthcare Booking System

An individual full-stack prototype designed to improve appointment discovery, scheduling flexibility and accessibility within a simulated healthcare-booking environment.

Key features include:

- City-wide appointment discovery.
- Rule-based intelligent scheduling and personalised recommendations.
- Controlled appointment swapping with administrator review.
- Appointment-conflict detection and Google Calendar synchronisation.
- Email notifications and lightweight chatbot guidance.
- Role-based access control.
- Responsive interfaces informed by accessibility requirements.

**Technologies:** Node.js · Express.js · PostgreSQL · JavaScript · EJS · Bootstrap · Google Calendar API · Brevo

The project page follows the work from problem analysis and requirements through interface design, implementation, testing, limitations and reflection.

### Pompey Furniture Company

A database-driven full-stack prototype developed as a team project to support the operations of a fictional multi-showroom furniture retailer.

The system covers:

- Product and stock management across multiple showrooms.
- Customer accounts, orders and order items.
- Returns and delivery information.
- Customer loyalty and coupon management.
- Employee, manager and payroll operations.
- Role-based customer, staff and administrative interfaces.
- Test-mode Stripe Checkout using server-verified product data.

**Technologies:** Node.js · Express.js · PostgreSQL · SQL · JavaScript · HTML5 · CSS3 · Stripe Checkout

My primary responsibilities focused on project coordination, database design, SQL development and system integration. Following the team delivery, I independently strengthened password storage, session-based authentication, server-side authorisation, record-ownership checks, environment configuration and Stripe Checkout data validation.

The project page presents requirements and planning, information architecture, low-fidelity wireframing, relational database design, business-focused SQL queries, browser–server–database integration, HTML and CSS standards validation, and technical reflection.

### Hampshire Festival App

A UX/UI team project focused on festival discovery, personal planning and event management across four user groups: visitors, event staff, exhibitors and administrators.

The design process includes:

- User and role analysis.
- Primary personas.
- Hierarchical Task Analysis (HTA).
- Use-case modelling.
- Low-fidelity prototyping.
- High-fidelity interface design.
- Heuristic evaluation and design iteration.

**Tools and methods:** Figma · Miro · draw.io · Personas · Task modelling · Use cases · Low- and high-fidelity prototyping · Heuristic evaluation

I contributed to user analysis, personas, use-case modelling, Hierarchical Task Analysis, low-fidelity design and heuristic evaluation. I independently designed the high-fidelity prototype in Figma, translating the team's research into coherent screen sequences and clearly defined task flows.

The outcome is a high-fidelity design prototype rather than a production application. It was reviewed through heuristic evaluation but was not tested with participants.

## Project Structure

```text
.
├── public/
│   ├── icons.svg
│   ├── Quynh-Trang-Nguyen-CV.pdf
│   └── robots.txt
├── src/
│   ├── assets/        # Images and project assets
│   ├── components/    # Reusable portfolio components
│   ├── pages/         # Individual project pages
│   ├── App.css        # Main portfolio styles
│   ├── App.jsx        # Application routes and layout
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/quhtrang-cloud/my-portfolio.git
```

Open the project directory:

```bash
cd my-portfolio
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

## Production Build

Create an optimised production build:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## Deployment

The portfolio is deployed with Vercel and connected to the GitHub repository for automatic deployment from the `main` branch.

## Author

**Quynh Trang Nguyen**

- [Portfolio](https://my-portfolio-ivory-ten-46.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/quynh-trang-nguyen-21a559334/)
