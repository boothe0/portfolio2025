export default function DisplayCTable(){
    const cHeaders = ["Lack of OOP", "Scope", "Ease of Use"];
    const cTableData = [
        [
            "Data structures are built from scratch ensuring full understanding.",
            "Predictable scope of always being top level but can lead to limitations within functions",
            "The required syntax is heavy and a lot to write leading to longer programs, however it is consistant.",
        ],   
    ];

    return(
        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-5">
                <thead className="bg-gray-200">
                    <tr>
                        {cHeaders.map((header) => (
                            <th key={header} className="px-4 py-2 text-left font-medium text-gray-700">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cTableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-200">
                            {row.map((cell, i) => (
                                <td key={i} className="px-4 py-2 text-left text-gray-600">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
        </table>
    );
}
