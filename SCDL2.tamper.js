// ==UserScript==
// @name         [SoundCloud] MrVV SCDL
// @version      2
// @description  Feed Songs from a SoundCloud Playlist into mrvv.net SCDL
// @author       Mrvv - modified by me
// @match        http://*soundcloud.com/*
// @match        https://*soundcloud.com/*
// @grant        none
// ==/UserScript==

//var wnd = null; // Window for returning values

//var console = {};
//console.log = function() {};
//window.console = console;

window.scdl2_client_id = "12gUJC0hH2ct1EGOcYXQIzRFU91c72Ea";
window.scdl2_last_url = "";
window.scdl2_counter_1 = 0;
window.scdl2_currentlydl = 0;
window.scdl2_loadingelem;
window.scdl2_adolf = 0;

scdl2_elemets_that_have = [];

window.scdl2_client_id = getSCDL2id();
//console.log("scdl2_started");


function setup_scdl2() {
	  putinloaderelement();
    //putinadolf();
    //put  in .listenNetworkSidebar as last element
}

var interval1Id = setInterval(function() {
    var amountofsharebtns = document.querySelectorAll('.sc-button-group')
        .length;

    //var int = window.open("about:blank", "", "_blank");

    //alert(amountofsharebtns);
    if (amountofsharebtns != window.scdl2_counter_1 && amountofsharebtns > 0 || window.scdl2_last_url != document.URL ) {
        insert_button();
        //window.scdl2_counter_1 = document.querySelectorAll('scdl2_btn_start');
        //int.document.write("window.scdl2_counter_1: " + window.scdl2_counter_1 + "<br>");
        //int.document.write("amountofsharebtns: " + amountofsharebtns + "<br>");
        window.scdl2_counter_1 = amountofsharebtns;
        //placePLDownloadButton();
    }
    updateloaderelement();
    putinadolf();
    window.scdl2_last_url = document.URL;
}, 20000);

function placePDDownloadButton() {
    var a_scpldl2 = document.createElement('a');
    var scplText2 = document.createTextNode("DLPL2!");
    a_scpldl2.appendChild(scplText2);
    a_scpldl2.title = "Download Playlist";
    a_scpldl2.className = "scpldl_btn2_start moreActions__button sc-button-medium sc-button-responsive";

    var elems = document.getElementsByTagName('*'),
        i;

    for (i in elems) {
        var niijuuu = elems[i].className;
        if (typeof niijuuu !== 'undefined') {
            if (elems[i].className.indexOf("moreActions__button") > -1) {
                var gotitnot = true;
                for (io = 0; io < scdl2_elemets_that_have.length; ++io) {
                    if (scdl2_elemets_that_have[io].isSameNode(elems[i].parentNode)) {
                        gotitnot = false;
                    }
                    //console.log("oihwedelighlishdgflikhsdlikghlkishdglkhsdlkghlskdgh");
                }
                if (gotitnot) {
                    //console.log(elems[i].className)
                    var kiddies = elems[i].childNodes;
                    //console.log(elems[i].childNodes);
                    //console.log(elems[i].childNodes[1].className);

                    for (yts = 0; yts < kiddies.length; ++yts) {

                        //wnd.document.write("kiddies[yts].className: " + kiddies[yts].className + "<br>");
                        //console.log(kiddies[yts].className);
                        // If line is at the top, make a button for the playlist download
                        if (kiddies[yts].className && kiddies[yts].className.indexOf("sc-button-medium") > -1 && kiddies[yts].className.indexOf("scpldl_btn2_start") < 0) {
                            var clone_a = a_scpldl2.cloneNode(true);
                            clone_a.addEventListener("click", function() {
                                Playlist_Download_Button(this);
                            }, true);
                            elems[i].appendChild(clone_a);
                            yts = kiddies.length;
                            scdl2_elemets_that_have.push(elems[i].parentNode);
                        }
                    }
                }
            }
        }
    }
};

function putinadolf() {
    if (window.scdl2_adolf == 0) {
        var mnfgtjy = document.getElementsByClassName('listenNetworkSidebar')[0];
        if (typeof mnfgtjy !== "undefined") {
            var ifrm = document.createElement("iframe");

            var sdf2 = document.URL.split("/");
            if (sdf2.length = 5) {
                ifrm.setAttribute("src", "https://mrvv.net/beta/scdl_adolfs/?artist=" + sdf2[3]);
            } else {
                ifrm.setAttribute("src", "https://mrvv.net/beta/scdl_adolfs/");
            }

            ifrm.style.width = "100%";
            ifrm.style.height = "500px";
            ifrm.frameBorder = "0";
            ifrm.id = "scdl_adolf1";
            document.body.appendChild(ifrm);

            mnfgtjy.appendChild(ifrm);
            window.scdl2_adolf = 1;
        }
    }
}


