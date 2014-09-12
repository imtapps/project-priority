ProjectPriority.Project = DS.Model.extend({
    summary: DS.attr('string'),
    priority: DS.attr('integer'),
    when_moved: DS.attr('date'),
    ticketId: DS.attr('integer')
});

ProjectPriority.Project.FIXTURES = [
    {
        id: 1,
        summary: 'ticket #1',
        priority: 10000,
        ticketId: 12345
    },
    {
        id: 2,
        summary: 'ticket #2',
        priority: 20000,
        ticketId: 23456
    },
    {
        id: 3,
        summary: 'ticket #3',
        priority: 30000,
        ticketId: 34567
    },
    {
        id: 4,
        summary: 'ticket #4',
        priority: 40000,
        ticketId: 34567
    },
    {
        id: 5,
        summary: 'ticket #5',
        priority: 50000,
        ticketId: 34567
    },
];
