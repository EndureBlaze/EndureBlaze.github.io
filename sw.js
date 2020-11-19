const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2962b7f7888a5402ba6da06673d95c32","url":"./about/index.html"},{"revision":"59b91fe29b11dd489dcd7c3611642703","url":"./archives/2019/07/index.html"},{"revision":"f4cd91b12c7f195e3c5e21040e26f50d","url":"./archives/2019/08/index.html"},{"revision":"840fa202cbcae1e52afa713e90f3dae1","url":"./archives/2019/09/index.html"},{"revision":"32964b0991585063214e496cd428bc70","url":"./archives/2019/10/index.html"},{"revision":"2cbe17854a47ece4dfbc350ef3f95d0b","url":"./archives/2019/11/index.html"},{"revision":"fe50d768304d4b1cf8a1ad43ef440eb2","url":"./archives/2019/index.html"},{"revision":"c0eb0cb05b309a7fd42ddae827d46b1e","url":"./archives/2019/page/2/index.html"},{"revision":"8c7ecc4010de9bf1508364a9d52207c7","url":"./archives/2020/02/index.html"},{"revision":"03638fe72a8d0cc234e7978c62c581b1","url":"./archives/2020/03/index.html"},{"revision":"d10e72b66a6a0f5f6ecd317373655162","url":"./archives/2020/04/index.html"},{"revision":"2f8b85e5d6db69547b2f40177e7c2b5d","url":"./archives/2020/05/index.html"},{"revision":"0099eb06d9b67497eddc327787b947f2","url":"./archives/2020/06/index.html"},{"revision":"4d52d6c5b9e77ea52484515b0cd00b60","url":"./archives/2020/07/index.html"},{"revision":"71efe0381ae219a3b258b142e74901ba","url":"./archives/2020/09/index.html"},{"revision":"8d9154c6895ffdb805c9d0871f5687df","url":"./archives/2020/11/index.html"},{"revision":"fe161a7cfe982c86e5957a5d8d9c0241","url":"./archives/2020/index.html"},{"revision":"086cdb6cc8a1ae915b73412983f486af","url":"./archives/2020/page/2/index.html"},{"revision":"e10679f2735593fca4c2416a86d0a4be","url":"./archives/index.html"},{"revision":"305294ca06553561289eb6fd8be639ad","url":"./archives/page/2/index.html"},{"revision":"90a4091d3c3e6f2d744243d366660e9a","url":"./archives/page/3/index.html"},{"revision":"31133273fea1e473ed40f182a77ae4f2","url":"./categories/编程/index.html"},{"revision":"b5ed265c77ef9fb5abcfbedd10b5b486","url":"./categories/技术记录/index.html"},{"revision":"4bd850da91b68541c5ee4d0647e74b73","url":"./categories/随手记/index.html"},{"revision":"004183977cb2ea060f92b00230072c3f","url":"./categories/碎碎念/index.html"},{"revision":"67140b560b303c7d3abde424eaeff2d3","url":"./categories/我的-Android-应用/index.html"},{"revision":"ef36ce64a687e131199441e01c3f1969","url":"./categories/星之卡比系列教程/index.html"},{"revision":"8436526a699ccab5c4fdf253eec58c8c","url":"./categories/正经文字/index.html"},{"revision":"e9b7382e9fcedf218920a0a4e0aceee0","url":"./categories/资源/index.html"},{"revision":"bcde16d2b97b27f22a34556ffaf593b3","url":"./categories/index.html"},{"revision":"6a19c8662abf1c5df9c064ff332acba4","url":"./contact/index.html"},{"revision":"96cd5aa94a08d31dd5f917fd9b197019","url":"./css/app-refresh.css"},{"revision":"745406dd163be96b647c0bb96c58b54a","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"7b831b5208e94d218fba0308030b7216","url":"./css/font.css"},{"revision":"4d5b4b1b76b54776558b5d760b18e61b","url":"./css/heimu.css"},{"revision":"d538c0fd542657ee1f2e0e1ca641af00","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"5820ce0e2c973a7bfb069b7a6fc61ba0","url":"./gallery/index.html"},{"revision":"52459dcf5e8a3a47d63db49034fdd949","url":"./gallery/kirbyimage/index.html"},{"revision":"e8cae3895ef418043ae78904a4054c7d","url":"./gallery/photos/index.html"},{"revision":"09a5b6f3be84ded178ecd688288e0f42","url":"./gallery/wallpaper/index.html"},{"revision":"0c1cb0fea7c1fa64a1c35afb9b2aa945","url":"./index.html"},{"revision":"b0b3f229a73ab2b17717bb6473ab7383","url":"./js/app-refresh.js"},{"revision":"fa8fd5b0f22c315f8c917c7f1fe6d59a","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"8bbf1aacd9f38f841c85a55a1cba783f","url":"./link/index.html"},{"revision":"f7cfb79a01549717ac390887acbf3220","url":"./manifest.json"},{"revision":"fbe353d503288799c3db7c18daa85cf9","url":"./page/2/index.html"},{"revision":"7a708d10faabfeed23a0d397f80675a5","url":"./page/3/index.html"},{"revision":"e98115f50d92a603045bbc04585e15b3","url":"./PGP/index.html"},{"revision":"273492c5f14192ba44c92ae8cfd6bae1","url":"./posts/12e7f5da/index.html"},{"revision":"4e052d0253d09e4171173bf0754cf389","url":"./posts/2bdd4eaf/index.html"},{"revision":"99ac8fa13046efddb0f7ae1a2cb3b10c","url":"./posts/2fbba4ed/index.html"},{"revision":"e74bee7d323dbd0460351bd8dec7f073","url":"./posts/417dae5e/index.html"},{"revision":"fda5f0969cfb821b4109071c5f0462db","url":"./posts/4d70a82d/index.html"},{"revision":"e2de1bb39bfbd317e039b2583de9a42b","url":"./posts/51f7c2cb/index.html"},{"revision":"8f139e41fbea50743fb254615c942d11","url":"./posts/58ae8d54/index.html"},{"revision":"cfa72c38a85f068d949048de2c13a1b4","url":"./posts/64b2bc9e/index.html"},{"revision":"3cd7195a6a7eb2afed5863797a9606b9","url":"./posts/6b0c894/index.html"},{"revision":"a1ffa32d453addf3a46829dce2540fef","url":"./posts/743f9c80/index.html"},{"revision":"711cdc7fd613f9311f61cad737cfb0a1","url":"./posts/75f0fab2/index.html"},{"revision":"bcf266024adcb2318a1f3f42d06d1534","url":"./posts/7935321c/index.html"},{"revision":"8ee267de51ad1415e2bc7ae69f0e3d02","url":"./posts/8e165a5c/index.html"},{"revision":"2b725f3cbc34f19f3dd6a7c614d0cf41","url":"./posts/919199f6/index.html"},{"revision":"7321372045fda42456fc7907330f1246","url":"./posts/9cb48aa5/index.html"},{"revision":"90f09a3ac31b5bf135aa7e690302ab19","url":"./posts/9e078f24/index.html"},{"revision":"f69655da1e00533cb9344ee85e1dba8d","url":"./posts/a505f9a9/index.html"},{"revision":"bf667810aa0ccb9aff0fff4a5dbb5355","url":"./posts/a6366ad5/index.html"},{"revision":"e159bc1b4288cbd15df6af81eef23114","url":"./posts/b0821049/index.html"},{"revision":"9480e45a17f189a9aad41d429de89909","url":"./posts/b36c6159/index.html"},{"revision":"5fa4b934681af682ffda81c30cbb70c6","url":"./posts/cd1c3d2a/index.html"},{"revision":"6ebfc3e4236ab5e1e3f03f601d8dd7e6","url":"./posts/d46d4e39/index.html"},{"revision":"18b7491735019d0451faff510c401094","url":"./posts/dc790cfc/index.html"},{"revision":"a31f6a609e5fa5e175ab1d66513ebcd1","url":"./posts/e5477819/index.html"},{"revision":"875006c16baebf443b1731383d5da986","url":"./posts/e9558acf/index.html"},{"revision":"8dface9fb3998cd0bb34751cc7757a3c","url":"./posts/ea8a69ac/index.html"},{"revision":"b02687428ca1160143173fc02dd46a1e","url":"./posts/how2ask/index.html"},{"revision":"e91b36c235a0f4a42eb2c9031f3e1801","url":"./posts/ka_faq_cn/index.html"},{"revision":"d6165383a863f58e6b0621db1b205d42","url":"./posts/ka_faq_en/index.html"},{"revision":"aa8bdbe99cd69deff3fa924d995a5bd7","url":"./posts/ka_faq_tw/index.html"},{"revision":"b0b2ce1dd390aa4f9d23ca633f8e64ba","url":"./posts/moekirby/index.html"},{"revision":"2aecdf15711330c99b93ad23a012a4de","url":"./posts/moneydodo/index.html"},{"revision":"844d3d4775b20153e84874fb6590263e","url":"./posts/notes/index.html"},{"revision":"df8bc6d9a265ef7b9d18e7ee71fb3425","url":"./posts/szeer/index.html"},{"revision":"7b84d4d4b1fd17f563590e2b5eeca8b6","url":"./posts/vpn/index.html"},{"revision":"ff0f44b30c9c4db925970047ec2d8392","url":"./service-worker.js"},{"revision":"da2e6e020e9e8bfcc449a87d67f024a3","url":"./steamgames/index.html"},{"revision":"b459ab0733e4cff47de4cea924e55fb0","url":"./tags/宝塔面板/index.html"},{"revision":"54535ba1a12518c75095a667b0467c8c","url":"./tags/编年史/index.html"},{"revision":"d06d5f42294675e3b8f06264ed409362","url":"./tags/踩坑/index.html"},{"revision":"d6bcd99c3974cd85d0fb8df1733af020","url":"./tags/代理/index.html"},{"revision":"f4b21da9586bb7b0999e5ce8a4a1e8ab","url":"./tags/读书/index.html"},{"revision":"016344aca44b6228f2cd164a896e220b","url":"./tags/读书无用论/index.html"},{"revision":"3b4767f468b4160fed31234a32ca6bdd","url":"./tags/更新日志/index.html"},{"revision":"90e7c5050d1cb6e28f30ccf186348d2c","url":"./tags/环保/index.html"},{"revision":"64b61b586c1139f2d0fc02776eefeea1","url":"./tags/开往/index.html"},{"revision":"a7e5afc8f46a57c3443ee12de6615c24","url":"./tags/看法/index.html"},{"revision":"83bd29733fb62f5845ff5645b3a883dc","url":"./tags/酷Q/index.html"},{"revision":"c6208992303359d5f3359390d07783bd","url":"./tags/弃用/index.html"},{"revision":"c950f5fb87cb9b409ab337468a1162fc","url":"./tags/软件推荐/index.html"},{"revision":"47ed88a9e1867676ccdd21fc480e92f8","url":"./tags/视频/index.html"},{"revision":"b6eecad75cc4be541e170845d2e5c458","url":"./tags/塑料产品/index.html"},{"revision":"a84cea4dbd65b45bdfbf055674aef8cb","url":"./tags/网站搭建/index.html"},{"revision":"25bc415f2eb264a7b8b0b6b3c4784773","url":"./tags/为什么/index.html"},{"revision":"ab96462b5b08118a3288613e502e4731","url":"./tags/星之卡比-Wii/index.html"},{"revision":"ad977e9b3587fb7838ba78129f681fa9","url":"./tags/星之卡比/index.html"},{"revision":"6ec085c71be84cf567bf4bb7e2eafd92","url":"./tags/学习/index.html"},{"revision":"c8e0cf281c7c70bff763985ca68e4197","url":"./tags/游戏推荐/index.html"},{"revision":"fac28a319adec0f5927f75dfa40a8fec","url":"./tags/Android/index.html"},{"revision":"54b576c83dc45d33bf66db407c0176e8","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"ed862df8ff815ecca8ccfd3dbded32a0","url":"./tags/FC/index.html"},{"revision":"443ef4c56606d256d3b7da3427d8a61a","url":"./tags/Fragment/index.html"},{"revision":"a5241bb0ee311bcc8f64f0a57e31b02f","url":"./tags/Git/index.html"},{"revision":"6251cfe7bfbc9a15e75b48693ba8e638","url":"./tags/Hexo/index.html"},{"revision":"b91f6595a453660000e252a94a713e31","url":"./tags/index.html"},{"revision":"c0a17d1252eb7f1c486767b3cbfa2cd1","url":"./tags/Kirby-Assistant/index.html"},{"revision":"31d8006e91fdcb11b34955a5b8687b56","url":"./tags/Kotlin/index.html"},{"revision":"7dec6441b846aed1a3ad4fa40e6dc262","url":"./tags/LGBT/index.html"},{"revision":"eb61d6e88825cd221897a5b07ad388f1","url":"./tags/linux/index.html"},{"revision":"3910002defb36dba3ba277808d7d38cb","url":"./tags/Material-Design-2/index.html"},{"revision":"74b72800bf40875058d202191852c302","url":"./tags/Python/index.html"},{"revision":"65161ce738a02e7d5e250530bdb7d113","url":"./tags/ssh/index.html"},{"revision":"a1a74efe3996ca71d31cca67242adeac","url":"./tags/ViewPager/index.html"},{"revision":"bda302a5dd965b7f16cbf40749940daf","url":"./tags/VS-Code/index.html"},{"revision":"26a8cdaa2c8af84df82f289805b598de","url":"./tags/Wii-模拟器/index.html"},{"revision":"6b76034fb54b5fd44e0f0be853d13f8d","url":"./tags/Windows/index.html"},{"revision":"e6c92c48d67c77a3dece6175b1587797","url":"./tags/WordPress/index.html"}], {
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
