$(function() {
    function display(bool) {
        if (bool) {
            $("body").show();
            $("#yordi").show();
        } else {
            $("body").hide();
            $("#yordi").hide();
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

        yordiCoords(event.data);
        yordinormalCoords(event.data);
        yordinvector3Coords(event.data);

    })
})

function yordiClose() {
    $.post('http://code-system/yordicloseButton');
}

function yordiCopy() {
    const copyText = document.getElementById("yordiCoords").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

function yordiCoords(data) {

    if (data.type === 'yordi') {
        yordicoordsStart(data);
    }

}


function yordicoordsStart(data) {
    document.querySelector("#yordiCoords").textContent = data.text;
}
""