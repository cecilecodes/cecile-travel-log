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