// desativador do Ctrl + U puro, apenas JavaScript
// [método 2]

document.onkeydown = function(e) {
        if (e.ctrlKey &&
            (e.keyCode === 67 ||
             e.keyCode === 86 ||
             e.keyCode === 85 ||
             e.keyCode === 117)) {
            return false;       
        } else {
            return true;
        }
};

$(document).keypress("u", function(e) {
    if (e.ctrlKey)
    {
        return false;
    } else {
        return true;
    }
})

// necessita de import de arquivo js por link src [HTML]
// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
