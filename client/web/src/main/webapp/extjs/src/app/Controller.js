/**
 * Controllers are the glue that binds an application together. All they really do is listen for events (usually from
 * views) and take some action. Here's how we might create a Controller to manage Users:
 *
 *     Ext.define('MyApp.controller.Users', {
 *         extend: 'Ext.app.Controller',
 *
 *         init: function() {
 *             console.log('Initialized Users! This happens before the Application launch function is called');
 *         }
 *     });
 *
 * The init function is a special method that is called when your application boots. It is called before the
 * {@link Ext.app.Application Application}'s launch function is executed so gives a hook point to run any code before
 * your Viewport is created.
 *
 * The init function is a great place to set up how your controller interacts with the view, and is usually used in
 * conjunction with another Controller function - {@link Ext.app.Controller#control control}. The control function
 * makes it easy to listen to events on your view classes and take some action with a handler function. Let's update
 * our Users controller to tell us when the panel is rendered:
 *
 *     Ext.define('MyApp.controller.Users', {
 *         extend: 'Ext.app.Controller',
 *
 *         init: function() {
 *             this.control({
 *                 'viewport > panel': {
 *                     render: this.onPanelRendered
 *                 }
 *             });
 *         },
 *
 *         onPanelRendered: function() {
 *             console.log('The panel was rendered');
 *         }
 *     });
 *
 * We've updated the init function to use this.control to set up listeners on views in our application. The control
 * function uses the new ComponentQuery engine to quickly and easily get references to components on the page. If you
 * are not familiar with ComponentQuery yet, be sure to check out the {@link Ext.ComponentQuery documentation}. In brief though,
 * it allows us to pass a CSS-like selector that will find every matching component on the page.
 *
 * In our init function above we supplied 'viewport > panel', which translates to "find me every Panel that is a direct
 * child of a Viewport". We then supplied an object that maps event names (just 'render' in this case) to handler
 * functions. The overall effect is that whenever any component that matches our selector fires a 'render' event, our
 * onPanelRendered function is called.
 *
 * ## Using refs
 *
 * One of the most useful parts of Controllers is the new ref system. These use the new {@link Ext.ComponentQuery} to
 * make it really easy to get references to Views on your page. Let's look at an example of this now:
 *
 *     Ext.define('MyApp.controller.Users', {
 *         extend: 'Ext.app.Controller',
 *
 *         refs: [
 *             {
 *                 ref: 'list',
 *                 selector: 'grid'
 *             }
 *         ],
 *
 *         init: function() {
 *             this.control({
 *                 'button': {
 *                     click: this.refreshGrid
 *                 }
 *             });
 *         },
 *
 *         refreshGrid: function() {
 *             this.getList().store.load();
 *         }
 *     });
 *
 * This example assumes the existence of a {@link Ext.grid.Panel Grid} on the page, which contains a single button to
 * refresh the Grid when clicked. In our refs array, we set up a reference to the grid. There are two parts to this -
 * the 'selector', which is a {@link Ext.ComponentQuery ComponentQuery} selector which finds any grid on the page and
 * assigns it to the reference 'list'.
 *
 * By giving the reference a name, we get a number of things for free. The first is the getList function that we use in
 * the refreshGrid method above. This is generated automatically by the Controller based on the name of our ref, which
 * was capitalized and prepended with get to go from 'list' to 'getList'.
 *
 * The way this works is that the first time getList is called by your code, the ComponentQuery selector is run and the
 * first component that matches the selector ('grid' in this case) will be returned. All future calls to getList will
 * use a cached reference to that grid. Usually it is advised to use a specific ComponentQuery selector that will only
 * match a single View in your application (in the case above our selector will match any grid on the page).
 *
 * Bringing it all together, our init function is called when the application boots, at which time we call this.control
 * to listen to any click on a {@link Ext.button.Button button} and call our refreshGrid function (again, this will
 * match any button on the page so we advise a more specific selector than just 'button', but have left it this way for
 * simplicity). When the button is clicked we use out getList function to refresh the grid.
 *
 * You can create any number of refs and control any number of components this way, simply adding more functions to
 * your Controller as you go. For an example of real-world usage of Controllers see the Feed Viewer example in the
 * examples/app/feed-viewer folder in the SDK download.
 *
 * ## Generated getter methods
 *
 * Refs aren't the only thing that generate convenient getter methods. Controllers often have to deal with Models and
 * Stores so the framework offers a couple of easy ways to get access to those too. Let's look at another example:
 *
 *     Ext.define('MyApp.controller.Users', {
 *         extend: 'Ext.app.Controller',
 *
 *         models: ['User'],
 *         stores: ['AllUsers', 'AdminUsers'],
 *
 *         init: function() {
 *             var User = this.getUserModel(),
 *                 allUsers = this.getAllUsersStore();
 *
 *             var ed = new User({name: 'Ed'});
 *             allUsers.add(ed);
 *         }
 *     });
 *
 * By specifying Models and Stores that the Controller cares about, it again dynamically loads them from the appropriate
 * locations (app/model/User.js, app/store/AllUsers.js and app/store/AdminUsers.js in this case) and creates getter
 * functions for them all. The example above will create a new User model instance and add it to the AllUsers Store.
 * Of course, you could do anything in this function but in this case we just did something simple to demonstrate the
 * functionality.
 *
 * ## Further Reading
 *
 * For more information about writing Ext JS 4 applications, please see the
 * [application architecture guide](#/guide/application_architecture). Also see the {@link Ext.app.Application} documentation.
 *
 * @docauthor Ed Spencer
 */
