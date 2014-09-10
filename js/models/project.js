ProjectPriority.Project = DS.Model.extend({
    summary: DS.attr('string'),
    priority: DS.attr('integer'),
    when_moved: DS.attr('date'),
    ticketId: DS.attr('integer')
});

temp_date = new Date();
ProjectPriority.Project.FIXTURES = [
    {
        id: 1,
        summary: 'ticket #1',
        priority: 0,
        when_moved: temp_date,
        ticketId: 12345
    },
    {
        id: 2,
        summary: 'ticket #2',
        priority: 0,
        when_moved: temp_date,
        ticketId: 23456
    },
    {
        id: 3,
        summary: 'ticket #3',
        priority: 0,
        when_moved: temp_date,
        ticketId: 34567
    }
];
