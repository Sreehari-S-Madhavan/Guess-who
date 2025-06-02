const wordCategories = {
    "Anime": [
        {"word": "Monkey D. Luffy", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example1.jpg"},
        {"word": "Roronoa Zoro", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example2.jpg"},
        {"word": "Nami", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example3.jpg"},
        {"word": "Usopp", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example4.jpg"},
        {"word": "Sanji", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example5.jpg"},
        {"word": "Tony Tony Chopper", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example6.jpg"},
        {"word": "Nico Robin", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example7.jpg"},
        {"word": "Franky", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example8.jpg"},
        {"word": "Brook", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example9.jpg"},
        {"word": "Jinbe", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example10.jpg"},
        {"word": "Portgas D. Ace", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example11.jpg"},
        {"word": "Sabo", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example12.jpg"},
        {"word": "Shanks", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example13.jpg"},
        {"word": "Marshall D. Teach (Blackbeard)", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example14.jpg"},
        {"word": "Trafalgar D. Water Law", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example15.jpg"},
        {"word": "Eustass Kid", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example16.jpg"},
        {"word": "Boa Hancock", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example17.jpg"},
        {"word": "Dracule Mihawk", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example18.jpg"},
        {"word": "Donquixote Doflamingo", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example19.jpg"},
        {"word": "Kaido", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example20.jpg"},
        {"word": "Naruto Uzumaki", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example21.jpg"},
        {"word": "Sasuke Uchiha", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example22.jpg"},
        {"word": "Sakura Haruno", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example23.jpg"},
        {"word": "Kakashi Hatake", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example24.jpg"},
        {"word": "Itachi Uchiha", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example25.jpg"},
        {"word": "Jiraiya", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example26.jpg"},
        {"word": "Tsunade", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example27.jpg"},
        {"word": "Orochimaru", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example28.jpg"},
        {"word": "Gaara", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example29.jpg"},
        {"word": "Rock Lee", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example30.jpg"},
        {"word": "Neji Hyuga", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example31.jpg"},
        {"word": "Hinata Hyuga", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example32.jpg"},
        {"word": "Shikamaru Nara", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example33.jpg"},
        {"word": "Choji Akimichi", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example34.jpg"},
        {"word": "Ino Yamanaka", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example35.jpg"},
        {"word": "Kiba Inuzuka", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example36.jpg"},
        {"word": "Shino Aburame", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example37.jpg"},
        {"word": "Asuma Sarutobi", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example38.jpg"},
        {"word": "Might Guy", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example39.jpg"},
        {"word": "Madara Uchiha", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example40.jpg"},
        {"word": "Asta", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example41.jpg"},
        {"word": "Yuno", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example42.jpg"},
        {"word": "Noelle Silva", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example43.jpg"},
        {"word": "Yami Sukehiro", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example44.jpg"},
        {"word": "Luck Voltia", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example45.jpg"},
        {"word": "Magna Swing", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example46.jpg"},
        {"word": "Vanessa Enoteca", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example47.jpg"},
        {"word": "Charmy Pappitson", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example48.jpg"},
        {"word": "Gauche Adlai", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example49.jpg"},
        {"word": "Finral Roulacase", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example50.jpg"},
        {"word": "Licht", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example51.jpg"},
        {"word": "William Vangeance", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example52.jpg"},
        {"word": "Julius Novachrono", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example53.jpg"},
        {"word": "Mereoleona Vermillion", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example54.jpg"},
        {"word": "Fuegoleon Vermillion", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example55.jpg"},
        {"word": "Secre Swallowtail", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example56.jpg"},
        {"word": "Zenon Zogratis", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example57.jpg"},
        {"word": "Ichigo Kurosaki", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example58.jpg"},
        {"word": "Rukia Kuchiki", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example59.jpg"},
        {"word": "Renji Abarai", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example60.jpg"},
        {"word": "Uryu Ishida", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example61.jpg"},
        {"word": "Orihime Inoue", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example62.jpg"},
        {"word": "Yasutora Sado (Chad)", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example63.jpg"},
        {"word": "Byakuya Kuchiki", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example64.jpg"},
        {"word": "Kenpachi Zaraki", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example65.jpg"},
        {"word": "Toshiro Hitsugaya", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example66.jpg"},
        {"word": "Sosuke Aizen", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example67.jpg"},
        {"word": "Ulquiorra Cifer", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example68.jpg"},
        {"word": "Grimmjow Jaegerjaquez", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example69.jpg"},
        {"word": "Goku", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example70.jpg"},
        {"word": "Vegeta", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example71.jpg"},
        {"word": "Gohan", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example72.jpg"},
        {"word": "Piccolo", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example73.jpg"},
        {"word": "Krillin", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example74.jpg"},
        {"word": "Yamcha", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example75.jpg"},
        {"word": "Tien Shinhan", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example76.jpg"},
        {"word": "Trunks", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example77.jpg"},
        {"word": "Android 18", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example78.jpg"},
        {"word": "Frieza", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example79.jpg"},
        {"word": "Cell", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example80.jpg"},
        {"word": "Majin Buu", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example81.jpg"},
        {"word": "Jiren", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example82.jpg"},
        {"word": "Beerus", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example83.jpg"},
        {"word": "Whis", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example84.jpg"},
        {"word": "Ryuk", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example85.jpg"},
        {"word": "Light Yagami", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example86.jpg"},
        {"word": "L", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example87.jpg"},
        {"word": "Misa Amane", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example88.jpg"},
        {"word": "Near", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example89.jpg"},
        {"word": "Mello", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example90.jpg"},
        {"word": "Eren Yeager", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example91.jpg"},
        {"word": "Mikasa Ackerman", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example92.jpg"},
        {"word": "Armin Arlert", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example93.jpg"},
        {"word": "Levi Ackerman", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example94.jpg"},
        {"word": "Erwin Smith", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example95.jpg"},
        {"word": "Hange Zoë", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example96.jpg"},
        {"word": "Jean Kirstein", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example97.jpg"},
        {"word": "Connie Springer", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example98.jpg"},
        {"word": "Sasha Blouse", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example99.jpg"},
        {"word": "Reiner Braun", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example100.jpg"},
        {"word": "Bertholdt Hoover", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example101.jpg"},
        {"word": "Enel", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example102.jpg"},
        {"word": "Fujitora", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example103.jpg"},
        {"word": "Kuro", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example104.jpg"},
        {"word": "Buggy", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example105.jpg"},
        {"word": "Perona", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example106.jpg"},
        {"word": "Bartolomeo", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example107.jpg"},
        {"word": "Shino Aburame", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example108.jpg"},
        {"word": "Kiba Inuzuka", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example109.jpg"},
        {"word": "Anko Mitarashi", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example110.jpg"},
        {"word": "Kurenai Yuhi", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example111.jpg"},
        {"word": "Iruka Umino", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example112.jpg"},
        {"word": "Konohamaru", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example113.jpg"},
        {"word": "Mereoleona Vermillion", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example114.jpg"},
        {"word": "William Vangeance", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example115.jpg"},
        {"word": "Dorothy Unsworth", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example116.jpg"},
        {"word": "Rill Boismortier", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example117.jpg"},
        {"word": "Zora Ideale", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example118.jpg"},
        {"word": "Grey", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example119.jpg"},
        {"word": "Teru Mikami", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example120.jpg"},
        {"word": "Watari", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example121.jpg"},
        {"word": "Kyosuke Higuchi", "clue": "Death Note", "imageUrl": "https://i.imgur.com/example122.jpg"},
        {"word": "Hannes", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example123.jpg"},
        {"word": "Floch Forster", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example124.jpg"},
        {"word": "Ymir", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example125.jpg"},
        {"word": "Zeke Yeager", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example126.jpg"},
        {"word": "Pieck Finger", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example127.jpg"},
        {"word": "Galliard", "clue": "Attack on Titan", "imageUrl": "https://i.imgur.com/example128.jpg"},
        {"word": "Ikkaku Madarame", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example129.jpg"},
        {"word": "Yumichika Ayasegawa", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example130.jpg"},
        {"word": "Shuhei Hisagi", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example131.jpg"},
        {"word": "Lisa Yadomaru", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example132.jpg"},
        {"word": "Nemu Kurotsuchi", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example133.jpg"},
        {"word": "Mayuri Kurotsuchi", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example134.jpg"},
        {"word": "Tien Shinhan", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example135.jpg"},
        {"word": "Yamcha", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example136.jpg" },
        {"word": "Videl", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example137.jpg"},
        {"word": "Android 17", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example138.jpg"},
        {"word": "Master Roshi", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example139.jpg"},
        {"word": "Mr. Satan", "clue": "Dragon Ball", "imageUrl": "https://i.imgur.com/example140.jpg"},
        {"word": "Killer", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example141.jpg"},
        {"word": "Apoo", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example142.jpg"},
        {"word": "Basil Hawkins", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example143.jpg"},
        {"word": "Bon Clay", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example144.jpg"},
        {"word": "Gekomoria", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example145.jpg"},
        {"word": "Izuna Uchiha", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example146.jpg"},
        {"word": "Hashirama Senju", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example147.jpg"},
        {"word": "Tobirama Senju", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example148.jpg"},
        {"word": "Karin Uzumaki", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example149.jpg"},
        {"word": "Suigetsu Hozuki", "clue": "Naruto", "imageUrl": "https://i.imgur.com/example150.jpg"},
        {"word": "Julius (Younger)", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example151.jpg"},
        {"word": "Patry", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example152.jpg"},
        {"word": "Rhya", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example153.jpg"},
        {"word": "Valtos", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example154.jpg"},
        {"word": "Sally", "clue": "Black Clover", "imageUrl": "https://i.imgur.com/example155.jpg"},
        {"word": "Hiyori Sarugaki", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example156.jpg"},
        {"word": "Love Aikawa", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example157.jpg"},
        {"word": "Rose Otoribashi", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example158.jpg"},
        {"word": "Shinji Hirako", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example159.jpg"},
        {"word": "Lilynette Gingerbuck", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example160.jpg"},
        {"word": "Starrk", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example161.jpg"},
        {"word": "Urahara Kisuke", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example162.jpg"},
        {"word": "Tessai Tsukabishi", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example163.jpg"},
        {"word": "Jinta Hanakari", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example164.jpg"},
        {"word": "Ururu Tsumugiya", "clue": "Bleach", "imageUrl": "https://i.imgur.com/example165.jpg"},
        {"word": "Yuji Itadori", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example166.jpg"},
        {"word": "Satoru Gojo", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example167.jpg"},
        {"word": "Megumi Fushiguro", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example168.jpg"},
        {"word": "Nobara Kugisaki", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example169.jpg"},
        {"word": "Maki Zenin", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example170.jpg"},
        {"word": "Toge Inumaki", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example171.jpg"},
        {"word": "Panda", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example172.jpg"},
        {"word": "Kento Nanami", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example173.jpg"},
        {"word": "Yuki Tsukumo", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example174.jpg"},
        {"word": "Masamichi Yaga", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example175.jpg"},
        {"word": "Shoko Ieiri", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example176.jpg"},
        {"word": "Suguru Geto", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example177.jpg"},
        {"word": "Ryomen Sukuna", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example178.jpg"},
        {"word": "Mahito", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example179.jpg"},
        {"word": "Jogo", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example180.jpg"},
        {"word": "Hanami", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example181.jpg"},
        {"word": "Dagon", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example182.jpg"},
        {"word": "Choso", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example183.jpg"},
        {"word": "Eso", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example184.jpg"},
        {"word": "Kechizu", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example185.jpg"},
        {"word": "Kenjaku", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example186.jpg"},
        {"word": "Uraume", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example187.jpg"},
        {"word": "Aoi Todo", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example188.jpg"},
        {"word": "Mei Mei", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example189.jpg"},
        {"word": "Kokichi Muta (Mechamaru)", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example190.jpg"},
        {"word": "Miwa Kasumi", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example191.jpg"},
        {"word": "Noritoshi Kamo", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example192.jpg"},
        {"word": "Mai Zenin", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example193.jpg"},
        {"word": "Utahime Iori", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example194.jpg"},
        {"word": "Gakuganji Yoshinobu", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example195.jpg"},
        {"word": "Yuta Okkotsu", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example196.jpg"},
        {"word": "Rika Orimoto", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example197.jpg"},
        {"word": "Suguru Geto (Jujutsu Kaisen 0)", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example198.jpg"},
        {"word": "Kinji Hakari", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example199.jpg"},
        {"word": "Kirara Hoshi", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example200.jpg"},
        {"word": "Naoya Zenin", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example201.jpg"},
        {"word": "Yorozu", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example202.jpg"},
        {"word": "Takaba Fumihiko", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example203.jpg"},
        {"word": "Angel (Hana Kurusu)", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example204.jpg"},
        {"word": "Reggie Star", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example205.jpg"},
        {"word": "Charles Bernard", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example206.jpg"},
        {"word": "Higuruma Hiromi", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example207.jpg"},
        {"word": "Hazenoki Ikuya", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example208.jpg"},
        {"word": "Remi", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example209.jpg"},
        {"word": "Tsumiki Fushiguro", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example210.jpg"},
        {"word": "Toji Fushiguro", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example211.jpg"},
        {"word": "Shigaraki", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example212.jpg"},
        {"word": "Riko Amanai", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example213.jpg"},
        {"word": "Misato Kuroi", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example214.jpg"},
        {"word": "Geto's Curse Spirit (Playful Cloud)", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example215.jpg"},
        {"word": "Saitama", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example216.jpg"},
        {"word": "Genos", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example217.jpg"},
        {"word": "King", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example218.jpg"},
        {"word": "Fubuki", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example219.jpg"},
        {"word": "Tatsumaki", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example220.jpg"},
        {"word": "Bang (Silverfang)", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example221.jpg"},
        {"word": "Bomb", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example222.jpg"},
        {"word": "Atomic Samurai", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example223.jpg"},
        {"word": "Child Emperor", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example224.jpg"},
        {"word": "Zombieman", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example225.jpg"},
        {"word": "Flashy Flash", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example226.jpg"},
        {"word": "Darkshine", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example227.jpg"},
        {"word": "Pig God", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example228.jpg"},
        {"word": "Drive Knight", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example229.jpg"},
        {"word": "Watchdog Man", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example230.jpg"},
        {"word": "Metal Bat", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example231.jpg"},
        {"word": "Tanktop Master", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example232.jpg"},
        {"word": "Puri-Puri Prisoner", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example233.jpg"},
        {"word": "Superalloy Darkshine", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example234.jpg"},
        {"word": "Lightning Max", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example235.jpg"},
        {"word": "Stinger", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example236.jpg"},
        {"word": "Mumen Rider", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example237.jpg"},
        {"word": "Sweet Mask (Amai Mask)", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example238.jpg"},
        {"word": "Garou", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example239.jpg"},
        {"word": "Boros", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example240.jpg"},
        {"word": "Vaccine Man", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example241.jpg"},
        {"word": "Crablante", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example242.jpg"},
        {"word": "Deep Sea King", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example243.jpg"},
        {"word": "Carnage Kabuto", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example244.jpg"},
        {"word": "Elder Centipede", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example245.jpg"},
        {"word": "Overgrown Rover", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example246.jpg"},
        {"word": "Black Sperm", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example247.jpg"},
        {"word": "Homeless Emperor", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example248.jpg"},
        {"word": "Goketsu", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example249.jpg"},
        {"word": "Orochi", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example250.jpg"},
        {"word": "Psychic (Psykos)", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example251.jpg"},
        {"word": "Geryuganshoop", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example252.jpg"},
        {"word": "Groribas", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example253.jpg"},
        {"word": "Melzargard", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example254.jpg"},
        {"word": "Speed-o'-Sound Sonic", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example255.jpg"},
        {"word": "Gale Wind", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example256.jpg"},
        {"word": "Hellfire Flame", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example257.jpg"},
        {"word": "Giga Kick Man", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example258.jpg"},
        {"word": "Blue Fire", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example259.jpg"},
        {"word": "Death Gatling", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example260.jpg"},
        {"word": "Needle Star", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example261.jpg"},
        {"word": "Splitting Guts", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example262.jpg"},
        {"word": "Tanktop Tiger", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example263.jpg"},
        {"word": "Tanktop Blackhole", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example264.jpg"},
        {"word": "Sneck", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example265.jpg"},
        {"word": "Glasses", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example266.jpg"},
        {"word": "Death Flounder", "clue": "One Punch Man", "imageUrl": "https://i.imgur.com/example267.jpg"}
    ],

    "TV Shows": [
        {"word": "Michael Scott", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example268.jpg"},
        {"word": "Dwight Schrute", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example269.jpg"},
        {"word": "Jim Halpert", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example270.jpg"},
        {"word": "Pam Beesly", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example271.jpg"},
        {"word": "Kevin Malone", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example272.jpg"},
        {"word": "Angela Martin", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example273.jpg"},
        {"word": "Andy Bernard", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example274.jpg"},
        {"word": "Oscar Martinez", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example275.jpg"},
        {"word": "Stanley Hudson", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example276.jpg"},
        {"word": "Phyllis Lapin-Vance", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example277.jpg"},
        {"word": "Creed Bratton", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example278.jpg"},
        {"word": "Meredith Palmer", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example279.jpg"},
        {"word": "Toby Flenderson", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example280.jpg"},
        {"word": "Erin Hannon", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example281.jpg"},
        {"word": "Gabe Lewis", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example282.jpg"},

        // Friends
        {"word": "Joey Tribbiani", "clue": "Friends", "imageUrl": "https://i.imgur.com/example283.jpg"},
        {"word": "Phoebe Buffay", "clue": "Friends", "imageUrl": "https://i.imgur.com/example284.jpg"},
        {"word": "Monica Geller", "clue": "Friends", "imageUrl": "https://i.imgur.com/example285.jpg"},
        {"word": "Chandler Bing", "clue": "Friends", "imageUrl": "https://i.imgur.com/example286.jpg"},
        {"word": "Rachel Green", "clue": "Friends", "imageUrl": "https://i.imgur.com/example287.jpg"},
        {"word": "Ross Geller", "clue": "Friends", "imageUrl": "https://i.imgur.com/example288.jpg"},
        {"word": "Gunther", "clue": "Friends", "imageUrl": "https://i.imgur.com/example289.jpg"},

        // Game of Thrones
        {"word": "Jon Snow", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example290.jpg"},
        {"word": "Daenerys Targaryen", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example291.jpg"},
        {"word": "Tyrion Lannister", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example292.jpg"},
        {"word": "Cersei Lannister", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example293.jpg"},
        {"word": "Arya Stark", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example294.jpg"},
        {"word": "Sansa Stark", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example295.jpg"},
        {"word": "Jaime Lannister", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example296.jpg"},
        {"word": "Bran Stark", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example297.jpg"},
        {"word": "Ned Stark", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example298.jpg"},
        {"word": "Khal Drogo", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example299.jpg"},
        {"word": "Melisandre", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example300.jpg"},
        {"word": "The Hound", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example301.jpg"},
        {"word": "Littlefinger", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example302.jpg"},

        // Breaking Bad
        {"word": "Walter White", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example303.jpg"},
        {"word": "Jesse Pinkman", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example304.jpg"},
        {"word": "Skyler White", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example305.jpg"},
        {"word": "Hank Schrader", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example306.jpg"}
    ]
};

let numPlayers = 0;
let players = [];
let spyIndex = -1;
let currentWord = '';
let currentClue = '';
let currentImageUrl = '';
let currentPlayerIndex = 0;
let selectedCategory = '';

// DOM Elements
const setupDiv = document.getElementById('setup');
const roleRevealDiv = document.getElementById('roleReveal');
const votingDiv = document.getElementById('voting');
const resultDiv = document.getElementById('result');
const numPlayersInput = document.getElementById('numPlayers');
const categorySelect = document.getElementById('categorySelect');
const playerLabel = document.getElementById('playerLabel');
const roleImage = document.getElementById('roleImage');
const roleText = document.getElementById('roleText');
const roleActionButton = document.getElementById('roleActionButton');
const voteButtonsDiv = document.getElementById('voteButtons');
const resultText = document.getElementById('resultText');
const imageContainer = document.getElementById('imageContainer');


// Initialize categories dropdown
function initGame() {
    for (const category in wordCategories) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    }
}

// Start Game
function startGame() {
    numPlayers = parseInt(numPlayersInput.value);
    selectedCategory = categorySelect.value;

    if (numPlayers < 3 || numPlayers > 6) {
        alert("Number of players must be between 3 and 6.");
        return;
    }

    if (!selectedCategory) {
        alert("Please select a category.");
        return;
    }

    // Randomly select word and clue
    const wordsInSelectedCategory = wordCategories[selectedCategory];
    const randomIndex = Math.floor(Math.random() * wordsInSelectedCategory.length);
    currentWord = wordsInSelectedCategory[randomIndex].word;
    currentClue = wordsInSelectedCategory[randomIndex].clue;
    currentImageUrl = wordsInSelectedCategory[randomIndex].imageUrl;

    // Assign roles
    players = Array.from({ length: numPlayers }, (_, i) => ({ id: i, isSpy: false }));
    spyIndex = Math.floor(Math.random() * numPlayers);
    players[spyIndex].isSpy = true;

    // Hide setup, show role reveal for first player
    setupDiv.classList.add('hidden');
    roleRevealDiv.classList.remove('hidden');
    currentPlayerIndex = 0;
    revealRole();
}

// Reveal role to current player
function revealRole() {
    playerLabel.textContent = `Player ${currentPlayerIndex + 1}`;
    imageContainer.classList.add('hidden'); // Hide image by default

    if (players[currentPlayerIndex].isSpy) {
        roleText.textContent = "You are the Spy!";
        roleActionButton.textContent = "Acknowledge Role";
        roleActionButton.onclick = nextPlayer;
    } else {
        roleText.textContent = `The secret word is: "${currentWord}" (${currentClue})`;
        roleImage.src = currentImageUrl;
        imageContainer.classList.remove('hidden'); // Show image for non-spy
        roleActionButton.textContent = "Acknowledge Role";
        roleActionButton.onclick = nextPlayer;
    }
}

// Move to next player or voting
function nextPlayer() {
    currentPlayerIndex++;
    if (currentPlayerIndex < numPlayers) {
        revealRole();
    } else {
        showVoting();
    }
}

// Show voting phase
function showVoting() {
    roleRevealDiv.classList.add('hidden');
    votingDiv.classList.remove('hidden');
    voteButtonsDiv.innerHTML = ''; // Clear previous buttons

    for (let i = 0; i < numPlayers; i++) {
        const button = document.createElement('button');
        button.textContent = `Vote Player ${i + 1}`;
        button.onclick = () => vote(i);
        voteButtonsDiv.appendChild(button);
    }
}

// Handle a vote
function vote(votedPlayerIndex) {
    votingDiv.classList.add('hidden');
    resultDiv.classList.remove('hidden');

    if (votedPlayerIndex === spyIndex) {
        resultText.textContent = `Player ${votedPlayerIndex + 1} was the Spy! The citizens win! The word was "${currentWord}".`;
    } else {
        resultText.textContent = `Player ${votedPlayerIndex + 1} was not the Spy. The Spy wins! The word was "${currentWord}".`;
    }
}

// Initialize game on load
document.addEventListener('DOMContentLoaded', initGame);
