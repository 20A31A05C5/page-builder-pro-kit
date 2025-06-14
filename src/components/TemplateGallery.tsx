
import { LayoutGrid, LayoutList, GalleryHorizontal, GalleryVertical } from "lucide-react";
import React from "react";

const templates = [
  {
    name: "Bold Hero",
    desc: "High-impact hero section, big headline, call to action.",
    icon: LayoutGrid,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-blue-400 to-emerald-400 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="w-3/5 h-3 bg-white rounded-full mt-4" />
        <div className="w-2/5 h-2 bg-white/80 rounded-full mt-2" />
        <div className="absolute bottom-3 right-3 bg-white/50 w-12 h-12 rounded-full blur" />
      </div>
    ),
  },
  {
    name: "Minimalist",
    desc: "Clean layout, focus on main message and email signup.",
    icon: LayoutList,
    preview: (
      <div className="w-full aspect-video rounded-lg bg-slate-100 flex flex-col items-center justify-center border">
        <div className="w-2/5 h-3 bg-slate-400 rounded-full" />
        <div className="w-3/5 h-2 bg-slate-300 rounded-full mt-2" />
        <div className="mt-2 w-1/4 h-3 bg-emerald-400 rounded" />
      </div>
    ),
  },
  {
    name: "Product Showcase",
    desc: "Feature grid, product gallery, lead form.",
    icon: GalleryHorizontal,
    preview: (
      <div className="w-full aspect-video bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 rounded-lg p-2 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-1/4 h-4 rounded bg-white/80" />
          <div className="w-1/4 h-4 rounded bg-white/60" />
          <div className="w-1/4 h-4 rounded bg-white/40" />
        </div>
        <div className="w-full h-3 bg-violet-400 rounded" />
        <div className="w-1/2 h-2 bg-pink-400 rounded mx-auto" />
      </div>
    ),
  },
  {
    name: "Split Image",
    desc: "Two-column: attention-grabbing image & headline.",
    icon: GalleryVertical,
    preview: (
      <div className="w-full aspect-video bg-gradient-to-l from-fuchsia-400 to-orange-200 rounded-lg flex">
        <div className="w-1/2 h-full bg-white/80 rounded-l-lg" />
        <div className="flex flex-col justify-center items-start pl-3 w-1/2">
          <div className="w-3/5 h-2 bg-white/60 rounded mb-2" />
          <div className="w-2/5 h-1 bg-white/30 rounded" />
        </div>
      </div>
    ),
  },
  {
    name: "Elegant Dark",
    desc: "Sophisticated dark theme, bold headline, sleek form.",
    icon: LayoutGrid,
    preview: (
      <div className="w-full aspect-video bg-neutral-900 rounded-lg flex flex-col items-center justify-center border border-neutral-800">
        <div className="w-3/5 h-3 bg-neutral-700 rounded-full" />
        <div className="w-2/5 h-2 bg-blue-500/80 rounded-full mt-2" />
        <div className="w-1/4 h-2 bg-emerald-400 rounded mt-2" />
      </div>
    ),
  },
  {
    name: "Startup Gradient",
    desc: "Ombre gradient background, modern cards, minimal nav.",
    icon: GalleryHorizontal,
    preview: (
      <div className="w-full aspect-video bg-gradient-to-br from-indigo-400 to-pink-400 rounded-lg flex flex-col justify-end items-center">
        <div className="w-4/5 h-3 bg-white/60 rounded mb-3" />
        <div className="w-1/2 h-2 bg-white/30 rounded" />
      </div>
    ),
  },
];

const TemplateGallery = () => (
  <section className="my-20">
    <h2 className="text-3xl font-bold text-center mb-2">Template Gallery</h2>
    <p className="text-center text-muted-foreground mb-10">
      Explore a selection of professionally-designed landing page templates.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {templates.map((tpl, i) => (
        <div
          key={tpl.name}
          className="group bg-white rounded-xl border border-border shadow-lg hover:shadow-2xl hover:scale-105 transition p-4 flex flex-col"
        >
          <div className="mb-3 rounded-lg overflow-hidden">{tpl.preview}</div>
          <div className="flex items-center gap-2 mb-1">
            <tpl.icon className="text-blue-500" size={20} />
            <span className="font-semibold text-lg">{tpl.name}</span>
            {i === 0 && (
              <span className="ml-2 text-xs bg-blue-100 px-2 py-0.5 rounded-full text-blue-700">
                Popular
              </span>
            )}
          </div>
          <div className="text-muted-foreground text-sm">{tpl.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TemplateGallery;
