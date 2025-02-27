function getConfig() {
    return {
        content: [
            {
                id: "introduction",
                title: "Introduction",
                description: "Welcome to the BunnyFunder User Manual. This guide will help you get started with installing, configuring, and using the BunnyFunder framework."
            },
            {
                id: "installation",
                title: "Installation",
                subsections: [
                    {
                        id: "installation-requirements",
                        title: "Requirements",
                        description: "<ul><li>Node.js (version 14 or higher)</li><li>Git</li><li>Internet connection</li></ul>"
                    },
                    {
                        id: "installation-steps",
                        title: "Steps",
                        description: "<ol><li>Clone the repository: <code>git clone https://github.com/bunnyfunder-framework</code></li><li>Install the dependencies: <code>npm install</code></li><li>Run the setup script: <code>npm run setup</code></li></ol>"
                    }
                ]
            },
            {
                id: "configuration",
                title: "Configuration",
                subsections: [
                    {
                        id: "configuration-settings",
                        title: "Settings",
                        description: "<ul><li>Database connection</li><li>API keys</li><li>Logging levels</li></ul>"
                    },
                    {
                        id: "configuration-examples",
                        title: "Examples",
                        description: "Example configuration files are provided in the <code>config/</code> directory."
                    }
                ]
            },
            {
                id: "usage",
                title: "Usage",
                subsections: [
                    {
                        id: "usage-basic",
                        title: "Basic Usage",
                        description: "Run the following command to start the application: <code>npm start</code>"
                    },
                    {
                        id: "usage-advanced",
                        title: "Advanced Usage",
                        description: "<ul><li>Custom strategy generation</li><li>Logging verbosity control</li></ul>"
                    }
                ]
            },
            {
                id: "troubleshooting",
                title: "Troubleshooting",
                description: "Common issues and their solutions go here..."
            },
            {
                id: "faq",
                title: "FAQ",
                description: "Frequently asked questions go here..."
            },
            {
                id: "support",
                title: "Support",
                description: "Contact support at <a href='mailto:support@bunnyfunder.eth'>support@bunnyfunder.eth</a>."
            }
        ]
    };
}
