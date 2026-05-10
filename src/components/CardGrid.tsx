import type { CardItem } from '../types';

export function CardGrid({ items, grid = false }: { items: CardItem[]; grid?: boolean }) {
  return (
    <div className={grid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-6'}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className="project-card">
          <h3 className="font-semibold text-blue-600">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </a>
      ))}
    </div>
  );
}
