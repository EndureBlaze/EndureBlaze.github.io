/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","9bd1d4bf19c3963e4ed156d2fdd06b01"],["/PGP/index.html","a5d35886c7546ab5dc3b0d7debde7df4"],["/about/index.html","c24a8884345f9d43963084926fa923f7"],["/archives/2019/07/index.html","d506b89fd38d7bb5dd6bb76257ba9fad"],["/archives/2019/08/index.html","4ce327dfbd6248abc8d0b3f74c4431c7"],["/archives/2019/09/index.html","36666426c473c11e1c1881eab9f93946"],["/archives/2019/10/index.html","4705f301abf1ff84d4f86dfb665a58f9"],["/archives/2019/11/index.html","9b985d7f062de708b55b1b7fe4bf939f"],["/archives/2019/index.html","d2372f17175308cd16c9c998b84c0c48"],["/archives/2019/page/2/index.html","efdbe9eb87083c5c82108e0edef96c04"],["/archives/2020/02/index.html","84f80f21b3730444b6aafb975c4818ac"],["/archives/2020/03/index.html","e673b2d405dbb6c10828fa5d13eac2f1"],["/archives/2020/04/index.html","d95a79b0f228f4a8426d97dc0c120e9b"],["/archives/2020/05/index.html","a3e20a1b2908fb0274a4c8fc9523c33d"],["/archives/2020/06/index.html","cd27c7b05b11ddba62d74081bb1280db"],["/archives/2020/index.html","186b8c455b093ef5366830654ef8473d"],["/archives/index.html","6a95aafe7b94316fb3efc4bbb7dd1cbc"],["/archives/page/2/index.html","420072b45e54e2c203ca75c22a90d030"],["/archives/page/3/index.html","6e7ec7820a68d3344e64360d04f20cfd"],["/blog_image/Git无法pull/fail.png","0ae1448aedaa66c40442673dfe4eb7ce"],["/blog_image/Kirby_Assistant_编年史/ka-0.4b1之后-双图标-主图标-hk流星.png","ebffda474e42f26be65d763d281d2140"],["/blog_image/Kirby_Assistant_编年史/ka-0.4b2后-双图标-副图标-Markuss.png","7586e5e873ff8b6eac91a1417dccd541"],["/blog_image/Kirby_Assistant_编年史/ka-1.0.jpg","5afe3ccd7fe19913c16b7713236b27b7"],["/blog_image/Kirby_Assistant_编年史/ka-3.0.jpg","43ecaff8ce8bc498248545a6e80869a0"],["/blog_image/Kirby_Assistant_编年史/ka-初版.jpg","8759796f318934e8a080c941624719b6"],["/blog_image/Kirby_Assistant_编年史/ka-测试版界面.png","3900c7d277aae9cdb8f74652bfbf69cb"],["/blog_image/Kirby_Assistant_编年史/kd-0.8到1.0版本前.png","05c6eccaa1bb293ba98f7184244d742f"],["/blog_image/Kirby_Assistant_编年史/kd-java.jpg","87b4294f985ab26cb203990cb168eb38"],["/blog_image/Kirby_Assistant_编年史/kd-初代后到0.8版本前.png","f04a2648f9caeb3bfde2d8bfe4af1d3f"],["/blog_image/Kirby_Assistant_编年史/kd-资源最终版.jpg","c95d4c61e80628ac826995ac540257a9"],["/blog_image/Kirby_Assistant_编年史/kd1.0到2.2.3.png","34c3085326cb360f0ece50a4ef55c271"],["/blog_image/Kirby_Assistant_编年史/初代-使用且出现视频.png","d7f19046536319f47eef74d49bc42d6f"],["/blog_image/Kirby_Assistant_编年史/初代-未使用.png","e5c970aaa50da49baea273ac631bd992"],["/blog_image/Kirby_Assistant_编年史/空间截图.jpg","7e5bb8e4cdfeb3f311c3f73887bfdf2e"],["/blog_image/Windows软件推荐/(1).png","40564027c14d0719f4c5830c79862876"],["/blog_image/Windows软件推荐/(10).png","c6811d1d1c7404726511a58f5fc370d0"],["/blog_image/Windows软件推荐/(11).png","cb9fd0d323bf9b7de37a937681b84679"],["/blog_image/Windows软件推荐/(12).png","74fe113eb45c1ed27f95ea0ee00a3a45"],["/blog_image/Windows软件推荐/(13).png","eb58b0f6cdc5377ef25a46dbe692fb3e"],["/blog_image/Windows软件推荐/(2).png","26262adae9b06af5a5098c1b35f73b63"],["/blog_image/Windows软件推荐/(3).png","f8c03003793e50cd21df559f4ece83c2"],["/blog_image/Windows软件推荐/(4).png","bd8b3306fd848d8a4ac7afbf8ea63a27"],["/blog_image/Windows软件推荐/(5).png","7a49d4152ab56dc17581f6846e0bfccf"],["/blog_image/Windows软件推荐/(6).png","7f6e3234b87cdc70d5bd7e650f721d5a"],["/blog_image/Windows软件推荐/(7).png","9aac30110e2060c81fcae1d20917c583"],["/blog_image/Windows软件推荐/(8).png","bc2c1a1a993d5361276c798c195cfcea"],["/blog_image/Windows软件推荐/(9).png","780061807f30cd2c0b63b7c04d51c3eb"],["/blog_image/在线游玩FC（小霸王、红白机）、街机游戏/网站标题界面.png","9f4fd8365ac484bc3a08b803ed71d4e4"],["/blog_image/在线游玩FC（小霸王、红白机）、街机游戏/联机.png","4c2da9d54e07ef5821f27efee69af328"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/修改扩展.png","441374cdfacabbf2029fdc9866aa207d"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/修改扩展1.png","7f6d07a35504b94d4d4a7def96baf817"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/修改语言.png","14b1932085552151b66c5b7c604cd2aa"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/卡在白屏.png","953b603d72366bd63095139811f4dfdb"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/无法进入.png","bcf48b4d7c258aba14173d917ecd0982"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/查看语言.png","3913a454fd1a7f7b1bb8fe6bd2911c66"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/正常运行.png","73a0497070a3507b47978617f4cc7d7d"],["/blog_image/实现滑动隐藏ToolBar与BottomNavigation/最终效果.gif","22d9ac8c60313a66c4b334493e8b1910"],["/blog_image/搭建/(1).png","f44e0fccd4aac9d6cf5657e5dad88559"],["/blog_image/搭建/(10).png","71b99f0d0cbdd0eb490d876efa7886b6"],["/blog_image/搭建/(11).png","d6e514a132bd04e0c9c5c2fde848861f"],["/blog_image/搭建/(12).png","04860081d46ed796c8f4a7fc74785db2"],["/blog_image/搭建/(13).png","1d1b1e4baa58828f764fb8f7fd6c7763"],["/blog_image/搭建/(14).png","a09c9ea54b3cbc9b68054af7d1f0d978"],["/blog_image/搭建/(15).png","ff6cb19e0f6ab2a4228f11824f542889"],["/blog_image/搭建/(16).png","1e073b1200d1846abc6bd279bc2d3e7f"],["/blog_image/搭建/(2).png","9e6cab124d7bd351e0e218209b121f00"],["/blog_image/搭建/(3).png","e510277ba7519180e7ab96c6ad311968"],["/blog_image/搭建/(4).png","d64e743ae8242a9fd2e677302cfda728"],["/blog_image/搭建/(5).png","c8d440852ed56ba3ba152723c4562343"],["/blog_image/搭建/(6).png","650629752ce4ae321e28c69a11f80c54"],["/blog_image/搭建/(7).png","9640551229d744485c6b4342f6fc8890"],["/blog_image/搭建/(8).png","4d9a84b980e30e479b41f40fe73ffc38"],["/blog_image/搭建/(9).png","351bfa1032c5f72fd4553572905e97ca"],["/blog_image/解决VSCode编译CC++是输出中文乱码的问题/修改前.png","6f705ce0bd872ca5da71d7625b7b6872"],["/blog_image/解决VSCode编译CC++是输出中文乱码的问题/修改后.png","2ee8287b640f7083a4e439d9cf5b9631"],["/blog_image/解决VSCode编译CC++是输出中文乱码的问题/按钮.png","897396b43a6877cea4405694ca4dd775"],["/categories/index.html","4a1c891897c6fdc80cc971dfb3f8881c"],["/categories/我的-Android-应用/index.html","8170a36eda717d4feb1fd1e19a970f64"],["/categories/技术记录/index.html","d23d9bf0f4a1877bc02b373db1b265e9"],["/categories/星之卡比系列教程/index.html","5fb065bfae985090f96f806a39af599f"],["/categories/正经文字/index.html","ed08ee57973a07e6609c6621cb4f84b8"],["/categories/碎碎念/index.html","df4aefa1b7e5faf89c9b64534ff400b7"],["/categories/编程/index.html","1d03c2adf355df5e359a5d54f4d4a502"],["/categories/资源/index.html","922e6f73526b9f3803f09803ef82bc0c"],["/categories/随手记/index.html","7a2453184eb31692e9daad0a1f5204c6"],["/contact/index.html","2d3432ef7fd5af0b02848111cc276fde"],["/css/black.css","8ee6168510c2d6a12dbdce06290a334b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/font.css","c27c5e199127105dd8d9462af6aa412c"],["/css/heimu.css","e175de66b083dfbad3f4120f67ab876d"],["/css/index.css","6a8d02b860e228df928ca600c9e10bc8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2","a04757804840e4e870b5310e37fcbc37"],["/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2","c318a45b45be019ffdeb8c9ac6a41283"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2","045b7ab8d749812c052e9eca1ec5db07"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2","c3c08fc9f418f827eb3eed1b0ebe48c8"],["/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2","06bf22283c831651e111b08000e502fc"],["/fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2","dd0da6de6c2340f4bf0aa4108f98a63f"],["/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2","54b6827550ef145b4c1968518a96070f"],["/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2","3eacd63796de4b39bc102dae7b143ca5"],["/gallery/index.html","6e2ef7d4bdb39071e924fab5f3e83f7d"],["/gallery/kirbyimage/images/个人吧绘图-雪再霏霏.jpg","0463c10c56944c6728247bb6a2808962"],["/gallery/kirbyimage/images/拟人-叶忍.jpg","2e2571fb5340dcac94ab779151dc8798"],["/gallery/kirbyimage/images/星卡+MC-贝贝.jpg","c4f2320a7e1aa055d0f818f4ece47856"],["/gallery/kirbyimage/images/普通-布偶卡比兔.png","193629f5d25270ba330584d5dc192333"],["/gallery/kirbyimage/images/普通-幻爱y卡.jpg","cff4788c14a8b165ef38c15677a1f1bd"],["/gallery/kirbyimage/images/黑化-未知.jpg","0f92194f16dcde07656751794b3e9740"],["/gallery/kirbyimage/index.html","6a4dd1e7e01184ddaa79d62faead1eb2"],["/gallery/photos/images/0.jpg","fa4cc8ef9ebf1afa7715456da8011af8"],["/gallery/photos/images/EINbyZyXsAAneJd.jpg","6661b377395407c4e2e8c0203f8a2098"],["/gallery/photos/images/ELHXOCKVUAEWWVA.jpg","872a2300c0b44cc514146c6d56ac52b9"],["/gallery/photos/images/ER0jHgoU8AAELyo.jpg","e92609823d254ec1da1085bd4851861d"],["/gallery/photos/images/wallhaven-ne9rkk.png","e96b8b0a0de905376fc3493aed73c61f"],["/gallery/photos/images/wallhaven-p268l9.png","c7664244673ad53f9098a1d31cab3b79"],["/gallery/photos/index.html","f62bf07c3c33f50aed264397ee150a61"],["/gallery/wallpaper/images/1.jpg","23d20234db7fc0f52bfc395553625771"],["/gallery/wallpaper/images/2.jpg","638b554b8c0af885bf979ad377fbaa32"],["/gallery/wallpaper/images/3.jpg","a0c3209cc9c8515b9466d29db77c8904"],["/gallery/wallpaper/images/4.jpg","ad5f9abd4963c91309e8a7a4aa500718"],["/gallery/wallpaper/images/5.jpg","2ef419d70fcc84b3ea1064e2bf42aac6"],["/gallery/wallpaper/images/6.png","a851d9965c44f297510df5a7d72e8791"],["/gallery/wallpaper/images/7.png","eb57c29b97e2d1a08f64761d770e88e8"],["/gallery/wallpaper/images/8.png","6888f6faa8922866860bccc3345960ce"],["/gallery/wallpaper/images/9.jpg","2526ff12f157f774428eef9a08fc6ec2"],["/gallery/wallpaper/index.html","dceeeba21d03e4c641f2f919a16e1c94"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","61bb546ae69beb51ebb7f10ee909dcde"],["/js/crash_cheat.js","4161e4f81ad949ba121e5c04b729c196"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","4d3120f6774bcb7335e30b27defaf7f2"],["/page/2/index.html","bf9ea3ea4d853d86fe2f2631d7ba94a4"],["/page/3/index.html","80009eed5d5017b6828ecf08f8d918a2"],["/posts/12e7f5da/index.html","42e8fef32d2f49ebf9d21a24add63b58"],["/posts/2bdd4eaf/index.html","6440a1b30c6b6791f8bbd36451804e14"],["/posts/2fbba4ed/index.html","b2900ec0223e8df34754341fda76bd53"],["/posts/417dae5e/index.html","fb8a4c2394328c2c2d44b8470ed4c477"],["/posts/4d70a82d/index.html","ef91c21d61d9ea076ced65d62e9af42f"],["/posts/51f7c2cb/index.html","9fc66e8192d193a25a4ddf6b9a651abc"],["/posts/58ae8d54/index.html","4912a12da61d8f943477e463c92fce64"],["/posts/64b2bc9e/index.html","cdf12ab693fe5396edb1e9ecc212f6fa"],["/posts/6b0c894/index.html","1c6f61a6fc182b119655cb4fd2bb5305"],["/posts/743f9c80/index.html","f2ad185b8881489f24133a03d8b9c424"],["/posts/75f0fab2/index.html","4a1adfc82f7a9ed53ed5f5aa13548b53"],["/posts/7935321c/index.html","6e4d8794dcaad0cd3451e925c0274f44"],["/posts/919199f6/index.html","b07a25d74dd2b353b406620c5afdfe16"],["/posts/9cb48aa5/index.html","9254ca90244166dbe134a677e05539c4"],["/posts/9e078f24/index.html","82a771d53e14e806eeadd63e6ef115d7"],["/posts/a505f9a9/index.html","e8105a514438266b474b0e49c4ee20e8"],["/posts/a6366ad5/index.html","4a1277ac7c4cd204be8f81c27b4288bc"],["/posts/b36c6159/index.html","a12d0c39d6474909015b304bdbeab9fc"],["/posts/cd1c3d2a/index.html","a9d375911aa3066aefb2e69d41b1f82c"],["/posts/d46d4e39/index.html","b4553f203ef9cf4478c0ee9ac3e33e11"],["/posts/dc790cfc/index.html","7b28dc5c640b2d4f3db613a3ace820ee"],["/posts/e5477819/index.html","07669ba0ca4bb0bd33901960eb0c9165"],["/posts/e9558acf/index.html","f1e562a8261720889e601457ea8b2763"],["/posts/ea8a69ac/index.html","e2064e85f2f645556f0a54ee157fa93d"],["/posts/how2ask/index.html","34b64f495ae33c676a90a339dd911fb2"],["/posts/ka_faq_cn/index.html","f586e93ad778ea251c9b9feb7ea3a9b0"],["/posts/ka_faq_en/index.html","8385f0107e71152fd2e08b0fd165ad16"],["/posts/ka_faq_tw/index.html","702862b6679602aef17e49a4505d4c78"],["/posts/moekirby/index.html","7d4b1b6d32ffce9588dd1f3eedee6427"],["/posts/moneydodo/index.html","56741b04ed0864282e27cb68bf747fab"],["/posts/szeer/index.html","3bcd068ef11248a429d38ab5c496cb9f"],["/steamgames/index.html","3a9deaf880665b2b1bf523558279fb8e"],["/tags/Android/index.html","2a5e34b8033b1f812744cb2553ffad00"],["/tags/Dolphin-Emulator/index.html","560a47bbb568f84c630f8bfb5d1ff648"],["/tags/FC/index.html","299446c40ddddfa2a178b8c2404007ad"],["/tags/Fragment/index.html","8b01c1d8bf8aef53f9f4d866ac40cfc5"],["/tags/Git/index.html","8715267e51ffc3cbf8eafbedf970d3e7"],["/tags/Hexo/index.html","51e75f3997a8fda9e825dae750dd8b8b"],["/tags/Kirby-Assistant/index.html","98d626129c4f5370506f3b10907f24f7"],["/tags/Kotlin/index.html","abbc997154e9c80d36bab3e90ab54f98"],["/tags/LGBT/index.html","bba916bcc28b16ab58fc589c20dd385b"],["/tags/Material-Design-2/index.html","66ec135147296311850a0f36e8626fd8"],["/tags/Python/index.html","5a7b861548a4930d626bc2a7ee0b7712"],["/tags/VS-Code/index.html","efbdaa449e6f58394b35c99b5b4c464b"],["/tags/ViewPager/index.html","e2dd27bb8bd0795a4c98c28e21c35738"],["/tags/Wii-模拟器/index.html","60274de47bb23ba43b5d81c319d554a7"],["/tags/Windows/index.html","11586063ee57793820e7e1b49453ba2f"],["/tags/WordPress/index.html","962abf000c3b6ddcd1b81a5af7d915e7"],["/tags/index.html","3836d8738a0729822e88ca47f00b9fd3"],["/tags/linux/index.html","63aa322c6748dc2674febcacfebcc3af"],["/tags/ssh/index.html","c30e775eff2cf6589247e8da1dba32b1"],["/tags/为什么/index.html","108ba14fdaa277265615216aa405e62f"],["/tags/代理/index.html","751de547adf1d6b7ffbb3643fa823dae"],["/tags/学习/index.html","950e8beb1003282774e32c6211aad418"],["/tags/宝塔面板/index.html","4bfba8405a15e599b03df799d5db3394"],["/tags/开往/index.html","29896a81c8d2f23e94ed15fcca6189bd"],["/tags/弃用/index.html","12b49faefc5c2c35571a22becc4e5ce2"],["/tags/星之卡比-Wii/index.html","23185938308c903258c828decf829945"],["/tags/星之卡比/index.html","d8628bf5a890beeb01283552166de9af"],["/tags/更新日志/index.html","608c2e6b4e45df053f2c9dfb90d15a5a"],["/tags/游戏推荐/index.html","ea50c50563b9cacac3adba8dfb51a414"],["/tags/看法/index.html","9cec13beee43234ba789f7d9bf720c59"],["/tags/网站搭建/index.html","18a3eadcf46f3ceba6dac21fbcb3d420"],["/tags/视频/index.html","ca68267911488978c1f65779b7f4d337"],["/tags/读书/index.html","1fbf4c0fcc0811a9bdef2bdf2808b9fc"],["/tags/读书无用论/index.html","330544ca13b73784b6ed02be4efd30ea"],["/tags/踩坑/index.html","e09630598ad655aae9ed63030a07aacc"],["/tags/软件推荐/index.html","061fe5613e4b72ceb9fdc2f5e0ac2988"],["/tags/酷Q/index.html","7ab18c70e039fac9711be105169499fb"],["/uploads/alipay.jpg","2987386afbe599c24a6150ee4440558d"],["/uploads/avatar.png","655af5d556868fde9040bdd02fbcf2e4"],["/uploads/background.png","032563bac5d09e3855e81a7906ec41fa"],["/uploads/blog_title/Git无法pull仓库.png","09eddb8bfe6da19e7039bda4a9fdb4b4"],["/uploads/blog_title/Windows软件推荐.png","0218bc87516c1de93ec4a712a5f0af24"],["/uploads/blog_title/android开发.png","7491f874ebb487ec3f77f8a386616ef5"],["/uploads/blog_title/android开发Kotlin.png","05476ed58d1dfddac5c29861b243560e"],["/uploads/blog_title/kirbyassistant.png","548b9a47a8353f6475bdf4ab19dd6031"],["/uploads/blog_title/ssh.png","92ea114fe638dc928a9682043ad118ee"],["/uploads/blog_title/一些WordPress主题.png","3899f29794591f2e78c713e19138056d"],["/uploads/blog_title/不一样又怎样.png","3db2d3d23a10f5a4ccc4187f8d2f30b9"],["/uploads/blog_title/为什么说宣扬读书无用论的人要么蠢要么坏.png","9aaeea13a1cc1cf8b73d7837d4468830"],["/uploads/blog_title/偶然间在B站看到的鬼畜.png","e9ee88644d3528a39623bfc2dce596e5"],["/uploads/blog_title/半自动化生成博客相册.png","dcca2124c74f6cffd7ca9baf53519cb3"],["/uploads/blog_title/在Linux服务器上使用coolq.png","4412fd12ae1c81905a8ab9442bfd6c06"],["/uploads/blog_title/在线游玩FC（小霸王、红白机）、街机游戏.png","d71432b4d1cf839b5ff39e946250e6c3"],["/uploads/blog_title/如何优雅的使用MaterialDesign2.png","ab240c2448f73288c937e29fb583f23e"],["/uploads/blog_title/如何使用DolphinEmulator玩《星之卡比：Wii》.png","0e4acd2337c4ebfabcf9df62c8e5c515"],["/uploads/blog_title/开往-Travellings.png","585c27ca84891515566834fc5fcc42b7"],["/uploads/blog_title/我为什么要搭建博客.png","f9d427d9d6559887b3a6305248e4a3b3"],["/uploads/blog_title/解决VSCode编译CC++是输出中文乱码的问题.png","8ab42bd70e6e1e48049baf7c0b584519"],["/uploads/blog_title/记一些Hexo报错.png","dbf2fa2e277d43295e9a258650723a28"],["/uploads/blog_title/记一次WordPress搭建与宝塔面板配置.png","1d2f6485ef518289fef37165dc934f84"],["/uploads/favicon.png","e86be6e532d350da056524afc1a1464c"],["/uploads/icons/icon-128x128.png","7767d72f491c62998a3f6176808ef114"],["/uploads/icons/icon-144x144.png","00cad601675fa32d70b5cb725b793391"],["/uploads/icons/icon-152x152.png","cac9edaba3f52638b1cb5a826e654fa9"],["/uploads/icons/icon-192x192.png","85c3cb2e831c091eb539cce126a81de6"],["/uploads/icons/icon-384x384.png","b7fff1aeb81767438c822b27788e7202"],["/uploads/icons/icon-512x512.png","bc8db8a33c197a4c8eb6104c51d51f64"],["/uploads/icons/icon-72x72.png","8357fc10377b11dd2cc3d73b959f181f"],["/uploads/icons/icon-96x96.png","45aab735efe580d917c4db906f39168d"],["/uploads/loading.svg","3be55ca1404f66f0d5d055510214ec6f"],["/uploads/travellings.png","49f3acdde9d31a871655dcfff20ea741"],["/uploads/wechat.png","a3bbe36e765272000d9b734b189c3845"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://blog.endureblaze.cn"});




