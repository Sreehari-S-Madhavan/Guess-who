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
    {"word": "Gol D. Roger", "clue": "One Piece"},
    {"word": "Silvers Rayleigh", "clue": "One Piece"},
    {"word": "Shanks", "clue": "One Piece"},
    {"word": "Marshall D. Teach (Blackbeard)", "clue": "One Piece"},
    {"word": "Big Mom (Charlotte Linlin)", "clue": "One Piece"},
    {"word": "Kaido", "clue": "One Piece"},
    {"word": "Edward Newgate (Whitebeard)", "clue": "One Piece"},
    {"word": "Portgas D. Ace", "clue": "One Piece"},
    {"word": "Sabo", "clue": "One Piece"},
    {"word": "Monkey D. Garp", "clue": "One Piece"},
    {"word": "Trafalgar Law", "clue": "One Piece"},
    {"word": "Eustass Kid", "clue": "One Piece"},
    {"word": "Akainu (Sakazuki)", "clue": "One Piece"},
    {"word": "Kuzan (Aokiji)", "clue": "One Piece"},
    {"word": "Kizaru (Borsalino)", "clue": "One Piece"},
    {"word": "Dracule Mihawk", "clue": "One Piece"},
    {"word": "Boa Hancock", "clue": "One Piece"},
    {"word": "Buggy", "clue": "One Piece"},
    {"word": "Smoker", "clue": "One Piece"},
    {"word": "Tashigi", "clue": "One Piece"},
    {"word": "Crocodile", "clue": "One Piece"},
    {"word": "Doflamingo (Donquixote Doflamingo)", "clue": "One Piece"},
    {"word": "Bartolomeo", "clue": "One Piece"},
    {"word": "Cavendish", "clue": "One Piece"},
    {"word": "Vinsmoke Reiju", "clue": "One Piece"},
    {"word": "Perona", "clue": "One Piece"},
    {"word": "Gecko Moria", "clue": "One Piece"},
    {"word": "Kuma (Bartholomew Kuma)", "clue": "One Piece"},
    {"word": "Sengoku", "clue": "One Piece"},
    {"word": "Coby", "clue": "One Piece"},
    {"word": "Roronoa Zoro", "clue": "One Piece"},
    {"word": "Vinsmoke Sanji", "clue": "One Piece"},
    {"word": "Nico Robin", "clue": "One Piece"},
    {"word": "Franky", "clue": "One Piece"},
    {"word": "Brook", "clue": "One Piece"},
    {"word": "Jinbe", "clue": "One Piece"},
    {"word": "Yamato", "clue": "One Piece"},
    {"word": "Uta", "clue": "One Piece"},
    {"word": "Vegapunk", "clue": "One Piece"},
    {"word": "Bonney (Jewelry Bonney)", "clue": "One Piece"},
    {"word": "Naruto Uzumaki", "clue": "Naruto"},
    {"word": "Sasuke Uchiha", "clue": "Naruto"},
    {"word": "Sakura Haruno", "clue": "Naruto"},
    {"word": "Kakashi Hatake", "clue": "Naruto"},
    {"word": "Jiraiya", "clue": "Naruto"},
    {"word": "Tsunade", "clue": "Naruto"},
    {"word": "Orochimaru", "clue": "Naruto"},
    {"word": "Itachi Uchiha", "clue": "Naruto"},
    {"word": "Madara Uchiha", "clue": "Naruto"},
    {"word": "Obito Uchiha", "clue": "Naruto"},
    {"word": "Hinata Hyuga", "clue": "Naruto"},
    {"word": "Shikamaru Nara", "clue": "Naruto"},
    {"word": "Rock Lee", "clue": "Naruto"},
    {"word": "Might Guy", "clue": "Naruto"},
    {"word": "Gaara", "clue": "Naruto"},
    {"word": "Killer B", "clue": "Naruto"},
    {"word": "Minato Namikaze", "clue": "Naruto"},
    {"word": "Kushina Uzumaki", "clue": "Naruto"},
    {"word": "Pain (Nagato)", "clue": "Naruto"},
    {"word": "Konan", "clue": "Naruto"},
    {"word": "Kisame Hoshigaki", "clue": "Naruto"},
    {"word": "Deidara", "clue": "Naruto"},
    {"word": "Sasori", "clue": "Naruto"},
    {"word": "Hidan", "clue": "Naruto"},
    {"word": "Kakuzu", "clue": "Naruto"},
    {"word": "Zetsu", "clue": "Naruto"},
    {"word": "Tobi (Obito Uchiha)", "clue": "Naruto"},
    {"word": "Hiruzen Sarutobi", "clue": "Naruto"},
    {"word": "Tobirama Senju", "clue": "Naruto"},
    {"word": "Hashirama Senju", "clue": "Naruto"},
    {"word": "Indra Otsutsuki", "clue": "Naruto"},
    {"word": "Asura Otsutsuki", "clue": "Naruto"},
    {"word": "Kaguya Otsutsuki", "clue": "Naruto"},
    {"word": "Boruto Uzumaki", "clue": "Naruto"},
    {"word": "Sarada Uchiha", "clue": "Naruto"},
    {"word": "Mitsuki", "clue": "Naruto"},
    {"word": "Sai", "clue": "Naruto"},
    {"word": "Yamato", "clue": "Naruto"},
    {"word": "Danzo Shimura", "clue": "Naruto"},
    {"word": "Shino Aburame", "clue": "Naruto"},
    {"word": "Kiba Inuzuka", "clue": "Naruto"},
    {"word": "Akamaru", "clue": "Naruto"},
    {"word": "Choji Akimichi", "clue": "Naruto"},
    {"word": "Ino Yamanaka", "clue": "Naruto"},
    {"word": "Asuma Sarutobi", "clue": "Naruto"},
    {"word": "Kurenai Yuhi", "clue": "Naruto"},
    {"word": "Anko Mitarashi", "clue": "Naruto"},
    {"word": "Konohamaru Sarutobi", "clue": "Naruto"},
    {"word": "Iruka Umino", "clue": "Naruto"},
    {"word": "Gamabunta", "clue": "Naruto"},
    {"word": "Eren Yeager", "clue": "Attack on Titan"},
    {"word": "Mikasa Ackerman", "clue": "Attack on Titan"},
    {"word": "Armin Arlert", "clue": "Attack on Titan"},
    {"word": "Levi Ackerman", "clue": "Attack on Titan"},
    {"word": "Hange Zoë", "clue": "Attack on Titan"},
    {"word": "Erwin Smith", "clue": "Attack on Titan"},
    {"word": "Jean Kirstein", "clue": "Attack on Titan"},
    {"word": "Connie Springer", "clue": "Attack on Titan"},
    {"word": "Sasha Blouse", "clue": "Attack on Titan"},
    {"word": "Historia Reiss", "clue": "Attack on Titan"},
    {"word": "Reiner Braun", "clue": "Attack on Titan"},
    {"word": "Bertolt Hoover", "clue": "Attack on Titan"},
    {"word": "Annie Leonhart", "clue": "Attack on Titan"},
    {"word": "Zeke Yeager", "clue": "Attack on Titan"},
    {"word": "Pieck Finger", "clue": "Attack on Titan"},
    {"word": "Porco Galliard", "clue": "Attack on Titan"},
    {"word": "Gabi Braun", "clue": "Attack on Titan"},
    {"word": "Falco Grice", "clue": "Attack on Titan"},
    {"word": "Ymir", "clue": "Attack on Titan"},
    {"word": "Grisha Yeager", "clue": "Attack on Titan"},
    {"word": "Carla Yeager", "clue": "Attack on Titan"},
    {"word": "Kenny Ackerman", "clue": "Attack on Titan"},
    {"word": "Rod Reiss", "clue": "Attack on Titan"},
    {"word": "Frieda Reiss", "clue": "Attack on Titan"},
    {"word": "Uri Reiss", "clue": "Attack on Titan"},
    {"word": "Dina Fritz", "clue": "Attack on Titan"},
    {"word": "Ymir Fritz", "clue": "Attack on Titan"},
    {"word": "Karl Fritz", "clue": "Attack on Titan"},
    {"word": "Floch Forster", "clue": "Attack on Titan"},
    {"word": "Dot Pixis", "clue": "Attack on Titan"},
    {"word": "Nile Dok", "clue": "Attack on Titan"},
    {"word": "Keith Shadis", "clue": "Attack on Titan"},
    {"word": "Mike Zacharius", "clue": "Attack on Titan"},
    {"word": "Moblit Berner", "clue": "Attack on Titan"},
    {"word": "Petra Ral", "clue": "Attack on Titan"},
    {"word": "Oluo Bozado", "clue": "Attack on Titan"},
    {"word": "Eld Gin", "clue": "Attack on Titan"},
    {"word": "Gunther Schultz", "clue": "Attack on Titan"},
    {"word": "Hannes", "clue": "Attack on Titan"},
    {"word": "Kiyomi Azumabito", "clue": "Attack on Titan"},
    {"word": "Onyankopon", "clue": "Attack on Titan"},
    {"word": "Niccolo", "clue": "Attack on Titan"},
    {"word": "Kuchel Ackerman", "clue": "Attack on Titan"},
    {"word": "Furlan Church", "clue": "Attack on Titan"},
    {"word": "Isabel Magnolia", "clue": "Attack on Titan"},
    {"word": "Marco Bott", "clue": "Attack on Titan"},
    {"word": "Thomas Wagner", "clue": "Attack on Titan"},
    {"word": "Mina Carolina", "clue": "Attack on Titan"},
    {"word": "Daz", "clue": "Attack on Titan"},
    {"word": "Samuel Linke-Jackson", "clue": "Attack on Titan"},
    {"word": "Yuji Itadori", "clue": "Jujutsu Kaisen"},
    {"word": "Megumi Fushiguro", "clue": "Jujutsu Kaisen"},
    {"word": "Nobara Kugisaki", "clue": "Jujutsu Kaisen"},
    {"word": "Satoru Gojo", "clue": "Jujutsu Kaisen"},
    {"word": "Maki Zenin", "clue": "Jujutsu Kaisen"},
    {"word": "Toge Inumaki", "clue": "Jujutsu Kaisen"},
    {"word": "Panda", "clue": "Jujutsu Kaisen"},
    {"word": "Yuta Okkotsu", "clue": "Jujutsu Kaisen"},
    {"word": "Suguru Geto", "clue": "Jujutsu Kaisen"},
    {"word": "Ryomen Sukuna", "clue": "Jujutsu Kaisen"},
    {"word": "Mahito", "clue": "Jujutsu Kaisen"},
    {"word": "Jogo", "clue": "Jujutsu Kaisen"},
    {"word": "Hanami", "clue": "Jujutsu Kaisen"},
    {"word": "Dagon", "clue": "Jujutsu Kaisen"},
    {"word": "Choso", "clue": "Jujutsu Kaisen"},
    {"word": "Noritoshi Kamo (Ancestor)", "clue": "Jujutsu Kaisen"},
    {"word": "Aoi Todo", "clue": "Jujutsu Kaisen"},
    {"word": "Mei Mei", "clue": "Jujutsu Kaisen"},
    {"word": "Ui Ui", "clue": "Jujutsu Kaisen"},
    {"word": "Masamichi Yaga", "clue": "Jujutsu Kaisen"},
    {"word": "Shoko Ieiri", "clue": "Jujutsu Kaisen"},
    {"word": "Kento Nanami", "clue": "Jujutsu Kaisen"},
    {"word": "Naobito Zenin", "clue": "Jujutsu Kaisen"},
    {"word": "Naoya Zenin", "clue": "Jujutsu Kaisen"},
    {"word": "Mai Zenin", "clue": "Jujutsu Kaisen"},
    {"word": "Kokichi Muta (Mechamaru)", "clue": "Jujutsu Kaisen"},
    {"word": "Yoshinobu Gakuganji", "clue": "Jujutsu Kaisen"},
    {"word": "Utahime Iori", "clue": "Jujutsu Kaisen"},
    {"word": "Takuma Ino", "clue": "Jujutsu Kaisen"},
    {"word": "Shigeru", "clue": "Jujutsu Kaisen"},
    {"word": "Junpei Yoshino", "clue": "Jujutsu Kaisen"},
    {"word": "Yuki Tsukumo", "clue": "Jujutsu Kaisen"},
    {"word": "Hajime Kashimo", "clue": "Jujutsu Kaisen"},
    {"word": "Kinji Hakari", "clue": "Jujutsu Kaisen"},
    {"word": "Charles Bernard", "clue": "Jujutsu Kaisen"},
    {"word": "Yorozu", "clue": "Jujutsu Kaisen"},
    {"word": "Uraume", "clue": "Jujutsu Kaisen"},
    {"word": "Kenjaku", "clue": "Jujutsu Kaisen"},
    {"word": "Toji Fushiguro", "clue": "Jujutsu Kaisen"},
    {"word": "Rika Orimoto", "clue": "Jujutsu Kaisen"},
    {"word": "Tengen", "clue": "Jujutsu Kaisen"},
    {"word": "Larue", "clue": "Jujutsu Kaisen"},
    {"word": "Miwa Kasumi", "clue": "Jujutsu Kaisen"},
    {"word": "Gojo's Sensei (Unnamed)", "clue": "Jujutsu Kaisen"},
    {"word": "Haruta Shigemo", "clue": "Jujutsu Kaisen"},
    {"word": "Juzo Kumiya", "clue": "Jujutsu Kaisen"},
    {"word": "Geto's Curse Spirit (Unnamed)", "clue": "Jujutsu Kaisen"},
    {"word": "Riko Amanai", "clue": "Jujutsu Kaisen"},
    {"word": "Misato Kuroi", "clue": "Jujutsu Kaisen"},
    {"word": "Ogami", "clue": "Jujutsu Kaisen"}
  ],
  "Malayalam Movies": [
    {"word": "Manjummel Boys", "clue": "Soubin Shahir"},
    {"word": "2018", "clue": "Tovino Thomas"},
    {"word": "The Goat Life (Aadujeevitham)", "clue": "Prithviraj Sukumaran"},
    {"word": "Aavesham", "clue": "Fahadh Faasil"},
    {"word": "Pulimurugan", "clue": "Mohanlal"},
    {"word": "Premalu", "clue": "Naslen K. Gafoor"},
    {"word": "Lucifer", "clue": "Mohanlal"},
    {"word": "Drishyam", "clue": "Mohanlal"},
    {"word": "Kayamkulam Kochunni", "clue": "Nivin Pauly"},
    {"word": "Premam", "clue": "Nivin Pauly"},
    {"word": "Kumbalangi Nights", "clue": "Fahadh Faasil"},
    {"word": "Maheshinte Prathikaaram", "clue": "Fahadh Faasil"},
    {"word": "Thondimuthalum Driksakshiyum", "clue": "Fahadh Faasil"},
    {"word": "Joji", "clue": "Fahadh Faasil"},
    {"word": "Minnal Murali", "clue": "Tovino Thomas"},
    {"word": "Kadaisi Vivasayi (Malayalam Dub)", "clue": "Nallandi"},
    {"word": "Mayaanadhi", "clue": "Tovino Thomas"},
    {"word": "Angamaly Diaries", "clue": "Antony Varghese"},
    {"word": "Ezra", "clue": "Prithviraj Sukumaran"},
    {"word": "Take Off", "clue": "Parvathy Thiruvothu"},
    {"word": "Ustad Hotel", "clue": "Dulquer Salmaan"},
    {"word": "Bangalore Days", "clue": "Dulquer Salmaan"},
    {"word": "Charlie", "clue": "Dulquer Salmaan"},
    {"word": "Kurup", "clue": "Dulquer Salmaan"},
    {"word": "CBI 5: The Brain", "clue": "Mammootty"},
    {"word": "Bheeshma Parvam", "clue": "Mammootty"},
    {"word": "Nanpakal Nerathu Mayakkam", "clue": "Mammootty"},
    {"word": "Puzhu", "clue": "Mammootty"},
    {"word": "Kannur Squad", "clue": "Mammootty"},
    {"word": "Odiyan", "clue": "Mohanlal"},
    {"word": "Narasimham", "clue": "Mohanlal"},
    {"word": "Devasuram", "clue": "Mohanlal"},
    {"word": "Spadikam", "clue": "Mohanlal"},
    {"word": "Kilukkam", "clue": "Mohanlal"},
    {"word": "Manichitrathazhu", "clue": "Mohanlal"},
    {"word": "Drishyam 2", "clue": "Mohanlal"},
    {"word": "Kappela", "clue": "Anna Ben"},
    {"word": "Helen", "clue": "Anna Ben"},
    {"word": "Sudani From Nigeria", "clue": "Soubin Shahir"},
    {"word": "Android Kunjappan Version 5.25", "clue": "Soubin Shahir"},
    {"word": "Romancham", "clue": "Soubin Shahir"},
    {"word": "Anjaam Pathiraa", "clue": "Kunchacko Boban"},
    {"word": "Naayaattu", "clue": "Kunchacko Boban"},
    {"word": "Pada", "clue": "Kunchacko Boban"},
    {"word": "Malik", "clue": "Fahadh Faasil"},
    {"word": "C U Soon", "clue": "Fahadh Faasil"},
    {"word": "Jana Gana Mana", "clue": "Prithviraj Sukumaran"},
    {"word": "Kaduva", "clue": "Prithviraj Sukumaran"},
    {"word": "Ayyappanum Koshiyum", "clue": "Biju Menon"},
    {"word": "Driving Licence", "clue": "Prithviraj Sukumaran"},
    {"word": "Vellam", "clue": "Jayasurya"},
    {"word": "Sunny", "clue": "Jayasurya"},
    {"word": "Mukundan Unni Associates", "clue": "Vineeth Sreenivasan"},
    {"word": "Hridayam", "clue": "Pranav Mohanlal"},
    {"word": "Action Hero Biju", "clue": "Nivin Pauly"},
    {"word": "Jacobinte Swargarajyam", "clue": "Nivin Pauly"},
    {"word": "Moothon", "clue": "Nivin Pauly"},
    {"word": "Mayaanadhi", "clue": "Aishwarya Lekshmi"},
    {"word": "Bhramaram", "clue": "Mohanlal"},
    {"word": "Classmates", "clue": "Prithviraj Sukumaran"},
    {"word": "Godfather", "clue": "N. F. Varghese"},
    {"word": "In Harihar Nagar", "clue": "Mukesh"},
    {"word": "Ramji Rao Speaking", "clue": "Saikumar"},
    {"word": "Chithram", "clue": "Mohanlal"},
    {"word": "Manasinakkare", "clue": "Jayaram"},
    {"word": "Meesa Madhavan", "clue": "Dileep"},
    {"word": "CID Moosa", "clue": "Dileep"},
    {"word": "Thenmavin Kombath", "clue": "Mohanlal"},
    {"word": "Perumazhakkalam", "clue": "Dileep"},
    {"word": "Kazhcha", "clue": "Mammootty"},
    {"word": "Vadakkunokkiyantram", "clue": "Sreenivasan"},
    {"word": "Pattana Pravesham", "clue": "Sreenivasan"},
    {"word": "Sandesham", "clue": "Jayaram"},
    {"word": "Oru Vadakkan Veeragatha", "clue": "Mammootty"},
    {"word": "Vazhakku (The Quarrel)", "clue": "Tovino Thomas"},
    {"word": "Thallumaala", "clue": "Tovino Thomas"},
    {"word": "Super Sharanya", "clue": "Anaswara Rajan"},
    {"word": "Kanakam Kaamini Kalaham", "clue": "Nivin Pauly"},
    {"word": "Home", "clue": "Indrans"},
    {"word": "Vasanthi", "clue": "Swasika Vijay"},
    {"word": "Kappal", "clue": "Dileesh Pothan"},
    {"word": "Kettyolaanu Ente Malakha", "clue": "Asif Ali"},
    {"word": "Virus", "clue": "Kunchacko Boban"},
    {"word": "Ambili", "clue": "Soubin Shahir"},
    {"word": "Thanneer Mathan Dinangal", "clue": "Mathew Thomas"},
    {"word": "Kumbalangi Nights", "clue": "Shane Nigam"},
    {"word": "Joseph", "clue": "Joju George"},
    {"word": "Operation Java", "clue": "Lukman Avaran"},
    {"word": "Kho Kho", "clue": "Rajisha Vijayan"},
    {"word": "Nayattu", "clue": "Joju George"},
    {"word": "Vasanthi", "clue": "Siju Wilson"},
    {"word": "Jallikattu", "clue": "Antony Varghese"},
    {"word": "Ee.Ma.Yau", "clue": "Chemban Vinod Jose"},
    {"word": "Vikruthi", "clue": "Suraj Venjaramoodu"},
    {"word": "Android Kunjappan Version 5.25", "clue": "Suraj Venjaramoodu"},
    {"word": "The Great Indian Kitchen", "clue": "Nimisha Sajayan"},
    {"word": "Kaanekkaane", "clue": "Tovino Thomas"},
    {"word": "Pada", "clue": "Vinayakan"},
    {"word": "Bhoothakaalam", "clue": "Shane Nigam"},
    {"word": "Saudi Vellakka", "clue": "Devi Varma"},
    {"word": "Madanolsavam", "clue": "Suraj Venjaramoodu"},
    {"word": "Padmini", "clue": "Kunchacko Boban"},
    {"word": "RDX: Robert Dony Xavier", "clue": "Shane Nigam"},
    {"word": "Neru", "clue": "Mohanlal"},
    {"word": "Kishkindha Kaandam", "clue": "Asif Ali"},
    {"word": "Guruvayoor Ambalanadayil", "clue": "Basil Joseph"},
    {"word": "Turbo", "clue": "Mammootty"},
    {"word": "L2: Empuraan", "clue": "Mohanlal"},
    {"word": "Marco", "clue": "Dhyan Sreenivasan"}
  ],
  "Superhero Characters": [
    {"word": "Iron Man", "clue": "Marvel"},
    {"word": "Captain America", "clue": "Marvel"},
    {"word": "Thor", "clue": "Marvel"},
    {"word": "Hulk", "clue": "Marvel"},
    {"word": "Black Widow", "clue": "Marvel"},
    {"word": "Hawkeye", "clue": "Marvel"},
    {"word": "Spider-Man", "clue": "Marvel"},
    {"word": "Doctor Strange", "clue": "Marvel"},
    {"word": "Wolverine", "clue": "Marvel"},
    {"word": "Deadpool", "clue": "Marvel"},
    {"word": "Captain Marvel", "clue": "Marvel"},
    {"word": "Black Panther", "clue": "Marvel"},
    {"word": "Scarlet Witch", "clue": "Marvel"},
    {"word": "Vision", "clue": "Marvel"},
    {"word": "Falcon", "clue": "Marvel"},
    {"word": "Winter Soldier", "clue": "Marvel"},
    {"word": "Ant-Man", "clue": "Marvel"},
    {"word": "Wasp", "clue": "Marvel"},
    {"word": "Loki", "clue": "Marvel"},
    {"word": "Gamora", "clue": "Marvel"},
    {"word": "Star-Lord", "clue": "Marvel"},
    {"word": "Groot", "clue": "Marvel"},
    {"word": "Rocket Raccoon", "clue": "Marvel"},
    {"word": "Drax the Destroyer", "clue": "Marvel"},
    {"word": "Nebula", "clue": "Marvel"},
    {"word": "Mantis", "clue": "Marvel"},
    {"word": "Cyclops", "clue": "Marvel"},
    {"word": "Jean Grey", "clue": "Marvel"},
    {"word": "Storm", "clue": "Marvel"},
    {"word": "Professor X", "clue": "Marvel"},
    {"word": "Magneto", "clue": "Marvel"},
    {"word": "Rogue", "clue": "Marvel"},
    {"word": "Gambit", "clue": "Marvel"},
    {"word": "Nightcrawler", "clue": "Marvel"},
    {"word": "Beast", "clue": "Marvel"},
    {"word": "Kitty Pryde", "clue": "Marvel"},
    {"word": "Iceman", "clue": "Marvel"},
    {"word": "Colossus", "clue": "Marvel"},
    {"word": "Psylocke", "clue": "Marvel"},
    {"word": "Daredevil", "clue": "Marvel"},
    {"word": "Punisher", "clue": "Marvel"},
    {"word": "Jessica Jones", "clue": "Marvel"},
    {"word": "Luke Cage", "clue": "Marvel"},
    {"word": "Iron Fist", "clue": "Marvel"},
    {"word": "Ghost Rider", "clue": "Marvel"},
    {"word": "Silver Surfer", "clue": "Marvel"},
    {"word": "Namor", "clue": "Marvel"},
    {"word": "Fantastic Four (Mr. Fantastic)", "clue": "Marvel"},
    {"word": "Invisible Woman", "clue": "Marvel"},
    {"word": "Human Torch", "clue": "Marvel"},
    {"word": "The Thing", "clue": "Marvel"},
    {"word": "Batman", "clue": "DC"},
    {"word": "Superman", "clue": "DC"},
    {"word": "Wonder Woman", "clue": "DC"},
    {"word": "Flash (Barry Allen)", "clue": "DC"},
    {"word": "Aquaman", "clue": "DC"},
    {"word": "Cyborg", "clue": "DC"},
    {"word": "Green Lantern (Hal Jordan)", "clue": "DC"},
    {"word": "Nightwing", "clue": "DC"},
    {"word": "Robin (Dick Grayson)", "clue": "DC"},
    {"word": "Batgirl (Barbara Gordon)", "clue": "DC"},
    {"word": "Supergirl", "clue": "DC"},
    {"word": "Martian Manhunter", "clue": "DC"},
    {"word": "Green Arrow", "clue": "DC"},
    {"word": "Black Canary", "clue": "DC"},
    {"word": "Shazam", "clue": "DC"},
    {"word": "Hawkman", "clue": "DC"},
    {"word": "Hawkgirl", "clue": "DC"},
    {"word": "Zatanna", "clue": "DC"},
    {"word": "Doctor Fate", "clue": "DC"},
    {"word": "Static Shock", "clue": "DC"},
    {"word": "Firestorm", "clue": "DC"},
    {"word": "Blue Beetle (Jaime Reyes)", "clue": "DC"},
    {"word": "Booster Gold", "clue": "DC"},
    {"word": "Plastic Man", "clue": "DC"},
    {"word": "Swamp Thing", "clue": "DC"},
    {"word": "Constantine", "clue": "DC"},
    {"word": "Red Hood (Jason Todd)", "clue": "DC"},
    {"word": "Damian Wayne (Robin)", "clue": "DC"},
    {"word": "Kid Flash (Wally West)", "clue": "DC"},
    {"word": "Raven", "clue": "DC"},
    {"word": "Starfire", "clue": "DC"},
    {"word": "Beast Boy", "clue": "DC"},
    {"word": "Cyborg (Teen Titans)", "clue": "DC"},
    {"word": "Terra", "clue": "DC"},
    {"word": "Deathstroke (Anti-hero)", "clue": "DC"},
    {"word": "The Atom", "clue": "DC"},
    {"word": "Black Lightning", "clue": "DC"},
    {"word": "Vixen", "clue": "DC"},
    {"word": "Katana", "clue": "DC"},
    {"word": "Ragman", "clue": "DC"},
    {"word": "The Question", "clue": "DC"},
    {"word": "Power Girl", "clue": "DC"},
    {"word": "Superboy (Conner Kent)", "clue": "DC"},
    {"word": "Miss Martian", "clue": "DC"},
    {"word": "Arsenal (Roy Harper)", "clue": "DC"},
    {"word": "Huntress", "clue": "DC"},
    {"word": "Cassandra Cain (Batgirl)", "clue": "DC"},
    {"word": "Stephanie Brown (Spoiler)", "clue": "DC"},
    {"word": "Doctor Light", "clue": "DC"},
    {"word": "Metamorpho", "clue": "DC"},
    {"word": "Omni-Man", "clue": "Invincible"},
    {"word": "Invincible (Mark Grayson)", "clue": "Invincible"},
    {"word": "Atom Eve", "clue": "Invincible"},
    {"word": "Robot", "clue": "Invincible"},
    {"word": "Rex Splode", "clue": "Invincible"},
    {"word": "Dupli-Kate", "clue": "Invincible"},
    {"word": "Monster Girl", "clue": "Invincible"},
    {"word": "Black Samson", "clue": "Invincible"},
    {"word": "The Immortal", "clue": "Invincible"},
    {"word": "War Woman", "clue": "Invincible"},
    {"word": "Green Ghost", "clue": "Invincible"},
    {"word": "Red Rush", "clue": "Invincible"},
    {"word": "Martian Man", "clue": "Invincible"},
    {"word": "Queen Maeve", "clue": "The Boys"},
    {"word": "Homelander", "clue": "The Boys"},
    {"word": "Billy Butcher", "clue": "The Boys"},
    {"word": "Hughie Campbell", "clue": "The Boys"},
    {"word": "Starlight", "clue": "The Boys"},
    {"word": "A-Train", "clue": "The Boys"},
    {"word": "The Deep", "clue": "The Boys"},
    {"word": "Kimiko Miyashiro (The Female)", "clue": "The Boys"},
    {"word": "Mother's Milk", "clue": "The Boys"},
    {"word": "Frenchie", "clue": "The Boys"},
    {"word": "Soldier Boy", "clue": "The Boys"},
    {"word": "Neptune", "clue": "The Boys"},
    {"word": "Spawm", "clue": "Spawn"},
    {"word": "Hellboy", "clue": "Hellboy"},
    {"word": "The Mask", "clue": "The Mask"},
    {"word": "Genos", "clue": "One-Punch Man"},
    {"word": "Saitama", "clue": "One-Punch Man"},
    {"word": "Fubuki", "clue": "One-Punch Man"},
    {"word": "Silver Fang (Bang)", "clue": "One-Punch Man"},
    {"word": "Tatsumaki (Terrible Tornado)", "clue": "One-Punch Man"},
    {"word": "All Might", "clue": "My Hero Academia"},
    {"word": "Izuku Midoriya (Deku)", "clue": "My Hero Academia"},
    {"word": "Katsuki Bakugo", "clue": "My Hero Academia"},
    {"word": "Shoto Todoroki", "clue": "My Hero Academia"},
    {"word": "Ochaco Uraraka", "clue": "My Hero Academia"},
    {"word": "Tenya Iida", "clue": "My Hero Academia"},
    {"word": "Eraser Head (Shota Aizawa)", "clue": "My Hero Academia"},
    {"word": "Endeavor", "clue": "My Hero Academia"},
    {"word": "Hawks", "clue": "My Hero Academia"},
    {"word": "Mirko", "clue": "My Hero Academia"},
    {"word": "Nighteye", "clue": "My Hero Academia"},
    {"word": "Superman (All-Star Superman)", "clue": "All-Star Superman"},
    {"word": "Spider-Gwen", "clue": "Spider-Man: Into the Spider-Verse"},
    {"word": "Miles Morales", "clue": "Spider-Man: Into the Spider-Verse"},
    {"word": "Spider-Man Noir", "clue": "Spider-Man: Into the Spider-Verse"},
    {"word": "Spider-Ham", "clue": "Spider-Man: Into the Spider-Verse"},
    {"word": "Peni Parker", "clue": "Spider-Man: Into the Spider-Verse"},
    {"word": "Big Hero 6 (Baymax)", "clue": "Big Hero 6"},
    {"word": "Hiro Hamada", "clue": "Big Hero 6"},
    {"word": "Captain Underpants", "clue": "Captain Underpants"},
    {"word": "Mr. Incredible", "clue": "The Incredibles"},
    {"word": "Elastigirl", "clue": "The Incredibles"},
    {"word": "Dash Parr", "clue": "The Incredibles"},
    {"word": "Violet Parr", "clue": "The Incredibles"},
    {"word": "Frozone", "clue": "The Incredibles"}
  ],
  "Superhero Movies": [
    {"word": "Iron Man", "clue": "War Machine"},
    {"word": "Iron Man 2", "clue": "Black Widow"},
    {"word": "Thor", "clue": "Lady Sif"},
    {"word": "Captain America: The First Avenger", "clue": "Bucky Barnes (Winter Soldier)"},
    {"word": "The Avengers", "clue": "Hawkeye"},
    {"word": "Captain America: The Winter Soldier", "clue": "Falcon"},
    {"word": "Guardians of the Galaxy", "clue": "Gamora"},
    {"word": "Avengers: Age of Ultron", "clue": "Scarlet Witch"},
    {"word": "Ant-Man", "clue": "Wasp"},
    {"word": "Captain America: Civil War", "clue": "Spider-Man"},
    {"word": "Doctor Strange", "clue": "Wong"},
    {"word": "Guardians of the Galaxy Vol. 2", "clue": "Mantis"},
    {"word": "Spider-Man: Homecoming", "clue": "Iron Man"},
    {"word": "Thor: Ragnarok", "clue": "Valkyrie"},
    {"word": "Black Panther", "clue": "Okoye"},
    {"word": "Avengers: Infinity War", "clue": "Nebula"},
    {"word": "Ant-Man and the Wasp", "clue": "Ghost (Ava Starr)"},
    {"word": "Captain Marvel", "clue": "Photon (Monica Rambeau)"},
    {"word": "Avengers: Endgame", "clue": "Rescue (Pepper Potts)"},
    {"word": "Spider-Man: Far From Home", "clue": "Nick Fury (as a heroic figure)"},
    {"word": "Black Widow", "clue": "Yelena Belova"},
    {"word": "Shang-Chi and the Legend of the Ten Rings", "clue": "Katy Chen (supporting, but develops heroic traits)"},
    {"word": "Eternals", "clue": "Thena"},
    {"word": "Spider-Man: No Way Home", "clue": "Doctor Strange"},
    {"word": "Doctor Strange in the Multiverse of Madness", "clue": "America Chavez"},
    {"word": "Thor: Love and Thunder", "clue": "Korg"},
    {"word": "Black Panther: Wakanda Forever", "clue": "Shuri"},
    {"word": "Ant-Man and the Wasp: Quantumania", "clue": "Cassie Lang (Stature)"},
    {"word": "Guardians of the Galaxy Vol. 3", "clue": "Adam Warlock"},
    {"word": "The Marvels", "clue": "Ms. Marvel"},
    {"word": "Man of Steel", "clue": "Lois Lane (as a brave ally)"},
    {"word": "Batman v Superman: Dawn of Justice", "clue": "Wonder Woman"},
    {"word": "Suicide Squad (2016)", "clue": "Katana"},
    {"word": "Wonder Woman", "clue": "Steve Trevor (Heroic ally)"},
    {"word": "Justice League", "clue": "Aquaman"},
    {"word": "Aquaman", "clue": "Mera"},
    {"word": "Shazam!", "clue": "Mary Bromfield (Mary Marvel)"},
    {"word": "Birds of Prey", "clue": "Huntress"},
    {"word": "Wonder Woman 1984", "clue": "Cheetah (as a corrupted hero, initially)"},
    {"word": "Zack Snyder's Justice League", "clue": "Cyborg"},
    {"word": "The Suicide Squad (2021)", "clue": "Bloodsport"},
    {"word": "Black Adam", "clue": "Doctor Fate"},
    {"word": "Shazam! Fury of the Gods", "clue": "Freddy Freeman (Captain Marvel Jr.)"},
    {"word": "The Flash", "clue": "Supergirl"},
    {"word": "Blue Beetle", "clue": "Jaime Reyes's Sister (as a supportive sidekick)"},
    {"word": "Logan", "clue": "Laura Kinney (X-23)"},
    {"word": "Deadpool", "clue": "Negasonic Teenage Warhead"},
    {"word": "Deadpool 2", "clue": "Domino"},
    {"word": "X-Men: First Class", "clue": "Mystique (as a hero initially)"},
    {"word": "X-Men: Days of Future Past", "clue": "Quicksilver"}
  ],
  "Popular Indian Dishes": [
    {"word": "Butter Chicken", "clue": "North India"},
    {"word": "Naan", "clue": "North India"},
    {"word": "Biryani (Hyderabadi style)", "clue": "South India"},
    {"word": "Dosa", "clue": "South India"},
    {"word": "Idli", "clue": "South India"},
    {"word": "Vada", "clue": "South India"},
    {"word": "Sambar", "clue": "South India"},
    {"word": "Rasam", "clue": "South India"},
    {"word": "Pulao", "clue": "North India"},
    {"word": "Rogan Josh", "clue": "North India"},
    {"word": "Chole Bhature", "clue": "North India"},
    {"word": "Palak Paneer", "clue": "North India"},
    {"word": "Dal Makhani", "clue": "North India"},
    {"word": "Tandoori Chicken", "clue": "North India"},
    {"word": "Gulab Jamun", "clue": "North India"},
    {"word": "Jalebi", "clue": "North India"},
    {"word": "Rajma Chawal", "clue": "North India"},
    {"word": "Aloo Gobi", "clue": "North India"},
    {"word": "Saag Paneer", "clue": "North India"},
    {"word": "Kofta", "clue": "North India"},
    {"word": "Mutter Paneer", "clue": "North India"},
    {"word": "Kulfi", "clue": "North India"},
    {"word": "Chicken Tikka Masala", "clue": "North India"},
    {"word": "Pani Puri", "clue": "North India"},
    {"word": "Vada Pav", "clue": "South India"},
    {"word": "Pav Bhaji", "clue": "North India"},
    {"word": "Dhokla", "clue": "North India"},
    {"word": "Khandvi", "clue": "North India"},
    {"word": "Appam", "clue": "South India"},
    {"word": "Puttu and Kadala Curry", "clue": "South India"},
    {"word": "Malabar Parotta", "clue": "South India"},
    {"word": "Kerala Fish Curry", "clue": "South India"},
    {"word": "Avial", "clue": "South India"},
    {"word": "Sadya", "clue": "South India"},
    {"word": "Hyderabadi Biryani", "clue": "South India"},
    {"word": "Masala Dosa", "clue": "South India"},
    {"word": "Pongal", "clue": "South India"},
    {"word": "Medu Vada", "clue": "South India"},
    {"word": "Upma", "clue": "South India"},
    {"word": "Curd Rice", "clue": "South India"},
    {"word": "Andhra Chilli Chicken", "clue": "South India"},
    {"word": "Pesarattu", "clue": "South India"},
    {"word": "Bisibelebath", "clue": "South India"},
    {"word": "Mysore Pak", "clue": "South India"},
    {"word": "Payasam", "clue": "South India"},
    {"word": "Gobi Manchurian (Indian-Chinese)", "clue": "North India"},
    {"word": "Chicken Chettinad", "clue": "South India"},
    {"word": "Kadai Paneer", "clue": "North India"},
    {"word": "Bharwa Bhindi", "clue": "North India"},
    {"word": "Litti Chokha", "clue": "North India"}
  ],
  "Brands and Logos": [
    {"word": "Nike", "clue": "Sportswear"},
    {"word": "Adidas", "clue": "Sportswear"},
    {"word": "Apple", "clue": "Technology"},
    {"word": "Samsung", "clue": "Electronics"},
    {"word": "Coca-Cola", "clue": "Beverages"},
    {"word": "Pepsi", "clue": "Beverages"},
    {"word": "McDonald's", "clue": "Fast Food"},
    {"word": "Starbucks", "clue": "Coffee Chain"},
    {"word": "Google", "clue": "Internet Services"},
    {"word": "Microsoft", "clue": "Software"},
    {"word": "Amazon", "clue": "E-commerce"},
    {"word": "Tesla", "clue": "Automotive"},
    {"word": "Toyota", "clue": "Automotive"},
    {"word": "Mercedes-Benz", "clue": "Automotive"},
    {"word": "BMW", "clue": "Automotive"},
    {"word": "Ford", "clue": "Automotive"},
    {"word": "Ferrari", "clue": "Sports Cars"},
    {"word": "Rolex", "clue": "Watches"},
    {"word": "Louis Vuitton", "clue": "Luxury Fashion"},
    {"word": "Gucci", "clue": "Luxury Fashion"},
    {"word": "Chanel", "clue": "Luxury Fashion"},
    {"word": "Zara", "clue": "Fashion Retail"},
    {"word": "H&M", "clue": "Fashion Retail"},
    {"word": "IKEA", "clue": "Furniture & Home Goods"},
    {"word": "Walmart", "clue": "Retail"},
    {"word": "Target", "clue": "Retail"},
    {"word": "Netflix", "clue": "Streaming Service"},
    {"word": "Disney", "clue": "Entertainment"},
    {"word": "Sony", "clue": "Electronics"},
    {"word": "Philips", "clue": "Electronics"},
    {"word": "LG", "clue": "Electronics"},
    {"word": "Nestle", "clue": "Food & Beverages"},
    {"word": "Unilever", "clue": "Consumer Goods"},
    {"word": "Procter & Gamble", "clue": "Consumer Goods"},
    {"word": "Colgate", "clue": "Oral Care"},
    {"word": "Gillette", "clue": "Personal Care"},
    {"word": "L'Oréal", "clue": "Cosmetics"},
    {"word": "Johnson & Johnson", "clue": "Healthcare"},
    {"word": "Pfizer", "clue": "Pharmaceuticals"},
    {"word": "Boeing", "clue": "Aerospace"},
    {"word": "Airbus", "clue": "Aerospace"},
    {"word": "Visa", "clue": "Payment Services"},
    {"word": "Mastercard", "clue": "Payment Services"},
    {"word": "PayPal", "clue": "Online Payments"},
    {"word": "Intel", "clue": "Semiconductors"},
    {"word": "NVIDIA", "clue": "Graphics Processors"},
    {"word": "IBM", "clue": "Information Technology"},
    {"word": "Oracle", "clue": "Software"},
    {"word": "SAP", "clue": "Enterprise Software"},
    {"word": "Cisco", "clue": "Networking Hardware"},
    {"word": "HP (Hewlett-Packard)", "clue": "Computers"},
    {"word": "Dell", "clue": "Computers"},
    {"word": "Canon", "clue": "Cameras & Printers"},
    {"word": "Nikon", "clue": "Cameras"},
    {"word": "Bose", "clue": "Audio Equipment"},
    {"word": "Panasonic", "clue": "Electronics"},
    {"word": "Honda", "clue": "Automotive & Motorcycles"},
    {"word": "Nissan", "clue": "Automotive"},
    {"word": "Volkswagen", "clue": "Automotive"},
    {"word": "Audi", "clue": "Automotive"},
    {"word": "Porsche", "clue": "Sports Cars"},
    {"word": "Lamborghini", "clue": "Sports Cars"},
    {"word": "Harley-Davidson", "clue": "Motorcycles"},
    {"word": "Red Bull", "clue": "Energy Drinks"},
    {"word": "Monster Energy", "clue": "Energy Drinks"},
    {"word": "Lay's", "clue": "Snack Foods"},
    {"word": "Doritos", "clue": "Snack Foods"},
    {"word": "Hershey's", "clue": "Confectionery"},
    {"word": "Cadbury", "clue": "Confectionery"},
    {"word": "Coca-Cola Zero", "clue": "Beverages"},
    {"word": "Diet Coke", "clue": "Beverages"},
    {"word": "Sprite", "clue": "Beverages"},
    {"word": "Fanta", "clue": "Beverages"},
    {"word": "KFC", "clue": "Fast Food"},
    {"word": "Burger King", "clue": "Fast Food"},
    {"word": "Pizza Hut", "clue": "Fast Food"},
    {"word": "Domino's", "clue": "Fast Food"},
    {"word": "Subway", "clue": "Fast Food"},
    {"word": "Zara Home", "clue": "Home Goods"},
    {"word": "Sephora", "clue": "Beauty Retail"},
    {"word": "Hulu", "clue": "Streaming Service"},
    {"word": "HBO", "clue": "Television Network"},
    {"word": "ESPN", "clue": "Sports Media"},
    {"word": "CNN", "clue": "News Media"},
    {"word": "BBC", "clue": "Broadcasting"},
    {"word": "Lego", "clue": "Toys"},
    {"word": "Mattel", "clue": "Toys"},
    {"word": "Hasbro", "clue": "Toys"},
    {"word": "Band-Aid", "clue": "First Aid"},
    {"word": "Kleenex", "clue": "Tissues"},
    {"word": "Tide", "clue": "Laundry Detergent"},
    {"word": "Pampers", "clue": "Diapers"},
    {"word": "Oral-B", "clue": "Oral Care"},
    {"word": "Heinz", "clue": "Condiments"},
    {"word": "Kellogg's", "clue": "Cereals"},
    {"word": "General Mills", "clue": "Food Products"},
    {"word": "Hewlett Packard Enterprise", "clue": "IT Services"},
    {"word": "Siemens", "clue": "Engineering"},
    {"word": "Bosch", "clue": "Engineering & Electronics"},
    {"word": "GE (General Electric)", "clue": "Industrial Conglomerate"}
  ],
  "Academic Subjects": [
    {"word": "Mathematics", "clue": "Study of Quantity, Structure, Space, and Change"},
    {"word": "Physics", "clue": "Study of Matter and Energy"},
    {"word": "Chemistry", "clue": "Study of Matter and its Properties"},
    {"word": "Biology", "clue": "Study of Living Organisms"},
    {"word": "History", "clue": "Study of Past Events"},
    {"word": "Literature", "clue": "Study of Written Works"},
    {"word": "Philosophy", "clue": "Study of Fundamental Questions about Existence"},
    {"word": "Psychology", "clue": "Study of Mind and Behavior"},
    {"word": "Sociology", "clue": "Study of Human Society"},
    {"word": "Economics", "clue": "Study of Production, Distribution, and Consumption of Wealth"},
    {"word": "Political Science", "clue": "Study of Government and Politics"},
    {"word": "Geography", "clue": "Study of Earth's Features and Phenomena"},
    {"word": "Astronomy", "clue": "Study of Celestial Objects and Universe"},
    {"word": "Geology", "clue": "Study of Earth's Physical Structure and Substance"},
    {"word": "Anthropology", "clue": "Study of Humanity"},
    {"word": "Linguistics", "clue": "Study of Language"},
    {"word": "Computer Science", "clue": "Study of Computation and Information"},
    {"word": "Engineering", "clue": "Application of Scientific Principles to Design"},
    {"word": "Medicine", "clue": "Science of Healing"},
    {"word": "Law", "clue": "System of Rules for Society"},
    {"word": "Archaeology", "clue": "Study of Human History via Excavation"},
    {"word": "Art History", "clue": "Study of Visual Arts"},
    {"word": "Musicology", "clue": "Study of Music"},
    {"word": "Environmental Science", "clue": "Study of Natural Environment and Human Impact"},
    {"word": "Biotechnology", "clue": "Use of Biological Systems for Products"},
    {"word": "Nanotechnology", "clue": "Manipulation of Matter on Atomic Scale"},
    {"word": "Robotics", "clue": "Design and Operation of Robots"},
    {"word": "Criminology", "clue": "Study of Crime and Criminal Behavior"},
    {"word": "Journalism", "clue": "Collection and Presentation of News"},
    {"word": "Education", "clue": "Theory and Practice of Learning"},
    {"word": "Architecture", "clue": "Art and Science of Building Design"},
    {"word": "Urban Planning", "clue": "Design of Cities and Public Spaces"},
    {"word": "Veterinary Science", "clue": "Healthcare of Animals"},
    {"word": "Dentistry", "clue": "Healthcare of Teeth and Gums"},
    {"word": "Nursing", "clue": "Healthcare of Individuals and Communities"},
    {"word": "Pharmacy", "clue": "Preparation and Dispensing of Medicines"},
    {"word": "Statistics", "clue": "Collection and Analysis of Numerical Data"},
    {"word": "Genetics", "clue": "Study of Heredity and Genes"},
    {"word": "Meteorology", "clue": "Study of Weather and Atmosphere"},
    {"word": "Oceanography", "clue": "Study of Oceans"},
    {"word": "Political Economy", "clue": "Interplay of Politics and Economics"},
    {"word": "Public Administration", "clue": "Management of Government Policies"},
    {"word": "Communication Studies", "clue": "Study of Human Communication"},
    {"word": "Film Studies", "clue": "Academic Study of Cinema"},
    {"word": "Theology", "clue": "Study of Religious Belief and Practice"},
    {"word": "Ethics", "clue": "Study of Moral Principles"},
    {"word": "Logic", "clue": "Study of Reasoning"},
    {"word": "Semiotics", "clue": "Study of Signs and Symbols"},
    {"word": "Cartography", "clue": "Art and Science of Mapmaking"},
    {"word": "Demography", "clue": "Study of Human Populations"}
  ],
  "Famous Fictional Locations": [
    {"word": "Hogwarts", "clue": "Harry Potter"},
    {"word": "Middle-earth", "clue": "The Lord of the Rings"},
    {"word": "Gotham City", "clue": "DC Comics"},
    {"word": "Metropolis", "clue": "DC Comics"},
    {"word": "Asgard", "clue": "Marvel Comics"},
    {"word": "Wakanda", "clue": "Marvel Comics"},
    {"word": "Narnia", "clue": "The Chronicles of Narnia"},
    {"word": "Neverland", "clue": "Peter Pan"},
    {"word": "Wonderland", "clue": "Alice's Adventures in Wonderland"},
    {"word": "Oz", "clue": "The Wonderful Wizard of Oz"},
    {"word": "Westeros", "clue": "Game of Thrones"},
    {"word": "Starfleet Academy", "clue": "Star Trek"},
    {"word": "Tatooine", "clue": "Star Wars"},
    {"word": "Mordor", "clue": "The Lord of the Rings"},
    {"word": "Rivendell", "clue": "The Lord of the Rings"},
    {"word": "The Shire", "clue": "The Lord of the Rings"},
    {"word": "Camelot", "clue": "Arthurian Legend"},
    {"word": "Atlantis", "clue": "Mythology/Various Fiction"},
    {"word": "Xanadu", "clue": "Kubla Khan"},
    {"word": "Skull Island", "clue": "King Kong"},
    {"word": "Jurassic Park", "clue": "Jurassic Park"},
    {"word": "Arendelle", "clue": "Frozen"},
    {"word": "Springfield", "clue": "The Simpsons"},
    {"word": "Pawnee", "clue": "Parks and Recreation"},
    {"word": "Sunnydale", "clue": "Buffy the Vampire Slayer"},
    {"word": "Central Perk", "clue": "Friends"},
    {"word": "The Batcave", "clue": "DC Comics"},
    {"word": "Fortress of Solitude", "clue": "DC Comics"},
    {"word": "Daily Planet", "clue": "DC Comics"},
    {"word": "X-Mansion", "clue": "Marvel Comics"},
    {"word": "Sanctum Sanctorum", "clue": "Marvel Comics"},
    {"word": "Avengers Compound", "clue": "Marvel Comics"},
    {"word": "Mos Eisley Cantina", "clue": "Star Wars"},
    {"word": "Death Star", "clue": "Star Wars"},
    {"word": "Hoth", "clue": "Star Wars"},
    {"word": "Pandora", "clue": "Avatar"},
    {"word": "Olympus (God of War)", "clue": "God of War"},
    {"word": "Hyrule", "clue": "The Legend of Zelda"},
    {"word": "Mushroom Kingdom", "clue": "Super Mario Bros."},
    {"word": "Mount Doom", "clue": "The Lord of the Rings"},
    {"word": "District 12", "clue": "The Hunger Games"},
    {"word": "Panem", "clue": "The Hunger Games"},
    {"word": "Emerald City", "clue": "The Wonderful Wizard of Oz"},
    {"word": "Rivendell", "clue": "The Hobbit"},
    {"word": "Mordor", "clue": "The Hobbit"},
    {"word": "Gotham General Hospital", "clue": "DC Comics"},
    {"word": "Arkham Asylum", "clue": "DC Comics"},
    {"word": "Hall of Justice", "clue": "DC Comics"},
    {"word": "Themyscira", "clue": "DC Comics"},
    {"word": "Apokolips", "clue": "DC Comics"},
    {"word": "Skrullos", "clue": "Marvel Comics"},
    {"word": "Latveria", "clue": "Marvel Comics"},
    {"word": "Genosha", "clue": "Marvel Comics"},
    {"word": "Madripoor", "clue": "Marvel Comics"},
    {"word": "Pleasantville", "clue": "Pleasantville"},
    {"word": "Brigadoon", "clue": "Brigadoon"},
    {"word": "Shangri-La", "clue": "Lost Horizon"},
    {"word": "Naboo", "clue": "Star Wars"},
    {"word": "Coruscant", "clue": "Star Wars"},
    {"word": "Endor", "clue": "Star Wars"},
    {"word": "Gallifrey", "clue": "Doctor Who"},
    {"word": "Serenity Valley", "clue": "Firefly"},
    {"word": "Winterfell", "clue": "Game of Thrones"},
    {"word": "King's Landing", "clue": "Game of Thrones"},
    {"word": "The Wall", "clue": "Game of Thrones"},
    {"word": "Hogsmeade", "clue": "Harry Potter"},
    {"word": "Diagon Alley", "clue": "Harry Potter"},
    {"word": "Azkaban", "clue": "Harry Potter"},
    {"word": "Rivendell", "clue": "The Lord of the Rings"},
    {"word": "Erebor (Lonely Mountain)", "clue": "The Hobbit"},
    {"word": "Isengard", "clue": "The Lord of the Rings"},
    {"word": "Valinor", "clue": "The Lord of the Rings"},
    {"word": "Zion", "clue": "The Matrix"},
    {"word": "Skywalker Ranch", "clue": "George Lucas's Estate (Real but iconic)"},
    {"word": "Skull Island", "clue": "King Kong"},
    {"word": "Paradise Island", "clue": "DC Comics"},
    {"word": "Bedrock", "clue": "The Flintstones"},
    {"word": "Toon Town", "clue": "Who Framed Roger Rabbit"},
    {"word": "Quahog", "clue": "Family Guy"},
    {"word": "South Park", "clue": "South Park"},
    {"word": "Emerald City (Grimm)", "clue": "Grimm"},
    {"word": "Land of Ooo", "clue": "Adventure Time"},
    {"word": "Candy Kingdom", "clue": "Adventure Time"},
    {"word": "Dreamland", "clue": "Disenchantment"},
    {"word": "Westeros (Game of Thrones)", "clue": "Game of Thrones"},
    {"word": "The Upside Down", "clue": "Stranger Things"},
    {"word": "Emerald City (Oz)", "clue": "The Wizard of Oz"},
    {"word": "Nevermore Academy", "clue": "Wednesday"},
    {"word": "The Capitol", "clue": "The Hunger Games"},
    {"word": "Wakanda (Marvel)", "clue": "Black Panther"},
    {"word": "Terra Nova", "clue": "Terra Nova"},
    {"word": "Prythian", "clue": "A Court of Thorns and Roses"},
    {"word": "The Realm of the Fae", "clue": "Various Fantasy"},
    {"word": "The Dark Forest", "clue": "Three-Body Problem"},
    {"word": "Planet Arrakis", "clue": "Dune"},
    {"word": "Trantor", "clue": "Foundation"},
    {"word": "Discworld", "clue": "Discworld Series"},
    {"word": "Naboo (Star Wars)", "clue": "Star Wars"},
    {"word": "Krypton", "clue": "DC Comics"},
    {"word": "Smallville", "clue": "DC Comics"},
    {"word": "Coast City", "clue": "DC Comics"},
    {"word": "Central City", "clue": "DC Comics"},
    {"word": "Star City", "clue": "DC Comics"},
    {"word": "Themyscira (Wonder Woman)", "clue": "Wonder Woman"}
  ]
};

