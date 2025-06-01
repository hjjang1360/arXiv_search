# PaperAI - Academic Paper Search & Management Platform

PaperAI is a comprehensive platform designed to integrate and collect academic paper metadata from various databases (arXiv, DBpia, KCI, Google Scholar). It enables efficient paper search, direct PDF downloads, and personalized search capabilities for researchers and academics.

## Target Users

- Graduate students
- Researchers
- Professors
- Industry researchers
- Library staff

## Core Features

### Search & Discovery
- 🔍 **Integrated Search**: Unified search across multiple academic databases
- 📚 **Multi-Database Support**: Access papers from arXiv, DBpia, KCI, and Google Scholar
- 🎯 **Advanced Filtering**: Filter by year, author, category, and more
- 📝 **Keyword Autocomplete**: Smart suggestions for search queries
- 🔖 **Bookmarking**: Save and organize papers for later reference

### Paper Management
- 📄 **PDF Access**: Direct download of available papers
- 🌐 **DOI Integration**: Quick access to paper details and citations
- 📋 **Metadata Display**: Comprehensive paper information including:
  - Title and authors
  - Publication date
  - Categories and tags
  - Abstract
  - Citation information

### User Experience
- 📱 **Responsive Design**: Optimized for all devices
- 🎨 **Modern UI**: Clean interface built with Tailwind CSS
- ⚡ **Fast Response**: Optimized search response speed
- 🔄 **Real-time Updates**: Instant search results

## Tech Stack

### Frontend
- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons
- React Hooks

### APIs & Integration
- arXiv API for paper search
- DOI API for paper metadata
- (Planned) DBpia API integration
- (Planned) KCI API integration
- (Planned) Google Scholar integration

## Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/paperai.git
   cd paperai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   ├── search/         # Search page
│   ├── about/          # About page
│   └── contact/        # Contact page
├── components/         # React components
│   ├── Navigation.tsx  # Navigation bar
│   └── PaperCard.tsx   # Paper display card
└── lib/               # Utility functions
    └── arxiv.ts       # arXiv API integration
```

## Current Implementation Status

### Completed Features
- Basic arXiv paper search integration
- Paper metadata display
- PDF download functionality
- DOI link integration
- Responsive UI design
- Basic search interface

### Planned Features
- Multi-database integration (DBpia, KCI, Google Scholar)
- Advanced filtering options
- User authentication system
- Bookmarking functionality
- Search history
- Multi-language support
- Advanced search analytics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
