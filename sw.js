const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"399952dafd7af3a04b463e046abd820f","url":"./about/index.html"},{"revision":"25fc64c897e1238e3b476d0a5e6b7a5b","url":"./archives/2019/07/index.html"},{"revision":"b0eea68bb27bdccd3090caecda8ff68c","url":"./archives/2019/08/index.html"},{"revision":"3504622376fdf12c9beb26361b5323cf","url":"./archives/2019/09/index.html"},{"revision":"27034151cc40b2228371e95f5c9105f3","url":"./archives/2019/10/index.html"},{"revision":"64dc888e7482b39d38a146bdd7035278","url":"./archives/2019/11/index.html"},{"revision":"1bf41f04a3b99043a46861e4d0870aae","url":"./archives/2019/index.html"},{"revision":"7fa2974c529543b2956cf2a3f50f835f","url":"./archives/2019/page/2/index.html"},{"revision":"6d66eb7963da7f351811e048c06986e5","url":"./archives/2020/02/index.html"},{"revision":"61c1e5acca4fb58ba1a53d984fc1f2e6","url":"./archives/2020/03/index.html"},{"revision":"0ec807f9de8e6da5981d2d25c1facad9","url":"./archives/2020/04/index.html"},{"revision":"f86f33e5d92e07d9be3d9c0969cf106a","url":"./archives/2020/05/index.html"},{"revision":"ac28144349acfd1d1a850dbb985291a6","url":"./archives/2020/06/index.html"},{"revision":"8aa37b377543d38ec93a29a7b7939a1c","url":"./archives/2020/07/index.html"},{"revision":"422b9ee3beb471482979bcdc4ae7f47e","url":"./archives/2020/09/index.html"},{"revision":"7f8ed999f9d21e0a59edc68d979a3bf0","url":"./archives/2020/11/index.html"},{"revision":"7061091f47fb57021ddc8ef93b25f64e","url":"./archives/2020/index.html"},{"revision":"3e64dbb2e7abb0af77884870b20bafb1","url":"./archives/2020/page/2/index.html"},{"revision":"8861a2e4a807003ae0e50465fdd5c0b7","url":"./archives/index.html"},{"revision":"477681e1f43672da1894c3871e4f8591","url":"./archives/page/2/index.html"},{"revision":"11bbc2a6978fcd3b658e07ccb15470ad","url":"./archives/page/3/index.html"},{"revision":"7f00f78c6224f26d13811c9ebe9be6c8","url":"./categories/编程/index.html"},{"revision":"a2d5c76d258c117dc4ac83900ca93345","url":"./categories/技术记录/index.html"},{"revision":"58ab813bb84945bb81ef141d74fb112b","url":"./categories/随手记/index.html"},{"revision":"0546ea19484956c44028bf1eab6b1151","url":"./categories/碎碎念/index.html"},{"revision":"b20272c452f7d94bdf2ee78986d75c78","url":"./categories/我的-Android-应用/index.html"},{"revision":"78a2f20ec3c77694cef43f7704425a00","url":"./categories/星之卡比系列教程/index.html"},{"revision":"bbc5ab5b15c5fa2d53814fa15b5a4622","url":"./categories/正经文字/index.html"},{"revision":"52087b1e88d5fb8ce7fb325ccb8be10d","url":"./categories/资源/index.html"},{"revision":"ba162e10208d96783d7fd9a8db04df19","url":"./categories/index.html"},{"revision":"f2de8130a0e40596f0febe8e6439cc22","url":"./contact/index.html"},{"revision":"7bfd5a16c64e2eb8602e1651f29756d1","url":"./css/app-refresh.css"},{"revision":"8ee6168510c2d6a12dbdce06290a334b","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"c27c5e199127105dd8d9462af6aa412c","url":"./css/font.css"},{"revision":"e175de66b083dfbad3f4120f67ab876d","url":"./css/heimu.css"},{"revision":"8a864fa664a43a77ddf9478c21fd9fd0","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"4cbdcedcf00d23f25f44cac445ed57eb","url":"./gallery/index.html"},{"revision":"5bd5eeb2602013e07a990a2da63932b3","url":"./gallery/kirbyimage/index.html"},{"revision":"30a7a6a192bf763be48bdea59df45f6a","url":"./gallery/photos/index.html"},{"revision":"accbfac4274ba6f4469ada0ac314c168","url":"./gallery/wallpaper/index.html"},{"revision":"6d37f88f26818428bd05354309ff949c","url":"./index.html"},{"revision":"260a5fc0ca50374a1bb11b1e74de8462","url":"./js/app-refresh.js"},{"revision":"4161e4f81ad949ba121e5c04b729c196","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"f5ea60ac3ab48ea888950443634df7d5","url":"./link/index.html"},{"revision":"e897cd4831baf2e2412c8e82ad81b357","url":"./manifest.json"},{"revision":"27fe90b3699b26fd1c9e638a77a7e351","url":"./page/2/index.html"},{"revision":"7879b5dc8a26eeabdfa520cb51f7e1b5","url":"./page/3/index.html"},{"revision":"768ca17232f69bb9be984ebbd563145c","url":"./PGP/index.html"},{"revision":"9fa69308b330153caaa516ee243af565","url":"./posts/12e7f5da/index.html"},{"revision":"68068020ff5255db7f3b1f2490eb72fb","url":"./posts/2bdd4eaf/index.html"},{"revision":"d92cd770014ac184dce94ee75e8dea16","url":"./posts/2fbba4ed/index.html"},{"revision":"3dc06ca1a1ef7fa48fc3cf9ea5cfc0a0","url":"./posts/417dae5e/index.html"},{"revision":"945107168695b43bb10996eeb6ba8a4e","url":"./posts/4d70a82d/index.html"},{"revision":"495b43bb7dcd62819399aecac3efe6f1","url":"./posts/51f7c2cb/index.html"},{"revision":"15da78a34564fef124719f0c590dfcc5","url":"./posts/58ae8d54/index.html"},{"revision":"cbc219b1c6ba89bfb79b1ce405344465","url":"./posts/64b2bc9e/index.html"},{"revision":"d34cc9d1942c7288c39e7236fe950a66","url":"./posts/6b0c894/index.html"},{"revision":"6d5f8a1b8807925532b720483989de03","url":"./posts/743f9c80/index.html"},{"revision":"a55cf6515fac6c9a720cfcc29cc93ed1","url":"./posts/75f0fab2/index.html"},{"revision":"447829588b166ff9ddcc0415f6e26bec","url":"./posts/7935321c/index.html"},{"revision":"cb00d6fb2323c5fbba240763b43ae381","url":"./posts/8e165a5c/index.html"},{"revision":"ceb18b7eccbd9bf1c96e8749ef120449","url":"./posts/919199f6/index.html"},{"revision":"dd4b3b5eaea42d054258c9484d11e2b9","url":"./posts/9cb48aa5/index.html"},{"revision":"4a640994e3fb900b61a082b52354a894","url":"./posts/9e078f24/index.html"},{"revision":"08c1d7a4541e7f8083ddff00eac1b727","url":"./posts/a505f9a9/index.html"},{"revision":"cec77d1e858291585fb8662af4aaa806","url":"./posts/a6366ad5/index.html"},{"revision":"6fb6113555cb339f62673c204fd2aa9f","url":"./posts/b0821049/index.html"},{"revision":"bb8ffc394227efb87b7226026a622ec9","url":"./posts/b36c6159/index.html"},{"revision":"2acd8eece781d37ea95ac837df9700dc","url":"./posts/cd1c3d2a/index.html"},{"revision":"6f5287bedca194533e3b29a93b817d86","url":"./posts/d46d4e39/index.html"},{"revision":"5b2f1c643ecd00837769d70f2a6e1750","url":"./posts/dc790cfc/index.html"},{"revision":"75c41cf51cbf274c4a3546a90aa827af","url":"./posts/e5477819/index.html"},{"revision":"0230ec07e9df9a095fb6083f0600c7d5","url":"./posts/e9558acf/index.html"},{"revision":"2c495c581b94db81de13493df0536e53","url":"./posts/ea8a69ac/index.html"},{"revision":"b55be6d1613a89a67e7c19a63ad8fe06","url":"./posts/how2ask/index.html"},{"revision":"aafea8ce5156b7b886632e591620c27d","url":"./posts/ka_faq_cn/index.html"},{"revision":"31a84f20f01692f6d00c4f8683b3ad41","url":"./posts/ka_faq_en/index.html"},{"revision":"8256216643e4300a41d3ec492a2c1941","url":"./posts/ka_faq_tw/index.html"},{"revision":"5a2c7e00b992c08b3a40622b2705ac61","url":"./posts/moekirby/index.html"},{"revision":"4b9e370d360b92b8091362156a53f552","url":"./posts/moneydodo/index.html"},{"revision":"ccbc9e128159b67d4cd12dd65301f13f","url":"./posts/notes/index.html"},{"revision":"10e5b6eed49c91ac3ed0230f0d18119a","url":"./posts/szeer/index.html"},{"revision":"4bbed7ae414bf5a377fcc5a0bf6958ea","url":"./posts/vpn/index.html"},{"revision":"d8361f733eec06cc6fe8c8b4ef78be46","url":"./service-worker.js"},{"revision":"e9253c005aaa93e31039302526e90b3f","url":"./steamgames/index.html"},{"revision":"53cdf9ad138e492de49b32c40291a58c","url":"./tags/宝塔面板/index.html"},{"revision":"36f77353ad79cec88272daa560e71f4c","url":"./tags/踩坑/index.html"},{"revision":"acf718a745380525e1f975525c111de8","url":"./tags/代理/index.html"},{"revision":"cd5cdf5e77174b66f26974af6f3471a8","url":"./tags/读书/index.html"},{"revision":"8d8a1f162c204e77c25defac674d5271","url":"./tags/读书无用论/index.html"},{"revision":"ce520be9a016ca9d6b7c7d1c813ea584","url":"./tags/更新日志/index.html"},{"revision":"0add5295d533f5ddc96b1ee047599d83","url":"./tags/环保/index.html"},{"revision":"883a0f8b843a9b135e28ee5e50c76b53","url":"./tags/开往/index.html"},{"revision":"c15a0f9f36919d392d32db5867bf32d6","url":"./tags/看法/index.html"},{"revision":"7656f6d51bb0ffe163c30edacf2ca004","url":"./tags/酷Q/index.html"},{"revision":"229eff5813196f4865444a4072573b37","url":"./tags/弃用/index.html"},{"revision":"63b492fb5da47759b62722485922d377","url":"./tags/软件推荐/index.html"},{"revision":"4cfeb83c65bb5e681ff888b9a4424c33","url":"./tags/视频/index.html"},{"revision":"e6c4a311035e4636216e4521fb481e89","url":"./tags/塑料产品/index.html"},{"revision":"92e6c949ed1e6ac9b891c656691eb691","url":"./tags/网站搭建/index.html"},{"revision":"1aed8f3448fb39c91004ac0cd1415031","url":"./tags/为什么/index.html"},{"revision":"8307a8f02dd0f81f90b7bf7d018bf5e1","url":"./tags/星之卡比-Wii/index.html"},{"revision":"861a3bc926b9363ad117577271c04fbb","url":"./tags/星之卡比/index.html"},{"revision":"000bfd850991e173bf5f9fd88ed58b18","url":"./tags/学习/index.html"},{"revision":"89e595505ff04aca24dc5ead50a7704e","url":"./tags/游戏推荐/index.html"},{"revision":"331f08c4a59c018ea34dec2d5280188e","url":"./tags/Android/index.html"},{"revision":"e5450beaf64bb8c207e00f3a0aebaa87","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"92e8397cce8ed68a95b7fd808dff0be8","url":"./tags/FC/index.html"},{"revision":"1b250d3623521329dc28ae5693ee17b7","url":"./tags/Fragment/index.html"},{"revision":"d8b2e9abbda6a1e93fff4040858f6416","url":"./tags/Git/index.html"},{"revision":"b5e53be31d0ba78d2bf8d4181d8b437f","url":"./tags/Hexo/index.html"},{"revision":"8922cf69f9122be0a3332ea5de389723","url":"./tags/index.html"},{"revision":"5bd2fdd41578a9085a75ea75d448479e","url":"./tags/Kirby-Assistant/index.html"},{"revision":"23fb1da59ec566e668bf9127f183b798","url":"./tags/Kotlin/index.html"},{"revision":"f4b2d26ff41223988d8811785076862e","url":"./tags/LGBT/index.html"},{"revision":"b371b81c806316c05a7bb41a95082fe1","url":"./tags/linux/index.html"},{"revision":"8e0713354258479f8cfd05cdc7557e5f","url":"./tags/Material-Design-2/index.html"},{"revision":"6cc3f68e19988705837499880d4ca8cd","url":"./tags/Python/index.html"},{"revision":"bbde939f18283820d817bc1ac50d6d88","url":"./tags/ssh/index.html"},{"revision":"3447569d4e31878b1ebed44243d7de8e","url":"./tags/ViewPager/index.html"},{"revision":"bf20237a1d63d2ba064e6629c3a0a023","url":"./tags/VS-Code/index.html"},{"revision":"57abc6b8a8cf068381b1db5ca8890cc6","url":"./tags/Wii-模拟器/index.html"},{"revision":"6654ca0fb7dcd70940f4a2116e5636ee","url":"./tags/Windows/index.html"},{"revision":"e89390f9bd376d5abc33c1ca2321b3c4","url":"./tags/WordPress/index.html"}], {
  directoryIndex: null,
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Fonts
workbox.routing.registerRoute(
  /\.(?:eot|ttf|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Google Fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Static Libraries
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: "static-libs",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

workbox.googleAnalytics.initialize();
