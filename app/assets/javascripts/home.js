window.onload = function () {
  var apiKey = 'your-api-key' // <-- Please replace this with your API key

  var container = document.getElementById('pesdk')
  var editor = new PhotoEditorSDK.UI.ReactUI({
    container: container,
    apiKey: apiKey,    
    assets: {
        baseUrl: '/assets',
        resolver: function (path) { return path }
    }
  })
}