let players = [];
let spyIndex = -1;
let chosenCategory = "";
let chosenWordObject = null;
let currentPlayerIndex = 0;
let votes = {};

const setupSection = document.getElementById("setup");
const roleRevealSection = document.getElementById("roleReveal");
const votingSection = document.getElementById("voting");
const resultSection = document.getElementById("result");
const numPlayersInput = document.getElementById("numPlayers");
const categorySelect = document.getElementById("categorySelect");
const playerLabel = document.getElementById("playerLabel");
const roleImage = document.getElementById("roleImage");
const imageContainer = document.getElementById("imageContainer");
const roleText = document.getElementById("roleText");
const roleActionButton = document.getElementById("roleActionButton");
const voteButtonsContainer = document.getElementById("voteButtons");

// Populate category dropdown
for (const category in wordCategories) {
    const option = document.createElement("option");
    option.value = category;
    option.innerText = category;
    categorySelect.appendChild(option);
}

/**
 * Starts the game by initializing players, choosing spy, word, and category.
 */
function startGame() {
    const numPlayers = parseInt(numPlayersInput.value);
    chosenCategory = categorySelect.value;

    if (numPlayers < 3 || numPlayers > 6) {
        alert("Please select between 3 and 6 players.");
        return;
    }

    if (!chosenCategory) {
        alert("Please select a category.");
        return;
    }

    const words = wordCategories[chosenCategory];
    if (!words || words.length === 0) {
        alert("Selected category has no words. Please choose another.");
        return;
    }

    chosenWordObject = words[Math.floor(Math.random() * words.length)];

    players = Array.from({ length: numPlayers }, (_, i) => ({ id: i, isSpy: false }));
    spyIndex = Math.floor(Math.random() * numPlayers);
    players[spyIndex].isSpy = true;

    setupSection.classList.add("hidden");
    roleRevealSection.classList.remove("hidden");
    displayRole();
}

