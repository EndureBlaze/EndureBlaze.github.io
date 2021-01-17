const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"cc4aa9d2b0bc94e85eff99c046bdb430",url:"./404.html"},{revision:"335344dd9c4d5011c6037d05a6482edd",url:"./about/index.html"},{revision:"f0d0149c4909b9ab5086274cd0cbf697",url:"./archives/2019/07/index.html"},{revision:"ea60268b8410c6b698dea01cc9b98b95",url:"./archives/2019/08/index.html"},{revision:"d23590e6d24ae2f6085b2d58e592a5e9",url:"./archives/2019/09/index.html"},{revision:"a3b9e1c0e995e83f1f80a608cadd8dea",url:"./archives/2019/10/index.html"},{revision:"4d115ee44749d99542aa0f70f34171ec",url:"./archives/2019/11/index.html"},{revision:"28eb8ac621c3123c67708a84132310f4",url:"./archives/2019/index.html"},{revision:"0a5d0f063bd339838df51013468f2e06",url:"./archives/2019/page/2/index.html"},{revision:"52243e9062ffbef445162e9ac717df08",url:"./archives/2020/02/index.html"},{revision:"a7169318aa01b100088ed6a6ff7a51dd",url:"./archives/2020/03/index.html"},{revision:"a8f213c3c48248d928ccdc7ca8fca220",url:"./archives/2020/04/index.html"},{revision:"4c09c22123f734474956808431e0969a",url:"./archives/2020/05/index.html"},{revision:"53f12ec46b813b6c23e4e9983851298f",url:"./archives/2020/06/index.html"},{revision:"57d1855728ca734350ae2dedf7c998bf",url:"./archives/2020/07/index.html"},{revision:"e2c868905b25d671fabecadd850e6c31",url:"./archives/2020/09/index.html"},{revision:"945b914b153546aba03cb27d5092d913",url:"./archives/2020/11/index.html"},{revision:"a698dd2e98718e2e33c792ddb3f35d81",url:"./archives/2020/index.html"},{revision:"078f7e3b03fd23a32433eeef5b077def",url:"./archives/2020/page/2/index.html"},{revision:"7f0efe57b6013d6ff0f8fbd68fd536da",url:"./archives/2021/01/index.html"},{revision:"9e9d6e33ae9079b8eb2d0ed998eb4f88",url:"./archives/2021/index.html"},{revision:"c1baad9240f77001cead4a93e2189050",url:"./archives/index.html"},{revision:"b226097f6e6e07a0513c22ffbd3cad38",url:"./archives/page/2/index.html"},{revision:"04a9cc470534e0d92f98cfaa72965a71",url:"./archives/page/3/index.html"},{revision:"82c3445c06b60d17c8ca65bdc908d81d",url:"./categories/编程/index.html"},{revision:"85ece9a670871bd8b6710d7466c43813",url:"./categories/技术记录/index.html"},{revision:"8350efbaae96652e1df54fd02afa5d6d",url:"./categories/随手记/index.html"},{revision:"2552159aa60a77324640c9778d33287c",url:"./categories/碎碎念/index.html"},{revision:"5cdba2f8606485f679b6361111f61df5",url:"./categories/我的-Android-应用/index.html"},{revision:"9e9433f3c04219091690e97fa5b9bb16",url:"./categories/星之卡比系列教程/index.html"},{revision:"f5822735f3a3f4e5f57e5c5b6ebc6955",url:"./categories/正经文字/index.html"},{revision:"6d0aa88c6270962b46292fe8b221de7d",url:"./categories/资源/index.html"},{revision:"a75614578f9c59d56d9251a1276a8ac3",url:"./categories/index.html"},{revision:"b129fca89ccc13fcce714e2f8a85db42",url:"./contact/index.html"},{revision:"7bfd5a16c64e2eb8602e1651f29756d1",url:"./css/app-refresh.css"},{revision:"8ee6168510c2d6a12dbdce06290a334b",url:"./css/black.css"},{revision:"ee21c7086a59d52b97a9e7b6240a9414",url:"./css/blog-encrypt.css"},{revision:"c27c5e199127105dd8d9462af6aa412c",url:"./css/font.css"},{revision:"e175de66b083dfbad3f4120f67ab876d",url:"./css/heimu.css"},{revision:"592404ea6752fa578d5d9d8a7656e653",url:"./css/hint.min.css"},{revision:"d538c0fd542657ee1f2e0e1ca641af00",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"a04757804840e4e870b5310e37fcbc37",url:"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{revision:"c318a45b45be019ffdeb8c9ac6a41283",url:"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{revision:"045b7ab8d749812c052e9eca1ec5db07",url:"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{revision:"c3c08fc9f418f827eb3eed1b0ebe48c8",url:"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{revision:"06bf22283c831651e111b08000e502fc",url:"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{revision:"dd0da6de6c2340f4bf0aa4108f98a63f",url:"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{revision:"54b6827550ef145b4c1968518a96070f",url:"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{revision:"3eacd63796de4b39bc102dae7b143ca5",url:"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{revision:"4ca58bda726119955a306e83d01b6036",url:"./gallery/index.html"},{revision:"8febf9ba0da6fb683e5d6682f20c804a",url:"./gallery/kirbyimage/index.html"},{revision:"4421924a59bb597f75ecaff2d85db956",url:"./gallery/photos/index.html"},{revision:"2d78aaf4277ca44cc2f3b7bbf3ffb088",url:"./gallery/wallpaper/index.html"},{revision:"dbf9fd45231e71e15adab609f97caa79",url:"./index.html"},{revision:"260a5fc0ca50374a1bb11b1e74de8462",url:"./js/app-refresh.js"},{revision:"4161e4f81ad949ba121e5c04b729c196",url:"./js/crash_cheat.js"},{revision:"b81c1615ba7be5172eb014d0ec36aedf",url:"./js/cursor.js"},{revision:"1c7d6eb8f8b1a9e2a06c37906146eb84",url:"./js/main.js"},{revision:"e6a9c3f8fa43a7d3421169ea96eef44e",url:"./js/search/algolia.js"},{revision:"86e7fcbc5aa273e6c3d2c94b0054809b",url:"./js/search/local-search.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"5720a78dca20fab16f21914ae3ac0757",url:"./js/utils.js"},{revision:"f1c932790ec55934e04634fd752a3d8e",url:"./lib/blog-encrypt.js"},{revision:"40ff0b8838e62e5fca19993f93469da5",url:"./link/index.html"},{revision:"e897cd4831baf2e2412c8e82ad81b357",url:"./manifest.json"},{revision:"6e20cfeb13240aeda1a749b144eff4ac",url:"./page/2/index.html"},{revision:"c60eb3941d86970e6ad4ab75b25077a8",url:"./page/3/index.html"},{revision:"6802c8253048056fdeb4e8660d9c4b5a",url:"./PGP/index.html"},{revision:"c085d399d48f0e7fc954b7374cf186bd",url:"./posts/12e7f5da/index.html"},{revision:"e412f4bbdcb374b04b6178c334b034e8",url:"./posts/2bdd4eaf/index.html"},{revision:"7ffed6ac98d60324ecdf2cb8c538d673",url:"./posts/2fbba4ed/index.html"},{revision:"868e7b7d9ed08102f5b54c18a25ea210",url:"./posts/417dae5e/index.html"},{revision:"9a05d7abf7e9810cd4f1b4003b1e3fbc",url:"./posts/4d70a82d/index.html"},{revision:"c74cb2b1724fbec576c70168c27b8817",url:"./posts/51f7c2cb/index.html"},{revision:"1ced2fed4605653c8a04e64c713d4987",url:"./posts/58ae8d54/index.html"},{revision:"a4da245d4931a1f5808a4eeeb52d977f",url:"./posts/64b2bc9e/index.html"},{revision:"2713ad27d425bd9ec51a23a25765949b",url:"./posts/6b0c894/index.html"},{revision:"300bf35e48d0b42f75a0589f2e594888",url:"./posts/743f9c80/index.html"},{revision:"7e66faf2d534170c89ccd8e9816e49ea",url:"./posts/75f0fab2/index.html"},{revision:"7d8c0b50d125b83eea4d4edd7beccf8b",url:"./posts/7935321c/index.html"},{revision:"9bd8e28ca84ec959cd99102bd98c87b1",url:"./posts/8e165a5c/index.html"},{revision:"695fb6bab92f5a47c0177206061b857c",url:"./posts/919199f6/index.html"},{revision:"df211bcbb6bee9b1aaa8e58121cc8d9f",url:"./posts/9cb48aa5/index.html"},{revision:"3e71989a1e332df9c9c11cfc5faade20",url:"./posts/9e078f24/index.html"},{revision:"21b62360f2d68c3aad80b321790ff614",url:"./posts/a505f9a9/index.html"},{revision:"43690c4e2b70d1cc5da1c9de8be5e544",url:"./posts/a6366ad5/index.html"},{revision:"9ccd8496ea599d1182372cb929157141",url:"./posts/b0821049/index.html"},{revision:"31d271263a5565508f7b292a75027c77",url:"./posts/b36c6159/index.html"},{revision:"c7d9a04a8b78f5c963281c8f6437d88d",url:"./posts/cd1c3d2a/index.html"},{revision:"99ffbb4c22fe4b888143a5bae3744349",url:"./posts/d46d4e39/index.html"},{revision:"b7594cf8fdceba626cbcb007c89c5978",url:"./posts/dc790cfc/index.html"},{revision:"5c2e61422678af7f7fd639c5c5499d33",url:"./posts/e5477819/index.html"},{revision:"3e072e26392dbcea73fe059e8d9a69f7",url:"./posts/e9558acf/index.html"},{revision:"3b692ec6ab96c832bbab2ecb397449ff",url:"./posts/ea8a69ac/index.html"},{revision:"60e71fd6660d88c2777c86d628916e18",url:"./posts/eb6032e9/index.html"},{revision:"2d6bdf7c3861606db63fc8b3ede1b64c",url:"./posts/how2ask/index.html"},{revision:"c52c54ab0be536cf1d6aae4ab684e771",url:"./posts/ka_faq_cn/index.html"},{revision:"b4ed5723a00e365da325f3fd07292956",url:"./posts/ka_faq_en/index.html"},{revision:"61fba1e478d808efd3a46da2745af029",url:"./posts/ka_faq_tw/index.html"},{revision:"0cdd772b89dc1c3b313cc5f84d7d698d",url:"./posts/moekirby/index.html"},{revision:"04b5c2d526ab558d280afb8499fdc401",url:"./posts/moneydodo/index.html"},{revision:"2d45a7e81de9841e373ab822b0afea05",url:"./posts/notes/index.html"},{revision:"81c9cf54a79a80ddfcc39a232c797a14",url:"./posts/sophistry/index.html"},{revision:"1a323483ab1dbc6346469d2badf254e2",url:"./posts/szeer/index.html"},{revision:"029947b49643bdcc7f9c4e22fab6b942",url:"./posts/vpn/index.html"},{revision:"c1b8f20358e955b520fa665006cac180",url:"./steamgames/index.html"},{revision:"c49d6ba49d4fe82504594223ec691014",url:"./tags/宝塔面板/index.html"},{revision:"0c4997e167d26d728c426be215637b35",url:"./tags/编年史/index.html"},{revision:"aa741b80bb3034ac499d0ba8322d2849",url:"./tags/踩坑/index.html"},{revision:"7524ac50959f1cf90c8e8cf51e8955e4",url:"./tags/代理/index.html"},{revision:"01d5086fd4f7b87eb97ab5a0da75e77b",url:"./tags/读书/index.html"},{revision:"a3cb4cdcbb00c235f9ef88deff6c38a8",url:"./tags/读书无用论/index.html"},{revision:"4ae5514f7c40e0df4f20f312918d30b4",url:"./tags/更新日志/index.html"},{revision:"8bbd3992c950288190c47361386bd057",url:"./tags/环保/index.html"},{revision:"14be8c9dec471db56bec1b9ea42a9b77",url:"./tags/开往/index.html"},{revision:"1e4ad6f13c69ad7d42edd79dc4e5ea32",url:"./tags/看法/index.html"},{revision:"7b0a7c36cdbadf0a2fd2df920e7f6c3e",url:"./tags/酷Q/index.html"},{revision:"f2cfea82d8d70042dfe16219cc85c9e9",url:"./tags/弃用/index.html"},{revision:"b730f4d6fe126854decadb75d65e4bd4",url:"./tags/软件推荐/index.html"},{revision:"52ede4f4fc8bed95cf719237e4b7dd0f",url:"./tags/视频/index.html"},{revision:"d0c2de16f181c1825dff6d6dd9440146",url:"./tags/塑料产品/index.html"},{revision:"268cb369fc74a84b3c01693d671a22d8",url:"./tags/完美校园/index.html"},{revision:"89aef094fc831c7f212e00f6d964bcd7",url:"./tags/网站搭建/index.html"},{revision:"454c52e547b2540c25a0ef1c46c655ed",url:"./tags/为什么/index.html"},{revision:"ad0f555de654d4eb4db3efdf8db2c91f",url:"./tags/星之卡比-Wii/index.html"},{revision:"131da0010faf444db81b440d8b93d93b",url:"./tags/星之卡比/index.html"},{revision:"2ecba36880a56f4e103de8d3f3a5227b",url:"./tags/学习/index.html"},{revision:"c37fb4cb0eb5901b0326aeed6984a756",url:"./tags/游戏推荐/index.html"},{revision:"2138dabce717c656ede565748b769349",url:"./tags/Android/index.html"},{revision:"a2a58bb415df428845398e75ae1b8da8",url:"./tags/Dolphin-Emulator/index.html"},{revision:"8565e2dd1ae15ea7a69826e1b721f979",url:"./tags/FC/index.html"},{revision:"0911b2f3ce61489aea27a1322e52e3e3",url:"./tags/Fragment/index.html"},{revision:"4299ea998944680a52b38717d8a63065",url:"./tags/Git/index.html"},{revision:"83a85add806c9a01319807908c974ce3",url:"./tags/Hexo/index.html"},{revision:"5f03c8edb8cf075e9fda3a1a9d5c9490",url:"./tags/index.html"},{revision:"fe697061f3ae9372c9dcccfbd7c67035",url:"./tags/Kirby-Assistant/index.html"},{revision:"6a288a893d1f811c5b85f3a87d9639b2",url:"./tags/Kotlin/index.html"},{revision:"f1dcd4ced6e26863e00dd5f56b43c6fe",url:"./tags/LGBT/index.html"},{revision:"1171955293fcda73400991284d3914ee",url:"./tags/linux/index.html"},{revision:"e15f7d724ab0980ba571582a17179d45",url:"./tags/Material-Design-2/index.html"},{revision:"d91df4f78ac9d7e2ed8c4134a9a0d7e2",url:"./tags/Python/index.html"},{revision:"18974e5fb6b671ae9708016d9c2272c4",url:"./tags/ssh/index.html"},{revision:"c3fb53e087021086719f368408a2bee4",url:"./tags/ViewPager/index.html"},{revision:"0063d42625ac4bef411f29ad44c72d23",url:"./tags/VS-Code/index.html"},{revision:"3b05963a5f763449e30787721cd6092e",url:"./tags/Wii-模拟器/index.html"},{revision:"23acf603e715b4904243226392568264",url:"./tags/Windows/index.html"},{revision:"9da7ed036436f95747032e375c80a7a9",url:"./tags/WordPress/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();