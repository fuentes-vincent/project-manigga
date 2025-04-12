import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/sidebar';
import TeamHeader from './TeamHeader';
import TeamFilters from './TeamFilters';
import ViewToggle from './ViewToggle';
import TeamSort from './TeamSort';
import TeamCard from './TeamCard';
import Pagination from './Pagination';
import { teamData } from '@/mockData/teamData';

const TeamPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 6;
  const totalPages = Math.ceil(teamData.teams.length / teamsPerPage);

  // Filter and sort teams
  const filteredAndSortedTeams = React.useMemo(() => {
    let result = [...teamData.teams];
    
    // Apply filter
    if (activeFilter === 'my') {
      // In a real app, this would filter based on user membership
      result = result.filter((_, index) => index % 2 === 0); // Just for demo
    } else if (activeFilter === 'archived') {
      // In a real app, this would show archived teams
      result = result.filter((_, index) => index % 3 === 0); // Just for demo
    }
    
    // Apply sort
    result.sort((a, b) => {
      switch (sortOption) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'projects':
          return b.projects - a.projects;
        case 'lastActive':
          // Simple sort by time string - in a real app this would be timestamp-based
          return a.lastActive.localeCompare(b.lastActive);
        default:
          return 0;
      }
    });
    
    return result;
  }, [activeFilter, sortOption]);

  // Get current page teams
  const currentTeams = filteredAndSortedTeams.slice(
    (currentPage - 1) * teamsPerPage,
    currentPage * teamsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  // Handle create team
  const handleCreateTeam = () => {
    // In a real app, this would open a modal or navigate to team creation form
    alert('Create new team functionality would go here!');
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, sortOption]);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6">
        {/* Header */}
        <TeamHeader onCreateTeam={handleCreateTeam} />
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <TeamFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
          
          <div className="flex items-center gap-4">
            <ViewToggle 
              viewMode={viewMode} 
              onViewChange={setViewMode} 
            />
            
            <div className="relative">
              <TeamSort 
                sortOption={sortOption} 
                onSortChange={setSortOption} 
              />
            </div>
          </div>
        </div>
        
        {/* Team Grid/List */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6 mb-8`}>
          {currentTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
        
        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TeamPage;
