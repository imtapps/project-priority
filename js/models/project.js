ProjectPriority.Project = DS.Model.extend({
    summary: DS.attr('string'),
    priority: DS.attr('integer'),
    ticketId: DS.attr('integer')
});

ProjectPriority.Project.FIXTURES = [
    {
        id: 1,
        summary: 'ticket #1',
        priority: 4000,
        ticketId: 12345
    },
    {
        id: 2,
        summary: 'ticket #2',
        priority: 2000,
        ticketId: 23456
    },
    {
        id: 3,
        summary: 'ticket #3',
        priority: 3000,
        ticketId: 34567
    }
];
