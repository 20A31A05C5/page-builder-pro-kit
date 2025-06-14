
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PricingTable from "../components/PricingTable";
import LeadCaptureDemo from "../components/LeadCaptureDemo";
import { User, Users, FileText, Check, Plus, Code } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Template Gallery",
    desc: "Choose from beautiful, high-converting page templates.",
  },
  {
    icon: Users,
    title: "Team Access",
    desc: "Invite team members to edit and manage your landing pages.",
  },
  {
    icon: User,
    title: "Lead Capture",
    desc: "Integrated forms and backend to collect leads.",
  },
  {
    icon: Code,
    title: "SEO & Custom Domain",
    desc: "Optimize for search and connect your own domain easily.",
  },
];

const Index = () => (
  <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
    <Navbar />
    <main className="max-w-6xl mx-auto py-12 px-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Landing<span className="text-blue-600">Page</span>Pro
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Instantly create beautiful, high-converting landing pages. <br />
          <span className="text-emerald-600">No code required</span> — built for small businesses and marketers.
        </p>
        <Link to="/dashboard">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-3 font-semibold text-lg shadow-lg transition duration-150 hover:scale-105 animate-fade-in">
            Get Started Free
          </button>
        </Link>
        <div className="mt-2 text-sm text-muted-foreground">No credit card required</div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start space-x-4 p-6 rounded-xl bg-card shadow animate-fade-in">
            <f.icon size={32} className="text-blue-500 shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <div className="text-muted-foreground">{f.desc}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <PricingTable />
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-2">Try Lead Capture Demo</h2>
        <div className="w-full max-w-md mx-auto">
          <LeadCaptureDemo />
        </div>
      </section>
    </main>
    <footer className="py-8 text-center text-sm text-muted-foreground mt-12">
      &copy; {new Date().getFullYear()} LandingPagePro &mdash; Built with React, TailwindCSS, and Supabase
    </footer>
  </div>
);

export default Index;
