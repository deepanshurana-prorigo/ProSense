/**
 * Charts - Interactive data visualization with Apache ECharts
 * Dynamic metric selection, time range filtering, multiple chart types
 */
export default function ChartsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Charts</h1>
        <p className="text-slate-400">
          Interactive visualization of sensor data with dynamic metric selection
        </p>
      </div>

      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <h2 className="text-xl font-bold text-white mb-4">
          Chart Controls
        </h2>
        <div className="space-y-4 text-slate-400">
          <p>• Sensor Selection (dynamic)</p>
          <p>• Metric Selection (dynamic, varies per sensor)</p>
          <p>• Time Range Filtering</p>
          <p>• Chart Type: Line, Area, Bar</p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 h-96 flex items-center justify-center">
        <p className="text-slate-400">ECharts component will be rendered here</p>
      </div>
    </div>
  );
}
