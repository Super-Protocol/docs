# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the documentation website for Super Protocol - a confidential cloud and marketplace for Web3 and AI. The site is built using Docusaurus 2 and contains comprehensive documentation across multiple sections: Marketplace, Fundamentals, CLI, Developers, Whitepaper, and Data-for-AI.

## Common Commands

### Development
- `yarn` or `yarn install` - Install dependencies
- `yarn start` - Start local development server with live reload
- `yarn build` - Build static site for production
- `yarn serve` - Serve the built site locally
- `yarn clear` - Clear Docusaurus cache

### Documentation Generation
- `yarn contracts:gen-docs` - Generate contract documentation from Solidity files
- `yarn write-translations` - Generate translation files
- `yarn write-heading-ids` - Generate heading IDs for documentation

### Other Commands
- `yarn docusaurus <command>` - Direct access to Docusaurus CLI
- `yarn deploy` - Deploy to hosting service
- `yarn swizzle` - Customize Docusaurus components

## Architecture & Structure

### Multi-Instance Documentation Setup
The site uses Docusaurus plugins to create separate documentation instances:
- **Marketplace** (`/marketplace`) - End-user marketplace documentation
- **Fundamentals** (`/fundamentals`) - Core concepts and architecture
- **CLI** (`/cli`) - Command-line interface documentation  
- **Developers** (`/developers`) - Developer guides and tutorials (main docs preset)
- **Whitepaper** (`/whitepaper`) - Technical whitepaper and architecture
- **Data-for-AI** (`/data-for-ai`) - AI-specific documentation with custom sidebar

### Key Directories
- `docs/` - Contains all documentation markdown files organized by section
- `src/` - Custom React components and styling
  - `src/theme/` - Swizzled Docusaurus components for customization
  - `src/css/custom.css` - Global styles
- `static/` - Static assets (images, fonts, etc.)
- `sources/contracts/` - Contract documentation generation tools

### Content Organization
Each documentation section follows a structured approach:
- Index pages provide section overviews and navigation
- Content is organized hierarchically with clear cross-references
- Images are stored in section-specific `images/` folders
- Mathematical formulas use KaTeX rendering

### Custom Components
- **Highlight** - Custom highlighting component
- **Imager** - Custom image handling component  
- **Admonition** - Custom alert/warning boxes
- Various swizzled components for styling consistency

### Technical Features
- **Search** - Local search using `@easyops-cn/docusaurus-search-local`
- **Math Support** - KaTeX for mathematical formulas
- **Client Redirects** - Automatic URL redirections
- **Dark/Light Theme** - Custom theme switching
- **Responsive Design** - Mobile-friendly layouts

## Content Guidelines

When working with documentation:
- Use the existing markdown structure and frontmatter format
- Follow the established cross-referencing pattern with custom anchor tags
- Place images in appropriate `images/` subdirectories
- Maintain consistency with existing terminology (offers, orders, providers, TEE, etc.)
- Use KaTeX syntax for mathematical formulas where needed
- Respect the hierarchical organization of content within each section

## Build Process

The CI/CD pipeline runs `yarn build` on pull requests to verify the site builds successfully. The build process includes:
1. Static site generation from markdown files
2. Processing of mathematical formulas with KaTeX
3. Search index generation
4. Asset optimization and bundling