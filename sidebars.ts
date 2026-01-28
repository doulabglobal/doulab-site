import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    whitepaperSidebar: [
        {
            type: 'category',
            label: 'Research & Resources',
            collapsed: false,
            items: [
                'research-resources/distributed-federated-agentic-ai',
                {
                    type: 'category',
                    label: 'Innovation Lab Guide',
                    link: {
                        type: 'doc',
                        id: 'research-resources/innovation-lab-guide/index',
                    },
                    items: [
                        'research-resources/innovation-lab-guide/01-executive-summary',
                        'research-resources/innovation-lab-guide/02-how-to-use-this-guide',
                        'research-resources/innovation-lab-guide/03-core-logic-one-page',
                        'research-resources/innovation-lab-guide/04-foundations-innovation',
                        'research-resources/innovation-lab-guide/05-the-innovation-lab',
                        'research-resources/innovation-lab-guide/06-mcf-operating-loop',
                        'research-resources/innovation-lab-guide/07-imm-maturity',
                        'research-resources/innovation-lab-guide/08-vilf-redlab',
                        'research-resources/innovation-lab-guide/09-foresight-vigia-futura',
                        'research-resources/innovation-lab-guide/10-conclusion',
                        'research-resources/innovation-lab-guide/11-references',
                    ],
                },
                'releases', // New entry for Website Releases
            ],
        },
    ],
};

export default sidebars;
