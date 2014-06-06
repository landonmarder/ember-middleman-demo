middleman-ember-template: with Ember.js
=======================================

I included a demo layout with sample Ember templates and controllers. Template from [here](https://github.com/rossta/middleman-ember-template).

**Template Layout**

	source/
		index.html
		images/
		stylesheets/
		javascripts/
			application.js
			main.js
			controllers/  foo_controller.js
			models/       foo.js
			routes/  			foo_route.js
			views/        foo_view.js
			templates/    foo.handlebars
	vendor/
		stylesheets/
		javascripts/
			jquery.js

You may also want to checkout the [Ember.js with Middleman example](https://github.com/GutenYe/example-ember-with-middleman).

Usage
-----

Install middleman:
```
gem install middleman
```

Clone the repo:
```
$ git clone git@github.com:landonmarder/ember-middleman-demo.git <PROJECT NAME>
```

Then bundle, and start the middleman server
```
bundle
middleman server
```

You can read more about project templates on the [Middleman site](http://middlemanapp.com/getting-started/welcome/).
