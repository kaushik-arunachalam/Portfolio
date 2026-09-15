export const projects = [
  {
    title: 'AAI AssetFlow',
    description:
      'Enterprise IT asset management system built for the Airports Authority of India. Replaces spreadsheet-based tracking with a centralized platform covering asset lifecycle, full audit trails, and formal employee exit clearance across a high-security aviation facility.',
    problem:
      'Airports Authority of India was tracking IT hardware in spreadsheets — duplicate entries, inconsistent naming, no audit trail for compliance, and no formal process when an employee exited with company equipment.',
    features: [
      'Dynamic asset type handling with customizable specification schemas',
      'Complete audit trails documenting every hardware assignment and return',
      'Employee exit clearance workflow that generates formal handover certificates',
      'Role-based access control with JWT authentication',
      'Real-time dashboard with warranty tracking and asset metrics',
    ],
    note: 'Database designed in Third Normal Form, with hardware specifications split into dedicated detail tables (cpu_details, laptop_details, network_details) to avoid null-heavy columns.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    link: '',
    repo: 'https://github.com/kaushik-arunachalam/AAI_Assetflow',
  },
  {
    title: 'Cyclone Evolution State Intelligence',
    description:
      'Smart India Hackathon 2026 submission for cyclone early warning and coastal emergency response. Combines live GIS storm tracking, wind/pressure telemetry, an AI-driven risk gauge, and a landfall simulation tool to help emergency officers coordinate disaster response.',
    problem:
      'Coastal disaster management teams need a single real-time view of a cyclone as it evolves — most existing tools are fragmented across radar feeds, telemetry, and manual alerting.',
    features: [
      'Live GIS command center with Doppler radar overlays and cyclone trajectory tracking',
      'Real-time wind speed and pressure telemetry across a 12-hour-past to 24-hour-forecast window',
      'Composite AI risk gauge combining wind, flood, storm surge, and infrastructure exposure',
      'Hydrodynamic landfall simulator — adjust intensity, wind, surge, and rainfall to model impact',
      'CAP broadcast generator and shelter/resource dispatch tracking for emergency response',
    ],
    note: 'Runs fully out of the box on free data feeds (RainViewer, OpenWeather), with optional custom API configuration.',
    tags: ['React', 'TypeScript', 'Leaflet', 'Recharts', 'Tailwind CSS'],
    link: '',
    repo: 'https://github.com/kaushik-arunachalam/Cyclone-Evolution-State-Intelligence',
  },
  {
    title: 'EV Charging Port Locator',
    description:
      'Mobile app that finds EV charging stations by real battery range instead of raw proximity, aggregating multiple charging networks with cost comparison and a glassmorphic map UI. Prototype scoped to Bengaluru, with an ML reachability layer scaffolded for future training.',
    problem:
      'Existing charging apps recommend the nearest station without confirming your battery can actually reach it, lock you into a single network, and give no real-time cost comparison across providers.',
    features: [
      'Dual list/map views with color-coded reachability markers based on real battery range',
      'Aggregates charging data across multiple networks instead of one ecosystem',
      'Glassmorphic dark UI built with Expo, React Navigation, and Leaflet/OpenStreetMap',
      'ML reachability and cost-analysis layer scaffolded, awaiting trained models',
    ],
    note: 'Currently a prototype scoped to Bengaluru with mock data.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Leaflet'],
    link: '',
    repo: 'https://github.com/kaushik-arunachalam/EV-Charging-Port-Locator',
  },
]
