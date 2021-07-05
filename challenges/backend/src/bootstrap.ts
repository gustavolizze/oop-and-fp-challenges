import { main } from './main';
import throng from 'throng';

throng({ start: main, workers: 1 });
