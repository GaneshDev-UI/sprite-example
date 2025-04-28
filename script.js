(function () {
    const spriteContainer = document.querySelector(".sprite-container");

    // Get all buttons
    const buttons = document.getElementsByTagName("button");

    // Loop through each button and add event listener
    Array.from(buttons).forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const elemID = e.target.id;
            console.log("clicked: " + elemID);

            switch (elemID) {
                case "back":
                    spriteContainer.style.backgroundPositionY = "0px";
                    break;
                case "left":
                    spriteContainer.style.backgroundPositionY = "-160px";
                    break;
                case "right":
                    spriteContainer.style.backgroundPositionY = "-320px";
                    break;
                default:
                    spriteContainer.style.backgroundPositionY = "-480px";
            }
        });
    });
})();
