const wordCategories = {
  "Anime": [
      {"word": "Monkey D. Luffy", "clue": "One Piece"},
      {"word": "Roronoa Zoro", "clue": "One Piece"},
      {"word": "Nami", "clue": "One Piece"},
      {"word": "Usopp", "clue": "One Piece"},
      {"word": "Sanji", "clue": "One Piece"},
      {"word": "Tony Tony Chopper", "clue": "One Piece"},
      {"word": "Nico Robin", "clue": "One Piece"},
      {"word": "Franky", "clue": "One Piece"},
      {"word": "Brook", "clue": "One Piece"},
      {"word": "Jinbe", "clue": "One Piece"},
      {"word": "Portgas D. Ace", "clue": "One Piece"},
      {"word": "Sabo", "clue": "One Piece"},
      {"word": "Shanks", "clue": "One Piece"},
      {"word": "Marshall D. Teach (Blackbeard)", "clue": "One Piece"},
      {"word": "Trafalgar D. Water Law", "clue": "One Piece"},
      {"word": "Eustass Kid", "clue": "One Piece"},
      {"word": "Boa Hancock", "clue": "One Piece"},
      {"word": "Dracule Mihawk", "clue": "One Piece"},
      {"word": "Donquixote Doflamingo", "clue": "One Piece"},
      {"word": "Kaido", "clue": "One Piece"},
      {"word": "Naruto Uzumaki", "clue": "Naruto"},
      {"word": "Sasuke Uchiha", "clue": "Naruto"},
      {"word": "Sakura Haruno", "clue": "Naruto"},
      {"word": "Kakashi Hatake", "clue": "Naruto"},
      {"word": "Itachi Uchiha", "clue": "Naruto"},
      {"word": "Jiraiya", "clue": "Naruto"},
      {"word": "Tsunade", "clue": "Naruto"},
      {"word": "Orochimaru", "clue": "Naruto"},
      {"word": "Gaara", "clue": "Naruto"},
      {"word": "Rock Lee", "clue": "Naruto"},
      {"word": "Neji Hyuga", "clue": "Naruto"},
      {"word": "Hinata Hyuga", "clue": "Naruto"},
      {"word": "Shikamaru Nara", "clue": "Naruto"},
      {"word": "Choji Akimichi", "clue": "Naruto"},
      {"word": "Ino Yamanaka", "clue": "Naruto"},
      {"word": "Kiba Inuzuka", "clue": "Naruto"},
      {"word": "Shino Aburame", "clue": "Naruto"},
      {"word": "Asuma Sarutobi", "clue": "Naruto"},
      {"word": "Might Guy", "clue": "Naruto"},
      {"word": "Madara Uchiha", "clue": "Naruto"},
      {"word": "Asta", "clue": "Black Clover"},
      {"word": "Yuno", "clue": "Black Clover"},
      {"word": "Noelle Silva", "clue": "Black Clover"},
      {"word": "Yami Sukehiro", "clue": "Black Clover"},
      {"word": "Luck Voltia", "clue": "Black Clover"},
      {"word": "Magna Swing", "clue": "Black Clover"},
      {"word": "Vanessa Enoteca", "clue": "Black Clover"},
      {"word": "Charmy Pappitson", "clue": "Black Clover"},
      {"word": "Gauche Adlai", "clue": "Black Clover"},
      {"word": "Finral Roulacase", "clue": "Black Clover"},
      {"word": "Licht", "clue": "Black Clover"},
      {"word": "William Vangeance", "clue": "Black Clover"},
      {"word": "Julius Novachrono", "clue": "Black Clover"},
      {"word": "Mereoleona Vermillion", "clue": "Black Clover"},
      {"word": "Fuegoleon Vermillion", "clue": "Black Clover"},
      {"word": "Secre Swallowtail", "clue": "Black Clover"},
      {"word": "Zenon Zogratis", "clue": "Black Clover"},
      {"word": "Ichigo Kurosaki", "clue": "Bleach"},
      {"word": "Rukia Kuchiki", "clue": "Bleach"},
      {"word": "Renji Abarai", "clue": "Bleach"},
      {"word": "Uryu Ishida", "clue": "Bleach"},
      {"word": "Orihime Inoue", "clue": "Bleach"},
      {"word": "Yasutora Sado (Chad)", "clue": "Bleach"},
      {"word": "Byakuya Kuchiki", "clue": "Bleach"},
      {"word": "Kenpachi Zaraki", "clue": "Bleach"},
      {"word": "Toshiro Hitsugaya", "clue": "Bleach"},
      {"word": "Sosuke Aizen", "clue": "Bleach"},
      {"word": "Ulquiorra Cifer", "clue": "Bleach"},
      {"word": "Grimmjow Jaegerjaquez", "clue": "Bleach"},
      {"word": "Goku", "clue": "Dragon Ball"},
      {"word": "Vegeta", "clue": "Dragon Ball"},
      {"word": "Gohan", "clue": "Dragon Ball"},
      {"word": "Piccolo", "clue": "Dragon Ball"},
      {"word": "Krillin", "clue": "Dragon Ball"},
      {"word": "Yamcha", "clue": "Dragon Ball"},
      {"word": "Tien Shinhan", "clue": "Dragon Ball"},
      {"word": "Trunks", "clue": "Dragon Ball"},
      {"word": "Android 18", "clue": "Dragon Ball"},
      {"word": "Frieza", "clue": "Dragon Ball"},
      {"word": "Cell", "clue": "Dragon Ball"},
      {"word": "Majin Buu", "clue": "Dragon Ball"},
      {"word": "Jiren", "clue": "Dragon Ball"},
      {"word": "Beerus", "clue": "Dragon Ball"},
      {"word": "Whis", "clue": "Dragon Ball"},
      {"word": "Ryuk", "clue": "Death Note"},
      {"word": "Light Yagami", "clue": "Death Note"},
      {"word": "L", "clue": "Death Note"},
      {"word": "Misa Amane", "clue": "Death Note"},
      {"word": "Near", "clue": "Death Note"},
      {"word": "Mello", "clue": "Death Note"},
      {"word": "Eren Yeager", "clue": "Attack on Titan"},
      {"word": "Mikasa Ackerman", "clue": "Attack on Titan"},
      {"word": "Armin Arlert", "clue": "Attack on Titan"},
      {"word": "Levi Ackerman", "clue": "Attack on Titan"},
      {"word": "Erwin Smith", "clue": "Attack on Titan"},
      {"word": "Hange Zoë", "clue": "Attack on Titan"},
      {"word": "Jean Kirstein", "clue": "Attack on Titan"},
      {"word": "Connie Springer", "clue": "Attack on Titan"},
      {"word": "Sasha Blouse", "clue": "Attack on Titan"},
      {"word": "Reiner Braun", "clue": "Attack on Titan"},
      {"word": "Bertholdt Hoover", "clue": "Attack on Titan"},
      {"word": "Enel", "clue": "One Piece"},
      {"word": "Fujitora", "clue": "One Piece"},
      {"word": "Kuro", "clue": "One Piece"},
      {"word": "Buggy", "clue": "One Piece"},
      {"word": "Perona", "clue": "One Piece"},
      {"word": "Bartolomeo", "clue": "One Piece"},
      {"word": "Shino Aburame", "clue": "Naruto"},
      {"word": "Kiba Inuzuka", "clue": "Naruto"},
      {"word": "Anko Mitarashi", "clue": "Naruto"},
      {"word": "Kurenai Yuhi", "clue": "Naruto"},
      {"word": "Iruka Umino", "clue": "Naruto"},
      {"word": "Konohamaru", "clue": "Naruto"},
      {"word": "Mereoleona Vermillion", "clue": "Black Clover"},
      {"word": "William Vangeance", "clue": "Black Clover"},
      {"word": "Dorothy Unsworth", "clue": "Black Clover"},
      {"word": "Rill Boismortier", "clue": "Black Clover"},
      {"word": "Zora Ideale", "clue": "Black Clover"},
      {"word": "Grey", "clue": "Black Clover"},
      {"word": "Teru Mikami", "clue": "Death Note"},
      {"word": "Watari", "clue": "Death Note"},
      {"word": "Kyosuke Higuchi", "clue": "Death Note"},
      {"word": "Hannes", "clue": "Attack on Titan"},
      {"word": "Floch Forster", "clue": "Attack on Titan"},
      {"word": "Ymir", "clue": "Attack on Titan"},
      {"word": "Zeke Yeager", "clue": "Attack on Titan"},
      {"word": "Pieck Finger", "clue": "Attack on Titan"},
      {"word": "Galliard", "clue": "Attack on Titan"},
      {"word": "Ikkaku Madarame", "clue": "Bleach"},
      {"word": "Yumichika Ayasegawa", "clue": "Bleach"},
      {"word": "Shuhei Hisagi", "clue": "Bleach"},
      {"word": "Lisa Yadomaru", "clue": "Bleach"},
      {"word": "Nemu Kurotsuchi", "clue": "Bleach"},
      {"word": "Mayuri Kurotsuchi", "clue": "Bleach"},
      {"word": "Tien Shinhan", "clue": "Dragon Ball"},
      {"word": "Yamcha", "clue": "Dragon Ball" },
      {"word": "Videl", "clue": "Dragon Ball"},
      {"word": "Android 17", "clue": "Dragon Ball"},
      {"word": "Master Roshi", "clue": "Dragon Ball"},
      {"word": "Mr. Satan", "clue": "Dragon Ball"},
      {"word": "Killer", "clue": "One Piece"},
      {"word": "Apoo", "clue": "One Piece"},
      {"word": "Basil Hawkins", "clue": "One Piece"},
      {"word": "Bon Clay", "clue": "One Piece"},
      {"word": "Gekomoria", "clue": "One Piece"},
      {"word": "Izuna Uchiha", "clue": "Naruto"},
      {"word": "Hashirama Senju", "clue": "Naruto"},
      {"word": "Tobirama Senju", "clue": "Naruto"},
      {"word": "Karin Uzumaki", "clue": "Naruto"},
      {"word": "Suigetsu Hozuki", "clue": "Naruto"},
      {"word": "Julius (Younger)", "clue": "Black Clover"},
      {"word": "Patry", "clue": "Black Clover"},
      {"word": "Rhya", "clue": "Black Clover"},
      {"word": "Valtos", "clue": "Black Clover"},
      {"word": "Sally", "clue": "Black Clover"},
      {"word": "Hiyori Sarugaki", "clue": "Bleach"},
      {"word": "Love Aikawa", "clue": "Bleach"},
      {"word": "Rose Otoribashi", "clue": "Bleach"},
      {"word": "Shinji Hirako", "clue": "Bleach"},
      {"word": "Lilynette Gingerbuck", "clue": "Bleach"},
      {"word": "Starrk", "clue": "Bleach"},
      {"word": "Urahara Kisuke", "clue": "Bleach"},
      {"word": "Tessai Tsukabishi", "clue": "Bleach"},
      {"word": "Jinta Hanakari", "clue": "Bleach"},
      {"word": "Ururu Tsumugiya", "clue": "Bleach"},
      {"word": "Yuji Itadori", "clue": "Jujutsu Kaisen"},
      {"word": "Satoru Gojo", "clue": "Jujutsu Kaisen"},
      {"word": "Megumi Fushiguro", "clue": "Jujutsu Kaisen"},
      {"word": "Nobara Kugisaki", "clue": "Jujutsu Kaisen"},
      {"word": "Maki Zenin", "clue": "Jujutsu Kaisen"},
      {"word": "Toge Inumaki", "clue": "Jujutsu Kaisen"},
      {"word": "Panda", "clue": "Jujutsu Kaisen"},
      {"word": "Kento Nanami", "clue": "Jujutsu Kaisen"},
      {"word": "Yuki Tsukumo", "clue": "Jujutsu Kaisen"},
      {"word": "Masamichi Yaga", "clue": "Jujutsu Kaisen"},
      {"word": "Shoko Ieiri", "clue": "Jujutsu Kaisen"},
      {"word": "Suguru Geto", "clue": "Jujutsu Kaisen"},
      {"word": "Ryomen Sukuna", "clue": "Jujutsu Kaisen"},
      {"word": "Mahito", "clue": "Jujutsu Kaisen"},
      {"word": "Jogo", "clue": "Jujutsu Kaisen"},
      {"word": "Hanami", "clue": "Jujutsu Kaisen"},
      {"word": "Dagon", "clue": "Jujutsu Kaisen"},
      {"word": "Choso", "clue": "Jujutsu Kaisen"},
      {"word": "Eso", "clue": "Jujutsu Kaisen"},
      {"word": "Kechizu", "clue": "Jujutsu Kaisen"},
      {"word": "Kenjaku", "clue": "Jujutsu Kaisen"},
      {"word": "Uraume", "clue": "Jujutsu Kaisen"},
      {"word": "Aoi Todo", "clue": "Jujutsu Kaisen"},
      {"word": "Mei Mei", "clue": "Jujutsu Kaisen"},
      {"word": "Kokichi Muta (Mechamaru)", "clue": "Jujutsu Kaisen"},
      {"word": "Miwa Kasumi", "clue": "Jujutsu Kaisen"},
      {"word": "Noritoshi Kamo", "clue": "Jujutsu Kaisen"},
      {"word": "Mai Zenin", "clue": "Jujutsu Kaisen"},
      {"word": "Utahime Iori", "clue": "Jujutsu Kaisen"},
      {"word": "Gakuganji Yoshinobu", "clue": "Jujutsu Kaisen"},
      {"word": "Yuta Okkotsu", "clue": "Jujutsu Kaisen"},
      {"word": "Rika Orimoto", "clue": "Jujutsu Kaisen"},
      {"word": "Suguru Geto (Jujutsu Kaisen 0)", "clue": "Jujutsu Kaisen"},
      {"word": "Kinji Hakari", "clue": "Jujutsu Kaisen"},
      {"word": "Kirara Hoshi", "clue": "Jujutsu Kaisen"},
      {"word": "Naoya Zenin", "clue": "Jujutsu Kaisen"},
      {"word": "Yorozu", "clue": "Jujutsu Kaisen"},
      {"word": "Takaba Fumihiko", "clue": "Jujutsu Kaisen"},
      {"word": "Angel (Hana Kurusu)", "clue": "Jujutsu Kaisen"},
      {"word": "Reggie Star", "clue": "Jujutsu Kaisen"},
      {"word": "Charles Bernard", "clue": "Jujutsu Kaisen"},
      {"word": "Higuruma Hiromi", "clue": "Jujutsu Kaisen"},
      {"word": "Hazenoki Ikuya", "clue": "Jujutsu Kaisen"},
      {"word": "Remi", "clue": "Jujutsu Kaisen"},
      {"word": "Tsumiki Fushiguro", "clue": "Jujutsu Kaisen"},
      {"word": "Toji Fushiguro", "clue": "Jujutsu Kaisen"},
      {"word": "Shigaraki", "clue": "Jujutsu Kaisen"}, // Assuming for consistency, could be a common name.
      {"word": "Riko Amanai", "clue": "Jujutsu Kaisen"},
      {"word": "Misato Kuroi", "clue": "Jujutsu Kaisen"},
      {"word": "Geto's Curse Spirit (Playful Cloud)", "clue": "Jujutsu Kaisen"},
      {"word": "Saitama", "clue": "One Punch Man"},
      {"word": "Genos", "clue": "One Punch Man"},
      {"word": "King", "clue": "One Punch Man"},
      {"word": "Fubuki", "clue": "One Punch Man"},
      {"word": "Tatsumaki", "clue": "One Punch Man"},
      {"word": "Bang (Silverfang)", "clue": "One Punch Man"},
      {"word": "Bomb", "clue": "One Punch Man"},
      {"word": "Atomic Samurai", "clue": "One Punch Man"},
      {"word": "Child Emperor", "clue": "One Punch Man"},
      {"word": "Zombieman", "clue": "One Punch Man"},
      {"word": "Flashy Flash", "clue": "One Punch Man"},
      {"word": "Darkshine", "clue": "One Punch Man"},
      {"word": "Pig God", "clue": "One Punch Man"},
      {"word": "Drive Knight", "clue": "One Punch Man"},
      {"word": "Watchdog Man", "clue": "One Punch Man"},
      {"word": "Metal Bat", "clue": "One Punch Man"},
      {"word": "Tanktop Master", "clue": "One Punch Man"},
      {"word": "Puri-Puri Prisoner", "clue": "One Punch Man"},
      {"word": "Superalloy Darkshine", "clue": "One Punch Man"},
      {"word": "Lightning Max", "clue": "One Punch Man"},
      {"word": "Stinger", "clue": "One Punch Man"},
      {"word": "Mumen Rider", "clue": "One Punch Man"},
      {"word": "Sweet Mask (Amai Mask)", "clue": "One Punch Man"},
      {"word": "Garou", "clue": "One Punch Man"},
      {"word": "Boros", "clue": "One Punch Man"},
      {"word": "Vaccine Man", "clue": "One Punch Man"},
      {"word": "Crablante", "clue": "One Punch Man"},
      {"word": "Deep Sea King", "clue": "One Punch Man"},
      {"word": "Carnage Kabuto", "clue": "One Punch Man"},
      {"word": "Elder Centipede", "clue": "One Punch Man"},
      {"word": "Overgrown Rover", "clue": "One Punch Man"},
      {"word": "Black Sperm", "clue": "One Punch Man"},
      {"word": "Homeless Emperor", "clue": "One Punch Man"},
      {"word": "Goketsu", "clue": "One Punch Man"},
      {"word": "Orochi", "clue": "One Punch Man"},
      {"word": "Psychic (Psykos)", "clue": "One Punch Man"},
      {"word": "Geryuganshoop", "clue": "One Punch Man"},
      {"word": "Groribas", "clue": "One Punch Man"},
      {"word": "Melzargard", "clue": "One Punch Man"},
      {"word": "Speed-o'-Sound Sonic", "clue": "One Punch Man"},
      {"word": "Gale Wind", "clue": "One Punch Man"},
      {"word": "Hellfire Flame", "clue": "One Punch Man"},
      {"word": "Giga Kick Man", "clue": "One Punch Man"},
      {"word": "Blue Fire", "clue": "One Punch Man"},
      {"word": "Death Gatling", "clue": "One Punch Man"},
      {"word": "Needle Star", "clue": "One Punch Man"},
      {"word": "Splitting Guts", "clue": "One Punch Man"},
      {"word": "Tanktop Tiger", "clue": "One Punch Man"},
      {"word": "Tanktop Blackhole", "clue": "One Punch Man"},
      {"word": "Sneck", "clue": "One Punch Man"},
      {"word": "Glasses", "clue": "One Punch Man"},
      {"word": "Death Flounder", "clue": "One Punch Man"}
      // You can add more OPM characters here to fill it out!
  ],
 
  "TV Shows": [
    {"word": "Michael Scott", "clue": "The Office (US)"},
    {"word": "Dwight Schrute", "clue": "The Office (US)"},
    {"word": "Jim Halpert", "clue": "The Office (US)"},
    {"word": "Pam Beesly", "clue": "The Office (US)"},
    {"word": "Kevin Malone", "clue": "The Office (US)"},
    {"word": "Angela Martin", "clue": "The Office (US)"},
    {"word": "Andy Bernard", "clue": "The Office (US)"},
    {"word": "Oscar Martinez", "clue": "The Office (US)"},
    {"word": "Stanley Hudson", "clue": "The Office (US)"},
    {"word": "Phyllis Lapin-Vance", "clue": "The Office (US)"},
    {"word": "Creed Bratton", "clue": "The Office (US)"},
    {"word": "Meredith Palmer", "clue": "The Office (US)"},
    {"word": "Toby Flenderson", "clue": "The Office (US)"},
    {"word": "Erin Hannon", "clue": "The Office (US)"},
    {"word": "Gabe Lewis", "clue": "The Office (US)"},

    // Friends
    {"word": "Joey Tribbiani", "clue": "Friends"},
    {"word": "Phoebe Buffay", "clue": "Friends"},
    {"word": "Monica Geller", "clue": "Friends"},
    {"word": "Chandler Bing", "clue": "Friends"},
    {"word": "Rachel Green", "clue": "Friends"},
    {"word": "Ross Geller", "clue": "Friends"},
    {"word": "Gunther", "clue": "Friends"},

    // Game of Thrones
    {"word": "Jon Snow", "clue": "Game of Thrones"},
    {"word": "Daenerys Targaryen", "clue": "Game of Thrones"},
    {"word": "Tyrion Lannister", "clue": "Game of Thrones"},
    {"word": "Cersei Lannister", "clue": "Game of Thrones"},
    {"word": "Arya Stark", "clue": "Game of Thrones"},
    {"word": "Sansa Stark", "clue": "Game of Thrones"},
    {"word": "Jaime Lannister", "clue": "Game of Thrones"},
    {"word": "Bran Stark", "clue": "Game of Thrones"},
    {"word": "Ned Stark", "clue": "Game of Thrones"},
    {"word": "Khal Drogo", "clue": "Game of Thrones"},
    {"word": "Melisandre", "clue": "Game of Thrones"},
    {"word": "The Hound", "clue": "Game of Thrones"},
    {"word": "Littlefinger", "clue": "Game of Thrones"},

    // Breaking Bad
    {"word": "Walter White", "clue": "Breaking Bad"},
    {"word": "Jesse Pinkman", "clue": "Breaking Bad"},
    {"word": "Skyler White", "clue": "Breaking Bad"},
    {"word": "Hank Schrader", "clue": "Breaking Bad"},
    {"word": "Saul Goodman", "clue": "Breaking Bad"},
    {"word": "Gustavo Fring", "clue": "Breaking Bad"},
    {"word": "Mike Ehrmantraut", "clue": "Breaking Bad"},

    // Stranger Things
    {"word": "Eleven", "clue": "Stranger Things"},
    {"word": "Mike Wheeler", "clue": "Stranger Things"},
    {"word": "Dustin Henderson", "clue": "Stranger Things"},
    {"word": "Lucas Sinclair", "clue": "Stranger Things"},
    {"word": "Will Byers", "clue": "Stranger Things"},
    {"word": "Jim Hopper", "clue": "Stranger Things"},
    {"word": "Joyce Byers", "clue": "Stranger Things"},
    {"word": "Nancy Wheeler", "clue": "Stranger Things"},
    {"word": "Jonathan Byers", "clue": "Stranger Things"},
    {"word": "Steve Harrington", "clue": "Stranger Things"},
    {"word": "Robin Buckley", "clue": "Stranger Things"},

    // The Big Bang Theory
    {"word": "Sheldon Cooper", "clue": "The Big Bang Theory"},
    {"word": "Leonard Hofstadter", "clue": "The Big Bang Theory"},
    {"word": "Penny", "clue": "The Big Bang Theory"},
    {"word": "Howard Wolowitz", "clue": "The Big Bang Theory"},
    {"word": "Raj Koothrappali", "clue": "The Big Bang Theory"},
    {"word": "Bernadette Rostenkowski-Wolowitz", "clue": "The Big Bang Theory"},
    {"word": "Amy Farrah Fowler", "clue": "The Big Bang Theory"},

    // The Mandalorian
    {"word": "Din Djarin", "clue": "The Mandalorian"},
    {"word": "Grogu", "clue": "The Mandalorian"},
    {"word": "Bo-Katan Kryze", "clue": "The Mandalorian"},
    {"word": "Cara Dune", "clue": "The Mandalorian"},
    {"word": "Greef Karga", "clue": "The Mandalorian"},

    // WandaVision
    {"word": "Wanda Maximoff", "clue": "WandaVision"},
    {"word": "Vision", "clue": "WandaVision"},
    {"word": "Agnes (Agatha Harkness)", "clue": "WandaVision"},
    {"word": "Monica Rambeau", "clue": "WandaVision"},

    // Loki
    {"word": "Loki Laufeyson", "clue": "Loki"},
    {"word": "Sylvie", "clue": "Loki"},
    {"word": "Mobius M. Mobius", "clue": "Loki"},
    {"word": "Miss Minutes", "clue": "Loki"},

    // Succession
    {"word": "Logan Roy", "clue": "Succession"},
    {"word": "Kendall Roy", "clue": "Succession"},
    {"word": "Shiv Roy", "clue": "Succession"},
    {"word": "Roman Roy", "clue": "Succession"},
    {"word": "Tom Wambsgans", "clue": "Succession"},
    {"word": "Greg Hirsch", "clue": "Succession"},

    // The Crown
    {"word": "Queen Elizabeth II", "clue": "The Crown"},
    {"word": "Prince Philip", "clue": "The Crown"},
    {"word": "Princess Margaret", "clue": "The Crown"},
    {"word": "Princess Diana", "clue": "The Crown"},

    // Bridgerton
    {"word": "Daphne Bridgerton", "clue": "Bridgerton"},
    {"word": "Simon Basset", "clue": "Bridgerton"},
    {"word": "Kate Sharma", "clue": "Bridgerton"},
    {"word": "Anthony Bridgerton", "clue": "Bridgerton"},

    // Squid Game
    {"word": "Seong Gi-hun (Player 456)", "clue": "Squid Game"},
    {"word": "Kang Sae-byeok (Player 067)", "clue": "Squid Game"},
    {"word": "Cho Sang-woo (Player 218)", "clue": "Squid Game"},
    {"word": "Oh Il-nam (Player 001)", "clue": "Squid Game"},
    {"word": "Hwang Jun-ho", "clue": "Squid Game"},

    // Money Heist (La Casa de Papel)
    {"word": "The Professor", "clue": "Money Heist"},
    {"word": "Tokyo", "clue": "Money Heist"},
    {"word": "Berlin", "clue": "Money Heist"},
    {"word": "Denver", "clue": "Money Heist"},
    {"word": "Nairobi", "clue": "Money Heist"},
    {"word": "Rio", "clue": "Money Heist"},

    // Wednesday
    {"word": "Wednesday Addams", "clue": "Wednesday"},
    {"word": "Enid Sinclair", "clue": "Wednesday"},
    {"word": "Tyler Galpin", "clue": "Wednesday"},
    {"word": "Xavier Thorpe", "clue": "Wednesday"},

    // The Boys
    {"word": "Billy Butcher", "clue": "The Boys"},
    {"word": "Hughie Campbell", "clue": "The Boys"},
    {"word": "Homelander", "clue": "The Boys"},
    {"word": "Starlight (Annie January)", "clue": "The Boys"},
    {"word": "Queen Maeve", "clue": "The Boys"},

    // House of the Dragon
    {"word": "Rhaenyra Targaryen", "clue": "House of the Dragon"},
    {"word": "Daemon Targaryen", "clue": "House of the Dragon"},
    {"word": "Alicent Hightower", "clue": "House of the Dragon"},
    {"word": "Otto Hightower", "clue": "House of the Dragon"},

    // Ted Lasso
    {"word": "Ted Lasso", "clue": "Ted Lasso"},
    {"word": "Coach Beard", "clue": "Ted Lasso"},
    {"word": "Roy Kent", "clue": "Ted Lasso"},
    {"word": "Rebecca Welton", "clue": "Ted Lasso"},
    {"word": "Keeley Jones", "clue": "Ted Lasso"},

    // The Good Place
    {"word": "Eleanor Shellstrop", "clue": "The Good Place"},
    {"word": "Chidi Anagonye", "clue": "The Good Place"},
    {"word": "Tahani Al-Jamil", "clue": "The Good Place"},
    {"word": "Jason Mendoza", "clue": "The Good Place"},
    {"word": "Michael", "clue": "The Good Place"},
    {"word": "Janet", "clue": "The Good Place"},

    // Brooklyn Nine-Nine
    {"word": "Jake Peralta", "clue": "Brooklyn Nine-Nine"},
    {"word": "Amy Santiago", "clue": "Brooklyn Nine-Nine"},
    {"word": "Rosa Diaz", "clue": "Brooklyn Nine-Nine"},
    {"word": "Charles Boyle", "clue": "Brooklyn Nine-Nine"},
    {"word": "Raymond Holt", "clue": "Brooklyn Nine-Nine"},
    {"word": "Gina Linetti", "clue": "Brooklyn Nine-Nine"},
    {"word": "Terry Jeffords", "clue": "Brooklyn Nine-Nine"},

    // Parks and Recreation
    {"word": "Leslie Knope", "clue": "Parks and Recreation"},
    {"word": "Ron Swanson", "clue": "Parks and Recreation"},
    {"word": "April Ludgate", "clue": "Parks and Recreation"},
    {"word": "Andy Dwyer", "clue": "Parks and Recreation"},
    {"word": "Tom Haverford", "clue": "Parks and Recreation"},
    {"word": "Donna Meagle", "clue": "Parks and Recreation"},

    // Doctor Who
    {"word": "The Doctor (Tenth)", "clue": "Doctor Who"},
    {"word": "Rose Tyler", "clue": "Doctor Who"},
    {"word": "Martha Jones", "clue": "Doctor Who"},
    {"word": "Donna Noble", "clue": "Doctor Who"},
    {"word": "The Doctor (Eleventh)", "clue": "Doctor Who"},
    {"word": "Amy Pond", "clue": "Doctor Who"},
    {"word": "Rory Williams", "clue": "Doctor Who"},
    {"word": "Clara Oswald", "clue": "Doctor Who"},
    {"word": "The Doctor (Twelfth)", "clue": "Doctor Who"},
    {"word": "Bill Potts", "clue": "Doctor Who"},
    {"word": "The Doctor (Thirteenth)", "clue": "Doctor Who"},
    {"word": "Yasmin Khan", "clue": "Doctor Who"},

    // Sherlock
    {"word": "Sherlock Holmes", "clue": "Sherlock"},
    {"word": "John Watson", "clue": "Sherlock"},
    {"word": "Mycroft Holmes", "clue": "Sherlock"},
    {"word": "Irene Adler", "clue": "Sherlock"},
    {"word": "Moriarty", "clue": "Sherlock"},

    // Peaky Blinders
    {"word": "Tommy Shelby", "clue": "Peaky Blinders"},
    {"word": "Arthur Shelby", "clue": "Peaky Blinders"},
    {"word": "Polly Gray", "clue": "Peaky Blinders"},
    {"word": "Grace Burgess", "clue": "Peaky Blinders"},

    // The Witcher
    {"word": "Geralt of Rivia", "clue": "The Witcher"},
    {"word": "Ciri", "clue": "The Witcher"},
    {"word": "Yennefer of Vengerberg", "clue": "The Witcher"},
    {"word": "Jaskier", "clue": "The Witcher"},

    // Ozark
    {"word": "Marty Byrde", "clue": "Ozark"},
    {"word": "Wendy Byrde", "clue": "Ozark"},
    {"word": "Ruth Langmore", "clue": "Ozark"},
    {"word": "Darlene Snell", "clue": "Ozark"},

    // Cobra Kai
    {"word": "Johnny Lawrence", "clue": "Cobra Kai"},
    {"word": "Daniel LaRusso", "clue": "Cobra Kai"},
    {"word": "Miguel Diaz", "clue": "Cobra Kai"},
    {"word": "Samantha LaRusso", "clue": "Cobra Kai"},

    // The Queen's Gambit
    {"word": "Beth Harmon", "clue": "The Queen's Gambit"},
    {"word": "Benny Watts", "clue": "The Queen's Gambit"},
    {"word": "Harry Beltik", "clue": "The Queen's Gambit"},

    // Arcane
    {"word": "Vi", "clue": "Arcane"},
    {"word": "Jinx", "clue": "Arcane"},
    {"word": "Caitlyn Kiramman", "clue": "Arcane"},
    {"word": "Jayce Talis", "clue": "Arcane"},

    // The Umbrella Academy
    {"word": "Number Five", "clue": "The Umbrella Academy"},
    {"word": "Vanya Hargreeves (Viktor)", "clue": "The Umbrella Academy"},
    {"word": "Klaus Hargreeves", "clue": "The Umbrella Academy"},
    {"word": "Diego Hargreeves", "clue": "The Umbrella Academy"},
    {"word": "Allison Hargreeves", "clue": "The Umbrella Academy"},
    {"word": "Luther Hargreeves", "clue": "The Umbrella Academy"},

    // The Boys Presents: Diabolical
    {"word": "Laser Baby", "clue": "The Boys Presents: Diabolical"},

    // Severance
    {"word": "Mark Scout", "clue": "Severance"},
    {"word": "Helly R.", "clue": "Severance"},
    {"word": "Irving Bailiff", "clue": "Severance"},
    {"word": "Dylan George", "clue": "Severance"},

    // Fallout (TV Series)
    {"word": "Lucy MacLean", "clue": "Fallout"},
    {"word": "The Ghoul (Cooper Howard)", "clue": "Fallout"},
    {"word": "Maximus", "clue": "Fallout"},

    // House of Cards (US)
    {"word": "Frank Underwood", "clue": "House of Cards (US)"},
    {"word": "Claire Underwood", "clue": "House of Cards (US)"},

    // Daredevil (Netflix)
    {"word": "Matt Murdock", "clue": "Daredevil"},
    {"word": "Karen Page", "clue": "Daredevil"},
    {"word": "Foggy Nelson", "clue": "Daredevil"},
    {"word": "Wilson Fisk", "clue": "Daredevil"},

    // Jessica Jones
    {"word": "Jessica Jones", "clue": "Jessica Jones"},
    {"word": "Kilgrave", "clue": "Jessica Jones"},

    // Luke Cage
    {"word": "Luke Cage", "clue": "Luke Cage"},
    {"word": "Mariah Dillard", "clue": "Luke Cage"},

    // Iron Fist
    {"word": "Danny Rand", "clue": "Iron Fist"},
    {"word": "Colleen Wing", "clue": "Iron Fist"},

    // The Defenders
    {"word": "Stick", "clue": "The Defenders"},

    // The Punisher
    {"word": "Frank Castle", "clue": "The Punisher"},
    {"word": "Billy Russo", "clue": "The Punisher"},

    // Suits
    {"word": "Harvey Specter", "clue": "Suits"},
    {"word": "Mike Ross", "clue": "Suits"},
    {"word": "Jessica Pearson", "clue": "Suits"},
    {"word": "Donna Paulsen", "clue": "Suits"},

    // Yellowstone
    {"word": "John Dutton", "clue": "Yellowstone"},
    {"word": "Beth Dutton", "clue": "Yellowstone"},
    {"word": "Kayce Dutton", "clue": "Yellowstone"},
    {"word": "Rip Wheeler", "clue": "Yellowstone"},

    // The Office (UK)
    {"word": "David Brent", "clue": "The Office (UK)"},
    {"word": "Tim Canterbury", "clue": "The Office (UK)"},
    {"word": "Gareth Keenan", "clue": "The Office (UK)"},

    // Black Mirror
    {"word": "Martha (Be Right Back)", "clue": "Black Mirror"},
    {"word": "Yorkie (San Junipero)", "clue": "Black Mirror"},

    // Doctor Who (Classic)
    {"word": "The Doctor (First)", "clue": "Doctor Who (Classic)"},
    {"word": "Sarah Jane Smith", "clue": "Doctor Who (Classic)"},
    {"word": "K-9", "clue": "Doctor Who (Classic)"},

    // Star Trek: The Original Series
    {"word": "James T. Kirk", "clue": "Star Trek: The Original Series"},
    {"word": "Spock", "clue": "Star Trek: The Original Series"},
    {"word": "Leonard McCoy", "clue": "Star Trek: The Original Series"},

    // Star Trek: The Next Generation
    {"word": "Jean-Luc Picard", "clue": "Star Trek: The Next Generation"},
    {"word": "Data", "clue": "Star Trek: The Next Generation"},
    {"word": "William Riker", "clue": "Star Trek: The Next Generation"},

    // The X-Files
    {"word": "Fox Mulder", "clue": "The X-Files"},
    {"word": "Dana Scully", "clue": "The X-Files"},

    // Friends (Additional)
    {"word": "Janice Litman-Goralnik", "clue": "Friends"},

    // Seinfeld
    {"word": "Jerry Seinfeld", "clue": "Seinfeld"},
    {"word": "George Costanza", "clue": "Seinfeld"},
    {"word": "Elaine Benes", "clue": "Seinfeld"},
    {"word": "Cosmo Kramer", "clue": "Seinfeld"},

    // The Simpsons
    {"word": "Homer Simpson", "clue": "The Simpsons"},
    {"word": "Marge Simpson", "clue": "The Simpsons"},
    {"word": "Bart Simpson", "clue": "The Simpsons"},
    {"word": "Lisa Simpson", "clue": "The Simpsons"},
    {"word": "Maggie Simpson", "clue": "The Simpsons"},

    // Family Guy
    {"word": "Peter Griffin", "clue": "Family Guy"},
    {"word": "Stewie Griffin", "clue": "Family Guy"},
    {"word": "Brian Griffin", "clue": "Family Guy"},

    // South Park
    {"word": "Eric Cartman", "clue": "South Park"},
    {"word": "Stan Marsh", "clue": "South Park"},
    {"word": "Kyle Broflovski", "clue": "South Park"},
    {"word": "Kenny McCormick", "clue": "South Park"},

    // Rick and Morty
    {"word": "Rick Sanchez", "clue": "Rick and Morty"},
    {"word": "Morty Smith", "clue": "Rick and Morty"},

    // BoJack Horseman
    {"word": "BoJack Horseman", "clue": "BoJack Horseman"},
    {"word": "Todd Chavez", "clue": "BoJack Horseman"},

    // Avatar: The Last Airbender
    {"word": "Aang", "clue": "Avatar: The Last Airbender"},
    {"word": "Katara", "clue": "Avatar: The Last Airbender"},
    {"word": "Sokka", "clue": "Avatar: The Last Airbender"},
    {"word": "Zuko", "clue": "Avatar: The Last Airbender"},
    {"word": "Toph Beifong", "clue": "Avatar: The Last Airbender"},

    // The Legend of Korra
    {"word": "Korra", "clue": "The Legend of Korra"},
    {"word": "Mako", "clue": "The Legend of Korra"},
    {"word": "Bolin", "clue": "The Legend of Korra"},

    // Gravity Falls
    {"word": "Dipper Pines", "clue": "Gravity Falls"},
    {"word": "Mabel Pines", "clue": "Gravity Falls"},
    {"word": "Grunkle Stan", "clue": "Gravity Falls"},

    // Adventure Time
    {"word": "Finn the Human", "clue": "Adventure Time"},
    {"word": "Jake the Dog", "clue": "Adventure Time"},
    {"word": "Princess Bubblegum", "clue": "Adventure Time"},

    // Regular Show
    {"word": "Mordecai", "clue": "Regular Show"},
    {"word": "Rigby", "clue": "Regular Show"},

    // Steven Universe
    {"word": "Steven Universe", "clue": "Steven Universe"},
    {"word": "Garnet", "clue": "Steven Universe"},
    {"word": "Pearl", "clue": "Steven Universe"},
    {"word": "Amethyst", "clue": "Steven Universe"},

    // Futurama
    {"word": "Philip J. Fry", "clue": "Futurama"},
    {"word": "Bender Bending Rodriguez", "clue": "Futurama"},
    {"word": "Leela Turanga", "clue": "Futurama"},

    // Disenchantment
    {"word": "Bean", "clue": "Disenchantment"},
    {"word": "Elfo", "clue": "Disenchantment"},
    {"word": "Luci", "clue": "Disenchantment"},

    // The Powerpuff Girls
    {"word": "Blossom", "clue": "The Powerpuff Girls"},
    {"word": "Bubbles", "clue": "The Powerpuff Girls"},
    {"word": "Buttercup", "clue": "The Powerpuff Girls"},

    // Spongebob Squarepants
    {"word": "Spongebob Squarepants", "clue": "Spongebob Squarepants"},
    {"word": "Patrick Star", "clue": "Spongebob Squarepants"},
    {"word": "Squidward Tentacles", "clue": "Spongebob Squarepants"},

    // Archer
    {"word": "Sterling Archer", "clue": "Archer"},
    {"word": "Lana Kane", "clue": "Archer"},

    // Bob's Burgers
    {"word": "Bob Belcher", "clue": "Bob's Burgers"},
    {"word": "Linda Belcher", "clue": "Bob's Burgers"},

    // Solar Opposites
    {"word": "Korvo", "clue": "Solar Opposites"},
    {"word": "Terry", "clue": "Solar Opposites"},

    // F is for Family
    {"word": "Frank Murphy", "clue": "F is for Family"},
    {"word": "Sue Murphy", "clue": "F is for Family"},

    // Invincible
    {"word": "Mark Grayson (Invincible)", "clue": "Invincible"},
    {"word": "Omni-Man (Nolan Grayson)", "clue": "Invincible"},

    // Primal
    {"word": "Spear", "clue": "Primal"},
    {"word": "Fang", "clue": "Primal"},

    // Gen V (The Boys Spin-off)
    {"word": "Marie Moreau", "clue": "Gen V"},
    {"word": "Andre Anderson", "clue": "Gen V"},

    // House of the Dragon (Additional)
    {"word": "Viserys Targaryen", "clue": "House of the Dragon"},

    // The Good Place (Additional)
    {"word": "Shawn", "clue": "The Good Place"},

    // Brooklyn Nine-Nine (Additional)
    {"word": "Hitchcock", "clue": "Brooklyn Nine-Nine"},
    {"word": "Scully", "clue": "Brooklyn Nine-Nine"},

    // Parks and Recreation (Additional)
    {"word": "Ben Wyatt", "clue": "Parks and Recreation"},
    {"word": "Chris Traeger", "clue": "Parks and Recreation"},

    // The Witcher (Additional)
    {"word": "Cahir", "clue": "The Witcher"},
    {"word": "Fringilla Vigo", "clue": "The Witcher"},

    // Ozark (Additional)
    {"word": "Jonah Byrde", "clue": "Ozark"},
    {"word": "Charlotte Byrde", "clue": "Ozark"},

    // Cobra Kai (Additional)
    {"word": "Robby Keene", "clue": "Cobra Kai"},
    {"word": "Tory Nichols", "clue": "Cobra Kai"},

    // Arcane (Additional)
    {"word": "Mel Medarda", "clue": "Arcane"},
    {"word": "Silco", "clue": "Arcane"},

    // The Umbrella Academy (Additional)
    {"word": "Pogo", "clue": "The Umbrella Academy"},
    {"word": "Cha-Cha", "clue": "The Umbrella Academy"},
    {"word": "Hazel", "clue": "The Umbrella Academy"},

    // Severance (Additional)
    {"word": "Seth Milchick", "clue": "Severance"},

    // Suits (Additional)
    {"word": "Louis Litt", "clue": "Suits"},
    {"word": "Rachel Zane", "clue": "Suits"},

    // Yellowstone (Additional)
    {"word": "Jamie Dutton", "clue": "Yellowstone"},
    {"word": "Monica Dutton", "clue": "Yellowstone"},

    // Arrested Development
    {"word": "George Michael Bluth", "clue": "Arrested Development"},
    {"word": "Tobias Fünke", "clue": "Arrested Development"},
    {"word": "Gob Bluth", "clue": "Arrested Development"},

    // Community
    {"word": "Jeff Winger", "clue": "Community"},
    {"word": "Britta Perry", "clue": "Community"},
    {"word": "Abed Nadir", "clue": "Community"},
    {"word": "Annie Edison", "clue": "Community"},

    // The Office (US) - More
    {"word": "Jan Levinson", "clue": "The Office (US)"},
    {"word": "Ryan Howard", "clue": "The Office (US)"},
    {"word": "Kelly Kapoor", "clue": "The Office (US)"},
    {"word": "Darryl Philbin", "clue": "The Office (US)"},
    {"word": "Holly Flax", "clue": "The Office (US)"},

    // Game of Thrones - More
    {"word": "Jorah Mormont", "clue": "Game of Thrones"},
    {"word": "Varys", "clue": "Game of Thrones"},
    {"word": "Brienne of Tarth", "clue": "Game of Thrones"},
    {"word": "Tormund Giantsbane", "clue": "Game of Thrones"},

    // Breaking Bad - More
    {"word": "Marie Schrader", "clue": "Breaking Bad"},
    {"word": "Badger", "clue": "Breaking Bad"},
    {"word": "Skinny Pete", "clue": "Breaking Bad"},

    // Stranger Things - More
    {"word": "Max Mayfield", "clue": "Stranger Things"},
    {"word": "Erica Sinclair", "clue": "Stranger Things"},
    {"word": "Suzie", "clue": "Stranger Things"},

    // The Big Bang Theory - More
    {"word": "Stuart Bloom", "clue": "The Big Bang Theory"},
    {"word": "Barry Kripke", "clue": "The Big Bang Theory"},

    // The Mandalorian - More
    {"word": "Ahsoka Tano", "clue": "The Mandalorian"},
    {"word": "Luke Skywalker", "clue": "The Mandalorian"},

    // Loki - More
    {"word": "He Who Remains", "clue": "Loki"},
    {"word": "Hunter B-15", "clue": "Loki"},

    // The Crown - More
    {"word": "Camilla Shand", "clue": "The Crown"},
    {"word": "Margaret Thatcher", "clue": "The Crown"},

    // Bridgerton - More
    {"word": "Lady Danbury", "clue": "Bridgerton"},
    {"word": "Queen Charlotte", "clue": "Bridgerton"},

    // Money Heist (La Casa de Papel) - More
    {"word": "Alicia Sierra", "clue": "Money Heist"},
    {"word": "Bogotá", "clue": "Money Heist"},

    // Wednesday - More
    {"word": "Gomez Addams", "clue": "Wednesday"},
    {"word": "Morticia Addams", "clue": "Wednesday"},

    // The Boys - More
    {"word": "Frenchie", "clue": "The Boys"},
    {"word": "Kimiko Miyashiro", "clue": "The Boys"},

    // House of the Dragon - More
    {"word": "Corlys Velaryon", "clue": "House of the Dragon"},
    {"word": "Rhaenys Targaryen", "clue": "House of the Dragon"},

    // Ted Lasso - More
    {"word": "Jamie Tartt", "clue": "Ted Lasso"},
    {"word": "Nathan Shelley", "clue": "Ted Lasso"},

    // Doctor Who - More (Classic and New)
    {"word": "Dalek", "clue": "Doctor Who"},
    {"word": "Cyberman", "clue": "Doctor Who"},
    {"word": "The Master", "clue": "Doctor Who"},

    // Sherlock - More
    {"word": "Mrs. Hudson", "clue": "Sherlock"},
    {"word": "Lestrade", "clue": "Sherlock"},

    // Peaky Blinders - More
    {"word": "Finn Shelby", "clue": "Peaky Blinders"},
    {"word": "Michael Gray", "clue": "Peaky Blinders"},

    // The Witcher - More
    {"word": "Vesemir", "clue": "The Witcher"},
    {"word": "Triss Merigold", "clue": "The Witcher"},

    // Ozark - More
    {"word": "Helen Pierce", "clue": "Ozark"},
    {"word": "Omar Navarro", "clue": "Ozark"},

    // Cobra Kai - More
    {"word": "John Kreese", "clue": "Cobra Kai"},
    {"word": "Terry Silver", "clue": "Cobra Kai"},

    // The Umbrella Academy - More
    {"word": "Sir Reginald Hargreeves", "clue": "The Umbrella Academy"},
    {"word": "The Handler", "clue": "The Umbrella Academy"},

    // Suits - More
    {"word": "Katrina Bennett", "clue": "Suits"},
    {"word": "Harold Gunderson", "clue": "Suits"},

    // Yellowstone - More
    {"word": "Casey Dutton", "clue": "Yellowstone" }, // Note: Often spelled 'Kayce'
    {"word": "Monica Long", "clue": "Yellowstone"},

    // The Good Doctor
    {"word": "Shaun Murphy", "clue": "The Good Doctor"},
    {"word": "Marcus Andrews", "clue": "The Good Doctor"},

    // New Girl
    {"word": "Jess Day", "clue": "New Girl"},
    {"word": "Nick Miller", "clue": "New Girl"},

    // Modern Family
    {"word": "Phil Dunphy", "clue": "Modern Family"},
    {"word": "Claire Dunphy", "clue": "Modern Family"},
    {"word": "Jay Pritchett", "clue": "Modern Family"},
    {"word": "Gloria Delgado-Pritchett", "clue": "Modern Family"},
    {"word": "Manny Delgado", "clue": "Modern Family"},

    // Arrested Development - More
    {"word": "Lucille Bluth", "clue": "Arrested Development"},
    {"word": "Buster Bluth", "clue": "Arrested Development"},

    // Community - More
    {"word": "Troy Barnes", "clue": "Community"},
    {"word": "Shirley Bennett", "clue": "Community"},

    // The IT Crowd
    {"word": "Maurice Moss", "clue": "The IT Crowd"},
    {"word": "Roy Trenneman", "clue": "The IT Crowd"},
    {"word": "Jen Barber", "clue": "The IT Crowd"},

    // Fleabag
    {"word": "Fleabag", "clue": "Fleabag"},
    {"word": "The Priest", "clue": "Fleabag"},

    // Killing Eve
    {"word": "Eve Polastri", "clue": "Killing Eve"},
    {"word": "Villanelle", "clue": "Killing Eve"},

    // Chernobyl
    {"word": "Valery Legasov", "clue": "Chernobyl"},
    {"word": "Boris Shcherbina", "clue": "Chernobyl"},

    // Narcos
    {"word": "Pablo Escobar", "clue": "Narcos"},
    {"word": "Javier Peña", "clue": "Narcos"},

    // Mindhunter
    {"word": "Holden Ford", "clue": "Mindhunter"},
    {"word": "Bill Tench", "clue": "Mindhunter"},

    // Dark
    {"word": "Jonas Kahnwald", "clue": "Dark"},
    {"word": "Martha Nielsen", "clue": "Dark"},

    // The Haunting of Hill House
    {"word": "Nell Crain", "clue": "The Haunting of Hill House"},
    {"word": "Steven Crain", "clue": "The Haunting of Hill House"},

    // Cobra Kai (Even More)
    {"word": "Amanda LaRusso", "clue": "Cobra Kai"},
    {"word": "Demetri", "clue": "Cobra Kai"},
    {"word": "Hawk (Eli Moskowitz)", "clue": "Cobra Kai"},

    // Arcane (Even More)
    {"word": "Ekko", "clue": "Arcane"},
    {"word": "Heimerdinger", "clue": "Arcane"},

    // The Umbrella Academy (Even More)
    {"word": "Lila Pitts", "clue": "The Umbrella Academy"},
    {"word": "Sissy Cooper", "clue": "The Umbrella Academy"},

    // Severance (Even More)
    {"word": "Harmony Cobel", "clue": "Severance"},

    // Suits (Even More)
    {"word": "Jessica Pearson (Pearson Spin-off)", "clue": "Suits"},

    // Yellowstone (Even More)
    {"word": "Monica Long Dutton", "clue": "Yellowstone"},
    {"word": "Teeter", "clue": "Yellowstone"},

    // The Boys (Even More)
    {"word": "Stormfront", "clue": "The Boys"},
    {"word": "A-Train", "clue": "The Boys"},
    {"word": "The Deep", "clue": "The Boys"},

    // House of the Dragon (Even More)
    {"word": "Laena Velaryon", "clue": "House of the Dragon"},
    {"word": "Cole Criston", "clue": "House of the Dragon"},

    // Ted Lasso (Even More)
    {"word": "Nate Shelley (Nate the Great)", "clue": "Ted Lasso"},

    // The Good Place (Even More)
    {"word": "Glenn", "clue": "The Good Place"},
    {"word": "Patty", "clue": "The Good Place"},

    // Brooklyn Nine-Nine (Even More)
    {"word": "Doug Judy", "clue": "Brooklyn Nine-Nine"},

    // Parks and Recreation (Even More)
    {"word": "Jerry Gergich", "clue": "Parks and Recreation"},
    {"word": "Jean-Ralphio Saperstein", "clue": "Parks and Recreation"},

    // The Witcher (Even More)
    {"word": "Dandelion (Jaskier)", "clue": "The Witcher"},
    {"word": "Philippa Eilhart", "clue": "The Witcher"},

    // Ozark (Even More)
    {"word": "Wyatt Langmore", "clue": "Ozark"},
    {"word": "Frank Cosgrove Jr.", "clue": "Ozark"},

    // Game of Thrones (Even More)
    {"word": "Samwell Tarly", "clue": "Game of Thrones"},
    {"word": "Gilly", "clue": "Game of Thrones"},
    {"word": "Ser Davos Seaworth", "clue": "Game of Thrones"},

    // The Office (US) (Even More)
    {"word": "Clark Green", "clue": "The Office (US)"},
    {"word": "Pete Miller", "clue": "The Office (US)"}

  ],
  "Hollywood Movies": [
      {"word": "Titanic", "clue": "A love story on a sinking ship"},
      {"word": "Avengers", "clue": "Earth's mightiest heroes"}
  ],
  "Bollywood Movies": [
      {"word": "Dangal", "clue": "Wrestling sisters"},
      {"word": "Sholay", "clue": "Classic Indian action movie"}
  ],
  "Malayalam Movies": [
        {"word": "Drishyam", "clue": "Mohanlal"},
        {"word": "Kumbalangi Nights", "clue": "Fahadh Faasil"},
        {"word": "Premam", "clue": "Nivin Pauly"},
        {"word": "Bangalore Days", "clue": "Dulquer Salmaan"},
        {"word": "Maheshinte Prathikaaram", "clue": "Fahadh Faasil"},
        {"word": "Charlie", "clue": "Dulquer Salmaan"},
        {"word": "Ayyappanum Koshiyum", "clue": "Prithviraj Sukumaran"},
        {"word": "Minnal Murali", "clue": "Tovino Thomas"},
        {"word": "Manichitrathazhu", "clue": "Mohanlal"},
        {"word": "Ramji Rao Speaking", "clue": "Saikumar"},
        {"word": "Oru Vadakkan Veeragatha", "clue": "Mammootty"},
        {"word": "Devasuram", "clue": "Mohanlal"},
        {"word": "Kireedam", "clue": "Mohanlal"},
        {"word": "Vadakkan Pattukal (Film)", "clue": "Jayaram"}, // Or Mammootty if referring to "Oru Vadakkan Veeragatha" as the common name.
        {"word": "C.I.D. Moosa", "clue": "Dileep"},
        {"word": "Meenaviyil", "clue": "Kunchacko Boban"},
        {"word": "Amen", "clue": "Fahadh Faasil"},
        {"word": "Thondimuthalum Driksakshiyum", "clue": "Fahadh Faasil"},
        {"word": "Sudani from Nigeria", "clue": "Soubin Shahir"},
        {"word": "Jallikattu", "clue": "Antony Varghese"},
        {"word": "Android Kunjappan Ver 5.25", "clue": "Soubin Shahir"},
        {"word": "Kappela", "clue": "Anna Ben"}, // Though the lead is usually debated, she's a prominent face.
        {"word": "Home", "clue": "Indrans"},
        {"word": "Jana Gana Mana", "clue": "Prithviraj Sukumaran"},
        {"word": "Nanpakal Nerathu Mayakkam", "clue": "Mammootty"},
        {"word": "Romancham", "clue": "Soubin Shahir"},
        {"word": "2018", "clue": "Tovino Thomas"},
        {"word": "Kaakha Kaakha", "clue": "Suriya"}, // Tamil film, but very popular in Kerala, adjust if strictly Malayalam.
        {"word": "Neru", "clue": "Mohanlal"},
        {"word": "Kadavan", "clue": "Basil Joseph"},
        {"word": "Mukundan Unni Associates", "clue": "Vineeth Sreenivasan"},
        {"word": "Bheeshma Parvam", "clue": "Mammootty"},
        {"word": "Malik", "clue": "Fahadh Faasil"},
        {"word": "The Great Indian Kitchen", "clue": "Nimisha Sajayan"}, // Again, female lead, but a key face.
        {"word": "Kanakam Kamini Kalaham", "clue": "Nivin Pauly"},
        {"word": "Pushpa: The Rise", "clue": "Allu Arjun"}, // Telugu, but hugely popular. Strict Malayalam only? Then remove.
        {"word": "Lucifer", "clue": "Mohanlal"},
        {"word": "Karnan", "clue": "Dhanush"}, // Tamil, popular.
        {"word": "Hridayam", "clue": "Pranav Mohanlal"},
        {"word": "Helen", "clue": "Anna Ben"},
        {"word": "Vellimoonga", "clue": "Biju Menon"},
        {"word": "Traffic", "clue": "Sreenivasan"}, // Ensemble cast, picking one prominent.
        {"word": "Ozhimuri", "clue": "Lal"},
        {"word": "Iyobinte Pusthakam", "clue": "Fahadh Faasil"},
        {"word": "Parava", "clue": "Dulquer Salmaan"}, // Cameo, but important. Basil Joseph is lead.
        {"word": "Joseph", "clue": "Joju George"},
        {"word": "Thaneer Mathan Dinangal", "clue": "Mathew Thomas"},
        {"word": "Kunjiramayanam", "clue": "Vineeth Sreenivasan"},
        {"word": "Godha", "clue": "Tovino Thomas"},
        {"word": "Mayanadi", "clue": "Tovino Thomas"}
        // Add more Malayalam movies here, keeping the lead actor as the clue.
    ],
    "Animals": [
        {"word": "Elephant", "clue": "Possesses a trunk for grasping."},
        {"word": "Giraffe", "clue": "Has an exceptionally long neck."},
        {"word": "Kangaroo", "clue": "Carries its young in a pouch."},
        {"word": "Penguin", "clue": "Flightless bird adapted for swimming."},
        {"word": "Bat", "clue": "The only mammal capable of true flight."},
        {"word": "Octopus", "clue": "Has eight arms and changes color."},
        {"word": "Chameleon", "clue": "Changes skin color for camouflage."},
        {"word": "Sloth", "clue": "Moves very slowly through trees."},
        {"word": "Platypus", "clue": "Mammal that lays eggs."},
        {"word": "Peacock", "clue": "Male displays elaborate tail feathers."},
        {"word": "Koala", "clue": "Lives on a diet of eucalyptus leaves."},
        {"word": "Pangolin", "clue": "Covered in protective keratin scales."},
        {"word": "Narwhal", "clue": "Possesses a long, protruding tusk."},
        {"word": "Armadillo", "clue": "Has a flexible, bony shell."},
        {"word": "Axolotl", "clue": "Retains larval features throughout life."},
        {"word": "Wombat", "clue": "Marsupial with backward-facing pouch."},
        {"word": "Lemur", "clue": "Primate endemic to Madagascar."},
        {"word": "Fennec Fox", "clue": "Known for its unusually large ears."},
        {"word": "Blobfish", "clue": "Gelatinous body adapted for deep sea pressure."},
        {"word": "Aye-Aye", "clue": "Uses a long, thin middle finger to tap for grubs."},
        {"word": "Star-nosed Mole", "clue": "Has 22 fleshy tentacles on its snout."},
        {"word": "Kakapo", "clue": "Largest and only flightless parrot."},
        {"word": "Hagfish", "clue": "Produces copious amounts of slime as defense."},
        {"word": "Tarsier", "clue": "Possesses disproportionately large eyes."},
        {"word": "Manatee", "clue": "Large, slow-moving aquatic herbivore."},
        {"word": "Komodo Dragon", "clue": "Largest living lizard species."},
        {"word": "Quokka", "clue": "Known for its seemingly smiling face."},
        {"word": "Goblin Shark", "clue": "Has a long, flattened snout and protrusible jaws."},
        {"word": "Alpaca", "clue": "Prized for its soft, luxurious fiber."},
        {"word": "Camel", "clue": "Stores fat in its humps for energy and water."},
        {"word": "Hedgehog", "clue": "Covered in sharp, spiny quills."},
        {"word": "Anteater", "clue": "Has a long, sticky tongue for catching insects."},
        {"word": "Walrus", "clue": "Distinguished by prominent tusks."},
        {"word": "Sea Otter", "clue": "Uses tools, like rocks, to crack open shellfish."},
        {"word": "Potoo Bird", "clue": "Master of camouflage, resembling a tree stump."},
        {"word": "Tapir", "clue": "Features a short, prehensile snout."},
        {"word": "Grizzly Bear", "clue": "Known for a distinctive shoulder hump."},
        {"word": "Orangutan", "clue": "Great ape with long, reddish-brown hair."},
        {"word": "Bison", "clue": "Large bovine with a shaggy coat and shoulder hump."},
        {"word": "Warthog", "clue": "African wild pig with facial warts and tusks."},
        {"word": "Hippopotamus", "clue": "Spends most of its time in water."},
        {"word": "Porcupine", "clue": "Rodent with a coat of sharp quills."},
        {"word": "Rhinoceros", "clue": "Recognizable by its distinctive horn/horns."},
        {"word": "Polar Bear", "clue": "Large white bear adapted for Arctic life."},
        {"word": "Cheetah", "clue": "Known as the fastest land animal."},
        {"word": "Pufferfish", "clue": "Inflates its body when threatened."},
        {"word": "Cuttlefish", "clue": "Possesses W-shaped pupils and remarkable camouflage."},
        {"word": "Tardigrade", "clue": "Microscopic invertebrate known for extreme resilience."},
        {"word": "Okapi", "clue": "Zebra-like stripes on hindquarters, related to giraffe."},
        {"word": "Dumbo Octopus", "clue": "Fins resemble elephant ears, lives in deep sea."}
        // Add more animals here, ensuring the clue is a non-identifying feature.
    ],
    "Popular Games": [
        {"word": "Fortnite", "clue": "Battle Royale"},
        {"word": "Minecraft", "clue": "Sandbox / Survival"},
        {"word": "Grand Theft Auto V", "clue": "Action-Adventure"},
        {"word": "Call of Duty", "clue": "First-Person Shooter"},
        {"word": "FIFA", "clue": "Sports Simulation"},
        {"word": "The Legend of Zelda: Breath of the Wild", "clue": "Action-Adventure / Open World"},
        {"word": "Among Us", "clue": "Social Deduction"},
        {"word": "Super Mario Bros.", "clue": "Platformer"},
        {"word": "Tetris", "clue": "Puzzle"},
        {"word": "League of Legends", "clue": "MOBA (Multiplayer Online Battle Arena)"},
        {"word": "Overwatch", "clue": "Hero Shooter"},
        {"word": "Valorant", "clue": "Tactical Shooter"},
        {"word": "Roblox", "clue": "User-Generated Content Platform"},
        {"word": "Pokémon Go", "clue": "Augmented Reality / Location-Based"},
        {"word": "The Sims 4", "clue": "Life Simulation"},
        {"word": "Assassin's Creed Valhalla", "clue": "Action RPG / Open World"},
        {"word": "Red Dead Redemption 2", "clue": "Action-Adventure / Western"},
        {"word": "Cyberpunk 2077", "clue": "Action RPG"},
        {"word": "God of War Ragnarök", "clue": "Action-Adventure"},
        {"word": "Elden Ring", "clue": "Action RPG / Open World"},
        {"word": "Apex Legends", "clue": "Battle Royale / Hero Shooter"},
        {"word": "Genshin Impact", "clue": "Action RPG / Gacha"},
        {"word": "Counter-Strike 2", "clue": "Tactical First-Person Shooter"},
        {"word": "Rocket League", "clue": "Vehicular Soccer"},
        {"word": "Fall Guys", "clue": "Battle Royale / Party Game"},
        {"word": "Animal Crossing: New Horizons", "clue": "Life Simulation / Social Simulation"},
        {"word": "Stardew Valley", "clue": "Farm Simulation / RPG"},
        {"word": "Hades", "clue": "Roguelike Action RPG"},
        {"word": "Persona 5 Royal", "clue": "JRPG / Social Simulation"},
        {"word": "Control", "clue": "Action-Adventure / Third-Person Shooter"},
        {"word": "Doom Eternal", "clue": "First-Person Shooter"},
        {"word": "Resident Evil Village", "clue": "Survival Horror"},
        {"word": "It Takes Two", "clue": "Co-op Adventure"},
        {"word": "Celeste", "clue": "Precision Platformer"},
        {"word": "Disco Elysium", "clue": "Role-Playing Game"},
        {"word": "Hollow Knight", "clue": "Metroidvania"},
        {"word": "Portal 2", "clue": "Puzzle-Platformer"},
        {"word": "Overcooked 2", "clue": "Co-op Cooking"},
        {"word": "Factorio", "clue": "Factory Simulation / Strategy"},
        {"word": "Terraria", "clue": "Sandbox / Action-Adventure"},
        {"word": "No Man's Sky", "clue": "Space Exploration / Survival"},
        {"word": "Forza Horizon 5", "clue": "Open World Racing"},
        {"word": "NBA 2K", "clue": "Basketball Simulation"},
        {"word": "Madden NFL", "clue": "American Football Simulation"},
        {"word": "Mortal Kombat 1", "clue": "Fighting Game"},
        {"word": "Street Fighter 6", "clue": "Fighting Game"},
        {"word": "Clash of Clans", "clue": "Strategy / Base Building (Mobile)"},
        {"word": "Candy Crush Saga", "clue": "Match-3 Puzzle (Mobile)"},
        {"word": "Pokémon Scarlet and Violet", "clue": "Open World RPG"},
        {"word": "Diablo IV", "clue": "Action RPG"}
        // Add more Popular Games here, with their game type/genre as the clue.
    ]
 
};

