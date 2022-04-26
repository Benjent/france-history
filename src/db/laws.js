const laws = [
    {
        content: 'Table Claudienne : extension de la romanisation', // TODO précision
        start: '0048-01-01',
        end: '0048-01-01',
    },
    {
        content: 'Édit de Domitien : limitation des vignobles gaulois',
        start: '0092-01-01',
        end: '0092-01-01',
    },
    {
        content: "Édit de l'empereur Caracalla : extension de la romanisation", // TODO précision
        start: '0212-01-01',
        end: '0212-01-01',
    },
    {
        content: "Édit de Probus : suppression de la limitation des vignobles gaulois",
        start: '0276-01-01',
        end: '0276-01-01',
    },
    {
        content: 'Édit de Milan : confirmation de la liberté de culte des chrétiens',
        start: '0313-06-13',
        end: '0313-06-13',
    },
    {
        content: 'Édit de Théodose : interdiction du culte païen',
        start: '0381-12-20',
        end: '0381-12-20',
    },
    {
        content: 'Édit de Constantinople : interdiction de toute manifestation de culte païen',
        start: '0392-11-08',
        end: '0392-11-08',
    },
    {
        content: 'Loi salique',
        start: '0507-01-01',
        end: '0507-01-01',
    },
    {
        content: `Édit de Nantes : union de la Bretagne à la France`,
        start: '1532-08-13',
        end: '1532-08-13',
    },
    {
        content: `Édit de Plessis-Macé : confirmation de l'édit de Nantes et protection de privilèges bretons`,
        start: '1532-09-21',
        end: '1532-09-21',
    },
    {
        content: `Interdiction de l'emploi des mineurs de moins de 8 ans`,
        start: '1841-03-22',
        end: '1841-03-22',
    },
    {
        content: `Limitation de la durée de travail des mineurs : 8 heures avant 14 ans, 12 heures de 14 à 16 ans`,
        start: '1851-03-22',
        end: '1851-03-22',
    },
    {
        content: `Obtention du droit de grève`,
        start: '1864-05-25',
        end: '1864-05-25',
    },
    {
        content: `Interdiction de l'emploi des mineurs de moins de 12 ans`,
        start: '1874-05-19',
        end: '1874-05-19',
    },
    {
        content: `Légalisation des syndicats`,
        start: '1884-03-31',
        end: '1884-03-31',
    },
    {
        content: `Inauguration de la bourse du travail`,
        start: '1887-02-03',
        end: '1887-02-03',
    },
    {
        content: `Limitation de la durée de travail des mineurs : 10 heures à 13 ans, 60 heures hebdomadaires de 16 à 18 ans`,
        start: '1892-11-02',
        end: '1892-11-02',
    },
    {
        content: `Création de l'assurance contre les accidents du travail`,
        start: '1898-04-09',
        end: '1898-04-09',
    },
    {
        content: `Séparation des Églises et de l'État`,
        start: '1905-12-09',
        end: '1905-12-09',
    },
    {
        content: `Repos compensateur de 24 heures hebdomadaire`,
        start: '1906-12-09', // TODO not sure
        end: '1906-12-09',
    },
    {
        content: `Limitation de la durée de travail pour tous : 10 heures`,
        start: '1910-01-01', // TODO not sure
        end: '1910-01-01',
    },
    {
        content: `Instauration de l'âge du départ à la retraite : 65 ans`,
        start: '1910-04-05',
        end: '1910-04-05',
    },
    {
        content: `Limitation de la durée de travail : 8 heures ; instauration de la semaine de 48 heures`,
        start: '1919-04-17',
        end: '1919-04-17',
    },
    {
        content: `Création de l'assurance maladie`,
        start: '1928-04-05',
        end: '1928-04-05',
    },
    {
        content: `Création des allocations familiales`,
        start: '1930-08-04',
        end: '1930-08-04',
    },
    {
        content: `Création des congés payés : deux semaines`,
        start: '1936-06-20',
        end: '1936-06-20',
    },
    {
        content: `Limitation de la durée de travail : 40 heures hebdomadaires`,
        start: '1936-06-21',
        end: '1936-06-21',
    },
    {
        content: `Création des délégués du personnel et création des conventions collectives`,
        start: '1936-06-24',
        end: '1936-06-24',
    },
    {
        content: `Création du Minimum vieillesse et de la retraite par répartition`,
        start: '1941-01-01',
        end: '1941-01-01',
    },
    {
        content: `Création du salaire minimum vital et des comités sociaux d'établissement`,
        start: '1941-10-04',
        end: '1941-10-04',
    },
    {
        content: `Médecine du travail obligatoire pour les entreprises de plus de 50 salariés`,
        start: '1942-07-28',
        end: '1942-07-28',
    },
    {
        content: `Création de la Sécurité sociale`,
        start: '1945-10-19',
        end: '1945-10-19',
    },
    {
        content: `Création du statut de fonction publique`,
        start: '1946-10-11',
        end: '1946-10-11',
    },
    {
        content: `Médecine du travail obligatoire pour toutes les entreprises`,
        start: '1946-10-19',
        end: '1946-10-19',
    },
    {
        content: `Transformation du salaire minimum vital en SMIG`,
        start: '1950-02-11',
        end: '1950-02-11',
    },
    {
        content: `Augmentation des congés payés : 3 semaines`,
        start: '1956-03-27',
        end: '1956-03-27',
    },
    {
        content: `Création de l'assurance chômage`,
        start: '1958-12-31',
        end: '1958-12-31',
    },
    {
        content: `Augmentation des congés payés : 4 semaines`,
        start: '1969-05-17',
        end: '1969-05-17',
    },
    {
        content: `Création de la formation professionnelle continue`,
        start: '1971-08-16',
        end: '1971-08-16',
    },
    {
        content: `Création de l'assurance vieillesse`,
        start: '1975-08-04',
        end: '1975-08-04',
    },
    {
        content: `Abolition de la peine de mort`,
        start: '1981-09-30',
        end: '1981-09-30',
    },
    {
        content: `Augmentation des congés payés : 5 semaines ; semaine de 39 heures`,
        start: '1982-01-16',
        end: '1982-01-16',
    },
    {
        content: `Réduction de l'âge du départ à la retraite : 60 ans`,
        start: '1983-04-01',
        end: '1983-04-01',
    },
    {
        content: `Semaine de 35 heures`,
        start: '2000-01-19',
        end: '2000-01-19',
    },
]

export default laws
