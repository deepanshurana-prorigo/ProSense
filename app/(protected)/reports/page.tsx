/**
 * Reports - Generated analytics reports and summaries
 */
export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
        <p className="text-slate-400">
          View and download generated analytics reports
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            title: "Daily Summary Report",
            date: "Today",
            type: "Summary",
          },
          {
            title: "Weekly Analytics",
            date: "This Week",
            type: "Analytics",
          },
          {
            title: "Monthly Performance",
            date: "This Month",
            type: "Performance",
          },
        ].map((report) => (
          <div
            key={report.title}
            className="bg-slate-800 rounded-lg p-4 border border-slate-700 flex items-center justify-between"
          >
            <div>
              <h3 className="text-white font-semibold">{report.title}</h3>
              <p className="text-sm text-slate-400">
                {report.date} • {report.type}
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
