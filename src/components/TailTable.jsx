
export default function DisplayTailTable(){
    const tailHeaders = ["Library", "Pros", "Cons"];
    const tailwindCSSData = [
        [
            "A library with premade css classes that are used directly in html reducing the need for long, external css files.",
            "Easy use of flex and grid as well as convenient padding, margin and border classes.",
            "Difficult to work with small mobile devices less than 640px and at time unintuitive classes for responsive design.",
        ],
    ];


    return(
        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-5">
                <thead className="bg-gray-200">
                    <tr>
                        {tailHeaders.map((header) => (
                            <th key={header} className="px-4 py-2 text-left font-medium text-gray-700">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tailwindCSSData.map((row, rowIndex) => (
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
