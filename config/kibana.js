define(['settings'],
    function (Settings) {
        return new Settings({
            elasticsearch: "http://"+window.location.hostname+"/elasticsearch",
            default_route     : '/dashboard/file/default.json',
            kibana_index: "kibana-int",
            panel_names: [
                'histogram',
                'map',
                'goal',
                'table',
                'filtering',
                'timepicker',
                'text',
                'hits',
                'column',
                'trends',
                'bettermap',
                'query',
                'terms',
                'stats',
                'sparklines'
            ]
        });
    });
