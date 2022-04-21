// TODO on pourrait mettre 00 quand la date est inconnue
const governances = [
    {
        content: 'Clodion',
        start: '0428-01-01',
        end: '0450-01-01',
    },
    {
        content: 'Mérovée', // TODO pas sûr de l'existence
        start: '0450-01-01',
        end: '0457-01-01',
    },
    {
        content: 'Childéric',
        start: '0457-01-01',
        end: '0481-01-01',
    },
    {
        content: 'Clovis',
        start: '0481-01-01',
        end: '0511-11-27',
        figure: 'clovis.jpg',
    },
    // TODO Fill with missing kings
    {
        content: 'Thierry III',
        start: '0679-01-01',
        end: '0691-01-01',
    },
    {
        content: 'Clovis IV',
        start: '0691-01-01',
        end: '0694-01-01',
    },
    {
        content: 'Childebert IV',
        start: '0694-01-01',
        end: '0711-01-01',
    },
    {
        content: 'Dagobert III',
        start: '0711-01-01',
        end: '0715-01-01',
    },
    {
        content: 'Clotaire IV',
        start: '0717-01-01',
        end: '0719-01-01',
    },
    {
        content: 'Chilpéric II',
        start: '0719-01-01',
        end: '0721-01-01',
    },
    {
        content: 'Thierry IV',
        start: '0721-01-01',
        end: '0737-01-01',
    },
    {
        content: 'Childéric III',
        start: '0743-02-15',
        end: '0751-03-01',
    },
    {
        content: 'Pépin III',
        start: '0751-11-01',
        end: '0768-09-24',
    },
    {
        content: 'Charlemagne',
        start: '0768-10-09',
        end: '0814-01-28',
    },
    {
        content: 'Carloman Ier',
        start: '0768-10-09',
        end: '0771-12-04',
    },
    {
        content: 'Louis Ier',
        start: '0814-01-28',
        end: '0840-06-20',
    },
    {
        content: 'Charles II',
        start: '0843-08-01',
        end: '0877-10-06',
    },
    {
        content: 'Carloman II',
        start: '0879-04-11',
        end: '0884-12-06',
    },
    {
        content: 'Louis III',
        start: '0879-04-11',
        end: '0882-08-05',
    },
    {
        content: 'Charles III le Gros',
        start: '0885-06-01',
        end: '0887-11-01',
    },
    {
        content: 'Eudes',
        start: '0888-02-29',
        end: '0898-01-03',
    },
    {
        content: 'Charles III le Simple',
        start: '0898-01-03',
        end: '0922-06-30',
    },
    {
        content: 'Robert Ier',
        start: '0922-06-25',
        end: '0923-06-15',
    },
    {
        content: 'Raoul',
        start: '0923-06-15',
        end: '0936-06-15',
    },
    {
        content: 'Louis IV',
        start: '0936-06-19',
        end: '0954-09-10',
    },
    {
        content: 'Lothaire',
        start: '0954-09-10',
        end: '0986-03-02',
    },
    {
        content: 'Louis V',
        start: '0986-03-02',
        end: '0987-05-22',
    },
    {
        content: 'Hugues Capet',
        start: '0987-07-03',
        end: '0996-10-24',
    },
    {
        content: 'Robert II',
        start: '0996-10-24',
        end: '1031-07-20',
    },
    {
        content: 'Henri Ier',
        start: '1031-07-20',
        end: '1060-08-04',
    },
    {
        content: 'Philippe Ier',
        start: '1060-08-04',
        end: '1108-07-30',
    },
    {
        content: 'Louis VI',
        start: '1108-07-30',
        end: '1137-08-01',
    },
    {
        content: 'Louis VII',
        start: '1137-08-01',
        end: '1180-09-18',
    },
    {
        content: 'Philippe II',
        start: '1180-09-18',
        end: '1223-07-14',
    },
    {
        content: 'Louis VIII',
        start: '1223-07-14',
        end: '1226-11-08',
    },
    {
        content: 'Louis IX',
        start: '1226-11-08',
        end: '1270-08-25',
    },
    {
        content: 'Philippe III',
        start: '1270-08-25',
        end: '1285-10-05',
    },
    {
        content: 'Philippe IV',
        start: '1285-10-05',
        end: '1314-11-29',
    },
    {
        content: 'Louis X',
        start: '1314-11-29',
        end: '1316-06-05',
    },
    {
        content: 'Philippe V',
        start: '1316-11-19',
        end: '1322-01-03',
    },
    {
        content: 'Charles IV',
        start: '1322-01-03',
        end: '1328-02-01',
    },
    {
        content: 'Philippe VI',
        start: '1328-04-01',
        end: '1350-08-22',
    },
    {
        content: 'Jean II',
        start: '1350-08-22',
        end: '1364-04-08',
    },
    {
        content: 'Charles V',
        start: '1364-04-08',
        end: '1380-09-16',
    },
    {
        content: 'Charles VI',
        start: '1380-09-16',
        end: '1422-10-21',
    },
    {
        content: 'Charles VII',
        start: '1422-10-21',
        end: '1461-07-22',
    },
    {
        content: 'Louis XI',
        start: '1461-07-22',
        end: '1483-08-30',
    },
    {
        content: 'Charles VIII',
        start: '1483-08-30',
        end: '1498-04-07',
    },
    {
        content: 'Louis XII',
        start: '1498-04-07',
        end: '1515-01-01',
    },
    {
        content: 'François Ier',
        start: '1515-01-01',
        end: '1547-03-31',
    },
    {
        content: 'Henri II',
        start: '1547-03-31',
        end: '1559-07-10',
    },
    {
        content: 'François II',
        start: '1559-07-10',
        end: '1560-12-05',
    },
    {
        content: 'Charles IX',
        start: '1560-12-05',
        end: '1574-05-03',
    },
    {
        content: 'Henri III',
        start: '1574-05-03',
        end: '1589-08-02',
    },
    {
        content: 'Henri IV',
        start: '1589-08-02',
        end: '1610-05-14',
    },
    {
        content: 'Louis XIII',
        start: '1610-05-14',
        end: '1643-05-14',
    },
    {
        content: 'Louis XIV',
        start: '1643-05-14',
        end: '1715-09-01',
    },
    {
        content: 'Louis XV',
        start: '1715-09-01',
        end: '1774-05-10',
    },
    {
        content: 'Louis XVI',
        start: '1774-05-10',
        end: '1792-09-21',
    },
    {
        content: 'Napoléon Bonaparte',
        start: '1804-05-18',
        end: '1814-04-04',
    },
    {
        content: 'Louis XVIII',
        start: '1815-07-08',
        end: '1824-09-16',
    },
    {
        content: 'Charles X',
        start: '1824-09-16',
        end: '1830-08-02',
    },
    {
        content: 'Louis-Philippe',
        start: '1830-08-09',
        end: '1848-02-24',
    },
    {
        content: 'Louis-Napoléon Bonaparte',
        start: '1848-02-24',
        end: '1870-09-04',
        figure: 'louis_napoleon_bonaparte.jpg',
    },
    {
        content: 'Adolphe Thiers',
        start: '1871-08-31',
        end: '1873-05-24',
        figure: 'adolphe_thiers.jpg',
    },
    {
        content: 'Patrice de Mac Mahon',
        start: '1873-05-24',
        end: '1879-01-30',
        figure: 'patrice_de_mac_mahon.jpg',
    },
    {
        content: 'Jules Grévy',
        start: '1879-01-30',
        end: '1887-12-02',
        figure: 'jules_grevy.jpg',
    },
    {
        content: 'Sadi Carnot',
        start: '1887-12-03',
        end: '1894-06-25',
        figure: 'sadi_carnot.jpg',
    },
    {
        content: 'Jean Casimir-Perier',
        start: '1894-06-27',
        end: '1895-01-16',
        figure: 'jean_casimir_perier.jpg',
    },
    {
        content: 'Félix Faure',
        start: '1895-01-17',
        end: '1899-02-16',
        figure: 'felix_faure.jpg',
    },
    {
        content: 'Émile Loubet',
        start: '1899-02-18',
        end: '1906-02-18',
        figure: 'emile_loubet.jpg',
    },
    {
        content: 'Armand Fallières',
        start: '1906-02-18',
        end: '1913-02-18',
        figure: 'armand_fallieres.jpg',
    },
    {
        content: 'Raymond Poincaré',
        start: '1913-02-18',
        end: '1920-02-18',
        figure: 'raymond_poincarre.jpg',
    },
    {
        content: 'Paul Deschanel',
        start: '1920-02-18',
        end: '1920-09-21',
        figure: 'paul_deschanel.jpg',
    },
    {
        content: 'Alexandre Millerand',
        start: '1920-09-23',
        end: '1924-06-11',
        figure: 'alexandre_millerand.jpg',
    },
    {
        content: 'Gaston Doumergue',
        start: '1924-06-13',
        end: '1931-06-13',
        figure: 'gaston_doumergue.jpg',
    },
    {
        content: 'Paul Doumer',
        start: '1931-06-13',
        end: '1932-05-07',
        figure: 'paul_doumer.jpg',
    },
    {
        content: 'Albert Lebrun',
        start: '1932-05-10',
        end: '1940-07-11',
        figure: 'albert_lebrun.jpg',
    },
    {
        content: 'Philippe Pétain',
        start: '1940-07-11',
        end: '1944-08-20',
        figure: 'philippe_petain.jpg',
    },
    {
        content: 'Charles de Gaulle',
        start: '1944-09-10',
        end: '1946-01-20',
        figure: 'charles_de_gaulle.jpg',
    },
    {
        content: 'Félix Gouin',
        start: '1946-01-26',
        end: '1946-06-12',
        figure: 'felix_gouin.jpg',
    },
    {
        content: 'Georges Bidault',
        start: '1946-06-24',
        end: '1946-11-28',
        figure: 'georges_bidault.jpg',
    },
    {
        content: 'Léon Blum',
        start: '1946-12-16',
        end: '1947-01-16',
        figure: 'leon_blum.jpg',
    },
    {
        content: 'Vincent Auriol',
        start: '1947-01-16',
        end: '1954-01-16',
        figure: 'vincent_auriol.jpg',
    },
    {
        content: 'René Coty',
        start: '1954-01-16',
        end: '1959-01-08',
        figure: 'rene_coty.jpg',
    },
    {
        content: 'Charles de Gaulle',
        start: '1959-01-08',
        end: '1969-04-28',
        figure: 'charles_de_gaulle.jpg',
    },
    {
        content: 'Alain Poher',
        start: '1969-04-28',
        end: '1969-06-20',
        figure: 'alain_poher.jpg',
    },
    {
        content: 'Georges Pompidou',
        start: '1969-06-20',
        end: '1974-04-02',
        figure: 'georges_pompidou.jpg',
    },
    {
        content: 'Alain Poher',
        start: '1974-04-02',
        end: '1974-05-27',
        figure: 'alain_poher.jpg',
    },
    {
        content: `Valéry Giscard d'Estaing`,
        start: '1974-05-27',
        end: '1981-05-21',
        figure: 'valery_giscard_destaing.jpg',
    },
    {
        content: 'François Mitterand',
        start: '1981-05-21',
        end: '1995-05-17',
        figure: 'francois_mitterand.jpg',
    },
    {
        content: 'Jacques Chirac',
        start: '1995-05-17',
        end: '2007-05-16',
        figure: 'jacques_chirac.jpg',
    },
    {
        content: 'Nicolas Sarkozy',
        start: '2007-05-16',
        end: '2012-05-15',
        figure: 'nicolas_sarkozy.jpg',
    },
    {
        content: 'François Hollande',
        start: '2012-05-15',
        end: '2017-05-14',
        figure: 'francois_hollande.jpeg',
    },
    {
        content: 'Emmanuel Macron',
        start: '2017-05-14',
        end: '2022-05-13',
        figure: 'emmanuel_macron.jpg',
    },
]

export default governances
