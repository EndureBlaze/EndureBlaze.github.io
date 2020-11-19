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

var precacheConfig = [["/PGP/index.html","62b17e1677f972c145c2d530c4a8b9b7"],["/about/index.html","c6fd70b04a6c392eb5a1368390a7601e"],["/archives/2019/07/index.html","99ad62dc1599daa9a7f34cedc59008ae"],["/archives/2019/08/index.html","37e5a91f5a28d4f0c3d7666fb8a65537"],["/archives/2019/09/index.html","ec2c312221d568b9d010e9d0b08584fa"],["/archives/2019/10/index.html","859f3565666356d75d4e3a240f8174d2"],["/archives/2019/11/index.html","0c77209af3950bf5cccfa29ca4271365"],["/archives/2019/index.html","4d2461a67b2490e4919f8322f1f4d3bb"],["/archives/2019/page/2/index.html","adf0142b968c501e163db62e43585cb3"],["/archives/2020/02/index.html","2cf0c97ced2d146eeb0b39b33f7b824f"],["/archives/2020/03/index.html","fce7c6e28723985675fee87655c7372f"],["/archives/2020/04/index.html","26a45c199a9bdeb5e4041b84f706bf52"],["/archives/2020/05/index.html","0e8daaf73ed334179da1a86a390f672c"],["/archives/2020/06/index.html","f8e375cc99319267217a039798a83904"],["/archives/2020/07/index.html","1033fce77f1456dff8a400ef6ebf5489"],["/archives/2020/09/index.html","8161aecae2c0e4202fd89c7ba829f640"],["/archives/2020/11/index.html","296242ad54e10417948ee2b7059b620a"],["/archives/2020/index.html","a12ecfba941c03758fc8d81993ba6cfa"],["/archives/2020/page/2/index.html","6ac30e33f1bd9c6d9e8f66e1692ec9f5"],["/archives/index.html","e79ec55b32751bdb9c99facc765de69c"],["/archives/page/2/index.html","770c7eb73d7721592fd64264429c3b6a"],["/archives/page/3/index.html","ad8ef26a2192d578c3deff5ebe66e1c9"],["/categories/index.html","9978a101217b3db336ff5e349624b07f"],["/categories/我的-Android-应用/index.html","b5063d04f4e1318be5d9d7ff83b3a6a4"],["/categories/技术记录/index.html","c83253f7171ad45f75e345572095b828"],["/categories/星之卡比系列教程/index.html","e4390b3e39e12087f2db32a192008ea2"],["/categories/正经文字/index.html","c060e3d50f82b4f7d6824038c628e81a"],["/categories/碎碎念/index.html","da367fe051ed9664cfb452b2f051194d"],["/categories/编程/index.html","10adee9798b8c3c8c2bd95b5e4bafb58"],["/categories/资源/index.html","04adc23818f8c43855752d76a21e07c7"],["/categories/随手记/index.html","38ead7f073ac4ede5a3cfdd8f6e66d4e"],["/contact/index.html","fdd4c77c341bc411c0fd5baed1f87972"],["/css/app-refresh.css","96cd5aa94a08d31dd5f917fd9b197019"],["/css/black.css","745406dd163be96b647c0bb96c58b54a"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/font.css","7b831b5208e94d218fba0308030b7216"],["/css/heimu.css","4d5b4b1b76b54776558b5d760b18e61b"],["/css/index.css","d538c0fd542657ee1f2e0e1ca641af00"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2","a04757804840e4e870b5310e37fcbc37"],["/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2","c318a45b45be019ffdeb8c9ac6a41283"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2","045b7ab8d749812c052e9eca1ec5db07"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2","c3c08fc9f418f827eb3eed1b0ebe48c8"],["/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2","06bf22283c831651e111b08000e502fc"],["/fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2","dd0da6de6c2340f4bf0aa4108f98a63f"],["/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2","54b6827550ef145b4c1968518a96070f"],["/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2","3eacd63796de4b39bc102dae7b143ca5"],["/gallery/index.html","059e1ed3a59fcac19ef15af20134bdbd"],["/gallery/kirbyimage/images/个人吧绘图-雪再霏霏.jpg","0463c10c56944c6728247bb6a2808962"],["/gallery/kirbyimage/images/拟人-叶忍.jpg","2e2571fb5340dcac94ab779151dc8798"],["/gallery/kirbyimage/images/星卡+MC-贝贝.jpg","c4f2320a7e1aa055d0f818f4ece47856"],["/gallery/kirbyimage/images/普通-布偶卡比兔.png","193629f5d25270ba330584d5dc192333"],["/gallery/kirbyimage/images/普通-幻爱y卡.jpg","cff4788c14a8b165ef38c15677a1f1bd"],["/gallery/kirbyimage/images/黑化-未知.jpg","0f92194f16dcde07656751794b3e9740"],["/gallery/kirbyimage/index.html","80d8117bd095d112e7764dd570139dac"],["/gallery/photos/images/0.jpg","fa4cc8ef9ebf1afa7715456da8011af8"],["/gallery/photos/images/EINbyZyXsAAneJd.jpg","6661b377395407c4e2e8c0203f8a2098"],["/gallery/photos/images/ELHXOCKVUAEWWVA.jpg","872a2300c0b44cc514146c6d56ac52b9"],["/gallery/photos/images/ER0jHgoU8AAELyo.jpg","e92609823d254ec1da1085bd4851861d"],["/gallery/photos/images/wallhaven-ne9rkk.png","e96b8b0a0de905376fc3493aed73c61f"],["/gallery/photos/images/wallhaven-p268l9.png","c7664244673ad53f9098a1d31cab3b79"],["/gallery/photos/index.html","22d579b61b0f5c9fcdd4a17728f154c7"],["/gallery/wallpaper/images/1.jpg","23d20234db7fc0f52bfc395553625771"],["/gallery/wallpaper/images/10.jpg","fed370fd4e3f7270f88c6e81bf6a24a2"],["/gallery/wallpaper/images/2.jpg","638b554b8c0af885bf979ad377fbaa32"],["/gallery/wallpaper/images/3.jpg","a0c3209cc9c8515b9466d29db77c8904"],["/gallery/wallpaper/images/4.jpg","ad5f9abd4963c91309e8a7a4aa500718"],["/gallery/wallpaper/images/5.jpg","2ef419d70fcc84b3ea1064e2bf42aac6"],["/gallery/wallpaper/images/6.png","a851d9965c44f297510df5a7d72e8791"],["/gallery/wallpaper/images/7.png","eb57c29b97e2d1a08f64761d770e88e8"],["/gallery/wallpaper/images/8.png","6888f6faa8922866860bccc3345960ce"],["/gallery/wallpaper/images/9.jpg","2526ff12f157f774428eef9a08fc6ec2"],["/gallery/wallpaper/index.html","2b27b4321c793f674a7a06869e9f8e73"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5ae369503aed6a443d1fd72fae810fc8"],["/js/app-refresh.js","b0b3f229a73ab2b17717bb6473ab7383"],["/js/crash_cheat.js","fa8fd5b0f22c315f8c917c7f1fe6d59a"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","259b3677d604f154aa98092263f71b6c"],["/media/alipay.jpg","2987386afbe599c24a6150ee4440558d"],["/media/article_img/chronicle_of_kirbyassistant/ka-0.4b1之后-双图标-主图标-hk流星.png","ebffda474e42f26be65d763d281d2140"],["/media/article_img/chronicle_of_kirbyassistant/ka-0.4b2后-双图标-副图标-Markuss.png","7586e5e873ff8b6eac91a1417dccd541"],["/media/article_img/chronicle_of_kirbyassistant/ka-1.0.jpg","5afe3ccd7fe19913c16b7713236b27b7"],["/media/article_img/chronicle_of_kirbyassistant/ka-3.0.jpg","43ecaff8ce8bc498248545a6e80869a0"],["/media/article_img/chronicle_of_kirbyassistant/ka-初版.jpg","8759796f318934e8a080c941624719b6"],["/media/article_img/chronicle_of_kirbyassistant/ka-测试版界面.png","3900c7d277aae9cdb8f74652bfbf69cb"],["/media/article_img/chronicle_of_kirbyassistant/kd-0.8到1.0版本前.png","05c6eccaa1bb293ba98f7184244d742f"],["/media/article_img/chronicle_of_kirbyassistant/kd-java.jpg","87b4294f985ab26cb203990cb168eb38"],["/media/article_img/chronicle_of_kirbyassistant/kd-初代后到0.8版本前.png","f04a2648f9caeb3bfde2d8bfe4af1d3f"],["/media/article_img/chronicle_of_kirbyassistant/kd-资源最终版.jpg","c95d4c61e80628ac826995ac540257a9"],["/media/article_img/chronicle_of_kirbyassistant/kd1.0到2.2.3.png","34c3085326cb360f0ece50a4ef55c271"],["/media/article_img/chronicle_of_kirbyassistant/初代-使用且出现视频.png","d7f19046536319f47eef74d49bc42d6f"],["/media/article_img/chronicle_of_kirbyassistant/初代-未使用.png","e5c970aaa50da49baea273ac631bd992"],["/media/article_img/chronicle_of_kirbyassistant/空间截图.jpg","7e5bb8e4cdfeb3f311c3f73887bfdf2e"],["/media/article_img/git_connot_pull_repo/fail.png","0ae1448aedaa66c40442673dfe4eb7ce"],["/media/article_img/how2_breathe/海龟.jpg","13868fade36bb78937e898f3e955b3a8"],["/media/article_img/how2_use_dolphin_play_kirbywii/修改扩展.png","441374cdfacabbf2029fdc9866aa207d"],["/media/article_img/how2_use_dolphin_play_kirbywii/修改扩展1.png","7f6d07a35504b94d4d4a7def96baf817"],["/media/article_img/how2_use_dolphin_play_kirbywii/修改语言.png","14b1932085552151b66c5b7c604cd2aa"],["/media/article_img/how2_use_dolphin_play_kirbywii/卡在白屏.png","953b603d72366bd63095139811f4dfdb"],["/media/article_img/how2_use_dolphin_play_kirbywii/无法进入.png","bcf48b4d7c258aba14173d917ecd0982"],["/media/article_img/how2_use_dolphin_play_kirbywii/查看语言.png","3913a454fd1a7f7b1bb8fe6bd2911c66"],["/media/article_img/how2_use_dolphin_play_kirbywii/正常运行.png","73a0497070a3507b47978617f4cc7d7d"],["/media/article_img/modify_win10_username_userprofile/修改注册表.png","c1a64ed29540991d2aa81225d0ccac79"],["/media/article_img/modify_win10_username_userprofile/计算机管理.png","db888cbbdf60924cd00b88940155db4f"],["/media/article_img/modify_win10_username_userprofile/链接.png","0b49361b1936615b38dff9ebb2bb96e4"],["/media/article_img/online_play_nes/网站标题界面.png","9f4fd8365ac484bc3a08b803ed71d4e4"],["/media/article_img/online_play_nes/联机.png","4c2da9d54e07ef5821f27efee69af328"],["/media/article_img/slide2hide_toolbar&bottomNavigation/最终效果.gif","22d9ac8c60313a66c4b334493e8b1910"],["/media/article_img/vscode_cpp_chinese_garbled_code/修改前.png","6f705ce0bd872ca5da71d7625b7b6872"],["/media/article_img/vscode_cpp_chinese_garbled_code/修改后.png","2ee8287b640f7083a4e439d9cf5b9631"],["/media/article_img/vscode_cpp_chinese_garbled_code/按钮.png","897396b43a6877cea4405694ca4dd775"],["/media/article_img/windows_app_recommend/1.png","40564027c14d0719f4c5830c79862876"],["/media/article_img/windows_app_recommend/10.png","c6811d1d1c7404726511a58f5fc370d0"],["/media/article_img/windows_app_recommend/11.png","cb9fd0d323bf9b7de37a937681b84679"],["/media/article_img/windows_app_recommend/12.png","74fe113eb45c1ed27f95ea0ee00a3a45"],["/media/article_img/windows_app_recommend/13.png","eb58b0f6cdc5377ef25a46dbe692fb3e"],["/media/article_img/windows_app_recommend/2.png","26262adae9b06af5a5098c1b35f73b63"],["/media/article_img/windows_app_recommend/3.png","f8c03003793e50cd21df559f4ece83c2"],["/media/article_img/windows_app_recommend/4.png","bd8b3306fd848d8a4ac7afbf8ea63a27"],["/media/article_img/windows_app_recommend/5.png","7a49d4152ab56dc17581f6846e0bfccf"],["/media/article_img/windows_app_recommend/6.png","7f6e3234b87cdc70d5bd7e650f721d5a"],["/media/article_img/windows_app_recommend/7.png","9aac30110e2060c81fcae1d20917c583"],["/media/article_img/windows_app_recommend/8.png","bc2c1a1a993d5361276c798c195cfcea"],["/media/article_img/windows_app_recommend/9.png","780061807f30cd2c0b63b7c04d51c3eb"],["/media/article_img/wordpress_baota_config/1.png","f44e0fccd4aac9d6cf5657e5dad88559"],["/media/article_img/wordpress_baota_config/10.png","71b99f0d0cbdd0eb490d876efa7886b6"],["/media/article_img/wordpress_baota_config/11.png","d6e514a132bd04e0c9c5c2fde848861f"],["/media/article_img/wordpress_baota_config/12.png","04860081d46ed796c8f4a7fc74785db2"],["/media/article_img/wordpress_baota_config/13.png","1d1b1e4baa58828f764fb8f7fd6c7763"],["/media/article_img/wordpress_baota_config/14.png","a09c9ea54b3cbc9b68054af7d1f0d978"],["/media/article_img/wordpress_baota_config/15.png","ff6cb19e0f6ab2a4228f11824f542889"],["/media/article_img/wordpress_baota_config/16.png","1e073b1200d1846abc6bd279bc2d3e7f"],["/media/article_img/wordpress_baota_config/2.png","9e6cab124d7bd351e0e218209b121f00"],["/media/article_img/wordpress_baota_config/3.png","e510277ba7519180e7ab96c6ad311968"],["/media/article_img/wordpress_baota_config/4.png","d64e743ae8242a9fd2e677302cfda728"],["/media/article_img/wordpress_baota_config/5.png","c8d440852ed56ba3ba152723c4562343"],["/media/article_img/wordpress_baota_config/6.png","650629752ce4ae321e28c69a11f80c54"],["/media/article_img/wordpress_baota_config/7.png","9640551229d744485c6b4342f6fc8890"],["/media/article_img/wordpress_baota_config/8.png","4d9a84b980e30e479b41f40fe73ffc38"],["/media/article_img/wordpress_baota_config/9.png","351bfa1032c5f72fd4553572905e97ca"],["/media/avatar.png","655af5d556868fde9040bdd02fbcf2e4"],["/media/favicon.png","e86be6e532d350da056524afc1a1464c"],["/media/icons/icon-128x128.png","7767d72f491c62998a3f6176808ef114"],["/media/icons/icon-144x144.png","00cad601675fa32d70b5cb725b793391"],["/media/icons/icon-152x152.png","cac9edaba3f52638b1cb5a826e654fa9"],["/media/icons/icon-192x192.png","85c3cb2e831c091eb539cce126a81de6"],["/media/icons/icon-384x384.png","b7fff1aeb81767438c822b27788e7202"],["/media/icons/icon-512x512.png","bc8db8a33c197a4c8eb6104c51d51f64"],["/media/icons/icon-72x72.png","8357fc10377b11dd2cc3d73b959f181f"],["/media/icons/icon-96x96.png","45aab735efe580d917c4db906f39168d"],["/media/loading.svg","3be55ca1404f66f0d5d055510214ec6f"],["/media/posts_img/android_dev.svg","bbad8c53568c233e3db1ca3f6fc3c951"],["/media/posts_img/android_kotlin_dev.svg","c59d7cd7d5849d7d3f6fe8f5823ca614"],["/media/posts_img/dank_video_in_bilibili.svg","cd02469b027ed1918b9e80ecc5c57a67"],["/media/posts_img/git_connot_pull_repo.svg","8c39d5220d8284753acdabe8b2ef671b"],["/media/posts_img/hexo_error.svg","226e2341c28e069628337f2c82d38a8a"],["/media/posts_img/how2_breathe.svg","9b230ffb8f3873abdd564c30601de5bd"],["/media/posts_img/how2_use_dolphin_play_kirbywii.svg","e9960ad787ebe981fd4c5ab2679c87a5"],["/media/posts_img/how2_use_material_design2.svg","bcda1df7fc9638f4aca384ae7f328ccf"],["/media/posts_img/kirbyassistant.jpg","82d973352e63368e0af8331c78ad6943"],["/media/posts_img/lgbt_bu_yi_yang_you_zen_yang.svg","0bc004bb99b8eba01a12d664dcfb96ce"],["/media/posts_img/modify_win10_username_userprofile.svg","e80d114ee7e069e35802594aad91e568"],["/media/posts_img/notes.svg","0a3d61762e31ff8fa6ddcc5ec5e81b79"],["/media/posts_img/online_play_nes.jpg","ab6c78012b120a13fe7728a518da3226"],["/media/posts_img/py_generate_blog_gallery.svg","a27ff8733795c50c202a0224a3ecae55"],["/media/posts_img/red_more_book.svg","c2774b3ec1472be6d39e64620613289b"],["/media/posts_img/some_wordpress_theme.svg","1fd3cdb89ee5088f3243c3ef03ca25a3"],["/media/posts_img/ssh.svg","f575a7f9cb67de260946bfe17dc12864"],["/media/posts_img/travellings.svg","66fee2c6e1dddbfe17dd44e7168f5a71"],["/media/posts_img/use_coolq_on_linux_server.jpg","2406e0a002d625269a422f68065c76c3"],["/media/posts_img/vscode_cpp_chinese_garbled_code.svg","0db03db43da887790b30308264cecb48"],["/media/posts_img/why_build_blog.svg","b05ad4746e5ef651dcee9e679b6b7cb0"],["/media/posts_img/windows_app_recommend.svg","41ff873d1859c58349e92fecb496cd48"],["/media/posts_img/wordpress_baota_config.svg","65ef5b5574e8e03382b23cf81b2c5d89"],["/media/travellings.png","49f3acdde9d31a871655dcfff20ea741"],["/media/wechat.png","a3bbe36e765272000d9b734b189c3845"],["/page/2/index.html","38b87a08f6381e1fdcef2732d3f4fb62"],["/page/3/index.html","c36db9f0aa722a7eb7d04130e4463d01"],["/posts/12e7f5da/index.html","273492c5f14192ba44c92ae8cfd6bae1"],["/posts/2bdd4eaf/index.html","4e052d0253d09e4171173bf0754cf389"],["/posts/2fbba4ed/index.html","99ac8fa13046efddb0f7ae1a2cb3b10c"],["/posts/417dae5e/index.html","e74bee7d323dbd0460351bd8dec7f073"],["/posts/4d70a82d/index.html","fda5f0969cfb821b4109071c5f0462db"],["/posts/51f7c2cb/index.html","8f38ef29ddcefbba4339abee3eaa4872"],["/posts/58ae8d54/index.html","8f139e41fbea50743fb254615c942d11"],["/posts/64b2bc9e/index.html","cfa72c38a85f068d949048de2c13a1b4"],["/posts/6b0c894/index.html","fd1d0273c1010e586400b1b4abf377f8"],["/posts/743f9c80/index.html","a1ffa32d453addf3a46829dce2540fef"],["/posts/75f0fab2/index.html","711cdc7fd613f9311f61cad737cfb0a1"],["/posts/7935321c/index.html","bcf266024adcb2318a1f3f42d06d1534"],["/posts/8e165a5c/index.html","8ee267de51ad1415e2bc7ae69f0e3d02"],["/posts/919199f6/index.html","2b725f3cbc34f19f3dd6a7c614d0cf41"],["/posts/9cb48aa5/index.html","7321372045fda42456fc7907330f1246"],["/posts/9e078f24/index.html","723294306d1932345e34971305451fd0"],["/posts/a505f9a9/index.html","f69655da1e00533cb9344ee85e1dba8d"],["/posts/a6366ad5/index.html","bf667810aa0ccb9aff0fff4a5dbb5355"],["/posts/b0821049/index.html","e159bc1b4288cbd15df6af81eef23114"],["/posts/b36c6159/index.html","935a4fbae3916b99a8a609b25d6dc4ca"],["/posts/cd1c3d2a/index.html","5fa4b934681af682ffda81c30cbb70c6"],["/posts/d46d4e39/index.html","6ebfc3e4236ab5e1e3f03f601d8dd7e6"],["/posts/dc790cfc/index.html","18b7491735019d0451faff510c401094"],["/posts/e5477819/index.html","a31f6a609e5fa5e175ab1d66513ebcd1"],["/posts/e9558acf/index.html","875006c16baebf443b1731383d5da986"],["/posts/ea8a69ac/index.html","8dface9fb3998cd0bb34751cc7757a3c"],["/posts/how2ask/index.html","b02687428ca1160143173fc02dd46a1e"],["/posts/ka_faq_cn/index.html","e91b36c235a0f4a42eb2c9031f3e1801"],["/posts/ka_faq_en/index.html","d6165383a863f58e6b0621db1b205d42"],["/posts/ka_faq_tw/index.html","aa8bdbe99cd69deff3fa924d995a5bd7"],["/posts/moekirby/index.html","b0b2ce1dd390aa4f9d23ca633f8e64ba"],["/posts/moneydodo/index.html","2aecdf15711330c99b93ad23a012a4de"],["/posts/notes/index.html","844d3d4775b20153e84874fb6590263e"],["/posts/szeer/index.html","df8bc6d9a265ef7b9d18e7ee71fb3425"],["/posts/vpn/index.html","7b84d4d4b1fd17f563590e2b5eeca8b6"],["/steamgames/index.html","ce36dc291ce7c28285ae966c8ade577b"],["/tags/Android/index.html","86cf4258ca70c8ab5d9174ac68a0eb6c"],["/tags/Dolphin-Emulator/index.html","6c13123d7950cbc9f24fe54d26394561"],["/tags/FC/index.html","737f2b9ca06cabe98dbfa0fe3223ba15"],["/tags/Fragment/index.html","e48050f71259d4552d3c2fd835217984"],["/tags/Git/index.html","abef515ccfb2a6dbe154ef4da2172aa6"],["/tags/Hexo/index.html","caadfa8a3bb4146ff1e09fd0e34f94b6"],["/tags/Kirby-Assistant/index.html","eac5b1c587a5ccae8d1975cca82fcbe2"],["/tags/Kotlin/index.html","760eea35a2d583f352e56c524babb4dd"],["/tags/LGBT/index.html","84522dc476eafa36da04071613dea0fb"],["/tags/Material-Design-2/index.html","c89349a4b15572eaf6021259b0a501ed"],["/tags/Python/index.html","226b580c6acb4b3d366bafa4a552c5b1"],["/tags/VS-Code/index.html","6b9ac54e782f3eecb3c0d16f3e72a708"],["/tags/ViewPager/index.html","1fa1e5d0771a1082ea2b3d289e450136"],["/tags/Wii-模拟器/index.html","89d3bb368f1432685e886574d4085803"],["/tags/Windows/index.html","bc74c2c3174f2c1d24350cbcdce6c34f"],["/tags/WordPress/index.html","e9faf94745182f8e8a2fd263c7806e16"],["/tags/index.html","3f767a8841bde2d4205bb0da80eaa607"],["/tags/linux/index.html","352cbe76b1a5ede5ac5f0401806aa1c0"],["/tags/ssh/index.html","9a685ac1390d39050c8bc020c7b7687a"],["/tags/为什么/index.html","5ddb6884f182d6c266e970caf4fbaf70"],["/tags/代理/index.html","ef9d37447fdbb80a4fbecdd6ee99ad69"],["/tags/塑料产品/index.html","4e30d3c98c0ecdd8fc367d3fbf818ba4"],["/tags/学习/index.html","62dd809559ea1f3d9c19e09efbe72ce2"],["/tags/宝塔面板/index.html","455386ff5f4abfb1137a8cc8e4eb2d64"],["/tags/开往/index.html","1c66c87f6cead6eec27d02abb95ddef0"],["/tags/弃用/index.html","ea284aec1599931a164d6c618f6280e3"],["/tags/星之卡比-Wii/index.html","88c898c2d0578272a8a489bc31d9e8a3"],["/tags/星之卡比/index.html","d96a73ad64a3107791b267772cf89d8d"],["/tags/更新日志/index.html","b1c9b30143849e6b4a0703a443b44111"],["/tags/游戏推荐/index.html","d6e18a9690d97cc03bb88cf40de8a839"],["/tags/环保/index.html","f04ef73f45b2333e2911251cb7654d2e"],["/tags/看法/index.html","583f9cdfec911b087bab2e30e84e7d7c"],["/tags/编年史/index.html","0f57c17f231cf87133f11bafb93d72f7"],["/tags/网站搭建/index.html","50dd7c4c6466c7f23677ea13adb44269"],["/tags/视频/index.html","a9ef8e1fe106b51897658319d2d2bd14"],["/tags/读书/index.html","ba89bcc34742bab1d6d96e07bf606ac0"],["/tags/读书无用论/index.html","c9250d978b11686ff81d093c3b46f14d"],["/tags/踩坑/index.html","dc1c0e4254ae1bf8ecad23787479ba84"],["/tags/软件推荐/index.html","f717f8cbf6bf229f582f19cd72b4943d"],["/tags/酷Q/index.html","c5379569c1b7d6d39ddf2290fd74222d"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://blog.imyan.ren"});




