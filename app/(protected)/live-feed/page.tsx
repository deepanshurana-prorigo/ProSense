/**
 * Live Feed - Real-time sensor data stream
 * Polling mechanism for simulated live data updates
 */
export default function LiveFeedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Live Feed</h1>
        <p className="text-slate-400">
          Real-time streaming of sensor data with dynamic metrics
        </p>
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-4 border border-slate-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Sensor #{`0000${index}`.slice(-5)}
                </h3>
                <p className="text-sm text-slate-400">
                  Last updated: just now
                </p>
              </div>
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="mt-3 text-slate-300 text-sm">
              Dynamic metrics will be displayed here
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
