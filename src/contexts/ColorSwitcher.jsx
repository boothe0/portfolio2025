let toggled = false
function colorSwitcher(id){
    const colors = ["bg-[oklch(95.4%_0.038_75.164)]", "bg-[oklch(30%_0_0)]", "bg-[oklch(80%_0.07_120)]"];
    const themeCheckbox = document.querySelector(
    '#theme-slider input[type="checkbox"]'
    );
    const themeCheckbox2 = document.querySelector(
    '#theme-slider-2 input[type="checkbox"]'
    );
    const themeCheckbox3 = document.querySelector(
    '#theme-slider-3 input[type="checkbox"]'
    );
    const Body = document.body;
    themeCheckbox.addEventListener("change", () => {
        Body.classList.remove(...Body.classList);
        if (themeCheckbox.checked) {
            Body.classList.add(colors[0]);
        }
    });

    themeCheckbox2.addEventListener("change", () => {
        Body.classList.remove(...Body.classList);

        if (themeCheckbox2.checked) {
            Body.classList.add(colors[1]); 
            Body.classList.add("text-white")
        }
    });
    themeCheckbox3.addEventListener("change", () => {
        Body.classList.remove(...Body.classList);

        if (themeCheckbox3.checked) {
            Body.classList.add(colors[2]); 
        }
    });
}

export default colorSwitcher;