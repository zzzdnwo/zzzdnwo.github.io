import React, { useId, useState } from 'react';

function RichText({ text }) {
  return text.split(/(\*\*.+?\*\*|`.+?`)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default function ProjectAccordion({ sections }) {
  const idPrefix = useId();
  const [openItemIds, setOpenItemIds] = useState(() => new Set(
    sections.flatMap((section) => section.items.map((item) => `${section.id}-${item.id}`))
  ));

  const toggleItem = (itemId) => {
    setOpenItemIds((previous) => {
      const next = new Set(previous);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  return sections.map((section) => (
    <section key={section.id}>
      <h3>{section.title}</h3>
      <div className="flexBox">
        {section.items.map((item) => {
          const itemId = `${section.id}-${item.id}`;
          const contentId = `${idPrefix}-${itemId}`;
          const isOpen = openItemIds.has(itemId);

          return (
            <div key={item.id} className={`itemBox ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="item_title"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(itemId)}
              >
                {item.title}
              </button>
              <div id={contentId} className="item_text" hidden={!isOpen}>
                <ul>
                  {item.bullets.map((bullet, index) => (
                    <li key={index}><RichText text={bullet} /></li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  ));
}