// Game state variables
let players = [];
let currentIndex = 0;
let spyIndex = -1;
let chosenWordObject = null;
let votes = {};
let currentCategory = "";

// Get DOM elements for easier access (Good practice to get them once)
const setupDiv = document.getElementById("setup");
const roleRevealDiv = document.getElementById("roleReveal");
const votingDiv = document.getElementById("voting");
const resultDiv = document.getElementById("result");

const playerLabel = document.getElementById("playerLabel");
const roleText = document.getElementById("roleText");
const roleActionButton = document.getElementById("roleActionButton"); // This needs an ID in HTML!
const numPlayersInput = document.getElementById("numPlayers");
const categorySelect = document.getElementById("categorySelect");

/**
 * Initializes the game when the window loads.
 * Populates the category select dropdown.
 */
window.onload = () => {
    // Assuming wordCategories is defined globally or imported elsewhere.
    // Make sure your wordCategories object is included in your script.js or linked before this script.
    for (const cat in wordCategories) {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    }
};

/**
 * Starts the game.
 * Validates player count, assigns roles (Civilian/Spy), and prepares for the first player's role reveal.
 */
function startGame() {
    const num = parseInt(numPlayersInput.value);

    if (isNaN(num) || num < 3 || num > 6) {
        alert("Please enter a number of players between 3 and 6.");
        return;
    }

    currentCategory = categorySelect.value;
    const wordList = wordCategories[currentCategory];

    if (!wordList || wordList.length === 0) {
        alert("Selected category has no words. Please choose another category.");
        return;
    }

    // Randomly select a word/clue for the round
    chosenWordObject = wordList[Math.floor(Math.random() * wordList.length)];

    // Initialize players and assign roles
    players = new Array(num).fill("Civilian");
    spyIndex = Math.floor(Math.random() * num);
    players[spyIndex] = "Spy";

    // Reset votes and current player index
    votes = {};
    currentIndex = 0; // Start with Player 1

    // Transition UI from setup to role reveal
    setupDiv.classList.add("hidden");
    roleRevealDiv.classList.remove("hidden");

    // Prepare the role reveal for the first player
    playerLabel.innerText = `Player ${currentIndex + 1}`;
    roleText.innerText = "Tap to reveal your role.";
    roleText.classList.add("hidden"); // Role text is hidden by default
    roleActionButton.onclick = revealCurrentPlayerRole; // Set action for first tap
    roleActionButton.innerText = "Reveal Role";
}