/**
 * Displays the role (spy or civilian) and word to the current player.
 */
function displayRole() {
    if (currentPlayerIndex < players.length) {
        playerLabel.innerText = `Player ${currentPlayerIndex + 1}`;
        imageContainer.classList.add("hidden"); // Hide image by default

        if (players[currentPlayerIndex].isSpy) {
            roleText.innerText = "You are the SPY!";
            roleImage.src = ""; // Clear image if spy
            imageContainer.classList.add("hidden");
        } else {
            roleText.innerText = `You are a CIVILIAN. The word is: "${chosenWordObject.word}". The clue is: "${chosenWordObject.clue}"`;
            roleImage.src = ""; // Clear image if civilian
            imageContainer.classList.add("hidden");
        }

        roleActionButton.innerText = "Reveal Role";
        roleActionButton.onclick = showRoleDetails;
    } else {
        startVotingPhase();
    }
}

/**
 * Shows the role details (image and full text) for the current player.
 */
function showRoleDetails() {
    imageContainer.classList.remove("hidden");
    roleActionButton.innerText = "Hide Role & Pass";
    roleActionButton.onclick = hideRoleAndPass;
}

/**
 * Hides the role details and prepares for the next player or voting.
 */
function hideRoleAndPass() {
    currentPlayerIndex++;
    if (currentPlayerIndex < players.length) {
        displayRole();
    } else {
        startVotingPhase();
    }
}

