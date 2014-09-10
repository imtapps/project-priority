moving_project = null;

ProjectPriority.DraggableProjectComponent = Ember.Component.extend({
    dragStart: function(event) {
      event.dataTransfer.setData('text/data', this.get('project.id'));
      moving_project = this.get('project')
    },
    dragOver: function(event) {
        event.preventDefault();
    },
    drop: function(event) {
        var id = event.dataTransfer.getData('text/data');
        moving_project.set('priority', this.get('project.priority') - 1);
        moving_project.set('when_moved', new Date());
    }
});
