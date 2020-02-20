// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-note").on("click", function(event) {
    var id = $(this).data("id");
    var newNote = $(this).data("newnote");

    var newNoteState = {
      noteded: newNote
    };

    // Send the PUT request.
    $.ajax("/api/indexs/" + id, {
      type: "PUT",
      data: newNoteState
    }).then(
      function() {
        console.log("changed devour to", newNote);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newIndex = {
      index_name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/indexs", {
      type: "POST",
      data: newIndex
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
