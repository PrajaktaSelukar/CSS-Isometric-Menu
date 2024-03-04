function changeHoverDirection(direction) {
    let listItems = document.querySelectorAll("#menu li");

    listItems.forEach((li) => {
        if (direction === "left") {
            li.style.setProperty("--hover-transform", "-50px");
        } else if (direction === "right") {
            li.style.setProperty("--hover-transform", "50px");
        }
    });
}