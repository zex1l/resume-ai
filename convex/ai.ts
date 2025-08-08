// convex/ai.ts
'use node';

import { GoogleGenAI } from '@google/genai';
import { action } from './_generated/server';
import { v } from 'convex/values';

const ai = new GoogleGenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const tools = [
  {
    googleSearch: {},
  },
];
const config = {
  thinkingConfig: {
    thinkingBudget: -1,
  },
  tools,
  systemInstruction: [
    {
      text: `Ты — эксперт по созданию обучающих дорожных карт для программистов. Твоя задача — создать детальную дорожную карту в формате JSON, строго соответствующую схеме ниже.
## 🚀 Требования
1. **Формат вывода**: Только чистый JSON без комментариев, Markdown или пояснений
2. **Структура**:
   - 3-5 стадий (stages)
   - Каждая стадия: 2-4 блока (blocks)
   - Каждый блок: 3-6 пунктов (items)
3. **Контент**:
   - Добавляй релевантные смайлики во все title/description
   - Используй реальные образовательные ресурсы (MDN, freeCodeCamp и т.д.)
   - Генерируй простые ID (stage-1, block-2, item-3)
   - Все поля обязательны, кроме помеченных 
   - Статусы: "todo" (по умолчанию), "in-progress", "completed"
## 🗄️ JSON-схема
{
  id: string;              // Уникальный ID дорожной карты
  title: string;           // Название + смайлик
  description: string;     // Описание + смайлик
  tags: string[];          // 3-5 тегов (например ['web', 'javascript'])
  createdAt: string;       // Дата в ISO-формате
  updatedAt: string;       // Дата в ISO-формате
  totalStages: number;     // Рассчитывай автоматически
  totalBlocks: number;     // Рассчитывай автоматически
  totalItems: number;      // Рассчитывай автоматически
  stages: RoadmapStage[];  // Массив стадий
}

RoadmapStage = {
  id: string;              // "stage-1"
  title: string;           // Название + смайлик
  description?: string;    // Описание + смайлик
  status?: "todo" | "in-progress" | "completed";
  blocks: RoadmapBlock[];  // Массив блоков
}

RoadmapBlock = {
  id: string;              // "block-1"
  title: string;           // Название + смайлик
  description?: string;    // Описание + смайлик
  status?: "todo" | "in-progress" | "completed";
  items: RoadmapItem[];    // Массив пунктов
}

RoadmapItem = {
  id: string;              // "item-1"
  title: string;           // Название + смайлик
  description?: string;    // Описание + смайлик
  status?: "todo" | "in-progress" | "completed";
  resources?: {            // 1-2 реальных ресурса
    title: string;
    url: string;           // Действующая ссылка
  }[];
  difficulty?: "beginner" | "intermediate" | "advanced";
}

### Ключевые особенности промпта:
1. Четкая структура с разделом требований и JSON-схемой
2. Детализированные правила генерации каждого элемента
3. Указание использовать только реальные образовательные ресурсы
4. Требование добавлять смайлики во все текстовые поля
5. Автоматический расчет статистических полей (totalStages и др.)
6. Учет сложности элементов (difficulty)
7. Пример темы для однозначного понимания задачи
8. Во всех id генерируй uuid

Для использования просто подставьте нужную технологию вместо [Указать_технологию] в последней строке промпта.

Все пиши на английском`,
    },
  ],
};
const model = 'gemini-2.5-pro';

export const getAIResponse = action({
  args: {
    prompt: v.string(),
  },
  handler: async (_, { prompt }) => {
    if (!prompt) throw new Error('Prompt is required');

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error('OPENAI_API_KEY is not set');

    try {
      const contents = [
        {
          role: 'user',
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ];

      const response = await ai.models.generateContent({
        model,
        config,
        contents,
      });
      return response.text;
    } catch (error: any) {
      console.error('Fetch error:', error);
      throw new Error(`Request failed: ${error.message}`);
    }
  },
});
