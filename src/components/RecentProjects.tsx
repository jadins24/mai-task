import { ArrowRight, Clock, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Blue Roma Quartzite',
    cat: 'Worktops, Table Tops & Wall Cladding',
    loc: 'East Riding of Yorkshire',
    status: 'Active'
  },
  {
    title: 'Emerald pearl granite utility top',
    cat: 'Natural Stone Installation',
    loc: 'Greater London',
    status: 'Active'
  },
  {
    title: 'River White worktop',
    cat: 'Worktops, Table Tops & Wall Cladding',
    loc: 'Cornwall',
    status: 'Active'
  }
];

export default function RecentProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">REAL WORK, REAL RESULTS</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Explore Real UK Projects</h2>
          </div>
          <button className="flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
            Explore All Projects <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{p.status}</span>
                <Clock className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">{p.title}</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">{p.cat}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                {p.loc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
