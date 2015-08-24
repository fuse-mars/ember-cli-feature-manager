# Ember-cli-feature-manager

Feature Manager addon allows developers to define and turn on/off features for different reasons.
It also allows them to test different implementations of a particular feature.

## Usage

This addon can only be used by the latest version of ember-cli (0.2.3)
You can add the addon into your application with the command below:
`ember install ember-cli-feature-manager`


## Setup
This addon reads the setup/configuration data from the `ENV.APP` of the `config/environment.js` file.
You can specify the names of the service and feature-data using
`featureManagerService` and `featureManagerFixturesName` attributes respectively.
These default to `features` and `FEATURES` respectively.

The service name is what get used when injecting the addon into routes, controllers, and components.
The feature-data name specifies the array object that contains a list of features.
Below is the data format:
```json
[{
	name: string,
	flag: boolean,
	implementations: [],
	selected: []
}, {
	
}
...
]
```

**Ex:**
```js
APP: {
    featureManagerService: 'features'
    featureManagerFixtures: 'FEATURES',
    FEATURES: [{
        name: 'search',
        flag: true,
        implementations: ['facetView', 'backend-solr', 'backend-essearch', 'google'],
        selected: 'facetView'
      },{
        name: 'login',
        flag: true
      }]
}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

# TODO 
- Finish the design of how `implementation` and `selected` arrays will be used
- Write tests
- write proper documentation
