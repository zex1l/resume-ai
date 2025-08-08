import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import type { View } from '../hooks/use-view-list';
import { Grid, List } from 'lucide-react';

export const RoadmapListTabs = ({
  onChange,
  view,
}: {
  view: View;
  onChange: (value: View) => void;
}) => {
  return (
    <Tabs
      defaultValue={view}
      onValueChange={(value) => onChange(value as View)}
    >
      <TabsList>
        <TabsTrigger value="list">
          <Grid />
        </TabsTrigger>
        <TabsTrigger value="grid">
          <List />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
