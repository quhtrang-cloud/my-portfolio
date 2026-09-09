# Quynh Trang Nguyen - Web Developer Portfolio

A personal portfolio built with React and Vite to present selected full-stack web development and UX/UI projects.

The portfolio combines concise project summaries with detailed case studies covering design decisions, technical implementation, testing and reflection.

## Live Portfolio

[View the live portfolio](https://my-portfolio-ivory-ten-46.vercel.app)

## Portfolio Highlights

- Reusable React component architecture
- Dedicated case-study pages for three selected projects
- Responsive layouts for desktop, tablet and mobile
- Semantic markup and accessibility-aware navigation
- Interactive image previews with zoom functionality
- Client-side routing with React Router
- Automated deployment with Vercel

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

A full-stack healthcare booking system designed to improve appointment discovery, scheduling flexibility and accessibility.

Key features include:

- City-wide appointment discovery
- Rule-based intelligent scheduling and personalised recommendations
- Patient-to-patient appointment swapping
- Appointment conflict detection and Google Calendar synchronisation
- Email notifications
- Role-based access control
- Responsive, accessibility-focused interfaces

**Technologies:** Node.js · Express.js · PostgreSQL · JavaScript · EJS · Bootstrap · Google Calendar API · Brevo

The case study covers the project from problem analysis and requirements through interface design, implementation, testing and reflection.

### Pompey Furniture Company

A database-driven full-stack web application developed as a team project to support multi-showroom furniture retail operations.

The system covers:

- Product and stock management across multiple showrooms
- Customer orders and order items
- Returns and delivery information
- Customer loyalty and coupon management
- Employee, manager and payroll operations
- Role-based customer, staff and administrative interfaces

**Technologies:** Node.js · Express.js · PostgreSQL · SQL · JavaScript · HTML5 · CSS3

The case study presents requirements and planning, information architecture, low-fidelity wireframing, relational database design, SQL queries, interface development and system evaluation.

### Hampshire Festival App

A UX/UI team project focused on supporting festival discovery, personal planning and event management across four user groups: visitors, event staff, exhibitors and administrators.

The design process includes:

- User and role analysis
- Primary personas
- Hierarchical Task Analysis (HTA)
- Use-case modelling
- Low-fidelity prototyping
- High-fidelity interface design
- Heuristic evaluation and design iteration

**Tools and methods:** Figma · Personas · Task modelling · Use cases · Low-fidelity prototyping · High-fidelity prototyping · Heuristic evaluation

The case study documents how role-based workflows were translated into a consistent mobile interface. Screen sequences illustrate the intended journeys from festival discovery and planning to event management.

## Project Structure

```text
src/
├── assets/        # Images and project assets
├── components/    # Reusable portfolio components
├── pages/         # Individual project case studies
├── App.jsx        # Application routes and layout
├── App.css        # Main portfolio styles
├── index.css      # Global styles
└── main.jsx       # Application entry point
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
MSc Information Systems - University of Portsmouth
