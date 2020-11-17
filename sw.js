const workboxVersion = "5.1.3";

importScripts(
  `https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`
);

workbox.core.setCacheNameDetails({
  prefix: "your name",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"5f5ab815a16d6f2a4e2112d550f5b4b0","url":"./about/index.html"},{"revision":"f7a884956c0e3237ac90118ceba453bf","url":"./archives/2019/07/index.html"},{"revision":"e2cce4f64f2a70fa1b9f222fc91d641a","url":"./archives/2019/08/index.html"},{"revision":"8dffc1781382417c65b0c0e48a41e0ae","url":"./archives/2019/09/index.html"},{"revision":"abf4b8e4b75defe9c16472384cb46d64","url":"./archives/2019/10/index.html"},{"revision":"84f3b70aa9b022034aa9d2447680f316","url":"./archives/2019/11/index.html"},{"revision":"6c350a0aa68de8afd47be81765645b72","url":"./archives/2019/index.html"},{"revision":"d735a0e5890f09990f12b429ebe7d462","url":"./archives/2019/page/2/index.html"},{"revision":"a2d28badfd13bfbfe4bfbb52907bd0fd","url":"./archives/2020/02/index.html"},{"revision":"8091cfa5889edce401c58cd2f712113a","url":"./archives/2020/03/index.html"},{"revision":"3eb11df27011c2cb189a942da557656e","url":"./archives/2020/04/index.html"},{"revision":"673dc32336fca22ea136b1ffd168a5ee","url":"./archives/2020/05/index.html"},{"revision":"7c0b62e92f89b3c38a8bb24707dac5bd","url":"./archives/2020/06/index.html"},{"revision":"1ea41b75ffb8c628a21776aa9af7b240","url":"./archives/2020/07/index.html"},{"revision":"ebb90bd090644e4d920efdc1d36b98f3","url":"./archives/2020/09/index.html"},{"revision":"6beaf06bcd14735f0bfa0d03ae616625","url":"./archives/2020/11/index.html"},{"revision":"7350f3be7f17b4149c87cfa7ff3fb9e1","url":"./archives/2020/index.html"},{"revision":"76a6fff176c2d0db115add83e1551388","url":"./archives/2020/page/2/index.html"},{"revision":"1f3d941388d004ca54a84bc23bc4a17a","url":"./archives/index.html"},{"revision":"4da7566542040fe3d29d0adafc34ce17","url":"./archives/page/2/index.html"},{"revision":"b419a532a2cdf50edf07c9ad7253f213","url":"./archives/page/3/index.html"},{"revision":"735b01a3fcd9290ea905a56934f207bd","url":"./categories/编程/index.html"},{"revision":"cf66b51a26efe68e8d72b8df4d29d3e7","url":"./categories/技术记录/index.html"},{"revision":"387620e9bf144239f186d1a18563de3a","url":"./categories/随手记/index.html"},{"revision":"847595e1b97550d12c34144a5d6af038","url":"./categories/碎碎念/index.html"},{"revision":"78674833b0c68c46201879022a787849","url":"./categories/我的-Android-应用/index.html"},{"revision":"85ea72ba106a2cd973948ca640ba2e9f","url":"./categories/星之卡比系列教程/index.html"},{"revision":"a16377277f6fdcd884ad059fe138ac31","url":"./categories/正经文字/index.html"},{"revision":"904fda65c48d414167d8b2ffcbc92df4","url":"./categories/资源/index.html"},{"revision":"01595c98688027a37d86070890cef3b3","url":"./categories/index.html"},{"revision":"aaa0a728c1943c45964d74160a4590aa","url":"./contact/index.html"},{"revision":"7bfd5a16c64e2eb8602e1651f29756d1","url":"./css/app-refresh.css"},{"revision":"8ee6168510c2d6a12dbdce06290a334b","url":"./css/black.css"},{"revision":"ee21c7086a59d52b97a9e7b6240a9414","url":"./css/blog-encrypt.css"},{"revision":"c27c5e199127105dd8d9462af6aa412c","url":"./css/font.css"},{"revision":"e175de66b083dfbad3f4120f67ab876d","url":"./css/heimu.css"},{"revision":"8a864fa664a43a77ddf9478c21fd9fd0","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a04757804840e4e870b5310e37fcbc37","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2"},{"revision":"c318a45b45be019ffdeb8c9ac6a41283","url":"./fonts/JetBrainsMono/JetBrainsMono-Bold.woff2"},{"revision":"045b7ab8d749812c052e9eca1ec5db07","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2"},{"revision":"c3c08fc9f418f827eb3eed1b0ebe48c8","url":"./fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2"},{"revision":"06bf22283c831651e111b08000e502fc","url":"./fonts/JetBrainsMono/JetBrainsMono-Italic.woff2"},{"revision":"dd0da6de6c2340f4bf0aa4108f98a63f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2"},{"revision":"54b6827550ef145b4c1968518a96070f","url":"./fonts/JetBrainsMono/JetBrainsMono-Medium.woff2"},{"revision":"3eacd63796de4b39bc102dae7b143ca5","url":"./fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"},{"revision":"2f9ab38e183ea7464dab1e516d799a2c","url":"./gallery/index.html"},{"revision":"0e2a55a81149d0beca3ea9c46be43f75","url":"./gallery/kirbyimage/index.html"},{"revision":"1195060ead7edb4941004fd9dba33d8a","url":"./gallery/photos/index.html"},{"revision":"08439ccc7456096de2b0ef0c2a94344b","url":"./gallery/wallpaper/index.html"},{"revision":"dc3fb1a5b69fd9122cb51108a285fa35","url":"./index.html"},{"revision":"260a5fc0ca50374a1bb11b1e74de8462","url":"./js/app-refresh.js"},{"revision":"4161e4f81ad949ba121e5c04b729c196","url":"./js/crash_cheat.js"},{"revision":"1c7d6eb8f8b1a9e2a06c37906146eb84","url":"./js/main.js"},{"revision":"e6a9c3f8fa43a7d3421169ea96eef44e","url":"./js/search/algolia.js"},{"revision":"86e7fcbc5aa273e6c3d2c94b0054809b","url":"./js/search/local-search.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"5720a78dca20fab16f21914ae3ac0757","url":"./js/utils.js"},{"revision":"f1c932790ec55934e04634fd752a3d8e","url":"./lib/blog-encrypt.js"},{"revision":"5384ce96a393214fe7d3b17116456340","url":"./link/index.html"},{"revision":"e897cd4831baf2e2412c8e82ad81b357","url":"./manifest.json"},{"revision":"a5ad533462f49e32343df312dcba6e9d","url":"./page/2/index.html"},{"revision":"45d106e3a117b7803116c4e75da60695","url":"./page/3/index.html"},{"revision":"b64adf1f5dfcbf936887dd1e936f9d2d","url":"./PGP/index.html"},{"revision":"9fa69308b330153caaa516ee243af565","url":"./posts/12e7f5da/index.html"},{"revision":"68068020ff5255db7f3b1f2490eb72fb","url":"./posts/2bdd4eaf/index.html"},{"revision":"d92cd770014ac184dce94ee75e8dea16","url":"./posts/2fbba4ed/index.html"},{"revision":"3dc06ca1a1ef7fa48fc3cf9ea5cfc0a0","url":"./posts/417dae5e/index.html"},{"revision":"945107168695b43bb10996eeb6ba8a4e","url":"./posts/4d70a82d/index.html"},{"revision":"495b43bb7dcd62819399aecac3efe6f1","url":"./posts/51f7c2cb/index.html"},{"revision":"15da78a34564fef124719f0c590dfcc5","url":"./posts/58ae8d54/index.html"},{"revision":"cbc219b1c6ba89bfb79b1ce405344465","url":"./posts/64b2bc9e/index.html"},{"revision":"d34cc9d1942c7288c39e7236fe950a66","url":"./posts/6b0c894/index.html"},{"revision":"6d5f8a1b8807925532b720483989de03","url":"./posts/743f9c80/index.html"},{"revision":"a55cf6515fac6c9a720cfcc29cc93ed1","url":"./posts/75f0fab2/index.html"},{"revision":"447829588b166ff9ddcc0415f6e26bec","url":"./posts/7935321c/index.html"},{"revision":"cb00d6fb2323c5fbba240763b43ae381","url":"./posts/8e165a5c/index.html"},{"revision":"9cdca22d36a645755fd2b7e9022c0105","url":"./posts/919199f6/index.html"},{"revision":"70d6317bd9830831759f98852c8d6604","url":"./posts/9cb48aa5/index.html"},{"revision":"4f5874996007451c4c9b0b91315559c6","url":"./posts/9e078f24/index.html"},{"revision":"08c1d7a4541e7f8083ddff00eac1b727","url":"./posts/a505f9a9/index.html"},{"revision":"cec77d1e858291585fb8662af4aaa806","url":"./posts/a6366ad5/index.html"},{"revision":"6fb6113555cb339f62673c204fd2aa9f","url":"./posts/b0821049/index.html"},{"revision":"2752f9341ab8b8ea7c8bc2f9148fa241","url":"./posts/b36c6159/index.html"},{"revision":"2acd8eece781d37ea95ac837df9700dc","url":"./posts/cd1c3d2a/index.html"},{"revision":"6f5287bedca194533e3b29a93b817d86","url":"./posts/d46d4e39/index.html"},{"revision":"5b2f1c643ecd00837769d70f2a6e1750","url":"./posts/dc790cfc/index.html"},{"revision":"75c41cf51cbf274c4a3546a90aa827af","url":"./posts/e5477819/index.html"},{"revision":"0230ec07e9df9a095fb6083f0600c7d5","url":"./posts/e9558acf/index.html"},{"revision":"2c495c581b94db81de13493df0536e53","url":"./posts/ea8a69ac/index.html"},{"revision":"b55be6d1613a89a67e7c19a63ad8fe06","url":"./posts/how2ask/index.html"},{"revision":"aafea8ce5156b7b886632e591620c27d","url":"./posts/ka_faq_cn/index.html"},{"revision":"31a84f20f01692f6d00c4f8683b3ad41","url":"./posts/ka_faq_en/index.html"},{"revision":"8256216643e4300a41d3ec492a2c1941","url":"./posts/ka_faq_tw/index.html"},{"revision":"5a2c7e00b992c08b3a40622b2705ac61","url":"./posts/moekirby/index.html"},{"revision":"aee525429d0e87a22d17ca7e7eee1666","url":"./posts/moneydodo/index.html"},{"revision":"ccbc9e128159b67d4cd12dd65301f13f","url":"./posts/notes/index.html"},{"revision":"10e5b6eed49c91ac3ed0230f0d18119a","url":"./posts/szeer/index.html"},{"revision":"4bbed7ae414bf5a377fcc5a0bf6958ea","url":"./posts/vpn/index.html"},{"revision":"a2cd07c39ac5b316d5427f1421f4e001","url":"./service-worker.js"},{"revision":"5497e17c94083a2c7ff9aa6e83a9e047","url":"./steamgames/index.html"},{"revision":"5cce056d9fcaebccf950b2f3c3738fbc","url":"./tags/宝塔面板/index.html"},{"revision":"1ef1354c1601567c5179508f16d3a17a","url":"./tags/踩坑/index.html"},{"revision":"e2f911e672a79921bbfbeaae2cfe3047","url":"./tags/代理/index.html"},{"revision":"95231d82114550d99f6c4004c1516c4b","url":"./tags/读书/index.html"},{"revision":"077eb24ab4017bbf427e583ef83ed1dc","url":"./tags/读书无用论/index.html"},{"revision":"ae20ceb9bf82906f79648ab174a34b66","url":"./tags/更新日志/index.html"},{"revision":"5159b89c042556fe03181a76366258fb","url":"./tags/环保/index.html"},{"revision":"2f6a252507de065a75ef2f34cef69391","url":"./tags/开往/index.html"},{"revision":"046be01765b5a1c0b99642969ce45820","url":"./tags/看法/index.html"},{"revision":"7b146a8f2d43c5f6f5f3ecbb9d10a3eb","url":"./tags/酷Q/index.html"},{"revision":"c0feccfdb7a528c74b555e530e4bc101","url":"./tags/弃用/index.html"},{"revision":"c17dfea7577d45f02f21aee199286846","url":"./tags/软件推荐/index.html"},{"revision":"3d801656cf38f7037dc6affe949df631","url":"./tags/视频/index.html"},{"revision":"ae61eac243c396384deff920c26ca1d4","url":"./tags/塑料产品/index.html"},{"revision":"73769bbd76d3c22d17c33ec40b37a823","url":"./tags/网站搭建/index.html"},{"revision":"d31fa980b251f43c5e1e079cd7499ad1","url":"./tags/为什么/index.html"},{"revision":"eb32089bba8f9005aae69786f590afa9","url":"./tags/星之卡比-Wii/index.html"},{"revision":"aba8a001fc7a1490f159a9722c06c95f","url":"./tags/星之卡比/index.html"},{"revision":"edb8d51e80b8a6cbc223fba148f7f937","url":"./tags/学习/index.html"},{"revision":"32d8fc3aa6be247dc7c54a38075049e7","url":"./tags/游戏推荐/index.html"},{"revision":"112f5ded490d6dc9c6475904da243f0f","url":"./tags/Android/index.html"},{"revision":"4c0ca9f35af9308bd6787f0d9ed7699a","url":"./tags/Dolphin-Emulator/index.html"},{"revision":"be5c2b3782b8a1f5185b81717ca94c39","url":"./tags/FC/index.html"},{"revision":"1e931e5c65a952a1e54b5b0432f32090","url":"./tags/Fragment/index.html"},{"revision":"f428d5a6c0a225a205022f491c8a4a1c","url":"./tags/Git/index.html"},{"revision":"c7f4e267be1816101c49d359df864613","url":"./tags/Hexo/index.html"},{"revision":"ed8b6a1e6c235791ac0076a72761bf8d","url":"./tags/index.html"},{"revision":"a0ffc125e823b2f6e6de2ba916b0ae64","url":"./tags/Kirby-Assistant/index.html"},{"revision":"f7d84db79680f8d71bcd024b860efcd9","url":"./tags/Kotlin/index.html"},{"revision":"ce6e319df8457eea8100b9cf1d101cbf","url":"./tags/LGBT/index.html"},{"revision":"52f70f83bfd8b2b599ffbdc261e33030","url":"./tags/linux/index.html"},{"revision":"95da281ffab8dd4ed27a743d38ac7a53","url":"./tags/Material-Design-2/index.html"},{"revision":"eff94bdebcd06e8aafe7456e6ed811f2","url":"./tags/Python/index.html"},{"revision":"1fb7c4832227629913f446ecaff9b5ed","url":"./tags/ssh/index.html"},{"revision":"d8334087445caa22a8ea45031dc689d7","url":"./tags/ViewPager/index.html"},{"revision":"212c915900654649b2572139296de47c","url":"./tags/VS-Code/index.html"},{"revision":"3408379a64bb94d986e2c7a66eb3fa39","url":"./tags/Wii-模拟器/index.html"},{"revision":"c907e080ee38bffa5e39228e3ce3cec0","url":"./tags/Windows/index.html"},{"revision":"6825d505f8dea386e44c735f5306f065","url":"./tags/WordPress/index.html"}], {
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
