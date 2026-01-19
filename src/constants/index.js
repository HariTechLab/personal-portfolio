import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Backend-focused Software Engineer with 4.5 years of experience specializing in Java 17/21, Spring Boot 3.3, and enterprise integration. Expert in workflow automation using Camunda 7 and JBPM/Drools, with proven success in building scalable microservices architectures and event-driven systems using Kafka and ActiveMQ.`;

export const ABOUT_TEXT = `Backend-focused Software Engineer with 4.5 years of experience in building enterprise-grade applications and microservices architectures. Specialized in Java 17/21 ecosystem with deep expertise in Spring Boot 3.3, workflow automation (Camunda 7, JBPM/Drools), and event-driven architectures using Kafka and ActiveMQ. Proven track record in leading technical initiatives from concept to production, implementing scalable solutions for hyperautomation platforms, BPM systems, and IoT integrations. Strong advocate for clean architecture, test-driven development, and continuous improvement in software delivery practices.`;

export const SUCCESS_COUNTERS = [
  {
    title: "Years of Experience",
    counts: 4,
  },
  {
    title: "Professional Projects",
    counts: 5,
  },
  {
    title: "Technologies Mastered",
    counts: 20,
  },
];

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Associate Technical Lead",
    company: "Bautomate",
    description: `Leading technical initiatives for Bautomate's AI-powered HyperAutomation Platform. Architecting and implementing workflow automation solutions using Camunda 7 and Spring Boot 3.3. Driving integration of AI capabilities with business process automation to deliver intelligent automation solutions. Mentoring development team and establishing best practices for microservices architecture and event-driven systems.`,
    technologies: [
      "Java 17/21",
      "Spring Boot 3.3",
      "Camunda 7",
      "Microservices",
      "Kafka",
      "AI Integration",
      "REST APIs",
      "Docker",
      "AWS",
    ],
  },
  {
    year: "Jan 2024 - Dec 2024",
    role: "Software Engineer",
    company: "Innomaint - Vijay Global Services",
    description: `Developed comprehensive BPM solutions using JBPM/Drools and integrated IoT device management platforms. Built scalable observability dashboards for real-time monitoring and analytics. Led CitiBank's Overdraft Application Modernization project, migrating legacy systems to modern microservices architecture. Implemented event-driven architectures using Kafka and ActiveMQ for high-throughput data processing.`,
    technologies: [
      "Java 17",
      "Spring Boot",
      "JBPM/Drools",
      "Camunda",
      "Kafka",
      "ActiveMQ",
      "IoT",
      "PostgreSQL",
      "MongoDB",
      "Keycloak",
    ],
  },
  {
    year: "Sep 2021 - Dec 2023",
    role: "Software Engineer",
    company: "Zaga Open Source Private Limited",
    description: `Designed and developed microservices-based applications using Java frameworks including Spring Boot and Quarkus. Built scalable RESTful APIs and integrated with various databases. Implemented event-driven architectures and message brokers for asynchronous communication. Collaborated with cross-functional teams to deliver full-stack solutions using React.js and modern frontend technologies.`,
    technologies: [
      "Java",
      "Spring Boot",
      "Quarkus",
      "Kafka",
      "React.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Apache Camel",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Bautomate - AI HyperAutomation Platform",
    image: project1,
    description:
      "Enterprise-grade hyperautomation platform integrating AI capabilities with business process automation. Built using Camunda 7 for workflow orchestration, Spring Boot 3.3 for microservices, and event-driven architecture for scalable automation solutions.",
    technologies: ["Java 21", "Spring Boot 3.3", "Camunda 7", "Kafka", "AI/ML", "Microservices", "Docker", "AWS"],
  },
  {
    title: "InnoMaint BPM - Business Process Management",
    image: project2,
    description:
      "Comprehensive BPM solution built with JBPM/Drools for rule-based workflow automation. Implemented complex business rules engine, process orchestration, and integration with enterprise systems. Achieved 40% reduction in manual processing time.",
    technologies: ["Java 17", "JBPM", "Drools", "Spring Boot", "Camunda", "PostgreSQL", "REST APIs"],
  },
  {
    title: "InnoMaint IoT - Device Management Platform",
    image: project3,
    description:
      "Scalable IoT platform for real-time device monitoring and management. Implemented MQTT protocol for device communication, event-driven architecture using Kafka for data ingestion, and real-time analytics dashboard for monitoring thousands of connected devices.",
    technologies: ["Java 17", "Spring Boot", "Kafka", "MQTT", "MongoDB", "Redis", "WebSockets", "React.js"],
  },
  {
    title: "Observability Dashboard - Monitoring & Analytics",
    image: project4,
    description:
      "Enterprise observability solution for real-time system monitoring and analytics. Built distributed tracing, metrics collection, and log aggregation system. Integrated with ELK stack and Prometheus for comprehensive monitoring of microservices architecture.",
    technologies: ["Java", "Spring Boot", "ELK Stack", "Prometheus", "Grafana", "Kafka", "Time Series DB"],
  },
  {
    title: "CitiBank Overdraft Modernization",
    image: project1,
    description:
      "Led modernization of legacy overdraft application for CitiBank. Migrated monolithic architecture to microservices, implemented event-driven patterns using ActiveMQ and Kafka, and integrated with core banking systems. Improved transaction processing speed by 60%.",
    technologies: ["Java 17", "Spring Boot", "ActiveMQ", "Kafka", "Oracle DB", "Keycloak", "REST APIs", "Docker"],
  },
];

export const CONTACT = {
  email: "hariharan212k@gmail.com",
};
