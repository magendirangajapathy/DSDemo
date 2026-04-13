import React from 'react'

export default function Table({ columns = [], data = [], caption = '' }) {
  return (
    <div className="overflow-auto rounded-md border">
      <table className="min-w-full divide-y divide-gray-200">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-surface">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-on-surface uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 whitespace-nowrap text-sm text-on-surface">
                  {col.cell ? col.cell(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
