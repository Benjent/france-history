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
    {
        content: "Trêve de Compiègne",
        start: '1429-08-28',
        end: '1429-08-28',
    },
    {
        content: "Traité d'Arras",
        start: '1435-09-21',
        end: '1435-09-21',
    },
    {
        content: "Traité de Cusset",
        start: '1440-07-24',
        end: '1440-07-24',
    },
    {
        content: "Trêve de Tours",
        start: '1444-05-28',
        end: '1444-05-28',
    },
    {
        content: "Traité de Londres",
        start: '1474-07-25',
        end: '1474-07-25',
    },
    {
        content: "Traité de Picquigny : fin de la guerre de Cent Ans",
        start: '1475-08-29',
        end: '1475-08-29',
    },
    {
        content: "Traité d'Arras",
        start: '1482-12-23',
        end: '1482-12-23',
    },
    {
        content: "Traité de Grenade",
        start: '1500-11-11',
        end: '1500-11-11',
    },
    {
        content: "Armistice de Lyon",
        start: '1504-03-31',
        end: '1504-03-31',
    },
    {
        content: "Traité de Dijon",
        start: '1513-09-14',
        end: '1513-09-14',
    },
    {
        content: "Traité de Noyon",
        start: '1516-08-13',
        end: '1516-08-13',
    },
    {
        content: "Concordat de Bologne",
        start: '1516-08-18',
        end: '1516-08-18',
    },
    {
        content: "Traité de Fribourg",
        start: '1516-11-29',
        end: '1516-11-29',
    },
    {
        content: "Traité de Madrid",
        start: '1526-01-14',
        end: '1526-01-14',
    },
    {
        content: "Paix des Dames",
        start: '1529-08-03',
        end: '1529-08-03',
    },
    {
        content: "Paix de Nice",
        start: '1538-06-18',
        end: '1538-06-18',
    },
    {
        content: "Trêve de Crépy-en-Laonnois",
        start: '1544-09-18',
        end: '1544-09-18',
    },
    {
        content: "Traité d'Ardres",
        start: '1546-07-17',
        end: '1546-07-17',
    },
    {
        content: "Traité d'Outreau",
        start: '1550-03-24',
        end: '1550-03-24',
    },
    {
        content: "Trêve de Vaucelles",
        start: '1556-02-15',
        end: '1556-02-15',
    },
    {
        content: "Trêve de Vaucelles",
        start: '1556-02-15',
        end: '1556-02-15',
    },
    {
        content: "Traité du Cateau-Cambrésis",
        start: '1559-04-02',
        end: '1559-04-02',
    },
    {
        content: "Paix du Cateau-Cambrésis",
        start: '1559-04-03',
        end: '1559-04-03',
    },
    {
        content: "Paix de Vervins",
        start: '1598-05-02',
        end: '1598-05-02',
    },
    {
        content: "Traité de Lyon",
        start: '1601-01-17',
        end: '1601-01-17',
    },
    {
        content: "Traité de Xanten",
        start: '1614-11-12',
        end: '1614-11-12',
    },
    {
        content: "Traité de Cherasco",
        start: '1631-04-06',
        end: '1631-04-06',
    },
    {
        content: "Paix de Münster",
        start: '1648-01-30',
        end: '1648-01-30',
    },
    {
        content: "Traité de Münster",
        start: '1648-10-24',
        end: '1648-10-24',
    },
    {
        content: "Traité d'Osnabrück",
        start: '1648-10-24',
        end: '1648-10-24',
    },
    {
        content: "Traité des Pyrénées",
        start: '1659-11-07',
        end: '1659-11-07',
    },
    {
        content: "Traité d'Aix-la-Chapelle",
        start: '1668-05-02',
        end: '1668-05-02',
    },
    {
        content: "Traité de Westminster",
        start: '1674-02-19',
        end: '1674-02-19',
    },
    {
        content: "Traité de Nimègue",
        start: '1678-09-17',
        end: '1678-09-17',
    },
    {
        content: "Paix de Celle",
        start: '1679-02-05',
        end: '1679-02-05',
    },
    {
        content: "Paix de Fontainebleau",
        start: '1679-09-02',
        end: '1679-09-02',
    },
    {
        content: "Trêve de Ratisbonne",
        start: '1684-08-15',
        end: '1684-08-15',
    },
    {
        content: "Traité de Ryswick",
        start: '1697-09-20',
        end: '1697-09-20',
    },
    {
        content: "Traité d'Utrecht",
        start: '1713-04-11',
        end: '1713-04-11',
    },
    {
        content: "Paix de La Haye",
        start: '1720-02-20',
        end: '1720-02-20',
    },
    {
        content: "Traité de Vienne",
        start: '1738-11-18',
        end: '1738-11-18',
    },
    {
        content: "Traité d'Aix-la-Chapelle",
        start: '1748-10-18',
        end: '1748-10-18',
    },
    {
        content: "Traité de Paris",
        start: '1763-02-10',
        end: '1763-02-10',
    },
    {
        content: "Traité de Paris : Indépendance des États-Unis d'Amérique",
        start: '1783-09-03',
        end: '1783-09-03',
    },
    {
        content: "Traité de Versailles",
        start: '1783-09-03',
        end: '1783-09-03',
    },
    {
        content: "Traité de Bâle",
        start: '1795-04-22',
        end: '1795-04-22',
    },
    {
        content: "Traité de Bâle",
        start: '1795-07-22',
        end: '1795-07-22',
    },
    {
        content: "Traité de Campo-Formio",
        start: '1797-10-18',
        end: '1797-10-18',
    },
    {
        content: "Traité de Lunéville",
        start: '1801-02-09',
        end: '1801-02-09',
    },
    {
        content: "Paix d'Amiens",
        start: '1802-03-27',
        end: '1802-03-27',
    },
    {
        content: "Traité de Presbourg",
        start: '1805-12-26',
        end: '1805-12-26',
    },
    {
        content: "Traité de Tilsit",
        start: '1807-07-07',
        end: '1807-07-07',
    },
    {
        content: "Traité de Tilsit",
        start: '1807-07-09',
        end: '1807-07-09',
    },
    {
        content: "Traité de Schönbrunn",
        start: '1809-07-09',
        end: '1809-07-09',
    },
    {
        content: "Traité de Paris",
        start: '1815-11-20',
        end: '1815-11-20',
    },
    {
        content: "Traité de Tanger",
        start: '1844-09-10',
        end: '1844-09-10',
    },
    {
        content: "Traité de Paris",
        start: '1856-03-30',
        end: '1856-03-30',
    },
    {
        content: "Traité de Tien-Tsin",
        start: '1858-06-26',
        end: '1858-06-26',
    },
    {
        content: "Traité de Zurich",
        start: '1859-11-11',
        end: '1859-11-11',
    },
    {
        content: "Traité de Turin",
        start: '1860-03-24',
        end: '1860-03-24',
    },
    {
        content: "Traité de Saïgon",
        start: '1862-06-05',
        end: '1862-06-05',
    },
    {
        content: "Traité de Francfort",
        start: '1871-05-10',
        end: '1871-05-10',
    },
    {
        content: "Traité de Saïgon",
        start: '1874-03-15',
        end: '1874-03-15',
    },
    {
        content: "Traité de Hué",
        start: '1883-08-25',
        end: '1883-08-25',
    },
    {
        content: "Traité de Hué",
        start: '1884-06-06',
        end: '1884-06-06',
    },
    {
        content: "Traité de Tien-Tsin",
        start: '1885-06-09',
        end: '1885-06-09',
    },
    {
        content: "Protocole de paix Boxer",
        start: '1901-09-07',
        end: '1901-09-07',
    },
    {
        content: "Traité de Fès",
        start: '1912-03-30',
        end: '1912-03-30',
    },
    {
        content: "Traité de Brest-Litovsk",
        start: '1918-03-03',
        end: '1918-03-03',
    },
    {
        content: "Traité de Versailles",
        start: '1919-06-28',
        end: '1919-06-28',
    },
    {
        content: "Traité de Saint-Germain-en-Laye",
        start: '1919-09-10',
        end: '1919-09-10',
    },
    {
        content: "Traité de Neuilly",
        start: '1919-11-27',
        end: '1919-11-27',
    },
    {
        content: "Traité de Trianon",
        start: '1920-06-04',
        end: '1920-06-04',
    },
    {
        content: "Traité de Sèvres",
        start: '1920-08-10',
        end: '1920-08-10',
    },
    {
        content: "Traité de Lausanne",
        start: '1923-07-24',
        end: '1923-07-24',
    },
    {
        content: "Armistice de Panmunjeom",
        start: '1953-07-27',
        end: '1953-07-27',
    },
    {
        content: "Accords de Genève",
        start: '1954-07-20',
        end: '1954-07-20',
    },
    {
        content: "Accords d'Évian",
        start: '1962-03-18',
        end: '1962-03-18',
    },
]

export default treaties
