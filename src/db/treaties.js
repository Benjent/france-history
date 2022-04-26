const treaties = [
    {
        content: 'Fœdus des Wisigoths : installation des Wisigoths en Aquitaine',
        start: '0418-01-01',
        end: '0418-01-01',
    },
    {
        content: 'Fœdus des Francs saliens : installation des Wisigoths en Aquitaine',
        start: '0432-01-01',
        end: '0432-01-01',
    },
    {
        content: 'Renouvellement du fœdus des Wisigoths',
        start: '0418-01-01',
        end: '0418-01-01',
    },
    {
        content: 'Traité de Quierzy',
        start: '0754-04-14',
        end: '0754-04-14',
    },
    {
        content: 'Pax Nicephori',
        start: '0814-01-01',
        end: '0814-01-01',
    },
    {
        content: 'Traité de Verdun',
        start: '0843-08-01',
        end: '0843-08-01',
    },
    {
        content: 'Traité de Louviers',
        start: '0856-02-10',
        end: '0856-02-10',
    },
    {
        content: 'Traité de Ribemont',
        start: '0880-02-01',
        end: '0880-02-01',
    },
    {
        content: 'Traité de Saint-Clair-sur-Epte',
        start: '0911-10-01',
        end: '0911-10-01',
    },
    {
        content: 'Traité de Bonn',
        start: '0921-11-07',
        end: '0921-11-07',
    },
    {
        content: 'Traité de Gaillon',
        start: '1195-12-05',
        end: '1195-12-05',
    },
    {
        content: 'Traité du Goulet',
        start: '1200-05-18',
        end: '1200-05-18',
    },
    {
        content: 'Traité de Chinon',
        start: '1214-09-18',
        end: '1214-09-18',
    },
    {
        content: 'Traité de Lambeth',
        start: '1217-09-11',
        end: '1217-09-11',
    },
    {
        content: 'Traité de Paris',
        start: '1219-04-12',
        end: '1219-04-12',
    },
    {
        content: 'Traité de Paris',
        start: '1259-10-13',
        end: '1259-10-13',
    },
    {
        content: 'Traité de Tarascon',
        start: '1291-02-19',
        end: '1291-02-19',
    },
    {
        content: 'Traité de Paris',
        start: '1303-05-20',
        end: '1303-05-20',
    },
    {
        content: "Traité d'Athis-sur-Orge",
        start: '1305-06-23',
        end: '1305-06-23',
    },
    {
        content: "Trêve d'Esplechin",
        start: '1340-09-25',
        end: '1340-09-25',
    },
    {
        content: "Trêve de Malestroit",
        start: '1343-01-19',
        end: '1343-01-19',
    },
    {
        content: "Trêve de Malestroit",
        start: '1347-09-28',
        end: '1347-09-28',
    },
    {
        content: "Traité de Westminster",
        start: '1353-03-01',
        end: '1353-03-01',
    },
    {
        content: "Traité de Mantes-la-Jolie",
        start: '1354-02-22',
        end: '1354-02-22',
    },
    {
        content: "Traité de Valognes : confirmation du traité de Mantes-la-Jolie",
        start: '1355-09-10',
        end: '1355-09-10',
    },
    {
        content: "Trêve de Bordeaux",
        start: '1357-03-23',
        end: '1357-03-23',
    },
    {
        content: "Traité de Londres",
        start: '1358-01-01',
        end: '1358-01-01',
    },
    {
        content: "Traité de Londres",
        start: '1359-03-24',
        end: '1359-03-24',
    },
    {
        content: "Traité de Pontoise",
        start: '1359-03-24',
        end: '1359-03-24',
    },
    {
        content: "Traité de Guillon",
        start: '1360-03-10',
        end: '1360-03-10',
    },
    {
        content: "Traité de Brétigny",
        start: '1360-05-08',
        end: '1360-05-08',
    },
    {
        content: "Trêve d'Avignon",
        start: '1365-03-06',
        end: '1365-03-06',
    },
    {
        content: "Traité de Pampelune",
        start: '1365-03-06',
        end: '1365-03-06',
    },
    {
        content: "Traité de Guérande",
        start: '1365-04-12',
        end: '1365-04-12',
    },
    {
        content: "Traité de Libourne",
        start: '1366-09-23',
        end: '1366-09-23',
    },
    {
        content: "Traité de Tolède",
        start: '1368-11-20',
        end: '1368-11-20',
    },
    {
        content: "Traité de Vernon",
        start: '1371-03-29',
        end: '1371-03-29',
    },
    {
        content: "Traité de Loudun",
        start: '1372-12-01',
        end: '1372-12-01',
    },
    {
        content: "Trêve de Bruges",
        start: '1375-06-27',
        end: '1375-06-27',
    },
    {
        content: "Trêve de Bruges",
        start: '1376-03-12',
        end: '1376-03-12',
    },
    {
        content: "Trêve de Guérande",
        start: '1381-01-15',
        end: '1381-01-15',
    },
    {
        content: "Trêve de Leulinghem",
        start: '1384-01-26',
        end: '1384-01-26',
    },
    {
        content: "Traité de Tournai",
        start: '1385-12-18',
        end: '1385-12-18',
    },
    {
        content: "Trêve de Leulinghem",
        start: '1389-06-18',
        end: '1389-06-18',
    },
    {
        content: "Trêve de Leulinghem",
        start: '1393-04-28',
        end: '1393-04-28',
    },
    {
        content: "Paix de Chartres",
        start: '1409-03-09',
        end: '1409-03-09',
    },
    {
        content: "Paix de Bicêtre",
        start: '1410-11-02',
        end: '1410-11-02',
    },
    {
        content: "Traité de Bourges",
        start: '1412-05-18',
        end: '1412-05-18',
    },
    {
        content: "Paix d'Auxerre",
        start: '1412-08-22',
        end: '1412-08-22',
    },
    {
        content: "Paix de Pontoise",
        start: '1413-07-28',
        end: '1413-07-28',
    },
    {
        content: "Paix de Pontoise",
        start: '1414-09-04',
        end: '1414-09-04',
    },
    {
        content: "Traité de Saint-Maur-des-Fossés",
        start: '1418-09-16',
        end: '1418-09-16',
    },
    {
        content: "Traité de Pouilly-le-Fort",
        start: '1419-07-11',
        end: '1419-07-11',
    },
    {
        content: "Traité de Troyes",
        start: '1420-05-21',
        end: '1420-05-21',
    },
    {
        content: "Traité d'Amiens",
        start: '1423-04-17',
        end: '1423-04-17',
    },
]

export default treaties
