ProjectPriority.DraggableProjectComponent = Ember.Component.extend({
    dragStart: function(event) {
      event.dataTransfer.setData('text/data', this.get('project.id'));
    },
    dragOver: function(event) {
        event.preventDefault();
    },
    drop: function(event) {
        var id = event.dataTransfer.getData('text/data');
        debugger
    }
});
