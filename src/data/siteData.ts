import type {
  ServiceItem,
  IntelligenceComponent,
  IndustryItem,
  CaseStudyItem,
  ProcessStage,
  TechItem,
  InsightArticle,
  TeamMember
} from '../types';

export const COMPANY_INFO = {
  name: 'ABC',
  legalName: 'ABC Systems & Technologies Inc.',
  tagline: 'ENTER THE DIGITAL INTELLIGENCE.',
  headline: "WE ENGINEER WHAT'S NEXT.",
  subheadline: 'Intelligent software. Connected systems. Technology built for what\'s coming.',
  foundedYear: '2024',
  coordinates: '37.7749° N, 122.4194° W // LATENCY 12ms',
  contactEmail: 'engineering@abc-systems.digital',
  phone: '+1 (800) 412-8800',
  headquarters: 'San Francisco, CA & Distributed Global Architecture Nodes',
  status: 'GLOBAL SYSTEM ONLINE // 99.999% HEALTH',
  websitesDelivered: '10+',
  happyClients: '10+',
  clientSatisfaction: '100%',
  uptimeSLA: '99.999%'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    number: '01',
    title: 'Custom Software Development',
    tagline: 'High-throughput, domain-driven enterprise platforms built for longevity.',
    description: 'We architect and build tailored software systems that solve non-trivial business challenges. By prioritizing strict domain modeling, decoupled service boundaries, and deterministic execution, we deliver software that scales predictably under extreme demand without technical regression.',
    businessValue: 'Eliminates reliance on rigid off-the-shelf software, delivering an asset with proprietary competitive advantage and 40% lower lifetime operational overhead.',
    technicalCapabilities: [
      'Event-Driven Microservices & CQRS Architectures',
      'High-Concurrency Distributed Systems (Go, Rust, Node.js)',
      'Deterministic State Machines & Workflow Engines',
      'Database Sharding & Polyglot Persistence'
    ],
    architectureFocus: 'Fault-tolerant distributed backends with strict latency guarantees (<20ms p99).',
    iconName: 'Code2',
    metrics: '99.999% Availability Architecture'
  },
  {
    id: 'ai-ml',
    number: '02',
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'Deterministic mathematical foundations powering dynamic enterprise intelligence.',
    description: 'We engineer production-grade machine learning pipelines, custom fine-tuned foundational models, and multi-modal intelligence systems. Rather than generic wrapper APIs, we build resilient inference architectures with strict guardrails, latency budgets, and continuous validation.',
    businessValue: 'Transforms latent enterprise data lakes into real-time decision engines, automating cognitive workloads and uncovering predictive market opportunities.',
    technicalCapabilities: [
      'Custom LLM Fine-Tuning, LoRA & Domain Adaptations',
      'Retrieval-Augmented Generation (RAG) with Vector Indices',
      'Distributed Model Inference Optimization (TensorRT, ONNX)',
      'Autonomous Multi-Agent Swarm Orchestration'
    ],
    architectureFocus: 'Sub-second vector retrieval and quantized multi-tenant neural pipelines.',
    iconName: 'Cpu',
    metrics: 'Up to 70% Inference Cost Reduction'
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI Automation & Intelligent Agents',
    tagline: 'Autonomous software swarms executing mission-critical operational workflows.',
    description: 'We construct autonomous, goal-directed AI agents capable of continuous tool usage, external API execution, multi-step error correction, and audited operational reporting. Each agent operates within deterministic authorization sandboxes.',
    businessValue: 'Compresses multi-day manual workflow cycles into self-healing, real-time seconds with transparent audit trails.',
    technicalCapabilities: [
      'Multi-Agent Coordination & Supervisor Topologies',
      'Safe Tool Calling & API Execution Sandboxes',
      'Human-in-the-Loop Verification Frameworks',
      'Real-Time Observability & Token Economics'
    ],
    architectureFocus: 'Idempotent agentic actions with strict zero-loss transaction guarantees.',
    iconName: 'Bot',
    metrics: '10x Acceleration on Complex Workflows'
  },
  {
    id: 'cloud-devops',
    number: '04',
    title: 'Cloud Engineering & Distributed Infrastructure',
    tagline: 'Resilient multi-region cloud topology engineered as declarative code.',
    description: 'We design, deploy, and govern fault-tolerant cloud platforms across AWS, GCP, and Azure using pure Infrastructure-as-Code (Terraform, Pulumi). Our cloud topologies are immutable, self-healing, and fortified against regional black swan events.',
    businessValue: 'Achieves continuous deployment confidence, auto-scaling elasticity, and cloud expenditure transparency without vendor lock-in.',
    technicalCapabilities: [
      'Multi-Region Kubernetes (EKS, GKE, Bare Metal) Mesh',
      'GitOps Declarative Delivery (ArgoCD, Flux)',
      'FinOps Infrastructure Cost Telemetry & Optimization',
      'Zero-Downtime Blue/Green and Canary Rollouts'
    ],
    architectureFocus: 'Declarative cluster mesh with automated multi-zone failover under 5 seconds.',
    iconName: 'Cloud',
    metrics: 'Zero-Downtime Pipeline Deployment'
  },
  {
    id: 'cybersecurity',
    number: '05',
    title: 'Cybersecurity & Secure Architecture',
    tagline: 'Zero-Trust perimeter defense and continuous cryptographic validation.',
    description: 'Security is not an afterthought or a compliance checkbox; it is the fundamental mathematical bedrock of every system we ship. We implement Zero-Trust network segmentation, mTLS service meshes, automated secret rotation, and continuous threat modeling.',
    businessValue: 'Guarantees sovereign protection of proprietary IP, customer records, and operational infrastructure against advanced persistent threats.',
    technicalCapabilities: [
      'Zero-Trust Network Access & mTLS Service Meshes',
      'Automated DevSecOps Static/Dynamic Scanning (SAST/DAST)',
      'Key Management & HSM Hardware Cryptography',
      'SOC2 Type II, ISO 27001 & HIPAA Readiness Blueprinting'
    ],
    architectureFocus: 'Cryptographically verified identity for every packet, call, and storage volume.',
    iconName: 'ShieldCheck',
    metrics: 'Zero-Trust mTLS Across 100% of Nodes'
  },
  {
    id: 'data-engineering',
    number: '06',
    title: 'Data Engineering & Analytics Fabric',
    tagline: 'Unified streaming architectures and high-velocity analytical lakehouses.',
    description: 'We construct high-throughput streaming pipelines that ingest, validate, and index terabytes of heterogeneous enterprise data in real-time. By unifying event streams (Kafka, Flink) with modern lakehouse columnar stores (Iceberg, ClickHouse), your business operates on millisecond freshness.',
    businessValue: 'Eliminates data silos, eradicates stale batch-reporting delays, and empowers teams with instant, queryable business intelligence.',
    technicalCapabilities: [
      'Distributed Streaming Pipelines (Apache Kafka, Flink, Spark)',
      'Real-Time Analytical Storage (ClickHouse, Apache Iceberg, DuckDB)',
      'Data Lineage, Data Quality Contracts & Schema Registries',
      'dbt Dimensional Modeling & Automated Metrics Layers'
    ],
    architectureFocus: 'Sub-second analytical queries across billions of ingested event records.',
    iconName: 'Database',
    metrics: '100k+ Ingested Events / Sec'
  },
  {
    id: 'web-platforms',
    number: '07',
    title: 'Web Applications & Digital Platforms',
    tagline: 'Mission-critical, ultra-fast web frontends engineered for extreme user engagement.',
    description: 'We build enterprise web platforms that blend desktop-class performance with reactive modern ergonomics. Utilizing React, Next.js, WebGL, and optimized client state machines, our applications load in sub-seconds and deliver fluid 60fps responsiveness.',
    businessValue: 'Dramatically raises conversion rates, enhances customer NPS, and supports complex operational workflows inside standard web viewports.',
    technicalCapabilities: [
      'Next.js Server Components & Progressive Hydration',
      'Micro-Frontend Federation & Modular Design Systems',
      'Interactive 3D WebGL / WebGPU Visualizers',
      'Offline-First PWA Architectures with IndexedDB Sync'
    ],
    architectureFocus: 'Lighthouse 98+ score guarantee with sub-700ms First Contentful Paint.',
    iconName: 'Globe',
    metrics: 'Sub-700ms Global First Paint'
  },
  {
    id: 'api-integration',
    number: '08',
    title: 'API Engineering & Systems Integration',
    tagline: 'Ultra-low-latency protocol backbones uniting modern and legacy architectures.',
    description: 'We design developer-first APIs and robust integration fabrics that bridge legacy mainframes, modern SaaS ecosystems, and external partner networks using gRPC, GraphQL, and typed OpenAPI contracts.',
    businessValue: 'Unlocks trapped legacy data, reduces partner integration time from months to days, and establishes an extensible API monetization platform.',
    technicalCapabilities: [
      'High-Performance gRPC & Protobuf Inter-Service Contracts',
      'Federated GraphQL Schemas (Apollo Federation)',
      'Enterprise API Gateways (Kong, Envoy, Cloudflare Workers)',
      'Strict Idempotency, Rate Limiting & Webhook Dispatchers'
    ],
    architectureFocus: 'Sub-5ms internal gateway routing with cryptographic signature validation.',
    iconName: 'Network',
    metrics: '99.99% Webhook Delivery Rate'
  },
  {
    id: 'ui-ux-engineering',
    number: '09',
    title: 'UI/UX & Digital Product Engineering',
    tagline: 'Scientific user research translated into sleek, high-utility interactive software.',
    description: 'We reject decorative vanity designs. Our product engineering teams study complex domain cognitive loads to produce intuitive, tactile interfaces that enable operators, executives, and engineers to interact effortlessly with intricate data systems.',
    businessValue: 'Reduces operational operator training cycles by 60% and slashes human error rates in mission-critical software workflows.',
    technicalCapabilities: [
      'Cognitive Task Analysis & Operator Ergonomics',
      'Multi-Brand Design Tokens & Figma-to-Code Pipelines',
      'Micro-Interactions, Spatial Physics & Haptic Soundscapes',
      'WCAG 2.1 AA+ Universal Accessibility Compliance'
    ],
    architectureFocus: 'Accessible token-based design systems with instant thematic adaptability.',
    iconName: 'Layers',
    metrics: 'WCAG 2.1 AA Compliance Certified'
  },
  {
    id: 'tech-modernization',
    number: '10',
    title: 'Technology Consulting & Modernization',
    tagline: 'Pragmatic migration blueprints to systematically retire architectural debt.',
    description: 'We conduct architectural audits of tangled legacy codebases and develop incremental, risk-mitigated strangler-pattern modernization roadmaps. We replace fragile legacy components without pausing active business operations.',
    businessValue: 'Rescues enterprise speed, lowers ballooning maintenance overhead, and ensures business continuity for the next two decades.',
    technicalCapabilities: [
      'Strangler Fig Migration Architectures',
      'Monolith-to-Distributed Deconstruction Strategies',
      'Codebase Audits & Technical Debt Valuation Reports',
      'Executive Technology Due Diligence & Architecture Blueprints'
    ],
    architectureFocus: 'Zero-disruption live traffic migration with instant rollback safety toggles.',
    iconName: 'Sparkles',
    metrics: '40%+ Average Tech-Debt Clearance'
  }
];

