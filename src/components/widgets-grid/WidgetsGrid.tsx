"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "../simple-widget/SimpleWidget";
import { useAppSelector } from "@/store";

const widgets = [
  {
    title: "Contador",
    subTitle: "Productos agregados",
    label: "Contador",
    icon: <IoCartOutline className="text-blue-500" size={70} />,
    href: "/dashboard/counter",
  },
];

export function WidgetsGrid() {
  const cart = useAppSelector((state) => state.counter.count);

  widgets[0].title = String(cart);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {widgets.map((widget) => (
          <SimpleWidget key={widget.href} {...widget} />
        ))}
      </div>
    </>
  );
}
