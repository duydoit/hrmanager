function TableView({ datas, columns, loading }) {
    return (
        <div className="align-middle overflow-x-auto border first-letter rounded">
            <table className="min-w-full divide-y divide-gray-200 ">
                < thead className="bg-gray-100">
                    <tr>
                        {columns.map(column => {
                            return (
                                <th key={column.key} className="px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    {column.title}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    {datas.map((data, index) => {
                        return (
                            <tr key={index} className="h-full">
                                {columns.map(col => {
                                    if (col.render) return (
                                        <td key={col.key} className="px-4 py-1.5 whitespace-nowrap">
                                            {col.render(data)}
                                        </td>
                                    )
                                    return (
                                        <td key={col.key} className="px-4 py-1.5 whitespace-nowrap text-gray-500">
                                            {data[col.dataIndex]}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableView
