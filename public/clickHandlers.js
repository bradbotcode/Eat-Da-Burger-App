$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var isEaten = $(this).data("iseaten");

        var newState = {
            devoured: isEaten
        };
        // Send the PUT request.
        $.ajax("/burgers/eat/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurg = {
            burger_name: $("#burgName").val().trim(),
        };
        // Send the POST request.
        $.ajax("/burgers/create", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});