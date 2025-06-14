
import { X, FileText, Check } from "lucide-react";

const templates = [
  {
    name: "Bold Hero",
    desc: "High-impact hero section, big headline, call to action.",
  },
  {
    name: "Minimalist",
    desc: "Clean layout, focus on main message and email signup.",
  },
  {
    name: "Product Showcase",
    desc: "Feature grid, product gallery, lead form.",
  },
];

const TemplatePicker = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative">
        <button className="absolute top-4 right-4 text-muted-foreground hover:text-red-500" onClick={onClose}>
          <X size={28} />
        </button>
        <h3 className="text-xl font-bold mb-6">Pick a Template</h3>
        <div className="space-y-4">
          {templates.map((tpl) => (
            <div
              key={tpl.name}
              className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-blue-400 transition group cursor-pointer"
            >
              <FileText className="text-blue-500 mt-1" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{tpl.name}</span>
                  {tpl.name === "Bold Hero" && (
                    <span className="text-xs bg-blue-100 px-2 py-0.5 rounded-full text-blue-700">Popular</span>
                  )}
                </div>
                <div className="text-muted-foreground text-sm">{tpl.desc}</div>
              </div>
              <div className="ml-auto text-emerald-500 group-hover:text-emerald-700 transition">
                <Check />
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold text-lg transition"
          onClick={onClose}
        >
          Select Template
        </button>
      </div>
    </div>
  );
};
export default TemplatePicker;
