// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A selected collection of my recent projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "A collection of modules I taught at the University of Cambridge and the University of Nottingham.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "For the full list, please see my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A detailed academic and professional CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-first-day-as-a-research-associate-postdoc-at-the-university-of-cambridge",
          title: 'First day as a Research Associate (Postdoc) at the University of Cambridge ✨....',
          description: "",
          section: "News",},{id: "news-invited-to-attend-the-2019-metrology-for-industry4-0-amp-amp-ot-naples-italy",
          title: 'Invited to attend the 2019 Metrology for Industry4.0&amp;amp;amp;OT, Naples, Italy.',
          description: "",
          section: "News",},{id: "news-my-demo-on-iot-enabled-supply-chain-automation-was-exhibited-at-the-advanced-engineering-birmingham-2019",
          title: 'My demo on IoT-Enabled Supply Chain Automation was exhibited at the Advanced Engineering,...',
          description: "",
          section: "News",},{id: "news-my-paper-on-metamorphic-relations-for-enhancing-classifications-was-accepted-to-publish-in-the-journal-of-systems-and-software",
          title: 'My paper on Metamorphic Relations for Enhancing Classifications was accepted to publish in...',
          description: "",
          section: "News",},{id: "news-as-part-of-the-epsrc-connected-everything-network-i-attended-digital-manufacturing-week-2021-liverpool-uk",
          title: 'As part of the EPSRC Connected Everything Network, I attended Digital Manufacturing Week...',
          description: "",
          section: "News",},{id: "news-my-paper-on-unified-recognition-framework-was-accepted-to-publish-in-compsac-22-torino-italy-online-due-to-covid-19",
          title: 'My paper on Unified Recognition Framework was accepted to publish in COMPSAC’22, Torino,...',
          description: "",
          section: "News",},{id: "news-my-demo-on-collaborative-logistics-were-exhibited-at-the-aiuk-2023-qeii-centre-london",
          title: 'My demo on Collaborative Logistics were exhibited at the AIUK 2023, QEII Centre,...',
          description: "",
          section: "News",},{id: "news-our-demo-and-trip-to-aiuk-2023-was-featured-in-the-ifm-review-issue-14",
          title: 'Our demo and trip to AIUK 2023 was featured in the IfM Review...',
          description: "",
          section: "News",},{id: "news-my-demo-on-knowledge-graph-and-llm-enabled-critical-mineral-visibility-were-exhibited-at-the-aiuk-2024-qeii-centre-london",
          title: 'My demo on Knowledge Graph and LLM-enabled Critical Mineral Visibility were exhibited at...',
          description: "",
          section: "News",},{id: "news-my-paper-on-mateverse-discovery-framework-was-accepted-to-publish-in-compsac-24-osaka-japan",
          title: 'My paper on Mateverse Discovery Framework was accepted to publish in COMPSAC’24, Osaka,...',
          description: "",
          section: "News",},{id: "news-my-position-paper-on-multi-agent-systems-and-foundation-models-enable-autonomous-supply-chains-was-accepted-to-publish-in-incom-2024",
          title: 'My position paper on multi-agent systems and foundation models enable autonomous supply chains...',
          description: "",
          section: "News",},{id: "news-my-paper-on-the-multi-agent-autonomous-supply-chain-was-accepted-to-publish-in-the-cii",
          title: 'My paper on the Multi-Agent Autonomous Supply Chain was accepted to publish in...',
          description: "",
          section: "News",},{id: "news-delivered-the-1nd-supply-chain-and-logistics-data-challenge-scldc-24-at-incom-2024-vienna-austria",
          title: 'Delivered the 1nd Supply Chain and Logistics Data Challenge (SCLDC’24) at INCOM 2024,...',
          description: "",
          section: "News",},{id: "news-organised-the-ai-in-supply-chain-session-in-incom2024-vienna-austria",
          title: 'Organised the AI in Supply Chain session in INCOM2024, Vienna, Austria.',
          description: "",
          section: "News",},{id: "news-my-paper-on-conceptualising-autonomous-supply-chain-was-accepted-to-publish-in-the-jiii",
          title: 'My paper on Conceptualising Autonomous Supply Chain was accepted to publish in the...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-2024-ifm-postdoctoral-award-for-excellence-in-research",
          title: 'I was awarded the 2024 IfM Postdoctoral Award for Excellence in Research 🎉✨...',
          description: "",
          section: "News",},{id: "news-pormotion-to-senior-research-associate-confirmed-effective-from-1-dec-2024",
          title: 'Pormotion to Senior Research Associate confirmed, effective from 1 Dec 2024 🎊.',
          description: "",
          section: "News",},{id: "news-my-paper-on-multi-agent-collaborative-logistics-was-accepted-to-publish-in-the-jiii",
          title: 'My paper on Multi-Agent Collaborative Logistics was accepted to publish in the JIII....',
          description: "",
          section: "News",},{id: "news-our-paper-on-synethic-tabular-data-generation-will-be-presented-in-iclr-2025-synthdata-workshop",
          title: 'Our paper on synethic tabular data generation will be presented in ICLR 2025...',
          description: "",
          section: "News",},{id: "news-launched-the-supply-chain-data-hub-a-community-website-for-supply-chain-ai-research",
          title: 'Launched the Supply Chain Data Hub, a community website for supply chain AI...',
          description: "",
          section: "News",},{id: "news-delivered-the-2nd-supply-chain-and-logistics-data-challenge-scldc-25-at-mim-2025-trondheim-norway",
          title: 'Delivered the 2nd Supply Chain and Logistics Data Challenge (SCLDC’25) at MIM 2025,...',
          description: "",
          section: "News",},{id: "news-organised-the-ai-in-supply-chain-session-in-mim2025-trondheim-norway",
          title: 'Organised the AI in Supply Chain session in MIM2025, Trondheim, Norway.',
          description: "",
          section: "News",},{id: "news-attended-a-healthcare-workshop-in-norwich-with-data-scientists-gps-and-clinicians",
          title: 'Attended a Healthcare Workshop in Norwich with Data Scientists, GPs, and Clinicians',
          description: "",
          section: "News",},{id: "news-our-syndelay-dataset-and-accompanying-paper-are-now-available",
          title: 'Our SynDelay dataset and accompanying paper are now available!',
          description: "",
          section: "News",},{id: "news-our-paper-on-llms-and-knowledge-graphs-for-enhancing-supply-chain-visibility-was-accepted-to-ijpr",
          title: 'Our paper on LLMs and Knowledge Graphs for enhancing Supply Chain Visibility was...',
          description: "",
          section: "News",},{id: "news-started-as-a-senior-machine-learning-engineer-at-exiger-working-on-agentic-supply-chain-mapping",
          title: 'Started as a Senior Machine Learning Engineer at Exiger, working on agentic supply...',
          description: "",
          section: "News",},{id: "news-our-paper-on-emotion-transitions-in-agent-negotiation-was-accepted-to-aamas-2026",
          title: 'Our paper on Emotion Transitions in Agent Negotiation was accepted to AAMAS 2026....',
          description: "",
          section: "News",},{id: "news-started-as-a-visiting-researcher-at-the-centre-for-human-inspired-artificial-intelligence-chia-university-of-cambridge",
          title: 'Started as a Visiting Researcher at the Centre for Human-Inspired Artificial Intelligence (CHIA),...',
          description: "",
          section: "News",},{id: "news-our-paper-on-transfer-learning-and-local-search-for-vehicle-routing-was-published-by-computers-amp-amp-operations-research",
          title: 'Our paper on Transfer Learning and Local Search for Vehicle Routing was published...',
          description: "",
          section: "News",},{id: "news-our-paper-on-emotion-aware-multi-agent-system-for-high-stakes-negotiation-scenarios-was-accepted-to-acl-2026",
          title: 'Our paper on Emotion-Aware Multi-Agent System for High-Stakes Negotiation Scenarios was accepted to...',
          description: "",
          section: "News",},{id: "projects-autonomous-supply-chains",
          title: 'Autonomous Supply Chains',
          description: "Creating multi-agent supply chain systems that can manage themselves with minimal human intervention.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_asc/";
            },},{id: "projects-critical-minerals-visibility",
          title: 'Critical Minerals Visibility',
          description: "Enhancing critical minerals visibility by a networked collaboration environment with knowledge-aggregation-enabled LLM-powered agents and knowledge graphs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_critical_minerals/";
            },},{id: "projects-multi-agent-collaborative-logistics",
          title: 'Multi-Agent Collaborative Logistics',
          description: "Facilitating large-scale carrier collaboration via multi-agent systems and deep reinforcement learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_agentchat/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/limingxu", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=d2b7PaYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