Ext.define('Ext.app.Controller', {

    mixins: {
        observable: 'Ext.util.Observable'
    },

    /**
     * @cfg {String} id The id of this controller. You can use this id when dispatching.
     */
    
    /**
     * @cfg {String[]} models
     * Array of models to require from AppName.model namespace. For example:
     * 
     *     Ext.define("MyApp.controller.Foo", {
     *         extend: "Ext.app.Controller",
     *         models: ['User', 'Vehicle']
     *     });
     * 
     * This is equivalent of:
     * 
     *     Ext.define("MyApp.controller.Foo", {
     *         extend: "Ext.app.Controller",
     *         requires: ['MyApp.model.User', 'MyApp.model.Vehicle'],
     *         getUserModel: function() {
     *             return this.getModel("User");
     *         },
     *         getVehicleModel: function() {
     *             return this.getModel("Vehicle");
     *         }
     *     });
     * 
     */

    /**
     * @cfg {String[]} views
     * Array of views to require from AppName.view namespace and to generate getter methods for.
     * For example:
     * 
     *     Ext.define("MyApp.controller.Foo", {
     *         extend: "Ext.app.Controller",
     *         views: ['List', 'Detail']
     *     });
     * 
     * This is equivalent of:
     * 
     *     Ext.define("MyApp.controller.Foo", {
     *         extend: "Ext.app.Controller",
     *         requires: ['MyApp.view.List', 'MyApp.view.Detail'],
     *         getListView: function() {
     *             return this.getView("List");
     *         },
     *         getDetailView: function() {
     *             return this.getView("Detail");
     *         }
     *     });
     *
     */

    /**
     * @cfg {String[]} stores
     * Array of stores to require from AppName.store namespace and to generate getter methods for.
     * For example:
     * 
     *     Ext.define("MyApp.controller.Foo", {
     *         extend: "Ext.app.Controller",
     *         stores: ['Users', 'Vehicles']
     *     });
     * 
     * This is equivalent of:
     * 
     *     Ext.define("MyApp.controller.Foo", {
     *         extend: "Ext.app.Controller",
     *         requires: ['MyApp.store.Users', 'MyApp.store.Vehicles']
     *         getUsersStore: function() {
     *             return this.getView("Users");
     *         },
     *         getVehiclesStore: function() {
     *             return this.getView("Vehicles");
     *         }
     *     });
     *
     */

    /**
     * @cfg {Object[]} refs
     * Array of configs to build up references to views on page. For example:
     * 
     *     Ext.define("MyApp.controller.Foo", {
     *         extend: "Ext.app.Controller",
     *         refs: [
     *             {
     *                 ref: 'list',
     *                 selector: 'grid'
     *             }
     *         ],
     *     });
     * 
     * This will add method `getList` to the controller which will internally use
     * Ext.ComponentQuery to reference the grid component on page.
     *
     * The following fields can be used in ref definition:
     *
     * - `ref` - name of the reference.
     * - `selector` - Ext.ComponentQuery selector to access the component.
     * - `autoCreate` - True to create the component automatically if not found on page.
     * - `forceCreate` - Forces the creation of the component every time reference is accessed
     *   (when `get<REFNAME>` is called).
     */

    onClassExtended: function(cls, data, hooks) {
        var className = Ext.getClassName(cls),
            match = className.match(/^(.*)\.controller\./),
            namespace,
            onBeforeClassCreated,
            requires,
            modules,
            namespaceAndModule;
        
        if (match !== null) {
            namespace = Ext.Loader.getPrefix(className) || match[1];
            onBeforeClassCreated = hooks.onBeforeCreated;
            requires = [];
            modules = ['model', 'view', 'store'];

            hooks.onBeforeCreated = function(cls, data) {
                var i, ln, module,
                    items, j, subLn, item;

                for (i = 0,ln = modules.length; i < ln; i++) {
                    module = modules[i];
                    namespaceAndModule = namespace + '.' + module + '.';

                    items = Ext.Array.from(data[module + 's']);

                    for (j = 0,subLn = items.length; j < subLn; j++) {
                        item = items[j];
                        // Deciding if a class name must be qualified:
                        // 1 - if the name doesn't contains at least one dot, we must definitely qualify it
                        // 2 - the name may be a qualified name of a known class, but:
                        // 2.1 - in runtime, the loader may not know the class - specially in production - so we must check the class manager
                        // 2.2 - in build time, the class manager may not know the class, but the loader does, so we check the second one
                        //       (the loader check assures it's really a class, and not a namespace, so we can have 'Books.controller.Books',
                        //       and requesting a controller called Books will not be underqualified)
                        if (item.indexOf('.') !== -1 && (Ext.ClassManager.isCreated(item) || Ext.Loader.isAClassNameWithAKnownPrefix(item))) {
                            requires.push(item);
                        } else {
                            requires.push(namespaceAndModule + item);
                        }
                    }
                }

                Ext.require(requires, Ext.Function.pass(onBeforeClassCreated, arguments, this));
            };
        }
    },

    /**
     * Creates new Controller.
     * @param {Object} config (optional) Config object.
     */
    constructor: function(config) {
        this.mixins.observable.constructor.call(this, config);

        Ext.apply(this, config || {});
        this.createGetters('model', this.models);
        this.createGetters('store', this.stores);
        this.createGetters('view', this.views);

        if (this.refs) {
            this.ref(this.refs);
        }
    },

    /**
     * A template method that is called when your application boots. It is called before the
     * {@link Ext.app.Application Application}'s launch function is executed so gives a hook point to run any code before
     * your Viewport is created.
     *
     * @param {Ext.app.Application} application
     * @template
     */
    init: Ext.emptyFn,

    /**
     * A template method like {@link #init}, but called after the viewport is created.
     * This is called after the {@link Ext.app.Application#launch launch} method of Application is executed.
     *
     * @param {Ext.app.Application} application
     * @template
     */
    onLaunch: Ext.emptyFn,

    createGetters: function(type, refs) {
        type = Ext.String.capitalize(type);

        var i      = 0,
            length = (refs) ? refs.length : 0,
            fn, ref, parts, x, numParts;

        for (; i < length; i++) {
            fn    = 'get';
            ref   = refs[i];
            parts = ref.split('.');
            numParts = parts.length;

            // Handle namespaced class names. E.g. feed.Add becomes getFeedAddView etc.
            for (x = 0 ; x < numParts; x++) {
                fn += Ext.String.capitalize(parts[x]);
            }

            fn += type;

            if (!this[fn]) {
                this[fn] = Ext.Function.pass(this['get' + type], [ref], this);
            }
            // Execute it right away
            this[fn](ref);
        }
    },

    ref: function(refs) {
        refs = Ext.Array.from(refs);
        
        var me = this,
            i = 0,
            length = refs.length,
            info, ref, fn;
        
        me.references = me.references || [];

        for (; i < length; i++) {
            info = refs[i];
            ref  = info.ref;
            fn   = 'get' + Ext.String.capitalize(ref);

            if (!me[fn]) {
                me[fn] = Ext.Function.pass(me.getRef, [ref, info], me);
            }
            me.references.push(ref.toLowerCase());
        }
    },

    /**
     * Registers a {@link #refs reference}.
     * @param {Object} ref
     */
    addRef: function(ref) {
        return this.ref([ref]);
    },

    getRef: function(ref, info, config) {
        this.refCache = this.refCache || {};
        info = info || {};
        config = config || {};

        Ext.apply(info, config);

        if (info.forceCreate) {
            return Ext.ComponentManager.create(info, 'component');
        }

        var me = this,
            cached = me.refCache[ref];

        if (!cached) {
            me.refCache[ref] = cached = Ext.ComponentQuery.query(info.selector)[0];
            if (!cached && info.autoCreate) {
                me.refCache[ref] = cached = Ext.ComponentManager.create(info, 'component');
            }
            if (cached) {
                cached.on('beforedestroy', function() {
                    me.refCache[ref] = null;
                });
            }
        }

        return cached;
    },

    /**
     * Returns true if a {@link #refs reference} is registered.
     * @return {Boolean}
     */
    hasRef: function(ref) {
        return this.references && this.references.indexOf(ref.toLowerCase()) !== -1;
    },

    /**
     * Adds listeners to components selected via {@link Ext.ComponentQuery}. Accepts an
     * object containing component paths mapped to a hash of listener functions.
     *
     * In the following example the `updateUser` function is mapped to to the `click`
     * event on a button component, which is a child of the `useredit` component.
     *
     *     Ext.define('AM.controller.Users', {
     *         init: function() {
     *             this.control({
     *                 'useredit button[action=save]': {
     *                     click: this.updateUser
     *                 }
     *             });
     *         },
     *
     *         updateUser: function(button) {
     *             console.log('clicked the Save button');
     *         }
     *     });
     *
     * See {@link Ext.ComponentQuery} for more information on component selectors.
     *
     * @param {String/Object} selectors If a String, the second argument is used as the
     * listeners, otherwise an object of selectors -> listeners is assumed
     * @param {Object} listeners
     */
    control: function(selectors, listeners) {
        this.application.control(selectors, listeners, this);
    },

    /**
     * Returns instance of a {@link Ext.app.Controller controller} with the given name.
     * When controller doesn't exist yet, it's created.
     * @param {String} name
     * @return {Ext.app.Controller} a controller instance.
     */
    getController: function(name) {
        return this.application.getController(name);
    },

    /**
     * Returns instance of a {@link Ext.data.Store Store} with the given name.
     * When store doesn't exist yet, it's created.
     * @param {String} name
     * @return {Ext.data.Store} a store instance.
     */
    getStore: function(name) {
        return this.application.getStore(name);
    },

    /**
     * Returns a {@link Ext.data.Model Model} class with the given name.
     * A shorthand for using {@link Ext.ModelManager#getModel}.
     * @param {String} name
     * @return {Ext.data.Model} a model class.
     */
    getModel: function(model) {
        return this.application.getModel(model);
    },

    /**
     * Returns a View class with the given name.  To create an instance of the view,
     * you can use it like it's used by Application to create the Viewport:
     *
     *     this.getView('Viewport').create();
     *
     * @param {String} name
     * @return {Ext.Base} a view class.
     */
    getView: function(view) {
        return this.application.getView(view);
    }
});
