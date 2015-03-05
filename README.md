# AngularJS Haversine

A simple AngularJS module that uses the [haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to calculate the distance between two coordinates.

Adapted from [haversine for Node.js](https://github.com/niix/haversine) by [niix](https://github.com/niix).

## Changelog

- 2015-03-12 - v0.1.0 - Initial release.

## Installation

    bower install angular-haversine

## Usage

Define the `benharold.haversine` dependency on your module and the `haversine` service will be available to you:

    angular.module('myApp', ['benharold.haversine'])
        .controller('myController', [
            '$scope', 'haversine',
            function ($scope, haversine) {

                var start = {
                    latitude: 30.849635,
                    longitude: -83.24559
                };

                var end = {
                    latitude: 27.950575,
                    longitude: -82.457178
                };

                console.log(haversine(start, end));
                console.log(haversine(start, end, {unit: 'km'}));
                console.log(haversine(start, end, {threshold: 1}));
                console.log(haversine(start, end, {threshold: 1, unit: 'km'}));
            }
        ]);

## Testing

I've tested this module against AngularJS 1.2 and 1.3. To run the unit tests, clone the repository and install the dependencies:

    git clone https://github.com/benharold/angular-haversine.git /path/to/destination
    cd /path/to/destination && npm install && bower install
    
Notice that I have the `osx` reporter defined as a dependency in `package.json` and enabled in `karma.conf.js`, so if you're on linux or Windows I assume you'll have to disable it. Now you can run `karma`:
    
    karma start
    
-
[MIT License](http://opensource.org/licenses/MIT)
