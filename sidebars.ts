import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    whitepaperSidebar: [
        {
            type: 'category',
            label: 'Research & Resources',
            collapsed: false,
            items: [
                'research-resources/distributed-federated-agentic-ai',
                'research-resources/innovation-lab-guide-q2-2024-en',
                'releases', // New entry for Website Releases
            ],
        },
    ],
};

export default sidebars;
