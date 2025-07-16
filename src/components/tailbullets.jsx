export default function TailBullets(){
    const tailInfo = [
        "A library with premade css classes that are used directly in html reducing the need for long, external css files.",
        "Easy use of flex and grid as well as convenient padding, margin and border classes.",
        "Difficult to work with small mobile devices less than 640px and at time unintuitive classes for responsive design.",
    ];


    return (
        <ul className="list-disc">
            <li>{tailInfo[0]}</li>
            <li>{tailInfo[1]}</li>
            <li>{tailInfo[2]}</li>
        </ul>
    )
}

