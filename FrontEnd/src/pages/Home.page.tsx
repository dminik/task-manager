import { Button, Group } from "@mantine/core";

export function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px'  }}>
      <h1>Home</h1>
      <Group>
        <Button variant="outline">Secondary STA</Button>
        <Button>Main STA</Button>
      </Group>
    </div>
  );
}