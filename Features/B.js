window.onload = function() {

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var time = today.getTime()

    document.getElementById('start').onclick = function() {
        chrome.storage.local.set({'startTime' : time}, function() {
            alert("Current time is: \n" +  hours + ":" + minutes + ":" + seconds + "\nGood luck studying!");
        });
    };
    document.getElementById('current').onclick = function() {  
        chrome.storage.local.get('startTime', function(data){
            var difference = (((time - data.startTime) / 1000) / 60);
            var time_studied = Math.abs(Math.round(difference));
            if (time_studied < 60){
                var studied = 0
            }
            else {
                var studied = Math.floor(time_studied / 60)
            }
            var start_time = new Date(data.startTime);
            alert("You started studying at: \n" + start_time + "\n\n You have been studying for:\n" + studied + "hours and " + time_studied + "minutes")
        })
    };
    document.getElementById('reset').onclick = function() {
        chrome.storage.local.get('startTime', function(data){
            var difference = (((time - data.startTime) / 1000) / 60);
            var time_studied = Math.abs(Math.round(difference));
            if (time_studied < 60){
                var studied = 0
            }
            else {
                var studied = Math.floor(time_studied / 60)
            }
            var start_time = new Date(data.startTime);
            alert("Congrats on finishing ~(^-^)~\n"+"\nYou started studying at: \n" + start_time + 
            "\n\n You have been studying for:\n" + studied + "hours and " + time_studied + "minutes");
            alert("Please note: Your timer will now restart ^-^");
        })
        chrome.storage.local.clear();
    };
}
