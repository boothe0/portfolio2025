export default function DisplayPyTable(){
    const pyHeaders = ["Object Oriented", "Scope", "Hidden Processes"];
    const pythonTableData = [
        [
            "Very quick and simple data structure composition with classes and methods.",
            "Can be unpredictable as there are situations where variables can be accessed within methods breaking the top-down scoping rule.",
            "Due to high abstraction it can be hard to tell what the code is doing at times behind the scenes.",
        ],
    ];


    return(
        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-5">
                <thead className="bg-gray-200">
                    <tr>
                        {pyHeaders.map((header) => (
                            <th key={header} className="px-4 py-2 text-left font-medium text-gray-700">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {pythonTableData.map((row, rowIndex) => (
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

