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
          description: "A more detailed CV is available by clicking the right PDF icon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-first-day-as-a-research-associate-postdoc-at-the-university-of-cambridge",
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
          section: "News",},{id: "news-delivered-the-2nd-supply-chain-and-logistics-data-challenge-scldc-25-at-mim-2025-trondheim-norway",
          title: 'Delivered the 2nd Supply Chain and Logistics Data Challenge (SCLDC’25) at MIM 2025,...',
          description: "",
          section: "News",},{id: "news-organised-the-ai-in-supply-chain-session-in-mim2025-trondheim-norway",
          title: 'Organised the AI in Supply Chain session in MIM2025, Trondheim, Norway.',
          description: "",
          section: "News",},{id: "news-attended-a-healthcare-workshop-in-norwich-with-data-scientists-gps-and-clinicians",
          title: 'Attended a Healthcare Workshop in Norwich with Data Scientists, GPs, and Clinicians',
          description: "",
          section: "News",},{id: "news-launched-the-supply-chain-data-hub-a-community-website-for-supply-chain-ai-research",
          title: 'Launched the Supply Chain Data Hub, a community website for supply chain AI...',
          description: "",
          section: "News",},{id: "projects-autonomous-supply-chains",
          title: 'Autonomous Supply Chains',
          description: "Creating multi-agent supply chain systems that can self-manage themselves with minimal human intervention.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_asc/";
            },},{id: "projects-critical-minerals-visibility",
          title: 'Critical Minerals Visibility',
          description: "Enhancing critical minerals visibility by a netwroked collaboration environment with knowledge aggregation enabled LLM-powered agents and knowledge graphs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_critical_minerals/";
            },},{id: "projects-multi-agent-collaborative-logistics",
          title: 'Multi-Agent Collaborative Logistics',
          description: "Facilitating large-scale carrier collaboration via multi-agent system and deep reinforcement learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_agentchat/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%6C%69%6D.%75%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
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
