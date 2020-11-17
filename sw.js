const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ac9de1f8a94dc491d536c0d1d014898d","url":"./about/index.html"},{"revision":"a80a783c2891b3d27cc949af6f6f31bc","url":"./archives/2019/07/index.html"},{"revision":"4aaac46097ba76911e01bfeb50d7e7bb","url":"./archives/2019/08/index.html"},{"revision":"ca5d1b1bad1a38bddfbd44af9002a66e","url":"./archives/2019/09/index.html"},{"revision":"20103de71c53a47e082f2f44cfdcd64e","url":"./archives/2019/10/index.html"},{"revision":"374a77b177cf8163a0ae062cdec48c2b","url":"./archives/2019/11/index.html"},{"revision":"3e99ce57ed14b3c9b2e1d6fcfbe79849","url":"./archives/2019/index.html"},{"revision":"4e792b3e4a89af6bcf59f43473c37b48","url":"./archives/2019/page/2/index.html"},{"revision":"1336434078c22d96c7f3b93223712e1d","url":"./archives/2020/02/index.html"},{"revision":"9ec42569bb9fc6708db5925a0c740ba3","url":"./archives/2020/03/index.html"},{"revision":"4107bb15fab1c6a44e052c835f594532","url":"./archives/2020/04/index.html"},{"revision":"ce5828fa02f816d05425e78258cafcf2","url":"./archives/2020/05/index.html"},{"revision":"d596ef878d80d0b6271848ffea03affc","url":"./archives/2020/06/index.html"},{"revision":"e02274a6d9a2cd214a5a88a85cd689f0","url":"./archives/2020/07/index.html"},{"revision":"3e52165398e52a216b18418a6a0bf115","url":"./archives/2020/09/index.html"},{"revision":"a4b9fb25158b601eb2c280e98aadf4d0","url":"./archives/2020/11/index.html"},{"revision":"ba45e8424d01ed4009343f68ea6906cc","url":"./archives/2020/index.html"},{"revision":"a5a56a460e25448a5cd7feeebba219c8","url":"./archives/2020/page/2/index.html"},{"revision":"cc79a3e325b29e9a6928a3e454550d30","url":"./archives/index.html"},{"revision":"8a70b68a0266e6ddba40b59d8be0183c","url":"./archives/page/2/index.html"},{"revision":"eb67e0e43ffbd75c4bbb47f0af22addd","url":"./archives/page/3/index.html"},{"revision":"b565c0dc016ef6fc2492c24a2d3f5baf","url":"./categories/编程/index.html"},{"revision":"0f179143a58f6b97440d911d71866420","url":"./categories/技术记录/index.html"},{"revision":"c8213a993129a024e359eee173efe702","url":"./categories/随手记/index.html"},{"revision":"fe23799b8322bf821921ebff941a0596","url":"./categories/碎碎念/index.html"},{"revision":"2d8c3226e596d184f5c544f84622912c","url":"./categories/我的-Android-应用/index.html"},{"revision":"851bcc8fe5f33fa56d622b43d5004b8e","url":"./categories/星之卡比系列教程/index.html"},{"revision":"dbb5309f13da99f914ecd224911dd89d","url":"./categories/正经文字/index.html"},{"revision":"5ebd555f00b658b2309f1e2d0f448fe8","url":"./categories/资源/index.html"},{"revision":"7f55b53732bc6e9671e6157aa19b7395","url":"./categories/index.html"},{"revision":"18c9df54c4eb81250522c12caf794c7f","url":"./contact/index.html"},{"revision":"7bfd5a16c64e2eb8602e1651f29756d1","url":"./css/app-refresh.css"},{"revision":"8ee6168510c2d6a12dbdce06290a334b","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"c27c5e199127105dd8d9462af6aa412c","url":"./css/font.css"},{"revision":"e175de66b083dfbad3f4120f67ab876d","url":"./css/heimu.css"},{"revision":"8a864fa664a43a77ddf9478c21fd9fd0","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"b6992fbbba25d37dc6e7357a03082f0c","url":"./gallery/index.html"},{"revision":"103096408fa68832a4c2cace7147d6cf","url":"./gallery/kirbyimage/index.html"},{"revision":"946a6aeef90094481cdcc4efa8c498c0","url":"./gallery/photos/index.html"},{"revision":"5bb13ade1d5e0c0ddb282218b31125a1","url":"./gallery/wallpaper/index.html"},{"revision":"3a33a136883c320e23e1d116d543d343","url":"./index.html"},{"revision":"260a5fc0ca50374a1bb11b1e74de8462","url":"./js/app-refresh.js"},{"revision":"4161e4f81ad949ba121e5c04b729c196","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"fe000ea3e2728dc4a31d059cb6b4281a","url":"./link/index.html"},{"revision":"e897cd4831baf2e2412c8e82ad81b357","url":"./manifest.json"},{"revision":"dd7de690b9391e1c61433725590c41d7","url":"./page/2/index.html"},{"revision":"c859e45c5eb85812d79de42c8db5e682","url":"./page/3/index.html"},{"revision":"0f9979d793999985eb3d02de39623475","url":"./PGP/index.html"},{"revision":"9fa69308b330153caaa516ee243af565","url":"./posts/12e7f5da/index.html"},{"revision":"68068020ff5255db7f3b1f2490eb72fb","url":"./posts/2bdd4eaf/index.html"},{"revision":"d92cd770014ac184dce94ee75e8dea16","url":"./posts/2fbba4ed/index.html"},{"revision":"3dc06ca1a1ef7fa48fc3cf9ea5cfc0a0","url":"./posts/417dae5e/index.html"},{"revision":"945107168695b43bb10996eeb6ba8a4e","url":"./posts/4d70a82d/index.html"},{"revision":"72ccd9ac8cd8abd1a97f3e372a972218","url":"./posts/51f7c2cb/index.html"},{"revision":"15da78a34564fef124719f0c590dfcc5","url":"./posts/58ae8d54/index.html"},{"revision":"cbc219b1c6ba89bfb79b1ce405344465","url":"./posts/64b2bc9e/index.html"},{"revision":"0236734d32ad2b76481d3f0640e1e815","url":"./posts/6b0c894/index.html"},{"revision":"6d5f8a1b8807925532b720483989de03","url":"./posts/743f9c80/index.html"},{"revision":"a55cf6515fac6c9a720cfcc29cc93ed1","url":"./posts/75f0fab2/index.html"},{"revision":"447829588b166ff9ddcc0415f6e26bec","url":"./posts/7935321c/index.html"},{"revision":"cb00d6fb2323c5fbba240763b43ae381","url":"./posts/8e165a5c/index.html"},{"revision":"9cdca22d36a645755fd2b7e9022c0105","url":"./posts/919199f6/index.html"},{"revision":"70d6317bd9830831759f98852c8d6604","url":"./posts/9cb48aa5/index.html"},{"revision":"8191a71ea93d7bb738d3f87facf128ad","url":"./posts/9e078f24/index.html"},{"revision":"08c1d7a4541e7f8083ddff00eac1b727","url":"./posts/a505f9a9/index.html"},{"revision":"cec77d1e858291585fb8662af4aaa806","url":"./posts/a6366ad5/index.html"},{"revision":"6fb6113555cb339f62673c204fd2aa9f","url":"./posts/b0821049/index.html"},{"revision":"0f65fe40a3d5062df457b59a8ee01d78","url":"./posts/b36c6159/index.html"},{"revision":"2acd8eece781d37ea95ac837df9700dc","url":"./posts/cd1c3d2a/index.html"},{"revision":"6f5287bedca194533e3b29a93b817d86","url":"./posts/d46d4e39/index.html"},{"revision":"5b2f1c643ecd00837769d70f2a6e1750","url":"./posts/dc790cfc/index.html"},{"revision":"75c41cf51cbf274c4a3546a90aa827af","url":"./posts/e5477819/index.html"},{"revision":"0230ec07e9df9a095fb6083f0600c7d5","url":"./posts/e9558acf/index.html"},{"revision":"2c495c581b94db81de13493df0536e53","url":"./posts/ea8a69ac/index.html"},{"revision":"b55be6d1613a89a67e7c19a63ad8fe06","url":"./posts/how2ask/index.html"},{"revision":"aafea8ce5156b7b886632e591620c27d","url":"./posts/ka_faq_cn/index.html"},{"revision":"31a84f20f01692f6d00c4f8683b3ad41","url":"./posts/ka_faq_en/index.html"},{"revision":"8256216643e4300a41d3ec492a2c1941","url":"./posts/ka_faq_tw/index.html"},{"revision":"5a2c7e00b992c08b3a40622b2705ac61","url":"./posts/moekirby/index.html"},{"revision":"e8357a2292258945d4060b477d181e84","url":"./posts/moneydodo/index.html"},{"revision":"ccbc9e128159b67d4cd12dd65301f13f","url":"./posts/notes/index.html"},{"revision":"10e5b6eed49c91ac3ed0230f0d18119a","url":"./posts/szeer/index.html"},{"revision":"4bbed7ae414bf5a377fcc5a0bf6958ea","url":"./posts/vpn/index.html"},{"revision":"b9abfb629f5bbf1389e46e4b69dd1c3c","url":"./service-worker.js"},{"revision":"f02a1c7d0981f12bf5900426fac2c126","url":"./steamgames/index.html"},{"revision":"95ea93bd67a109bd086cbf140ea1b6e4","url":"./tags/宝塔面板/index.html"},{"revision":"c9e9878e91cee33570a793c47d3caaa4","url":"./tags/踩坑/index.html"},{"revision":"a6834b54bc2134b2264d8fe80b2674b0","url":"./tags/代理/index.html"},{"revision":"023f5b466f686b91cbfbe746a04e74a1","url":"./tags/读书/index.html"},{"revision":"3d35eede4358bc1605b825e9bb8f3b5d","url":"./tags/读书无用论/index.html"},{"revision":"2b3e9b9bce6d8ce5c5e01f7859e482a8","url":"./tags/更新日志/index.html"},{"revision":"5ead3a9dbc910c215d84cdf1af002c63","url":"./tags/环保/index.html"},{"revision":"aad077e015f8fd13ddc2bf091cf7ba5b","url":"./tags/开往/index.html"},{"revision":"3ca71ffef3098d53b289f955980c4673","url":"./tags/看法/index.html"},{"revision":"ea215eb7e1a61bfaf1776b3e442876a4","url":"./tags/酷Q/index.html"},{"revision":"7a867acd9d061d92d2ef10c003941d5f","url":"./tags/弃用/index.html"},{"revision":"7ab45b1b4df522949754d6e96970e879","url":"./tags/软件推荐/index.html"},{"revision":"1140ac35eebef557c7a17ee68c9fcd80","url":"./tags/视频/index.html"},{"revision":"15a101ecd5c5669b35f5f0187cf2991f","url":"./tags/塑料产品/index.html"},{"revision":"30843e86b9e32559af7368933c245b7e","url":"./tags/网站搭建/index.html"},{"revision":"6bc9c9d00c3314db1aeca734f44b2a43","url":"./tags/为什么/index.html"},{"revision":"cc5931442e59635cf9ee79d1608218ae","url":"./tags/星之卡比-Wii/index.html"},{"revision":"9e356ad9b05a634f295079bc70f1b36e","url":"./tags/星之卡比/index.html"},{"revision":"4a8d6961a3a8ae4b839ab877df2fbb46","url":"./tags/学习/index.html"},{"revision":"6775035c4ceb2a5710127f8cd02b81b8","url":"./tags/游戏推荐/index.html"},{"revision":"2b94b16c310185b867f1186cb0fa9dda","url":"./tags/Android/index.html"},{"revision":"19c5d87123a24726a762e5eca4d36be0","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"f31c05fd8c0542e61933fd701b0fcc2c","url":"./tags/FC/index.html"},{"revision":"04c7bf9ce69880357d206ecf40ac7533","url":"./tags/Fragment/index.html"},{"revision":"1a8edf731988b2518bc1408e91aaf884","url":"./tags/Git/index.html"},{"revision":"7d6c2b015938453206f8bc71a8a8cd27","url":"./tags/Hexo/index.html"},{"revision":"58f3a4b7568fe48c32a493a01dee64a3","url":"./tags/index.html"},{"revision":"1eb9f132964cf13a227442447af8a93d","url":"./tags/Kirby-Assistant/index.html"},{"revision":"8d454d1f17a90c1cba8068f1c918f3ce","url":"./tags/Kotlin/index.html"},{"revision":"ad0678240365dc885287b5984f343228","url":"./tags/LGBT/index.html"},{"revision":"ff4c481b525d411c9ee1113fe97b2998","url":"./tags/linux/index.html"},{"revision":"a43cc4eb7dd5f52f5128e40ad42958a2","url":"./tags/Material-Design-2/index.html"},{"revision":"40d1e4415cac0b40b8c9824572e16752","url":"./tags/Python/index.html"},{"revision":"7c699e115aa958a66868d97c4e5b111e","url":"./tags/ssh/index.html"},{"revision":"f6fb7baf02732afa87e56bdf88d740ba","url":"./tags/ViewPager/index.html"},{"revision":"89a5f2c518086088904fde2803575a26","url":"./tags/VS-Code/index.html"},{"revision":"518259f88ec9af111e0a17103f6fa122","url":"./tags/Wii-模拟器/index.html"},{"revision":"cd8559796e24b36a8b45fa7a9dfde08e","url":"./tags/Windows/index.html"},{"revision":"140d640bdd88c8e4ddee4ea25970410a","url":"./tags/WordPress/index.html"}], {
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