/**
 * Initiates the voting phase, displaying buttons for each player.
 */
function startVotingPhase() {
    roleRevealSection.classList.add("hidden");
    votingSection.classList.remove("hidden");

    voteButtonsContainer.innerHTML = "";
    votes = {}; // Reset votes for new round

    for (let i = 0; i < players.length; i++) {
        const button = document.createElement("button");
        button.innerText = `Player ${i + 1}`;
        button.onclick = () => recordVote(i);
        voteButtonsContainer.appendChild(button);
        votes[i] = 0; // Initialize vote count for each player
    }
}

/**
 * Records a vote for a specific player and checks if voting is complete.
 * @param {number} votedPlayerIndex - The index of the player being voted for.
 */
function recordVote(votedPlayerIndex) {
    votes[votedPlayerIndex]++;
    // In a real game, you'd have each player secretly cast a vote,
    // and then reveal. This simple version just increments a public counter.
    // You might need a similar reveal/hide mechanism for voting:
    // "Player X, cast your vote" -> Reveal buttons -> "Hide & Pass Vote"
    // For now, it proceeds once total clicks equals player count.

    const totalVotesCast = Object.values(votes).reduce((sum, count) => sum + count, 0);
    // This condition needs to be more robust for a real voting system where each player votes once.
    // For a simple click-based system where every button click counts as a vote:
    if (totalVotesCast === players.length) { // Assuming each player will click one button
        checkResult();
    } else {
        // You might want to hide voting buttons after one vote per 'turn'
        // and add a "Next Player" button.
        // For simplicity, this continues accumulating votes directly.
    }
}

