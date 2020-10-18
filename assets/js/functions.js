function clearForm() {

    this.feedbackForm.reset();

    var comment = document.getElementById('feedbackComment');

    if (!comment.value || comment.value != comment.defaultValue) {
        comment.value = comment.defaultValue;
    }
} 