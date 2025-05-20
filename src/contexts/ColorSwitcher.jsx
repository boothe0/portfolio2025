let toggled = false
function colorSwitcher(){
    const themeCheckbox = document.querySelector(
    '#theme-slider input[type="checkbox"]'
    );
    const Body = document.body;
    if (!toggled){
        console.log("Toggle ON")
        themeCheckbox.addEventListener("change", () => {
        Body.classList.add("bg-[oklch(95.4%_0.038_75.164)]");
        });
        toggled = true
    }
    else if (toggled){
        console.log("Toggle off")
        themeCheckbox.addEventListener("change", () => {
        Body.classList.remove("bg-[oklch(95.4%_0.038_75.164)]");
        });
        toggled = false
    }
}

export default colorSwitcher;