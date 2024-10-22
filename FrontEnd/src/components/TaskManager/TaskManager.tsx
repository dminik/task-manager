import { useState, useEffect } from 'react';
import { Container, Title, Button, List, ListItem } from '@mantine/core';

interface Task {
  id: number;
  name: string;
  status: string;
}

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <Container>
      <Title order={1}>Task Manager</Title>
      <Button>Add New Task</Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            {task.name} - {task.status}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TaskManager;
