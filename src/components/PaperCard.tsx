import { ArxivPaper } from '@/lib/arxiv';
import { FileDown, Calendar, User, Tag } from 'lucide-react';

interface PaperCardProps {
  paper: ArxivPaper;
}

export function PaperCard({ paper }: PaperCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDoiUrl = (paper: ArxivPaper) => {
    if (paper.doi) {
      return `https://doi.org/${paper.doi}`;
    }
    // If no DOI is available, use the arXiv abstract page
    return paper.id;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <a
        href={getDoiUrl(paper)}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-blue-600 transition-colors"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {paper.title}
        </h3>
      </a>
      
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <User className="w-4 h-4 mr-1" />
        <span>{paper.authors.join(', ')}</span>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Calendar className="w-4 h-4 mr-1" />
        <span>Published: {formatDate(paper.published)}</span>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Tag className="w-4 h-4 mr-1" />
        <span>{paper.primary_category}</span>
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-3">
        {paper.abstract}
      </p>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {paper.categories.slice(0, 3).map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {category}
            </span>
          ))}
        </div>
        
        {paper.pdf_url && (
          <a
            href={paper.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
} 