const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"ec3ae526c72fab002dd96b32204e7558",url:"./404.html"},{revision:"8835031a28d824836df5fc597dc215bc",url:"./about/index.html"},{revision:"5eb5fbb2c2288c362b24d74ad5e73230",url:"./archives/2019/07/index.html"},{revision:"aa0ed0f1c386a7a708a15e1dba34ca23",url:"./archives/2019/08/index.html"},{revision:"3a5414ba124a8df973a915dc885f2770",url:"./archives/2019/09/index.html"},{revision:"2b6e7d7bd59c348111158cc7dc152f0a",url:"./archives/2019/10/index.html"},{revision:"a09e6ccd609a85584c58522ad44f5b47",url:"./archives/2019/11/index.html"},{revision:"273119a9dafe6d4964d3bf222180f7a3",url:"./archives/2019/index.html"},{revision:"4a26f0a3ed3bc67c463c0c36342b2ef0",url:"./archives/2019/page/2/index.html"},{revision:"7d7a8308bf5ad0f91d3fb88a53654830",url:"./archives/2020/02/index.html"},{revision:"4b8e345e4dbafb43827a744767caf5a6",url:"./archives/2020/03/index.html"},{revision:"1ce3593a59786a131b946d276723a4b2",url:"./archives/2020/04/index.html"},{revision:"466845d91e5b113dd7ecb487567028e4",url:"./archives/2020/05/index.html"},{revision:"9192bca9127eedb965ec72ab61b2bd5d",url:"./archives/2020/06/index.html"},{revision:"78dcf0ec5174f7e4e960dc5c2fbc0d24",url:"./archives/2020/07/index.html"},{revision:"d1cb25eb7a9af3c58b71465145556eff",url:"./archives/2020/09/index.html"},{revision:"97dac9b18970cd543c25ec32d3a7a4c2",url:"./archives/2020/11/index.html"},{revision:"6f892c64ffa148a9ce1e5ad34b8758a3",url:"./archives/2020/index.html"},{revision:"1083c133804117ede43ec7fe52239a4f",url:"./archives/2020/page/2/index.html"},{revision:"d983fb4aa15be4e5017cc64e89468ec2",url:"./archives/2021/01/index.html"},{revision:"5625384be253f4a68e9b58209119421b",url:"./archives/2021/index.html"},{revision:"c47823fb108d9618933a6a9d82574c11",url:"./archives/index.html"},{revision:"d1e6439ddb309ceb1ff749aff1b55848",url:"./archives/page/2/index.html"},{revision:"07e0bdf34c570410e0aa9b4d3a3a44b5",url:"./archives/page/3/index.html"},{revision:"976758edf759330fdad30a6ba743b3d1",url:"./categories/编程/index.html"},{revision:"0d6919a9e0de3755068afc86162b3f5f",url:"./categories/技术记录/index.html"},{revision:"816b090369474f95795a89b1dee0a9a0",url:"./categories/随手记/index.html"},{revision:"a54e567e9cae4106ea25532707978591",url:"./categories/碎碎念/index.html"},{revision:"3af59f66f8b264fd256dbe7fdb555749",url:"./categories/我的-Android-应用/index.html"},{revision:"5d2822daca98a70edba18398e968e24f",url:"./categories/星之卡比系列教程/index.html"},{revision:"b5251348ab6fb2e042322b3345415c83",url:"./categories/正经文字/index.html"},{revision:"7aa5c403d445718dbf993f21897aae1a",url:"./categories/资源/index.html"},{revision:"96006b462bed6b7c6eeffc9a5af2bf95",url:"./categories/index.html"},{revision:"06e295e52b3a7367b270e71528006cff",url:"./contact/index.html"},{revision:"7bfd5a16c64e2eb8602e1651f29756d1",url:"./css/app-refresh.css"},{revision:"8ee6168510c2d6a12dbdce06290a334b",url:"./css/black.css"},{revision:"ee21c7086a59d52b97a9e7b6240a9414",url:"./css/blog-encrypt.css"},{revision:"c27c5e199127105dd8d9462af6aa412c",url:"./css/font.css"},{revision:"e175de66b083dfbad3f4120f67ab876d",url:"./css/heimu.css"},{revision:"592404ea6752fa578d5d9d8a7656e653",url:"./css/hint.min.css"},{revision:"d538c0fd542657ee1f2e0e1ca641af00",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"a04757804840e4e870b5310e37fcbc37",url:"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{revision:"c318a45b45be019ffdeb8c9ac6a41283",url:"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{revision:"045b7ab8d749812c052e9eca1ec5db07",url:"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{revision:"c3c08fc9f418f827eb3eed1b0ebe48c8",url:"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{revision:"06bf22283c831651e111b08000e502fc",url:"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{revision:"dd0da6de6c2340f4bf0aa4108f98a63f",url:"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{revision:"54b6827550ef145b4c1968518a96070f",url:"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{revision:"3eacd63796de4b39bc102dae7b143ca5",url:"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{revision:"6fbac74bc95606963d06d34b543ffa41",url:"./gallery/index.html"},{revision:"51f226e31217eff48116629032ee251c",url:"./gallery/kirbyimage/index.html"},{revision:"aa1b06a52743ab1c5362fafdade8db30",url:"./gallery/photos/index.html"},{revision:"96130c6fe50d64dd2d849e84e3b84fe9",url:"./gallery/wallpaper/index.html"},{revision:"c97b3b0353f8df9c13fedd795c905a29",url:"./index.html"},{revision:"260a5fc0ca50374a1bb11b1e74de8462",url:"./js/app-refresh.js"},{revision:"4161e4f81ad949ba121e5c04b729c196",url:"./js/crash_cheat.js"},{revision:"b81c1615ba7be5172eb014d0ec36aedf",url:"./js/cursor.js"},{revision:"1c7d6eb8f8b1a9e2a06c37906146eb84",url:"./js/main.js"},{revision:"e6a9c3f8fa43a7d3421169ea96eef44e",url:"./js/search/algolia.js"},{revision:"86e7fcbc5aa273e6c3d2c94b0054809b",url:"./js/search/local-search.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"5720a78dca20fab16f21914ae3ac0757",url:"./js/utils.js"},{revision:"f1c932790ec55934e04634fd752a3d8e",url:"./lib/blog-encrypt.js"},{revision:"2a00d490dee7bd1e821bfb1c52f3a778",url:"./link/index.html"},{revision:"e897cd4831baf2e2412c8e82ad81b357",url:"./manifest.json"},{revision:"ca9f430f66ef8b79ed560959a5d40101",url:"./page/2/index.html"},{revision:"9f20c6907b71a812b21b29ef07da1d6a",url:"./page/3/index.html"},{revision:"33bb8b26d40b01484fbf6e6692fbb7c9",url:"./PGP/index.html"},{revision:"c085d399d48f0e7fc954b7374cf186bd",url:"./posts/12e7f5da/index.html"},{revision:"e412f4bbdcb374b04b6178c334b034e8",url:"./posts/2bdd4eaf/index.html"},{revision:"7ffed6ac98d60324ecdf2cb8c538d673",url:"./posts/2fbba4ed/index.html"},{revision:"868e7b7d9ed08102f5b54c18a25ea210",url:"./posts/417dae5e/index.html"},{revision:"9a05d7abf7e9810cd4f1b4003b1e3fbc",url:"./posts/4d70a82d/index.html"},{revision:"5655ab92829eeb706eb9ca0f5e10fbb5",url:"./posts/51f7c2cb/index.html"},{revision:"1ced2fed4605653c8a04e64c713d4987",url:"./posts/58ae8d54/index.html"},{revision:"a4da245d4931a1f5808a4eeeb52d977f",url:"./posts/64b2bc9e/index.html"},{revision:"b1273da08a34a513de9580e162ce31cd",url:"./posts/6b0c894/index.html"},{revision:"300bf35e48d0b42f75a0589f2e594888",url:"./posts/743f9c80/index.html"},{revision:"7e66faf2d534170c89ccd8e9816e49ea",url:"./posts/75f0fab2/index.html"},{revision:"7d8c0b50d125b83eea4d4edd7beccf8b",url:"./posts/7935321c/index.html"},{revision:"9bd8e28ca84ec959cd99102bd98c87b1",url:"./posts/8e165a5c/index.html"},{revision:"695fb6bab92f5a47c0177206061b857c",url:"./posts/919199f6/index.html"},{revision:"df211bcbb6bee9b1aaa8e58121cc8d9f",url:"./posts/9cb48aa5/index.html"},{revision:"98bc1e88af1458108e7ddd09d2ba4664",url:"./posts/9e078f24/index.html"},{revision:"21b62360f2d68c3aad80b321790ff614",url:"./posts/a505f9a9/index.html"},{revision:"43690c4e2b70d1cc5da1c9de8be5e544",url:"./posts/a6366ad5/index.html"},{revision:"9ccd8496ea599d1182372cb929157141",url:"./posts/b0821049/index.html"},{revision:"5d42e8283a57f385c84dc94983a55aa0",url:"./posts/b36c6159/index.html"},{revision:"c7d9a04a8b78f5c963281c8f6437d88d",url:"./posts/cd1c3d2a/index.html"},{revision:"99ffbb4c22fe4b888143a5bae3744349",url:"./posts/d46d4e39/index.html"},{revision:"b7594cf8fdceba626cbcb007c89c5978",url:"./posts/dc790cfc/index.html"},{revision:"5c2e61422678af7f7fd639c5c5499d33",url:"./posts/e5477819/index.html"},{revision:"3e072e26392dbcea73fe059e8d9a69f7",url:"./posts/e9558acf/index.html"},{revision:"3b692ec6ab96c832bbab2ecb397449ff",url:"./posts/ea8a69ac/index.html"},{revision:"1662e490abe24487d4109c235ce75248",url:"./posts/eb6032e9/index.html"},{revision:"2d6bdf7c3861606db63fc8b3ede1b64c",url:"./posts/how2ask/index.html"},{revision:"c52c54ab0be536cf1d6aae4ab684e771",url:"./posts/ka_faq_cn/index.html"},{revision:"b4ed5723a00e365da325f3fd07292956",url:"./posts/ka_faq_en/index.html"},{revision:"61fba1e478d808efd3a46da2745af029",url:"./posts/ka_faq_tw/index.html"},{revision:"0cdd772b89dc1c3b313cc5f84d7d698d",url:"./posts/moekirby/index.html"},{revision:"04b5c2d526ab558d280afb8499fdc401",url:"./posts/moneydodo/index.html"},{revision:"2d45a7e81de9841e373ab822b0afea05",url:"./posts/notes/index.html"},{revision:"81c9cf54a79a80ddfcc39a232c797a14",url:"./posts/sophistry/index.html"},{revision:"1a323483ab1dbc6346469d2badf254e2",url:"./posts/szeer/index.html"},{revision:"029947b49643bdcc7f9c4e22fab6b942",url:"./posts/vpn/index.html"},{revision:"c49bd2392da9303a8d626b302c0ae942",url:"./steamgames/index.html"},{revision:"56eb412d069254050e58c62b1fd11b3a",url:"./tags/宝塔面板/index.html"},{revision:"361508b7ea939c1230e8b8d4a5e42b7e",url:"./tags/编年史/index.html"},{revision:"4bc9fe98ff42c853108a77b706220a7b",url:"./tags/踩坑/index.html"},{revision:"55482c017eb95c08b870a7599d135669",url:"./tags/代理/index.html"},{revision:"5d11e33557b81a2537f40194d623d8b9",url:"./tags/读书/index.html"},{revision:"2118f636bb1a67afc79afcb33e2ca932",url:"./tags/读书无用论/index.html"},{revision:"a7e48b6bd20931bdb1262f1447c55d12",url:"./tags/更新日志/index.html"},{revision:"010f3a83da490a5612dcaf9bf6e6004c",url:"./tags/环保/index.html"},{revision:"ef78dbfcecaa5606169d00b705d4bf98",url:"./tags/开往/index.html"},{revision:"bc623ad444f6dfae1f34e48b82018895",url:"./tags/看法/index.html"},{revision:"2a8bceea8ac99f0c8dc14760cf00bf59",url:"./tags/酷Q/index.html"},{revision:"3a781c4c86cb69389f5026325bef7a01",url:"./tags/弃用/index.html"},{revision:"c009a5f5ecef5086b30e1266e962d25e",url:"./tags/软件推荐/index.html"},{revision:"61447528efa4922c5a312b51bc12307a",url:"./tags/视频/index.html"},{revision:"634029868808150261d487b44280dff9",url:"./tags/塑料产品/index.html"},{revision:"a41a3068fe3a2d49cfaa11ce728718c7",url:"./tags/完美校园/index.html"},{revision:"ed110bd711f907ad2743387701211380",url:"./tags/网站搭建/index.html"},{revision:"d17c8e0e085708c70a1a8c8781b50e22",url:"./tags/为什么/index.html"},{revision:"e822898b2c88399f9358701c2124ba37",url:"./tags/星之卡比-Wii/index.html"},{revision:"e04a03beeabd75158fdf1411ea8c3ad3",url:"./tags/星之卡比/index.html"},{revision:"d6e80c9bb824a86fc457f1b768004c9c",url:"./tags/学习/index.html"},{revision:"a6311e4e63672083c2827d40e486caae",url:"./tags/游戏推荐/index.html"},{revision:"fce3288ebcbdd0d74beaf2b5b2f1f471",url:"./tags/Android/index.html"},{revision:"84f9f4e612367933bf46997d865210d4",url:"./tags/Dolphin-Emulator/index.html"},{revision:"66f74fbbb4e3fc9519de87964719882a",url:"./tags/FC/index.html"},{revision:"59993600a71d44675fc31ba14c0e6f58",url:"./tags/Fragment/index.html"},{revision:"773ef6b8c99111159e4a93d05f157107",url:"./tags/Git/index.html"},{revision:"b7acc83d81ce31221c2db6c0a40abfd0",url:"./tags/Hexo/index.html"},{revision:"9f1f9f8b5fbdcdbbd8d7b4074d8f394b",url:"./tags/index.html"},{revision:"e1e85c7fa1834d5c4cf6b1110e044a1d",url:"./tags/Kirby-Assistant/index.html"},{revision:"db034c76421d342b4ee899e4c9ec187f",url:"./tags/Kotlin/index.html"},{revision:"acf56ef140df5124e26a79a9319e9cbc",url:"./tags/LGBT/index.html"},{revision:"93dd5deb8a26cd269e6b6baf90d3c453",url:"./tags/linux/index.html"},{revision:"5c8770c388d7348265a1a18a890b2e93",url:"./tags/Material-Design-2/index.html"},{revision:"c12e9439b1b349dd92dfdb2b9665cdf3",url:"./tags/Python/index.html"},{revision:"f1bb898e14eff85df0ce69cef13dd271",url:"./tags/ssh/index.html"},{revision:"1ae7ce2e4a2754f6fe0e6842cab156b5",url:"./tags/ViewPager/index.html"},{revision:"c5900b4c0448d538b7424bf7ef232f3a",url:"./tags/VS-Code/index.html"},{revision:"c7ad2afb4cc602daf461b02ffc72429f",url:"./tags/Wii-模拟器/index.html"},{revision:"a33d826d6cbab8d3e20b2743ff95710e",url:"./tags/Windows/index.html"},{revision:"840549ecebde132da0dafeab26ed1550",url:"./tags/WordPress/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();