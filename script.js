import $ from "https://cdn.skypack.dev/jquery@3.6.0";

$("#addMore").click(function () {
  var cnt = 1;
  cnt = $('#moreLines .moreID').length;
  $("#addMore").before(
    '<div id=moreLines><input id=\"id'+ cnt +'\" class="moreID" value=\"ID\"></input> <input id=\"cmntMore\" value=\"cmnt\"></input></div>'
  );
  console.log(cnt)
});

$("#confirm").click(function () {
  var clnt = document.getElementById("client");
  var doct = document.getElementById("type");
  var idno = document.getElementById("idNumber");
  var cmnt = document.getElementById("comment");
  const conf = {
    client: clnt.value,
    doctype: doct.value,
    id: idno.value,
    comment: cmnt.value
  };
  console.log("this is working");
  // conf.client = 'this has changed';
  console.log(conf.client);
  console.log(conf.doctype);
  console.log(conf.id);
  console.log(conf.comment);
});
