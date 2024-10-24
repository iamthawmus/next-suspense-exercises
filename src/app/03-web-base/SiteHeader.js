import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/web-base-helpers';

export const cacheGetNavLinks = React.cache(
  async () => {
  const data = await getNavLinks();
  return data;
  }
);

function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <ol className="header-nav-links">
          <React.Suspense>
            <SiteHeaderLinks/>
          </React.Suspense>
        </ol>
      </nav>
    </header>
  );
}

async function SiteHeaderLinks() {
  let navLinks = await cacheGetNavLinks();

  // Only show the first 4 links in the header.
  navLinks = navLinks.slice(0, 4);
  return (
    navLinks.map(
      ({ slug, label, href, type }) => (
        <li key={slug}>
          <Link
            href={href}
            className={`header-nav-link ${type}`}
          >
            {label}
          </Link>
        </li>
      )
    )
  );
}

export default SiteHeader;