function insert_button() {

    //var scdl_html_button = '<a class="scdl_btn_start sc-button sc-button-medium sc-button-responsive" tabindex="0" title="Download">&nbsp;&nbsp;&nbsp;&nbsp;SCDL</a>';


    var a_scdl2 = document.createElement('a');
    var linkText = document.createTextNode(" . . SCDL2");
    a_scdl2.appendChild(linkText);
    a_scdl2.title = "Push to SCDL";
    a_scdl2.className = "scdl2_btn_start sc-button sc-button-small sc-button-responsive";

    var a_scpldl = document.createElement('a');
    var scplText = document.createTextNode("DLPL!");
    a_scpldl.appendChild(scplText);
    a_scpldl.title = "Download Playlist";
    a_scpldl.className = "scpldl_btn_start sc-button sc-button-medium sc-button-responsive";

    //var wnd = window.open("about:blank", "", "_blank");

    var elems = document.getElementsByTagName('*'),
        i;
    for (i in elems) {

        //asdfas
        var niijuuu = elems[i].className;
        if (typeof niijuuu !== 'undefined') {
            if (elems[i].className.indexOf("sc-button-group") > -1) {
                var gotitnot = true;
                for (io = 0; io < scdl2_elemets_that_have.length; ++io) {
                    if (scdl2_elemets_that_have[io].isSameNode(elems[i].parentNode)) {
                        gotitnot = false;
                    }
                    //console.log("oihwedelighlishdgflikhsdlikghlkishdglkhsdlkghlskdgh");
                }
                if (gotitnot) {
                    //console.log(elems[i].className)
                    var kiddies = elems[i].childNodes;
                    //console.log(elems[i].childNodes);
                    //console.log(elems[i].childNodes[1].className);

                    for (yts = 0; yts < kiddies.length; ++yts) {

                        //wnd.document.write("kiddies[yts].className: " + kiddies[yts].className + "<br>");
                        //console.log(kiddies[yts].className);
                        // If line is at the top, make a button for the playlist download
                        if (kiddies[yts].className && kiddies[yts].className.indexOf("sc-button-medium") > -1 && kiddies[yts].className.indexOf("scpldl_btn_start") < 0) {
                            var clone_a = a_scpldl.cloneNode(true);
                            clone_a.addEventListener("click", function() {
                                Playlist_Download_Button(this);
                            }, true);
                            elems[i].appendChild(clone_a);
                            yts = kiddies.length;
                            scdl2_elemets_that_have.push(elems[i].parentNode);
                        // Otherwise do a normal download button.
                        } else if (kiddies[yts].className && kiddies[yts].className.indexOf("scdl2_btn_start") < 0) {
                            var clone_a = a_scdl2.cloneNode(true);
                            clone_a.addEventListener("click", function() {
                                actual_listener_event(this);
                            }, true);
                            elems[i].appendChild(clone_a);
                            yts = kiddies.length;
                            scdl2_elemets_that_have.push(elems[i].parentNode);
                        //} else {
                        //    console.log("do fucking nothing");
                        }
                    }
                }
            }
        }

    }

}

function Playlist_Download_Button(diese) {
//    alert("Playlist Download Function!");
   // var pldl = window.open("about:blank", "", "_blank");
    var rgrgrgrg = diese.closest(".l-about-rows");

    var rgrgrgrg23 = rgrgrgrg.querySelectorAll(".trackItem");
    //pldl.document.write("rgrgrgrg23: " + rgrgrgrg23 + "<br>");
    //pldl.document.write("rgrgrgrg23.length: " + rgrgrgrg23.length + "<br>");
    //pldl.document.write("rgrgrgrg23[1]: " + rgrgrgrg23[1] + "<br>");
    //actual_listener_event(rgrgrgrg23[0]);
    //actual_listener_event(rgrgrgrg23[1]);
    //actual_listener_event(rgrgrgrg23[99]);

    var i = 0;

    actual_listener_event(rgrgrgrg23[i]);
    ++i;

    var pldl = setInterval(function(){

        actual_listener_event(rgrgrgrg23[i]);
        ++i;

        if (i === rgrgrgrg23.length)
            clearInterval(pldl);

    }, 10000);
}

function actual_listener_event(diese) {


    var rgrgrgrg = diese.closest(".streamContext");

    if (rgrgrgrg == null)
        rgrgrgrg = diese.closest(".chartTrack");

    if (rgrgrgrg == null)
        rgrgrgrg = diese.closest(".trackItem");

    //var wnd = window.open("about:blank", "", "_blank");
    //wnd.document.write("document.URL: " + document.URL + "<br>");
    //wnd.document.write("rgrgrgrg: " + rgrgrgrg + "<br>");

    if (rgrgrgrg != null) {
        var rgrgrgrg23 = rgrgrgrg.querySelectorAll("a");

        //wnd.document.write("rgrgrgrg23: " + rgrgrgrg23 + "<br>");

        var lgth = 0;
        var rgrgrgrg2;

        for (var i = 0; i < rgrgrgrg23.length; i++) {
            //wnd.document.write("i: " + i + "<br>");
            //wnd.document.write("rgrgrgrg23.length: " + rgrgrgrg23.length + "<br>");
            //wnd.document.write("rgrgrgrg23[i].href: " + rgrgrgrg23[i].href + "<br>");
            //if its the longest link around the item AAAANNDD a soundcloud link
            if (rgrgrgrg23[i].href.length > lgth && rgrgrgrg23[i].href.indexOf("soundcloud.com") != -1) {
                var lgth = rgrgrgrg23[i].href.length;
                rgrgrgrg2 = rgrgrgrg23[i];
            }
        }

        //wnd.document.write("rgrgrgrg2: " + rgrgrgrg2 + "<br>");
        //wnd.document.write("rgrgrgrg2.href: " + rgrgrgrg2.href + "<br>");

        var url4scdl2 = rgrgrgrg2.href;

    }

    // alert(url4scdl2.split("?in=").shift());

    if (typeof url4scdl2 === "undefined") {
        url4scdl2 = document.URL;
    } else {
        if (url4scdl2.indexOf("soundcloud.com") !== -1) {
            url4scdl2 = url4scdl2;
        } else {
            url4scdl2 = 'https://soundcloud.com' + url4scdl2;
        }

    }

    //wnd.document.write("url4scdl2: " + url4scdl2 + "<br>");

    sendformscdl2final(url4scdl2);

}

