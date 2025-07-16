import DisplayCTable from './CTable.jsx';
import DisplayPyTable from './PyTable.jsx'
import DisplayTailTable from './TailTable.jsx'
import CBullets from './cbullets.jsx';
import PyBullets from './pybullets.jsx';
import TailBullets from './tailbullets.jsx';

import { useState } from 'react';
const logos = [
    {
        id: "Cclick",
        src: "pictures/toolsPictures/c.png",
        label: "c"
    },
    {
        id: "pyClick",
        src: "pictures/toolsPictures/python.png",
        label: "py"
    },
    {
        id: "tailClick",
        src: "pictures/toolsPictures/tailwind.png",
        label: "tail"
    },

];

function PopulateButtons(){

    const [isShown, setIsShown] = useState(false);
    const [currentTable, setCurrentTable] = useState(null);

    const screenSize = window.innerWidth;

    const handleClick = (label) => {
        const sameClick = currentTable === label;
        if (!isShown) {
        setCurrentTable(label);
        setIsShown(true);
        } else if (sameClick) {
        setIsShown(false);
        setCurrentTable(null);
        } else {
        setCurrentTable(label);
        }
    };


    const handleExpandAll = () => {
        setCurrentTable('all');
        setIsShown(true);
    }
    return (
        <div>
            <div className="2xl:flex gap-2">
            My viewpoint on the following programming languages:
            {logos.map((logo) => (
                <img
                key={logo.id}
                id={logo.id}
                className="w-10 h-10 hover:cursor-pointer"
                src={logo.src}
                alt={logo.id}
                onClick={() => handleClick(logo.label)}
                />
            ))}
            <button
            id="expandAll"
            className="removeExpand px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 hover:cursor-pointer"
            onClick={handleExpandAll}
            >
            Expand all tables
            </button>
            </div>

            <div>
                <div id="table-container" className={isShown ? '' : 'hidden'}>
                    {currentTable === "c" && (screenSize > 425 ? <DisplayCTable /> :<CBullets/>)}
                    {currentTable === "py" && (screenSize > 425 ? <DisplayPyTable /> : <PyBullets />)}
                    {currentTable === "tail" && (screenSize > 425 ? <DisplayTailTable /> : <TailBullets />)}
                    {currentTable === "all" && (
                    <>
                        <DisplayCTable/>
                        <DisplayPyTable />
                        <DisplayTailTable />
                    </>
                    )}
                </div>
            </div>
        </div>


        );
}

export default PopulateButtons;