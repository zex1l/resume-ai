import {
  BookOpen,
  Code2,
  GraduationCap,
  Rocket,
  Lightbulb,
  Settings,
  User,
  BarChart,
  Globe,
  Shield,
} from 'lucide-react';

// Список иконок для случайного выбора
const iconComponents = [
  BookOpen,
  Code2,
  GraduationCap,
  Rocket,
  Lightbulb,
  Settings,
  User,
  BarChart,
  Globe,
  Shield,
];

// Функция для получения случайной иконки
const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconComponents.length);
  return iconComponents[randomIndex];
};

// Пример использования в компоненте React
export const RandomIconComponent = () => {
  const RandomIcon = getRandomIcon();

  return <RandomIcon className="h-5 w-5 text-white" />;
};
