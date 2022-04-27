const wars = [
    {
        content: 'Révolte des bagaudes de Tibatto',
        start: '0435-01-01',
        end: '0437-12-31',
    },
    {
        content: 'Guerre de Burgondie',
        start: '0523-01-01',
        end: '0533-12-31',
    },
    {
        content: 'Conquête de la Thuringe',
        start: '0531-01-01',
        end: '0531-12-31',
    },
    {
        content: 'Guerre des Goths',
        start: '0535-01-01',
        end: '0553-12-31',
    },
    {
        content: "Conquête de l'Alémanie",
        start: '0536-01-01',
        end: '0536-12-31',
    },
    {
        content: 'Conquête de la Bavière',
        start: '0555-01-01',
        end: '0555-12-31',
    },
    {
        content: 'Campagnes de Bretagne',
        start: '0560-01-01',
        end: '0578-12-31',
    },
    {
        content: 'Guerre de succession mérovingienne',
        start: '0584-01-01',
        end: '0585-12-31',
    },
    {
        content: 'Guerre franco-frisonne',
        start: '0600-01-01',
        end: '0793-12-31',
    },
    {
        content: 'Guerre civile des Francs',
        start: '0715-01-01',
        end: '0719-12-31',
    },
    {
        content: 'Invasion omeyyade',
        start: '0719-01-01',
        end: '0759-12-31',
    },
    {
        content: 'Guerre des Lombards',
        start: '0755-01-01',
        end: '0758-12-31',
    },
    {
        content: "Guerre d'Aquitaine",
        start: '0761-01-01',
        end: '0768-12-31',
    },
    {
        content: "Guerre des Saxons",
        start: '0772-01-01',
        end: '0804-12-31',
    },
    {
        content: 'Seconde guerre des Lombards',
        start: '0773-01-01',
        end: '0774-12-31',
    },
    {
        content: 'Guerre des Avars',
        start: '0791-01-01',
        end: '0805-12-31',
    },
    {
        content: 'Invasions sarrasines',
        start: '0798-01-01',
        end: '0990-12-31',
    },
    {
        content: 'Guerre civile entre les fils de Louis le Pieux',
        start: '0830-01-01',
        end: '0842-12-31',
    },
    {
        content: 'Guerre franco-bretonne',
        start: '0843-01-01',
        end: '0851-12-31',
    },
    {
        content: 'Luttes inter-dynastiques carolingiennes',
        start: '0876-01-01',
        end: '0946-12-31',
    },
    {
        content: 'Invasions vikings',
        start: '0799-01-01',
        end: '1014-12-31',
    },
    {
        content: 'Première croisade',
        start: '1095-01-01',
        end: '1099-12-31',
    },
    {
        content: 'Croisades de secours',
        start: '1100-01-01',
        end: '1101-12-31',
    },
    {
        content: 'Deuxième croisade',
        start: '1146-12-01',
        end: '1149-12-31',
    },
    {
        content: 'Conflit entre Capétiens et Plantagenêt',
        start: '1159-01-01',
        end: '1204-12-31',
    },
    {
        content: 'Troisième croisade',
        start: '1189-01-01',
        end: '1192-12-31',
    },
    {
        content: 'Quatrième croisade',
        start: '1202-01-01',
        end: '1204-12-31',
    },
    {
        content: 'Croisade des Albigeois',
        start: '1209-01-01',
        end: '1229-12-31',
    },
    {
        content: 'Guerre franco-anglaise',
        start: '1213-01-01',
        end: '1214-12-31',
    },
    {
        content: 'Première guerre des barons',
        start: '1215-01-01',
        end: '1217-12-31',
    },
    {
        content: 'Cinquième croisade',
        start: '1217-01-01',
        end: '1221-12-31',
    },
    {
        content: 'Conflit entre Capétiens et Plantagenêt',
        start: '1224-01-01',
        end: '1259-12-31',
    },
    {
        content: 'Guerre du Poitou',
        start: '1224-01-01',
        end: '1226-12-31',
    },
    {
        content: 'Guerre de Saintonge',
        start: '1242-01-01',
        end: '1242-12-31',
    },
    {
        content: 'Septième croisade',
        start: '1248-01-01',
        end: '1254-12-31',
    },
    {
        content: 'Huitième croisade',
        start: '1270-05-01',
        end: '1270-11-30',
    },
    {
        content: 'Neuvième croisade',
        start: '1271-01-01',
        end: '1272-12-31',
    },
    {
        content: "Croisade d'Aragon",
        start: '1284-01-01',
        end: '1285-12-31',
    },
    {
        content: "Guerre de Guyenne",
        start: '1294-01-01',
        end: '1303-12-31',
    },
    {
        content: "Guerre de Flandre",
        start: '1297-01-01',
        end: '1305-12-31',
    },
    {
        content: "Guerre de Saint-Sardos",
        start: '1323-01-01',
        end: '1327-12-31',
    },
    {
        content: 'Guerre de Cent Ans',
        start: '1337-05-24',
        end: '1453-10-09',
    },
    {
        content: 'Guerre des Deux-Roses',
        start: '1455-01-01',
        end: '1485-01-01',
    },
    {
        content: 'Guerre civile catalane',
        start: '1462-01-01',
        end: '1472-12-12',
    },
    {
        content: 'Guerre de Bourgogne',
        start: '1474-01-01',
        end: '1477-12-12',
    },
    {
        content: 'Guerre de succession de Bourgogne',
        start: '1477-01-01',
        end: '1482-12-12',
    },
    {
        content: 'Guerre folle',
        start: '1485-01-01',
        end: '1485-12-12',
    },
    {
        content: 'Guerre de Bretagne',
        start: '1487-01-01',
        end: '1491-12-12',
    },
    {
        content: `Première guerre d'Italie`,
        start: '1494-01-01',
        end: '1497-12-31',
    },
    {
        content: `Deuxième guerre d'Italie`,
        start: '1499-01-01',
        end: '1500-12-31',
    },
    {
        content: `Troisième guerre d'Italie`,
        start: '1501-01-01',
        end: '1504-12-31',
    },
    {
        content: `Quatrième guerre d'Italie`,
        start: '1508-01-01',
        end: '1513-12-31',
    },
    {
        content: `Cinquième guerre d'Italie`,
        start: '1515-01-01',
        end: '1516-12-31',
    },
    {
        content: `Sixième guerre d'Italie`,
        start: '1521-01-01',
        end: '1525-12-31',
    },
    {
        content: `Septième guerre d'Italie`,
        start: '1526-01-01',
        end: '1530-12-31',
    },
    {
        content: `Huitième guerre d'Italie`,
        start: '1535-01-01',
        end: '1538-12-31',
    },
    {
        content: `Neuvième guerre d'Italie`,
        start: '1542-01-01',
        end: '1544-12-31',
    },
    {
        content: `Rough Wooing`,
        start: '1548-01-01',
        end: '1550-12-31',
    },
    {
        content: `Dixième guerre d'Italie`,
        start: '1552-01-01',
        end: '1556-12-31',
    },
    {
        content: `Onzième guerre d'Italie`,
        start: '1557-01-01',
        end: '1559-12-31',
    },
    {
        content: `Guerre de succession du Portugal`,
        start: '1580-01-01',
        end: '1583-12-31',
    },
    {
        content: `Guerre franco-espagnole`,
        start: '1595-01-01',
        end: '1598-12-31',
    },
    {
        content: `Guerre franco-savoyarde`,
        start: '1600-01-01',
        end: '1601-12-31',
    },
    {
        content: `Guerre de succession de Juliers`,
        start: '1609-01-01',
        end: '1614-12-31',
    },
    {
        content: `Guerre de Trente Ans`,
        start: '1618-05-23',
        end: '1648-05-15',
    },
    {
        content: `Douzième guerre d'Italie`,
        start: '1624-01-01',
        end: '1625-12-31',
    },
    {
        content: `Guerre de succession de Mantoue`,
        start: '1628-01-01',
        end: '1631-12-31',
    },
    {
        content: `Guerre de Dix Ans`,
        start: '1634-01-01',
        end: '1644-12-31',
    },
    {
        content: `Guerre franco-espagnole`,
        start: '1635-05-19',
        end: '1659-11-07',
    },
    {
        content: `Guerre des faucheurs`,
        start: '1640-01-01',
        end: '1659-12-31',
    },
    {
        content: `Guerre austro-turque`,
        start: '1663-01-01',
        end: '1664-12-31',
    },
    {
        content: `Guerre de Dévolution`,
        start: '1667-05-24',
        end: '1668-05-04',
    },
    {
        content: `Guerre de Hollande`,
        start: '1672-01-01',
        end: '1678-12-31',
    },
    {
        content: `Guerre des Réunions`,
        start: '1683-10-26',
        end: '1684-08-15',
    },
    {
        content: `Guerre de la Ligue d'Augsbourg`,
        start: '1688-09-24',
        end: '1697-09-31',
    },
    {
        content: `Guerre de succession d'Espagne`,
        start: '1701-01-01',
        end: '1714-12-31',
    },
    {
        content: `Guerre de la Quadruple-Alliance`,
        start: '1718-01-01',
        end: '1720-12-31',
    },
    {
        content: `Guerre de succession de Pologne`,
        start: '1733-01-01',
        end: '1738-12-31',
    },
    {
        content: `Guerre de succession d'Autriche`,
        start: '1740-12-16',
        end: '1748-10-18',
    },
    {
        content: `Guerre de Sept Ans`,
        start: '1756-08-29',
        end: '1763-02-15',
    },
    {
        content: `Guerre d'indépendance des États-Unis`,
        start: '1775-04-19',
        end: '1783-04-11',
    },
    {
        content: `Guerre franco-anglaise`,
        start: '1778-06-01',
        end: '1783-09-30',
    },
    {
        content: `Revolution haïtienne`,
        start: '1791-08-22',
        end: '1804-01-01',
    },
    {
        content: `Guerre de la Première Coalition`,
        start: '1792-04-20',
        end: '1797-10-18',
    },
    {
        content: `Guerre du Roussillon`,
        start: '1793-03-07',
        end: '1795-07-22',
    },
    {
        content: `Guerre de la Deuxième Coalition`,
        start: '1798-01-01',
        end: '1802-12-31',
    },
    {
        content: `Guerre de la Troisième Coalition`,
        start: '1803-01-01',
        end: '1805-12-31',
    },
    {
        content: `Guerre de la Quatrième Coalition`,
        start: '1806-01-01',
        end: '1807-12-31',
    },
    {
        content: `Guerre de la Cinquième Coalition`,
        start: '1809-04-10',
        end: '1809-10-14',
    },
    {
        content: `Guerre de la Sixième Coalition`,
        start: '1812-01-01',
        end: '1814-12-31',
    },
    {
        content: `Guerre de la Septième Coalition`,
        start: '1815-03-10',
        end: '1815-07-08',
    },
    {
        content: `Guerre d'indépendance grecque`,
        start: '1821-02-22',
        end: '1829-09-12',
    },
    {
        content: `Expédition d'Espagne`,
        start: '1823-04-01',
        end: '1823-04-01',
    },
    {
        content: `Conquête de l'Algérie`,
        start: '1830-06-14',
        end: '1902-05-07',
    },
    {
        content: `Révolution belge`,
        start: '1830-08-25',
        end: '1831-08-14',
    },
    {
        content: `Guerre des Pâtisseries`,
        start: '1838-11-27',
        end: '1839-03-09',
    },
    {
        content: `Grande guerre`,
        start: '1839-03-10',
        end: '1851-10-08',
    },
    {
        content: `Première guerre du Maroc`,
        start: '1844-08-06',
        end: '1851-09-10',
    },
    {
        content: `Guerre de Crimée`,
        start: '1853-10-04',
        end: '1856-03-30',
    },
    {
        content: `Seconde guerre de l'opium`,
        start: '1856-10-01',
        end: '1860-10-31',
    },
    {
        content: `Campagne de Cochinchine`,
        start: '1858-09-01',
        end: '1862-06-05',
    },
    {
        content: `Campagne d'Italie`,
        start: '1859-04-26',
        end: '1859-07-12',
    },
    {
        content: `Intervention au Mexique`,
        start: '1861-12-08',
        end: '1867-03-12',
    },
    {
        content: `Expédition en Corée`,
        start: '1866-10-11',
        end: '1866-11-12',
    },
    {
        content: `Guerre franco-allemande`,
        start: '1870-07-19',
        end: '1871-01-29',
    },
    {
        content: `Conquête de la Tunisie`,
        start: '1881-04-28',
        end: '1881-10-28',
    },
    {
        content: `Guerre franco-chinoise`,
        start: '1881-09-01',
        end: '1884-06-01',
    },
    {
        content: `Première guerre franco-malgache`,
        start: '1883-05-01',
        end: '1885-12-01',
    },
    {
        content: `Première guerre du Dahomey`,
        start: '1890-02-21',
        end: '1890-10-04',
    },
    {
        content: `Seconde guerre du Dahomey`,
        start: '1892-07-04',
        end: '1894-01-15',
    },
    {
        content: `Guerre franco-siamoise`,
        start: '1893-01-01',
        end: '1893-12-31',
    },
    {
        content: `Seconde guerre franco-malgache`,
        start: '1894-01-01',
        end: '1895-01-01',
    },
    {
        content: `Révolte des Boxers`,
        start: '1899-11-02',
        end: '1901-09-07',
    },
    {
        content: `Campagne du Maroc`,
        start: '1907-08-07',
        end: '1937-01-01',
    },
    {
        content: `Première Guerre Mondiale`,
        start: '1914-07-28',
        end: '1918-11-11',
    },
    {
        content: `Campagne de Cilicie`,
        start: '1918-12-01',
        end: '1921-10-01',
    },
    {
        content: `Guerre hongro-roumaine`,
        start: '1919-11-01',
        end: '1920-03-01',
    },
    {
        content: `Guerre du Rif`,
        start: '1925-01-01',
        end: '1927-01-01',
    },
    {
        content: `Seconde Guerre Mondiale`,
        start: '1939-09-01',
        end: '1945-12-07',
    },
    {
        content: `Guerre d'Indochine`,
        start: '1946-12-19',
        end: '1954-07-21',
    },
    {
        content: `Guerre d'Algérie`,
        start: '1954-11-01',
        end: '1962-07-05',
    },
    {
        content: `Crise du canal de Suez`,
        start: '1956-10-29',
        end: '1956-11-07',
    },
    {
        content: 'Guerre du Cameroun',
        start: '1955-01-01',
        end: '1962-12-31',
    },
    {
        content: 'Crise de Bizerte',
        start: '1961-07-19',
        end: '1961-07-23',
    },
    {
        content: 'Première guerre civile tchadienne',
        start: '1969-04-14',
        end: '1975-12-31',
    },
    {
        content: 'Guerre du Sahara occidental',
        start: '1977-12-01',
        end: '1980-05-31',
    },
    {
        content: 'Deuxième guerre du Shaba',
        start: '1978-01-01',
        end: '1978-12-31',
    },
    {
        content: 'Conflit tchado-libyen',
        start: '1978-01-01',
        end: '1987-12-31',
    },
    {
        content: 'Guerre du Liban',
        start: '1982-01-01',
        end: '1984-12-31',
    },
    {
        content: 'Guerre du Liban',
        start: '1990-08-02',
        end: '1991-02-28',
    },
    {
        content: 'Guerre civile djiboutienne',
        start: '1991-11-12',
        end: '2001-05-12',
    },
    {
        content: 'Guerre de Bosnie-Herzégovine',
        start: '1992-01-01',
        end: '1995-12-31',
    },
    {
        content: 'Guerre du Kosovo',
        start: '1998-03-06',
        end: '1999-06-10',
    },
    {
        content: `Guerre d'Afghanistan`,
        start: '2001-10-07',
        end: '2014-12-31',
    },
    {
        content: `Crise politico-militaire en Côte d'Ivoire`,
        start: '2002-09-19',
        end: '2011-04-11',
    },
    {
        content: `Première guerre civile centrafricaine`,
        start: '2004-01-01',
        end: '2007-12-31',
    },
    {
        content: `Première guerre civile libyenne`,
        start: '2011-03-19',
        end: '2011-10-31',
    },
    {
        content: `Guerre du Mali`,
        start: '2013-01-11',
        end: 'today',
    },
    {
        content: `Troisième guerre civile centrafricaine`,
        start: '2013-12-05',
        end: '2016-10-31',
    },
    {
        content: `Guerre contre l'État islamique`,
        start: '2014-09-19',
        end: 'today',
    },
]

export default wars
