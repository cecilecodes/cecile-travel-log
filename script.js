<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    // Initialize the map with a wider view
    const map = L.map('map').setView([37.5665, 126.9780], 2); // Shows continents        
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add markers with links to photo pages
    const locations = [
        {
            coords: [37.566536, 126.977966],
            title: "Seoul, S. Korea",
            description: "I went to university here:)",
            photoPage: "home-photos.html"
        },
        {
            coords: [35.162441, 126.910339],
            title: "Gwangju, S. Korea",
            description: "my hometown, where I was borned",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [35.831421, 127.140388],
            title: "Jeonju, S. Korea",
            description: "calm, chill city in S. Korea",
            photoPage: "tech-photos.html"
        },
        {
            coords: [35.842758, 129.211685],
            title: "Gyeongju, S. Korea",
            description: "it was the capital of the Silla Dynasty",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [38.2042, 128.5884],
            title: "Sokcho, S. Korea",
            description: "calm, blue beach",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [37.7563, 128.8991],
            title: "Gangneung, S. Korea",
            description: "nice beach view!",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [35.4350, 126.7020],
            title: "Gochang, S. Korea",
            description: "organic Sangha Farm is located here",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [33.3786, 126.5662],
            title: "Jeju Island, S. Korea",
            description: "island of oranges!",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [35.0359, 126.7187],
            title: "Naju, S. Korea",
            description: "countryside of S. Korea",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [34.7610, 127.6629],
            title: "Yeosu, S. Korea",
            description: "beautiful beach and cute towns",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [35.1731, 129.0714],
            title: "Busan, S. Korea",
            description: "Korea's large port city",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [37.4752, 126.6313],
            title: "Incheon, S. Korea",
            description: "beaches and airports, spent my freshman year here",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [37.8983, 127.2041],
            title: "Pocheon, S. Korea",
            description: "very very cold in winter",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [37.2668, 127.0015],
            title: "Suwon, S. Korea",
            description: "cool city near Seoul",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [37.8805, 127.7278],
            title: "Chuncheon, S. Korea",
            description: "chicken is delicious here",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [34.7990, 126.3895],
            title: "Mokpo, S. Korea",
            description: "chill city to visit near Gwangju",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [36.9872, 127.9283],
            title: "Chungju, S. Korea",
            description: "other side of the Han River is visible here",
            photoPage: "cafe-photos.html"
        },
        {
            coords: [36.5667, 128.7289],
            title: "Andong, S. Korea",
            description: "Andong Jjimdaek (chicken) is a must eat food here",
            photoPage: "cafe-photos.html"
        },
        {
           coords: [40.7128, -74.0060],
           title: "New York, USA",
           description: "went there for National Model United Nations 2022",
           photoPage: ""
       },
       {
           coords: [51.5074, -0.1278],
           title: "London, UK",
           description: "visited twice:)",
           photoPage: ""
       },
       {
           coords: [36.7783, -119.4179],
           title: "California, USA",
           description: "went there for exchange student program",
           photoPage: ""
       },
       {
           coords: [10.6100, 104.1800],
           title: "Kampot, Cambodia",
           description: "one of my fav cities in the world<3",
           photoPage: ""
       },
       {
           coords: [14.5995, 120.9842],
           title: "Manila, Philippines",
           description: "mango let's goooo!",
           photoPage: ""
       },
       {
           coords: [10.6270, 103.5220],
           title: "Sihanoukville, Cambodia",
           description: "lived here for 6 months during my KOICA volunteering, taught kids in a rural town",
           photoPage: ""
       },
       {
           coords: [13.3671, 103.8448],
           title: "Siem Reap, Cambodia",
           description: "Angkor Wat was worth the visit!",
           photoPage: ""
       },
       {
           coords: [11.5564, 104.9282],
           title: "Phnom Penh, Cambodia",
           description: "capital of Cambodia, went to hang out wt my friends:)",
           photoPage: ""
       },
       {
           coords: [34.6937, 135.5023],
           title: "Osaka",
           description: "Universal Studio & convenience stores!",
           photoPage: ""
       },
       {
           coords: [25.0330, 121.5654],
           title: "Taipei, Taiwan",
           description: "visited twice:) love the vibe here",
           photoPage: ""
       },
       {
           coords: [24.8646, 121.5517],
           title: "Wulai, Taiwan",
           description: "recommend if you love nature, lake water is so pretty!",
           photoPage: ""
       },
       {
           coords: [25.2066, 121.6935],
           title: "Yeliu National Park, Taiwan",
           description: "visited twice, shows you the power of nature",
           photoPage: ""
       },
       {
           coords: [25.1100, 121.8439],
           title: "Jiufen, Taiwan",
           description: "movie: Spirited Away, visited twice but still loved it!",
           photoPage: ""
       },
       {
           coords: [25.0480, 121.7780],
           title: "Shifen, Taiwan",
           description: "my wish came true last time I visited, so I went here again to make another wish",
           photoPage: ""
       },
       {
           coords: [1.3521, 103.8198],
           title: "Singapore",
           description: "went to visit my friend, had so much fun here!",
           photoPage: ""
       },
       {
           coords: [40.7460, 14.4989],
           title: "Pompei, Italy",
           description: "very interesting place, worth to visit!",
           photoPage: ""
       },
       {
           coords: [45.4642, 9.1900],
           title: "Milano, Italy",
           description: "was very hot in summer",
           photoPage: ""
       },
       {
           coords: [41.9028, 12.4964],
           title: "Roma, Italy",
           description: "Colosseum was the most memorable thing in Roma",
           photoPage: ""
       },
       {
           coords: [45.4408, 12.3155],
           title: "Venice, Italy",
           description: "Carnival of Venice",
           photoPage: ""
       },
       {
           coords: [50.0755, 14.4378],
           title: "Praha",
           description: "one of my fav cities in the world!",
           photoPage: ""
       },
       {
           coords: [52.5200, 13.4050],
           title: "Berlin, Germany",
           description: "city of beer",
           photoPage: ""
       },
       {
           coords: [50.8503, 4.3517],
           title: "Brussel",
           description: "french fries & chocolates!",
           photoPage: ""
       },
       {
           coords: [46.2044, 6.1432],
           title: "Geneva",
           description: "visited the UN, want to go inside next time",
           photoPage: ""
       },
       {
           coords: [46.5476, 7.9616],
           title: "Jungfrau",
           description: "one of my fav cities, red tour train & the view is AMAZING",
           photoPage: ""
       },
       {
           coords: [50.1109, 8.6821],
           title: "Frankfurt",
           description: "calm city, old people were nice",
           photoPage: ""
       },
       {
           coords: [31.2304, 121.4737],
           title: "Shanghai",
           description: "lived for 9 years, my 'real' hometown",
           photoPage: ""
       },
       {
           coords: [31.4912, 120.3119],
           title: "Wuxi",
           description: "lived for 3 years, graduated high school here",
           photoPage: ""
       },
       {
           coords: [30.2741, 120.1551],
           title: "Hangzhou",
           description: "Xihu was bigggg!",
           photoPage: ""
       },
       {
           coords: [31.2989, 120.5853],
           title: "Suzhou",
           description: "lived for a few months, city-vibe",
           photoPage: ""
       },
       {
           coords: [32.0603, 118.7969],
           title: "Nanjing",
           description: "historical city of China",
           photoPage: ""
       },
       {
           coords: [40.1421, 94.6619],
           title: "Dunhuang",
           description: "went to the Gobi desert!",
           photoPage: ""
       },
       {
           coords: [43.8379, 126.5496],
           title: "Jilin",
           description: "saw North Korea across the river, climbed the Paektu Mountain",
           photoPage: ""
       },
       {
           coords: [39.9042, 116.4074],
           title: "Beijing",
           description: "capital of China, ate Beijing duck here",
           photoPage: ""
       },
       {
           coords: [25.2637, 110.2900],
           title: "Guilin",
           description: "nature vibe, calm river & boat riding",
           photoPage: ""
       },
       {
           coords: [34.3416, 108.9398],
           title: "Xian",
           description: "visited twice, countless Terracotta Warriors & big Ancient City Wall, capital of Old China",
           photoPage: ""
       },
       {
           coords: [36.0611, 103.8343],
           title: "Lanzhou",
           description: "Lanzhou noodles are delicious here",
           photoPage: ""
       },
       {
           coords: [29.3162, 110.5114],
           title: "Zhangjiajie National Forest Park",
           description: "movie Avatar was shot here, gigantic nature rocks",
           photoPage: ""
       },
       {
           coords: [29.7149, 118.3376],
           title: "Huangshan",
           description: "climbed up the Huang Mountain, was exhausting but interesting view",
           photoPage: ""
       },
       {
           coords: [34.6197, 112.4540],
           title: "Luoyang",
           description: "old China vibe, awesome Buddhist sculptures, want to visit again",
           photoPage: ""
       },
       {
           coords: [43.8256, 87.6168],
           title: "Urumqi",
           description: "big city of the Xinjiang province, doesn't look/feel like China",
           photoPage: ""
       },
       {
           coords: [42.9500, 89.1833],
           title: "Turpan, China",
           description: "filled wt grape fields! slept in a Ger wt the ethnic family",
           photoPage: ""
       },
       {
           coords: [45.7640, 4.8357],
           title: "Lyon",
           description: "big, famous city in France! loved the ancient vibe",
           photoPage: ""
       },
       {
           coords: [41.3851, 2.1734],
           title: "Barcelona",
           description: "Sagrada Familia Church was huge",
           photoPage: ""
       },
       {
           coords: [40.4168, -3.7038],
           title: "Madrid",
           description: "second fav city in Spain",
           photoPage: ""
       },
       {
           coords: [37.3891, -5.9845],
           title: "Sevilla",
           description: "my fav city in the world! filled wt oranges, calm & nice ppl",
           photoPage: ""
       },
       {
           coords: [38.7169, -9.1399],
           title: "Lisbon",
           description: "want to eat their Nata again!",
           photoPage: ""
       },
       {
           coords: [41.1579, -8.6291],
           title: "Porto",
           description: "calm, chill city wt a good night view",
           photoPage: ""
       },
       {
           coords: [43.5528, 7.0174],
           title: "Cannes",
           description: "city of movie!",
           photoPage: ""
       },
       {
           coords: [43.7384, 7.4246],
           title: "Monaco",
           description: "the country felt like Singapore to me",
           photoPage: ""
       },
       {
           coords: [43.7276, 7.3619],
           title: "Èze, France",
           description: "felt like I was in the Medieval Age, the stone buildings were impressive",
           photoPage: ""
       },
       {
           coords: [43.7750, 7.4975],
           title: "Menton",
           description: "city of lemons! loved the smell of the city",
           photoPage: ""
       },
       {
           coords: [43.7102, 7.2620],
           title: "Nice",
           description: "summer city, beach view was awesome!",
           photoPage: ""
       },
       {
           coords: [43.6835, 7.3278],
           title: "Saint Jean Cap Ferrat, France",
           description: "small town near Nice, went there for my friend",
           photoPage: ""
       },
       {
           coords: [48.8566, 2.3522],
           title: "Paris",
           description: "visited twice, lived for 6 months, want to live here in the future, Je suis Parisienne!",
           photoPage: ""
       },
       {
           coords: [35.7595, -5.8339],
           title: "Tangier",
           description: "port city of Morocco, people were really nice",
           photoPage: ""
       },
       {
           coords: [34.0331, -5.0005],
           title: "Fes, Morocco",
           description: "city of leather, smell of leather everywhere",
           photoPage: ""
       },
       {
           coords: [35.1714, -5.2696],
           title: "Chefchaouen",
           description: "city of blue! was so pretty & many cats:)",
           photoPage: ""
       },
       {
           coords: [29.9533, -4.4186],
           title: "Sahara Desert, Morocco",
           description: "second desert in my life, wind was crazy",
           photoPage: ""
       },
       {
           coords: [31.6295, -7.9811],
           title: "Marrakesh",
           description: "busiest city in Morocco, lots of ppl & tourists",
           photoPage: ""
       },
       {
           coords: [31.5085, -9.7595],
           title: "Essaouira",
           description: "Atlantic Ocean was pretty, the seafood was great! blue city vibe was healing",
           photoPage: ""
       },
       {
           coords: [31.1000, -7.9000],
           title: "Atlas Mountains, Morocco",
           description: "squiggly roads on the mountain",
           photoPage: ""
       },
       {
           coords: [31.0470, -7.1296],
           title: "Aït Benhaddou",
           description: "felt like I was in a movie scene, sandy but interesting!",
           photoPage: ""
       },
       {
           coords: [30.9335, -6.9370],
           title: "Ouarzazate",
           description: "famous location for movies",
           photoPage: ""
       },
       {
           coords: [31.5196, -5.5238],
           title: "Todgha Gorge",
           description: "family gathering location, beautiful scenery, wanted to stay longer",
           photoPage: ""
       },
       {
           coords: [45.8992, 6.1294],
           title: "Annecy",
           description: "Lake Annecy was the most beautiful lake I had seen in my life, very chill city, want to visit again!",
           photoPage: ""
       },
       {
           coords: [48.5734, 7.7521],
           title: "Strasbourg",
           description: "city of huge food! architectures/foods were similar to Germany",
           photoPage: ""
       },
       {
           coords: [48.0795, 7.3585],
           title: "Colmar",
           description: "beautiful, colorful city",
           photoPage: ""
       },
       {
           coords: [44.8378, 0.5792],
           title: "Bordeaux",
           description: "city of wine, very hot but city-vibe",
           photoPage: ""
       },
       {
           coords: [44.8944, 0.1557],
           title: "Saint Émilion",
           description: "had the best wine in my life here!",
           photoPage: ""
       },
    ];
    
    // Add all markers to the map
    locations.forEach(location => {
        const marker = L.marker(location.coords).addTo(map);
        
        // Create popup with clickable link
        const popupContent = `
            <div>
                <h3>${location.title}</h3>
                <p>${location.description}</p>
                <button onclick="window.location.href='${location.photoPage}'" 
                        style="background-color: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">
                    View Photos
                </button>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        // Optional: Direct click on marker goes to photo page
        marker.on('click', function() {
            // Show popup first, or uncomment below to go directly
            // window.location.href = location.photoPage;
        });
    });
    
    // Optional: Add a circle to show your area
    L.circle([37.5665, 126.9780], {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.2,
        radius: 2000
    }).addTo(map).bindPopup("My neighborhood area");