function findUpTag(el, tag) {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName === tag)
            return el;
    }
    return null;
}

function sendformscdl2final(dllinksc) {
    //document.getElementById("formerdumdum").submit();

    currentlydl(1);

//    var delimiter = '?';

//    var tokens = dllinksc.split(delimiter),
//        dllinksc = tokens[0] + "?" + tokens[1];

    if (dllinksc.indexOf("?in=") > -1)
        dllinksc = dllinksc.split("?in=").shift();

    //alert(dllinksc);
    //if ((wnd === null) || (wnd.closed))
    //    var wnd = window.open("about:blank", "", "_blank");

    //wnd.document.write("dllinksc: " + dllinksc + "<br>");

    console.log(dllinksc);

    //return;



    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
            var data = JSON.parse(anHttpRequest.responseText);
            //console.log(anHttpRequest.responseText);

            if (data.hasOwnProperty('error')) {
                //$("#loadingscdl2").hide();
                currentlydl(-1);
                console.log(data.error);
            } else {
                //window.location.replace("https://w394l116.hoststar.ch/scdl/scdlDL.php?url="+data.dlfileurl);
                OpenInNewTab("https://mrvv.net/scdl/scdlDL.php?url=" + data.dlfileurl);
                currentlydl(-1);
            }
        }

    };

    // anHttpRequest.open("GET", "https://mrvv.net/scdl/scdlSC.php?url=" + dllinksc, true);

    // anHttpRequest.send(null);

}

function OpenInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function updateloaderelement() {
    if (window.scdl2_currentlydl < 1) {
        window.scdl2_loadingelem = 'hidden';
    } else {
        window.scdl2_loadingelem = 'visible';
    }
}

function putinloaderelement() {
    if (typeof window.scdl2_loadingelem === "undefined") {
        var scdl2_html_button = '<div id="loadingscdl2"><a id="loadingscdl2inner" class=" sc-button sc-button-cta sc-button-medium" href="#">SCDL2 currently downloading nothin</a></div>';

        var loadingscdl2_e = document.createElement('div');
        loadingscdl2_e.id = "loadingscdl2";
        var loadingscdl2inner_e = document.createElement('a');
        loadingscdl2inner_e.id = "loadingscdl2inner";

        var adsfadf2 = document.createTextNode("SCDL2 currently downloading nothin");
        loadingscdl2inner_e.appendChild(adsfadf2);
        //a_scdl.title = "Download";
        loadingscdl2inner_e.href = "#";
        loadingscdl2inner_e.className = " sc-button sc-button-cta sc-button-medium";
        loadingscdl2_e.appendChild(loadingscdl2inner_e);
        window.scdl2_loadingelem = loadingscdl2_e;

        insertAfter(loadingscdl2_e, document.getElementById('content'));

    }
}

function currentlydl(scdl2operator) {
    window.scdl2_currentlydl = window.scdl2_currentlydl + scdl2operator;
    var ijhfieh2 = 'SCDL2 currently downloading ' + window.scdl2_currentlydl;
    document.getElementById("loadingscdl2inner")
        .textContent = ijhfieh2;
}

function getSCDL2id() {
    // var client = new HttpClient();
    // client.get("https://mrvv.net/scdl/scdlCF.php?client_id=yes", function(json) {
    //   console.log("id " + json.client_id);
    //   return json.client_id;
    // });

}

function continueiftrack(passedvarcit) {
    //return "fuuu";
    alert(passedvarcit.split("?in=").shift());
    var resolve_this_url = 'https://api.soundcloud.com/resolve.json?url=' + passedvarcit + '&client_id=' + window.scdl2_client_id;
    console.log(resolve_this_url);
    var client = new HttpClient();
    client.get(resolve_this_url, function(data) {
        if (data.hasOwnProperty('error')) {
            console.log(data.error);
        } else {
            if (typeof data.kind === "undefined") {
                console.log(data.kind);
            } else {
                return true;
            }
        }
    }, "json");
}



function insertAfter(newNode, referenceNode) {
    if (typeof newNode !== "undefined" && typeof referenceNode !== "undefined" && referenceNode != null) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
}


setup_scdl2();
