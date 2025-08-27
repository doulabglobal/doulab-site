import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    whitepaperSidebar: [
        {
            type: 'category',
            label: 'Research & Resources',
            collapsed: false,
            items: [
                'research-resources/distributed-federated-agentic-ai',
                // Add more whitepapers here as needed
            ],
        },
    ],
};

export default sidebars;