export const INTELLIGENCE_COMPONENTS: IntelligenceComponent[] = [
  {
    id: 'software',
    name: 'Modular Software Architecture',
    tagline: 'Core Deterministic Logic Layer',
    headline: 'Engineered for Immutability and Predictable Scale',
    description: 'Every software component is constructed as an isolated, testable unit of business logic. Using typed schemas, immutable data structures, and contract-first API boundaries, our systems prevent cascading failures across services.',
    metrics: [
      { label: 'Test Coverage', value: '94.8%' },
      { label: 'P99 Latency', value: '< 18ms' },
      { label: 'Throughput', value: '25,000 req/s' }
    ],
    keyProtocols: ['gRPC / Protobuf', 'Domain-Driven Design', 'OpenTelemetry Tracing', 'CQRS Event Stores'],
    status: 'ACTIVE'
  },
  {
    id: 'ai',
    name: 'Neural Intelligence & Model Ops',
    tagline: 'Cognitive Inference Engine',
    headline: 'High-Throughput Machine Learning & Cognitive Synthesis',
    description: 'Our AI architecture orchestrates transformer models, retrieval-augmented caches, and agentic reasoning loops. Models undergo continuous automated evaluation against semantic drift and hallucinations before any production response is served.',
    metrics: [
      { label: 'Token Latency', value: '14ms / token' },
      { label: 'Accuracy Benchmark', value: '98.4%' },
      { label: 'Quantization', value: 'FP8 / INT4 Optimized' }
    ],
    keyProtocols: ['TensorRT-LLM', 'Milvus / Qdrant Vectors', 'LangSmith Guardrails', 'Self-Healing Swarms'],
    status: 'OPTIMIZED'
  },
  {
    id: 'cloud',
    name: 'Distributed Cloud Fabric',
    tagline: 'Multi-Region Elastic Mesh',
    headline: 'Self-Healing Infrastructure with Global Geo-Redundancy',
    description: 'Running across three geographic availability rings, our declarative cloud infrastructure automatically re-routes traffic during localized cloud outages. Automated scaling algorithms anticipate traffic spikes before latency degrades.',
    metrics: [
      { label: 'Regional Failover', value: '< 4.2 sec' },
      { label: 'SLA Guarantee', value: '99.999%' },
      { label: 'Global PoPs', value: '42 Edge Nodes' }
    ],
    keyProtocols: ['Kubernetes Cluster Mesh', 'ArgoCD GitOps', 'Terraform OpenTofu', 'Cilium eBPF Routing'],
    status: 'ONLINE'
  },
  {
    id: 'security',
    name: 'Cryptographic Security Shield',
    tagline: 'Zero-Trust Perimeter Matrix',
    headline: 'Continuous Attestation and Hardware-Backed Encryption',
    description: 'Zero implicit trust is granted to any actor, service, or connection. Mutual TLS secures all internal communication, while continuous hardware attestation confirms that code runs strictly on verified, tamper-free compute hosts.',
    metrics: [
      { label: 'mTLS Coverage', value: '100% Internal' },
      { label: 'Key Rotation', value: 'Automated 24h' },
      { label: 'Compliance Audit', value: 'SOC2 / ISO 27001' }
    ],
    keyProtocols: ['SPIFFE / SPIRE Identities', 'Hardware Security Modules', 'Automated SAST / DAST', 'Cosign Binary Attestation'],
    status: 'ACTIVE'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'fintech',
    name: 'Finance & Capital Markets',
    tagline: 'Sub-millisecond execution, audit-grade consistency, and regulatory attestation.',
    challenges: [
      'High-frequency distributed transaction reconciliation',
      'Stringent regulatory compliance (SEC, FINRA, GDPR)',
      'Zero-tolerance data loss in volatile market surges'
    ],
    solutionApproach: 'We engineer event-sourced double-entry ledger engines with distributed consensus, deterministic transaction ordering, and immutable audit logs.',
    technicalArchitecture: 'Raft consensus ledgers with memory-mapped order routing and hardware HSM signatures.',
    highlightedMetrics: 'Sub-3ms trade validation at 50,000 transactions / second',
    badge: 'CAPITAL MARKETS'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagline: 'HIPAA-compliant medical telemetry and clinical intelligence systems.',
    challenges: [
      'Heterogeneous EHR data fragmentation and siloed patient records',
      'Strict PHI encryption requirements at rest and in transit',
      'Clinical workflow latency and doctor fatigue'
    ],
    solutionApproach: 'We develop FHIR-native interoperability platforms with zero-knowledge data pipelines and contextual clinical AI assistants.',
    technicalArchitecture: 'FHIR v4 streaming microservices with end-to-end homomorphic privacy preservation.',
    highlightedMetrics: '100% HIPAA and HITRUST architecture compliance',
    badge: 'HEALTHCARE IT'
  },
  {
    id: 'manufacturing',
    name: 'Smart Manufacturing & Industrial IoT',
    tagline: 'Edge telemetry, predictive maintenance, and autonomous factory lines.',
    challenges: [
      'High-jitter industrial sensor streams under harsh physical conditions',
      'Unplanned downtime costing millions per production hour',
      'Air-gapped operational technology (OT) network security'
    ],
    solutionApproach: 'We deploy edge-compute inference nodes running on industrial gateways, processing real-time sensor telemetries to predict equipment failure days in advance.',
    technicalArchitecture: 'MQTT / OPC-UA edge brokers with on-device quantized anomaly detection models.',
    highlightedMetrics: '35% reduction in unplanned assembly line downtime',
    badge: 'INDUSTRY 4.0'
  },
  {
    id: 'retail',
    name: 'Retail & Modern Commerce',
    tagline: 'Omnichannel inventory synchronization and sub-second checkout pipelines.',
    challenges: [
      'Massive traffic spikes during flash promotions and holidays',
      'Multi-warehouse inventory discrepancies and overselling',
      'Sluggish customer checkout funnels driving cart abandonment'
    ],
    solutionApproach: 'We architect headless commerce engines featuring distributed cache hierarchies, optimistic inventory locks, and micro-instant payments.',
    technicalArchitecture: 'Edge-rendered Next.js storefronts connected to Redis-clustered inventory locks.',
    highlightedMetrics: '99.999% availability during 12x holiday traffic surges',
    badge: 'COMMERCE ENGINE'
  },
  {
    id: 'education',
    name: 'Education & Learning Platforms',
    tagline: 'Adaptive AI pedagogical systems and scalable digital classrooms.',
    challenges: [
      'Static, one-size-fits-all digital curriculum models',
      'High concurrency during simultaneous nationwide examination periods',
      'Student disengagement in remote learning environments'
    ],
    solutionApproach: 'We engineer adaptive learning engines that evaluate student comprehension trajectories in real-time, tailoring exercises to optimal cognitive zones.',
    technicalArchitecture: 'WebRTC ultra-low-latency video meshes and vector-indexed knowledge graphs.',
    highlightedMetrics: 'Concurrent support for 250,000 simultaneous active learners',
    badge: 'EDTECH CORE'
  },
  {
    id: 'logistics',
    name: 'Logistics & Global Supply Chain',
    tagline: 'Autonomous route calculation and end-to-end cold-chain visibility.',
    challenges: [
      'Geopolitical freight volatility and multi-modal transit delays',
      'Spoilage of temperature-sensitive pharmaceuticals and perishables',
      'Fragmented customs documentation and manual handoffs'
    ],
    solutionApproach: 'We construct dynamic route optimization engines integrating satellite telemetry, weather predictions, and automated digital bill-of-lading workflows.',
    technicalArchitecture: 'Graph-database topology engines (Neo4j) with GPS telematics ingestion pipelines.',
    highlightedMetrics: '18% reduction in total fleet fuel consumption and route delays',
    badge: 'SUPPLY ORCHESTRATION'
  },
  {
    id: 'saas',
    name: 'SaaS & Enterprise Technology',
    tagline: 'Multi-tenant cloud architectures with granular isolation and usage metering.',
    challenges: [
      'Noisy neighbor performance degradation across enterprise tiers',
      'Complex subscription metering, billing, and entitlement enforcement',
      'Proliferation of regional data residency compliance mandates'
    ],
    solutionApproach: 'We design cell-based multi-tenant architectures where enterprise clients receive logically or physically isolated compute partitions.',
    technicalArchitecture: 'Cellular multi-tenant Kubernetes clusters with eBPF network isolation.',
    highlightedMetrics: 'Instant tenant provisioning in under 30 seconds',
    badge: 'CLOUD PLATFORMS'
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'project-chimera',
    code: 'SAMPLE CONCEPT // ARCH-01',
    title: 'Project Chimera: Autonomous Freight Routing Engine',
    category: 'AI Logistics & Distributed Systems',
    isConcept: true,
    problem: 'A multinational freight carrier suffered recurring dispatch bottlenecks across 4,200 vehicles due to unpredictable port delays and disconnected route planners.',
    solution: 'Engineered an autonomous routing core that computes dynamic multi-stop itineraries in sub-30ms using graph neural networks and real-time telematics.',
    techStack: ['Go', 'Apache Flink', 'PyTorch', 'Rust Graph Engine', 'TimescaleDB', 'gRPC'],
    verifiedOutcome: 'Demonstrated 22% reduction in deadhead miles and automated 88% of daily dispatch decisions in validated simulation benchmarks.',
    engineeringHighlight: 'A custom compiled Rust graph traversal algorithm running 12x faster than standard Dijkstra solvers on 100k+ dynamic road segments.',
    architectureDetails: {
      dataIngestion: 'Kafka cluster ingesting 85,000 GPS telematics packets / second',
      processingEngine: 'Apache Flink stateful stream processing with dynamic windowing',
      securityLayer: 'mTLS authenticated edge devices with TPM cryptographic chip verification',
      scalabilityMetric: 'Scales from 1,000 to 50,000 active nodes without cluster reconfiguration'
    }
  },
  {
    id: 'project-aegis',
    code: 'SAMPLE CONCEPT // ARCH-02',
    title: 'Aegis Zero-Trust Enterprise Security Mesh',
    category: 'Cybersecurity & Cloud Infrastructure',
    isConcept: true,
    problem: 'A financial institution struggled with perimeter-based network vulnerabilities as hundreds of remote engineering teams accessed internal microservices.',
    solution: 'Designed and deployed an automated Zero-Trust service mesh with cryptographically verifiable SPIFFE/SPIRE workload identities and automated continuous policy attestation.',
    techStack: ['eBPF', 'Cilium', 'Envoy Gateway', 'SPIRE', 'Vault', 'Kubernetes'],
    verifiedOutcome: 'Eliminated static VPN access points across 1,800 engineers, moving to continuous context-aware device attestation with zero recorded breaches.',
    engineeringHighlight: 'Kernel-level packet filtering via eBPF that enforces security policies in sub-microsecond time without user-space context switching overhead.',
    architectureDetails: {
      dataIngestion: 'Distributed Envoy sidecar proxies reporting telemetry to central telemetry collector',
      processingEngine: 'Open Policy Agent (OPA) evaluating declarative Rego rules in memory',
      securityLayer: 'Short-lived X.509 certificates with 60-minute automatic rotation',
      scalabilityMetric: 'Supports 25,000 inter-service connections with under 0.8ms latency penalty'
    }
  },
  {
    id: 'project-horizon',
    code: 'SAMPLE CONCEPT // ARCH-03',
    title: 'Horizon Real-Time Analytics Lakehouse',
    category: 'Big Data & Streaming Architecture',
    isConcept: true,
    problem: 'An e-commerce marketplace was crippled by 6-hour batch ETL delays, preventing marketing and pricing algorithms from acting on instantaneous consumer demand changes.',
    solution: 'Architected a unified streaming lakehouse combining Apache Iceberg storage format with ClickHouse real-time OLAP engines and automated schema evolution.',
    techStack: ['Apache Iceberg', 'ClickHouse', 'Apache Kafka', 'DuckDB', 'dbt', 'AWS S3'],
    verifiedOutcome: 'Reduced data latency from 360 minutes to under 2.4 seconds, accelerating pricing optimization cycles by over 150x.',
    engineeringHighlight: 'Direct zero-copy columnar ingestion that bypasses conventional row-by-row transforms, writing directly into compressed parquet micro-batches.',
    architectureDetails: {
      dataIngestion: 'Dual-replicated Kafka topic architecture with zero message loss guarantee',
      processingEngine: 'ClickHouse vectorized execution engine with custom SIMD-accelerated aggregations',
      securityLayer: 'Column-level AES-256 field encryption with automated key isolation per tenant',
      scalabilityMetric: 'Queried 12 billion rows in 420 milliseconds during benchmark testing'
    }
  },
  {
    id: 'project-aura',
    code: 'SAMPLE CONCEPT // ARCH-04',
    title: 'Aura Distributed Clinical Telemetry Hub',
    category: 'Healthcare & IoT Systems',
    isConcept: true,
    problem: 'A hospital network faced critical alert fatigue due to disconnected bedside monitors and delayed notification of acute patient decompensation.',
    solution: 'Constructed an edge-computing clinical telemetry hub with real-time waveform anomaly detection and automated nurse workstation dispatching.',
    techStack: ['Rust', 'WebAssembly', 'MQTT', 'TimescaleDB', 'React Native', 'WebSockets'],
    verifiedOutcome: 'Achieved sub-200ms end-to-end alert latency from bedside sensor to mobile clinician handset with a 41% drop in false-positive alerts.',
    engineeringHighlight: 'On-device Rust WASM edge filters that isolate cardiac ECG noise artifacts locally before streaming verified anomaly vectors over wireless networks.',
    architectureDetails: {
      dataIngestion: 'High-frequency 500Hz physiological waveform stream via isolated medical WiFi',
      processingEngine: 'Edge container running Rust statistical anomaly filter with local fallback',
      securityLayer: 'End-to-end TLS 1.3 with hardware-rooted certificate pinning on clinician devices',
      scalabilityMetric: 'Capable of monitoring 5,000 simultaneous ICU beds per regional hospital cluster'
    }
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Discover',
    phase: 'Architecture & Domain Alignment',
    description: 'We perform deep-dive technical diagnostics into your operational systems, legacy constraints, data topologies, and business objectives. We do not write code until the fundamental domain boundaries are mathematically sound.',
    clientReceives: [
      'Domain Boundary Context Map',
      'Legacy Technical Debt Audit Report',
      'Executive Feasibility & ROI Assessment',
      'Non-Functional Requirements Specification'
    ],
    durationEstimate: 'Weeks 1 – 2',
    keyArtifacts: 'Domain Context Model, Threat Baseline'
  },
  {
    step: '02',
    title: 'Define',
    phase: 'Systems Blueprint & Protocol Contract',
    description: 'We author comprehensive Architecture Decision Records (ADRs), interface schemas, data flow models, and service level objectives. Every component is defined prior to implementation.',
    clientReceives: [
      'Full Architecture Decision Record (ADR) Suite',
      'OpenAPI & Protobuf Schema Specifications',
      'Infrastructure Capacity & Cost Model (FinOps)',
      'Security & Regulatory Compliance Matrix'
    ],
    durationEstimate: 'Weeks 2 – 4',
    keyArtifacts: 'System Architecture Blueprint, Schema Contracts'
  },
  {
    step: '03',
    title: 'Design',
    phase: 'Ergonomics, Interface & Topology',
    description: 'Our engineering designers produce high-fidelity functional prototypes and design systems. We model human cognitive loads, edge-case states, and latency visual feedback to ensure uncompromising operator efficiency.',
    clientReceives: [
      'Token-Based Component Design System',
      'Interactive High-Fidelity Prototype',
      'WCAG 2.1 AA+ Accessibility Verification',
      'User Flow State Transition Diagrams'
    ],
    durationEstimate: 'Weeks 4 – 6',
    keyArtifacts: 'Design Token Library, State Machines'
  },
  {
    step: '04',
    title: 'Engineer',
    phase: 'Pure Development & Continuous Integration',
    description: 'Our senior engineers construct your solution following strict test-driven methodologies, continuous integration pipelines, and automated static code analyses. Direct access to our staff engineers is standard.',
    clientReceives: [
      'Bi-Weekly Verifiable Working Releases',
      'Live Automated Test Execution Reports (>90% coverage)',
      'Real-Time Git Telemetry & Changelogs',
      'Documented Source Code Repository Ownership'
    ],
    durationEstimate: 'Sprints 1 – N',
    keyArtifacts: 'Production Codebase, Automated Test Suites'
  },
  {
    step: '05',
    title: 'Validate',
    phase: 'Chaos Testing, Security & Load Audits',
    description: 'Before production release, we subject the system to rigorous stress testing: chaos engineering (simulating pod and network failures), automated penetration testing, and 10x peak load injection.',
    clientReceives: [
      'Full Chaos & Resilience Engineering Report',
      'Third-Party Penetration Test Remediation',
      'Performance Under 10x Peak Load Telemetry',
      'Security Compliance Attestation Dossier'
    ],
    durationEstimate: 'Pre-Deployment Phase',
    keyArtifacts: 'Chaos Drill Results, Pen-Test Certification'
  },
  {
    step: '06',
    title: 'Deploy',
    phase: 'Zero-Downtime Rollout & Orchestration',
    description: 'We orchestrate canary deployments, automated rollbacks, and blue/green production switches using declarative GitOps. Zero minutes of downtime is our strict baseline requirement.',
    clientReceives: [
      'Zero-Downtime Production Cutover Execution',
      'Comprehensive Runbooks & Operational Playbooks',
      'Automated PagerDuty / Datadog Alerting Baselines',
      '24/7 Engineering War-Room Support Coverage'
    ],
    durationEstimate: 'Cutover Window',
    keyArtifacts: 'Production Deployment Runbook, Canary Dashboards'
  },
  {
    step: '07',
    title: 'Improve',
    phase: 'Telemetry, FinOps & Continuous Evolution',
    description: 'Software is an evolving asset. We provide continuous observability, automated performance profiling, infrastructure cost trimming, and strategic technical iteration.',
    clientReceives: [
      'Monthly Infrastructure Cost Optimization Telemetry',
      'P99 Latency & Error Rate Trend Reports',
      'Continuous Security Vulnerability Patching',
      'Quarterly Technology Horizon Reviews'
    ],
    durationEstimate: 'Ongoing Lifecycle',
    keyArtifacts: 'Live Grafana Dashboards, Quarterly Roadmap'
  }
];

