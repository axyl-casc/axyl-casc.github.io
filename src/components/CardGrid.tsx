import type { CSSProperties } from 'react';
import type { CardItem } from '../types';
import { getTagHue } from '../utils/tagColors';

export function CardGrid({ items, grid = false }: { items: CardItem[]; grid?: boolean }) {
  return (
    <div className={grid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-6'}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition-shadow duration-200">
          <div className="card-body">
            <h3 className="card-title text-primary">{item.title}</h3>
            <p className="text-base-content/80">{item.description}</p>
            {item.tags && item.tags.length > 0 && (
              <div className="card-actions pt-2">
                {item.tags.map((tag) => (
                  <div key={tag} className="badge tag-badge" style={{ '--tag-hue': getTagHue(tag) } as CSSProperties}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
