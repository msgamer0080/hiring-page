document.getElementById('openInfoBtn').addEventListener('click', function() {
    var infoPopup = document.getElementById('infoPopup');
    infoPopup.classList.add('show');
});

document.getElementById('closeInfoBtn').addEventListener('click', function() {
    var infoPopup = document.getElementById('infoPopup');
    infoPopup.classList.remove('show');
});

document.getElementById('continueBtn').addEventListener('click', function() {
    var infoPopup = document.getElementById('infoPopup');
    var formPopup = document.getElementById('formPopup');
    infoPopup.classList.remove('show');
    formPopup.classList.add('show');
});

document.getElementById('closeFormBtn').addEventListener('click', function() {
    var formPopup = document.getElementById('formPopup');
    formPopup.classList.remove('show');
});
