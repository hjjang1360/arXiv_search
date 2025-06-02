export interface ArxivPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  published: string;
  updated: string;
  pdf_url: string;
  primary_category: string;
  categories: string[];
  doi?: string;
  comment?: string;
  journal_ref?: string;
}

export interface ArxivResponse {
  feed: {
    xmlns: string;
    xmlns_arxiv: string;
    link: Array<{
      href: string;
      rel: string;
      type?: string;
    }>;
    title: string;
    id: string;
    updated: string;
    entry: Array<{
      id: string;
      updated: string;
      published: string;
      title: string;
      summary: string;
      author: Array<{
        name: string;
      }>;
      link: Array<{
        href: string;
        rel: string;
        type?: string;
      }>;
      primary_category: {
        term: string;
        scheme: string;
      };
      category: Array<{
        term: string;
        scheme: string;
      }>;
      arxiv_doi?: string;
      arxiv_comment?: string;
      arxiv_journal_ref?: string;
    }>;
  };
}

export async function searchArxiv(query: string, start = 0, maxResults = 10): Promise<ArxivPaper[]> {
  const baseUrl = 'http://export.arxiv.org/api/query';
  const searchQuery = `search_query=all:${encodeURIComponent(query)}&start=${start}&max_results=${maxResults}`;
  
  try {
    const response = await fetch(`${baseUrl}?${searchQuery}`);
    const xmlText = await response.text();
    
    // Parse XML to JSON
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    // Extract entries
    const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
    
    return entries.map(entry => {
      const id = entry.getElementsByTagName('id')[0]?.textContent || '';
      const title = entry.getElementsByTagName('title')[0]?.textContent || '';
      const authors = Array.from(entry.getElementsByTagName('author')).map(author => 
        author.getElementsByTagName('name')[0]?.textContent || ''
      );
      const abstract = entry.getElementsByTagName('summary')[0]?.textContent || '';
      const published = entry.getElementsByTagName('published')[0]?.textContent || '';
      const updated = entry.getElementsByTagName('updated')[0]?.textContent || '';
      
      // Get PDF URL from links
      const links = Array.from(entry.getElementsByTagName('link'));
      const pdfLink = links.find(link => link.getAttribute('title') === 'pdf');
      const pdf_url = pdfLink?.getAttribute('href') || '';
      
      const primary_category = entry.getElementsByTagName('arxiv:primary_category')[0]?.getAttribute('term') || '';
      const categories = Array.from(entry.getElementsByTagName('category')).map(cat => 
        cat.getAttribute('term') || ''
      );
      
      const doi = entry.getElementsByTagName('arxiv:doi')[0]?.textContent;
      const comment = entry.getElementsByTagName('arxiv:comment')[0]?.textContent;
      const journal_ref = entry.getElementsByTagName('arxiv:journal_ref')[0]?.textContent;
      
      return {
        id,
        title,
        authors,
        abstract,
        published,
        updated,
        pdf_url,
        primary_category,
        categories,
        doi,
        comment,
        journal_ref
      };
    });
  } catch (error) {
    console.error('Error fetching from arXiv:', error);
    return [];
  }
} 