export const TECH_ECOSYSTEM: TechItem[] = [
  // Frontend
  { name: 'React 19 & Next.js', category: 'Frontend & Platforms', level: 'Core Tier', description: 'Server components, streaming SSR, and zero-bundle-size server actions.' },
  { name: 'TypeScript', category: 'Frontend & Platforms', level: 'Core Tier', description: 'Strict type safety across full frontend and backend boundaries.' },
  { name: 'Three.js & WebGL', category: 'Frontend & Platforms', level: 'Enterprise Standard', description: 'Hardware-accelerated 3D spatial experiences and interactive dashboards.' },
  { name: 'Tailwind CSS', category: 'Frontend & Platforms', level: 'Enterprise Standard', description: 'Utility-first deterministic design systems with zero CSS runtime overhead.' },
  
  // Backend & Systems
  { name: 'Go (Golang)', category: 'Systems & Backend', level: 'Core Tier', description: 'High-concurrency microservices, network proxies, and low-latency APIs.' },
  { name: 'Rust', category: 'Systems & Backend', level: 'Core Tier', description: 'Memory-safe low-level systems, high-speed serialization, and WebAssembly kernels.' },
  { name: 'Node.js & Bun', category: 'Systems & Backend', level: 'Enterprise Standard', description: 'Asynchronous event engines and rapid-scale API middleware services.' },
  { name: 'gRPC & Protobuf', category: 'Systems & Backend', level: 'Core Tier', description: 'Compact binary wire format for sub-millisecond inter-service calls.' },
  
  // AI & ML
  { name: 'Python & PyTorch', category: 'AI & Data Intelligence', level: 'Core Tier', description: 'Model training, fine-tuning, and mathematical algorithm execution.' },
  { name: 'TensorRT & ONNX', category: 'AI & Data Intelligence', level: 'Enterprise Standard', description: 'Hardware-optimized model quantization and inference acceleration.' },
  { name: 'Qdrant / Milvus', category: 'AI & Data Intelligence', level: 'Enterprise Standard', description: 'High-density vector search engines for enterprise cognitive retrieval.' },
  { name: 'HuggingFace & Transformers', category: 'AI & Data Intelligence', level: 'Core Tier', description: 'Open-weights foundation models customized for domain requirements.' },
  
  // Cloud & Distributed
  { name: 'Kubernetes & Helm', category: 'Cloud & Distributed', level: 'Core Tier', description: 'Container orchestration, self-healing nodes, and elastic scale.' },
  { name: 'Terraform & Pulumi', category: 'Cloud & Distributed', level: 'Core Tier', description: 'Declarative infrastructure as code across multi-cloud environments.' },
  { name: 'AWS & GCP Enterprise', category: 'Cloud & Distributed', level: 'Core Tier', description: 'Global cloud topologies with multi-region replication and failover.' },
  { name: 'ArgoCD (GitOps)', category: 'Cloud & Distributed', level: 'Enterprise Standard', description: 'Declarative continuous deployment tracked directly in git history.' },
  
  // Security & Data
  { name: 'Cilium & eBPF', category: 'Cybersecurity', level: 'Enterprise Standard', description: 'Kernel-level network observability, routing, and Zero-Trust policy.' },
  { name: 'HashiCorp Vault', category: 'Cybersecurity', level: 'Core Tier', description: 'Dynamic secrets management, PKI certificate authority, and encryption.' },
  { name: 'Apache Kafka', category: 'AI & Data Intelligence', level: 'Core Tier', description: 'Distributed commit log handling millions of event messages per second.' },
  { name: 'ClickHouse & Iceberg', category: 'AI & Data Intelligence', level: 'Enterprise Standard', description: 'Columnar lakehouse store delivering sub-second queries on petabytes.' }
];

