ProjectPriority.Project = DS.Model.extend({
    summary: DS.attr('string'),
    ticketId: DS.attr('integer')
});

ProjectPriority.Project.FIXTURES = [
    {
        id: 1,
        summary: 'ticket #1',
        ticketId: 12345
    },
    {
        id: 2,
        summary: 'ticket #2',
        ticketId: 23456
    },
    {
        id: 3,
        summary: 'ticket #3',
        ticketId: 34567
    }
];
