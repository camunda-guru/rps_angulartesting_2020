/**
 * Created by BALASUBRAMANIAM on 30-11-2015.
 */
var worker = new Worker('filetest.js');
var width = 0;
var counter = 0;
var percentage = 0;

worker.onmessage = function (event) {
    counter++;

    //var prime = document.getElementById('prime');
   // prime.innerHTML = 'Prime found: ' + event.data;

    if (counter % 100 == 0) { // ---> Update progressbar.
        percentage++;
        width += 3;

        var progressbar = document.getElementById('progressbar');
        progressbar.innerHTML = percentage + '%';
        progressbar.style.width = width + 'px';
    }
};