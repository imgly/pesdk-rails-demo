<p align="center">
  <img src="http://static.photoeditorsdk.com/logo.png" />
</p>

## Note

The [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo) is a product of img.ly GmbH.
Please [request a license](https://account.photoeditorsdk.com/pricing?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo). Please see `LICENSE.md` for licensing details.

## PhotoEditor SDK for HTML5.

The [PhotoEditor SDK](https://www.photoeditorsdk.com/?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo) for HTML5 is a **fully customizable** photo editor which you can integrate into your Ruby on Rails app within minutes.

## Prerequisites

- Ruby 2.3+
- Rails 4.2+
- Node.js 8.16.0+
- Yarn 1.x+

## Integration

1. Init Rails

```bash
rails new pesdk-rails-demo
cd pesdk-rails-demo
```

The following step is only necessary for Rails versions that released before Rails 6

2. Add Webpacker to your `Gemfile`

```html
gem 'webpacker'
```

and install it

```bash
rails webpacker:install
```

3. Add PhotoEditorSDK to the new `package.json` file

```json
{
  "dependencies": {
    "@rails/webpacker": "4.2.2",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "styled-components": "^4.4.1",
    "photoeditorsdk": "^5.0.0"
  },
  "devDependencies": {
    "webpack-dev-server": "^3.10.3"
  }
}
```

4. Install the new dependencies

```bash
yarn install
```

5. Create new home controller with index page

````bash
rails generate controller home index


6. Open `app/views/home/index.html.erb`

```html
<!-- PESDK Demo Integration -->
<div
  id="pesdk"
  style="width: 100vmin; height: 75vmin; padding: 0px; margin: 0px"
></div>
```

7. Update `app/javascript/packs/application.js`

```javascript
...
import { PhotoEditorSDKUI } from 'photoeditorsdk'

window.onload = function () {
  PhotoEditorSDKUI.init({
    license: 'license-string', // <-- Please replace this with the content of your license file. The JSON-object must be in string format.
    container: '#pesdk',
    image: './example.jpg'
  })
}
...
```

8. Copy the `assets` folder from `node_modules/photoeditorsdk` to `public/home/`

9. Start rails

```bash
rails s
```

10. Open Webbrowser and go to `http://localhost:3000/home/index`

## License

Please see [LICENSE](https://github.com/imgly/pesdk-html5-rails/blob/master/LICENSE.md) for licensing details.

## Authors and Contributors

Made 2013-2020 by img.ly

## Support or Contact

Use our [service desk](http://support.photoeditorsdk.com) for bug reports or support requests. To request a commercial license, please use the [license request form](https://account.photoeditorsdk.com/pricing?utm_campaign=Projects&utm_source=Github&utm_medium=Side_Projects&utm_content=Rails-Demo) on our website.
````
