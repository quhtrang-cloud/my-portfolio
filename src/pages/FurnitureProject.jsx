import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaMagnifyingGlassPlus,
  FaXmark,
} from 'react-icons/fa6'

import furnitureHomepage from '../assets/projects/furniture-homepage.png'
import furnitureProducts from '../assets/projects/furniture-products.png'
import furnitureEerd from '../assets/projects/furniture-eerd.png'
import furnitureSiteArchitecture from '../assets/projects/furniture-site-architecture.png'
import furnitureWireframeHome from '../assets/projects/furniture-wireframe-home.png'
import furnitureAdminDashboard from '../assets/projects/furniture-admin-dashboard.png'
import ProjectSectionNav from '../components/ProjectSectionNav'
import BackToTop from '../components/BackToTop'


function FurnitureProject() {
  const [zoomedImage, setZoomedImage] = useState(null)

  const sectionNavItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'contribution', label: 'My Role' },
    { id: 'planning', label: 'System Planning' },
    { id: 'database', label: 'Database Design' },
    { id: 'sql', label: 'SQL Queries' },
    { id: 'application', label: 'Web Application' },
    { id: 'outcome', label: 'Outcome' },
  ]


  const sqlQueries = [
    {
      title: 'Monthly pickup revenue by showroom',
      description:
        'Aggregates order-item values for showroom pickup orders by location and month to support revenue comparison.',
      techniques: 'JOIN · SUM · GROUP BY · DATE_TRUNC',
      code: `SELECT
  s.name AS showroom_name,
  DATE_TRUNC('month', o.order_date) AS month,
  SUM(oi.unit_price * oi.quantity) AS monthly_income
FROM "order" AS o
JOIN order_item AS oi
  ON o.order_id = oi.order_id
JOIN delivery_info AS d
  ON d.order_id = o.order_id
JOIN showroom AS s
  ON s.showroom_id = d.showroom_id
WHERE d.delivery_type = 'pickup'
GROUP BY
  s.showroom_id,
  s.name,
  DATE_TRUNC('month', o.order_date)
ORDER BY
  s.name,
  month;`,
    },
    {
      title: 'Recent customer returns',
      description:
        'Connects customers, orders and return records to identify return activity within the previous 28 days.',
      techniques: 'JOIN · INTERVAL · FILTERING · ORDER BY',
      code: `SELECT
  c.name,
  r.return_date,
  r.reason,
  o.order_id
FROM customer c
JOIN "order" o
  ON o.customer_id = c.customer_id
JOIN return_record r
  ON r.order_id = o.order_id
WHERE r.return_date >=
  CURRENT_DATE - INTERVAL '28 days'
ORDER BY r.return_date DESC;`,
    },
  ]



  const openImage = (src, alt) => {
    setZoomedImage({ src, alt })
  }


  const closeImage = () => {
    setZoomedImage(null)
  }


  useEffect(() => {
    if (!zoomedImage) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeImage()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [zoomedImage])


  return (
    <main className="project-page">

      {/* ===================================
          HERO
      =================================== */}

      <section className="case-hero section-container">

        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="case-back-link"
        >
          <FaArrowLeft aria-hidden="true" />
          Back to projects
        </Link>


        <div className="case-hero-header">

          <p className="case-eyebrow">
            02 / FULL-STACK DEVELOPMENT
          </p>

          <h1>
            Pompey Furniture Company
          </h1>

          <p className="case-tagline">
            Building a full-stack retail prototype for
            multi-showroom operations.
          </p>

          <p className="case-intro">
            A database-driven web application connecting
            customer-facing services with inventory, order
            and staff management.
          </p>


          <a
            href="https://github.com/quhtrang-cloud/furniture-retail-management-system"
            className="case-github-link"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub

            <FaArrowUpRightFromSquare
              aria-hidden="true"
            />
          </a>

        </div>


        {/* PROJECT META */}

        <div className="case-meta">

          <div>
            <span>Role</span>

            <p>
              Project Manager · Database & System Development
            </p>
          </div>


          <div>
            <span>Project type</span>

            <p>
              Team Project
            </p>
          </div>


          <div>
            <span>Year</span>

            <p>
              2025
            </p>
          </div>


          <div>
            <span>Duration</span>

            <p>
              3 months
            </p>
          </div>


          <div className="case-meta-stack">

            <span>Tech stack</span>

            <p>
              Node.js · Express.js · PostgreSQL · SQL ·
              JavaScript · HTML5 · CSS3
            </p>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="case-hero-image">

          <button
            type="button"
            className="solution-image-button"
            onClick={() =>
              openImage(
                furnitureHomepage,
                'Pompey Furniture Company homepage with customer support chatbot'
              )
            }
            aria-label="View Pompey Furniture Company homepage"
          >
            <img
              src={furnitureHomepage}
              alt="Pompey Furniture Company homepage with customer support chatbot"
            />

            <span className="solution-image-zoom">
              <FaMagnifyingGlassPlus aria-hidden="true" />
            </span>
          </button>

        </div>

      </section>

      <ProjectSectionNav items={sectionNavItems} />


      {/* ===================================
          OVERVIEW
      =================================== */}

      <section id="overview" className="case-overview section-container">

        <div className="case-overview-layout">

          <div className="case-overview-heading">

            <p className="case-section-label">
              Overview
            </p>

            <h2>
              Supporting retail operations across multiple
              showrooms.
            </h2>

          </div>


          <div className="case-overview-content">

            <p className="case-overview-lead">
              Pompey Furniture Company was designed for a simulated
              multi-showroom retailer requiring consistent data across
              product discovery, inventory and after-sales services.
            </p>

            <p>
              The prototype supports public, customer, staff and
              administrative tasks through a shared relational model
              and role-specific workflows.
            </p>

          </div>

        </div>


        <div className="case-highlights">

          <article className="case-highlight">

            <span>01</span>

            <h3>
              Multi-showroom inventory
            </h3>

            <p>
              Track product availability and stock quantities
              independently across showroom locations.
            </p>

          </article>


          <article className="case-highlight">

            <span>02</span>

            <h3>
              Connected operations
            </h3>

            <p>
              Connect customer purchases with delivery,
              returns and loyalty workflows within the same
              system.
            </p>

          </article>


          <article className="case-highlight">

            <span>03</span>

            <h3>
              Business reporting
            </h3>

            <p>
              Use SQL queries to turn operational data into
              meaningful information for business
              decision-making.
            </p>

          </article>

        </div>

      </section>


      {/* ===================================
          MY CONTRIBUTION
      =================================== */}

      <section id="contribution" className="case-contribution section-container">

        <div className="contribution-header">

          <div className="contribution-heading">

            <p className="case-section-label">
              My Contribution
            </p>

            <h2>
              From planning to implementation.
            </h2>

          </div>


          <div className="contribution-intro">

            <p className="case-section-lead">
              As Project Manager, I coordinated project planning and
              team delivery while contributing primarily to database
              design, SQL development and system integration.
            </p>

            <p className="case-section-text">
              I also contributed to requirements analysis, information
              architecture and initial wireframes. The final frontend
              implementation was developed collaboratively by the team.
            </p>

          </div>

        </div>


        <div className="contribution-responsibilities">

          <p className="contribution-eyebrow">
            Key responsibilities
          </p>


          <div className="contribution-grid">

            <article className="contribution-card">

              <span className="contribution-number">
                01
              </span>

              <h3>
                Project coordination
              </h3>

              <p>
                Led project planning, task coordination and team delivery.
              </p>

            </article>


            <article className="contribution-card">

              <span className="contribution-number">
                02
              </span>

              <h3>
                System planning
              </h3>

              <p>
                Contributed to competitor research, use cases, information
                architecture, site architecture and wireframes.
              </p>

            </article>


            <article className="contribution-card">

              <span className="contribution-number">
                03
              </span>

              <h3>
                Database development
              </h3>

              <p>
                Designed the EERD, relational schema, PostgreSQL database
                and business-focused SQL queries.
              </p>

            </article>


            <article className="contribution-card">

              <span className="contribution-number">
                04
              </span>

              <h3>
                System integration
              </h3>

              <p>
                Connected browser workflows with Node.js, Express.js and
                PostgreSQL, then strengthened authentication and configuration.
              </p>

            </article>

          </div>

        </div>

      </section>

      {/* ===================================
          PLANNING & DESIGN
      =================================== */}

      <section id="planning" className="case-planning section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              Planning & Design
            </p>

            <h2>
              Structuring the experience before development.
            </h2>

          </div>


          <div className="case-planning-intro">

            <p className="case-section-lead">
              Before implementation, the project explored how
              customers, staff and administrators would navigate
              and interact with the system.
            </p>

            <p className="case-section-text">
              Research and planning translated business requirements
              into user journeys, content structures and role-based
              application flows.
            </p>

          </div>

        </div>


        <div className="planning-process">

          <article className="planning-process-step">
            <span className="planning-process-number">01</span>
            <h3>Comparative research</h3>

            <p>
              Reviewed established furniture retailers to identify
              relevant interaction patterns and opportunities around
              navigation, showroom availability and customer services.
            </p>
          </article>


          <article className="planning-process-step">
            <span className="planning-process-number">02</span>
            <h3>Use case scenarios</h3>

            <p>
              Mapped representative customer and staff journeys to
              connect user goals with functional requirements and
              system interactions.
            </p>
          </article>


          <article className="planning-process-step">
            <span className="planning-process-number">03</span>
            <h3>Information architecture</h3>

            <p>
              Organised public, customer, staff and administrative
              areas around user roles, core tasks and clear
              navigation paths.
            </p>
          </article>


          <article className="planning-process-step">
            <span className="planning-process-number">04</span>
            <h3>Wireframing</h3>

            <p>
              Translated the planned structure and key workflows
              into early interface layouts for customer-facing and
              management experiences.
            </p>
          </article>

        </div>


        <div className="planning-evidence-list">

          <article className="planning-evidence">

            <div className="planning-evidence-visual planning-evidence-architecture">

              <button
                type="button"
                className="solution-image-button"
                onClick={() =>
                  openImage(
                    furnitureSiteArchitecture,
                    'Role-based site architecture for the Pompey Furniture Company website'
                  )
                }
                aria-label="View Pompey Furniture Company site architecture"
              >
                <img
                  src={furnitureSiteArchitecture}
                  alt="Role-based site architecture showing public, customer, admin and staff areas"
                />

                <span className="solution-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>
              </button>

            </div>


            <div className="planning-evidence-copy">

              <span className="planning-evidence-label">
                Information architecture
              </span>

              <h3>
                Role-based structure
              </h3>

              <p>
                The site architecture separates public navigation
                from authenticated customer, staff and administrative
                areas, mapping each role to the functions required for
                its core tasks.
              </p>

            </div>

          </article>


          <article className="planning-evidence">

            <div className="planning-evidence-visual planning-evidence-wireframe">

              <button
                type="button"
                className="solution-image-button"
                onClick={() =>
                  openImage(
                    furnitureWireframeHome,
                    'Homepage wireframe for the Pompey Furniture Company website'
                  )
                }
                aria-label="View homepage wireframe"
              >
                <img
                  src={furnitureWireframeHome}
                  alt="Homepage wireframe for Pompey Furniture Company"
                />

                <span className="solution-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>
              </button>

            </div>


            <div className="planning-evidence-copy">

              <span className="planning-evidence-label">
                Wireframe
              </span>

              <h3>
                Homepage
              </h3>

              <p>
                The homepage wireframe defines the public entry point,
                primary navigation and content hierarchy, including
                featured products, promotional content and customer
                support access.
              </p>

              <p>
                It provided an early reference for translating the
                planned site architecture into the customer-facing
                interface before implementation.
              </p>

            </div>

          </article>

        </div>

      </section>





      {/* ===================================
          DATABASE DESIGN
      =================================== */}

      <section id="database" className="case-solution section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              Database Design
            </p>

            <h2>
              Designing the data behind the system.
            </h2>

          </div>


          <div className="case-solution-intro">

            <p className="case-section-lead">
              PostgreSQL was used to model the relationships
              between products, showrooms, customers, orders,
              returns, loyalty accounts and employees.
            </p>

            <p className="case-section-text">
              The schema was structured to support shared data
              across customer-facing and internal operations while
              maintaining clear relationships between core business
              entities.
            </p>

          </div>

        </div>


        <div className="solution-features">

          <article className="solution-feature">

            <div className="solution-feature-image">

              <button
                type="button"
                className="solution-image-button"
                onClick={() =>
                  openImage(
                    furnitureEerd,
                    'Enhanced Entity-Relationship Diagram for the Pompey Furniture Company system'
                  )
                }
                aria-label="View furniture retail database diagram"
              >
                <img
                  src={furnitureEerd}
                  alt="Enhanced Entity-Relationship Diagram for the Pompey Furniture Company system"
                />

                <span className="solution-image-zoom">
                  <FaMagnifyingGlassPlus aria-hidden="true" />
                </span>
              </button>

            </div>


            <div className="solution-feature-content">

              <h3>
                Structured for multi-showroom operations
              </h3>

              <p>
                The model links products to showroom-specific
                stock availability, orders to customers, items,
                delivery and returns, and employees to showroom,
                management and payroll records.
              </p>
            </div>

          </article>

        </div>

      </section>

      {/* ===================================
          SQL & BUSINESS REPORTING
      =================================== */}

      <section id="sql" className="case-implementation section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">

            <p className="case-section-label">
              SQL & Business Reporting
            </p>

            <h2>
              Turning operational data into business insight.
            </h2>

          </div>
          <div className="case-implementation-intro">

            <p className="case-section-lead">
              Four business queries were developed for revenue,
              inventory, delivery and return analysis.
            </p>

            <div className="sql-query-summary">

              <p>
                <strong>Revenue reporting</strong>
                <span>Monthly revenue from showroom pickup orders.</span>
              </p>

              <p>
                <strong>Inventory search</strong>
                <span>Products by showroom and price range.</span>
              </p>

              <p>
                <strong>Delivery analysis</strong>
                <span>Delivery preferences across home and pickup orders.</span>
              </p>

              <p>
                <strong>Returns monitoring</strong>
                <span>Customers associated with recent returns.</span>
              </p>

            </div>

            <p className="case-section-text">
              The queries combine joins, filtering, aggregation,
              grouping and ordering to retrieve and summarise
              operational information.
            </p>

          </div>

        </div>


        <div className="sql-examples">

          <div className="sql-examples-heading">

            <span>
              Implementation examples
            </span>

            <p>
              Two representative implementations are shown below,
              demonstrating financial and operational reporting across
              the relational model.
            </p>

          </div>


          <div className="sql-query-list">

            {sqlQueries.map((query, index) => (

              <article
                className="sql-query"
                key={query.title}
              >

                <div className="sql-query-copy">

                  <span className="sql-query-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>
                    {query.title}
                  </h3>

                  <p className="sql-query-description">
                    {query.description}
                  </p>

                  <p className="sql-query-techniques">
                    {query.techniques}
                  </p>

                </div>


                <div className="sql-code">

                  <div className="sql-code-header">
                    <span>PostgreSQL</span>
                  </div>

                  <pre>
                    <code>{query.code}</code>
                  </pre>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>





      {/* ===================================
          WEB APPLICATION
      =================================== */}

      <section id="application" className="case-testing section-container">

        <div className="case-section-layout">

          <div className="case-section-heading">
            <p className="case-section-label">Web Application</p>

            <h2>
              Connecting the interface, server and database.
            </h2>
          </div>

          <div className="case-testing-intro">
            <p className="case-section-lead">
              The application uses browser-based interfaces with
              Node.js and Express.js on the server side, connected
              to a PostgreSQL relational database.
            </p>

            <p className="case-section-text">
              Express routes handle client requests, execute
              parameterised SQL queries through the database
              connection, and return the data required by customer,
              staff and administrative interfaces.
            </p>
          </div>

        </div>


        <div className="implementation-foundations web-functionality">

          <div className="implementation-foundations-header">
            <p>Selected functionality</p>
          </div>

          <div className="implementation-foundations-grid">

            <div>
              <span>Product discovery</span>
              <p>
                Browse furniture products and check stock
                availability across showrooms.
              </p>
            </div>

            <div>
              <span>Customer accounts</span>
              <p>
                Register, sign in and access account-specific
                features including orders and returns.
              </p>
            </div>

            <div>
              <span>Orders &amp; returns</span>
              <p>
                View order and delivery details and submit
                eligible return requests.
              </p>
            </div>

            <div>
              <span>Management</span>
              <p>
                Add products, manage inventory, customers, showrooms and
                employee records, and review order information.
              </p>
            </div>

            <div>
              <span>Role-based access</span>
              <p>
                Protect customer, staff and administrator workflows
                through server-side sessions, role checks and record
                ownership validation.
              </p>
            </div>

            <div>
              <span>Stripe Checkout</span>
              <p>
                Start test-mode Checkout sessions using product names
                and prices retrieved from PostgreSQL and verified by
                the server.
              </p>
            </div>

          </div>

        </div>


        <article className="web-application-evidence is-reversed">

          <div className="web-application-visual">
            <button
              type="button"
              className="solution-image-button"
              onClick={() =>
                openImage(
                  furnitureProducts,
                  'Furniture product catalogue with showroom availability and purchasing actions'
                )
              }
              aria-label="View Pompey Furniture Company product catalogue"
            >
              <img
                src={furnitureProducts}
                alt="Furniture product catalogue showing prices, showroom availability, stock quantities and purchasing actions"
              />

              <span className="solution-image-zoom">
                <FaMagnifyingGlassPlus aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="web-application-caption">
            <span className="planning-evidence-label">
              Customer interface
            </span>

            <h3>Product discovery and checkout</h3>

            <p>
              The database-backed catalogue displays product pricing,
              showroom-specific stock and availability, allowing customers
              to review details, add items to their cart and begin a
              test-mode Stripe Checkout session.
            </p>
          </div>

        </article>


        <article className="web-application-evidence">

          <div className="web-application-visual">
            <button
              type="button"
              className="solution-image-button"
              onClick={() =>
                openImage(
                  furnitureAdminDashboard,
                  'Pompey Furniture Company administrative dashboard'
                )
              }
              aria-label="View Pompey Furniture Company administrative dashboard"
            >
              <img
                src={furnitureAdminDashboard}
                alt="Pompey Furniture Company administrative dashboard showing customer, product, order and staff summaries"
              />

              <span className="solution-image-zoom">
                <FaMagnifyingGlassPlus aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="web-application-caption">
            <span className="planning-evidence-label">
              Administrative interface
            </span>

            <h3>Role-based management dashboard</h3>

            <p>
              Database-driven summaries give administrators an
              overview of customers, products, orders and staff,
              alongside quick access to management tasks.
            </p>
          </div>

        </article>


        <div className="standards-validation">

          <div className="standards-validation-heading">
            <span>Standards validation</span>
          </div>

          <div className="standards-validation-content">
            <p>
              HTML and CSS were evaluated using W3C validation tools
              to identify markup and stylesheet issues.
            </p>

            <div className="standards-validation-results">
              <span>HTML · No critical errors</span>
              <span>CSS · No validation errors</span>
            </div>
          </div>

        </div>

      </section>


      {/* ===================================
          OUTCOME
      =================================== */}

      <section id="outcome" className="case-reflection section-container">
        <div className="case-section-layout">
          <div className="case-section-heading">
            <p className="case-section-label">Outcome</p>
            <h2>From requirements to a working full-stack prototype.</h2>
          </div>

          <div className="case-reflection-content">
            <p className="case-section-lead">
              The team translated the planned data model and role
              requirements into a functional database-backed prototype.
            </p>
            <p className="case-section-text">
              The project gave me practical ownership of database design
              and SQL development while strengthening my experience in
              project coordination and application integration.
            </p>
          </div>
        </div>

        <div className="outcome-grid">
          <article className="outcome-item">
            <span className="outcome-number">01</span>
            <h3>Database &amp; reporting</h3>
            <p>
              Designed a relational PostgreSQL schema and business-focused
              SQL queries to support multi-showroom operations and reporting.
            </p>
          </article>
          <article className="outcome-item">
            <span className="outcome-number">02</span>
            <h3>System integration</h3>
            <p>
              Connected browser-based interfaces with Express routes,
              parameterised queries and persistent PostgreSQL data.
            </p>
          </article>
          <article className="outcome-item">
            <span className="outcome-number">03</span>
            <h3>Team delivery</h3>
            <p>
              Developed practical experience coordinating a team project
              while contributing directly to system planning, database
              development and implementation.
            </p>
          </article>
        </div>

        <div className="case-reflection-closing outcome-continuation">
          <span>Continued development</span>
          <p>
            Following the team delivery, I independently introduced
            salted password hashing, strengthened session and ownership
            checks, moved configuration to environment variables and
            ensured Stripe Checkout used server-verified product data.
            I also improved the technical documentation and overall
            maintainability.
          </p>
        </div>
      </section>


      {/* ===================================
          FINAL CTA
      =================================== */}

      <section className="case-final-cta section-container">

        <p className="case-section-label">
          Explore the project
        </p>

        <h2>
          Want to see how it was built?
        </h2>

        <p>
          Explore the source code, system design and implementation
          details on GitHub.
        </p>


        <div className="case-final-actions">

          <a
            href="https://github.com/quhtrang-cloud/furniture-retail-management-system"
            target="_blank"
            rel="noreferrer"
            className="case-final-primary"
          >
            View GitHub

            <FaArrowUpRightFromSquare
              aria-hidden="true"
            />
          </a>


          <Link
            to="/"
            state={{ scrollTo: 'projects' }}
            className="case-final-secondary"
          >
            <FaArrowLeft aria-hidden="true" />
            Back to projects
          </Link>

        </div>

      </section>


      {/* ===================================
          LIGHTBOX
      =================================== */}

      <BackToTop />

      {zoomedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project screenshot"
          onClick={closeImage}
        >

          <button
            type="button"
            className="image-lightbox-close"
            onClick={closeImage}
            aria-label="Close expanded image"
          >
            <FaXmark aria-hidden="true" />
          </button>


          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

    </main>
  )
}


export default FurnitureProject
