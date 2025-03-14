const cTableData = [
    {
        lackOfOOP: "Data structures are built from scratch ensuring full understanding.",
        scope: 
            "Predictable scope of always being top level but can lead to limitations within functions",
        easeOfUse: "The required syntax is heavy and a lot to write leading to longer programs, however it is consistant.",
    },   
];


const pythonTableData = [
    {
        objectOriented: "Very quick and simple data structure composition with classes and methods.",
        scope: "Can be unpredictable as there are situations where variables can be accessed within methods breaking the top-down scoping rule.",
        hiddenProcesses: "Due to high abstraction it can be hard to tell what the code is doing at times behind the scenes.",
    },
];

const tailwindCSSData = [
    {
        library: "A library with premade css classes that are used directly in html reducing the need for long, external css files.",
        cons: "Difficult to work with small mobile devices less than 640px and at time unintuitive classes for responsive design.",
        pros: "Easy use of flex and grid as well as convenient padding, margin and border classes.",
    },
];




function baseLayoutTable(headers, data)
{
    const table = document.createElement("table");
    table.classList.add("min-w-full", "table-auto", "border-collapse", "border", "border-gray-300");

    const thead = document.createElement("thead");
    thead.classList.add("bg-gray-200");

    const headerRows = document.createElement("tr");

    headers.forEach((header) => {
        const thCreate = document.createElement("th");
        thCreate.classList.add("px-4", "py-2", "text-left", "font-medium", "text-gray-700");
        thCreate.textContent = header;
        headerRows.appendChild(thCreate);
    });

    thead.appendChild(headerRows);
    table.appendChild(thead);

    const body = document.createElement("tbody");
    data.forEach((row) =>{
        const tableRow = document.createElement("tr");
        tableRow.classList.add("border-b", "border-gray-200");

        for (const i in row){
            const tableD = document.createElement("td");
            tableD.classList.add("px-4", "py-2", "text-left", "text-gray-600");
            tableD.innerHTML = row[i];
            tableRow.appendChild(tableD);
        }
        body.appendChild(tableRow);
    });
    table.appendChild(body);
    return table;
}


function displayTables(){
    const tableContainer = document.getElementById("table-container");

    const cHeaders = ["Lack of OOP", "Scope", "Ease of Use"];
    const cTable = baseLayoutTable(cHeaders, cTableData);
    tableContainer.appendChild(cTable);

    const pyHeaders = ["Object Oriented", "Scope", "Hidden Processes"];
    const pyTable = baseLayoutTable(pyHeaders, pythonTableData);
    tableContainer.appendChild(pyTable);

    const tailHeaders = ["Library", "Pros", "Cons"]    
    const tailWindTable = baseLayoutTable(tailHeaders, tailwindCSSData);
    tableContainer.appendChild(tailWindTable);

}


window.onload = displayTables;