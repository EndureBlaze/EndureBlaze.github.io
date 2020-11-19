const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c6fd70b04a6c392eb5a1368390a7601e","url":"./about/index.html"},{"revision":"99ad62dc1599daa9a7f34cedc59008ae","url":"./archives/2019/07/index.html"},{"revision":"37e5a91f5a28d4f0c3d7666fb8a65537","url":"./archives/2019/08/index.html"},{"revision":"ec2c312221d568b9d010e9d0b08584fa","url":"./archives/2019/09/index.html"},{"revision":"859f3565666356d75d4e3a240f8174d2","url":"./archives/2019/10/index.html"},{"revision":"0c77209af3950bf5cccfa29ca4271365","url":"./archives/2019/11/index.html"},{"revision":"4d2461a67b2490e4919f8322f1f4d3bb","url":"./archives/2019/index.html"},{"revision":"adf0142b968c501e163db62e43585cb3","url":"./archives/2019/page/2/index.html"},{"revision":"2cf0c97ced2d146eeb0b39b33f7b824f","url":"./archives/2020/02/index.html"},{"revision":"fce7c6e28723985675fee87655c7372f","url":"./archives/2020/03/index.html"},{"revision":"26a45c199a9bdeb5e4041b84f706bf52","url":"./archives/2020/04/index.html"},{"revision":"0e8daaf73ed334179da1a86a390f672c","url":"./archives/2020/05/index.html"},{"revision":"f8e375cc99319267217a039798a83904","url":"./archives/2020/06/index.html"},{"revision":"1033fce77f1456dff8a400ef6ebf5489","url":"./archives/2020/07/index.html"},{"revision":"8161aecae2c0e4202fd89c7ba829f640","url":"./archives/2020/09/index.html"},{"revision":"296242ad54e10417948ee2b7059b620a","url":"./archives/2020/11/index.html"},{"revision":"a12ecfba941c03758fc8d81993ba6cfa","url":"./archives/2020/index.html"},{"revision":"6ac30e33f1bd9c6d9e8f66e1692ec9f5","url":"./archives/2020/page/2/index.html"},{"revision":"e79ec55b32751bdb9c99facc765de69c","url":"./archives/index.html"},{"revision":"770c7eb73d7721592fd64264429c3b6a","url":"./archives/page/2/index.html"},{"revision":"ad8ef26a2192d578c3deff5ebe66e1c9","url":"./archives/page/3/index.html"},{"revision":"10adee9798b8c3c8c2bd95b5e4bafb58","url":"./categories/编程/index.html"},{"revision":"c83253f7171ad45f75e345572095b828","url":"./categories/技术记录/index.html"},{"revision":"38ead7f073ac4ede5a3cfdd8f6e66d4e","url":"./categories/随手记/index.html"},{"revision":"da367fe051ed9664cfb452b2f051194d","url":"./categories/碎碎念/index.html"},{"revision":"b5063d04f4e1318be5d9d7ff83b3a6a4","url":"./categories/我的-Android-应用/index.html"},{"revision":"e4390b3e39e12087f2db32a192008ea2","url":"./categories/星之卡比系列教程/index.html"},{"revision":"c060e3d50f82b4f7d6824038c628e81a","url":"./categories/正经文字/index.html"},{"revision":"04adc23818f8c43855752d76a21e07c7","url":"./categories/资源/index.html"},{"revision":"9978a101217b3db336ff5e349624b07f","url":"./categories/index.html"},{"revision":"fdd4c77c341bc411c0fd5baed1f87972","url":"./contact/index.html"},{"revision":"96cd5aa94a08d31dd5f917fd9b197019","url":"./css/app-refresh.css"},{"revision":"745406dd163be96b647c0bb96c58b54a","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"7b831b5208e94d218fba0308030b7216","url":"./css/font.css"},{"revision":"4d5b4b1b76b54776558b5d760b18e61b","url":"./css/heimu.css"},{"revision":"d538c0fd542657ee1f2e0e1ca641af00","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"059e1ed3a59fcac19ef15af20134bdbd","url":"./gallery/index.html"},{"revision":"80d8117bd095d112e7764dd570139dac","url":"./gallery/kirbyimage/index.html"},{"revision":"22d579b61b0f5c9fcdd4a17728f154c7","url":"./gallery/photos/index.html"},{"revision":"2b27b4321c793f674a7a06869e9f8e73","url":"./gallery/wallpaper/index.html"},{"revision":"ca4d7509b89ba042d0fad2c37fde79fd","url":"./index.html"},{"revision":"b0b3f229a73ab2b17717bb6473ab7383","url":"./js/app-refresh.js"},{"revision":"fa8fd5b0f22c315f8c917c7f1fe6d59a","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"259b3677d604f154aa98092263f71b6c","url":"./link/index.html"},{"revision":"f7cfb79a01549717ac390887acbf3220","url":"./manifest.json"},{"revision":"38b87a08f6381e1fdcef2732d3f4fb62","url":"./page/2/index.html"},{"revision":"c36db9f0aa722a7eb7d04130e4463d01","url":"./page/3/index.html"},{"revision":"62b17e1677f972c145c2d530c4a8b9b7","url":"./PGP/index.html"},{"revision":"273492c5f14192ba44c92ae8cfd6bae1","url":"./posts/12e7f5da/index.html"},{"revision":"4e052d0253d09e4171173bf0754cf389","url":"./posts/2bdd4eaf/index.html"},{"revision":"99ac8fa13046efddb0f7ae1a2cb3b10c","url":"./posts/2fbba4ed/index.html"},{"revision":"e74bee7d323dbd0460351bd8dec7f073","url":"./posts/417dae5e/index.html"},{"revision":"fda5f0969cfb821b4109071c5f0462db","url":"./posts/4d70a82d/index.html"},{"revision":"8f38ef29ddcefbba4339abee3eaa4872","url":"./posts/51f7c2cb/index.html"},{"revision":"8f139e41fbea50743fb254615c942d11","url":"./posts/58ae8d54/index.html"},{"revision":"cfa72c38a85f068d949048de2c13a1b4","url":"./posts/64b2bc9e/index.html"},{"revision":"fd1d0273c1010e586400b1b4abf377f8","url":"./posts/6b0c894/index.html"},{"revision":"a1ffa32d453addf3a46829dce2540fef","url":"./posts/743f9c80/index.html"},{"revision":"711cdc7fd613f9311f61cad737cfb0a1","url":"./posts/75f0fab2/index.html"},{"revision":"bcf266024adcb2318a1f3f42d06d1534","url":"./posts/7935321c/index.html"},{"revision":"8ee267de51ad1415e2bc7ae69f0e3d02","url":"./posts/8e165a5c/index.html"},{"revision":"2b725f3cbc34f19f3dd6a7c614d0cf41","url":"./posts/919199f6/index.html"},{"revision":"7321372045fda42456fc7907330f1246","url":"./posts/9cb48aa5/index.html"},{"revision":"723294306d1932345e34971305451fd0","url":"./posts/9e078f24/index.html"},{"revision":"f69655da1e00533cb9344ee85e1dba8d","url":"./posts/a505f9a9/index.html"},{"revision":"bf667810aa0ccb9aff0fff4a5dbb5355","url":"./posts/a6366ad5/index.html"},{"revision":"e159bc1b4288cbd15df6af81eef23114","url":"./posts/b0821049/index.html"},{"revision":"935a4fbae3916b99a8a609b25d6dc4ca","url":"./posts/b36c6159/index.html"},{"revision":"5fa4b934681af682ffda81c30cbb70c6","url":"./posts/cd1c3d2a/index.html"},{"revision":"6ebfc3e4236ab5e1e3f03f601d8dd7e6","url":"./posts/d46d4e39/index.html"},{"revision":"18b7491735019d0451faff510c401094","url":"./posts/dc790cfc/index.html"},{"revision":"a31f6a609e5fa5e175ab1d66513ebcd1","url":"./posts/e5477819/index.html"},{"revision":"875006c16baebf443b1731383d5da986","url":"./posts/e9558acf/index.html"},{"revision":"8dface9fb3998cd0bb34751cc7757a3c","url":"./posts/ea8a69ac/index.html"},{"revision":"b02687428ca1160143173fc02dd46a1e","url":"./posts/how2ask/index.html"},{"revision":"e91b36c235a0f4a42eb2c9031f3e1801","url":"./posts/ka_faq_cn/index.html"},{"revision":"d6165383a863f58e6b0621db1b205d42","url":"./posts/ka_faq_en/index.html"},{"revision":"aa8bdbe99cd69deff3fa924d995a5bd7","url":"./posts/ka_faq_tw/index.html"},{"revision":"b0b2ce1dd390aa4f9d23ca633f8e64ba","url":"./posts/moekirby/index.html"},{"revision":"2aecdf15711330c99b93ad23a012a4de","url":"./posts/moneydodo/index.html"},{"revision":"844d3d4775b20153e84874fb6590263e","url":"./posts/notes/index.html"},{"revision":"df8bc6d9a265ef7b9d18e7ee71fb3425","url":"./posts/szeer/index.html"},{"revision":"7b84d4d4b1fd17f563590e2b5eeca8b6","url":"./posts/vpn/index.html"},{"revision":"fcb544dafd58bf5ed9f64a7357b0da80","url":"./service-worker.js"},{"revision":"ce36dc291ce7c28285ae966c8ade577b","url":"./steamgames/index.html"},{"revision":"455386ff5f4abfb1137a8cc8e4eb2d64","url":"./tags/宝塔面板/index.html"},{"revision":"0f57c17f231cf87133f11bafb93d72f7","url":"./tags/编年史/index.html"},{"revision":"dc1c0e4254ae1bf8ecad23787479ba84","url":"./tags/踩坑/index.html"},{"revision":"ef9d37447fdbb80a4fbecdd6ee99ad69","url":"./tags/代理/index.html"},{"revision":"ba89bcc34742bab1d6d96e07bf606ac0","url":"./tags/读书/index.html"},{"revision":"c9250d978b11686ff81d093c3b46f14d","url":"./tags/读书无用论/index.html"},{"revision":"b1c9b30143849e6b4a0703a443b44111","url":"./tags/更新日志/index.html"},{"revision":"f04ef73f45b2333e2911251cb7654d2e","url":"./tags/环保/index.html"},{"revision":"1c66c87f6cead6eec27d02abb95ddef0","url":"./tags/开往/index.html"},{"revision":"583f9cdfec911b087bab2e30e84e7d7c","url":"./tags/看法/index.html"},{"revision":"c5379569c1b7d6d39ddf2290fd74222d","url":"./tags/酷Q/index.html"},{"revision":"ea284aec1599931a164d6c618f6280e3","url":"./tags/弃用/index.html"},{"revision":"f717f8cbf6bf229f582f19cd72b4943d","url":"./tags/软件推荐/index.html"},{"revision":"a9ef8e1fe106b51897658319d2d2bd14","url":"./tags/视频/index.html"},{"revision":"4e30d3c98c0ecdd8fc367d3fbf818ba4","url":"./tags/塑料产品/index.html"},{"revision":"50dd7c4c6466c7f23677ea13adb44269","url":"./tags/网站搭建/index.html"},{"revision":"5ddb6884f182d6c266e970caf4fbaf70","url":"./tags/为什么/index.html"},{"revision":"88c898c2d0578272a8a489bc31d9e8a3","url":"./tags/星之卡比-Wii/index.html"},{"revision":"d96a73ad64a3107791b267772cf89d8d","url":"./tags/星之卡比/index.html"},{"revision":"62dd809559ea1f3d9c19e09efbe72ce2","url":"./tags/学习/index.html"},{"revision":"d6e18a9690d97cc03bb88cf40de8a839","url":"./tags/游戏推荐/index.html"},{"revision":"86cf4258ca70c8ab5d9174ac68a0eb6c","url":"./tags/Android/index.html"},{"revision":"6c13123d7950cbc9f24fe54d26394561","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"737f2b9ca06cabe98dbfa0fe3223ba15","url":"./tags/FC/index.html"},{"revision":"e48050f71259d4552d3c2fd835217984","url":"./tags/Fragment/index.html"},{"revision":"abef515ccfb2a6dbe154ef4da2172aa6","url":"./tags/Git/index.html"},{"revision":"caadfa8a3bb4146ff1e09fd0e34f94b6","url":"./tags/Hexo/index.html"},{"revision":"3f767a8841bde2d4205bb0da80eaa607","url":"./tags/index.html"},{"revision":"eac5b1c587a5ccae8d1975cca82fcbe2","url":"./tags/Kirby-Assistant/index.html"},{"revision":"760eea35a2d583f352e56c524babb4dd","url":"./tags/Kotlin/index.html"},{"revision":"84522dc476eafa36da04071613dea0fb","url":"./tags/LGBT/index.html"},{"revision":"352cbe76b1a5ede5ac5f0401806aa1c0","url":"./tags/linux/index.html"},{"revision":"c89349a4b15572eaf6021259b0a501ed","url":"./tags/Material-Design-2/index.html"},{"revision":"226b580c6acb4b3d366bafa4a552c5b1","url":"./tags/Python/index.html"},{"revision":"9a685ac1390d39050c8bc020c7b7687a","url":"./tags/ssh/index.html"},{"revision":"1fa1e5d0771a1082ea2b3d289e450136","url":"./tags/ViewPager/index.html"},{"revision":"6b9ac54e782f3eecb3c0d16f3e72a708","url":"./tags/VS-Code/index.html"},{"revision":"89d3bb368f1432685e886574d4085803","url":"./tags/Wii-模拟器/index.html"},{"revision":"bc74c2c3174f2c1d24350cbcdce6c34f","url":"./tags/Windows/index.html"},{"revision":"e9faf94745182f8e8a2fd263c7806e16","url":"./tags/WordPress/index.html"}], {
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
