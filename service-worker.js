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

var precacheConfig = [["/PGP/index.html","9e4b08ffb68e1677e441dd25f906d1fb"],["/about/index.html","a0adcd6bdbc688fd0b2ca3fb0fccb25f"],["/archives/2019/07/index.html","cd01e47a2cce8b768145a7689d7b8091"],["/archives/2019/08/index.html","47962b884554ea2b104e58f3322e3d51"],["/archives/2019/09/index.html","67e23274799654672c791ed7fd5b1dac"],["/archives/2019/10/index.html","e1d9961dd423d7b7ef087f595f524c1b"],["/archives/2019/11/index.html","4ebafeb9bde4b7639ada2db4f499ccfd"],["/archives/2019/index.html","434eab559f5de0b7778fbbd1f85a721e"],["/archives/2019/page/2/index.html","d663bd9c89c3a69db79d85ae1920dc15"],["/archives/2020/02/index.html","851c18aa4bd96dd693b8b2c677bfc64c"],["/archives/2020/03/index.html","e90c78a82a40d9315216d7f43bab503a"],["/archives/2020/04/index.html","3f253e80bbd0aa4642ce38e98d579e7b"],["/archives/2020/05/index.html","24034aa937ee0e059613e299363553ec"],["/archives/2020/06/index.html","997bdb9f79f17df1ffce1e16ab6769ba"],["/archives/2020/07/index.html","e4956093750671f7f84174bd1ff7b715"],["/archives/2020/09/index.html","3490b4e32a9e0538aa06769a9a0aea30"],["/archives/2020/11/index.html","39050461684a118fa945e0858faf2fc9"],["/archives/2020/index.html","92ca7aaf54849308a2a9e31349f8b22e"],["/archives/2020/page/2/index.html","ac05808509def0bc62150c3c452844e6"],["/archives/index.html","849df34c2280259a53b5aad88a801d27"],["/archives/page/2/index.html","937ba14a00b120126fe093e10783a224"],["/archives/page/3/index.html","cef1d9721ee97a62bbec52725b368056"],["/categories/index.html","1d01472de679f6782748c59352d310c8"],["/categories/我的-Android-应用/index.html","9e724a0e17121678f4c42a331712b509"],["/categories/技术记录/index.html","ac6728732e85a78385374554956a5f75"],["/categories/星之卡比系列教程/index.html","c1d556c1551f607e2708bc1b8e515c1c"],["/categories/正经文字/index.html","e80fc9b0f661e68480b3e9865f79fdac"],["/categories/碎碎念/index.html","7ff4b902a1f2cf1b8efd2342b7a503d7"],["/categories/编程/index.html","9ccdfab4cc1f1d9e3e60d5f8adfdbf03"],["/categories/资源/index.html","20b180fea5be84798838313887bc280c"],["/categories/随手记/index.html","cbcfee65c35256cb6b00daba2340a744"],["/contact/index.html","59f19c0f40fc8b017446469bb1d9b00c"],["/css/app-refresh.css","7bfd5a16c64e2eb8602e1651f29756d1"],["/css/black.css","8ee6168510c2d6a12dbdce06290a334b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/font.css","c27c5e199127105dd8d9462af6aa412c"],["/css/heimu.css","e175de66b083dfbad3f4120f67ab876d"],["/css/index.css","8a864fa664a43a77ddf9478c21fd9fd0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/JetBrainsMono/JetBrainsMono-Bold-Italic.woff2","a04757804840e4e870b5310e37fcbc37"],["/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2","c318a45b45be019ffdeb8c9ac6a41283"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold-Italic.woff2","045b7ab8d749812c052e9eca1ec5db07"],["/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2","c3c08fc9f418f827eb3eed1b0ebe48c8"],["/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2","06bf22283c831651e111b08000e502fc"],["/fonts/JetBrainsMono/JetBrainsMono-Medium-Italic.woff2","dd0da6de6c2340f4bf0aa4108f98a63f"],["/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2","54b6827550ef145b4c1968518a96070f"],["/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2","3eacd63796de4b39bc102dae7b143ca5"],["/gallery/index.html","e9a9b95ab393137ef2eab1a90c27f3b0"],["/gallery/kirbyimage/images/个人吧绘图-雪再霏霏.jpg","0463c10c56944c6728247bb6a2808962"],["/gallery/kirbyimage/images/拟人-叶忍.jpg","2e2571fb5340dcac94ab779151dc8798"],["/gallery/kirbyimage/images/星卡+MC-贝贝.jpg","c4f2320a7e1aa055d0f818f4ece47856"],["/gallery/kirbyimage/images/普通-布偶卡比兔.png","193629f5d25270ba330584d5dc192333"],["/gallery/kirbyimage/images/普通-幻爱y卡.jpg","cff4788c14a8b165ef38c15677a1f1bd"],["/gallery/kirbyimage/images/黑化-未知.jpg","0f92194f16dcde07656751794b3e9740"],["/gallery/kirbyimage/index.html","95cb5230f393118c054a9930635cdab7"],["/gallery/photos/images/0.jpg","fa4cc8ef9ebf1afa7715456da8011af8"],["/gallery/photos/images/EINbyZyXsAAneJd.jpg","6661b377395407c4e2e8c0203f8a2098"],["/gallery/photos/images/ELHXOCKVUAEWWVA.jpg","872a2300c0b44cc514146c6d56ac52b9"],["/gallery/photos/images/ER0jHgoU8AAELyo.jpg","e92609823d254ec1da1085bd4851861d"],["/gallery/photos/images/wallhaven-ne9rkk.png","e96b8b0a0de905376fc3493aed73c61f"],["/gallery/photos/images/wallhaven-p268l9.png","c7664244673ad53f9098a1d31cab3b79"],["/gallery/photos/index.html","a9901f02239390896146731be4eea73e"],["/gallery/wallpaper/images/1.jpg","23d20234db7fc0f52bfc395553625771"],["/gallery/wallpaper/images/10.jpg","fed370fd4e3f7270f88c6e81bf6a24a2"],["/gallery/wallpaper/images/2.jpg","638b554b8c0af885bf979ad377fbaa32"],["/gallery/wallpaper/images/3.jpg","a0c3209cc9c8515b9466d29db77c8904"],["/gallery/wallpaper/images/4.jpg","ad5f9abd4963c91309e8a7a4aa500718"],["/gallery/wallpaper/images/5.jpg","2ef419d70fcc84b3ea1064e2bf42aac6"],["/gallery/wallpaper/images/6.png","a851d9965c44f297510df5a7d72e8791"],["/gallery/wallpaper/images/7.png","eb57c29b97e2d1a08f64761d770e88e8"],["/gallery/wallpaper/images/8.png","6888f6faa8922866860bccc3345960ce"],["/gallery/wallpaper/images/9.jpg","2526ff12f157f774428eef9a08fc6ec2"],["/gallery/wallpaper/index.html","e22feb1862611d647ea612d7d695eb5f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","199c6b66dc7f703436b85642371241f5"],["/js/app-refresh.js","260a5fc0ca50374a1bb11b1e74de8462"],["/js/crash_cheat.js","4161e4f81ad949ba121e5c04b729c196"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","a561009f88e32dcd68dc8292bfdff07e"],["/media/alipay.jpg","2987386afbe599c24a6150ee4440558d"],["/media/article_img/chronicle_of_kirbyassistant/ka-0.4b1之后-双图标-主图标-hk流星.png","ebffda474e42f26be65d763d281d2140"],["/media/article_img/chronicle_of_kirbyassistant/ka-0.4b2后-双图标-副图标-Markuss.png","7586e5e873ff8b6eac91a1417dccd541"],["/media/article_img/chronicle_of_kirbyassistant/ka-1.0.jpg","5afe3ccd7fe19913c16b7713236b27b7"],["/media/article_img/chronicle_of_kirbyassistant/ka-3.0.jpg","43ecaff8ce8bc498248545a6e80869a0"],["/media/article_img/chronicle_of_kirbyassistant/ka-初版.jpg","8759796f318934e8a080c941624719b6"],["/media/article_img/chronicle_of_kirbyassistant/ka-测试版界面.png","3900c7d277aae9cdb8f74652bfbf69cb"],["/media/article_img/chronicle_of_kirbyassistant/kd-0.8到1.0版本前.png","05c6eccaa1bb293ba98f7184244d742f"],["/media/article_img/chronicle_of_kirbyassistant/kd-java.jpg","87b4294f985ab26cb203990cb168eb38"],["/media/article_img/chronicle_of_kirbyassistant/kd-初代后到0.8版本前.png","f04a2648f9caeb3bfde2d8bfe4af1d3f"],["/media/article_img/chronicle_of_kirbyassistant/kd-资源最终版.jpg","c95d4c61e80628ac826995ac540257a9"],["/media/article_img/chronicle_of_kirbyassistant/kd1.0到2.2.3.png","34c3085326cb360f0ece50a4ef55c271"],["/media/article_img/chronicle_of_kirbyassistant/初代-使用且出现视频.png","d7f19046536319f47eef74d49bc42d6f"],["/media/article_img/chronicle_of_kirbyassistant/初代-未使用.png","e5c970aaa50da49baea273ac631bd992"],["/media/article_img/chronicle_of_kirbyassistant/空间截图.jpg","7e5bb8e4cdfeb3f311c3f73887bfdf2e"],["/media/article_img/git_connot_pull_repo/fail.png","0ae1448aedaa66c40442673dfe4eb7ce"],["/media/article_img/how2_breathe/海龟.jpg","13868fade36bb78937e898f3e955b3a8"],["/media/article_img/how2_use_dolphin_play_kirbywii/修改扩展.png","441374cdfacabbf2029fdc9866aa207d"],["/media/article_img/how2_use_dolphin_play_kirbywii/修改扩展1.png","7f6d07a35504b94d4d4a7def96baf817"],["/media/article_img/how2_use_dolphin_play_kirbywii/修改语言.png","14b1932085552151b66c5b7c604cd2aa"],["/media/article_img/how2_use_dolphin_play_kirbywii/卡在白屏.png","953b603d72366bd63095139811f4dfdb"],["/media/article_img/how2_use_dolphin_play_kirbywii/无法进入.png","bcf48b4d7c258aba14173d917ecd0982"],["/media/article_img/how2_use_dolphin_play_kirbywii/查看语言.png","3913a454fd1a7f7b1bb8fe6bd2911c66"],["/media/article_img/how2_use_dolphin_play_kirbywii/正常运行.png","73a0497070a3507b47978617f4cc7d7d"],["/media/article_img/modify_win10_username_userprofile/修改注册表.png","c1a64ed29540991d2aa81225d0ccac79"],["/media/article_img/modify_win10_username_userprofile/计算机管理.png","db888cbbdf60924cd00b88940155db4f"],["/media/article_img/modify_win10_username_userprofile/链接.png","0b49361b1936615b38dff9ebb2bb96e4"],["/media/article_img/online_play_nes/网站标题界面.png","9f4fd8365ac484bc3a08b803ed71d4e4"],["/media/article_img/online_play_nes/联机.png","4c2da9d54e07ef5821f27efee69af328"],["/media/article_img/slide2hide_toolbar&bottomNavigation/最终效果.gif","22d9ac8c60313a66c4b334493e8b1910"],["/media/article_img/vscode_cpp_chinese_garbled_code/修改前.png","6f705ce0bd872ca5da71d7625b7b6872"],["/media/article_img/vscode_cpp_chinese_garbled_code/修改后.png","2ee8287b640f7083a4e439d9cf5b9631"],["/media/article_img/vscode_cpp_chinese_garbled_code/按钮.png","897396b43a6877cea4405694ca4dd775"],["/media/article_img/windows_app_recommend/1.png","40564027c14d0719f4c5830c79862876"],["/media/article_img/windows_app_recommend/10.png","c6811d1d1c7404726511a58f5fc370d0"],["/media/article_img/windows_app_recommend/11.png","cb9fd0d323bf9b7de37a937681b84679"],["/media/article_img/windows_app_recommend/12.png","74fe113eb45c1ed27f95ea0ee00a3a45"],["/media/article_img/windows_app_recommend/13.png","eb58b0f6cdc5377ef25a46dbe692fb3e"],["/media/article_img/windows_app_recommend/2.png","26262adae9b06af5a5098c1b35f73b63"],["/media/article_img/windows_app_recommend/3.png","f8c03003793e50cd21df559f4ece83c2"],["/media/article_img/windows_app_recommend/4.png","bd8b3306fd848d8a4ac7afbf8ea63a27"],["/media/article_img/windows_app_recommend/5.png","7a49d4152ab56dc17581f6846e0bfccf"],["/media/article_img/windows_app_recommend/6.png","7f6e3234b87cdc70d5bd7e650f721d5a"],["/media/article_img/windows_app_recommend/7.png","9aac30110e2060c81fcae1d20917c583"],["/media/article_img/windows_app_recommend/8.png","bc2c1a1a993d5361276c798c195cfcea"],["/media/article_img/windows_app_recommend/9.png","780061807f30cd2c0b63b7c04d51c3eb"],["/media/article_img/wordpress_baota_config/1.png","f44e0fccd4aac9d6cf5657e5dad88559"],["/media/article_img/wordpress_baota_config/10.png","71b99f0d0cbdd0eb490d876efa7886b6"],["/media/article_img/wordpress_baota_config/11.png","d6e514a132bd04e0c9c5c2fde848861f"],["/media/article_img/wordpress_baota_config/12.png","04860081d46ed796c8f4a7fc74785db2"],["/media/article_img/wordpress_baota_config/13.png","1d1b1e4baa58828f764fb8f7fd6c7763"],["/media/article_img/wordpress_baota_config/14.png","a09c9ea54b3cbc9b68054af7d1f0d978"],["/media/article_img/wordpress_baota_config/15.png","ff6cb19e0f6ab2a4228f11824f542889"],["/media/article_img/wordpress_baota_config/16.png","1e073b1200d1846abc6bd279bc2d3e7f"],["/media/article_img/wordpress_baota_config/2.png","9e6cab124d7bd351e0e218209b121f00"],["/media/article_img/wordpress_baota_config/3.png","e510277ba7519180e7ab96c6ad311968"],["/media/article_img/wordpress_baota_config/4.png","d64e743ae8242a9fd2e677302cfda728"],["/media/article_img/wordpress_baota_config/5.png","c8d440852ed56ba3ba152723c4562343"],["/media/article_img/wordpress_baota_config/6.png","650629752ce4ae321e28c69a11f80c54"],["/media/article_img/wordpress_baota_config/7.png","9640551229d744485c6b4342f6fc8890"],["/media/article_img/wordpress_baota_config/8.png","4d9a84b980e30e479b41f40fe73ffc38"],["/media/article_img/wordpress_baota_config/9.png","351bfa1032c5f72fd4553572905e97ca"],["/media/avatar.png","655af5d556868fde9040bdd02fbcf2e4"],["/media/background.png","032563bac5d09e3855e81a7906ec41fa"],["/media/favicon.png","e86be6e532d350da056524afc1a1464c"],["/media/icons/icon-128x128.png","7767d72f491c62998a3f6176808ef114"],["/media/icons/icon-144x144.png","00cad601675fa32d70b5cb725b793391"],["/media/icons/icon-152x152.png","cac9edaba3f52638b1cb5a826e654fa9"],["/media/icons/icon-192x192.png","85c3cb2e831c091eb539cce126a81de6"],["/media/icons/icon-384x384.png","b7fff1aeb81767438c822b27788e7202"],["/media/icons/icon-512x512.png","bc8db8a33c197a4c8eb6104c51d51f64"],["/media/icons/icon-72x72.png","8357fc10377b11dd2cc3d73b959f181f"],["/media/icons/icon-96x96.png","45aab735efe580d917c4db906f39168d"],["/media/loading.svg","3be55ca1404f66f0d5d055510214ec6f"],["/media/posts_img/android_dev_index.jpg","d43d01a70a81bfeaa1adf27c7f464357"],["/media/posts_img/android_kotlin_dev_index.jpg","63f76bb254b195a8ddab45a7f298d4a1"],["/media/posts_img/dank_video_in_bilibili_index.jpg","4e6cc150e0805361c50dc615c57139a7"],["/media/posts_img/git_connot_pull_repo_index.jpg","ccddc82b39d8c46d7d9449002718283b"],["/media/posts_img/hexo_error_index.jpg","263f12cef0301d73883018fb1fdd285b"],["/media/posts_img/how2_breathe.jpg","5899b256ea094d158cdeddb9c16872aa"],["/media/posts_img/how2_use_dolphin_play_kirbywii_index.jpg","3fae361ea2a9626b78b7e4109c2422f1"],["/media/posts_img/how2_use_material_design2_index.jpg","6b2c9aac8797ecfd1cffc8f2f3c88e7f"],["/media/posts_img/kirbyassistant_index.jpg","82d973352e63368e0af8331c78ad6943"],["/media/posts_img/lgbt_bu_yi_yang_you_zen_yang.jpg","44ceba55fefe8b79364f8d86678f0d8a"],["/media/posts_img/modify_win10_username_userprofile_index.jpg","29c8b544dffa562e2c825e3a1f8c4be2"],["/media/posts_img/notes.jpg","4b7a4f746c66ccc0375752d3325f75c3"],["/media/posts_img/online_play_nes_index.jpg","ab6c78012b120a13fe7728a518da3226"],["/media/posts_img/py_generate_blog_gallery_index.jpg","9c32d5e2c597f05634c77351405c8c1d"],["/media/posts_img/red_more_book_index.jpg","ef4e3c9a99aea79a0c57d12dc06e7a3d"],["/media/posts_img/some_wordpress_theme_index.jpg","d375ba4a218b213a1425d4f5a55e5f0b"],["/media/posts_img/ssh_index.jpg","f0f92dd235e9af672271f974777a973d"],["/media/posts_img/travellings_index.jpg","4f1b922c48567d08130f6d671fe84ac7"],["/media/posts_img/use_coolq_on_linux_server_index.jpg","2406e0a002d625269a422f68065c76c3"],["/media/posts_img/vscode_cpp_chinese_garbled_code_index.jpg","09bd6e26e38be3916375ada484936ce0"],["/media/posts_img/why_build_blog_index.jpg","80213a1f7e26fb32c1907e5362c143ce"],["/media/posts_img/windows_app_recommend_index.jpg","6811b53065b1756c914b9dadc6c15382"],["/media/posts_img/wordpress_baota_config_index.jpg","c1ad8cbf32f4949d769093e2bf3c64af"],["/media/travellings.png","49f3acdde9d31a871655dcfff20ea741"],["/media/wechat.png","a3bbe36e765272000d9b734b189c3845"],["/page/2/index.html","223ec65da60c7ba92d946ffbeec57b42"],["/page/3/index.html","f2bc4da9c4027685d906704980021667"],["/posts/12e7f5da/index.html","9fa69308b330153caaa516ee243af565"],["/posts/2bdd4eaf/index.html","68068020ff5255db7f3b1f2490eb72fb"],["/posts/2fbba4ed/index.html","d92cd770014ac184dce94ee75e8dea16"],["/posts/417dae5e/index.html","3dc06ca1a1ef7fa48fc3cf9ea5cfc0a0"],["/posts/4d70a82d/index.html","ef65e21b082861c8f9605f1b160415e0"],["/posts/51f7c2cb/index.html","495b43bb7dcd62819399aecac3efe6f1"],["/posts/58ae8d54/index.html","15da78a34564fef124719f0c590dfcc5"],["/posts/64b2bc9e/index.html","cbc219b1c6ba89bfb79b1ce405344465"],["/posts/6b0c894/index.html","d34cc9d1942c7288c39e7236fe950a66"],["/posts/743f9c80/index.html","6d5f8a1b8807925532b720483989de03"],["/posts/75f0fab2/index.html","a55cf6515fac6c9a720cfcc29cc93ed1"],["/posts/7935321c/index.html","447829588b166ff9ddcc0415f6e26bec"],["/posts/8e165a5c/index.html","cb00d6fb2323c5fbba240763b43ae381"],["/posts/919199f6/index.html","9cdca22d36a645755fd2b7e9022c0105"],["/posts/9cb48aa5/index.html","70d6317bd9830831759f98852c8d6604"],["/posts/9e078f24/index.html","4f5874996007451c4c9b0b91315559c6"],["/posts/a505f9a9/index.html","08c1d7a4541e7f8083ddff00eac1b727"],["/posts/a6366ad5/index.html","cec77d1e858291585fb8662af4aaa806"],["/posts/b0821049/index.html","6fb6113555cb339f62673c204fd2aa9f"],["/posts/b36c6159/index.html","56d49adaf9f0057b49b5fff0903f70b2"],["/posts/cd1c3d2a/index.html","2acd8eece781d37ea95ac837df9700dc"],["/posts/d46d4e39/index.html","6f5287bedca194533e3b29a93b817d86"],["/posts/dc790cfc/index.html","5b2f1c643ecd00837769d70f2a6e1750"],["/posts/e5477819/index.html","75c41cf51cbf274c4a3546a90aa827af"],["/posts/e9558acf/index.html","0230ec07e9df9a095fb6083f0600c7d5"],["/posts/ea8a69ac/index.html","2c495c581b94db81de13493df0536e53"],["/posts/how2ask/index.html","b55be6d1613a89a67e7c19a63ad8fe06"],["/posts/ka_faq_cn/index.html","aafea8ce5156b7b886632e591620c27d"],["/posts/ka_faq_en/index.html","31a84f20f01692f6d00c4f8683b3ad41"],["/posts/ka_faq_tw/index.html","8256216643e4300a41d3ec492a2c1941"],["/posts/moekirby/index.html","5a2c7e00b992c08b3a40622b2705ac61"],["/posts/moneydodo/index.html","a26e31d4d19dbdd4fb7b20bed78a1234"],["/posts/notes/index.html","ccbc9e128159b67d4cd12dd65301f13f"],["/posts/szeer/index.html","10e5b6eed49c91ac3ed0230f0d18119a"],["/posts/vpn/index.html","4bbed7ae414bf5a377fcc5a0bf6958ea"],["/steamgames/index.html","825da3dc2bb58165d88b80a4f98c2a90"],["/tags/Android/index.html","1addf5780ae0bb3bfefc957a1ea75df3"],["/tags/Dolphin-Emulator/index.html","cf68d4164bc1134f993b73ab7c3c722d"],["/tags/FC/index.html","c3d23c07c71ab4edf14fbc09be86857a"],["/tags/Fragment/index.html","7e6e41f7268c8784782df99f9c3f67c7"],["/tags/Git/index.html","3713f2fee41ce4f830ef9ccce19fe1b7"],["/tags/Hexo/index.html","ecb91df82ea6f4855e43966549708722"],["/tags/Kirby-Assistant/index.html","ef286e5dcb4903680e66179fd4f03e1e"],["/tags/Kotlin/index.html","ffb11c1bf8045caaaa365acfaae3c5c9"],["/tags/LGBT/index.html","d56655124b2ad1bc5c539dc7a86ee96f"],["/tags/Material-Design-2/index.html","d03083f9d832b8e8d47b9b2fb0147b81"],["/tags/Python/index.html","8f57b4c2251d727ecaa35ed1e80600b4"],["/tags/VS-Code/index.html","941d0534bd3d5db28d349da5e624b099"],["/tags/ViewPager/index.html","c09814cf4750b62027ed8e4d2e33ae36"],["/tags/Wii-模拟器/index.html","dd6a1d86f7327f59d31d15a819a0e492"],["/tags/Windows/index.html","687873c71d5ed40ce1a9e3b1c9a8341f"],["/tags/WordPress/index.html","bc4fa4e08f43431cfca51cd3e849f348"],["/tags/index.html","267e3766575182e69008c0b58547df42"],["/tags/linux/index.html","2107874a1280c9489e9905e8ba6459e3"],["/tags/ssh/index.html","bc9235367f5ea3f0f3a9755c74098950"],["/tags/为什么/index.html","22dd40b339d435a8edd5ae82e8a93efe"],["/tags/代理/index.html","bea78a8f5d1896886a9c008681af2514"],["/tags/塑料产品/index.html","13c355c66b8bd55c1c9d8e710d62f29c"],["/tags/学习/index.html","deac35b9c6992230f39520f9bda5ab86"],["/tags/宝塔面板/index.html","724f918634996fe624a89a7fc288d75e"],["/tags/开往/index.html","2949083c878c5398608aa96bdfe363e3"],["/tags/弃用/index.html","cc417ac1e558a09719d7e72e7a2026c8"],["/tags/星之卡比-Wii/index.html","a619a5f23b344233b060e2028d125427"],["/tags/星之卡比/index.html","97838b3d6d222b42f13459c42550656b"],["/tags/更新日志/index.html","3e01a0f2f69c814e82912b3e7a35244e"],["/tags/游戏推荐/index.html","43003dab5bc10fb2fe8aefe04e7e4994"],["/tags/环保/index.html","135a7f9228b58084ab838d63f08c09bd"],["/tags/看法/index.html","71b896d48ac231284b036a9e5e7352b1"],["/tags/网站搭建/index.html","e118c853bb90de12d060868bffe90aeb"],["/tags/视频/index.html","7fc8de1f0b4286465895cff5bf52bc9e"],["/tags/读书/index.html","d7e07043ad4331ac4b72cb2bdfffcfc1"],["/tags/读书无用论/index.html","450de4111fcc15f605cfbbdc9cef174f"],["/tags/踩坑/index.html","9cb822b03c41d3f888fd995d57502c32"],["/tags/软件推荐/index.html","3576791d21e98b81dec7f5ea59fa43d3"],["/tags/酷Q/index.html","30f3d3398e1a2f523c48438bf03ce4f6"]];
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




