const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"fd15257f52b02155ae9beae1788dec71","url":"./about/index.html"},{"revision":"4cd27ad21f04b8ec63e8d669c9f2db63","url":"./archives/2019/07/index.html"},{"revision":"181da0d49fde5e33fb3103f5dc3be40c","url":"./archives/2019/08/index.html"},{"revision":"2446be003f8b36997864bd5302e3043e","url":"./archives/2019/09/index.html"},{"revision":"8163403ba69256328f33eb4700a62a5d","url":"./archives/2019/10/index.html"},{"revision":"b0a2d67ddf8fab00662178191107163e","url":"./archives/2019/11/index.html"},{"revision":"0143cdcf745dbbccbf2eb7af9074b042","url":"./archives/2019/index.html"},{"revision":"44f827430774eb652fa9f1ff7c944388","url":"./archives/2019/page/2/index.html"},{"revision":"707ebaa72da2021a09e7085f8fb8ccc3","url":"./archives/2020/02/index.html"},{"revision":"17b6b56539596e1639da881c7d29b17a","url":"./archives/2020/03/index.html"},{"revision":"68ee367a5f55f762644d5a83c2eea211","url":"./archives/2020/04/index.html"},{"revision":"20ba74ea79b279c274d9f04a3264afb0","url":"./archives/2020/05/index.html"},{"revision":"f4231fcb560470c15df7d21e558127de","url":"./archives/2020/06/index.html"},{"revision":"b5c20297f5d3526a32712aac15b68e1b","url":"./archives/2020/07/index.html"},{"revision":"361df0d83b7121c35773128576aa22ec","url":"./archives/2020/09/index.html"},{"revision":"bf9a0f8ed611d198c1a56bcc19a195a1","url":"./archives/2020/11/index.html"},{"revision":"db7687ff82e40b03fa5074c095c83413","url":"./archives/2020/index.html"},{"revision":"74b0ab5c76cdcb228110f4fc008e41cf","url":"./archives/2020/page/2/index.html"},{"revision":"8de63a450ee6d90436f3ca478b8994ad","url":"./archives/index.html"},{"revision":"862351c22c8b73ef20ee80ebd9406d0c","url":"./archives/page/2/index.html"},{"revision":"bc43a4d431d046e73ae0543da554c262","url":"./archives/page/3/index.html"},{"revision":"97830018cfdbe15bccfe9c6ed9c6dad7","url":"./categories/编程/index.html"},{"revision":"a62926a222abeb1eeddc194a7991d27c","url":"./categories/技术记录/index.html"},{"revision":"5c666f4543d4c6d75db9c7b5c8d3561c","url":"./categories/随手记/index.html"},{"revision":"9b9fa0236e6fa1b9ed07fdbb88a09344","url":"./categories/碎碎念/index.html"},{"revision":"bccb0ddaf002362a7e97926785b4a02b","url":"./categories/我的-Android-应用/index.html"},{"revision":"519416c46ae7f93e6872360a3d38c779","url":"./categories/星之卡比系列教程/index.html"},{"revision":"bfbd7ebc0440d2382f24ab9405bc1666","url":"./categories/正经文字/index.html"},{"revision":"33665d2a8cffa222a1ce046a475155ba","url":"./categories/资源/index.html"},{"revision":"f45cc115cfc194f149b8724e2cd851f5","url":"./categories/index.html"},{"revision":"648ce0aa7de55430cf69089ef9af5f79","url":"./contact/index.html"},{"revision":"7bfd5a16c64e2eb8602e1651f29756d1","url":"./css/app-refresh.css"},{"revision":"8ee6168510c2d6a12dbdce06290a334b","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"c27c5e199127105dd8d9462af6aa412c","url":"./css/font.css"},{"revision":"e175de66b083dfbad3f4120f67ab876d","url":"./css/heimu.css"},{"revision":"8a864fa664a43a77ddf9478c21fd9fd0","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"08c865706f4a2975263b41a9efe97a3e","url":"./gallery/index.html"},{"revision":"71ec41857a4320b00a2cace81c7f64b3","url":"./gallery/kirbyimage/index.html"},{"revision":"06656c4fad92572c612b46924bb98301","url":"./gallery/photos/index.html"},{"revision":"2aeb526ba3ad59ae72ac6f77ed414984","url":"./gallery/wallpaper/index.html"},{"revision":"cd7bc946111fdb8c32bb8635c4bacbd3","url":"./index.html"},{"revision":"260a5fc0ca50374a1bb11b1e74de8462","url":"./js/app-refresh.js"},{"revision":"4161e4f81ad949ba121e5c04b729c196","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"02208af08bd463f17050eaeac7165e6e","url":"./link/index.html"},{"revision":"e897cd4831baf2e2412c8e82ad81b357","url":"./manifest.json"},{"revision":"b41f0403e279d8d42455cdb892afbc68","url":"./page/2/index.html"},{"revision":"a47f972edf16feea52ef8c98afc668b2","url":"./page/3/index.html"},{"revision":"80256cfd83d9569c51e92402dfb6a934","url":"./PGP/index.html"},{"revision":"9fa69308b330153caaa516ee243af565","url":"./posts/12e7f5da/index.html"},{"revision":"68068020ff5255db7f3b1f2490eb72fb","url":"./posts/2bdd4eaf/index.html"},{"revision":"d92cd770014ac184dce94ee75e8dea16","url":"./posts/2fbba4ed/index.html"},{"revision":"3dc06ca1a1ef7fa48fc3cf9ea5cfc0a0","url":"./posts/417dae5e/index.html"},{"revision":"ef65e21b082861c8f9605f1b160415e0","url":"./posts/4d70a82d/index.html"},{"revision":"495b43bb7dcd62819399aecac3efe6f1","url":"./posts/51f7c2cb/index.html"},{"revision":"15da78a34564fef124719f0c590dfcc5","url":"./posts/58ae8d54/index.html"},{"revision":"cbc219b1c6ba89bfb79b1ce405344465","url":"./posts/64b2bc9e/index.html"},{"revision":"d34cc9d1942c7288c39e7236fe950a66","url":"./posts/6b0c894/index.html"},{"revision":"6d5f8a1b8807925532b720483989de03","url":"./posts/743f9c80/index.html"},{"revision":"a55cf6515fac6c9a720cfcc29cc93ed1","url":"./posts/75f0fab2/index.html"},{"revision":"447829588b166ff9ddcc0415f6e26bec","url":"./posts/7935321c/index.html"},{"revision":"cb00d6fb2323c5fbba240763b43ae381","url":"./posts/8e165a5c/index.html"},{"revision":"9cdca22d36a645755fd2b7e9022c0105","url":"./posts/919199f6/index.html"},{"revision":"70d6317bd9830831759f98852c8d6604","url":"./posts/9cb48aa5/index.html"},{"revision":"4f5874996007451c4c9b0b91315559c6","url":"./posts/9e078f24/index.html"},{"revision":"08c1d7a4541e7f8083ddff00eac1b727","url":"./posts/a505f9a9/index.html"},{"revision":"cec77d1e858291585fb8662af4aaa806","url":"./posts/a6366ad5/index.html"},{"revision":"6fb6113555cb339f62673c204fd2aa9f","url":"./posts/b0821049/index.html"},{"revision":"56d49adaf9f0057b49b5fff0903f70b2","url":"./posts/b36c6159/index.html"},{"revision":"2acd8eece781d37ea95ac837df9700dc","url":"./posts/cd1c3d2a/index.html"},{"revision":"6f5287bedca194533e3b29a93b817d86","url":"./posts/d46d4e39/index.html"},{"revision":"5b2f1c643ecd00837769d70f2a6e1750","url":"./posts/dc790cfc/index.html"},{"revision":"75c41cf51cbf274c4a3546a90aa827af","url":"./posts/e5477819/index.html"},{"revision":"0230ec07e9df9a095fb6083f0600c7d5","url":"./posts/e9558acf/index.html"},{"revision":"2c495c581b94db81de13493df0536e53","url":"./posts/ea8a69ac/index.html"},{"revision":"b55be6d1613a89a67e7c19a63ad8fe06","url":"./posts/how2ask/index.html"},{"revision":"aafea8ce5156b7b886632e591620c27d","url":"./posts/ka_faq_cn/index.html"},{"revision":"31a84f20f01692f6d00c4f8683b3ad41","url":"./posts/ka_faq_en/index.html"},{"revision":"8256216643e4300a41d3ec492a2c1941","url":"./posts/ka_faq_tw/index.html"},{"revision":"5a2c7e00b992c08b3a40622b2705ac61","url":"./posts/moekirby/index.html"},{"revision":"a26e31d4d19dbdd4fb7b20bed78a1234","url":"./posts/moneydodo/index.html"},{"revision":"ccbc9e128159b67d4cd12dd65301f13f","url":"./posts/notes/index.html"},{"revision":"10e5b6eed49c91ac3ed0230f0d18119a","url":"./posts/szeer/index.html"},{"revision":"4bbed7ae414bf5a377fcc5a0bf6958ea","url":"./posts/vpn/index.html"},{"revision":"281570b75f0b8996da1cb5e51b5285d6","url":"./service-worker.js"},{"revision":"51d0acb5d940babcf674772479617d6d","url":"./steamgames/index.html"},{"revision":"84e1b2ec25e44e6d0c99f7b0fc72b9a4","url":"./tags/宝塔面板/index.html"},{"revision":"7e3d69f267c266abfc9ce75ce68dec8b","url":"./tags/踩坑/index.html"},{"revision":"9691bf7acaf6596017af62da66ea84e8","url":"./tags/代理/index.html"},{"revision":"5294ccd9e6748108785bda861f9632fc","url":"./tags/读书/index.html"},{"revision":"fa783318b143dbc0e49dae1a5b5564a3","url":"./tags/读书无用论/index.html"},{"revision":"daa5809ef5a751f36d6b01bdbb8ccd76","url":"./tags/更新日志/index.html"},{"revision":"ae1a5b5cadaacc42130b5c88146d2d77","url":"./tags/环保/index.html"},{"revision":"8ef152b01cff62e8e7545e4f34c55370","url":"./tags/开往/index.html"},{"revision":"c8a1907caa35af6276a52ec076ca6874","url":"./tags/看法/index.html"},{"revision":"fae5d9bb0edc85f5e6aa366b654699a6","url":"./tags/酷Q/index.html"},{"revision":"02f1b9fb7773a091b3167886696325eb","url":"./tags/弃用/index.html"},{"revision":"ff29cd60ecfe68450d05a674f1909e5a","url":"./tags/软件推荐/index.html"},{"revision":"9a13a17df1d87d45ccd2bdd08d5e558a","url":"./tags/视频/index.html"},{"revision":"00dfa04c3439cacc558c16fa4bc9d9a8","url":"./tags/塑料产品/index.html"},{"revision":"75185b9da740a89789bef72b409031b5","url":"./tags/网站搭建/index.html"},{"revision":"44c26da9495cad7b053da2a8fded98c4","url":"./tags/为什么/index.html"},{"revision":"40f1bc825399c464ceb8101d071b8a44","url":"./tags/星之卡比-Wii/index.html"},{"revision":"c68266c342b827e74f09b9fd7e22c786","url":"./tags/星之卡比/index.html"},{"revision":"bfc6b8beb41b37eade44f5b14ae7fc5f","url":"./tags/学习/index.html"},{"revision":"1078f3409cf72be63f2610ba5081db69","url":"./tags/游戏推荐/index.html"},{"revision":"6e0778cf9fed227ab00d7ef2b9780277","url":"./tags/Android/index.html"},{"revision":"6bf06f2102834a19375072319c7ac791","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"3c322a9964790b2831849ffc5076c71a","url":"./tags/FC/index.html"},{"revision":"14ca5f81624cbd560b9aaa990e7d78df","url":"./tags/Fragment/index.html"},{"revision":"ca89e6276c4c71389365496797143010","url":"./tags/Git/index.html"},{"revision":"e139b78078719993c7cd410044416cc2","url":"./tags/Hexo/index.html"},{"revision":"870345cd1004dd6dfa9825fc6ff8cd51","url":"./tags/index.html"},{"revision":"4922f3908fd4b31af51ea2add26cb8c7","url":"./tags/Kirby-Assistant/index.html"},{"revision":"4af556581ddc45d974f28299bba79dea","url":"./tags/Kotlin/index.html"},{"revision":"79fb98c1ef6e4d41024725b87c38e9b9","url":"./tags/LGBT/index.html"},{"revision":"8093def27417f2082f2fe2c483a0f0ab","url":"./tags/linux/index.html"},{"revision":"84e8b9455985efa855529bd0972f482b","url":"./tags/Material-Design-2/index.html"},{"revision":"d0ab59e12616d4b3ef935254b7b674cc","url":"./tags/Python/index.html"},{"revision":"c5d040ac50ab6cf668b1ddb1a8ba7237","url":"./tags/ssh/index.html"},{"revision":"786526ea3ecd5fcabd923285afb02a0d","url":"./tags/ViewPager/index.html"},{"revision":"a5c07aa9a210b5a310e71a5c78a025f0","url":"./tags/VS-Code/index.html"},{"revision":"4950e220a034a38d17d54afc31889116","url":"./tags/Wii-模拟器/index.html"},{"revision":"62796f67f9c6625f8c549dc7cf49bda0","url":"./tags/Windows/index.html"},{"revision":"56201a51e53a91aa505f3c69ff7f5131","url":"./tags/WordPress/index.html"}], {
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
