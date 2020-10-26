function clearForm() {

    this.feedbackForm.reset();

    var comment = document.getElementById('feedbackComment');

    if (!comment.value || comment.value != comment.defaultValue) {
        comment.value = comment.defaultValue;
    }
}

function findProduct(productID) {

    for (let i = 0; i < shoesArray.length; i++) {
        if (shoesArray[i].id == productID) {
            return shoesArray[i];
        }
    }

    return 0;
}