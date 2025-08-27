mapboxgl.accessToken = 'pk.eyJ1IjoiaHl1bmppcCIsImEiOiJjbWVzcGhxNDMwNHJsMmxzYjlsc2c3YXJ2In0.VkYw1Rd0n_A7DU65EFxitw';

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [126.9780, 37.5665], // starting position [lng, lat] - Note: longitude first!
    zoom: 10 // starting zoom
});

// Your locations data
const locations = [
    {
        coords: [126.977966, 37.566536],
        title: "Seoul, S. Korea",
        description: "I went to university here:)",
        photoPage: "home-photos.html"
    },
    {
        coords: [126.910339, 35.162441],
        title: "Gwangju, S. Korea",
        description: "my hometown, where I was borned",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [127.140388, 35.831421],
        title: "Jeonju, S. Korea",
        description: "calm, chill city in S. Korea",
        photoPage: "tech-photos.html"
    },
    {
        coords: [129.211685, 35.842758],
        title: "Gyeongju, S. Korea",
        description: "it was the capital of the Silla Dynasty",
        photoPage: "gyeongju-photos.html"
    },
    {
        coords: [128.5884, 38.2042],
        title: "Sokcho, S. Korea",
        description: "calm, blue beach",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [128.8991, 37.7563],
        title: "Gangneung, S. Korea",
        description: "nice beach view!",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [126.7020, 35.4350],
        title: "Gochang, S. Korea",
        description: "organic Sangha Farm is located here",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [126.5662, 33.3786],
        title: "Jeju Island, S. Korea",
        description: "island of oranges!",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [126.7187, 35.0359],
        title: "Naju, S. Korea",
        description: "countryside of S. Korea",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [127.6629, 34.7610],
        title: "Yeosu, S. Korea",
        description: "beautiful beach and cute towns",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [129.0714, 35.1731],
        title: "Busan, S. Korea",
        description: "Korea's large port city",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [126.6313, 37.4752],
        title: "Incheon, S. Korea",
        description: "beaches and airports, spent my freshman year here",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [127.2041, 37.8983],
        title: "Pocheon, S. Korea",
        description: "very very cold in winter",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [127.0015, 37.2668],
        title: "Suwon, S. Korea",
        description: "cool city near Seoul",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [127.7278, 37.8805],
        title: "Chuncheon, S. Korea",
        description: "chicken is delicious here",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [126.3895, 34.7990],
        title: "Mokpo, S. Korea",
        description: "chill city to visit near Gwangju",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [127.9283, 36.9872],
        title: "Chungju, S. Korea",
        description: "other side of the Han River is visible here",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [128.7289, 36.5667],
        title: "Andong, S. Korea",
        description: "Andong Jjimdaek (chicken) is a must eat food here",
        photoPage: "cafe-photos.html"
    },
    {
        coords: [-74.0060, 40.7128],
        title: "New York, USA",
        description: "went there for National Model United Nations 2022",
        photoPage: ""
    },
    {
        coords: [-0.1278, 51.5074],
        title: "London, UK",
        description: "visited twice:)",
        photoPage: ""
    },
    {
        coords: [-119.4179, 36.7783],
        title: "California, USA",
        description: "went there for exchange student program",
        photoPage: ""
    },
    {
        coords: [104.1800, 10.6100],
        title: "Kampot, Cambodia",
        description: "one of my fav cities in the world<3",
        photoPage: ""
    },
    {
        coords: [120.9842, 14.5995],
        title: "Manila, Philippines",
        description: "mango let's goooo!",
        photoPage: ""
    },
    {
        coords: [103.5220, 10.6270],
        title: "Sihanoukville, Cambodia",
        description: "lived here for 6 months during my KOICA volunteering, taught kids in a rural town",
        photoPage: ""
    },
    {
        coords: [103.8448, 13.3671],
        title: "Siem Reap, Cambodia",
        description: "Angkor Wat was worth the visit!",
        photoPage: ""
    },
    {
        coords: [104.9282, 11.5564],
        title: "Phnom Penh, Cambodia",
        description: "capital of Cambodia, went to hang out wt my friends:)",
        photoPage: ""
    },
    {
        coords: [135.5023, 34.6937],
        title: "Osaka",
        description: "Universal Studio & convenience stores!",
        photoPage: ""
    },
    {
        coords: [121.5654, 25.0330],
        title: "Taipei, Taiwan",
        description: "visited twice:) love the vibe here",
        photoPage: ""
    },
    {
        coords: [121.5517, 24.8646],
        title: "Wulai, Taiwan",
        description: "recommend if you love nature, lake water is so pretty!",
        photoPage: ""
    },
    {
        coords: [121.6935, 25.2066],
        title: "Yeliu National Park, Taiwan",
        description: "visited twice, shows you the power of nature",
        photoPage: ""
    },
    {
        coords: [121.8439, 25.1100],
        title: "Jiufen, Taiwan",
        description: "movie: Spirited Away, visited twice but still loved it!",
        photoPage: ""
    },
    {
        coords: [121.7780, 25.0480],
        title: "Shifen, Taiwan",
        description: "my wish came true last time I visited, so I went here again to make another wish",
        photoPage: ""
    },
    {
        coords: [103.8198, 1.3521],
        title: "Singapore",
        description: "went to visit my friend, had so much fun here!",
        photoPage: ""
    },
    {
        coords: [14.4989, 40.7460],
        title: "Pompei, Italy",
        description: "very interesting place, worth to visit!",
        photoPage: ""
    },
    {
        coords: [9.1900, 45.4642],
        title: "Milano, Italy",
        description: "was very hot in summer",
        photoPage: ""
    },
    {
        coords: [12.4964, 41.9028],
        title: "Roma, Italy",
        description: "Colosseum was the most memorable thing in Roma",
        photoPage: ""
    },
    {
        coords: [12.3155, 45.4408],
        title: "Venice, Italy",
        description: "Carnival of Venice",
        photoPage: ""
    },
    {
        coords: [14.4378, 50.0755],
        title: "Praha",
        description: "one of my fav cities in the world!",
        photoPage: ""
    },
    {
        coords: [13.4050, 52.5200],
        title: "Berlin, Germany",
        description: "city of beer",
        photoPage: ""
    },
    {
        coords: [4.3517, 50.8503],
        title: "Brussel",
        description: "french fries & chocolates!",
        photoPage: ""
    },
    {
        coords: [6.1432, 46.2044],
        title: "Geneva",
        description: "visited the UN, want to go inside next time",
        photoPage: ""
    },
    {
        coords: [7.9616, 46.5476],
        title: "Jungfrau",
        description: "one of my fav cities, red tour train & the view is AMAZING",
        photoPage: ""
    },
    {
        coords: [8.6821, 50.1109],
        title: "Frankfurt",
        description: "calm city, old people were nice",
        photoPage: ""
    },
    {
        coords: [121.4737, 31.2304],
        title: "Shanghai",
        description: "lived for 9 years, my 'real' hometown",
        photoPage: ""
    },
    {
        coords: [120.3119, 31.4912],
        title: "Wuxi",
        description: "lived for 3 years, graduated high school here",
        photoPage: ""
    },
    {
        coords: [120.1551, 30.2741],
        title: "Hangzhou",
        description: "Xihu was bigggg!",
        photoPage: ""
    },
    {
        coords: [120.5853, 31.2989],
        title: "Suzhou",
        description: "lived for a few months, city-vibe",
        photoPage: ""
    },
    {
        coords: [118.7969, 32.0603],
        title: "Nanjing",
        description: "historical city of China",
        photoPage: ""
    },
    {
        coords: [94.6619, 40.1421],
        title: "Dunhuang",
        description: "went to the Gobi desert!",
        photoPage: ""
    },
    {
        coords: [126.5496, 43.8379],
        title: "Jilin",
        description: "saw North Korea across the river, climbed the Paektu Mountain",
        photoPage: ""
    },
    {
        coords: [116.4074, 39.9042],
        title: "Beijing",
        description: "capital of China, ate Beijing duck here",
        photoPage: ""
    },
    {
        coords: [110.2900, 25.2637],
        title: "Guilin",
        description: "nature vibe, calm river & boat riding",
        photoPage: ""
    },
    {
        coords: [108.9398, 34.3416],
        title: "Xian",
        description: "visited twice, countless Terracotta Warriors & big Ancient City Wall, capital of Old China",
        photoPage: ""
    },
    {
        coords: [103.8343, 36.0611],
        title: "Lanzhou",
        description: "Lanzhou noodles are delicious here",
        photoPage: ""
    },
    {
        coords: [110.5114, 29.3162],
        title: "Zhangjiajie National Forest Park",
        description: "movie Avatar was shot here, gigantic nature rocks",
        photoPage: ""
    },
    {
        coords: [118.3376, 29.7149],
        title: "Huangshan",
        description: "climbed up the Huang Mountain, was exhausting but interesting view",
        photoPage: ""
    },
    {
        coords: [112.4540, 34.6197],
        title: "Luoyang",
        description: "old China vibe, awesome Buddhist sculptures, want to visit again",
        photoPage: ""
    },
    {
        coords: [87.6168, 43.8256],
        title: "Urumqi",
        description: "big city of the Xinjiang province, doesn't look/feel like China",
        photoPage: ""
    },
    {
        coords: [89.1833, 42.9500],
        title: "Turpan, China",
        description: "filled wt grape fields! slept in a Ger wt the ethnic family",
        photoPage: ""
    },
    {
        coords: [4.8357, 45.7640],
        title: "Lyon",
        description: "big, famous city in France! loved the ancient vibe",
        photoPage: ""
    },
    {
        coords: [2.1734, 41.3851],
        title: "Barcelona",
        description: "Sagrada Familia Church was huge",
        photoPage: ""
    },
    {
        coords: [-3.7038, 40.4168],
        title: "Madrid",
        description: "second fav city in Spain",
        photoPage: ""
    },
    {
        coords: [-5.9845, 37.3891],
        title: "Sevilla",
        description: "my fav city in the world! filled wt oranges, calm & nice ppl",
        photoPage: ""
    },
    {
        coords: [-9.1399, 38.7169],
        title: "Lisbon",
        description: "want to eat their Nata again!",
        photoPage: ""
    },
    {
        coords: [-8.6291, 41.1579],
        title: "Porto",
        description: "calm, chill city wt a good night view",
        photoPage: ""
    },
    {
        coords: [7.0174, 43.5528],
        title: "Cannes",
        description: "city of movie!",
        photoPage: ""
    },
    {
        coords: [7.4246, 43.7384],
        title: "Monaco",
        description: "the country felt like Singapore to me",
        photoPage: ""
    },
    {
        coords: [7.3619, 43.7276],
        title: "Èze, France",
        description: "felt like I was in the Medieval Age, the stone buildings were impressive",
        photoPage: ""
    },
    {
        coords: [7.4975, 43.7750],
        title: "Menton",
        description: "city of lemons! loved the smell of the city",
        photoPage: ""
    },
    {
        coords: [7.2620, 43.7102],
        title: "Nice",
        description: "summer city, beach view was awesome!",
        photoPage: ""
    },
    {
        coords: [7.3278, 43.6835],
        title: "Saint Jean Cap Ferrat, France",
        description: "small town near Nice, went there for my friend",
        photoPage: ""
    },
    {
        coords: [2.3522, 48.8566],
        title: "Paris",
        description: "visited twice, lived for 6 months, want to live here in the future, Je suis Parisienne!",
        photoPage: ""
    },
    {
        coords: [-5.8339, 35.7595],
        title: "Tangier",
        description: "port city of Morocco, people were really nice",
        photoPage: ""
    },
    {
        coords: [-5.0005, 34.0331],
        title: "Fes, Morocco",
        description: "city of leather, smell of leather everywhere",
        photoPage: ""
    },
    {
        coords: [-5.2696, 35.1714],
        title: "Chefchaouen",
        description: "city of blue! was so pretty & many cats:)",
        photoPage: ""
    },
    {
        coords: [-4.4186, 29.9533],
        title: "Sahara Desert, Morocco",
        description: "second desert in my life, wind was crazy",
        photoPage: ""
    },
    {
        coords: [-7.9811, 31.6295],
        title: "Marrakesh",
        description: "busiest city in Morocco, lots of ppl & tourists",
        photoPage: ""
    },
    {
        coords: [-9.7595, 31.5085],
        title: "Essaouira",
        description: "Atlantic Ocean was pretty, the seafood was great! blue city vibe was healing",
        photoPage: ""
    },
    {
        coords: [-7.9000, 31.1000],
        title: "Atlas Mountains, Morocco",
        description: "squiggly roads on the mountain",
        photoPage: ""
    },
    {
        coords: [-7.1296, 31.0470],
        title: "Aït Benhaddou",
        description: "felt like I was in a movie scene, sandy but interesting!",
        photoPage: ""
    },
    {
        coords: [-6.9370, 30.9335],
        title: "Ouarzazate",
        description: "famous location for movies",
        photoPage: ""
    },
    {
        coords: [-5.5238, 31.5196],
        title: "Todgha Gorge",
        description: "family gathering location, beautiful scenery, wanted to stay longer",
        photoPage: ""
    },
    {
        coords: [6.1294, 45.8992],
        title: "Annecy",
        description: "Lake Annecy was the most beautiful lake I had seen in my life, very chill city, want to visit again!",
        photoPage: ""
    },
    {
        coords: [7.7521, 48.5734],
        title: "Strasbourg",
        description: "city of huge food! architectures/foods were similar to Germany",
        photoPage: ""
    },
    {
        coords: [7.3585, 48.0795],
        title: "Colmar",
        description: "beautiful, colorful city",
        photoPage: ""
    },
    {
        coords: [0.5792, 44.8378],
        title: "Bordeaux",
        description: "city of wine, very hot but city-vibe",
        photoPage: ""
    },
    {
        coords: [0.1557, 44.8944],
        title: "Saint Émilion",
        description: "had the best wine in my life here!",
        photoPage: ""
    }                                                
];

// Wait for the map to load
map.on('load', () => {
    // Add markers for each location
    locations.forEach(location => {
        // Create a popup
        const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <div style="padding: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #333;">${location.title}</h3>
                    <p style="margin: 0 0 15px 0; color: #666;">${location.description}</p>
                    <button onclick="window.location.href='${location.photoPage}'" 
                            style="background-color: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
                        View Photos
                    </button>
                </div>
            `);

        // Create a marker
        new mapboxgl.Marker({
            color: '#FF0000' // Red markers
        })
        .setLngLat(location.coords)
        .setPopup(popup)
        .addTo(map);
    });

    // Fit map to show all markers
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach(location => {
        bounds.extend(location.coords);
    });
    
    map.fitBounds(bounds, {
        padding: 50 // padding in pixels
    });
});

// Add navigation controls (zoom in/out)
map.addControl(new mapboxgl.NavigationControl());

// Add fullscreen control
map.addControl(new mapboxgl.FullscreenControl());