function Main() {
    document
        .querySelector("button.fat")
        .addEventListener("click", function () {
            document
                .querySelector("#footer")
                .classList
                .toggle("hide");
        })
}