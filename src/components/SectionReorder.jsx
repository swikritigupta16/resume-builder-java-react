import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab"
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="list-group-item"
    >
      {id.toUpperCase()}
    </li>
  );
}

export default function SectionReorder({ sections, setSections }) {
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
          setSections((items) => {
            const oldIndex = items.indexOf(active.id);
            const newIndex = items.indexOf(over.id);

            const updated = [...items];
            const [moved] = updated.splice(oldIndex, 1);
            updated.splice(newIndex, 0, moved);

            return updated;
          });
        }
      }}
    >
      <SortableContext
        items={sections}
        strategy={verticalListSortingStrategy}
      >
        <ul className="list-group">
          {sections.map((section) => (
            <SortableItem key={section} id={section} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
