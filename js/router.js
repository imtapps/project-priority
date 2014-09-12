ProjectPriority.Router.map(function() {
    this.resource('project', { path: '/' });
});

ProjectPriority.ProjectRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('project').then(
            function(result) {
                new_result = result.toArray().sort(function(a, b){return a.get('priority') > b.get('priority')});
                var prev = 0;
                new_result.forEach(function(item, index) {
                    console.log(item);
                    item.set('prev', prev);
                    prev = item.get('priority');
                });
                return new_result;
            }
        );
    }
});