/**
 * Reveals the current player's role.
 * Changes button text to "Hide & Pass".
 */
function revealCurrentPlayerRole() {
    if (players[currentIndex] === "Spy") {
        roleText.innerText = `You are the SPY. Your clue is: "${chosenWordObject.clue}"`;
    } else {
        roleText.innerText = `You are a CIVILIAN. The word is: "${chosenWordObject.word}"`;
    }
    roleText.classList.remove("hidden"); // Show the role text
    // Update button text for the next action: Hide & Pass
    roleActionButton.innerText = `Hide & Pass to Player ${currentIndex + 2 > players.length ? 'Vote' : currentIndex + 2}`;
    roleActionButton.onclick = hideAndPassRole; // Set action for the next tap
}

/**
 * Hides the current player's role and prepares for the next player or transitions to the voting phase.
 */
function hideAndPassRole() {
    roleText.classList.add("hidden"); // Hide the role text again
    currentIndex++; // Move to the next player

    if (currentIndex < players.length) {
        // Still players to reveal roles
        playerLabel.innerText = `Player ${currentIndex + 1}`;
        roleText.innerText = "Tap to reveal your role."; // Prompt for the next player
        roleActionButton.innerText = "Reveal Role"; // Reset button text
        roleActionButton.onclick = revealCurrentPlayerRole; // Reset action for the next player
    } else {
        // All players have viewed their roles, move to voting
        roleRevealDiv.classList.add("hidden");
        votingDiv.classList.remove("hidden");
        renderVotingButtons();
    }
}

