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
        content: 'Crise de Bizerte',
        start: '1961-07-19',
        end: '1961-07-23',
    },
]

export default wars
