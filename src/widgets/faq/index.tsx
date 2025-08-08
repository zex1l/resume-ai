import { ChevronDown } from 'lucide-react';
import { FaqItem } from './faq-item';
import { FaqLayout } from './faq-layout';
import { useOpenItems } from './hooks/useOpenItems';
import { itemsData } from './item.data';

export const Faq = () => {
  const { openItems, toggleOpen } = useOpenItems(itemsData);

  return (
    <FaqLayout
      title={<h2 className="text-4xl font-bold text-center">FAQs</h2>}
      description={
        <p className="text-gray-400 text-center">
          Everything else you might want to know.
        </p>
      }
      items={
        <>
          {openItems.map((item, index) => (
            <FaqItem
              key={index}
              title={<h3>{item.title}</h3>}
              description={<p className="text-gray-400 text-sm">{item.description}</p>}
              open={item.open}
              onClick={() => toggleOpen(item.id)}
              actions={
                <ChevronDown
                  className={`transition-transform duration-200 ${item.open ? 'rotate-180' : ''}`}
                />
              }
            />
          ))}
        </>
      }
    />
  );
};
