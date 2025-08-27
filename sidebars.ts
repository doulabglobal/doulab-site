import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    whitepaperSidebar: [
        {
            type: 'category',
            label: 'Research & Resources',
            collapsed: false,
            items: [
                'research-resources/distributed-federated-agentic-ai',
                'releases', // New entry for Website Releases
            ],
        },
    ],
};

export default sidebars;
