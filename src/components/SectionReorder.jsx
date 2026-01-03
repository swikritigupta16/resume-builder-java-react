import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

/* ---------- SORTABLE ITEM ---------- */
function SortableItem({ id }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      {id.toUpperCase()}
      <span className="text-muted">☰</span>
    </li>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function SectionReorder({ sections, setSections }) {
  /* ✅ Sensors (DESKTOP + MOBILE) */
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    })
  );

  /* ✅ Drag End Handler */
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setSections((prev) => {
      const oldIndex = prev.indexOf(active.id);
      const newIndex = prev.indexOf(over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
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