/**
 * Determines the outcome of the game based on the votes.
 */
function checkResult() {
    let mostVotedPlayerIndex = -1;
    let maxVotes = 0;
    let tied = false;

    // Convert votes object to an array to easily sort or iterate
    const voteCounts = Object.keys(votes).map(playerIndex => ({
        playerIndex: parseInt(playerIndex),
        count: votes[playerIndex]
    }));

    // Sort in descending order of votes
    voteCounts.sort((a, b) => b.count - a.count);

    if (voteCounts.length > 0) {
        maxVotes = voteCounts[0].count;
        mostVotedPlayerIndex = voteCounts[0].playerIndex;

        // Check for ties among the top vote-getters
        if (voteCounts.length > 1 && voteCounts[1].count === maxVotes) {
            tied = true;
        }
    }

    const resultTextElement = document.getElementById("resultText");
    votingSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    if (tied) {
        resultTextElement.innerText = `It's a tie! The real SPY was Player ${spyIndex + 1}. Spy wins! The word was: "${chosenWordObject.word}".`;
    } else if (mostVotedPlayerIndex === spyIndex) {
        resultTextElement.innerText = `Player ${spyIndex + 1} was the SPY! Civilians win! The word was: "${chosenWordObject.word}".`;
    } else {
        resultTextElement.innerText = `Wrong guess! The real SPY was Player ${spyIndex + 1}. Spy wins! The word was: "${chosenWordObject.word}".`;
    }
}
