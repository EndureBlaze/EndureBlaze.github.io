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

var precacheConfig = [["/PGP/index.html","a071dec61fb3b0e35887a010489aae84"],["/about/index.html","6188028b5d520f4e6137c1e6668084e4"],["/archives/2019/07/index.html","673be963ebc84a12ff3a62d33948954b"],["/archives/2019/08/index.html","7bed5638a7e65458bc50f3e5d4b21fb8"],["/archives/2019/09/index.html","8b3b6a146ec96e8e5a245f69cc4f53ae"],["/archives/2019/10/index.html","ee8a04ab50d43ae500d8ee0481e052ed"],["/archives/2019/11/index.html","4ec38a3645eb92d92b8c8a030d233b20"],["/archives/2019/index.html","ac54b95623f0d74b1f9d4359ec43abb6"],["/archives/2019/page/2/index.html","7bb29c8e6e156ec6b131986dfc9bd81a"],["/archives/2020/02/index.html","0eea67a4a6c2865a86e9f62ccc1b26a9"],["/archives/2020/03/index.html","607c20670be8cced8f7a32846cc721d6"],["/archives/2020/04/index.html","d66b8d07a4cbaaccb0bfcde511590583"],["/archives/2020/05/index.html","1a28f5734399ef15c3e6448c3f986578"],["/archives/2020/06/index.html","4f613de58b99b748d3be1eddf0239803"],["/archives/2020/07/index.html","9dabff424fc5a2823d15b4143f0cfbd4"],["/archives/2020/09/index.html","abbafd57f9c9ab7d80aef04aa776ac66"],["/archives/2020/index.html","37ce5da382534175267f7604a2c520b5"],["/archives/2020/page/2/index.html","1a70fa480326fa3a1ab0d454f1c6bba1"],["/archives/index.html","45eb8208fc7c72acdf3b0252fb55e9dc"],["/archives/page/2/index.html","8d521851a7c0530542851ff7ac4b1c29"],["/archives/page/3/index.html","a777cf93c3fa88282df68009a151925b"],["/blog_image/Git无法pull/fail.png","0ae1448aedaa66c40442673dfe4eb7ce"],["/blog_image/Kirby_Assistant_编年史/ka-0.4b1之后-双图标-主图标-hk流星.png","ebffda474e42f26be65d763d281d2140"],["/blog_image/Kirby_Assistant_编年史/ka-0.4b2后-双图标-副图标-Markuss.png","7586e5e873ff8b6eac91a1417dccd541"],["/blog_image/Kirby_Assistant_编年史/ka-1.0.jpg","5afe3ccd7fe19913c16b7713236b27b7"],["/blog_image/Kirby_Assistant_编年史/ka-3.0.jpg","43ecaff8ce8bc498248545a6e80869a0"],["/blog_image/Kirby_Assistant_编年史/ka-初版.jpg","8759796f318934e8a080c941624719b6"],["/blog_image/Kirby_Assistant_编年史/ka-测试版界面.png","3900c7d277aae9cdb8f74652bfbf69cb"],["/blog_image/Kirby_Assistant_编年史/kd-0.8到1.0版本前.png","05c6eccaa1bb293ba98f7184244d742f"],["/blog_image/Kirby_Assistant_编年史/kd-java.jpg","87b4294f985ab26cb203990cb168eb38"],["/blog_image/Kirby_Assistant_编年史/kd-初代后到0.8版本前.png","f04a2648f9caeb3bfde2d8bfe4af1d3f"],["/blog_image/Kirby_Assistant_编年史/kd-资源最终版.jpg","c95d4c61e80628ac826995ac540257a9"],["/blog_image/Kirby_Assistant_编年史/kd1.0到2.2.3.png","34c3085326cb360f0ece50a4ef55c271"],["/blog_image/Kirby_Assistant_编年史/初代-使用且出现视频.png","d7f19046536319f47eef74d49bc42d6f"],["/blog_image/Kirby_Assistant_编年史/初代-未使用.png","e5c970aaa50da49baea273ac631bd992"],["/blog_image/Kirby_Assistant_编年史/空间截图.jpg","7e5bb8e4cdfeb3f311c3f73887bfdf2e"],["/blog_image/Windows软件推荐/(1).png","40564027c14d0719f4c5830c79862876"],["/blog_image/Windows软件推荐/(10).png","c6811d1d1c7404726511a58f5fc370d0"],["/blog_image/Windows软件推荐/(11).png","cb9fd0d323bf9b7de37a937681b84679"],["/blog_image/Windows软件推荐/(12).png","74fe113eb45c1ed27f95ea0ee00a3a45"],["/blog_image/Windows软件推荐/(13).png","eb58b0f6cdc5377ef25a46dbe692fb3e"],["/blog_image/Windows软件推荐/(2).png","26262adae9b06af5a5098c1b35f73b63"],["/blog_image/Windows软件推荐/(3).png","f8c03003793e50cd21df559f4ece83c2"],["/blog_image/Windows软件推荐/(4).png","bd8b3306fd848d8a4ac7afbf8ea63a27"],["/blog_image/Windows软件推荐/(5).png","7a49d4152ab56dc17581f6846e0bfccf"],["/blog_image/Windows软件推荐/(6).png","7f6e3234b87cdc70d5bd7e650f721d5a"],["/blog_image/Windows软件推荐/(7).png","9aac30110e2060c81fcae1d20917c583"],["/blog_image/Windows软件推荐/(8).png","bc2c1a1a993d5361276c798c195cfcea"],["/blog_image/Windows软件推荐/(9).png","780061807f30cd2c0b63b7c04d51c3eb"],["/blog_image/修改Windows10的用户名以及用户文件夹/修改注册表.png","c1a64ed29540991d2aa81225d0ccac79"],["/blog_image/修改Windows10的用户名以及用户文件夹/计算机管理.png","db888cbbdf60924cd00b88940155db4f"],["/blog_image/修改Windows10的用户名以及用户文件夹/链接.png","0b49361b1936615b38dff9ebb2bb96e4"],["/blog_image/呼吸/海龟.jpg","13868fade36bb78937e898f3e955b3a8"],["/blog_image/在线游玩FC（小霸王、红白机）、街机游戏/网站标题界面.png","9f4fd8365ac484bc3a08b803ed71d4e4"],["/blog_image/在线游玩FC（小霸王、红白机）、街机游戏/联机.png","4c2da9d54e07ef5821f27efee69af328"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/修改扩展.png","441374cdfacabbf2029fdc9866aa207d"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/修改扩展1.png","7f6d07a35504b94d4d4a7def96baf817"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/修改语言.png","14b1932085552151b66c5b7c604cd2aa"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/卡在白屏.png","953b603d72366bd63095139811f4dfdb"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/无法进入.png","bcf48b4d7c258aba14173d917ecd0982"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/查看语言.png","3913a454fd1a7f7b1bb8fe6bd2911c66"],["/blog_image/如何使用DolphinEmulator玩《星之卡比：Wii》/正常运行.png","73a0497070a3507b47978617f4cc7d7d"],["/blog_image/实现滑动隐藏ToolBar与BottomNavigation/最终效果.gif","22d9ac8c60313a66c4b334493e8b1910"],["/blog_image/搭建/(1).png","f44e0fccd4aac9d6cf5657e5dad88559"],["/blog_image/搭建/(10).png","71b99f0d0cbdd0eb490d876efa7886b6"],["/blog_image/搭建/(11).png","d6e514a132bd04e0c9c5c2fde848861f"],["/blog_image/搭建/(12).png","04860081d46ed796c8f4a7fc74785db2"],["/blog_image/搭建/(13).png","1d1b1e4baa58828f764fb8f7fd6c7763"],["/blog_image/搭建/(14).png","a09c9ea54b3cbc9b68054af7d1f0d978"],["/blog_image/搭建/(15).png","ff6cb19e0f6ab2a4228f11824f542889"],["/blog_image/搭建/(16).png","1e073b1200d1846abc6bd279bc2d3e7f"],["/blog_image/搭建/(2).png","9e6cab124d7bd351e0e218209b121f00"],["/blog_image/搭建/(3).png","e510277ba7519180e7ab96c6ad311968"],["/blog_image/搭建/(4).png","d64e743ae8242a9fd2e677302cfda728"],["/blog_image/搭建/(5).png","c8d440852ed56ba3ba152723c4562343"],["/blog_image/搭建/(6).png","650629752ce4ae321e28c69a11f80c54"],["/blog_image/搭建/(7).png","9640551229d744485c6b4342f6fc8890"],["/blog_image/搭建/(8).png","4d9a84b980e30e479b41f40fe73ffc38"],["/blog_image/搭建/(9).png","351bfa1032c5f72fd4553572905e97ca"],["/blog_image/解决VSCode编译CC++是输出中文乱码的问题/修改前.png","6f705ce0bd872ca5da71d7625b7b6872"],["/blog_image/解决VSCode编译CC++是输出中文乱码的问题/修改后.png","2ee8287b640f7083a4e439d9cf5b9631"],["/blog_image/解决VSCode编译CC++是输出中文乱码的问题/按钮.png","897396b43a6877cea4405694ca4dd775"],["/categories/index.html","8863bc88d18891464710db9317a08bc9"],["/categories/我的-Android-应用/index.html","0d732ea8c2160304439d8c346869b374"],["/categories/技术记录/index.html","705fe0573bd80adcb6e78c31ca110c5e"],["/categories/星之卡比系列教程/index.html","5e46ddef729c424f597e47aca460d5a8"],["/categories/正经文字/index.html","4e26cd4c58fea12e3af4ec9610888589"],["/categories/碎碎念/index.html","1d26f70be1d07712c75fb80586c9f703"],["/categories/编程/index.html","4f1073ff27283bc06fcd6bb970c35494"],["/categories/资源/index.html","38df9ad4637314a051bccb5c1a596b63"],["/categories/随手记/index.html","3209b60e290aecff4722074d92a1c081"],["/contact/index.html","89c55afb362d223bbecd6e627f68828a"],["/css/black.css","8ee6168510c2d6a12dbdce06290a334b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/font.css","c27c5e199127105dd8d9462af6aa412c"],["/css/heimu.css","e175de66b083dfbad3f4120f67ab876d"],["/css/index.css","b02724bfddcc467ef26903d1fa661e5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2","a04757804840e4e870b5310e37fcbc37"],["/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2","c318a45b45be019ffdeb8c9ac6a41283"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2","045b7ab8d749812c052e9eca1ec5db07"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2","c3c08fc9f418f827eb3eed1b0ebe48c8"],["/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2","06bf22283c831651e111b08000e502fc"],["/fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2","dd0da6de6c2340f4bf0aa4108f98a63f"],["/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2","54b6827550ef145b4c1968518a96070f"],["/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2","3eacd63796de4b39bc102dae7b143ca5"],["/gallery/index.html","ce0bdb91b41e69a06aa3daec069df15a"],["/gallery/kirbyimage/images/个人吧绘图-雪再霏霏.jpg","0463c10c56944c6728247bb6a2808962"],["/gallery/kirbyimage/images/拟人-叶忍.jpg","2e2571fb5340dcac94ab779151dc8798"],["/gallery/kirbyimage/images/星卡+MC-贝贝.jpg","c4f2320a7e1aa055d0f818f4ece47856"],["/gallery/kirbyimage/images/普通-布偶卡比兔.png","193629f5d25270ba330584d5dc192333"],["/gallery/kirbyimage/images/普通-幻爱y卡.jpg","cff4788c14a8b165ef38c15677a1f1bd"],["/gallery/kirbyimage/images/黑化-未知.jpg","0f92194f16dcde07656751794b3e9740"],["/gallery/kirbyimage/index.html","d1406a5d1682c19c487325747d5f4098"],["/gallery/photos/images/0.jpg","fa4cc8ef9ebf1afa7715456da8011af8"],["/gallery/photos/images/EINbyZyXsAAneJd.jpg","6661b377395407c4e2e8c0203f8a2098"],["/gallery/photos/images/ELHXOCKVUAEWWVA.jpg","872a2300c0b44cc514146c6d56ac52b9"],["/gallery/photos/images/ER0jHgoU8AAELyo.jpg","e92609823d254ec1da1085bd4851861d"],["/gallery/photos/images/wallhaven-ne9rkk.png","e96b8b0a0de905376fc3493aed73c61f"],["/gallery/photos/images/wallhaven-p268l9.png","c7664244673ad53f9098a1d31cab3b79"],["/gallery/photos/index.html","7e6b77b10cd896f7453d550c8417bfa0"],["/gallery/wallpaper/images/1.jpg","23d20234db7fc0f52bfc395553625771"],["/gallery/wallpaper/images/10.jpg","fed370fd4e3f7270f88c6e81bf6a24a2"],["/gallery/wallpaper/images/2.jpg","638b554b8c0af885bf979ad377fbaa32"],["/gallery/wallpaper/images/3.jpg","a0c3209cc9c8515b9466d29db77c8904"],["/gallery/wallpaper/images/4.jpg","ad5f9abd4963c91309e8a7a4aa500718"],["/gallery/wallpaper/images/5.jpg","2ef419d70fcc84b3ea1064e2bf42aac6"],["/gallery/wallpaper/images/6.png","a851d9965c44f297510df5a7d72e8791"],["/gallery/wallpaper/images/7.png","eb57c29b97e2d1a08f64761d770e88e8"],["/gallery/wallpaper/images/8.png","6888f6faa8922866860bccc3345960ce"],["/gallery/wallpaper/images/9.jpg","2526ff12f157f774428eef9a08fc6ec2"],["/gallery/wallpaper/index.html","1c33f3d16720cbb31d285572ece5339d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c5b8273d4e651a76283e3c9c6c5e070e"],["/js/crash_cheat.js","4161e4f81ad949ba121e5c04b729c196"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","6125686f24fdd4271a28674811fa1828"],["/page/2/index.html","d59986dff8ce35668c322c3aadbd11b2"],["/page/3/index.html","881a45e8583fcf397c3b9cb42b5b77e7"],["/posts/12e7f5da/index.html","c1263ee0322700c88c1bb1558db9794e"],["/posts/2bdd4eaf/index.html","331d4316f23e9b9edeceb1b931559ab7"],["/posts/2fbba4ed/index.html","e5146e2e5edec5a2af2fc4bcea270b74"],["/posts/417dae5e/index.html","76e6cee0b1392a93b58c6140736c1ec7"],["/posts/4d70a82d/index.html","1f4d2960962e6e25a98af550df4d23fd"],["/posts/51f7c2cb/index.html","7f6c99003c21686f2312edb3a5717618"],["/posts/58ae8d54/index.html","468a746c138f25b46c82394987c63a0c"],["/posts/64b2bc9e/index.html","56cb10bded3e4d65eef2546eaa3964fd"],["/posts/6b0c894/index.html","9915b5c57019255e8df291e666a467a2"],["/posts/743f9c80/index.html","5034f7997182feb7fd6a85eb6c00467e"],["/posts/75f0fab2/index.html","21e4cc147d1b1c5f40f05a8c9863b42f"],["/posts/7935321c/index.html","a7b7e381295842e28440821724d36eaf"],["/posts/8e165a5c/index.html","23fd7f0b2ba307f8b0483fb465be8b5f"],["/posts/919199f6/index.html","e10765e0fd2780acb39b723b199c3cfe"],["/posts/9cb48aa5/index.html","3012973104dd6a5c34fe4cab83dbfef7"],["/posts/9e078f24/index.html","800765fcb3a200dd4c2909daf8d30fda"],["/posts/a505f9a9/index.html","7201a0ae55fa0b5791b0123ccc87d3fe"],["/posts/a6366ad5/index.html","63544023820b102d4791644c731c5994"],["/posts/b0821049/index.html","e551323244dce5b44c9467be1ccb5837"],["/posts/b36c6159/index.html","7b5bb89acc4d915cc0b3f57357dfa7a7"],["/posts/cd1c3d2a/index.html","b546a9a9065b63ee12d3ad2db1026912"],["/posts/d46d4e39/index.html","f2bc329b268ce7a7d18502953150a9f1"],["/posts/dc790cfc/index.html","d1cc71a2fffa24178ce395765aae5660"],["/posts/e5477819/index.html","936deb42dfd74247969df911d6df0487"],["/posts/e9558acf/index.html","2183502d5b194807b61ce22b5a1b4477"],["/posts/ea8a69ac/index.html","e521b49327c4a652d2fd5624fcc8e95a"],["/posts/how2ask/index.html","0b05880b05e5f325714c0b38f79d1cbe"],["/posts/ka_faq_cn/index.html","052b1bb58e405094028fb0e0c2ec7bb1"],["/posts/ka_faq_en/index.html","4eaa348477dcda550c062f6165c0ec3c"],["/posts/ka_faq_tw/index.html","885b42d5c6869dfe418916188c8372da"],["/posts/moekirby/index.html","bb142164ec5caa61b6577e33269e554b"],["/posts/moneydodo/index.html","6697e84d5f67ab34f0417cbb2b9bdc09"],["/posts/szeer/index.html","d0ff6d08d7d1af999134fa7fcb58f735"],["/posts/vpn/index.html","d212db79199da2d22cb1728195c3adb9"],["/steamgames/index.html","90ef409dd506cc7130d5e97a9883642c"],["/tags/Android/index.html","c809eece7c6a63f59168b3b4eaa01040"],["/tags/Dolphin-Emulator/index.html","1b05f5152af08302ae1435d43183f3a9"],["/tags/FC/index.html","d0d568f7fa4dfb830cac04ec144a221b"],["/tags/Fragment/index.html","6f8292b6d784d6a179a2648feb3c562a"],["/tags/Git/index.html","843f181b73e7a072a6e6f78bbb3ca433"],["/tags/Hexo/index.html","043310f7456461dcac27785fe5283fa7"],["/tags/Kirby-Assistant/index.html","9fc8599e5c1b02e5f22e527c762759b6"],["/tags/Kotlin/index.html","7c66d3df7e99b39c5e8a0ec258b4758f"],["/tags/LGBT/index.html","f62a66224265e582784363814cec0bce"],["/tags/Material-Design-2/index.html","34a5c8c075c1a04f6060d8a28305c415"],["/tags/Python/index.html","2eb27188e38d4bdc8f57d62c0fbad755"],["/tags/VS-Code/index.html","e2da45d11e4e8797b16b55640e1218ec"],["/tags/ViewPager/index.html","de6fb3193f5eac0b9f7a2876a7c09ff0"],["/tags/Wii-模拟器/index.html","1c71ceb02712997040b5953a28f3d4ca"],["/tags/Windows/index.html","a8f7443aebc463de04f983fb63ad56fe"],["/tags/WordPress/index.html","cd97997889fa4a4914159aed50c58002"],["/tags/index.html","4b1dade70fb2b6d00881e5cf95a7cb3e"],["/tags/linux/index.html","f255a8b5ec3f519e8635b753f2cdd35f"],["/tags/ssh/index.html","23a68918bf0dea2b05d55ee97cebd255"],["/tags/为什么/index.html","98080c4bdf67cdacf22bede44a2fcb1a"],["/tags/代理/index.html","d1046818896f4d4e72ae3e332a85d78c"],["/tags/塑料产品/index.html","6bcda530b8e3774543d647fec002ac00"],["/tags/学习/index.html","16e3b833acbc26c42411af2b859a5a48"],["/tags/宝塔面板/index.html","07e194d51cf9c24b5d567c7ca3863609"],["/tags/开往/index.html","6db87cddb4cf3df066cc641b90ed58da"],["/tags/弃用/index.html","7fc27848f20de25346df04251e187a4f"],["/tags/星之卡比-Wii/index.html","2f907c2b16ef998112fa64571b843f35"],["/tags/星之卡比/index.html","05c7cba72c7b78ff6d64f15707ca99af"],["/tags/更新日志/index.html","543cbec696304f6e21114231f581e201"],["/tags/游戏推荐/index.html","8299ab0727c95bab39ca11cb2306f7a7"],["/tags/环保/index.html","ac95ac04360368071103f25e414048fb"],["/tags/看法/index.html","848f24abaf707c178d52ed70fde64eef"],["/tags/网站搭建/index.html","4b6fe5c8a8187a8172292b905904e799"],["/tags/视频/index.html","4b8e308e7aa0865a45d2d19f2868dd1e"],["/tags/读书/index.html","93ad623229d13f816d4ac2dc21742081"],["/tags/读书无用论/index.html","5b6571fa4d6a8a8cdaf336275309bd69"],["/tags/踩坑/index.html","d310f402610d2036b27cec6b025d0d91"],["/tags/软件推荐/index.html","03a95c9cc6ff34fed86146fb678ce257"],["/tags/酷Q/index.html","5c864802f1f72684fd3bba84dc02c088"],["/uploads/alipay.jpg","2987386afbe599c24a6150ee4440558d"],["/uploads/avatar.png","655af5d556868fde9040bdd02fbcf2e4"],["/uploads/background.png","032563bac5d09e3855e81a7906ec41fa"],["/uploads/blog_title/Git无法pull仓库.png","09eddb8bfe6da19e7039bda4a9fdb4b4"],["/uploads/blog_title/Windows软件推荐.png","0218bc87516c1de93ec4a712a5f0af24"],["/uploads/blog_title/android开发.png","7491f874ebb487ec3f77f8a386616ef5"],["/uploads/blog_title/android开发Kotlin.png","05476ed58d1dfddac5c29861b243560e"],["/uploads/blog_title/kirbyassistant.png","548b9a47a8353f6475bdf4ab19dd6031"],["/uploads/blog_title/ssh.png","92ea114fe638dc928a9682043ad118ee"],["/uploads/blog_title/一些WordPress主题.png","3899f29794591f2e78c713e19138056d"],["/uploads/blog_title/不一样又怎样.png","3db2d3d23a10f5a4ccc4187f8d2f30b9"],["/uploads/blog_title/为什么说宣扬读书无用论的人要么蠢要么坏.png","9aaeea13a1cc1cf8b73d7837d4468830"],["/uploads/blog_title/修改Windows10的用户名以及用户文件夹.png","000f4e9af0e49ac8d46b28344c4cc87f"],["/uploads/blog_title/偶然间在B站看到的鬼畜.png","e9ee88644d3528a39623bfc2dce596e5"],["/uploads/blog_title/半自动化生成博客相册.png","dcca2124c74f6cffd7ca9baf53519cb3"],["/uploads/blog_title/在Linux服务器上使用coolq.png","4412fd12ae1c81905a8ab9442bfd6c06"],["/uploads/blog_title/在线游玩FC（小霸王、红白机）、街机游戏.png","d71432b4d1cf839b5ff39e946250e6c3"],["/uploads/blog_title/如何优雅的使用MaterialDesign2.png","ab240c2448f73288c937e29fb583f23e"],["/uploads/blog_title/如何使用DolphinEmulator玩《星之卡比：Wii》.png","0e4acd2337c4ebfabcf9df62c8e5c515"],["/uploads/blog_title/开往-Travellings.png","585c27ca84891515566834fc5fcc42b7"],["/uploads/blog_title/怎么呼吸.png","9381b31ea7fdc92b4dce2d399818756a"],["/uploads/blog_title/我为什么要搭建博客.png","f9d427d9d6559887b3a6305248e4a3b3"],["/uploads/blog_title/解决VSCode编译CC++是输出中文乱码的问题.png","8ab42bd70e6e1e48049baf7c0b584519"],["/uploads/blog_title/记一些Hexo报错.png","dbf2fa2e277d43295e9a258650723a28"],["/uploads/blog_title/记一次WordPress搭建与宝塔面板配置.png","1d2f6485ef518289fef37165dc934f84"],["/uploads/favicon.png","e86be6e532d350da056524afc1a1464c"],["/uploads/icons/icon-128x128.png","7767d72f491c62998a3f6176808ef114"],["/uploads/icons/icon-144x144.png","00cad601675fa32d70b5cb725b793391"],["/uploads/icons/icon-152x152.png","cac9edaba3f52638b1cb5a826e654fa9"],["/uploads/icons/icon-192x192.png","85c3cb2e831c091eb539cce126a81de6"],["/uploads/icons/icon-384x384.png","b7fff1aeb81767438c822b27788e7202"],["/uploads/icons/icon-512x512.png","bc8db8a33c197a4c8eb6104c51d51f64"],["/uploads/icons/icon-72x72.png","8357fc10377b11dd2cc3d73b959f181f"],["/uploads/icons/icon-96x96.png","45aab735efe580d917c4db906f39168d"],["/uploads/loading.svg","3be55ca1404f66f0d5d055510214ec6f"],["/uploads/travellings.png","49f3acdde9d31a871655dcfff20ea741"],["/uploads/wechat.png","a3bbe36e765272000d9b734b189c3845"]];
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




