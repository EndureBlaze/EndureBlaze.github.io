const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"85229f5cb008f2a0db501732765faa7c","url":"./about/index.html"},{"revision":"139012ec830f7f039e0f6aba9211f8d2","url":"./archives/2019/07/index.html"},{"revision":"54264783c6a611ce403beb2fdb4b5433","url":"./archives/2019/08/index.html"},{"revision":"254d70dd52080c219bb9e9c513bf8957","url":"./archives/2019/09/index.html"},{"revision":"a45149ba21c0f981a592d648a784e6d7","url":"./archives/2019/10/index.html"},{"revision":"c7a1b4c8826d56579fcc40ad030cd7ab","url":"./archives/2019/11/index.html"},{"revision":"da1f21f4be2bdd449c03adf8a443c58c","url":"./archives/2019/index.html"},{"revision":"af020ba84a6ce44d5cecd19cd97609c5","url":"./archives/2019/page/2/index.html"},{"revision":"c91f09df0033328778d226a2e0879389","url":"./archives/2020/02/index.html"},{"revision":"39110eef1ec9998fd8c76169f91e40ed","url":"./archives/2020/03/index.html"},{"revision":"09560db49dceec77ba0788cb171270d9","url":"./archives/2020/04/index.html"},{"revision":"2108a5729e81ad2c03fb4262914c2fb2","url":"./archives/2020/05/index.html"},{"revision":"4d031cbc66ab5ef183783be828fb8e9b","url":"./archives/2020/06/index.html"},{"revision":"5316db90fb62de831051ebc9bdae5e32","url":"./archives/2020/07/index.html"},{"revision":"7b01276084499b7eef3b76c2ecbc6e79","url":"./archives/2020/09/index.html"},{"revision":"87ca262681d71a04b9f5a8089c3f1edb","url":"./archives/2020/11/index.html"},{"revision":"a774302c2233410422e720cf48c72b90","url":"./archives/2020/index.html"},{"revision":"2df2b2219a072ff23f884acebd64de78","url":"./archives/2020/page/2/index.html"},{"revision":"5934b1437cf778ba0d917812425d10db","url":"./archives/index.html"},{"revision":"47629f3eda55fc4c6fe9ee149e084ae9","url":"./archives/page/2/index.html"},{"revision":"8675d5a7da80412aaa605aa12aa94f03","url":"./archives/page/3/index.html"},{"revision":"7ae58f834b0cde81ec5a7f463657dfb7","url":"./categories/编程/index.html"},{"revision":"7f27752d6dbed68fee3d6beed65e6be1","url":"./categories/技术记录/index.html"},{"revision":"ebef0ac3c27c5997e1cc86aa0bfa03ce","url":"./categories/随手记/index.html"},{"revision":"8252c478f674f394338431306647928e","url":"./categories/碎碎念/index.html"},{"revision":"1d4a116d94cb80e9abc3d38181a85adb","url":"./categories/我的-Android-应用/index.html"},{"revision":"32925e7cf4337ff04871daa3ce945b59","url":"./categories/星之卡比系列教程/index.html"},{"revision":"fcdb125debccab165a616e924614d596","url":"./categories/正经文字/index.html"},{"revision":"52d1745b7802533b9b0c5745e302d00c","url":"./categories/资源/index.html"},{"revision":"4cf8123d116fcf2da0d5a5c56cde4e30","url":"./categories/index.html"},{"revision":"001589b74650e8a580f4d1fa1c0add08","url":"./contact/index.html"},{"revision":"7bfd5a16c64e2eb8602e1651f29756d1","url":"./css/app-refresh.css"},{"revision":"8ee6168510c2d6a12dbdce06290a334b","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"c27c5e199127105dd8d9462af6aa412c","url":"./css/font.css"},{"revision":"e175de66b083dfbad3f4120f67ab876d","url":"./css/heimu.css"},{"revision":"8a864fa664a43a77ddf9478c21fd9fd0","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"b18660c38b6645d53e2e61e0c301383c","url":"./gallery/index.html"},{"revision":"1f7a18464c6f6ebbc302ded46257615c","url":"./gallery/kirbyimage/index.html"},{"revision":"9023613a686dc2d9ebc670ca654f868a","url":"./gallery/photos/index.html"},{"revision":"6d4c76740da4553dbe77fd785bf27160","url":"./gallery/wallpaper/index.html"},{"revision":"41b22fa32e156773aaecd40af9b93813","url":"./index.html"},{"revision":"260a5fc0ca50374a1bb11b1e74de8462","url":"./js/app-refresh.js"},{"revision":"4161e4f81ad949ba121e5c04b729c196","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"9d3197c6b7c14b1f57777f8c8c69ac0c","url":"./link/index.html"},{"revision":"e897cd4831baf2e2412c8e82ad81b357","url":"./manifest.json"},{"revision":"9b734de3dc246c1e9b1733b101bacc31","url":"./page/2/index.html"},{"revision":"165038396151cbc68fdf5ce57a1294a3","url":"./page/3/index.html"},{"revision":"1757b48c86ccecf5d3fc838a583969b2","url":"./PGP/index.html"},{"revision":"9fa69308b330153caaa516ee243af565","url":"./posts/12e7f5da/index.html"},{"revision":"68068020ff5255db7f3b1f2490eb72fb","url":"./posts/2bdd4eaf/index.html"},{"revision":"d92cd770014ac184dce94ee75e8dea16","url":"./posts/2fbba4ed/index.html"},{"revision":"3dc06ca1a1ef7fa48fc3cf9ea5cfc0a0","url":"./posts/417dae5e/index.html"},{"revision":"945107168695b43bb10996eeb6ba8a4e","url":"./posts/4d70a82d/index.html"},{"revision":"495b43bb7dcd62819399aecac3efe6f1","url":"./posts/51f7c2cb/index.html"},{"revision":"15da78a34564fef124719f0c590dfcc5","url":"./posts/58ae8d54/index.html"},{"revision":"cbc219b1c6ba89bfb79b1ce405344465","url":"./posts/64b2bc9e/index.html"},{"revision":"d34cc9d1942c7288c39e7236fe950a66","url":"./posts/6b0c894/index.html"},{"revision":"6d5f8a1b8807925532b720483989de03","url":"./posts/743f9c80/index.html"},{"revision":"a55cf6515fac6c9a720cfcc29cc93ed1","url":"./posts/75f0fab2/index.html"},{"revision":"447829588b166ff9ddcc0415f6e26bec","url":"./posts/7935321c/index.html"},{"revision":"cb00d6fb2323c5fbba240763b43ae381","url":"./posts/8e165a5c/index.html"},{"revision":"9cdca22d36a645755fd2b7e9022c0105","url":"./posts/919199f6/index.html"},{"revision":"70d6317bd9830831759f98852c8d6604","url":"./posts/9cb48aa5/index.html"},{"revision":"4a640994e3fb900b61a082b52354a894","url":"./posts/9e078f24/index.html"},{"revision":"08c1d7a4541e7f8083ddff00eac1b727","url":"./posts/a505f9a9/index.html"},{"revision":"cec77d1e858291585fb8662af4aaa806","url":"./posts/a6366ad5/index.html"},{"revision":"6fb6113555cb339f62673c204fd2aa9f","url":"./posts/b0821049/index.html"},{"revision":"292818b068b6f62d3c796fd86faf9e1c","url":"./posts/b36c6159/index.html"},{"revision":"2acd8eece781d37ea95ac837df9700dc","url":"./posts/cd1c3d2a/index.html"},{"revision":"6f5287bedca194533e3b29a93b817d86","url":"./posts/d46d4e39/index.html"},{"revision":"5b2f1c643ecd00837769d70f2a6e1750","url":"./posts/dc790cfc/index.html"},{"revision":"75c41cf51cbf274c4a3546a90aa827af","url":"./posts/e5477819/index.html"},{"revision":"0230ec07e9df9a095fb6083f0600c7d5","url":"./posts/e9558acf/index.html"},{"revision":"2c495c581b94db81de13493df0536e53","url":"./posts/ea8a69ac/index.html"},{"revision":"b55be6d1613a89a67e7c19a63ad8fe06","url":"./posts/how2ask/index.html"},{"revision":"aafea8ce5156b7b886632e591620c27d","url":"./posts/ka_faq_cn/index.html"},{"revision":"31a84f20f01692f6d00c4f8683b3ad41","url":"./posts/ka_faq_en/index.html"},{"revision":"8256216643e4300a41d3ec492a2c1941","url":"./posts/ka_faq_tw/index.html"},{"revision":"5a2c7e00b992c08b3a40622b2705ac61","url":"./posts/moekirby/index.html"},{"revision":"8eb0f1e8cef4f111133e2b401e8dd61b","url":"./posts/moneydodo/index.html"},{"revision":"ccbc9e128159b67d4cd12dd65301f13f","url":"./posts/notes/index.html"},{"revision":"10e5b6eed49c91ac3ed0230f0d18119a","url":"./posts/szeer/index.html"},{"revision":"4bbed7ae414bf5a377fcc5a0bf6958ea","url":"./posts/vpn/index.html"},{"revision":"1d4f138b9c01efeacb93b99b27eef344","url":"./service-worker.js"},{"revision":"b6c957fdc0f8e951eaa76c09930b9248","url":"./steamgames/index.html"},{"revision":"c1bfd1092cd4de771950bb1cd39bd7a4","url":"./tags/宝塔面板/index.html"},{"revision":"403631bb8033f15f74e57f858d5c783c","url":"./tags/踩坑/index.html"},{"revision":"bc6039328a62fdf2e02bf3dc13160e75","url":"./tags/代理/index.html"},{"revision":"1b3faa57712728b2d62b592f3748aecc","url":"./tags/读书/index.html"},{"revision":"5bf949d1a802ca0c6a180598e1fea555","url":"./tags/读书无用论/index.html"},{"revision":"b8dfab0dc1571ca84f3da5f436fd8f78","url":"./tags/更新日志/index.html"},{"revision":"244758ec1dcdfbd519ccba654d14180a","url":"./tags/环保/index.html"},{"revision":"f4ce99f4c5baf25ba3d10fba71bb6f16","url":"./tags/开往/index.html"},{"revision":"8cb0115005a3f9904bd30daa41471ee7","url":"./tags/看法/index.html"},{"revision":"68b806554f34bb3bdbbdffe53d4e6ae1","url":"./tags/酷Q/index.html"},{"revision":"f74ba617bfe41a1d8abe81ef4f675da4","url":"./tags/弃用/index.html"},{"revision":"9ce6801098a6505693ad85b0ef9d6b75","url":"./tags/软件推荐/index.html"},{"revision":"7e90e6d481204988313989b481205f92","url":"./tags/视频/index.html"},{"revision":"8278c001827056495f3a33fe70bdf06e","url":"./tags/塑料产品/index.html"},{"revision":"031e1b291eb3b50cf8ff11bef889a999","url":"./tags/网站搭建/index.html"},{"revision":"b9be7a3d11f1cc1a7d5b7ef23b523339","url":"./tags/为什么/index.html"},{"revision":"369501794d4fff43bf97b35ca0a1805a","url":"./tags/星之卡比-Wii/index.html"},{"revision":"5c4b659c182036f0b2e5ed81e90add8d","url":"./tags/星之卡比/index.html"},{"revision":"55461f9102724a41dc96d4ffbfd45da0","url":"./tags/学习/index.html"},{"revision":"dd0957eeb57acc390c22573ea7c9e6c6","url":"./tags/游戏推荐/index.html"},{"revision":"2af6b6f0aeee3c2414406993d9ae3e24","url":"./tags/Android/index.html"},{"revision":"44de6d6ec0ede27b113084a94bec4fa5","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"b6895757a07c4de99ea5897eb5f56483","url":"./tags/FC/index.html"},{"revision":"6daca3a86d6f781704115643697772f4","url":"./tags/Fragment/index.html"},{"revision":"5f9423d621ee5410dd4b8c65350455b0","url":"./tags/Git/index.html"},{"revision":"b25f6e3c6c093e8957cbccc084038b5c","url":"./tags/Hexo/index.html"},{"revision":"90af4088bd2d5bfddc47c32e3026a826","url":"./tags/index.html"},{"revision":"c45487697461e58c35f9afa906d52b38","url":"./tags/Kirby-Assistant/index.html"},{"revision":"e519317702fb776ac8cdde7aa4d76b07","url":"./tags/Kotlin/index.html"},{"revision":"3523be150e2d52f572d224768eb77254","url":"./tags/LGBT/index.html"},{"revision":"a3639ae7f81cf5909c455818cff6c933","url":"./tags/linux/index.html"},{"revision":"14f35784823082ce567e5f137489566a","url":"./tags/Material-Design-2/index.html"},{"revision":"68ee9065a0932f69f7c2b3e84c87e4dc","url":"./tags/Python/index.html"},{"revision":"d8b4fc1d3f28a218435619d22e6bf847","url":"./tags/ssh/index.html"},{"revision":"67f63504172c9904b548d22514da97d4","url":"./tags/ViewPager/index.html"},{"revision":"99e2c5f88897a3738090767ce36610dc","url":"./tags/VS-Code/index.html"},{"revision":"1b17ea46ca826549c30b2136087b4063","url":"./tags/Wii-模拟器/index.html"},{"revision":"93d25fe2800d596ac3e60e9fb22ec6d2","url":"./tags/Windows/index.html"},{"revision":"a69dcdace07383cf9c4160164929e2d8","url":"./tags/WordPress/index.html"}], {
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
