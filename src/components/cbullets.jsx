export default function CBullets(){
    const cInfo = [
        "Data structures are built from scratch ensuring full understanding.", 
        "Predictable scope of always being top level but can lead to limitations within functions",
        "The required syntax is heavy and a lot to write leading to longer programs, however it is consistant.",

    ];


    return (
        <ul className="list-disc">
            <li>{cInfo[0]}</li>
            <li>{cInfo[1]}</li>
            <li>{cInfo[2]}</li>
        </ul>
    )
}