export const WHY_ABC = [
  {
    title: 'Deterministic Engineering vs Guesswork',
    description: 'We do not engage in agile theatre or hand-waving estimates. Every architecture starts with rigorous mathematical modeling, strict latency budgets, and formal domain boundaries.',
    icon: 'Terminal'
  },
  {
    title: 'Zero Technical Debt Covenant',
    description: 'We enforce automated static code limits, strict linting rules, and >90% test coverage standards before any line of code enters the mainline branch.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Direct Staff Engineer Access',
    description: 'No account managers or junior liaisons. Your technical leadership interacts directly with senior staff architects who write, test, and ship your production code.',
    icon: 'Users'
  },
  {
    title: 'Cryptographic Security by Default',
    description: 'Security is not an add-on module. Every microservice, communication channel, and storage volume is built with Zero-Trust, mTLS, and automated rotation from day zero.',
    icon: 'Lock'
  },
  {
    title: 'Pure Code & Asset Ownership',
    description: 'You retain 100% intellectual property, clean Git history, Infrastructure-as-Code definitions, and comprehensive documentation with zero vendor lock-in.',
    icon: 'Key'
  },
  {
    title: 'SLA-Backed Performance Guarantees',
    description: 'We commit to measurable performance thresholds—P99 latency, throughput benchmarks, and uptime guarantees—backed by contractual covenants.',
    icon: 'Gauge'
  }
];

