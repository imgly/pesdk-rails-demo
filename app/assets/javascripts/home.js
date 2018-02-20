window.onload = function () {
  var license = 'license-string' // <-- Please replace this with the content of your license file. The JSON-object must be in string format.
  var container = document.getElementById('pesdk')
  
  var editor = new PhotoEditorSDK.UI.ReactUI({
    container: container,
    license: license,
    assets: {
        baseUrl: '/assets',
        resolver: function (path) { return path }
    }
  })
}
