/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/adapters/feature', ['ember-data'], function (DS) {

  'use strict';

  var NumberAdapter = DS['default'].FixtureAdapter.extend({
    queryFixtures: function queryFixtures(records, query /*, type */) {
      return records.filter(function (record) {
        for (var key in query) {
          if (!query.hasOwnProperty(key)) {
            continue;
          }
          if (record[key] !== query[key]) {
            return false;
          }
        }
        return true;
      });
    }
  });

});
define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/ember-cli-feature-manager/tests/modules/ember-cli-feature-manager/features.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-cli-feature-manager');
  test('modules/ember-cli-feature-manager/features.js should pass jshint', function () {
    ok(true, 'modules/ember-cli-feature-manager/features.js should pass jshint.');
  });

});
define('dummy/ember-cli-feature-manager/tests/modules/ember-cli-feature-manager/initializers/feature-manager.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-cli-feature-manager/initializers');
  test('modules/ember-cli-feature-manager/initializers/feature-manager.js should pass jshint', function () {
    ok(true, 'modules/ember-cli-feature-manager/initializers/feature-manager.js should pass jshint.');
  });

});
define('dummy/ember-cli-feature-manager/tests/modules/ember-cli-feature-manager/public/features.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-cli-feature-manager/public');
  test('modules/ember-cli-feature-manager/public/features.js should pass jshint', function () {
    ok(true, 'modules/ember-cli-feature-manager/public/features.js should pass jshint.');
  });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/initializers/feature-manager', ['exports', 'ember-cli-feature-manager/initializers/feature-manager'], function (exports, featureManager) {

	'use strict';

	exports['default'] = featureManager['default'];

});
define('dummy/models/feature', ['exports', 'ember', 'ember-data'], function (exports, Ember, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		name: DS['default'].attr('string'),
		flag: DS['default'].attr('boolean'),
		implementations: DS['default'].attr(),
		selected: DS['default'].attr()
	});

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  exports['default'] = Router.map(function () {});

});
define('dummy/routes/application', ['exports', 'ember', 'ember-cli-feature-manager/public/features'], function (exports, Ember, features) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		beforeModel: function beforeModel() {},
		model: function model() {},
		setupController: function setupController() {
			// features.disable('search');
			// console.log('[application-route: setupController] ', features.isEnabled('search'), this.features.get('search'));

			// this.features.enable('search');
			console.log('[application-route: setupController] ', this.features.get('search'));
		}
	});

	// console.log('[application-route: setupController] ', this.features.isEnabled('search'), this.features.get('search'));

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		Search feature is enabled, it has 2 implementations:");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"style","text-align: center;");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"id","title");
        var el3 = dom.createTextNode("Feature Manager");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),5,5);
        var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
        block(env, morph0, context, "if", [get(env, context, "features.search")], {}, child0, null);
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/adapters/feature.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/feature.js should pass jshint', function() { 
    ok(true, 'adapters/feature.js should pass jshint.'); 
  });

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/models/feature.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/feature.js should pass jshint', function() { 
    ok(true, 'models/feature.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/initializers/feature-manager-test', ['ember', 'ember-cli-feature-manager/initializers/feature-manager', 'qunit'], function (Ember, feature_manager, qunit) {

  'use strict';

  var container, application;

  qunit.module('FeatureManagerInitializer', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    assert.expect(2);
    assert.ok(Ember['default'].isNone(feature_manager.featuresObject));

    feature_manager.initialize(container, application);

    // featuresObject is created after initialization
    assert.ok(!Ember['default'].isNone(feature_manager.featuresObject));
  });

});
define('dummy/tests/unit/initializers/feature-manager-test.jshint', function () {

  'use strict';

  module('JSHint - unit/initializers');
  test('unit/initializers/feature-manager-test.js should pass jshint', function() { 
    ok(true, 'unit/initializers/feature-manager-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"featureManagerFixturesName":"dummyFeatures","FEATURES":[],"dummyFeatures":[{"name":"search","flag":true}],"name":"ember-cli-feature-manager","version":"0.0.0.eb017ee5"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map