export const TRUST_PROOFS = [
  { label: 'Websites & Platforms Delivered', value: '10+', description: 'Engineered, deployed, and validated across modern enterprise production environments' },
  { label: 'Satisfied Enterprise Clients', value: '10+', description: 'Direct partnerships with 100% on-time delivery and post-launch technical support' },
  { label: 'Uptime Architecture Standard', value: '99.999%', description: 'Engineered for less than 5.2 minutes of unplanned downtime per year' },
  { label: 'Sub-Millisecond Latency Routing', value: '< 2.5ms', description: 'Internal service-to-service communication latency across distributed cloud nodes' }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 'amrutkiran-kshirsagar',
    name: 'Amrutkiran Kshirsagar',
    role: 'Founder & Principal Software Architect',
    education: 'MCA — Master of Computer Applications',
    degreeBadge: 'MCA (Computer Applications)',
    experienceHighlight: 'Lead Software Architect for 10+ Enterprise Web Applications & Systems',
    specialization: [
      'Full-Stack Enterprise Software Architecture',
      'High-Concurrency Distributed Web Platforms',
      'Interactive 3D WebGL & Modern Frontend Systems',
      'API Engineering, Microservices & Data Modeling'
    ],
    bio: 'Post-graduate in Computer Applications (MCA) with deep architectural expertise in full-stack engineering, reactive design systems, and high-throughput web platforms. Amrutkiran has architected, engineered, and successfully delivered over 10 mission-critical websites and enterprise platforms with 100% client satisfaction and zero architectural downtime.',
    verifiedDeliveries: '10+ High-Performance Websites & Platforms',
    happyClientsCount: '10+ Satisfied Enterprise Clients',
    metrics: [
      { label: 'Websites Delivered', value: '10+' },
      { label: 'Client Satisfaction', value: '100%' },
      { label: 'Architecture Scale', value: 'P99 < 15ms' }
    ]
  },
  {
    id: 'pratik-salunkhe',
    name: 'Pratik Salunkhe',
    role: 'Co-Founder & Lead DevOps / Cloud Systems Engineer',
    education: 'Bachelor of Engineering (B.E.) — DevOps & Cloud Infrastructure',
    degreeBadge: 'B.E. Engineering (DevOps)',
    experienceHighlight: 'Architected Resilient Cloud & DevOps Mesh for 10+ Production Deployments',
    specialization: [
      'Kubernetes Cluster Mesh & Container Orchestration',
      'Multi-Region Cloud Architecture (AWS, GCP, Bare Metal)',
      'GitOps Declarative CI/CD Automated Pipelines',
      'DevSecOps, eBPF Kernel Routing & 99.999% SLA Uptime'
    ],
    bio: 'Engineering graduate specializing in DevOps and Cloud Systems. Pratik engineers declarative cloud topologies, containerized Kubernetes meshes, automated CI/CD pipelines, and zero-trust security perimeters. He has overseen cloud orchestration and continuous delivery across all 10+ client platforms, guaranteeing resilient horizontal scalability and zero-downtime cutovers.',
    verifiedDeliveries: '10+ Enterprise Cloud Topologies Deployed',
    happyClientsCount: '10+ Happy Enterprise Organizations',
    metrics: [
      { label: 'Cloud Deployments', value: '10+' },
      { label: 'Production Uptime', value: '99.999%' },
      { label: 'Deployment Failure Rate', value: '0.0%' }
    ]
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'insight-1',
    slug: 'architecting-resilient-multi-agent-ai',
    title: 'Architecting Resilient Multi-Agent AI Systems in High-Throughput Environments',
    category: 'Artificial Intelligence',
    readTime: '7 min read',
    date: 'Oct 2024',
    abstract: 'How to prevent cascading failure loops, establish deterministic tool sandboxes, and govern token consumption when deploying autonomous AI agent swarms in production.',
    author: {
      name: 'Dr. Elena Vance',
      role: 'Principal AI Systems Architect, ABC'
    },
    keyTakeaways: [
      'Isolate agent tool execution inside ephemeral WebAssembly sandboxes to avoid side-effect corruption.',
      'Deploy deterministic supervisory models that validate intermediate step outcomes against formal schemas.',
      'Implement strict token velocity throttles to eliminate infinite reasoning loop risks.'
    ],
    content: [
      'The transition from single-prompt LLM wrappers to multi-agent autonomous swarms represents the most significant software architecture inflection point since the rise of microservices.',
      'However, running autonomous agents against production databases and external APIs introduces novel non-deterministic failure vectors. An agent given broad goals can easily enter cyclic hallucinations or consume tens of thousands of tokens without yielding valid outputs.',
      'At ABC, we enforce the Supervisor-Worker topology. In this model, worker agents have zero direct access to destructive APIs. Instead, they produce structured intent payloads that must be formally verified by a deterministic compiler before execution.',
      'By pairing this supervisory layer with ephemeral WebAssembly sandboxes, organizations achieve the cognitive flexibility of generative intelligence without sacrificing zero-defect operational stability.'
    ]
  },
  {
    id: 'insight-2',
    slug: 'from-monolith-to-event-mesh',
    title: 'From Fragile Monolith to Event-Driven Mesh: Lessons from 10M Daily Events',
    category: 'Distributed Systems',
    readTime: '9 min read',
    date: 'Sep 2024',
    abstract: 'A pragmatic dissection of the Strangler Fig pattern, schema registries, and outbox transactional patterns during high-volume enterprise core migrations.',
    author: {
      name: 'Marcus Chen',
      role: 'Staff Infrastructure Architect, ABC'
    },
    keyTakeaways: [
      'Never attempt a big-bang rewrite; decompose monoliths along strict domain boundaries using the Strangler Fig pattern.',
      'Use the Transactional Outbox Pattern to guarantee atomic database updates and event publishing.',
      'Enforce backwards-compatible Protobuf schema registries to avoid silent inter-service deserialization failures.'
    ],
    content: [
      'The classic pitfall of legacy modernization is the "Big Bang" rewrite. Enterprise teams spend eighteen months writing a brand-new system from scratch, only to discover that the legacy system evolved during that time and the new system fails to handle obscure edge cases.',
      'The only predictable engineering strategy is incremental decomposition via the Strangler Fig pattern. We intercept ingress traffic at an intelligent API gateway and selectively route individual domain endpoints to new event-driven microservices.',
      'Crucially, we employ the Transactional Outbox Pattern. When a microservice writes to its transactional database, it writes the corresponding domain event in the exact same database transaction. A lightweight change-data-capture agent (such as Debezium) then streams this event to Kafka.',
      'This guarantees zero event loss, even in the event of sudden server power failures or network partitions.'
    ]
  },
  {
    id: 'insight-3',
    slug: 'zero-trust-ebpf-networking',
    title: 'Zero-Trust Networking at the Kernel Level with eBPF and Cilium',
    category: 'Cybersecurity',
    readTime: '6 min read',
    date: 'Aug 2024',
    abstract: 'Replacing slow IP table chains and heavy proxy sidecars with kernel-level eBPF packet inspection for high-security cloud Kubernetes deployments.',
    author: {
      name: 'Soren Lindqvist',
      role: 'Director of Secure Systems, ABC'
    },
    keyTakeaways: [
      'Traditional iptables evaluation incurs O(N) latency penalties that degrade throughput in large microservice clusters.',
      'eBPF allows safe bytecode execution inside the Linux kernel, filtering packets before user-space overhead occurs.',
      'Cryptographic SPIFFE identities allow microsegmentation based on verified workload identity rather than ephemeral IP addresses.'
    ],
    content: [
      'In a modern Kubernetes cluster running hundreds of microservices, traditional IP-based firewalls break down completely. Pod IPs change dynamically across deployments, and traditional iptables rules balloon to thousands of entries, imposing measurable packet latency penalties.',
      'By leveraging Extended Berkeley Packet Filter (eBPF), we attach security inspection logic directly into Linux socket operations. The Linux kernel evaluates the security policy at the socket level, completely bypassing network stack overhead.',
      'Furthermore, by coupling eBPF with SPIRE cryptographic workload identities, we can authenticate that a packet originating from a specific memory space belongs exclusively to an authenticated service.',
      'The result is a true Zero-Trust architecture that operates with microsecond packet latency and zero reliance on static network perimeters.'
    ]
  }
];
