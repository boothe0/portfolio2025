export default function PyBullets(){
    const pyInfo = [
        "Very quick and simple data structure composition with classes and methods.",
        "Can be unpredictable as there are situations where variables can be accessed within methods breaking the top-down scoping rule.",
        "Due to high abstraction it can be hard to tell what the code is doing at times behind the scenes.",
    ];


    return (
        <ul className="list-disc">
            <li>{pyInfo[0]}</li>
            <li>{pyInfo[1]}</li>
            <li>{pyInfo[2]}</li>
        </ul>
    )
}

