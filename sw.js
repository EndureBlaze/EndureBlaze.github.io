const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"bf3820f6e6180fd5da22ccd3cc62d31b",url:"./404.html"},{revision:"11797920cbacfd2ce435a50cb5ad2f9b",url:"./about/index.html"},{revision:"330682e20dfa2792dab85e5b0409b458",url:"./archives/2019/07/index.html"},{revision:"1eb8189a4a5039b085144e1f70c35ec0",url:"./archives/2019/08/index.html"},{revision:"b255d9ce9f81e890a5811f22a3532bb9",url:"./archives/2019/09/index.html"},{revision:"f087fda5139faa708798cd3506dc3da9",url:"./archives/2019/10/index.html"},{revision:"4a173db72cc972cb04baaddf523c60cf",url:"./archives/2019/11/index.html"},{revision:"8f61dad58d893ed9448e4005c64cde63",url:"./archives/2019/index.html"},{revision:"8abb230fbed3fd82630c8a8658f07c2e",url:"./archives/2019/page/2/index.html"},{revision:"c52b72d51dfc865803dc0fac7446ff2f",url:"./archives/2020/02/index.html"},{revision:"fb0925bbc856abac069a6ceafba5a089",url:"./archives/2020/03/index.html"},{revision:"41e33631cfc17af802a9cb2303715655",url:"./archives/2020/04/index.html"},{revision:"f4989f7d08c799c77d21e51c7f894bac",url:"./archives/2020/05/index.html"},{revision:"ea6f210266dba14a102e356848867d6e",url:"./archives/2020/06/index.html"},{revision:"4388cb6ad586a038c2a4ac926909e7a6",url:"./archives/2020/07/index.html"},{revision:"4646e6e413543b8f33f7d6c27e988b2f",url:"./archives/2020/09/index.html"},{revision:"b2181a847ebddb55c920fee0411ba99e",url:"./archives/2020/11/index.html"},{revision:"42b40353a75baccdff4ad44e885280fc",url:"./archives/2020/index.html"},{revision:"85dc5e735f4eb09aea3f1bd95841acc1",url:"./archives/2020/page/2/index.html"},{revision:"bb2f6766409b11269b3164db83926d00",url:"./archives/index.html"},{revision:"a7660abd0f12a478a6260f1c89d2238b",url:"./archives/page/2/index.html"},{revision:"aa1ecc1ddc9a72b3135a465b1607819e",url:"./archives/page/3/index.html"},{revision:"a5beaeb549fce144a556e2bab3702310",url:"./categories/编程/index.html"},{revision:"3116dfe63aa5063bc11ea5a4794a6cfd",url:"./categories/技术记录/index.html"},{revision:"c6839e2a1e5429e5489f75420def898a",url:"./categories/随手记/index.html"},{revision:"5ae412b33644b76a8c413070239fbcf0",url:"./categories/碎碎念/index.html"},{revision:"a0885bc9fb8c807e0b0fde06b9ddf6ae",url:"./categories/我的-Android-应用/index.html"},{revision:"a8572cc6146f8e7fb500ade3830341e0",url:"./categories/星之卡比系列教程/index.html"},{revision:"126b02a4b89c58e9ee6ca1d7146e7590",url:"./categories/正经文字/index.html"},{revision:"955c76a0d1e135e2dc1657d097927ab6",url:"./categories/资源/index.html"},{revision:"d0deb2a77e004c610d219e03a5df9632",url:"./categories/index.html"},{revision:"453499505643e94926714b775af9cec3",url:"./contact/index.html"},{revision:"7bfd5a16c64e2eb8602e1651f29756d1",url:"./css/app-refresh.css"},{revision:"8ee6168510c2d6a12dbdce06290a334b",url:"./css/black.css"},{revision:"ee21c7086a59d52b97a9e7b6240a9414",url:"./css/blog-encrypt.css"},{revision:"c27c5e199127105dd8d9462af6aa412c",url:"./css/font.css"},{revision:"e175de66b083dfbad3f4120f67ab876d",url:"./css/heimu.css"},{revision:"592404ea6752fa578d5d9d8a7656e653",url:"./css/hint.min.css"},{revision:"d538c0fd542657ee1f2e0e1ca641af00",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"a04757804840e4e870b5310e37fcbc37",url:"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{revision:"c318a45b45be019ffdeb8c9ac6a41283",url:"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{revision:"045b7ab8d749812c052e9eca1ec5db07",url:"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{revision:"c3c08fc9f418f827eb3eed1b0ebe48c8",url:"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{revision:"06bf22283c831651e111b08000e502fc",url:"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{revision:"dd0da6de6c2340f4bf0aa4108f98a63f",url:"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{revision:"54b6827550ef145b4c1968518a96070f",url:"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{revision:"3eacd63796de4b39bc102dae7b143ca5",url:"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{revision:"6bbebe83b44691df852535f844a33bdb",url:"./gallery/index.html"},{revision:"67d5032854bd4502d6fdea461e9ffd79",url:"./gallery/kirbyimage/index.html"},{revision:"cd0cfde6e03c70cbb867f1fc213eb5a9",url:"./gallery/photos/index.html"},{revision:"86858eb84741a10f5d36019d9bc2c8ae",url:"./gallery/wallpaper/index.html"},{revision:"b8bfff475b2466ed37c89e755bf67975",url:"./index.html"},{revision:"260a5fc0ca50374a1bb11b1e74de8462",url:"./js/app-refresh.js"},{revision:"4161e4f81ad949ba121e5c04b729c196",url:"./js/crash_cheat.js"},{revision:"1c7d6eb8f8b1a9e2a06c37906146eb84",url:"./js/main.js"},{revision:"e6a9c3f8fa43a7d3421169ea96eef44e",url:"./js/search/algolia.js"},{revision:"86e7fcbc5aa273e6c3d2c94b0054809b",url:"./js/search/local-search.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"5720a78dca20fab16f21914ae3ac0757",url:"./js/utils.js"},{revision:"f1c932790ec55934e04634fd752a3d8e",url:"./lib/blog-encrypt.js"},{revision:"d34e83b78b4320754faf6fa253321037",url:"./link/index.html"},{revision:"e897cd4831baf2e2412c8e82ad81b357",url:"./manifest.json"},{revision:"dcd320ac566161797df4783d1272de18",url:"./page/2/index.html"},{revision:"c7df8ba1cb2120bf94af0832733e27a8",url:"./page/3/index.html"},{revision:"fd7a1cb91c0d5f84e93f3f32c70db696",url:"./PGP/index.html"},{revision:"7f51873ffab63cbdab2c290d44f9112b",url:"./posts/12e7f5da/index.html"},{revision:"98b3f249820b883d86f79fa512561ebb",url:"./posts/2bdd4eaf/index.html"},{revision:"0ce95d6a7291c6ad7d6bf4c62482dbe2",url:"./posts/2fbba4ed/index.html"},{revision:"20f75356a00bd4384e4c52f5f82eb264",url:"./posts/417dae5e/index.html"},{revision:"20e841c064a2e3a2cad5304a12711ec8",url:"./posts/4d70a82d/index.html"},{revision:"01135836e383478055e6d9342120a238",url:"./posts/51f7c2cb/index.html"},{revision:"7c4ece40b12d2b53c8ef098ba0d5c611",url:"./posts/58ae8d54/index.html"},{revision:"b6d6d7ec104cab9378351ec28a89d1d1",url:"./posts/64b2bc9e/index.html"},{revision:"0765744ae1649c325b99ed11b65cf69d",url:"./posts/6b0c894/index.html"},{revision:"d562ea9251c8ea602d0b8a5e2adf8f66",url:"./posts/743f9c80/index.html"},{revision:"0b07d03c2738e5986fc872199e907404",url:"./posts/75f0fab2/index.html"},{revision:"dbac19647e6d7673a30b760546f335e4",url:"./posts/7935321c/index.html"},{revision:"b96dfcb31f1805e2573a9c9bf0069add",url:"./posts/8e165a5c/index.html"},{revision:"bf588fed19d8417959943e01e691c7ca",url:"./posts/919199f6/index.html"},{revision:"394266cb6eb9dde934af254fcde87511",url:"./posts/9cb48aa5/index.html"},{revision:"ad09cf1c26391023042cdba068f5945c",url:"./posts/9d31c170/index.html"},{revision:"6b6c8a4a7927408d9229dd4c9e88efc0",url:"./posts/9e078f24/index.html"},{revision:"8a82a1a6fb2793c2b0e5550334c1dda1",url:"./posts/a505f9a9/index.html"},{revision:"2489eb78727fd38792e90179dcf70f25",url:"./posts/a6366ad5/index.html"},{revision:"22401eaa20e4958c1dd7bada2dcd8117",url:"./posts/b0821049/index.html"},{revision:"36e3917b210e60375b223dbbdb021a13",url:"./posts/b36c6159/index.html"},{revision:"d4dbc31665a202965f653769186f16d6",url:"./posts/cd1c3d2a/index.html"},{revision:"ad11c6daf0a7888c69deb65bca72fa8d",url:"./posts/d46d4e39/index.html"},{revision:"d1f4199efd39ceee8ac4e0aac99d6b59",url:"./posts/dc790cfc/index.html"},{revision:"1f9654adc7b07d7c543eb3cb80cc79af",url:"./posts/e5477819/index.html"},{revision:"bf17aaecc7196f1781af78ae26abbb48",url:"./posts/e9558acf/index.html"},{revision:"db298fec0e4487cf0fd6e3c35243ef74",url:"./posts/ea8a69ac/index.html"},{revision:"3e09d67557e09b71417686a0b3b2cbbe",url:"./posts/how2ask/index.html"},{revision:"e4d73e60858e0413bf3975b4f0c6a1c1",url:"./posts/ka_faq_cn/index.html"},{revision:"4423968438a872d60f10560b6e5348a0",url:"./posts/ka_faq_en/index.html"},{revision:"d734fa0eeb18a9606a83db9870c1b7ad",url:"./posts/ka_faq_tw/index.html"},{revision:"98d9a478c7ff977864d36f77c27e4a0d",url:"./posts/moekirby/index.html"},{revision:"2ed69e71e95868d1db391162833529e4",url:"./posts/moneydodo/index.html"},{revision:"a72bf0a35f0806805c44f09095430d6e",url:"./posts/notes/index.html"},{revision:"e9f3a5610eba602662275d0f52843352",url:"./posts/szeer/index.html"},{revision:"dae617adfc80519da1451b53c1d39a3d",url:"./posts/vpn/index.html"},{revision:"97a225003ddcda3169438ae0de3c4705",url:"./steamgames/index.html"},{revision:"48f12440919fdd6cafb0030d91ada59e",url:"./tags/宝塔面板/index.html"},{revision:"d6d2e3c009291aba081725fc1b760882",url:"./tags/编年史/index.html"},{revision:"f2360dd6a3ac7bd7089eb052745062d8",url:"./tags/踩坑/index.html"},{revision:"34d86d3f93ee49cec2f0c6c91cc2d45e",url:"./tags/代理/index.html"},{revision:"39a736255b4236752aba368afa2435a3",url:"./tags/读书/index.html"},{revision:"2ce98eb26c86879c35652c891dc130c3",url:"./tags/读书无用论/index.html"},{revision:"779fda8fb41ed15860628105a84e0626",url:"./tags/更新日志/index.html"},{revision:"87821d2508c5915b3a28bcdb0b6e846f",url:"./tags/环保/index.html"},{revision:"7bdf45e257b7f82209b8c51e35e7bb93",url:"./tags/开往/index.html"},{revision:"8f9bbea3c90b7079bcd6fa7837ba9e08",url:"./tags/看法/index.html"},{revision:"e61b9adfe42a8cee8d88481cf621c0d5",url:"./tags/酷Q/index.html"},{revision:"14d192e025e0d7b7ec59b48d0adce1ea",url:"./tags/弃用/index.html"},{revision:"9aeb3ca216442e558a12eba0cadaaac8",url:"./tags/软件推荐/index.html"},{revision:"4535777e2a37be7efc0c778a5495e0e2",url:"./tags/视频/index.html"},{revision:"1c225baccc09e6c06c55294270a7816c",url:"./tags/塑料产品/index.html"},{revision:"0a23e2043c79e83018d68162b01e24e1",url:"./tags/网站搭建/index.html"},{revision:"792bc525ea0a3fec68e932f57da1a3b2",url:"./tags/为什么/index.html"},{revision:"ea910701415edfd29d28849cd7b7c6c3",url:"./tags/星之卡比-Wii/index.html"},{revision:"3c8b54d8b4f4749bd706bde79f68b977",url:"./tags/星之卡比/index.html"},{revision:"b0e23a955ae1337ccd77f372535cea89",url:"./tags/学习/index.html"},{revision:"98e4fb3bf7e96323ec4ab0c8cc8d2242",url:"./tags/游戏推荐/index.html"},{revision:"a892697e80e817f39219f1fd75ac277d",url:"./tags/Android/index.html"},{revision:"51bb0b4215b7f4a586e9bd28ea6fb262",url:"./tags/Dolphin-Emulator/index.html"},{revision:"10350c2347a4476fe5cb3a60cffa33cb",url:"./tags/FC/index.html"},{revision:"29b37d3cc54f6b9fbb347093983f6b17",url:"./tags/Fragment/index.html"},{revision:"1aaf15efbbcb500144635778c766adf9",url:"./tags/Git/index.html"},{revision:"e75b0d873a0e15fed571610c2c90e0f9",url:"./tags/Hexo/index.html"},{revision:"2250f61fe916746e8d5e2e599317d076",url:"./tags/index.html"},{revision:"e0592546ec747ddf8c9effe88bca33ee",url:"./tags/Kirby-Assistant/index.html"},{revision:"8e572529ef2b198cc19187968cec9b07",url:"./tags/Kotlin/index.html"},{revision:"71adefc335d8a8cd05f95c1d5b519491",url:"./tags/LGBT/index.html"},{revision:"9a835882b8d2604289246be238c6b241",url:"./tags/linux/index.html"},{revision:"a2e5a35860f0fa8e898c86727b17b773",url:"./tags/Material-Design-2/index.html"},{revision:"dc53bd31e7d16e715f2120418c6e6e02",url:"./tags/Python/index.html"},{revision:"3033b5a421772b2447eba01ca665abfd",url:"./tags/ssh/index.html"},{revision:"db11ac829f0e7a0bc88b07efb7f29223",url:"./tags/ViewPager/index.html"},{revision:"60bdae0882abf1df14cd4b843c39b98e",url:"./tags/VS-Code/index.html"},{revision:"e0bea1d37c19baed7cb829780dae8e19",url:"./tags/Wii-模拟器/index.html"},{revision:"f00bc6f725d48afa95873a684b68acad",url:"./tags/Windows/index.html"},{revision:"8a4893057d469f793c95f88450a26786",url:"./tags/WordPress/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();