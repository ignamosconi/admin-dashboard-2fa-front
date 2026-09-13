import { Box, Title, Text, Card, SimpleGrid } from '@mantine/core';

function PlaceholderCard({ label, description }: { label: string; description: string }) {
  return (
    <Card withBorder radius="md" p="lg">
      <Text fw={600} size="sm">{label}</Text>
      <Text size="xs" c="dimmed">{description}</Text>
    </Card>
  );
}

export function DashboardPage() {
  return (
    <Box>
      <Title order={2} mb={4}>Dashboard</Title>
      <Text c="dimmed" mb="xl">
        Bienvenido al panel de administración - Nombre App
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" maw={800}>
        <PlaceholderCard label="Próximamente" description="Funcionalidad 1" />
        <PlaceholderCard label="Próximamente" description="Funcionalidad 2" />
      </SimpleGrid>
    </Box>
  );
}