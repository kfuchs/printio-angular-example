printio-angular-example
=====================

This was inspired by [printio-api-site-ex](https://github.com/printdotio/printio-api-site-ex).

Example of how to build a website based off of the obviously amazing [print.io api](http://print.io/api) and [pio.js](http://print.io/platform-web).

## What's Included?
- an incredibly quick completely client-side solution
- fully responsive bootstrap 3-based site... ready for mobile/tablets!
- an example products page leveraging the print.io api
- an example product details page leveraging the print.io api
- fully integrated shopping cart
- fully integrated pio.js web widget for easy product customization (yayyyyyy!)
- facebook, pinterest, and twitter sharing
- facebook and pinterest meta tags w/ product description to help their robots/crawlers read product data
- SEO-friendly URLs and [schema.org](http://www.schema.org/Product) compliant product markup for even more SEO juice - all that's left is making sure your site can be indexed read [this](http://www.yearofmoo.com/2012/11/angularjs-and-seo.html)
- free beer

## Requirements
1. That you have nodejs installed
2. That you have npm installed (usually comes with node but just sayin')
3. That you have bower installed ( `npm install -g bower` )

## Setup Locally
1. `cd` to the project root
2. run `npm install`
3. run `bower install`
4. run `grunt serve`

It will now be available at `http://localhost:9020` to change the the port see the gruntfile.js in the root directory.

## Building a dist package
1. `cd` to the project root
2. run `grunt build`

Running `grunt build` generates an optimized version of your application in the `dist/` directory. If you want to further understand the actions above look at [Yeoman](http://yeoman.io/) `&&` [Angular Generator](https://github.com/yeoman/generator-angular)

## TODOs

Search the codebase for "TODO" to find small items one should take care of before deploying to production (like changing facebook app ID, adding in print.io api key, etc).

This project also needs tests, and further documentation. Currently it only has generated placeholder test files. 

*License === MIT*
