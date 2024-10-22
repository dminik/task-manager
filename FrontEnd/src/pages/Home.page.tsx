import TaskManager from '@/components/TaskManager/TaskManager';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Welcome />
      <TaskManager />

    </>
  );
}
