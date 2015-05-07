# Ember-cli-feature-manager

Feature Manager addon allows developerS to turn on and off feature for different reasons.
It also allows them to test different implementations of a particular feature.

## Setup

`featureFlagsService`
`featureManagerFixturesName`

```
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

`features` and `FEATURES`

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
