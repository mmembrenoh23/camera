import './style.css'
import { takeSnapshot } from './counter.js'

document.querySelector('#app').innerHTML = `
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
`

takeSnapshot(document.querySelector('#takeSnapshot'))
