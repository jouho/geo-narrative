var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'guide',
            title: 'The Perfect Tour Guide to Japan',
            image: '',
            description: 'Japan is one of the most exciting place to visit, yet many travellers do not know which places to visit in Japan aside from the biggest city, Tokyo. There are many other locations that are wonderful to visit in Japan. This storymap would go through Japan\'s five main islands and their characteristics. This would be a perfect introductory guide for both people who have never visited Japan and people who have already visited Japan, but want to explore different locations. Let\'s go through each locations and what awaits you there!',
            location: {
              center: { lon: 138.32506, lat: 47.73777 },
              zoom: 2.84,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: '5mi',
            title: 'Japan\'s five main islands',
            image: '',
            description: 'The five main islands, from south to north, are Okinawa, Kyushu, Shikoku, Honshu and Hokkaido. Honshu is the largest and referred to as the Japanese mainland.',
            location: {
              center: { lon: 138.50720, lat: 38.20935 },
              zoom: 4.05,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'okinawa',
            title: 'Okinawa & the Southwest Islands',
            image: '',
            description: 'Collectively known as the Southwest Islands, the Nansei-shotō (南西諸島) comprises several chains of semitropical, coral-fringed isles far removed from the concerns of mainland life, where the slow pace and unique cultural heritage of the former Ryūkyū kingdom endures, offering a vibrant contrast to Japan\'s obsession with modernity, technology and homogeneity.',
            location: {
              center: { lon: 127.13293, lat: 25.98146 },
              zoom: 6.00,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'kyushu',
            title: 'Kyūshū',
            image: '',
            description: 'Kyūshū (九州), Japan\'s southern- and westernmost main island, is arguably its warmest, friendliest and most beautiful, with active volcanic peaks, rocky, lush and near-tropical coastlines, and great onsen (hot springs) virtually everywhere. History and legend were made here: Jōmon ruins, Shintō\'s sun goddess, wealthy trading ports, cloistered foreigners, samurai rebels and one of the earth\'s greatest wartime tragedies all loom large.',
            location: {
              center: { lon: 130.81594, lat: 32.62833 },
              zoom: 6.00,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'shikoku',
            title: 'Shikoku',
            image: '',
            description: 'The birthplace of revered ascetic and founder of the Shingon Buddhist sect Kōbō Daishi (774–835), Shikoku (四国) is synonymous with natural beauty and the pursuit of spiritual perfection. It\'s home to the 88 Sacred Temples of Shikoku, Japan\'s most famous pilgrimage.',
            location: {
              center: { lon: 133.58371, lat: 33.58994 },
              zoom: 7.18,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'honshu',
            title: 'Honshū',
            image: '',
            description: 'Central Honshū (本州中部; Honshū Chūbu) is Japan\'s heartland, stretching out between the sprawling metropolises of Greater Tokyo and Kansai. The awesome Japan Alps rise sharply near the border of Gifu and Nagano Prefectures before rolling north to the dramatic Sea of Japan coast.',
            location: {
              center: { lon: 138.46107, lat: 36.55252 },
              zoom: 6,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'hokkaido',
            title: 'Hokkaido',
            image: '',
            description: 'Hokkaidō (北海道) is the Japan of wide-open spaces, with 20% of the country\'s land area but only 5% of its population. There are large swathes of wilderness here, with primeval forests, tropical-blue caldera lakes, fields of alpine wildflowers and bubbling, in-the-rough hot springs. In the summer, all this (plus the cooler, drier weather) draws hikers, cyclists and strollers.',
            location: {
              center: { lon: 144.11456, lat: 43.49129 },
              zoom: 5.82,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
