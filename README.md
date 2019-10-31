<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

# PhotoEditor SDK HTML5 Ruby on Rails Demonstration
Rails Gem for easily integrating the [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo) for HTML5 in Ruby on Rails.

## Note 
The [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo) is a product of img.ly GmbH. 
Please [request a license](https://account.photoeditorsdk.com/pricing?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo). Please see `LICENSE.md` for licensing details.


## PhotoEditor SDK for HTML5.
The [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo) for HTML5 is a **fully customizable** photo editor which you can integrate into your Ruby on Rails app within minutes.

Our SDK offers two different UIs you can use. The following installation guide will show you how to use the ReactUI. If you want to use the DesktopUI take a look at the section below this guide.

## Integration

1. Init Rails 
```bash
rails new pesdk-rails-demo
cd pesdk-rails-demo 
```

2. Get PhotoEditor HTML5

```bash
export VERSION=4.21.5
wget "https://github.com/imgly/pesdk-html5-build/archive/v$VERSION.zip"
unzip -x "v$VERSION.zip"
```
with curl
```bash
export VERSION=4.21.5
curl -O -L "https://github.com/imgly/pesdk-html5-build/archive/v$VERSION.zip"
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

``` bash
rails generate controller home index
```

5. Open `app/views/home/index.html.erb`

```html
<!-- PESDK Demo Integration -->
<div id="pesdk" style="width: 100vmin; height: 75vmin; padding: 0px; margin: 0px">
```

6. Update `app/assets/javascripts/application.js`

```javascript 
...
//= require react.production.min
//= require react-dom.production.min
//= require PhotoEditorSDK.min
//= require PhotoEditorSDK.UI.ReactUI.min
...
```

7. Update `app/assets/stylesheets/application.css`

```css 
...
*= require PhotoEditorSDK.UI.ReactUI.min
...
*/
```
Important: Insert the code snipped before the `*/`

8. Edit `app/assets/javascripts/home.coffee` and insert

```coffeescript
window.onload = ->
  license = 'license-string' // <-- Please replace this with the content of your license file. The JSON-object must be in string format.
  container = document.getElementById('pesdk')
  editor = new (PhotoEditorSDK.UI.ReactUI)(
    container: container
    license: license
    assets:
      baseUrl: '/assets'
      resolver: (path) ->
        path
)
  return
```

If you don't want to use CoffeeScript, delete `app/assets/javascripts/home.coffee`, create `app/assets/javascripts/home.js` and insert

```javascript
window.onload = function () {
  license = 'license-string' // <-- Please replace this with the content of your license file. The JSON-object must be in string format.
  var container = document.getElementById('pesdk')
  var editor = new PhotoEditorSDK.UI.ReactUI({
    container: container,
    license: license,
    assets: {
        baseUrl: '/assets', // => Matches default asset url for rails
        resolver: function (path) { return path }
    }
  })
}
```


9. Start rails 
``` bash
bundle exec rails server -p 3000 
```

10. Open Webbrowser and go to `http://localhost:3000/home/index`

## Switch between React- and DesktopUI
In order to use the DesktopUI instead of the ReactUI, you need to make some changes to your setup. Replace in point ...

6.  `//= require PhotoEditorSDK.UI.ReactUI.min` with `//= require PhotoEditorSDK.UI.DesktopUI.min`
7.  `*= require PhotoEditorSDK.UI.ReactUI.min` with `*= require PhotoEditorSDK.UI.DesktopUI.min`
8.  `editor = new (PhotoEditorSDK.UI.ReactUI)` with `editor = new (PhotoEditorSDK.UI.DesktopUI)` in `home.coffee` or 

    `var editor = new PhotoEditorSDK.UI.ReactUI` with `var editor = new PhotoEditorSDK.UI.DesktopUI` in `home.js`

## License
Please see [LICENSE](https://github.com/imgly/pesdk-html5-rails/blob/master/LICENSE.md) for licensing details.

## Authors and Contributors
Made 2013-2019 by img.ly

## Support or Contact
Use our [service desk](http://support.photoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://account.photoeditorsdk.com/pricing?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo) on our website.
