$(function() {
    function display(bool) {
        if (bool) {
            $("body").show();
            $("#tc").show();
        } else {
            $("body").hide();
            $("#tc").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {

        var item = event.data;

        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }

        tcCoords(event.data); // hata alıyor dene

    })
})

function tcClose() {
    $.post('http://code-system/tccloseButton');
}


function tccoordsStart(data) {
    document.querySelector("#tcCoords").textContent = data.text; // hata alıyor dene
}