<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

# PhotoEditorSDK HTML5 Ruby on Rails Demonstration
Rails Gem for easily integrating [PhotoEditorSDK HTML5](https://www.photoeditorsdk.com) in Ruby on Rails.

## Note 
The PhotoEditorSDK is a product of 9Elements GmBH. 
Please [order a license](https://www.photoeditorsdk.com/pricing#contact/?utm_source=Github&utm_medium=PESDK&utm_term=RAILS-DEMO). Please see `LICENSE.md` for licensing details.


## PhotoEditor SDK for HTML5.
The [PhotoEditor SDK] (https://www.photoeditorsdk.com/?utm_source=Github&utm_medium=PESDK&utm_term=RAILS-DEMO) for HTML5 is a **fully customizable** photo editor which you can integrate into your Ruby on Rails app within minutes.

## Integration

1. Init Rails 
```bash
rails new pesdk-rails-demo
cd pesdk-rails-demo 
```

2. Get PhotoEditor HTML5 
```bash
export VERSION=3.6.5
wget "https://github.com/imgly/pesdk-html5-build/archive/v$VERSION.zip"
unzip -x "v$VERSION.zip"
```

3. Copy files to vendor directory 
```bash
mkdir -p vendor/assets/javascripts
cp "pesdk-html5-build-$VERSION/js/PhotoEditor"* vendor/assets/javascripts
cp "pesdk-html5-build-$VERSION/js/vendor/"* vendor/assets/javascripts

mkdir -p vendor/assets/stylesheets
cp "pesdk-html5-build-$VERSION/css/PhotoEditor"* vendor/assets/stylesheets

mkdir -p vendor/assets/images
cp -R "pesdk-html5-build-$VERSION/assets/"* vendor/assets/images
```

4. Create new home controller with index page

```bash 
rails generate controller home index
```

5. Open `app/views/home/index.html.erb`

```html
<%# PESDK Demo Integration %>
<div id="pesdk" style="width: 100vmin; height: 75vmin; padding: 0px; margin: 0px">
```

6. Update `app/assets/javascripts/application.js`
```javascript 
...
//= require react
//= require react-dom
//= require PhotoEditorSDK.min
//= require PhotoEditorReactUI.min
...
```

7. Update `app/assets/stylesheets/application.css`
```css 
...
*= require PhotoEditorReactUI
...
```

8. Edit `app/assets/javascripts/home.coffee` and insert

```coffeescript 
window.onload = ->
  apiKey = 'your-api-key'
  # <-- Please replace this with your API key
  container = document.getElementById('pesdk')
  editor = new (PhotoEditorSDK.UI.ReactUI)(
    container: container
    apiKey: apiKey
    assets:
      baseUrl: '/assets'
      resolver: (path) ->
        path
)
  return
```

or create `app/assets/javascripts/home.js` and insert

```javascript 
window.onload = function () {
  var apiKey = 'your-api-key' // <-- Please replace this with your API key

  var container = document.getElementById('pesdk')

  var editor = new PhotoEditorSDK.UI.ReactUI({
    container: container,
    apiKey: apiKey,
    assets: {
        baseUrl: '/assets', // => Matches default asset url for rails
        resolver: function (path) { return path }
    }
  })
}
```


9. Start rails 
```bash 
bundle exec rails server -p 3000 
```

10. Open  Webbrowser and go to `http://localhost:3000/home/index`


## License
Please see [LICENSE](https://github.com/imgly/pesdk-html5-rails/blob/master/LICENSE.md) for licensing details.

## Authors and Contributors
Made 2013-2017 by @9elements

## Support or Contact
Contact contact@photoeditorsdk.com for support requests or to upgrade to an enterprise licence.

