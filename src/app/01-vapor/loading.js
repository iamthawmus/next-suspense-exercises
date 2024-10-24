import React from 'react';
import {range } from '@/utils';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';

function VaporExercise() {

  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p>
          <span className="num-of-games">
            {'#'}
          </span>{' '}
          games in library
        </p>
      </header>
      <div className="game-grid">
        {range(12).map((game) => (
          <LibraryGameCardSkeleton />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