/**
 * Renders the voting buttons for each player.
 */
function renderVotingButtons() {
    const voteButtonsDiv = document.getElementById("voteButtons");
    voteButtonsDiv.innerHTML = ""; // Clear previous buttons

    for (let i = 0; i < players.length; i++) {
        const btn = document.createElement("button");
        btn.innerText = `Vote Player ${i + 1}`;
        btn.onclick = () => castVote(i); // Attach click event
        voteButtonsDiv.appendChild(btn);
    }
}

/**
 * Records a vote for a specific player and checks if all votes are in.
 * @param {number} votedPlayerIndex - The index of the player being voted for.
 */
function castVote(votedPlayerIndex) {
    votes[votedPlayerIndex] = (votes[votedPlayerIndex] || 0) + 1;

    // A simple voting mechanism where any click increments a vote.
    // For a strict "each player votes once" pass-and-play style,
    // you'd need a similar reveal/hide mechanism for voting:
    // "Player X, cast your vote" -> Reveal buttons -> "Hide & Pass Vote"
    // For now, it proceeds once total clicks equals player count.

    const totalVotesCast = Object.values(votes).reduce((sum, count) => sum + count, 0);
    if (totalVotesCast === players.length) {
        checkResult();
    }
}

/**
 * Determines the outcome of the game based on the votes.
 */
function checkResult() {
    let mostVotedPlayerIndex = -1;
    let maxVotes = 0;
    let tied = false;

    for (const playerIndex in votes) {
        if (votes[playerIndex] > maxVotes) {
            maxVotes = votes[playerIndex];
            mostVotedPlayerIndex = parseInt(playerIndex);
            tied = false;
        } else if (votes[playerIndex] === maxVotes) {
            tied = true;
        }
    }

    const resultTextElement = document.getElementById("resultText");

    if (tied) {
        resultTextElement.innerText = `It's a tie! The real SPY was Player ${spyIndex + 1}. Spy wins! The word was: "${chosenWordObject.word}".`;
    } else if (mostVotedPlayerIndex === spyIndex) {
        resultTextElement.innerText = `Player ${spyIndex + 1} was the SPY! Civilians win! The word was: "${chosenWordObject.word}".`;
    } else {
        resultTextElement.innerText = `Wrong guess! The real SPY was Player ${spyIndex + 1}. Spy wins! The word was: "${chosenWordObject.word}".`;
    }

    votingDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
}
