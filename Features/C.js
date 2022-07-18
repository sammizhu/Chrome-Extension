window.onload = function() {
    document.getElementById('save').onclick = function() {
        var value = document.getElementById('notes').value;

        chrome.storage.sync.set({'myLine': value}, function(){
            alert('Good luck studying! You got this!');
        });
    };
    document.getElementById('get').onclick = function() {
        chrome.storage.sync.get('myLine', function(data) {
            alert("Your goal today was to acccomplish:\n\n" + data.myLine + "\n\n Did you acheive it?");
            chrome.storage.sync.clear();
        });
    };
};