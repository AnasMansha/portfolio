/**
 * Case studies are written from verified sources where available (live sites and
 * repository READMEs). Anything that could not be confirmed is marked "Pending" and
 * tracked in PENDING.md at the repo root.
 */

export const categories = [
  "All",
  "Web Development",
  "Backend Development",
  "Others",
];

export const projects = [
  {
    id: "build-ai",
    title: "Build AI",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/buildai.png",
    overview: `Build AI is an AI services platform that builds production-grade autonomous
      agents for healthcare, e-commerce, restaurant, and HR businesses. Rather than FAQ
      chatbots, the agents take real actions — processing refunds, managing appointments,
      screening candidates, and orchestrating operational workflows. Built at Texagon across
      four product lines: DentalOS, CommerceAI, RestaurantAI, and HirePilot.`,
    challenge: `Each vertical needed its own domain logic, integrations, and compliance
      posture, yet the team had to ship on one maintainable codebase. Agents also had to be
      trusted with side-effecting operations like issuing refunds and booking appointments,
      which demands far stricter guardrails than a conversational-only assistant.`,
    solution: `Engineered multi-tenant backend services in NestJS with PostgreSQL and Supabase,
      plus Next.js frontends for the operator dashboards. Agent capability is expressed through
      function calling against scoped REST APIs so every action is auditable and permission
      checked. A supervisor agent routes incoming queries to the right specialist, and a
      knowledge base backed by pgvector similarity search grounds responses in each client's
      own content. Omnichannel intake spans WhatsApp, Instagram, Facebook, email, and web.`,
    tech: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "Redis",
      "LLM function calling",
    ],
    results: [
      "Four production verticals shipped: healthcare practice management, e-commerce automation, restaurant operations, and recruitment",
      "Real-time multi-branch appointment diary with website booking and auto-confirmation",
      "Shopify, WooCommerce, and TikTok Shop integrations for order tracking, refunds, and abandoned-cart recovery",
      "Role-based access control across recruiters, managers, and admins",
    ],
    links: {},
  },
  {
    id: "acre-eye",
    title: "Acre Eye",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/acre eye.png",
    overview: `Acre Eye is a web platform delivered during my time at Texagon. The public site
      is a client-rendered single-page application and does not expose product copy, so the
      description below is intentionally limited to what can be verified.`,
    challenge: `Pending — the specific problem domain and client requirements are not
      publicly documented.`,
    solution: `Pending — implementation details to be confirmed. Delivered as a modern
      single-page web application consistent with the TypeScript and React/Next.js stack used
      across my work at Texagon.`,
    tech: ["Pending verification"],
    results: ["Pending — metrics and impact not yet documented"],
    links: {},
    pending: true,
  },
  {
    id: "code-prompt-generator",
    title: "Code Prompt Generator",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/code prompt generator.png",
    overview: `A developer tooling web app for composing and managing structured prompts for
      AI coding assistants. It helped developers assemble reusable, context-rich prompts
      instead of retyping the same instructions for every task.`,
    challenge: `Prompting an AI assistant well means supplying consistent project context,
      constraints, and output format every single time. Doing that by hand is repetitive and
      easy to get wrong, which produces inconsistent code suggestions.`,
    solution: `Built a web interface for building prompts from reusable pieces — project
      context, task description, and formatting rules — so a complete prompt could be composed
      and copied in a few clicks. The same domain also hosted the n8n automation workflows
      used for other experiments.`,
    tech: ["React", "JavaScript", "Node.js", "n8n"],
    results: [
      "Pending — usage metrics were never captured",
      "The codepromptgenerator.com domain no longer resolves, so the app is offline",
    ],
    links: {},
    pending: true,
  },
  {
    id: "educative",
    title: "Educative",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/educative.png",
    overview: `Educative is a large-scale interactive learning platform for software
      developers, serving courses with in-browser executable code environments. I contributed
      as an Associate Software Engineer from Jul 2023 to Feb 2024.`,
    challenge: `Contributing meaningfully to a mature, high-traffic codebase shared by many
      engineers means changes must be consistent with existing patterns and safe to ship. The
      main difficulty was navigating a very large frontend and making improvements without
      regressing behaviour other teams depended on.`,
    solution: `Developed and maintained production features with React.js, JavaScript,
      Tailwind CSS, and Redis. I built reusable frontend components to cut duplication, and
      worked through a Git-based review workflow — participating in code reviews, debugging,
      and applying clean-code practices in an Agile team.`,
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Redis", "Git"],
    results: [
      "Shipped production features to a platform used by a large developer audience",
      "Improved maintainability and visual consistency through reusable components",
      "Pending — individual performance metrics are not publicly shareable",
    ],
    links: {},
  },
  {
    id: "top-score-fundraising",
    title: "Top Score Fundraising",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/fundraiser.png",
    overview: `Top Score Fundraising gamifies school fundraising. Students raise money through
      interactive games and milestone rewards while organisers run the whole campaign — setup,
      communication, and payouts — from one dashboard.`,
    challenge: `Traditional school fundraisers struggle with student participation and rely on
      manual coordination between organisers, students, and donors. The platform needed to make
      participating genuinely fun while keeping donation collection frictionless on mobile,
      where most supporters actually give.`,
    solution: `Built a web application with personalised student pages, a real-time leaderboard
      for healthy competition, and team-based group challenges. Milestone games unlock tokens,
      gift cards, and customisable prizes. Donation collection works through QR codes, email
      campaigns, and text messaging, and automated text and email reminders keep participants
      engaged throughout the campaign.`,
    tech: ["React", "JavaScript", "REST APIs", "Responsive design"],
    results: [
      "12,483+ fundraisers launched on the platform (per the live site)",
      "$49,999,983+ total raised across campaigns (per the live site)",
      "At least 70% of funds raised go directly to the cause, with no upfront cost to schools",
    ],
    links: {},
  },
  {
    id: "gamebole",
    title: "Gamebole",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/gamebole.png",
    overview: `A marketing and services website for Gamebole, presenting the company's service
      offerings through a modern, animated single-page experience.`,
    challenge: `Pending — the original brief is not documented. The build focused on
      presenting services clearly across screen sizes with motion that supported rather than
      distracted from the content.`,
    solution: `Implemented a responsive Next.js site with a dedicated services section,
      component-driven layout, and scroll-based animation. Deployed on Vercel.`,
    tech: ["Next.js", "React", "CSS animations", "Vercel"],
    results: [
      "Pending — the gamebole.vercel.app deployment is no longer reachable",
    ],
    links: {},
    pending: true,
  },
  {
    id: "infinity-edge-dispatch",
    title: "Infinity Edge Dispatch",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/infinity edge dispatch.png",
    overview: `A dispatch management web application for a trucking company, giving dispatchers
      a single place to coordinate loads, drivers, and carrier paperwork instead of working out
      of spreadsheets and email threads.`,
    challenge: `Truck dispatching is a high-volume, detail-heavy workflow: every load has
      pickup and delivery windows, rate confirmations, and driver assignments that change
      through the day. Losing track of any of it costs real money, so the interface had to make
      current status obvious at a glance.`,
    solution: `Built a web application with structured load and driver records, authenticated
      access for dispatchers, and a workflow-oriented interface for moving loads through their
      lifecycle. Backed by REST APIs over a relational schema.`,
    tech: ["React", "Node.js", "REST APIs", "Relational database"],
    results: [
      "Live and serving the operator at infinityedge.info",
      "Pending — throughput and time-saved metrics not measured",
    ],
    links: { github: "https://github.com/AnasMansha/infinity-edge-dispatch" },
  },
  {
    id: "infinity-edge-software",
    title: "Infinity Edge Software",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/infinity edge software.png",
    overview: `The marketing site for Infinity Edge's truck dispatch software, built to explain
      the product to carriers and owner-operators and convert visitors into enquiries.`,
    challenge: `The audience is non-technical fleet owners evaluating whether dispatch software
      is worth adopting. The site needed to communicate concrete operational benefits quickly
      and stay fast on mobile connections.`,
    solution: `Built a responsive marketing site with clear service breakdowns, feature
      sections, and contact-driven calls to action, matching the Infinity Edge brand used by the
      dispatch application.`,
    tech: ["React", "JavaScript", "Responsive design"],
    results: ["Pending — the infinityedge.us domain is currently unreachable"],
    links: {},
    pending: true,
  },
  {
    id: "magnetar",
    title: "Magnetar",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/magnetar.png",
    overview: `The company website for Magnetar Solutions, built during my time there as a
      Software Engineer. It presents the agency's services and portfolio with an emphasis on
      motion and 3D visual work.`,
    challenge: `An agency site has to demonstrate technical capability, not just describe it —
      while still loading quickly and remaining usable on mobile. Balancing heavier animation
      and 3D rendering against performance was the central constraint.`,
    solution: `Built a React application with Material UI, structured into modular components
      for maintainability. Added interactive animations and 3D rendering for visual impact, with
      responsive layouts tuned for smaller screens.`,
    tech: ["React", "Material UI", "Formik", "CSS animations", "3D rendering"],
    results: [
      "Pending — the magnetar-solutions.vercel.app deployment is no longer reachable",
    ],
    links: { github: "https://github.com/AnasMansha/MagnetarSolutions" },
    pending: true,
  },
  {
    id: "yousave",
    title: "YouSave",
    category: "web development",
    displayCategory: "Web development",
    image: "/assets/images/yousave.png",
    overview: `YouSave is an AI-assisted price comparison tool that searches the same product
      across multiple online retailers and surfaces the cheapest available option, so shoppers
      don't have to check each store themselves.`,
    challenge: `Retailers describe identical products differently — varying titles, models,
      pack sizes, and pricing formats — so naive matching produces false comparisons. The hard
      part is reliably deciding that two differently-worded listings are the same product.`,
    solution: `Built the React frontend for search and comparison, presenting normalised
      results side by side with pricing so the best option is immediately obvious. Product
      matching and normalisation are handled by AI-assisted processing of listing data across
      retailers.`,
    tech: ["React", "JavaScript", "REST APIs", "AI product matching"],
    results: [
      "Live at yousave.ai",
      "Pending — retailer coverage and savings metrics not documented",
    ],
    links: { github: "https://github.com/AnasMansha/yousave-react" },
  },
  {
    id: "bill-split",
    title: "Bill Split Web Application",
    category: "web development",
    displayCategory: "Web development",
    initials: "BS",
    overview: `A lightweight bill-splitting web app that calculates each participant's share of
      a shared expense automatically, removing the manual arithmetic from recurring group and
      team costs.`,
    challenge: `Splitting recurring shared bills within a group is tedious and error-prone —
      someone has to do the maths every time, then chase who has and hasn't paid. It also needed
      to stay deliberately dependency-light and easy to self-host.`,
    solution: `Built a Flask backend with SQLite storage and a vanilla HTML/CSS/JavaScript
      frontend — no heavy framework. Admin login manages the user list; any user can create a
      split, and shares are computed automatically, including an optional 25% discount for the
      bill creator. Each bill carries a 24-hour due period, and participants mark their own
      share as paid so payment status is always visible.`,
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "Vanilla JavaScript"],
    results: [
      "Eliminates manual share calculation for recurring group expenses",
      'Runs locally with a single "python app.py" and minimal dependencies',
    ],
    links: { github: "https://github.com/AnasMansha/bill-split-webapp" },
  },
  {
    id: "cms-backend",
    title: "CMS Backend",
    category: "backend development",
    displayCategory: "Backend development",
    image: "/assets/images/cms backend.png",
    overview: `A backend service for a content management system, exposing a REST API for
      managing content records behind a single administrator account.`,
    challenge: `A CMS API has to cover the full create/read/update/delete surface for content
      while keeping write access restricted to authenticated administrators — and it needed to
      be documented well enough for a frontend to consume without guesswork.`,
    solution: `Built the service in Python with a REST API over a relational schema and an
      admin authentication flow. Every endpoint is documented in a committed Postman collection
      alongside a written API reference, so the contract is reproducible for any client.`,
    tech: ["Python", "Flask", "REST APIs", "Postman"],
    results: [
      "Complete admin-authenticated CRUD API for content management",
      "Endpoints documented via a shipped Postman collection",
    ],
    links: { github: "https://github.com/AnasMansha/cms-backend" },
  },
  {
    id: "restaurant-management-backend",
    title: "Restaurant Management Backend",
    category: "backend development",
    displayCategory: "Backend development",
    initials: "RM",
    overview: `"My Restaurant Manager" — a backend service for restaurant operations, providing
      the REST API, authentication, and data model behind restaurant management workflows.`,
    challenge: `Restaurant operations span menus, orders, staff, and locations, all of which
      have to stay consistent under concurrent use. The schema and API needed to be structured
      for that from the start rather than retrofitted.`,
    solution: `Built with NestJS and TypeScript over PostgreSQL. NestJS modules keep each
      domain isolated with clear boundaries, business logic sits in injectable services, and
      authentication with role handling guards the endpoints — following scalable backend
      architecture practices.`,
    tech: ["NestJS", "TypeScript", "PostgreSQL", "REST APIs"],
    results: [
      "Modular backend architecture with authentication and relational data models",
      "Pending — the repository ships the default NestJS README, so feature scope is not publicly documented",
    ],
    links: { github: "https://github.com/AnasMansha/mrm_backend" },
    pending: true,
  },
  {
    id: "blood-cancer-backend",
    title: "Blood Cancer App Backend",
    category: "backend development",
    displayCategory: "Backend development",
    image: "/assets/images/blood cancer.jpg",
    overview: `The backend service for a blood cancer support application, built as part of a
      team project. It provides the API and data layer consumed by the client application.`,
    challenge: `Health-adjacent applications handle sensitive personal data, so the API needed
      authenticated access and a carefully modelled schema. Working within a shared team
      repository also meant keeping the API contract stable for the client developers.`,
    solution: `Implemented REST endpoints over a structured database schema with
      authentication, exposing the patient and content data the mobile client required.`,
    tech: ["Node.js", "REST APIs", "Database design"],
    results: [
      "Pending — detailed feature scope and impact are not documented in the shared repository",
    ],
    links: { github: "https://github.com/MuhammadAffanWahid/BloodCancer-App" },
    pending: true,
  },
  {
    id: "hotel-booking-backend",
    title: "Hotel Booking App Backend",
    category: "backend development",
    displayCategory: "Backend development",
    image: "/assets/images/hotel booking app.png",
    overview: `An Android hotel booking application built in Android Studio, together with the
      backend that handles room inventory, availability, and reservations.`,
    challenge: `Booking systems have to prevent double-booking: two users must never be able to
      reserve the same room for overlapping dates. Availability checks and reservation writes
      therefore need to be handled carefully rather than as independent operations.`,
    solution: `Built the Android client in Android Studio against a backend that models hotels,
      rooms, and bookings relationally. Availability is resolved by date range before a
      reservation is committed, and user accounts are authenticated so bookings are tied to an
      owner.`,
    tech: ["Android Studio", "Java", "REST APIs", "Relational database"],
    results: [
      "Working end-to-end booking flow from search through confirmation",
      "Pending — not published to an app store; source available on GitHub",
    ],
    links: { github: "https://github.com/AnasMansha/HotelBookingApp" },
  },
  {
    id: "crop-classification",
    title: "Crop Classification Using Satellite Imagery",
    category: "others",
    displayCategory: "Machine learning, FYP",
    initials: "CC",
    overview: `My Final Year Project at Information Technology University: a machine learning
      pipeline that classifies crop types from Sentinel-2 satellite imagery using vegetation
      indices including NDVI, built with a multidisciplinary team.`,
    challenge: `Satellite imagery is enormous — a single Sentinel-2 tile covers 100km² across
      many spectral bands, so region-wide analysis quickly exceeds what a single machine can
      process sequentially. Raw imagery also isn't model-ready: it needs cloud handling, band
      alignment, index computation, and per-field labelling before training can begin.`,
    solution: `Built an end-to-end geospatial pipeline in Python. Regions are partitioned by
      GeoJSON boundaries so processing can be split into independent units and run in parallel,
      with image stitching reassembling results into continuous coverage. Automated
      preprocessing and feature extraction compute vegetation indices such as NDVI and derive
      per-field feature vectors, which feed the classification model for crop identification.`,
    tech: [
      "Python",
      "Machine Learning",
      "Sentinel-2",
      "NDVI",
      "GeoJSON",
      "Parallel processing",
      "Remote sensing",
    ],
    results: [
      "End-to-end crop identification solution delivered as a Final Year Project",
      "Scalable pipeline capable of processing large satellite datasets through parallelisation",
      "Pending — model accuracy figures and dataset size not recorded here",
    ],
    links: {},
  },
  {
    id: "mass-shl2a",
    title: "Mass SHL2A Land Processor",
    category: "others",
    displayCategory: "Automation & data processing",
    initials: "ML",
    overview: `A high-performance Python application that automates processing of Sentinel-2
      Level-2A satellite imagery in bulk, targeted at agricultural and land analysis workflows.`,
    challenge: `Preparing Sentinel-2 L2A scenes for analysis is repetitive manual work —
      downloading, unpacking, resampling bands, and clipping to areas of interest, scene after
      scene. At the volumes needed for land analysis, doing this by hand is the bottleneck in
      the entire workflow.`,
    solution: `Built a scalable batch processing pipeline in Python that ingests large
      geospatial datasets and runs the preprocessing chain automatically across many scenes,
      removing the manual preparation step entirely and optimising the surrounding workflow.`,
    tech: [
      "Python",
      "Sentinel-2 L2A",
      "Satellite imagery",
      "Automation",
      "Geospatial processing",
    ],
    results: [
      "Substantially reduced manual preprocessing effort for bulk satellite imagery",
      "Handles large geospatial datasets through a scalable batch pipeline",
      "Pending — repository URL to be confirmed (the resume references a GitHub link)",
    ],
    links: {},
    pending: true,
  },
  {
    id: "gtnh-sync",
    title: "GTNH Sync",
    category: "others",
    displayCategory: "Desktop application & automation",
    image: "/assets/images/gtnh-sync.png",
    imageFit: "contain",
    overview: `A Windows system-tray application that automatically backs up GregTech: New
      Horizons Minecraft world saves to Google Drive. It finds the newest backup zip, offers to
      upload it, and skips the upload if that file is already on Drive.`,
    challenge: `Heavily modded Minecraft worlds represent hundreds of hours of progress stored
      in a single local folder — one disk failure, corrupted save, or ransomware incident loses
      all of it. Existing options were either manual or required running command-line tools, so
      players simply didn't do it. Whatever replaced that had to be genuinely invisible after
      setup, and multi-gigabyte uploads meant progress had to stay visible.`,
    solution: `Built a Python tray app that checks for a new backup on Windows login. If the
      latest zip is already on Drive it silently marks the day done; if not, it prompts with
      Yes/No/Cancel, where "No" suppresses prompts until the next day. Uploads use the official
      Google Drive API with the narrow "drive.file" scope, so the app can only see files it
      created rather than the user's whole Drive. Live upload percentage shows in the tray menu,
      and Drive retention is capped at three backups — older ones are pruned before each upload.
      A GitHub Actions workflow builds and publishes the signed Windows executable automatically
      on every version tag.`,
    tech: [
      "Python 3.11+",
      "Google Drive API",
      "OAuth 2.0",
      "Windows system tray",
      "PyInstaller",
      "GitHub Actions",
    ],
    results: [
      "Fully unattended daily backups after a one-time setup — no command line required",
      "Duplicate detection avoids re-uploading a backup that is already on Drive",
      "Automatic retention keeps only the 3 newest backups to control Drive usage",
      'Privacy-preserving by design: the narrow "drive.file" scope, with credentials and tokens kept local',
      "Releases built and published automatically by GitHub Actions on version tags",
    ],
    links: { github: "https://github.com/AnasMansha/gtnh-sync" },
  },
  {
    id: "space-shooter-vr",
    title: "Space Shooter VR",
    category: "others",
    displayCategory: "Game development",
    image: "/assets/images/space shooter.png",
    overview: `A mobile VR space shooter for Android built in Unity with the Google Cardboard
      SDK. Players defend themselves against incoming meteorites and planets across three
      difficulty levels.`,
    challenge: `Mobile VR is unforgiving: the scene renders twice, once per eye, on phone
      hardware, and any frame drop translates directly into motion discomfort. Cardboard also
      offers almost no input — essentially head orientation and a single trigger — so aiming and
      interaction had to work through gaze alone.`,
    solution: `Built in Unity targeting Android VR, with gaze-based aiming suited to the
      Cardboard input model. Two distinct mechanics keep play varied: bullets destroy
      meteorites, while teleporters handle planets. Three difficulty tiers (Beginner,
      Challenging, Hardcore) each track their own high score, planet teleportation triggers
      randomised boosters, and the whole scene is optimised for mobile stereo rendering.`,
    tech: ["Unity", "C#", "Google Cardboard SDK", "Android", "3D & audio"],
    results: [
      "Playable Android VR build with main menu, instructions, and gameplay scenes",
      "Three difficulty levels with per-level high score tracking and optimal score calculation",
      "Booster system driven by planet teleportation for gameplay variety",
      "APK and source distributed via Google Drive",
    ],
    links: { github: "https://github.com/AnasMansha/SpaceShooterVR" },
  },
  {
    id: "terminal-adventure",
    title: "Race Against Neccerties",
    category: "others",
    displayCategory: "Game development",
    image: "/assets/images/terminal.png",
    overview: `A Python terminal RPG (also titled "Terminal Adventure: Rise Against
      Neccerties") where you play an Explorer, Hacker, or Engineer — each with unique skills and
      weapons — through a sci-fi story told across five stages.`,
    challenge: `A text-only interface has no graphics to carry atmosphere, so tension and place
      have to come entirely from writing and pacing. Three playable classes also multiply the
      design work: every encounter needs to stay solvable and interesting whichever class the
      player picked.`,
    solution: `Built in Python as a stage-based adventure — Lab, Temple, Journey, Cave, and
      Hive — with a dialogue-driven narrative. Each class carries its own weapons and abilities,
      and encounters offer multiple resolutions: fight, solve a lore-driven riddle, bribe, or
      explore. The Hive stage closes the story with a mega battle against Neccerties.`,
    tech: ["Python", "Terminal UI", "Game design"],
    results: [
      "Five complete playable stages with three distinct character classes",
      "Puzzle mechanics tied to in-world lore, with branching encounter resolutions",
    ],
    links: { github: "https://github.com/AnasMansha/terminal-adventure-game" },
  },
  {
    id: "interface-library",
    title: "C++ Interface Library",
    category: "others",
    displayCategory: "Library development",
    image: "/assets/images/interface.jpg",
    overview: `A C++ library for building clean, structured console interfaces. It ships
      ready-to-use classes for menus, forms, and screens, plus utility functions that simplify
      terminal application development.`,
    challenge: `Console UI in C++ is normally written from scratch every time — cursor
      positioning, input validation, and redraw logic reimplemented per project, which is both
      repetitive and inconsistent. The library also had to be approachable enough for beginners
      to adopt without reading the whole source.`,
    solution: `Designed reusable Menu, Form, and Screen classes that encapsulate layout and
      input handling behind a simple API, with shared utility functions for common console
      tasks. A built-in Tutorial() function teaches usage interactively, and a compiled
      demo application shows the library in a realistic program.`,
    tech: ["C++", "Console UI", "Library design"],
    results: [
      "Reusable menu, form, and screen components for terminal applications",
      "Self-teaching setup via an in-library Tutorial() function and a runnable demo",
      "Sample program with a full interface included in the repository",
    ],
    links: { github: "https://github.com/AnasMansha/Interface-Library" },
  },
];
