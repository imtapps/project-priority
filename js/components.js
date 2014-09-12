moving_project = null;

ProjectPriority.DraggableProjectComponent = Ember.Component.extend({
    dragStart: function(event) {
      moving_project = this.get('project')
    },
    dragOver: function(event) {
        event.preventDefault();
    },
    drop: function(event) {
        if(this.get('project.id') != moving_project.get('id')) {
            new_priority = (this.get('project.priority') + this.get('project.prev')) / 2;
            moving_project.set('priority', new_priority);
            moving_project.set('prev', this.get('project.prev'));
            this.set('project.prev', new_priority);
        }
    }
});
