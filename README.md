# angular-pickadate-directive
Bower Component for a simple AngularJS directive using [pickadate.js](http://amsul.ca/pickadate.js/). 

## Usage

1. Made sure the pickadate lib and jquery are loaded.
2. Add `ng.pickadate` as a module dependency to your angular app.
3. Insert the `pick-Adate` or `pick-Atime` directive into your template:

```html
Date
<input type="text" name="pickdate" pick-Adate ng-model="pickdate" />


Time

<input type="text" name="picktime" pick-Atime ng-model="picktime" />
```
## License
MIT
