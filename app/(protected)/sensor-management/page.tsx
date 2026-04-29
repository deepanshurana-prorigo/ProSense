/**
 * Sensor Management - Add, edit, delete, and configure sensors
 */
export default function SensorManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Sensor Management</h1>
          <p className="text-slate-400">
            Add, edit, and manage your sensors
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Sensor
        </button>
      </div>

      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-slate-300 text-sm">
            <thead className="bg-slate-700 border-b border-slate-600">
              <tr>
                <th className="px-6 py-3">Sensor ID</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr
                  key={item}
                  className="border-b border-slate-700 hover:bg-slate-700/50"
                >
                  <td className="px-6 py-3">SENSOR-{`00${item}`.slice(-3)}</td>
                  <td className="px-6 py-3">Building A</td>
                  <td className="px-6 py-3">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-3">Temperature & Humidity</td>
                  <td className="px-6 py-3 flex gap-2">
                    <button className="text-blue-400 hover:text-blue-300">Edit</button>
                    <button className="text-red-400 hover:text-red-300">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
