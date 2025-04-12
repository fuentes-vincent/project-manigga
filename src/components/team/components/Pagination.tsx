import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: number[] = [];
    // Always include page 1
    pages.push(1);
    
    // Add current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
    
    // Always include last page if there is more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    // Sort pages
    pages.sort((a, b) => a - b);
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Showing {currentPage}-{Math.min(currentPage * 6, totalPages * 6)} of {totalPages * 6} teams
      </div>
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {pageNumbers.map((page, index) => {
          // If there's a gap, add an ellipsis
          if (index > 0 && page > pageNumbers[index - 1] + 1) {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            );
          }
          
          return (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
              className={cn(
                "h-8 w-8",
                page === currentPage 
                  ? "bg-blue-500 hover:bg-blue-600 text-white" 
                  : "text-gray-700 dark:text-gray-300"
              )}
            >
              {page}
            </Button>
          );
        })}
        
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
