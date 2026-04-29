/**
 * Sensor Details - Individual sensor information and metrics
 * Shows detailed data for a selected sensor with all its dynamic metrics
 */
export default function SensorDetailsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Sensor Details</h1>
        <p className="text-slate-400">
          Detailed information and metrics for individual sensors
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">
            Sensor Information
          </h2>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>Sensor ID: 00001</p>
            <p>Location: Building A</p>
            <p>Status: Active</p>
            <p>Last Updated: Now</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">
            Dynamic Metrics
          </h2>
          <p className="text-slate-400">
            Metrics vary by sensor type - will display dynamically
          </p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 h-96 flex items-center justify-center">
        <p className="text-slate-400">Historical data chart will be displayed here</p>
      </div>
    </div>
  );
}
