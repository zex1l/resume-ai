import { Dot } from 'lucide-react';
import type { RoadmapType } from '../roadmap-list/roadmap.type';
import { RoadmapBlock } from './ui/roadmap-block';
import {
  RoadmapBlocksCanvas,
  RoadmapInfo,
  RoadmapLayout,
} from './ui/roadmap-layout';
import { Tag } from '@/shared/ui/tag';
import { RoadmapTags } from './ui/roadmap-tags';

const jsRoadmap: RoadmapType = {
  id: 'js-beginner-to-advanced',
  title: 'JavaScript с нуля до продвинутого уровня',
  description: 'Полный путь изучения JavaScript для фронтенд-разработки',
  tags: ['javascript', 'frontend', 'junior'],
  createdAt: '2025-04-01',
  updatedAt: '2025-04-01',
  author: 'Иван Петров',
  totalStages: 3,
  totalBlocks: 8,
  totalItems: 47,
  stages: [
    {
      id: 'stage-1',
      title: 'Базовый JavaScript',
      description: 'Основы языка, синтаксис, типы данных',
      status: 'in-progress',
      blocks: [
        {
          id: 'block-1-1',
          title: 'Типы данных и переменные',
          items: [
            {
              id: 'item-1-1-1',
              title: 'Понимать примитивные типы',
              description: 'string, number, boolean, null, undefined',
              status: 'completed',
              resources: [
                {
                  title: 'MDN: Типы данных',
                  url: 'https://developer.mozilla.org/...',
                },
              ],
            },
            {
              id: 'item-1-1-2',
              title: 'Работа с let, const, var',
              status: 'in-progress',
            },
            {
              id: 'item-1-1-1',
              title: 'Понимать примитивные типы',
              description: 'string, number, boolean, null, undefined',
              status: 'completed',
              resources: [
                {
                  title: 'MDN: Типы данных',
                  url: 'https://developer.mozilla.org/...',
                },
              ],
            },
            {
              id: 'item-1-1-2',
              title: 'Работа с let, const, var',
              status: 'in-progress',
            },
          ],
        },
      ],
    },
    {
      id: 'stage-1',
      title: 'Базовый JavaScript',
      description: 'Основы языка, синтаксис, типы данных',
      status: 'in-progress',
      blocks: [
        {
          id: 'block-1-1',
          title: 'Типы данных и переменные',
          items: [
            {
              id: 'item-1-1-1',
              title: 'Понимать примитивные типы',
              description: 'string, number, boolean, null, undefined',
              status: 'completed',
              resources: [
                {
                  title: 'MDN: Типы данных',
                  url: 'https://developer.mozilla.org/...',
                },
              ],
            },
            {
              id: 'item-1-1-2',
              title: 'Работа с let, const, var',
              status: 'in-progress',
            },
            {
              id: 'item-1-1-1',
              title: 'Понимать примитивные типы',
              description: 'string, number, boolean, null, undefined',
              status: 'completed',
              resources: [
                {
                  title: 'MDN: Типы данных',
                  url: 'https://developer.mozilla.org/...',
                },
              ],
            },
            {
              id: 'item-1-1-2',
              title: 'Работа с let, const, var',
              status: 'in-progress',
            },
          ],
        },
      ],
    },
    {
      id: 'stage-1',
      title: 'Базовый JavaScript',
      description: 'Основы языка, синтаксис, типы данных',
      status: 'in-progress',
      blocks: [
        {
          id: 'block-1-1',
          title: 'Типы данных и переменные',
          items: [
            {
              id: 'item-1-1-1',
              title: 'Понимать примитивные типы',
              description: 'string, number, boolean, null, undefined',
              status: 'completed',
              resources: [
                {
                  title: 'MDN: Типы данных',
                  url: 'https://developer.mozilla.org/...',
                },
              ],
            },
            {
              id: 'item-1-1-2',
              title: 'Работа с let, const, var',
              status: 'in-progress',
            },
            {
              id: 'item-1-1-1',
              title: 'Понимать примитивные типы',
              description: 'string, number, boolean, null, undefined',
              status: 'completed',
              resources: [
                {
                  title: 'MDN: Типы данных',
                  url: 'https://developer.mozilla.org/...',
                },
              ],
            },
            {
              id: 'item-1-1-2',
              title: 'Работа с let, const, var',
              status: 'in-progress',
            },
          ],
        },
      ],
    },
  ],
};

export const Roadmap = () => {
  return (
    <RoadmapLayout
      info={
        <RoadmapInfo
          title={<h1 className="text-4xl font-bold">{jsRoadmap.title}</h1>}
          description={<p className="text-gray-400">{jsRoadmap.description}</p>}
          tags={
            <RoadmapTags
              tags={jsRoadmap.tags.map((tag) => (
                <Tag
                  value={tag}
                  onClick={(value) => console.log(value)}
                  key={tag}
                  title={tag}
                />
              ))}
            />
          }
        />
      }
      canvas={
        <RoadmapBlocksCanvas
          blocks={jsRoadmap.stages.map((stage, key) => (
            <RoadmapBlock
              key={key}
              id={`${key}`}
              title={<h3 className="font-bold text-lg">{stage.title}</h3>}
              description={<p className="text-gray-400">{stage.description}</p>}
              subBlocks={stage.blocks.map((block, key) => (
                <div key={key} className="flex items-center gap-2">
                  <Dot />
                  {block.title}
                </div>
              ))}
            />
          ))}
        />
      }
    />
  );
};
