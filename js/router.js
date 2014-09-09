ProjectPriority.Router.map(function() {
    this.resource('project', { path: '/' });
});

ProjectPriority.ProjectRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('project');
    }
});
