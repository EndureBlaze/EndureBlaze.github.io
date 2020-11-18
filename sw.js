const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7cc935bacd30ffdabe86ad507927a085","url":"./about/index.html"},{"revision":"be5b1608e03f71d9f2eda427b5bd7864","url":"./archives/2019/07/index.html"},{"revision":"51060e6d3cff300fd37e61a6ab49b11a","url":"./archives/2019/08/index.html"},{"revision":"b5ff4862bf41790a7a3229e4daebe45a","url":"./archives/2019/09/index.html"},{"revision":"1403605b7a90e66ee246c576fafb0782","url":"./archives/2019/10/index.html"},{"revision":"afa89c5ce0217ab1daea50c40b337258","url":"./archives/2019/11/index.html"},{"revision":"d148259f2df56c3dfce17bfc51904b52","url":"./archives/2019/index.html"},{"revision":"0a12e10060df419712d6726a23c14ab7","url":"./archives/2019/page/2/index.html"},{"revision":"693bb6343de959e59ca6b21a87d8ded6","url":"./archives/2020/02/index.html"},{"revision":"d14ec7e99e9b0bbabb3cc4bd3f478b95","url":"./archives/2020/03/index.html"},{"revision":"f0105ac09d970854809a5d7d6a2a3743","url":"./archives/2020/04/index.html"},{"revision":"ff14dba5e585585d4614061d15ab0888","url":"./archives/2020/05/index.html"},{"revision":"dd646e90781fe3d2ddb31ee59f817000","url":"./archives/2020/06/index.html"},{"revision":"923dc1014272f53c5288f5284eb5195d","url":"./archives/2020/07/index.html"},{"revision":"7cb141b124e0526e1bc29677eff845f9","url":"./archives/2020/09/index.html"},{"revision":"eeaaba8903f00af2ef06a322deed7cc0","url":"./archives/2020/11/index.html"},{"revision":"02bab88d55f6614eae4ea66098107d63","url":"./archives/2020/index.html"},{"revision":"c09a9c0faef22050f53e270d531393c7","url":"./archives/2020/page/2/index.html"},{"revision":"244f7abee8dbca759fb21af0d477b361","url":"./archives/index.html"},{"revision":"21aca66948c1ba1e14bbc588659a2e6d","url":"./archives/page/2/index.html"},{"revision":"b7ae075552519ec4c3aafcc65fd3fd33","url":"./archives/page/3/index.html"},{"revision":"e68bfd3c1d4b7533e6eeda277750cbd3","url":"./categories/编程/index.html"},{"revision":"9998830c147c1ace2e32b2080f4ac2e4","url":"./categories/技术记录/index.html"},{"revision":"0dbc8309544220f8198a99fd16247b1f","url":"./categories/随手记/index.html"},{"revision":"e735e481883a72f9601a8428623375ab","url":"./categories/碎碎念/index.html"},{"revision":"45e80694cfa1dec32aa2c3dda95579a7","url":"./categories/我的-Android-应用/index.html"},{"revision":"3ddb6985fe4d41c624881d8d6ee22286","url":"./categories/星之卡比系列教程/index.html"},{"revision":"d28791ffa62a4ff4a283364c81bd672e","url":"./categories/正经文字/index.html"},{"revision":"b40b26d715e78cf69f57e52366099dd2","url":"./categories/资源/index.html"},{"revision":"1f91510e504cfe9fa0918fb5721284f3","url":"./categories/index.html"},{"revision":"00eb4adfe0a07b4d2bbce973348e81ea","url":"./contact/index.html"},{"revision":"7bfd5a16c64e2eb8602e1651f29756d1","url":"./css/app-refresh.css"},{"revision":"8ee6168510c2d6a12dbdce06290a334b","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"c27c5e199127105dd8d9462af6aa412c","url":"./css/font.css"},{"revision":"e175de66b083dfbad3f4120f67ab876d","url":"./css/heimu.css"},{"revision":"0ee3e73757fed126cba8dea19247c92f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"faca0d7de3887a5d44da56fe9757eb1f","url":"./gallery/index.html"},{"revision":"ae104f20a0ce134d8b78cadbff74bc24","url":"./gallery/kirbyimage/index.html"},{"revision":"59417a342227f9f95c1f18efcd822aae","url":"./gallery/photos/index.html"},{"revision":"956e2f56541b0003eb7db068d1dbfc39","url":"./gallery/wallpaper/index.html"},{"revision":"a2f9d5945754b6a1954367fc4dae8ffd","url":"./index.html"},{"revision":"260a5fc0ca50374a1bb11b1e74de8462","url":"./js/app-refresh.js"},{"revision":"4161e4f81ad949ba121e5c04b729c196","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"fde85918110e7384cd5c9b9cdef85069","url":"./link/index.html"},{"revision":"e897cd4831baf2e2412c8e82ad81b357","url":"./manifest.json"},{"revision":"8b3932a314011ea65df68bcb18a4b03f","url":"./page/2/index.html"},{"revision":"afbff24f0cdacbd908d0d8f4ac81fc29","url":"./page/3/index.html"},{"revision":"cd5546ad53977f30bdb06e1d685188ee","url":"./PGP/index.html"},{"revision":"5e55760620ff1ebbd6d991da120add5f","url":"./posts/12e7f5da/index.html"},{"revision":"a111e726b6f1e42a3bb9a253255f7a86","url":"./posts/2bdd4eaf/index.html"},{"revision":"b9c32d754cc1b5bb579f7a1057f7cb7c","url":"./posts/2fbba4ed/index.html"},{"revision":"9b67fe1cbda63ed527ce301d8133960c","url":"./posts/417dae5e/index.html"},{"revision":"b6ddbe7c90389ec9cc507cf0edcc2a20","url":"./posts/4d70a82d/index.html"},{"revision":"5fc8ffa54ee3aa3760cbe0fcff92a5af","url":"./posts/51f7c2cb/index.html"},{"revision":"c6f944087923974e86e7fa6779e2f68e","url":"./posts/58ae8d54/index.html"},{"revision":"8a217c779e24635103818556d3c8c436","url":"./posts/64b2bc9e/index.html"},{"revision":"719f28120f242f1df6025f2afd239c28","url":"./posts/6b0c894/index.html"},{"revision":"4dfae61428779168355fe68b75020ddf","url":"./posts/743f9c80/index.html"},{"revision":"6ac9b74373852e75852ef35834edb84c","url":"./posts/75f0fab2/index.html"},{"revision":"c2ad6acc193c170cd4a98c964091f072","url":"./posts/7935321c/index.html"},{"revision":"64b79084308169e04bac249550019092","url":"./posts/8e165a5c/index.html"},{"revision":"407adf37e5ac4d93f76c1d080483c946","url":"./posts/919199f6/index.html"},{"revision":"6a0b404f52980e1c4e856de5908d4a76","url":"./posts/9cb48aa5/index.html"},{"revision":"c0ebc477c4c0525c98f7dfe5c4b0ac71","url":"./posts/9e078f24/index.html"},{"revision":"2b987c66c297a3b9449323fa52e60e63","url":"./posts/a505f9a9/index.html"},{"revision":"13605e61b470a9b9511360607686fec3","url":"./posts/a6366ad5/index.html"},{"revision":"94a7078cbd3a92806ea8595e74067ced","url":"./posts/b0821049/index.html"},{"revision":"1f7bc4b1a14648bc60373801740185f1","url":"./posts/b36c6159/index.html"},{"revision":"1471cbe0a6d4ee88f6ff7376522952ca","url":"./posts/cd1c3d2a/index.html"},{"revision":"a4f9963854136c475f326e951aedf152","url":"./posts/d46d4e39/index.html"},{"revision":"a74651e50a06c4226d7a5c7620eedbe0","url":"./posts/dc790cfc/index.html"},{"revision":"65f89d07022a20070fbdb198630d57c9","url":"./posts/e5477819/index.html"},{"revision":"6924379841cc6d635c46994e81140587","url":"./posts/e9558acf/index.html"},{"revision":"b23190711f405d703076c6d3b2dba4e3","url":"./posts/ea8a69ac/index.html"},{"revision":"662f6db0d54adf4601052cd00e078c16","url":"./posts/how2ask/index.html"},{"revision":"870da0612841d42e550385889a15ab6c","url":"./posts/ka_faq_cn/index.html"},{"revision":"41a0fe761671c101a8a1a0f4bd5bb177","url":"./posts/ka_faq_en/index.html"},{"revision":"a2e778116312f96d10a18b7738a841e7","url":"./posts/ka_faq_tw/index.html"},{"revision":"ab85ffb315fba29073bdc65458b15c80","url":"./posts/moekirby/index.html"},{"revision":"4e699a5c4d562fa631604cd4b8c3aa69","url":"./posts/moneydodo/index.html"},{"revision":"2c637b9928c853a8f17cebd2ad95fe9b","url":"./posts/notes/index.html"},{"revision":"f8463531bcec0a4b34c83d7bfbe234ab","url":"./posts/szeer/index.html"},{"revision":"d5a0bc8ac8cfa4627774835e95bc4ec0","url":"./posts/vpn/index.html"},{"revision":"b7133e774e7b3ce44a223898a3420ca7","url":"./service-worker.js"},{"revision":"1562214f136d26515edf5d6446ec9b1a","url":"./steamgames/index.html"},{"revision":"7f77ce9169264b0a77548520a9643c83","url":"./tags/宝塔面板/index.html"},{"revision":"c428d4628b7b0ac4cf28f81ae9aeef16","url":"./tags/编年史/index.html"},{"revision":"da8d7b643da56c1fbbb4f1dd621cf9ca","url":"./tags/踩坑/index.html"},{"revision":"eb2f6a1f6c9362da7c9425e67b99cabf","url":"./tags/代理/index.html"},{"revision":"59eb525a37617649c6b7bbf4d204859a","url":"./tags/读书/index.html"},{"revision":"5c428ee686fa11dcb3079d11ef8689f8","url":"./tags/读书无用论/index.html"},{"revision":"e8e75c3efcaa0e1526acd63f6e23507a","url":"./tags/更新日志/index.html"},{"revision":"577b0e48111f1b47ad7efebd0474cdd9","url":"./tags/环保/index.html"},{"revision":"f64ccff9cd3a5b5f2505a31e23c62f83","url":"./tags/开往/index.html"},{"revision":"7df3cc7066f989af6399f5f0e5f1bf87","url":"./tags/看法/index.html"},{"revision":"b81e9ccae395eb632d2470331b13d3e8","url":"./tags/酷Q/index.html"},{"revision":"ccf687a813a289b7676168b76050158c","url":"./tags/弃用/index.html"},{"revision":"20a89e0a42e46f7b75ca38b50f32c6e4","url":"./tags/软件推荐/index.html"},{"revision":"64f0158a1981be156149c820c41a9a3e","url":"./tags/视频/index.html"},{"revision":"e20b3cea97688673de88cb08eaf91bf2","url":"./tags/塑料产品/index.html"},{"revision":"3e72a32c18ccfadae05cd669a6ef9327","url":"./tags/网站搭建/index.html"},{"revision":"de76f440532bdf4f396814bf1e07533e","url":"./tags/为什么/index.html"},{"revision":"89a0f49f9c44fa63bbda74fd7d707dd8","url":"./tags/星之卡比-Wii/index.html"},{"revision":"bc84250313ab4cbc3ddb86cf903b3de6","url":"./tags/星之卡比/index.html"},{"revision":"c190e28c59037be2eafd2e55b725becc","url":"./tags/学习/index.html"},{"revision":"a84f68acddd7c5c16a2b643e2d35bc70","url":"./tags/游戏推荐/index.html"},{"revision":"d933a040fc73ce16fd4ba8f91558df35","url":"./tags/Android/index.html"},{"revision":"2a740fd7ff038e2706e0c410243da8ea","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"4e3f07f46251a17b6ee35e84e7376d3f","url":"./tags/FC/index.html"},{"revision":"cda1088a7a6529eea4c9602cd4c42f91","url":"./tags/Fragment/index.html"},{"revision":"d5e772ab52a530da11cdc248eb7eead1","url":"./tags/Git/index.html"},{"revision":"4fa5631d61d52c686118f7a6d42efbcd","url":"./tags/Hexo/index.html"},{"revision":"fbb7b13001262f27c2c08648f7661e81","url":"./tags/index.html"},{"revision":"a3a7777e468d91a03cf8250992a841d5","url":"./tags/Kirby-Assistant/index.html"},{"revision":"1e5c7f65d9f6f4049f9fd89fc6c9b35a","url":"./tags/Kotlin/index.html"},{"revision":"d0e888a77ab26a0a6bacfdaa56b64793","url":"./tags/LGBT/index.html"},{"revision":"1ff6ca232de234c6dae52b5989a41762","url":"./tags/linux/index.html"},{"revision":"62be05266edf0a15d2546b05e131cc47","url":"./tags/Material-Design-2/index.html"},{"revision":"428aaa31715060bb3174e7809792467a","url":"./tags/Python/index.html"},{"revision":"876caba7f1944fea9256a3d9a7761cc5","url":"./tags/ssh/index.html"},{"revision":"04b8eadc523729004cbe8730e8c977bf","url":"./tags/ViewPager/index.html"},{"revision":"86258fab87d9ec7327900bcc5af4649b","url":"./tags/VS-Code/index.html"},{"revision":"a53629ac32d55204af74a88822dad1ee","url":"./tags/Wii-模拟器/index.html"},{"revision":"a8b14ac5bd49e342396a01038ef02eda","url":"./tags/Windows/index.html"},{"revision":"de5218a47ff42e637393c2ae0a1fe1e3","url":"./tags/WordPress/index.html"}], {
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
