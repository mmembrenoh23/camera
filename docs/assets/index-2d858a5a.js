(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function c(s){Webcam.set({width:490,height:350,image_format:"jpeg",jpeg_quality:90}),Webcam.attach("#my_camera"),$("#takeSnapshot").on("click",function(r){Webcam.snap(function(i){$(".image-tag").val(i),document.getElementById("results").innerHTML='<img src="'+i+'"/>'})})}document.querySelector("#app").innerHTML=`
<div class="row">
<div class="col-md-6">
    <div id="my_camera"></div>
    <br/>
    <input type=button value="Take Snapshot" id="takeSnapshot">
    <input type="hidden" name="image" class="image-tag">
</div>
<div class="col-md-6">
    <div id="results">Your captured image will appear here...</div>
</div>
<div class="col-md-12 text-center">
    <br/>
    <button class="btn btn-success">Submit</button>
</div>
</div>
`;c(document.querySelector("#takeSnapshot"));
