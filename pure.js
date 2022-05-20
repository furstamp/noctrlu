// desativador do Ctrl + U puro, apenas JavaScript
// [método 1]

document.onkeydown = function(e) {
   if (e.ctrlKey &&
      (e.keyCode === 85)) {
      return false;
   }
};
