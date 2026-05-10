import { CardGrid } from '../components/CardGrid';
import type { CardItem } from '../types';

const items: CardItem[] = [
  { title: 'CPU Scheduler', href: 'https://axyl-casc.github.io/Scheduler-Designer/', description: 'Run different CPU scheduling algorithms interactively and view the results afterwards.' },
  { title: 'Airplane Package Scheduler', href: 'https://github.com/axyl-casc/AirplaneGraphProject?tab=readme-ov-file#readme', description: 'Effectively calculates possible routes for airplanes to deliver packages with a version made in Javascript and Haskell.' },
  { title: 'Daily Training Game', href: 'https://axyl-casc.github.io/TrainingGame/', description: 'A daily to-do list app I use for language learning and tracking whatever currently interests me.' },
  { title: 'GoGuesser', href: 'https://goguesser.onrender.com/', description: 'Guess the next best move in a Go game.' },
  { title: 'Dice Simulator', href: 'https://axyl-casc.github.io/Dice-Simulator/', description: 'Generate probability distribution tables from custom sets of dice.' },
  { title: 'Go Library', href: 'https://github.com/axyl-casc/GoLibrary', description: 'Offline-first bookshelf for Go materials, with search, bookmarks, and resume tracking across PDF/SGF/HTML files.' }
];

export function OtherProjectsPage() {
  return (
    <main className="site-main flex-1">
      <CardGrid items={items} grid />
    </main>
  );
}
