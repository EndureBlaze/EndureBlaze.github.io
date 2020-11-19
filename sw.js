const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4439849b8f3a5cf326d032a4e4431b85","url":"./about/index.html"},{"revision":"ee320d0975813ddd2303a66e28b1ea37","url":"./archives/2019/07/index.html"},{"revision":"24c6f267191bedb101c51cea55f283ec","url":"./archives/2019/08/index.html"},{"revision":"101cd96ac5ccf04b7a8a7b2304c47ac5","url":"./archives/2019/09/index.html"},{"revision":"f7f537cdc5c14433a108d506559d4a20","url":"./archives/2019/10/index.html"},{"revision":"335d3946f555e446ed409ea0b51032eb","url":"./archives/2019/11/index.html"},{"revision":"fa4162022e7d781cd10caf76dbeb2453","url":"./archives/2019/index.html"},{"revision":"619ec51b34178afa3076646a1414bba9","url":"./archives/2019/page/2/index.html"},{"revision":"195665c7a648ce48a8a13f205329dc54","url":"./archives/2020/02/index.html"},{"revision":"877bee2358612ae0edcc396f848dd188","url":"./archives/2020/03/index.html"},{"revision":"14a172bacc21d07b5723eeb2c17d14b2","url":"./archives/2020/04/index.html"},{"revision":"839f55a10594cd2c5f768e567688ebcf","url":"./archives/2020/05/index.html"},{"revision":"da4b12bd01fdcec1831564e5f8a13fb5","url":"./archives/2020/06/index.html"},{"revision":"f937d2511dc016e4ef34ab10d1b7aa6d","url":"./archives/2020/07/index.html"},{"revision":"299105cdbd88636409f54ec55aa68324","url":"./archives/2020/09/index.html"},{"revision":"6ec3002965e3e27098b0027832bd2a9f","url":"./archives/2020/11/index.html"},{"revision":"dce9089bfb25a4c0702d6222720430be","url":"./archives/2020/index.html"},{"revision":"4b74b67786802705d1eb1a30e9f268f5","url":"./archives/2020/page/2/index.html"},{"revision":"156114b1176562028c85df47c4d15fe1","url":"./archives/index.html"},{"revision":"4527b0af41e4700ffb592cbac8218905","url":"./archives/page/2/index.html"},{"revision":"1a51337275394d20b8ecfb2b75ce1c0c","url":"./archives/page/3/index.html"},{"revision":"e5e423b1c6082ba9740be609079198ac","url":"./categories/编程/index.html"},{"revision":"6797084a1369582aa31b6e791d215c54","url":"./categories/技术记录/index.html"},{"revision":"f374f06d3b8eebd2dc48362a248a9549","url":"./categories/随手记/index.html"},{"revision":"39f63bfc61eb420a4b247f9154e53562","url":"./categories/碎碎念/index.html"},{"revision":"a2b60b22bd5422d98f602ed842ef61ef","url":"./categories/我的-Android-应用/index.html"},{"revision":"1fa56b34ce2084f7dd1a788303c8e7f5","url":"./categories/星之卡比系列教程/index.html"},{"revision":"b34d2d31bb62df9780633b1027e1e64f","url":"./categories/正经文字/index.html"},{"revision":"f8051c582672435533c877f651ea03b5","url":"./categories/资源/index.html"},{"revision":"520ac136b201a091764457cd4da71bf5","url":"./categories/index.html"},{"revision":"b2a04756e93f5d1a765c0e3466309f5d","url":"./contact/index.html"},{"revision":"96cd5aa94a08d31dd5f917fd9b197019","url":"./css/app-refresh.css"},{"revision":"745406dd163be96b647c0bb96c58b54a","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"7b831b5208e94d218fba0308030b7216","url":"./css/font.css"},{"revision":"4d5b4b1b76b54776558b5d760b18e61b","url":"./css/heimu.css"},{"revision":"d538c0fd542657ee1f2e0e1ca641af00","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"204bfa2e3e93f6b98c0eb3d2a7b062d4","url":"./gallery/index.html"},{"revision":"aaff5916ca4fae24aa1ff8a48c33afeb","url":"./gallery/kirbyimage/index.html"},{"revision":"227e9b763836a3d42c6c594762b1924f","url":"./gallery/photos/index.html"},{"revision":"89f8dd7a26404dba0e890fc0d9ccc4fd","url":"./gallery/wallpaper/index.html"},{"revision":"0704af0ae3858b9c7836ca0f20cbfa43","url":"./index.html"},{"revision":"b0b3f229a73ab2b17717bb6473ab7383","url":"./js/app-refresh.js"},{"revision":"fa8fd5b0f22c315f8c917c7f1fe6d59a","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"587ca5cc866cf29336cbef7045c6e01f","url":"./link/index.html"},{"revision":"f7cfb79a01549717ac390887acbf3220","url":"./manifest.json"},{"revision":"3ee6794c4bcb8ded89ccdc45cbbd9b61","url":"./page/2/index.html"},{"revision":"86ac88b927c416b4fd847551762f97f6","url":"./page/3/index.html"},{"revision":"03e834f0128b890fcbe0d25e4b4d6d0d","url":"./PGP/index.html"},{"revision":"273492c5f14192ba44c92ae8cfd6bae1","url":"./posts/12e7f5da/index.html"},{"revision":"4e052d0253d09e4171173bf0754cf389","url":"./posts/2bdd4eaf/index.html"},{"revision":"99ac8fa13046efddb0f7ae1a2cb3b10c","url":"./posts/2fbba4ed/index.html"},{"revision":"e74bee7d323dbd0460351bd8dec7f073","url":"./posts/417dae5e/index.html"},{"revision":"fda5f0969cfb821b4109071c5f0462db","url":"./posts/4d70a82d/index.html"},{"revision":"e2de1bb39bfbd317e039b2583de9a42b","url":"./posts/51f7c2cb/index.html"},{"revision":"8f139e41fbea50743fb254615c942d11","url":"./posts/58ae8d54/index.html"},{"revision":"cfa72c38a85f068d949048de2c13a1b4","url":"./posts/64b2bc9e/index.html"},{"revision":"3cd7195a6a7eb2afed5863797a9606b9","url":"./posts/6b0c894/index.html"},{"revision":"a1ffa32d453addf3a46829dce2540fef","url":"./posts/743f9c80/index.html"},{"revision":"711cdc7fd613f9311f61cad737cfb0a1","url":"./posts/75f0fab2/index.html"},{"revision":"bcf266024adcb2318a1f3f42d06d1534","url":"./posts/7935321c/index.html"},{"revision":"8ee267de51ad1415e2bc7ae69f0e3d02","url":"./posts/8e165a5c/index.html"},{"revision":"2b725f3cbc34f19f3dd6a7c614d0cf41","url":"./posts/919199f6/index.html"},{"revision":"7321372045fda42456fc7907330f1246","url":"./posts/9cb48aa5/index.html"},{"revision":"90f09a3ac31b5bf135aa7e690302ab19","url":"./posts/9e078f24/index.html"},{"revision":"f69655da1e00533cb9344ee85e1dba8d","url":"./posts/a505f9a9/index.html"},{"revision":"bf667810aa0ccb9aff0fff4a5dbb5355","url":"./posts/a6366ad5/index.html"},{"revision":"e159bc1b4288cbd15df6af81eef23114","url":"./posts/b0821049/index.html"},{"revision":"9480e45a17f189a9aad41d429de89909","url":"./posts/b36c6159/index.html"},{"revision":"5fa4b934681af682ffda81c30cbb70c6","url":"./posts/cd1c3d2a/index.html"},{"revision":"6ebfc3e4236ab5e1e3f03f601d8dd7e6","url":"./posts/d46d4e39/index.html"},{"revision":"18b7491735019d0451faff510c401094","url":"./posts/dc790cfc/index.html"},{"revision":"a31f6a609e5fa5e175ab1d66513ebcd1","url":"./posts/e5477819/index.html"},{"revision":"875006c16baebf443b1731383d5da986","url":"./posts/e9558acf/index.html"},{"revision":"8dface9fb3998cd0bb34751cc7757a3c","url":"./posts/ea8a69ac/index.html"},{"revision":"b02687428ca1160143173fc02dd46a1e","url":"./posts/how2ask/index.html"},{"revision":"e91b36c235a0f4a42eb2c9031f3e1801","url":"./posts/ka_faq_cn/index.html"},{"revision":"d6165383a863f58e6b0621db1b205d42","url":"./posts/ka_faq_en/index.html"},{"revision":"aa8bdbe99cd69deff3fa924d995a5bd7","url":"./posts/ka_faq_tw/index.html"},{"revision":"b0b2ce1dd390aa4f9d23ca633f8e64ba","url":"./posts/moekirby/index.html"},{"revision":"2aecdf15711330c99b93ad23a012a4de","url":"./posts/moneydodo/index.html"},{"revision":"844d3d4775b20153e84874fb6590263e","url":"./posts/notes/index.html"},{"revision":"df8bc6d9a265ef7b9d18e7ee71fb3425","url":"./posts/szeer/index.html"},{"revision":"7b84d4d4b1fd17f563590e2b5eeca8b6","url":"./posts/vpn/index.html"},{"revision":"bce1f78a08d884092920e0e4d4b45173","url":"./service-worker.js"},{"revision":"c6cd1a5d6250ef4a602ecf5f35070857","url":"./steamgames/index.html"},{"revision":"5ce47544fe60dcbbfd2a76aec993b754","url":"./tags/宝塔面板/index.html"},{"revision":"d5a16e6bdfb153d85347a7c33cd0d2b1","url":"./tags/编年史/index.html"},{"revision":"b3c631d1619b78a964247ec8e2b19caf","url":"./tags/踩坑/index.html"},{"revision":"4940d23369241632fdb32620fc9ad657","url":"./tags/代理/index.html"},{"revision":"cc91ad5cac0c09f8fc9beeb0b5352419","url":"./tags/读书/index.html"},{"revision":"2f87d177e70b5c9b919baaaec2a7f8e2","url":"./tags/读书无用论/index.html"},{"revision":"ca0f9758fc8ad22445fff128021bfbce","url":"./tags/更新日志/index.html"},{"revision":"26850a9feb1b10bda788010b0fa7483c","url":"./tags/环保/index.html"},{"revision":"8d67141111015fdaae89baf71982601d","url":"./tags/开往/index.html"},{"revision":"a2740c4d659089172e3b795abba480aa","url":"./tags/看法/index.html"},{"revision":"86840a48e7c589ed1e1e08a865c6c696","url":"./tags/酷Q/index.html"},{"revision":"5201a61a9d74cf831dbc9a7a397dbcb0","url":"./tags/弃用/index.html"},{"revision":"d9615a6d821a8752fc02563cbe6cab3e","url":"./tags/软件推荐/index.html"},{"revision":"de5ac2b80c3cbd092f9cec8358c580d9","url":"./tags/视频/index.html"},{"revision":"89be49426a18752ffe3cc984d8a43bc5","url":"./tags/塑料产品/index.html"},{"revision":"6bb2dc8bde5468793d974154cfe71d15","url":"./tags/网站搭建/index.html"},{"revision":"02494b8eff6c61292a5c10f87a8f7622","url":"./tags/为什么/index.html"},{"revision":"ace80b50197ba83e5dd6c6bbc9068749","url":"./tags/星之卡比-Wii/index.html"},{"revision":"eb5d24a1dc12c93c59b83e97e839d8e6","url":"./tags/星之卡比/index.html"},{"revision":"8ea9a304e773418a434b3b557272c25a","url":"./tags/学习/index.html"},{"revision":"9074f63e4cb2f8143bf17700a7927ef4","url":"./tags/游戏推荐/index.html"},{"revision":"337668011b99e2649e1a788101de4b01","url":"./tags/Android/index.html"},{"revision":"f7d8686f64a1cecb8f752a02ab25f017","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"0ba45f304713f2612ffb35d4d5c4be24","url":"./tags/FC/index.html"},{"revision":"5e609824e58bb0c94e7a6a628aa9cfa4","url":"./tags/Fragment/index.html"},{"revision":"97e7412259a62f04814ec2dfdf305c4d","url":"./tags/Git/index.html"},{"revision":"5e2c7b641006b72ed5dcdbfe847bc7e1","url":"./tags/Hexo/index.html"},{"revision":"b8509a2135e83a7339e32383f3db6597","url":"./tags/index.html"},{"revision":"1c367a5707e2dffef43228c16623be15","url":"./tags/Kirby-Assistant/index.html"},{"revision":"45020b82eba4303f6d7ddff661055f0a","url":"./tags/Kotlin/index.html"},{"revision":"89b4889b3fa13eb1bc41d5fb2a526abf","url":"./tags/LGBT/index.html"},{"revision":"702fc8199fd1161b96424f36051a1218","url":"./tags/linux/index.html"},{"revision":"4b1a826009bd81d4a6b5dc585d0e31e7","url":"./tags/Material-Design-2/index.html"},{"revision":"1646e28fd81c6ae3e434466f82a274c7","url":"./tags/Python/index.html"},{"revision":"7c02fc1e7b5b19dc5787cdbc656804b8","url":"./tags/ssh/index.html"},{"revision":"080cd53eaaf1afcc1cc61578b860110b","url":"./tags/ViewPager/index.html"},{"revision":"a06336ddc8fd4432a98a69850d89ef4f","url":"./tags/VS-Code/index.html"},{"revision":"3b953a613301aaf1df75326600b5090c","url":"./tags/Wii-模拟器/index.html"},{"revision":"223a159dc1afbfcff6dddf25bf5b40f8","url":"./tags/Windows/index.html"},{"revision":"247a7ee30a05efde95f53ea13f1dcf1b","url":"./tags/WordPress/index.html"}], {
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
