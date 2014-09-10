var thisSucks = new function() {
    this.assailant = null;
    this.drop = function(target) {
        console.log(this.assailant.get('project.id'));
        console.log(target.get('project.id'));
    }
}

ProjectPriority.DraggableProjectComponent = Ember.Component.extend({
    dragStart: function(event) {
      event.dataTransfer.setData('text/data', this.get('project.id'));
      thisSucks.assailant = this;
    },
    dragOver: function(event) {
        event.preventDefault();
    },
    drop: function(event) {
        var id = event.dataTransfer.getData('text/data');
        thisSucks.drop(this);
    }
});
