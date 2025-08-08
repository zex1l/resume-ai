import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Textarea } from '@/shared/ui/textarea';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { useAddRoadmap } from '../hooks/use-add-roadmap';

export const CreateRoadmapModal = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const { isLoading, onCreateRoadmap } = useAddRoadmap();
  const [text, setText] = useState('');

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Roadmap with AI</DialogTitle>
        </DialogHeader>
        <Textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe your roadmap"
        />
        <Button
          className="flex items-center gap-2"
          disabled={isLoading}
          onClick={() => onCreateRoadmap(text)}
        >
          Create
          {isLoading && <LoaderCircle className=" animate-spin" />}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
