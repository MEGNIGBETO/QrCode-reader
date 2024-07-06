window.addEventListener('DOMContentLoaded', function(){
    document.getElementById("demarrer").onclick = function() { 
        function domReady(fn) {
            if (
                document.readyState === "complete" ||
                document.readyState === "interactive"
            ) {
                setTimeout(fn, 1000);
            } else {
                document.addEventListener("DOMContentLoaded", fn);
            }
        }
    
        // If found you qr code
        function onScanSuccess(decodeText, decodeResult) {
            alert("You Qr is : " + decodeText, decodeResult);
        }
    
        domReady(function () {
    
            let htmlscanner = new Html5QrcodeScanner(
                "my-qr-reader",
                { fps: 10, qrbos: 250 }
            );
            htmlscanner.render(onScanSuccess);
        });
    };  
});