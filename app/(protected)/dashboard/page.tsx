/**
 * Dashboard - Overview of all sensor data
 * This page will display key metrics, recent alerts, and sensor status overview
 */
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">
          Overview of your sensor data and system status
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Sensors", value: "10,000" },
          { label: "Active Sensors", value: "9,850" },
          { label: "Alerts", value: "12" },
          { label: "System Status", value: "Healthy" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-slate-800 rounded-lg p-6 border border-slate-700"
          >
            <p className="text-slate-400 text-sm">{item.label}</p>
            <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <h2 className="text-xl font-bold text-white mb-4">
          Sensor Details will be displayed here
        </h2>
        <p className="text-slate-400">
          Components for sensor charts, live data, and analytics will be added here
        </p>
      </div>
    </div>
  );
}
