const wordCategories = {
  "Anime": [
      {"word": "Monkey D. Luffy", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example1.jpg"}, // Placeholder URL
      {"word": "Roronoa Zoro", "clue": "One Piece", "imageUrl": "https://i.imgur.com/example2.jpg"}, // Placeholder URL
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
      {"word": "Shigaraki", "clue": "Jujutsu Kaisen", "imageUrl": "https://i.imgur.com/example212.jpg"}, // Assuming for consistency, could be a common name.
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
    {"word": "Hank Schrader", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example306.jpg"},
    {"word": "Saul Goodman", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example307.jpg"},
    {"word": "Gustavo Fring", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example308.jpg"},
    {"word": "Mike Ehrmantraut", "clue": "Breaking Bad", "imageUrl": "https://i.imgur.com/example309.jpg"},

    // Stranger Things
    {"word": "Eleven", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example310.jpg"},
    {"word": "Mike Wheeler", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example311.jpg"},
    {"word": "Dustin Henderson", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example312.jpg"},
    {"word": "Lucas Sinclair", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example313.jpg"},
    {"word": "Will Byers", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example314.jpg"},
    {"word": "Jim Hopper", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example315.jpg"},
    {"word": "Joyce Byers", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example316.jpg"},
    {"word": "Nancy Wheeler", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example317.jpg"},
    {"word": "Jonathan Byers", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example318.jpg"},
    {"word": "Steve Harrington", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example319.jpg"},
    {"word": "Robin Buckley", "clue": "Stranger Things", "imageUrl": "https://i.imgur.com/example320.jpg"},

    // The Big Bang Theory
    {"word": "Sheldon Cooper", "clue": "The Big Bang Theory", "imageUrl": "https://i.imgur.com/example321.jpg"},
    {"word": "Leonard Hofstadter", "clue": "The Big Bang Theory", "imageUrl": "https://i.imgur.com/example322.jpg"},
    {"word": "Penny", "clue": "The Big Bang Theory", "imageUrl": "https://i.imgur.com/example323.jpg"},
    {"word": "Howard Wolowitz", "clue": "The Big Bang Theory", "imageUrl": "https://i.imgur.com/example324.jpg"},
    {"word": "Raj Koothrappali", "clue": "The Big Bang Theory", "imageUrl": "https://i.imgur.com/example325.jpg"},
    {"word": "Bernadette Rostenkowski-Wolowitz", "clue": "The Big Bang Theory", "imageUrl": "https://i.imgur.com/example326.jpg"},
    {"word": "Amy Farrah Fowler", "clue": "The Big Bang Theory", "imageUrl": "https://i.imgur.com/example327.jpg"},

    // The Mandalorian
    {"word": "Din Djarin", "clue": "The Mandalorian", "imageUrl": "https://i.imgur.com/example328.jpg"},
    {"word": "Grogu", "clue": "The Mandalorian", "imageUrl": "https://i.imgur.com/example329.jpg"},
    {"word": "Bo-Katan Kryze", "clue": "The Mandalorian", "imageUrl": "https://i.imgur.com/example330.jpg"},
    {"word": "Cara Dune", "clue": "The Mandalorian", "imageUrl": "https://i.imgur.com/example331.jpg"},
    {"word": "Greef Karga", "clue": "The Mandalorian", "imageUrl": "https://i.imgur.com/example332.jpg"},

    // WandaVision
    {"word": "Wanda Maximoff", "clue": "WandaVision", "imageUrl": "https://i.imgur.com/example333.jpg"},
    {"word": "Vision", "clue": "WandaVision", "imageUrl": "https://i.imgur.com/example334.jpg"},
    {"word": "Agnes (Agatha Harkness)", "clue": "WandaVision", "imageUrl": "https://i.imgur.com/example335.jpg"},
    {"word": "Monica Rambeau", "clue": "WandaVision", "imageUrl": "https://i.imgur.com/example336.jpg"},

    // Loki
    {"word": "Loki Laufeyson", "clue": "Loki", "imageUrl": "https://i.imgur.com/example337.jpg"},
    {"word": "Sylvie", "clue": "Loki", "imageUrl": "https://i.imgur.com/example338.jpg"},
    {"word": "Mobius M. Mobius", "clue": "Loki", "imageUrl": "https://i.imgur.com/example339.jpg"},
    {"word": "Miss Minutes", "clue": "Loki", "imageUrl": "https://i.imgur.com/example340.jpg"},

    // Succession
    {"word": "Logan Roy", "clue": "Succession", "imageUrl": "https://i.imgur.com/example341.jpg"},
    {"word": "Kendall Roy", "clue": "Succession", "imageUrl": "https://i.imgur.com/example342.jpg"},
    {"word": "Shiv Roy", "clue": "Succession", "imageUrl": "https://i.imgur.com/example343.jpg"},
    {"word": "Roman Roy", "clue": "Succession", "imageUrl": "https://i.imgur.com/example344.jpg"},
    {"word": "Tom Wambsgans", "clue": "Succession", "imageUrl": "https://i.imgur.com/example345.jpg"},
    {"word": "Greg Hirsch", "clue": "Succession", "imageUrl": "https://i.imgur.com/example346.jpg"},

    // The Crown
    {"word": "Queen Elizabeth II", "clue": "The Crown", "imageUrl": "https://i.imgur.com/example347.jpg"},
    {"word": "Prince Philip", "clue": "The Crown", "imageUrl": "https://i.imgur.com/example348.jpg"},
    {"word": "Princess Margaret", "clue": "The Crown", "imageUrl": "https://i.imgur.com/example349.jpg"},
    {"word": "Princess Diana", "clue": "The Crown", "imageUrl": "https://i.imgur.com/example350.jpg"},

    // Bridgerton
    {"word": "Daphne Bridgerton", "clue": "Bridgerton", "imageUrl": "https://i.imgur.com/example351.jpg"},
    {"word": "Simon Basset", "clue": "Bridgerton", "imageUrl": "https://i.imgur.com/example352.jpg"},
    {"word": "Kate Sharma", "clue": "Bridgerton", "imageUrl": "https://i.imgur.com/example353.jpg"},
    {"word": "Anthony Bridgerton", "clue": "Bridgerton", "imageUrl": "https://i.imgur.com/example354.jpg"},

    // Squid Game
    {"word": "Seong Gi-hun (Player 456)", "clue": "Squid Game", "imageUrl": "https://i.imgur.com/example355.jpg"},
    {"word": "Kang Sae-byeok (Player 067)", "clue": "Squid Game", "imageUrl": "https://i.imgur.com/example356.jpg"},
    {"word": "Cho Sang-woo (Player 218)", "clue": "Squid Game", "imageUrl": "https://i.imgur.com/example357.jpg"},
    {"word": "Oh Il-nam (Player 001)", "clue": "Squid Game", "imageUrl": "https://i.imgur.com/example358.jpg"},
    {"word": "Hwang Jun-ho", "clue": "Squid Game", "imageUrl": "https://i.imgur.com/example359.jpg"},

    // Money Heist (La Casa de Papel)
    {"word": "The Professor", "clue": "Money Heist", "imageUrl": "https://i.imgur.com/example360.jpg"},
    {"word": "Tokyo", "clue": "Money Heist", "imageUrl": "https://i.imgur.com/example361.jpg"},
    {"word": "Berlin", "clue": "Money Heist", "imageUrl": "https://i.imgur.com/example362.jpg"},
    {"word": "Denver", "clue": "Money Heist", "imageUrl": "https://i.imgur.com/example363.jpg"},
    {"word": "Nairobi", "clue": "Money Heist", "imageUrl": "https://i.imgur.com/example364.jpg"},
    {"word": "Rio", "clue": "Money Heist", "imageUrl": "https://i.imgur.com/example365.jpg"},

    // Wednesday
    {"word": "Wednesday Addams", "clue": "Wednesday", "imageUrl": "https://i.imgur.com/example366.jpg"},
    {"word": "Enid Sinclair", "clue": "Wednesday", "imageUrl": "https://i.imgur.com/example367.jpg"},
    {"word": "Tyler Galpin", "clue": "Wednesday", "imageUrl": "https://i.imgur.com/example368.jpg"},
    {"word": "Xavier Thorpe", "clue": "Wednesday", "imageUrl": "https://i.imgur.com/example369.jpg"},

    // The Boys
    {"word": "Billy Butcher", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example370.jpg"},
    {"word": "Hughie Campbell", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example371.jpg"},
    {"word": "Homelander", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example372.jpg"},
    {"word": "Starlight (Annie January)", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example373.jpg"},
    {"word": "Queen Maeve", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example374.jpg"},

    // House of the Dragon
    {"word": "Rhaenyra Targaryen", "clue": "House of the Dragon", "imageUrl": "https://i.imgur.com/example375.jpg"},
    {"word": "Daemon Targaryen", "clue": "House of the Dragon", "imageUrl": "https://i.imgur.com/example376.jpg"},
    {"word": "Alicent Hightower", "clue": "House of the Dragon", "imageUrl": "https://i.imgur.com/example377.jpg"},
    {"word": "Otto Hightower", "clue": "House of the Dragon", "imageUrl": "https://i.imgur.com/example378.jpg"},

    // Ted Lasso
    {"word": "Ted Lasso", "clue": "Ted Lasso", "imageUrl": "https://i.imgur.com/example379.jpg"},
    {"word": "Coach Beard", "clue": "Ted Lasso", "imageUrl": "https://i.imgur.com/example380.jpg"},
    {"word": "Roy Kent", "clue": "Ted Lasso", "imageUrl": "https://i.imgur.com/example381.jpg"},
    {"word": "Rebecca Welton", "clue": "Ted Lasso", "imageUrl": "https://i.imgur.com/example382.jpg"},
    {"word": "Keeley Jones", "clue": "Ted Lasso", "imageUrl": "https://i.imgur.com/example383.jpg"},

    // The Good Place
    {"word": "Eleanor Shellstrop", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example384.jpg"},
    {"word": "Chidi Anagonye", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example385.jpg"},
    {"word": "Tahani Al-Jamil", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example386.jpg"},
    {"word": "Jason Mendoza", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example387.jpg"},
    {"word": "Michael", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example388.jpg"},
    {"word": "Janet", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example389.jpg"},

    // Brooklyn Nine-Nine
    {"word": "Jake Peralta", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example390.jpg"},
    {"word": "Amy Santiago", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example391.jpg"},
    {"word": "Rosa Diaz", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example392.jpg"},
    {"word": "Charles Boyle", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example393.jpg"},
    {"word": "Raymond Holt", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example394.jpg"},
    {"word": "Gina Linetti", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example395.jpg"},
    {"word": "Terry Jeffords", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example396.jpg"},

    // Parks and Recreation
    {"word": "Leslie Knope", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example397.jpg"},
    {"word": "Ron Swanson", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example398.jpg"},
    {"word": "April Ludgate", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example399.jpg"},
    {"word": "Andy Dwyer", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example400.jpg"},
    {"word": "Tom Haverford", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example401.jpg"},
    {"word": "Donna Meagle", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example402.jpg"},

    // Doctor Who
    {"word": "The Doctor (Tenth)", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example403.jpg"},
    {"word": "Rose Tyler", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example404.jpg"},
    {"word": "Martha Jones", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example405.jpg"},
    {"word": "Donna Noble", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example406.jpg"},
    {"word": "The Doctor (Eleventh)", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example407.jpg"},
    {"word": "Amy Pond", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example408.jpg"},
    {"word": "Rory Williams", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example409.jpg"},
    {"word": "Clara Oswald", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example410.jpg"},
    {"word": "The Doctor (Twelfth)", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example411.jpg"},
    {"word": "Bill Potts", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example412.jpg"},
    {"word": "The Doctor (Thirteenth)", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example413.jpg"},
    {"word": "Yasmin Khan", "clue": "Doctor Who", "imageUrl": "https://i.imgur.com/example414.jpg"},

    // Sherlock
    {"word": "Sherlock Holmes", "clue": "Sherlock", "imageUrl": "https://i.imgur.com/example415.jpg"},
    {"word": "John Watson", "clue": "Sherlock", "imageUrl": "https://i.imgur.com/example416.jpg"},
    {"word": "Mycroft Holmes", "clue": "Sherlock", "imageUrl": "https://i.imgur.com/example417.jpg"},
    {"word": "Irene Adler", "clue": "Sherlock", "imageUrl": "https://i.imgur.com/example418.jpg"},
    {"word": "Moriarty", "clue": "Sherlock", "imageUrl": "https://i.imgur.com/example419.jpg"},

    // Peaky Blinders
    {"word": "Tommy Shelby", "clue": "Peaky Blinders", "imageUrl": "https://i.imgur.com/example420.jpg"},
    {"word": "Arthur Shelby", "clue": "Peaky Blinders", "imageUrl": "https://i.imgur.com/example421.jpg"},
    {"word": "Polly Gray", "clue": "Peaky Blinders", "imageUrl": "https://i.imgur.com/example422.jpg"},
    {"word": "Grace Burgess", "clue": "Peaky Blinders", "imageUrl": "https://i.imgur.com/example423.jpg"},

    // The Witcher
    {"word": "Geralt of Rivia", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example424.jpg"},
    {"word": "Ciri", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example425.jpg"},
    {"word": "Yennefer of Vengerberg", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example426.jpg"},
    {"word": "Jaskier", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example427.jpg"},

    // Ozark
    {"word": "Marty Byrde", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example428.jpg"},
    {"word": "Wendy Byrde", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example429.jpg"},
    {"word": "Ruth Langmore", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example430.jpg"},
    {"word": "Darlene Snell", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example431.jpg"},

    // Cobra Kai
    {"word": "Johnny Lawrence", "clue": "Cobra Kai", "imageUrl": "https://i.imgur.com/example432.jpg"},
    {"word": "Daniel LaRusso", "clue": "Cobra Kai", "imageUrl": "https://i.imgur.com/example433.jpg"},
    {"word": "Miguel Diaz", "clue": "Cobra Kai", "imageUrl": "https://i.imgur.com/example434.jpg"},
    {"word": "Samantha LaRusso", "clue": "Cobra Kai", "imageUrl": "https://i.imgur.com/example435.jpg"},

    // The Queen's Gambit
    {"word": "Beth Harmon", "clue": "The Queen's Gambit", "imageUrl": "https://i.imgur.com/example436.jpg"},
    {"word": "Benny Watts", "clue": "The Queen's Gambit", "imageUrl": "https://i.imgur.com/example437.jpg"},
    {"word": "Harry Beltik", "clue": "The Queen's Gambit", "imageUrl": "https://i.imgur.com/example438.jpg"},

    // Arcane
    {"word": "Vi", "clue": "Arcane", "imageUrl": "https://i.imgur.com/example439.jpg"},
    {"word": "Jinx", "clue": "Arcane", "imageUrl": "https://i.imgur.com/example440.jpg"},
    {"word": "Caitlyn Kiramman", "clue": "Arcane", "imageUrl": "https://i.imgur.com/example441.jpg"},
    {"word": "Jayce Talis", "clue": "Arcane", "imageUrl": "https://i.imgur.com/example442.jpg"},

    // The Umbrella Academy
    {"word": "Number Five", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example443.jpg"},
    {"word": "Vanya Hargreeves (Viktor)", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example444.jpg"},
    {"word": "Klaus Hargreeves", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example445.jpg"},
    {"word": "Diego Hargreeves", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example446.jpg"},
    {"word": "Allison Hargreeves", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example447.jpg"},
    {"word": "Luther Hargreeves", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example448.jpg"},

    // The Boys Presents: Diabolical
    {"word": "Laser Baby", "clue": "The Boys Presents: Diabolical", "imageUrl": "https://i.imgur.com/example449.jpg"},

    // Severance
    {"word": "Mark Scout", "clue": "Severance", "imageUrl": "https://i.imgur.com/example450.jpg"},
    {"word": "Helly R.", "clue": "Severance", "imageUrl": "https://i.imgur.com/example451.jpg"},
    {"word": "Irving Bailiff", "clue": "Severance", "imageUrl": "https://i.imgur.com/example452.jpg"},
    {"word": "Dylan George", "clue": "Severance", "imageUrl": "https://i.imgur.com/example453.jpg"},

    // Fallout (TV Series)
    {"word": "Lucy MacLean", "clue": "Fallout", "imageUrl": "https://i.imgur.com/example454.jpg"},
    {"word": "The Ghoul (Cooper Howard)", "clue": "Fallout", "imageUrl": "https://i.imgur.com/example455.jpg"},
    {"word": "Maximus", "clue": "Fallout", "imageUrl": "https://i.imgur.com/example456.jpg"},

    // House of Cards (US)
    {"word": "Frank Underwood", "clue": "House of Cards (US)", "imageUrl": "https://i.imgur.com/example457.jpg"},
    {"word": "Claire Underwood", "clue": "House of Cards (US)", "imageUrl": "https://i.imgur.com/example458.jpg"},

    // Daredevil (Netflix)
    {"word": "Matt Murdock", "clue": "Daredevil", "imageUrl": "https://i.imgur.com/example459.jpg"},
    {"word": "Karen Page", "clue": "Daredevil", "imageUrl": "https://i.imgur.com/example460.jpg"},
    {"word": "Foggy Nelson", "clue": "Daredevil", "imageUrl": "https://i.imgur.com/example461.jpg"},
    {"word": "Wilson Fisk", "clue": "Daredevil", "imageUrl": "https://i.imgur.com/example462.jpg"},

    // Jessica Jones
    {"word": "Jessica Jones", "clue": "Jessica Jones", "imageUrl": "https://i.imgur.com/example463.jpg"},
    {"word": "Kilgrave", "clue": "Jessica Jones", "imageUrl": "https://i.imgur.com/example464.jpg"},

    // Luke Cage
    {"word": "Luke Cage", "clue": "Luke Cage", "imageUrl": "https://i.imgur.com/example465.jpg"},
    {"word": "Mariah Dillard", "clue": "Luke Cage", "imageUrl": "https://i.imgur.com/example466.jpg"},

    // Iron Fist
    {"word": "Danny Rand", "clue": "Iron Fist", "imageUrl": "https://i.imgur.com/example467.jpg"},
    {"word": "Colleen Wing", "clue": "Iron Fist", "imageUrl": "https://i.imgur.com/example468.jpg"},

    // The Defenders
    {"word": "Stick", "clue": "The Defenders", "imageUrl": "https://i.imgur.com/example469.jpg"},

    // The Punisher
    {"word": "Frank Castle", "clue": "The Punisher", "imageUrl": "https://i.imgur.com/example470.jpg"},
    {"word": "Billy Russo", "clue": "The Punisher", "imageUrl": "https://i.imgur.com/example471.jpg"},

    // Suits
    {"word": "Harvey Specter", "clue": "Suits", "imageUrl": "https://i.imgur.com/example472.jpg"},
    {"word": "Mike Ross", "clue": "Suits", "imageUrl": "https://i.imgur.com/example473.jpg"},
    {"word": "Jessica Pearson", "clue": "Suits", "imageUrl": "https://i.imgur.com/example474.jpg"},
    {"word": "Donna Paulsen", "clue": "Suits", "imageUrl": "https://i.imgur.com/example475.jpg"},

    // Yellowstone
    {"word": "John Dutton", "clue": "Yellowstone", "imageUrl": "https://i.imgur.com/example476.jpg"},
    {"word": "Beth Dutton", "clue": "Yellowstone", "imageUrl": "https://i.imgur.com/example477.jpg"},
    {"word": "Kayce Dutton", "clue": "Yellowstone", "imageUrl": "https://i.imgur.com/example478.jpg"},
    {"word": "Rip Wheeler", "clue": "Yellowstone", "imageUrl": "https://i.imgur.com/example479.jpg"},

    // The Office (UK)
    {"word": "David Brent", "clue": "The Office (UK)", "imageUrl": "https://i.imgur.com/example480.jpg"},
    {"word": "Tim Canterbury", "clue": "The Office (UK)", "imageUrl": "https://i.imgur.com/example481.jpg"},
    {"word": "Gareth Keenan", "clue": "The Office (UK)", "imageUrl": "https://i.imgur.com/example482.jpg"},

    // Black Mirror
    {"word": "Martha (Be Right Back)", "clue": "Black Mirror", "imageUrl": "https://i.imgur.com/example483.jpg"},
    {"word": "Yorkie (San Junipero)", "clue": "Black Mirror", "imageUrl": "https://i.imgur.com/example484.jpg"},

    // Doctor Who (Classic)
    {"word": "The Doctor (First)", "clue": "Doctor Who (Classic)", "imageUrl": "https://i.imgur.com/example485.jpg"},
    {"word": "Sarah Jane Smith", "clue": "Doctor Who (Classic)", "imageUrl": "https://i.imgur.com/example486.jpg"},
    {"word": "K-9", "clue": "Doctor Who (Classic)", "imageUrl": "https://i.imgur.com/example487.jpg"},

    // Star Trek: The Original Series
    {"word": "James T. Kirk", "clue": "Star Trek: The Original Series", "imageUrl": "https://i.imgur.com/example488.jpg"},
    {"word": "Spock", "clue": "Star Trek: The Original Series", "imageUrl": "https://i.imgur.com/example489.jpg"},
    {"word": "Leonard McCoy", "clue": "Star Trek: The Original Series", "imageUrl": "https://i.imgur.com/example490.jpg"},

    // Star Trek: The Next Generation
    {"word": "Jean-Luc Picard", "clue": "Star Trek: The Next Generation", "imageUrl": "https://i.imgur.com/example491.jpg"},
    {"word": "Data", "clue": "Star Trek: The Next Generation", "imageUrl": "https://i.imgur.com/example492.jpg"},
    {"word": "William Riker", "clue": "Star Trek: The Next Generation", "imageUrl": "https://i.imgur.com/example493.jpg"},

    // The X-Files
    {"word": "Fox Mulder", "clue": "The X-Files", "imageUrl": "https://i.imgur.com/example494.jpg"},
    {"word": "Dana Scully", "clue": "The X-Files", "imageUrl": "https://i.imgur.com/example495.jpg"},

    // Friends (Additional)
    {"word": "Janice Litman-Goralnik", "clue": "Friends", "imageUrl": "https://i.imgur.com/example496.jpg"},

    // Seinfeld
    {"word": "Jerry Seinfeld", "clue": "Seinfeld", "imageUrl": "https://i.imgur.com/example497.jpg"},
    {"word": "George Costanza", "clue": "Seinfeld", "imageUrl": "https://i.imgur.com/example498.jpg"},
    {"word": "Elaine Benes", "clue": "Seinfeld", "imageUrl": "https://i.imgur.com/example499.jpg"},
    {"word": "Cosmo Kramer", "clue": "Seinfeld", "imageUrl": "https://i.imgur.com/example500.jpg"},

    // The Simpsons
    {"word": "Homer Simpson", "clue": "The Simpsons", "imageUrl": "https://i.imgur.com/example501.jpg"},
    {"word": "Marge Simpson", "clue": "The Simpsons", "imageUrl": "https://i.imgur.com/example502.jpg"},
    {"word": "Bart Simpson", "clue": "The Simpsons", "imageUrl": "https://i.imgur.com/example503.jpg"},
    {"word": "Lisa Simpson", "clue": "The Simpsons", "imageUrl": "https://i.imgur.com/example504.jpg"},
    {"word": "Maggie Simpson", "clue": "The Simpsons", "imageUrl": "https://i.imgur.com/example505.jpg"},

    // Family Guy
    {"word": "Peter Griffin", "clue": "Family Guy", "imageUrl": "https://i.imgur.com/example506.jpg"},
    {"word": "Stewie Griffin", "clue": "Family Guy", "imageUrl": "https://i.imgur.com/example507.jpg"},
    {"word": "Brian Griffin", "clue": "Family Guy", "imageUrl": "https://i.imgur.com/example508.jpg"},

    // South Park
    {"word": "Eric Cartman", "clue": "South Park", "imageUrl": "https://i.imgur.com/example509.jpg"},
    {"word": "Stan Marsh", "clue": "South Park", "imageUrl": "https://i.imgur.com/example510.jpg"},
    {"word": "Kyle Broflovski", "clue": "South Park", "imageUrl": "https://i.imgur.com/example511.jpg"},
    {"word": "Kenny McCormick", "clue": "South Park", "imageUrl": "https://i.imgur.com/example512.jpg"},

    // Rick and Morty
    {"word": "Rick Sanchez", "clue": "Rick and Morty", "imageUrl": "https://i.imgur.com/example513.jpg"},
    {"word": "Morty Smith", "clue": "Rick and Morty", "imageUrl": "https://i.imgur.com/example514.jpg"},

    // BoJack Horseman
    {"word": "BoJack Horseman", "clue": "BoJack Horseman", "imageUrl": "https://i.imgur.com/example515.jpg"},
    {"word": "Todd Chavez", "clue": "BoJack Horseman", "imageUrl": "https://i.imgur.com/example516.jpg"},

    // Avatar: The Last Airbender
    {"word": "Aang", "clue": "Avatar: The Last Airbender", "imageUrl": "https://i.imgur.com/example517.jpg"},
    {"word": "Katara", "clue": "Avatar: The Last Airbender", "imageUrl": "https://i.imgur.com/example518.jpg"},
    {"word": "Sokka", "clue": "Avatar: The Last Airbender", "imageUrl": "https://i.imgur.com/example519.jpg"},
    {"word": "Zuko", "clue": "Avatar: The Last Airbender", "imageUrl": "https://i.imgur.com/example520.jpg"},
    {"word": "Toph Beifong", "clue": "Avatar: The Last Airbender", "imageUrl": "https://i.imgur.com/example521.jpg"},

    // The Legend of Korra
    {"word": "Korra", "clue": "The Legend of Korra", "imageUrl": "https://i.imgur.com/example522.jpg"},
    {"word": "Mako", "clue": "The Legend of Korra", "imageUrl": "https://i.imgur.com/example523.jpg"},
    {"word": "Bolin", "clue": "The Legend of Korra", "imageUrl": "https://i.imgur.com/example524.jpg"},

    // Gravity Falls
    {"word": "Dipper Pines", "clue": "Gravity Falls", "imageUrl": "https://i.imgur.com/example525.jpg"},
    {"word": "Mabel Pines", "clue": "Gravity Falls", "imageUrl": "https://i.imgur.com/example526.jpg"},
    {"word": "Grunkle Stan", "clue": "Gravity Falls", "imageUrl": "https://i.imgur.com/example527.jpg"},

    // Adventure Time
    {"word": "Finn the Human", "clue": "Adventure Time", "imageUrl": "https://i.imgur.com/example528.jpg"},
    {"word": "Jake the Dog", "clue": "Adventure Time", "imageUrl": "https://i.imgur.com/example529.jpg"},
    {"word": "Princess Bubblegum", "clue": "Adventure Time", "imageUrl": "https://i.imgur.com/example530.jpg"},

    // Regular Show
    {"word": "Mordecai", "clue": "Regular Show", "imageUrl": "https://i.imgur.com/example531.jpg"},
    {"word": "Rigby", "clue": "Regular Show", "imageUrl": "https://i.imgur.com/example532.jpg"},

    // Steven Universe
    {"word": "Steven Universe", "clue": "Steven Universe", "imageUrl": "https://i.imgur.com/example533.jpg"},
    {"word": "Garnet", "clue": "Steven Universe", "imageUrl": "https://i.imgur.com/example534.jpg"},
    {"word": "Pearl", "clue": "Steven Universe", "imageUrl": "https://i.imgur.com/example535.jpg"},
    {"word": "Amethyst", "clue": "Steven Universe", "imageUrl": "https://i.imgur.com/example536.jpg"},

    // Futurama
    {"word": "Philip J. Fry", "clue": "Futurama", "imageUrl": "https://i.imgur.com/example537.jpg"},
    {"word": "Bender Bending Rodriguez", "clue": "Futurama", "imageUrl": "https://i.imgur.com/example538.jpg"},
    {"word": "Leela Turanga", "clue": "Futurama", "imageUrl": "https://i.imgur.com/example539.jpg"},

    // Disenchantment
    {"word": "Bean", "clue": "Disenchantment", "imageUrl": "https://i.imgur.com/example540.jpg"},
    {"word": "Elfo", "clue": "Disenchantment", "imageUrl": "https://i.imgur.com/example541.jpg"},
    {"word": "Luci", "clue": "Disenchantment", "imageUrl": "https://i.imgur.com/example542.jpg"},

    // The Powerpuff Girls
    {"word": "Blossom", "clue": "The Powerpuff Girls", "imageUrl": "https://i.imgur.com/example543.jpg"},
    {"word": "Bubbles", "clue": "The Powerpuff Girls", "imageUrl": "https://i.imgur.com/example544.jpg"},
    {"word": "Buttercup", "clue": "The Powerpuff Girls", "imageUrl": "https://i.imgur.com/example545.jpg"},

    // Spongebob Squarepants
    {"word": "Spongebob Squarepants", "clue": "Spongebob Squarepants", "imageUrl": "https://i.imgur.com/example546.jpg"},
    {"word": "Patrick Star", "clue": "Spongebob Squarepants", "imageUrl": "https://i.imgur.com/example547.jpg"},
    {"word": "Squidward Tentacles", "clue": "Spongebob Squarepants", "imageUrl": "https://i.imgur.com/example548.jpg"},

    // Archer
    {"word": "Sterling Archer", "clue": "Archer", "imageUrl": "https://i.imgur.com/example549.jpg"},
    {"word": "Lana Kane", "clue": "Archer", "imageUrl": "https://i.imgur.com/example550.jpg"},

    // Bob's Burgers
    {"word": "Bob Belcher", "clue": "Bob's Burgers", "imageUrl": "https://i.imgur.com/example551.jpg"},
    {"word": "Linda Belcher", "clue": "Bob's Burgers", "imageUrl": "https://i.imgur.com/example552.jpg"},

    // Solar Opposites
    {"word": "Korvo", "clue": "Solar Opposites", "imageUrl": "https://i.imgur.com/example553.jpg"},
    {"word": "Terry", "clue": "Solar Opposites", "imageUrl": "https://i.imgur.com/example554.jpg"},

    // F is for Family
    {"word": "Frank Murphy", "clue": "F is for Family", "imageUrl": "https://i.imgur.com/example555.jpg"},
    {"word": "Sue Murphy", "clue": "F is for Family", "imageUrl": "https://i.imgur.com/example556.jpg"},

    // Invincible
    {"word": "Mark Grayson (Invincible)", "clue": "Invincible", "imageUrl": "https://i.imgur.com/example557.jpg"},
    {"word": "Omni-Man (Nolan Grayson)", "clue": "Invincible", "imageUrl": "https://i.imgur.com/example558.jpg"},

    // Primal
    {"word": "Spear", "clue": "Primal", "imageUrl": "https://i.imgur.com/example559.jpg"},
    {"word": "Fang", "clue": "Primal", "imageUrl": "https://i.imgur.com/example560.jpg"},

    // Gen V (The Boys Spin-off)
    {"word": "Marie Moreau", "clue": "Gen V", "imageUrl": "https://i.imgur.com/example561.jpg"},
    {"word": "Andre Anderson", "clue": "Gen V", "imageUrl": "https://i.imgur.com/example562.jpg"},

    // House of the Dragon (Additional)
    {"word": "Viserys Targaryen", "clue": "House of the Dragon", "imageUrl": "https://i.imgur.com/example563.jpg"},

    // The Good Place (Additional)
    {"word": "Shawn", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example564.jpg"},

    // Brooklyn Nine-Nine (Additional)
    {"word": "Hitchcock", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example565.jpg"},
    {"word": "Scully", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example566.jpg"},

    // Parks and Recreation (Additional)
    {"word": "Ben Wyatt", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example567.jpg"},
    {"word": "Chris Traeger", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example568.jpg"},

    // The Witcher (Additional)
    {"word": "Cahir", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example569.jpg"},
    {"word": "Fringilla Vigo", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example570.jpg"},

    // Ozark (Additional)
    {"word": "Jonah Byrde", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example571.jpg"},
    {"word": "Charlotte Byrde", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example572.jpg"},

    // Cobra Kai (Additional)
    {"word": "Robby Keene", "clue": "Cobra Kai", "imageUrl": "https://i.imgur.com/example573.jpg"},
    {"word": "Tory Nichols", "clue": "Cobra Kai", "imageUrl": "https://i.imgur.com/example574.jpg"},

    // Arcane (Additional)
    {"word": "Mel Medarda", "clue": "Arcane", "imageUrl": "https://i.imgur.com/example575.jpg"},
    {"word": "Silco", "clue": "Arcane", "imageUrl": "https://i.imgur.com/example576.jpg"},

    // The Umbrella Academy (Additional)
    {"word": "Pogo", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example577.jpg"},
    {"word": "Cha-Cha", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example578.jpg"},
    {"word": "Hazel", "clue": "The Umbrella Academy", "imageUrl": "https://i.imgur.com/example579.jpg"},

    // Severance (Additional)
    {"word": "Seth Milchick", "clue": "Severance", "imageUrl": "https://i.imgur.com/example580.jpg"},

    // Suits (Additional)
    {"word": "Jessica Pearson (Pearson Spin-off)", "clue": "Suits", "imageUrl": "https://i.imgur.com/example581.jpg"},

    // Yellowstone (Additional)
    {"word": "Monica Long Dutton", "clue": "Yellowstone", "imageUrl": "https://i.imgur.com/example582.jpg"},
    {"word": "Teeter", "clue": "Yellowstone", "imageUrl": "https://i.imgur.com/example583.jpg"},

    // The Boys (Even More)
    {"word": "Stormfront", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example584.jpg"},
    {"word": "A-Train", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example585.jpg"},
    {"word": "The Deep", "clue": "The Boys", "imageUrl": "https://i.imgur.com/example586.jpg"},

    // House of the Dragon (Even More)
    {"word": "Laena Velaryon", "clue": "House of the Dragon", "imageUrl": "https://i.imgur.com/example587.jpg"},
    {"word": "Cole Criston", "clue": "House of the Dragon", "imageUrl": "https://i.imgur.com/example588.jpg"},

    // Ted Lasso (Even More)
    {"word": "Nate Shelley (Nate the Great)", "clue": "Ted Lasso", "imageUrl": "https://i.imgur.com/example589.jpg"},

    // The Good Place (Even More)
    {"word": "Glenn", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example590.jpg"},
    {"word": "Patty", "clue": "The Good Place", "imageUrl": "https://i.imgur.com/example591.jpg"},

    // Brooklyn Nine-Nine (Even More)
    {"word": "Doug Judy", "clue": "Brooklyn Nine-Nine", "imageUrl": "https://i.imgur.com/example592.jpg"},

    // Parks and Recreation (Even More)
    {"word": "Jerry Gergich", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example593.jpg"},
    {"word": "Jean-Ralphio Saperstein", "clue": "Parks and Recreation", "imageUrl": "https://i.imgur.com/example594.jpg"},

    // The Witcher (Even More)
    {"word": "Dandelion (Jaskier)", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example595.jpg"},
    {"word": "Philippa Eilhart", "clue": "The Witcher", "imageUrl": "https://i.imgur.com/example596.jpg"},

    // Ozark (Even More)
    {"word": "Wyatt Langmore", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example597.jpg"},
    {"word": "Frank Cosgrove Jr.", "clue": "Ozark", "imageUrl": "https://i.imgur.com/example598.jpg"},

    // Game of Thrones (Even More)
    {"word": "Samwell Tarly", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example599.jpg"},
    {"word": "Gilly", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example600.jpg"},
    {"word": "Ser Davos Seaworth", "clue": "Game of Thrones", "imageUrl": "https://i.imgur.com/example601.jpg"},

    // The Office (US) (Even More)
    {"word": "Clark Green", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example602.jpg"},
    {"word": "Pete Miller", "clue": "The Office (US)", "imageUrl": "https://i.imgur.com/example603.jpg"}

  ],
  "Hollywood Movies": [
      {"word": "Titanic", "clue": "A love story on a sinking ship", "imageUrl": "https://i.imgur.com/example604.jpg"},
      {"word": "Avengers", "clue": "Earth's mightiest heroes", "imageUrl": "https://i.imgur.com/example605.jpg"}
  ],
  "Bollywood Movies": [
      {"word": "Dangal", "clue": "Wrestling sisters", "imageUrl": "https://i.imgur.com/example606.jpg"},
      {"word": "Sholay", "clue": "Classic Indian action movie", "imageUrl": "https://i.imgur.com/example607.jpg"}
  ],
  "Malayalam Movies": [
        {"word": "Drishyam", "clue": "Mohanlal", "imageUrl": "https://i.imgur.com/example608.jpg"},
        {"word": "Kumbalangi Nights", "clue": "Fahadh Faasil", "imageUrl": "https://i.imgur.com/example609.jpg"},
        {"word": "Premam", "clue": "Nivin Pauly", "imageUrl": "https://i.imgur.com/example610.jpg"},
        {"word": "Bangalore Days", "clue": "Dulquer Salmaan", "imageUrl": "https://i.imgur.com/example611.jpg"},
        {"word": "Maheshinte Prathikaaram", "clue": "Fahadh Faasil", "imageUrl": "https://i.imgur.com/example612.jpg"},
        {"word": "Charlie", "clue": "Dulquer Salmaan", "imageUrl": "https://i.imgur.com/example613.jpg"},
        {"word": "Ayyappanum Koshiyum", "clue": "Prithviraj Sukumaran", "imageUrl": "https://i.imgur.com/example614.jpg"},
        {"word": "Minnal Murali", "clue": "Tovino Thomas", "imageUrl": "https://i.imgur.com/example615.jpg"},
        {"word": "Manichitrathazhu", "clue": "Mohanlal", "imageUrl": "https://i.imgur.com/example616.jpg"},
        {"word": "Ramji Rao Speaking", "clue": "Saikumar", "imageUrl": "https://i.imgur.com/example617.jpg"},
        {"word": "Oru Vadakkan Veeragatha", "clue": "Mammootty", "imageUrl": "https://i.imgur.com/example618.jpg"},
        {"word": "Devasuram", "clue": "Mohanlal", "imageUrl": "https://i.imgur.com/example619.jpg"},
        {"word": "Kireedam", "clue": "Mohanlal", "imageUrl": "https://i.imgur.com/example620.jpg"},
        {"word": "Vadakkan Pattukal (Film)", "clue": "Jayaram", "imageUrl": "https://i.imgur.com/example621.jpg"},
        {"word": "C.I.D. Moosa", "clue": "Dileep", "imageUrl": "https://i.imgur.com/example622.jpg"},
        {"word": "Meenaviyil", "clue": "Kunchacko Boban", "imageUrl": "https://i.imgur.com/example623.jpg"},
        {"word": "Amen", "clue": "Fahadh Faasil", "imageUrl": "https://i.imgur.com/example624.jpg"},
        {"word": "Thondimuthalum Driksakshiyum", "clue": "Fahadh Faasil", "imageUrl": "https://i.imgur.com/example625.jpg"},
        {"word": "Sudani from Nigeria", "clue": "Soubin Shahir", "imageUrl": "https://i.imgur.com/example626.jpg"},
        {"word": "Jallikattu", "clue": "Antony Varghese", "imageUrl": "https://i.imgur.com/example627.jpg"},
        {"word": "Android Kunjappan Ver 5.25", "clue": "Soubin Shahir", "imageUrl": "https://i.imgur.com/example628.jpg"},
        {"word": "Kappela", "clue": "Anna Ben", "imageUrl": "https://i.imgur.com/example629.jpg"},
        {"word": "Home", "clue": "Indrans", "imageUrl": "https://i.imgur.com/example630.jpg"},
        {"word": "Jana Gana Mana", "clue": "Prithviraj Sukumaran", "imageUrl": "https://i.imgur.com/example631.jpg"},
        {"word": "Nanpakal Nerathu Mayakkam", "clue": "Mammootty", "imageUrl": "https://i.imgur.com/example632.jpg"},
        {"word": "Romancham", "clue": "Soubin Shahir", "imageUrl": "https://i.imgur.com/example633.jpg"},
        {"word": "2018", "clue": "Tovino Thomas", "imageUrl": "https://i.imgur.com/example634.jpg"},
        {"word": "Kaakha Kaakha", "clue": "Suriya", "imageUrl": "https://i.imgur.com/example635.jpg"},
        {"word": "Neru", "clue": "Mohanlal", "imageUrl": "https://i.imgur.com/example636.jpg"},
        {"word": "Kadavan", "clue": "Basil Joseph", "imageUrl": "https://i.imgur.com/example637.jpg"},
        {"word": "Mukundan Unni Associates", "clue": "Vineeth Sreenivasan", "imageUrl": "https://i.imgur.com/example638.jpg"},
        {"word": "Bheeshma Parvam", "clue": "Mammootty", "imageUrl": "https://i.imgur.com/example639.jpg"},
        {"word": "Malik", "clue": "Fahadh Faasil", "imageUrl": "https://i.imgur.com/example640.jpg"},
        {"word": "The Great Indian Kitchen", "clue": "Nimisha Sajayan", "imageUrl": "https://i.imgur.com/example641.jpg"},
        {"word": "Kanakam Kamini Kalaham", "clue": "Nivin Pauly", "imageUrl": "https://i.imgur.com/example642.jpg"},
        {"word": "Pushpa: The Rise", "clue": "Allu Arjun", "imageUrl": "https://i.imgur.com/example643.jpg"},
        {"word": "Lucifer", "clue": "Mohanlal", "imageUrl": "https://i.imgur.com/example644.jpg"},
        {"word": "Karnan", "clue": "Dhanush", "imageUrl": "https://i.imgur.com/example645.jpg"},
        {"word": "Hridayam", "clue": "Pranav Mohanlal", "imageUrl": "https://i.imgur.com/example646.jpg"},
        {"word": "Helen", "clue": "Anna Ben", "imageUrl": "https://i.imgur.com/example647.jpg"},
        {"word": "Vellimoonga", "clue": "Biju Menon", "imageUrl": "https://i.imgur.com/example648.jpg"},
        {"word": "Traffic", "clue": "Sreenivasan", "imageUrl": "https://i.imgur.com/example649.jpg"},
        {"word": "Ozhimuri", "clue": "Lal", "imageUrl": "https://i.imgur.com/example650.jpg"},
        {"word": "Iyobinte Pusthakam", "clue": "Fahadh Faasil", "imageUrl": "https://i.imgur.com/example651.jpg"},
        {"word": "Parava", "clue": "Dulquer Salmaan", "imageUrl": "https://i.imgur.com/example652.jpg"},
        {"word": "Joseph", "clue": "Joju George", "imageUrl": "https://i.imgur.com/example653.jpg"},
        {"word": "Thaneer Mathan Dinangal", "clue": "Mathew Thomas", "imageUrl": "https://i.imgur.com/example654.jpg"},
        {"word": "Kunjiramayanam", "clue": "Vineeth Sreenivasan", "imageUrl": "https://i.imgur.com/example655.jpg"},
        {"word": "Godha", "clue": "Tovino Thomas", "imageUrl": "https://i.imgur.com/example656.jpg"},
        {"word": "Mayanadi", "clue": "Tovino Thomas", "imageUrl": "https://i.imgur.com/example657.jpg"}
    ],
    "Animals": [
        {"word": "Elephant", "clue": "Possesses a trunk for grasping.", "imageUrl": "https://i.imgur.com/elephant_placeholder.jpg"}, // Replace with real URL
        {"word": "Giraffe", "clue": "Has an exceptionally long neck.", "imageUrl": "https://i.imgur.com/giraffe_placeholder.jpg"},
        {"word": "Kangaroo", "clue": "Carries its young in a pouch.", "imageUrl": "https://i.imgur.com/kangaroo_placeholder.jpg"},
        {"word": "Penguin", "clue": "Flightless bird adapted for swimming.", "imageUrl": "https://i.imgur.com/penguin_placeholder.jpg"},
        {"word": "Bat", "clue": "The only mammal capable of true flight.", "imageUrl": "https://i.imgur.com/bat_placeholder.jpg"},
        {"word": "Octopus", "clue": "Has eight arms and changes color.", "imageUrl": "https://i.imgur.com/octopus_placeholder.jpg"},
        {"word": "Chameleon", "clue": "Changes skin color for camouflage.", "imageUrl": "https://i.imgur.com/chameleon_placeholder.jpg"},
        {"word": "Sloth", "clue": "Moves very slowly through trees.", "imageUrl": "https://i.imgur.com/sloth_placeholder.jpg"},
        {"word": "Platypus", "clue": "Mammal that lays eggs.", "imageUrl": "https://i.imgur.com/platypus_placeholder.jpg"},
        {"word": "Peacock", "clue": "Male displays elaborate tail feathers.", "imageUrl": "https://i.imgur.com/peacock_placeholder.jpg"},
        {"word": "Koala", "clue": "Lives on a diet of eucalyptus leaves.", "imageUrl": "https://i.imgur.com/koala_placeholder.jpg"},
        {"word": "Pangolin", "clue": "Covered in protective keratin scales.", "imageUrl": "https://i.imgur.com/pangolin_placeholder.jpg"},
        {"word": "Narwhal", "clue": "Possesses a long, protruding tusk.", "imageUrl": "https://i.imgur.com/narwhal_placeholder.jpg"},
        {"word": "Armadillo", "clue": "Has a flexible, bony shell.", "imageUrl": "https://i.imgur.com/armadillo_placeholder.jpg"},
        {"word": "Axolotl", "clue": "Retains larval features throughout life.", "imageUrl": "https://i.imgur.com/axolotl_placeholder.jpg"},
        {"word": "Wombat", "clue": "Marsupial with backward-facing pouch.", "imageUrl": "https://i.imgur.com/wombat_placeholder.jpg"},
        {"word": "Lemur", "clue": "Primate endemic to Madagascar.", "imageUrl": "https://i.imgur.com/lemur_placeholder.jpg"},
        {"word": "Fennec Fox", "clue": "Known for its unusually large ears.", "imageUrl": "https://i.imgur.com/fennecfox_placeholder.jpg"},
        {"word": "Blobfish", "clue": "Gelatinous body adapted for deep sea pressure.", "imageUrl": "https://i.imgur.com/blobfish_placeholder.jpg"},
        {"word": "Aye-Aye", "clue": "Uses a long, thin middle finger to tap for grubs.", "imageUrl": "https://i.imgur.com/ayeaye_placeholder.jpg"},
        {"word": "Star-nosed Mole", "clue": "Has 22 fleshy tentacles on its snout.", "imageUrl": "https://i.imgur.com/starnosedmole_placeholder.jpg"},
        {"word": "Kakapo", "clue": "Largest and only flightless parrot.", "imageUrl": "https://i.imgur.com/kakapo_placeholder.jpg"},
        {"word": "Hagfish", "clue": "Produces copious amounts of slime as defense.", "imageUrl": "https://i.imgur.com/hagfish_placeholder.jpg"},
        {"word": "Tarsier", "clue": "Possesses disproportionately large eyes.", "imageUrl": "https://i.imgur.com/tarsier_placeholder.jpg"},
        {"word": "Manatee", "clue": "Large, slow-moving aquatic herbivore.", "imageUrl": "https://i.imgur.com/manatee_placeholder.jpg"},
        {"word": "Komodo Dragon", "clue": "Largest living lizard species.", "imageUrl": "https://i.imgur.com/komododragon_placeholder.jpg"},
        {"word": "Quokka", "clue": "Known for its seemingly smiling face.", "imageUrl": "https://i.imgur.com/quokka_placeholder.jpg"},
        {"word": "Goblin Shark", "clue": "Has a long, flattened snout and protrusible jaws.", "imageUrl": "https://i.imgur.com/gblinshark_placeholder.jpg"},
        {"word": "Alpaca", "clue": "Prized for its soft, luxurious fiber.", "imageUrl": "https://i.imgur.com/alpaca_placeholder.jpg"},
        {"word": "Camel", "clue": "Stores fat in its humps for energy and water.", "imageUrl": "https://i.imgur.com/camel_placeholder.jpg"},
        {"word": "Hedgehog", "clue": "Covered in sharp, spiny quills.", "imageUrl": "https://i.imgur.com/hedgehog_placeholder.jpg"},
        {"word": "Anteater", "clue": "Has a long, sticky tongue for catching insects.", "imageUrl": "https://i.imgur.com/anteater_placeholder.jpg"},
        {"word": "Walrus", "clue": "Distinguished by prominent tusks.", "imageUrl": "https://i.imgur.com/walrus_placeholder.jpg"},
        {"word": "Sea Otter", "clue": "Uses tools, like rocks, to crack open shellfish.", "imageUrl": "https://i.imgur.com/seaotter_placeholder.jpg"},
        {"word": "Potoo Bird", "clue": "Master of camouflage, resembling a tree stump.", "imageUrl": "https://i.imgur.com/potoobird_placeholder.jpg"},
        {"word": "Tapir", "clue": "Features a short, prehensile snout.", "imageUrl": "https://i.imgur.com/tapir_placeholder.jpg"},
        {"word": "Grizzly Bear", "clue": "Known for a distinctive shoulder hump.", "imageUrl": "https://i.imgur.com/grizzlybear_placeholder.jpg"},
        {"word": "Orangutan", "clue": "Great ape with long, reddish-brown hair.", "imageUrl": "https://i.imgur.com/orangutan_placeholder.jpg"},
        {"word": "Bison", "clue": "Large bovine with a shaggy coat and shoulder hump.", "imageUrl": "https://i.imgur.com/bison_placeholder.jpg"},
        {"word": "Warthog", "clue": "African wild pig with facial warts and tusks.", "imageUrl": "https://i.imgur.com/warthog_placeholder.jpg"},
        {"word": "Hippopotamus", "clue": "Spends most of its time in water.", "imageUrl": "https://i.imgur.com/hippopotamus_placeholder.jpg"},
        {"word": "Porcupine", "clue": "Rodent with a coat of sharp quills.", "imageUrl": "https://i.imgur.com/porcupine_placeholder.jpg"},
        {"word": "Rhinoceros", "clue": "Recognizable by its distinctive horn/horns.", "imageUrl": "https://i.imgur.com/rhinoceros_placeholder.jpg"},
        {"word": "Polar Bear", "clue": "Large white bear adapted for Arctic life.", "imageUrl": "https://i.imgur.com/polarbear_placeholder.jpg"},
        {"word": "Cheetah", "clue": "Known as the fastest land animal.", "imageUrl": "https://i.imgur.com/cheetah_placeholder.jpg"},
        {"word": "Pufferfish", "clue": "Inflates its body when threatened.", "imageUrl": "https://i.imgur.com/pufferfish_placeholder.jpg"},
        {"word": "Cuttlefish", "clue": "Possesses W-shaped pupils and remarkable camouflage.", "imageUrl": "https://i.imgur.com/cuttlefish_placeholder.jpg"},
        {"word": "Tardigrade", "clue": "Microscopic invertebrate known for extreme resilience.", "imageUrl": "https://i.imgur.com/tardigrade_placeholder.jpg"},
        {"word": "Okapi", "clue": "Zebra-like stripes on hindquarters, related to giraffe.", "imageUrl": "https://i.imgur.com/okapi_placeholder.jpg"},
        {"word": "Dumbo Octopus", "clue": "Fins resemble elephant ears, lives in deep sea.", "imageUrl": "https://i.imgur.com/dumbooctopus_placeholder.jpg"}
    ],
    "Popular Games": [
        {"word": "Fortnite", "clue": "Battle Royale", "imageUrl": "https://i.imgur.com/fortnite_placeholder.jpg"},
        {"word": "Minecraft", "clue": "Sandbox / Survival", "imageUrl": "https://i.imgur.com/minecraft_placeholder.jpg"},
        {"word": "Grand Theft Auto V", "clue": "Action-Adventure", "imageUrl": "https://i.imgur.com/gta5_placeholder.jpg"},
        {"word": "Call of Duty", "clue": "First-Person Shooter", "imageUrl": "https://i.imgur.com/callofduty_placeholder.jpg"},
        {"word": "FIFA", "clue": "Sports Simulation", "imageUrl": "https://i.imgur.com/fifa_placeholder.jpg"},
        {"word": "The Legend of Zelda: Breath of the Wild", "clue": "Action-Adventure / Open World", "imageUrl": "https://i.imgur.com/zelda_placeholder.jpg"},
        {"word": "Among Us", "clue": "Social Deduction", "imageUrl": "https://i.imgur.com/amongus_placeholder.jpg"},
        {"word": "Super Mario Bros.", "clue": "Platformer", "imageUrl": "https://i.imgur.com/mario_placeholder.jpg"},
        {"word": "Tetris", "clue": "Puzzle", "imageUrl": "https://i.imgur.com/tetris_placeholder.jpg"},
        {"word": "League of Legends", "clue": "MOBA (Multiplayer Online Battle Arena)", "imageUrl": "https://i.imgur.com/leagueoflegends_placeholder.jpg"},
        {"word": "Overwatch", "clue": "Hero Shooter", "imageUrl": "https://i.imgur.com/overwatch_placeholder.jpg"},
        {"word": "Valorant", "clue": "Tactical Shooter", "imageUrl": "https://i.imgur.com/valorant_placeholder.jpg"},
        {"word": "Roblox", "clue": "User-Generated Content Platform", "imageUrl": "https://i.imgur.com/roblox_placeholder.jpg"},
        {"word": "Pokémon Go", "clue": "Augmented Reality / Location-Based", "imageUrl": "https://i.imgur.com/pokemongo_placeholder.jpg"},
        {"word": "The Sims 4", "clue": "Life Simulation", "imageUrl": "https://i.imgur.com/sims4_placeholder.jpg"},
        {"word": "Assassin's Creed Valhalla", "clue": "Action RPG / Open World", "imageUrl": "https://i.imgur.com/assassinscreed_placeholder.jpg"},
        {"word": "Red Dead Redemption 2", "clue": "Action-Adventure / Western", "imageUrl": "https://i.imgur.com/rdr2_placeholder.jpg"},
        {"word": "Cyberpunk 2077", "clue": "Action RPG", "imageUrl": "https://i.imgur.com/cyberpunk2077_placeholder.jpg"},
        {"word": "God of War Ragnarök", "clue": "Action-Adventure", "imageUrl": "https://i.imgur.com/gowr_placeholder.jpg"},
        {"word": "Elden Ring", "clue": "Action RPG / Open World", "imageUrl": "https://i.imgur.com/eldenring_placeholder.jpg"},
        {"word": "Apex Legends", "clue": "Battle Royale / Hero Shooter", "imageUrl": "https://i.imgur.com/apexlegends_placeholder.jpg"},
        {"word": "Genshin Impact", "clue": "Action RPG / Gacha", "imageUrl": "https://i.imgur.com/genshinimpact_placeholder.jpg"},
        {"word": "Counter-Strike 2", "clue": "Tactical First-Person Shooter", "imageUrl": "https://i.imgur.com/cs2_placeholder.jpg"},
        {"word": "Rocket League", "clue": "Vehicular Soccer", "imageUrl": "https://i.imgur.com/rocketleague_placeholder.jpg"},
        {"word": "Fall Guys", "clue": "Battle Royale / Party Game", "imageUrl": "https://i.imgur.com/fallguys_placeholder.jpg"},
        {"word": "Animal Crossing: New Horizons", "clue": "Life Simulation / Social Simulation", "imageUrl": "https://i.imgur.com/animalcrossing_placeholder.jpg"},
        {"word": "Stardew Valley", "clue": "Farm Simulation / RPG", "imageUrl": "https://i.imgur.com/stardewvalley_placeholder.jpg"},
        {"word": "Hades", "clue": "Roguelike Action RPG", "imageUrl": "https://i.imgur.com/hades_placeholder.jpg"},
        {"word": "Persona 5 Royal", "clue": "JRPG / Social Simulation", "imageUrl": "https://i.imgur.com/persona5_placeholder.jpg"},
        {"word": "Control", "clue": "Action-Adventure / Third-Person Shooter", "imageUrl": "https://i.imgur.com/control_placeholder.jpg"},
        {"word": "Doom Eternal", "clue": "First-Person Shooter", "imageUrl": "https://i.imgur.com/doometernal_placeholder.jpg"},
        {"word": "Resident Evil Village", "clue": "Survival Horror", "imageUrl": "https://i.imgur.com/revillage_placeholder.jpg"},
        {"word": "It Takes Two", "clue": "Co-op Adventure", "imageUrl": "https://i.imgur.com/ittakestwo_placeholder.jpg"},
        {"word": "Celeste", "clue": "Precision Platformer", "imageUrl": "https://i.imgur.com/celeste_placeholder.jpg"},
        {"word": "Disco Elysium", "clue": "Role-Playing Game", "imageUrl": "https://i.imgur.com/discoelysium_placeholder.jpg"},
        {"word": "Hollow Knight", "clue": "Metroidvania", "imageUrl": "https://i.imgur.com/hollowknight_placeholder.jpg"},
        {"word": "Portal 2", "clue": "Puzzle-Platformer", "imageUrl": "https://i.imgur.com/portal2_placeholder.jpg"},
        {"word": "Overcooked 2", "clue": "Co-op Cooking", "imageUrl": "https://i.imgur.com/overcooked2_placeholder.jpg"},
        {"word": "Factorio", "clue": "Factory Simulation / Strategy", "imageUrl": "https://i.imgur.com/factorio_placeholder.jpg"},
        {"word": "Terraria", "clue": "Sandbox / Action-Adventure", "imageUrl": "https://i.imgur.com/terraria_placeholder.jpg"},
        {"word": "No Man's Sky", "clue": "Space Exploration / Survival", "imageUrl": "https://i.imgur.com/nomanssky_placeholder.jpg"},
        {"word": "Forza Horizon 5", "clue": "Open World Racing", "imageUrl": "https://i.imgur.com/forzahorizon5_placeholder.jpg"},
        {"word": "NBA 2K", "clue": "Basketball Simulation", "imageUrl": "https://i.imgur.com/nba2k_placeholder.jpg"},
        {"word": "Madden NFL", "clue": "American Football Simulation", "imageUrl": "https://i.imgur.com/maddennfl_placeholder.jpg"},
        {"word": "Mortal Kombat 1", "clue": "Fighting Game", "imageUrl": "https://i.imgur.com/mk1_placeholder.jpg"},
        {"word": "Street Fighter 6", "clue": "Fighting Game", "imageUrl": "https://i.imgur.com/sf6_placeholder.jpg"},
        {"word": "Clash of Clans", "clue": "Strategy / Base Building (Mobile)", "imageUrl": "https://i.imgur.com/clashofclans_placeholder.jpg"},
        {"word": "Candy Crush Saga", "clue": "Match-3 Puzzle (Mobile)", "imageUrl": "https://i.imgur.com/candycrush_placeholder.jpg"},
        {"word": "Pokémon Scarlet and Violet", "clue": "Open World RPG", "imageUrl": "https://i.imgur.com/pokemonsv_placeholder.jpg"},
        {"word": "Diablo IV", "clue": "Action RPG", "imageUrl": "https://i.imgur.com/diablo4_placeholder.jpg"}
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
const roleActionButton = document.getElementById("roleActionButton");
const numPlayersInput = document.getElementById("numPlayers");
const categorySelect = document.getElementById("categorySelect");
const wordImage = document.getElementById("wordImage"); // NEW: Get the image element

/**
 * Initializes the game when the window loads.
 * Populates the category select dropdown.
 */
window.onload = () => {
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
    wordImage.classList.add("hidden"); // Ensure image is hidden initially
    wordImage.src = ""; // Clear any previous image source
    roleActionButton.onclick = revealCurrentPlayerRole; // Set action for first tap
    roleActionButton.innerText = "Reveal Role";
}

/**
 * Reveals the current player's role and associated image/clue.
 * Changes button text to "Hide & Pass".
 */
function revealCurrentPlayerRole() {
    // Hide image and reset src before revealing new role, in case previous player was civilian
    wordImage.classList.add("hidden");
    wordImage.src = "";

    if (players[currentIndex] === "Spy") {
        roleText.innerText = `You are the SPY. Your clue is: "${chosenWordObject.clue}"`;
    } else {
        roleText.innerText = `You are a CIVILIAN. The word is: "${chosenWordObject.word}"`;

        // Display image ONLY if player is civilian and imageUrl exists
        if (chosenWordObject.imageUrl) {
            wordImage.src = chosenWordObject.imageUrl;
            wordImage.classList.remove("hidden"); // Show the image
        }
    }
    roleText.classList.remove("hidden"); // Show the role text
    roleActionButton.innerText = `Hide & Pass to Player ${currentIndex + 2 > players.length ? 'Vote' : currentIndex + 2}`;
    roleActionButton.onclick = hideAndPassRole; // Set action for the next tap
}

/**
 * Hides the current player's role, associated image, and prepares for the next player or transitions to the voting phase.
 */
function hideAndPassRole() {
    roleText.classList.add("hidden"); // Hide the role text again
    wordImage.classList.add("hidden"); // Hide the image again
    wordImage.src = ""; // Clear the image source to prevent it from flashing

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
