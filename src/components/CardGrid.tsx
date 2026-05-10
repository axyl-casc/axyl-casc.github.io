import type { CSSProperties } from 'react';
import type { CardItem } from '../types';
import { getTagHue } from '../utils/tagColors';

export function CardGrid({
  items,
  grid = false,
  cardClassName = ''
}: {
  items: CardItem[];
  grid?: boolean;
  cardClassName?: string;
}) {
  return (
    <div className={grid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-6'}>
      {items.map((item) => (
        <div key={item.href} className={`card content-card transition-all duration-200 ${cardClassName}`.trim()}>
          <div className="card-body">
            <h3 className="card-title text-primary">
              <a href={item.href} className="hover:opacity-80 transition-opacity">
                {item.title}
              </a>
            </h3>
            <p className="text-base-content/80">{item.description}</p>
            {item.tags && item.tags.length > 0 && (
              <div className="card-actions pt-2">
                {item.tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                    className="badge tag-badge hover:opacity-80 transition-opacity"
                    style={{ '--tag-hue': getTagHue(tag) } as CSSProperties}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
