'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "53e61e96ec739e41bd9e5830f680d7e4",
"/": "53e61e96ec739e41bd9e5830f680d7e4",
"manifest.json": "f7138e9a9129f2a1cb17ebc0638c977b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/lib/Language/en.json": "1c2138057bbb8b56dd855639ecce238d",
"assets/lib/Language/ar.json": "c43bf53eedd39ee108d0c761b3fa1fbb",
"assets/NOTICES": "8f62f9588a50e6efa550252c22cb2551",
"assets/assets/images/facebook.png": "64a231a794fa8c0736096640b9d0ed05",
"assets/assets/images/instagram.svg": "dc41b870432b52626d1f1d6637bbde16",
"assets/assets/images/Delivering.png": "cd14a62b8b864f3662d57bd995ff023e",
"assets/assets/images/twitter.svg": "c8d1c08c799f44434f865910aefab573",
"assets/assets/images/youtube.svg": "6022700aa6b6f029827f768b936262fc",
"assets/assets/images/apesLogo-.png": "7d235194c529be16dc7442348449a2b7",
"assets/assets/images/Games2Egypt.png": "56e6246f35c22eb70963994e623f730d",
"assets/assets/images/twitter.png": "1d00ceafa7df4e6b356c4a6ac3ad3d71",
"assets/assets/images/Shahid-Logo-1.png": "ae67da396ffead6673991ee4bcc3e524",
"assets/assets/images/404.png": "82ee36e39fd2e24f09167a61b1fa97d2",
"assets/assets/images/Pending.png": "664ec3159d9b21c3c400b1053144dc1a",
"assets/assets/images/serry.png": "6386e59c0911b3e02230e05a0fc5c9b3",
"assets/assets/images/instagram.png": "bebab4450528eb0666d1fa532b71641e",
"assets/assets/images/Cancelled.png": "03691b0b69e826bab0e54cf270584c77",
"assets/assets/images/foods.png": "033a8e7f10d5bacd57ad4c4a5dadb6be",
"assets/assets/images/FacebookCover.png": "9c4c3e48eb045e9dfb97fa903ca98451",
"assets/assets/images/youtube.png": "4198d0501a2e98807f5dd4c3e41d03eb",
"assets/assets/images/Beta3Aflam.png": "c31a56da3c9ad1b91b5236744e1ad393",
"assets/assets/images/Cover.png": "29f08a16ed3543cbf1ead82c459432be",
"assets/assets/images/Raz3Wala7a2e2a.png": "6764c132b7f762dd0504b58fcb94aae3",
"assets/assets/images/el3ab_m3_serry_logo.png": "d05f7b5f5aa90dda81fe5b9e7a2632a8",
"assets/assets/images/facebook.svg": "8e917b1679a721462d90a22ae883bffc",
"assets/assets/images/watchit.png": "d0cdf9eec24d17767338f0800db8736d",
"assets/assets/images/Wall.jpg": "09dbb0c4336afe9ba0e468423feb25d4",
"assets/assets/images/Delivered.png": "872e2e38333bf8e6427ec01f29835b2b",
"assets/assets/images/placeHolder.png": "f8dcbea65cdb4252976054488b79d450",
"assets/assets/images/arcade.jpg": "3fe326825ce2d28fbd7aa85224e50f2b",
"assets/assets/images/OnTheRun.png": "f704717e77c9ad35eb69689a760705b4",
"assets/assets/images/Logo%2520PNG.png": "125c263fd26584ef3d7bdeb967d5e0a1",
"assets/assets/fonts/Helvetica-Bold-Font.ttf": "0b7809bdc5cb332dc7720f8b812c3b54",
"assets/assets/fonts/Helvetica.ttf": "a357d33ca0268421605017efd4a20b43",
"assets/assets/fonts/ArcadeClassic.ttf": "964111990ca3937960147b80e8d07e61",
"assets/assets/fonts/Calibri-Regular.ttf": "5d7c31b284ddb01fc1cbae0edc9ec210",
"assets/FontManifest.json": "eafe0db7cd659a49e11bff14ec9acbd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/AssetManifest.json": "84023095198818bc4133d03cb7dd9b00",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"main.dart.js": "6f070671ceada2ecff7e63163cf8cfc9",
".git/config": "8473972e2626e934730eb94ea9daf514",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/76/827c217610672044eaf9ce089cebcfcbe9ca61": "e17188ed56bf6498264b8c0f5fde6464",
".git/objects/76/04b4f8392185b32d8371165f2712b9de982787": "5de396649e7e42c85ba3fd2e566f2ddc",
".git/objects/50/bcf88103e30cf9fb5d3a0690e2f41632b0226a": "8af7bf5a8ffaf18812a78052a04b0cc4",
".git/objects/45/1cfc9027c28594aea5952f70aba5f91df0f339": "4ef161ff9fe8086fb0eeb1a0b5257ad3",
".git/objects/45/605342b0441a42bb50184c09f892a3c0fd886a": "cfb64a32c8b04c347e20236b6ad98916",
".git/objects/45/59fa65703b59e54aa6927c351f432cc3c3f7e9": "c882fb78e7446db9dc8ff11d0d8fcd68",
".git/objects/45/e602f0f6d60754de6111b690700e8939854221": "5c549bb29875acc330dbc5741f5ac11e",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c7/bfeb0b5264dfb970d27cff16961012b2ffde35": "797bdaf5e330b00569f7e294d70c2d8e",
".git/objects/69/9ba96a0cb98edd8c184380409bb337f6334b47": "c5ad2b883d17537bc5a7ffe99dfeea82",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/e219dcdca3776c28da248ca61b616361cedca8": "f83690f9c49a0abb0ce7eb87e2eebdac",
".git/objects/69/e508e32928d84052756473f5721dad10242d37": "216eff671e08e27fb86448d9b88fec5b",
".git/objects/b2/96f9ff9b1593cfbf8a54f0ba13c94df7dda4ea": "d3f2d926cd7a5bfdc42c353492bd1052",
".git/objects/b2/ee7bd8f2131bd66d8b5148abf9c42ec2e9a0e1": "03261e618b510d6707043ce6b0f6c696",
".git/objects/b0/6538d9fe11ead5a0cca930283411eb536a3b0a": "b0805484489401a14df6331b184d887c",
".git/objects/b0/29f2ff6a192eb627ce4d69f86305f939da3eaa": "5210b7d2b91b4d6e639549821a1b5a8f",
".git/objects/29/76078bafe6be3377e1d41f055667296e9e4700": "25dd4a97592f16e83473bd190d1a21fd",
".git/objects/29/9b9e267971b1e808b6dc6c1d1e7191cbda8ca2": "78b7386a4576b19ea41faf7ac84f19cf",
".git/objects/08/c03b95cb67e8b5d8327c19fbc6804c4e0666c6": "bcb01cb9a6a5e58fcbb06bdef28c2800",
".git/objects/c4/e5166a54d9eed105b0320a707faef1772e5ee6": "ab0cf7c20e03368018143e0130bfe1d2",
".git/objects/15/4fb2191e8dc1c969375515c1b1ee71d2041e8d": "82461ca62e38242810f398bd855c0078",
".git/objects/dd/11350a00982179e9cb57d154e6139d6f40c3d6": "28072e98a8ec3ae0378c2c297661d1b9",
".git/objects/31/df91e93528a9aaff7657bc678b7745ee460d3f": "9a6ec55d212bf4721197f4ff1f4b1f1e",
".git/objects/31/0d214de57d1e0c496d3789de31977e059ddeb3": "c6b9b977c1e38089d4b0a97dfc3e420a",
".git/objects/31/429a5b2fbb8f43925a1c92d3b0ccd57c37a3d9": "0dad4aa2ba3c044c8616c3877b429704",
".git/objects/ad/d229f48731d10d04857f8546e9a554a64d3c2a": "0949cf32b55ef3b66c986af811abc052",
".git/objects/42/b4f27270d9a539462c4aec7eaca38ab43c5fc0": "95b7540229de8bf214d9f94cc900f5e4",
".git/objects/ef/81ffc77a038859e1c548c1fe468b15e557bd9e": "d0546bcf1428611e874b74abc7c5e783",
".git/objects/2e/1a0780f70325bde56567323b5224537b49d30e": "e54720ebb13fc90a78a85d60f79ed7ff",
".git/objects/07/4b6b71b64e651f73994c6ebfce2d5c45ac1de6": "776dd54268f3c467b621ad94394ee436",
".git/objects/7a/ec6f3f3cc74a7138ce350def27a2209b44ad89": "cebacb480839a3c747741e05baa970b8",
".git/objects/7a/5fb900d94031207cbd8065c3cec734a07158bd": "51fc0f117e0575873e8c582c012f4177",
".git/objects/7a/e1e781c98af8f7e4347103ac1a9fa72cbdbf19": "91efaeef501b6a249b368d9887e67213",
".git/objects/d8/1e1d127cad8660fd1b5c6ad1981795077420e6": "687e633c133659b6c7e8c5e2049645ee",
".git/objects/d8/5ad2553662482de3b3dbebff31a50812108fe9": "843e576b148ab69d9cc2b95375cd8153",
".git/objects/d8/1f32a410d105a4b4bfb613b271aae97b78874e": "8d3bf94af37e5561c81d6a0bad2bea38",
".git/objects/93/97580f15e81e4d25d25c8144e2301396128eb7": "fd8cad9b3af2f52b2d97107cb2b1c8e1",
".git/objects/a5/f2baf3474d5c65da7f0e06831e3608f499392f": "862afdd1ddc8287ac0ba74365ad6eff9",
".git/objects/26/ff187b9c8bf98487fab9789ca45b00a5246c8e": "50030364a0ce3cbb8fe1b7c67692c711",
".git/objects/62/44a496549e6ff1df6c544a2b0121c8dade77fb": "64dcd640776cdc2ebcd1cda2556c4d02",
".git/objects/62/23f6bff59cca60bc5c38e489947838cb66ea5a": "9a43087598679c733d7e1f66fa091196",
".git/objects/62/78ada13170860d0a470fe9b7444c39ec675ab4": "479e36738a1559623f283bd009635065",
".git/objects/62/5ef2371b18dd9c08118633cddd0f795562b564": "738bef99ef09bf814d02cd3970bbcb12",
".git/objects/62/32e06ec2a6ada22302920f1baf6627a44ee745": "ba550f41d1bb630e0d752842e8eb361a",
".git/objects/80/2f1081320a53726eab59bedb3efbc6f755d174": "51a645e131b562940c5ae40683b2326e",
".git/objects/80/f34a0946e3b32dd9264acbaee3378f85c9ada7": "84729ab943f160488562110e7f8865d4",
".git/objects/06/1cf9e064dbde264d8663ddf33bae8b0a1e5b31": "7dcfa01bcf57215a1277a0be31c11485",
".git/objects/06/2c6f3a4e4d4aafdc062390f49c0bde7c3e44ff": "93268b32dd94f3c434add70e440d5dc3",
".git/objects/95/9467791bd7f40779503abb1e63654262f3d006": "80865dde09a0b560a7062e21355f8d8c",
".git/objects/95/01f29edea6e10dbb91415a6cc45e3730150173": "0c22d53cc2ff4f8c35a43f483bd04e17",
".git/objects/61/3a9b520e121fd229e1126fc4b6204ad34e23a9": "a3b860195e065523ab5c343e05b147e9",
".git/objects/01/ba547dc2f7d5ea2360a6afd62723f21707525f": "a36d99352378ec9f7c7377882119deb3",
".git/objects/77/1c9f9ed8b6137917ea4ed7f7be2fcf8829da5d": "d07bd39bdd9494a04a34220298e50334",
".git/objects/77/4800f8d0ffda78d000ea721b65f37d2dfba6ed": "35807e5f72fe1127450e89c0ced43095",
".git/objects/e1/245b1e2787ed5053cf4accae5d15f3f8e6476a": "9701bd545986b1667cb883acf30e9193",
".git/objects/72/17ac244e488a3e5d3ff3fdbd35b08ab57a9719": "7a7facb04ac50a35729c45d2e466f6fb",
".git/objects/72/4e43cc6750fbd0a73a6c359ccd348ebebce646": "88c3838210442f5575f4ef5bb8bbaa27",
".git/objects/72/0ce6bc0d4b83d302a05fbeb706c3c8aa1f4e56": "a2a9edaf362029cd11b96e6c1ccab68b",
".git/objects/72/1f9374e7e0c57eec90e3ae535a7b983bbd3cde": "b72325f48def590f8bed7eb992ab28b2",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/72/3aeb7b968fd517faba1331f09331147f471d6d": "4f562d7fda99380b892ec0aaa40aac04",
".git/objects/6c/c2a6e27118d21e5169476468870edd4adc74dd": "2a8968c41cd2ad97ea0c28388e5b7a9d",
".git/objects/54/949268c35be78b9e202304fd20237b047ba938": "d30b1bdad8195203f6d1490187e22e8d",
".git/objects/75/ea15117c3f39977adaf10fe6309a66e4707133": "a3816b9b9004b867085e276a2e25f18e",
".git/objects/37/4036b7e63b017fe9010155f86bbfe0211a6fea": "96aace704f3b67e2a83eb8231bc30e2f",
".git/objects/14/0af9a5c757fdfb41721267033f867d8953cd5c": "648f09db37e759926d1be94725409e4b",
".git/objects/b3/3fed825a9f64858570695bf456511c7c99fb2b": "6ef72fbdefcfe40983d8884e854e5b3c",
".git/objects/9e/0189aad6da25a3abcf3ea0ebc037302624eaa5": "e242fe2c54d980a1308c4c03d147f7c7",
".git/objects/64/2a0689a7d879a300e36a9ddc63778e7bfecde0": "57ca5489f130f86069dfb7dd53605cd3",
".git/objects/f8/9cafad0857d3c711095e5b483c2cf23b280a46": "a7c4bb4ab03f4ad4bc9b0ec5c4ce3452",
".git/objects/f8/b0cbd8a8a6ce71b3e8e072c1604b8781c7b6e5": "60b024bad019a792c06a6d6a410a6903",
".git/objects/f8/101f4f392280d59d1f0a561b06aab5b96f9e6a": "d16645f618c579412469381f1df554be",
".git/objects/5a/92d29d996839a9c288e775346cd2442ecf1800": "f1c654f590545b933735f720c9bf1866",
".git/objects/5a/a0d1ae3026bde14a2dc5d231d382fdb4c9481d": "cf73e81d7a865780698a83b380f346f6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/e6c218a7c5acb80fba7e21d4569c1e4e156148": "8af9ba4fc66a55df9936ea5f0630112e",
".git/objects/bb/0a40b6a9c496639e1f509002d8f7fac7e50378": "41e9abf2d068fbda9786fc2693b52575",
".git/objects/f2/e3291a593d6a6ee472e51b6b26be15f58bb0d8": "8f53ddb4790635139c4dca35beced49e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/23/62d879710d55f49da83bee90162cfe9dd98715": "b697ccae74b6b7f8193968a43b44f352",
".git/objects/39/ad311a8be881ce8aa5ed0319387e7e0259cf1b": "52154a13fc40afd1b33e036ee1d8c27f",
".git/objects/39/4a9f781cedaa283a11b3b8b43c9006f4e5bac7": "dc48c307ace7bb07a8d585cf5e472714",
".git/objects/46/9277b95f31e988c6c6ef627990111d941b8511": "4fa7b148b1195a15949d0f5df8bc46db",
".git/objects/46/6ed627c8a98dca35c06e65c639ab5def8391b1": "68f1100319753c1c33c0c9839121f0a6",
".git/objects/44/e23b6cde95ec4fc963b38d1413f5609bae2565": "014de62f8ecd8f6a3ed91214f1439107",
".git/objects/44/9193fd937d51e84c7e9428ade2d15d2c3b741e": "a1182199ed3f85dada6ad2730ff66ee6",
".git/objects/44/2cd425ed51073f6bece2c06ac28603da713d7b": "6a44c4780105d853b4ac5417a8e3cf0a",
".git/objects/48/b61a52ce3197a39419bb7de5f89a75f953285f": "01d48b2bcb460c7fdff071d51d9ce700",
".git/objects/48/e27a01a864027f70f76d73c07bbecae720b807": "020eeccfb647c873b4144af82e57f85b",
".git/objects/48/14d431795835591e0cfe53a807ce5bbb008ed5": "ff85f8287e7eab64856bd1348b253369",
".git/objects/48/2e2506ce805efb4ce7c1af4b0d6cc31405973e": "fe7f846bb1c2de7afa58f6fd2b874874",
".git/objects/43/9429ab1cf5b2a72db83b24b87efc4f3743c989": "b3b769dbd92790a23c3bb6b72571b580",
".git/objects/25/deba8b15e76b9db08599ebe068b7c9395320dd": "a2e0a811bd036d882a3f4a9fb1fa554e",
".git/objects/7f/69087e6b31429d4037cb432d0c08ac2b4f7ed1": "0a0d149f49b7ad6f82127db32741df4e",
".git/objects/7f/c158f79237e5576336a48d522ae98132f9b475": "3d607bfff01678b222d514273cbec933",
".git/objects/7f/8b516a1a99726e7045c3c9f4087d2078f243f4": "e74be795f879285884f839766a8f1845",
".git/objects/f5/f21ff870d5409b003ac93d2b71ff04bd2eb269": "c5a3c5a1afe90c0985df650bcd05edd6",
".git/objects/f5/cb0c668018432320efd499a6f015cba1ada72c": "0fbe1f6fc0dc657607391efd4683b305",
".git/objects/89/4024503b32411c60331e4afa2f6ee94dbfcfea": "ceb20aa93fe429d8332fefe44d6f3854",
".git/objects/89/82fb64407dd29af9227dfe5f1121059932b207": "1b3bb85057ffb876e0450d1317a0b06b",
".git/objects/02/19d9fa66e348cb92c8e100c0d95ca517bb5f85": "860cbd75ab74b9bd3bb5d579b1b65827",
".git/objects/3e/6ea24aa51ae1def522e520216ff8b5480b026a": "ff4ac14f5b4244bfa2ec6757564bb1c7",
".git/objects/a8/b700d1d733bd1be854c989ea5238f673498f26": "e69149d45477bb5d9e215467c3110c91",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/f3/a7521be8f5911b718b06eeb535d26e2e55eca6": "2cbe00d14fa06ea8e84865243afe73e1",
".git/objects/b7/36722b630712347e6a9f45eb351ec7250a5467": "73a20318e13c186d9a2e07d3acfc8189",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d9/c04ab53cd17e4485aafa8356d2ef76425224eb": "aa38db221a3905a0c95fe094b207e0fb",
".git/objects/7c/71a7ea83bc27f55660760f29d0c9b1820f363f": "882be01e09466e5429ba25fe54877dde",
".git/objects/e4/324b6d169274629383035e67682c5f257e1895": "14511fe96e2346a69773abe9cb76d73d",
".git/objects/e4/db21498f09f1afd11d46d7897130991d02c102": "50d8f71368841b57cb8d878c33786e08",
".git/objects/cb/94e5066db939be2d7c8ffd0b23c659bba7f308": "e2bad7c1820b3d734434779e126598de",
".git/objects/e3/ce998e1631ad7718204d01802b61115d30acce": "34433e70fcb4f88c8371fce13c73be9d",
".git/objects/e3/46bdf76e6983a0f9e3762932147443b5136c0f": "328850290bf382538569946ca495881e",
".git/objects/40/ca40fe0004ce0b50a01de5aae037d7210574f0": "4bfcc1d5b49f9521af9d2634eac36451",
".git/objects/f7/bb54c62cc59cf11d1dbfd775a58f6a158ae9d2": "51a986e514c4bba4dc94c511a997f409",
".git/objects/5c/8add4e30bc644275480464ec2bff4336db9b3d": "e0c84ed289361bfd388c06fb2f84fe56",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/90/cf9d8bd74916c8d731dc72a68dc7e2390c70d8": "f5868a6857bd25c7b00186dd1d133525",
".git/objects/c3/728ea9b45faaec50e251bac56953d6a2715a4a": "cdbab505ecba1ea04cdc70672333c785",
".git/objects/c3/e76e0870e7b29d7b61c4f67a6f876de2911a6d": "e961c760123cffc8873cb24797c97782",
".git/objects/d0/803258538ce2b735582203d2af7ecc54862be7": "24c645a634abde249cb338974493c642",
".git/objects/8e/4d52215f0dd260243d19abc9da25ddfd0a3bc6": "c8a6f6aa1f330608b5ed3b5c21a69f67",
".git/objects/4a/f274b7960c70bc754484bfb69d0f98db838f35": "a6c871daa4ea9120575f3ec1dc0ac350",
".git/objects/97/27bd516ffec501c2c70d612d5a84df0cef6fe1": "1d742ca4a2960046d542403e2e35fd17",
".git/objects/6f/325bf357344a4be9d6b966bb92c4bbb55be7de": "b7994541e7db3e07e5693387d41c91a9",
".git/objects/d2/2773aa3c035b3e4377d71decccc5d5803ec884": "47a221281f6fdfc8485d0612b492055c",
".git/objects/c2/65612d87dc676f4ee74a7086ad79dcf50180e5": "59f09f338fadcd33a437a65d2ce78bb4",
".git/objects/52/5c7fd4c006f348a5b230b2d91696a5581d2dd2": "df0498b76e72df6d4dd7f9fafbe6eac1",
".git/objects/52/a7acaac1c7b8adaa1e33af936fc523cf8deef9": "0ba9b22634a5265e21a0f50200bbc9b9",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/12/200e7825ebe513b7368df5dc0bfcf9950e0711": "2f8673806c43241a4cb56c89f5d24265",
".git/objects/12/3554c9e78c465c7a8c9ed977347f0213aad72c": "ed5a056aa33c099481cb8a9657ccd82a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/4e/b9afbdbf2ed045dccbd38535d7b2039aa88c89": "928d65a529c11233369668dcb4886005",
".git/objects/4e/1f27435c83d8d5995b261e1cc5923b9a16194b": "fddefa5a9c1f85e1f89e05fd47b9051c",
".git/objects/a3/512f919b4bbc229e0b80052f72114369252f0d": "b78d296bf44ce2860be8793cb28b110f",
".git/objects/6b/32fc476a4449667327aa63fdc124496cae78d5": "b019258b09128744b2bcdb58e5702ce6",
".git/objects/d7/64cedca39cda784fc4f7796a6529b94e2f89ec": "f633eabf98aab1df1fb2f00770e7e110",
".git/objects/96/a608bd9a8d24a516be7cda76a34868c776930a": "e28e5f46208476fcf7d5aa3d9ab58d0d",
".git/objects/96/267583400fea7b3df3d2dcdffb6d1b1c44e556": "6678fe872a6f20edaa274bda2ab08a4f",
".git/objects/7e/560277e963fe850b72c7c72079dd8e3fcf722a": "0e38285f4a3c2c0c810bc386add4c673",
".git/objects/63/9769ec0c9ff3d98e91d4110cb03ec9db6d6b74": "ac8328f3266e33db95bdcd5472775b5c",
".git/objects/63/7f9c1a9d4e28c2476785d7d00bfd8e8354681f": "423fa45ec3079110fcee94ddf7605eef",
".git/objects/d3/5a004fc5f5a82fbac7542f19c1705e3cf9e055": "78e39cf1a6370dfec6fee2046ea71836",
".git/objects/e5/0c86b40dedc2213ffa2b3e06c7def68b7a043e": "3c33b487e7495a52822242271d12da68",
".git/objects/e5/c17f06885ccb07160ca16f8014b7a09624c96a": "58957d219c151994991746868b2d47f8",
".git/objects/e5/11a6211b614a14825a3f2dde9d51cebd4e7f05": "d9469b3b87c3c7346dcf1340c9c4e1d9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/5d/385ba065ba99bc43d0e60625d08c5221380332": "fd8c85d21937625acdeaf2bca974a6b2",
".git/objects/56/f297f7a9701ffecb26cd40e7062987beca918e": "da60bcb5297785bd9a2afcd359764d8e",
".git/objects/c1/1212023e951b0fed813d318cf987074485c824": "6e5cd4d5d70de5f0d0d7ffcb6187376b",
".git/objects/0b/3994db86f30cb4125814958519e21989f592c7": "388d5727fb5296b1957d10da1c00fd57",
".git/objects/4c/515a1516c6c0c0be2fe498cfe69c03036404b3": "d5806e647b72404e891a1b6b9d568440",
".git/objects/f0/8cd54829b11f7c1cd120770a5db7516f731ede": "84e3206f0b154ca49c0f52e3157342c0",
".git/objects/f0/b9d60346c25d289bac7fae93fe0b1be90e579c": "dbfc2d90651553314d564b19decd3f2b",
".git/objects/a9/9facafcd5267887f1741d0ee87dc51f8574795": "c615d72dc63011e49023a4623078a01a",
".git/objects/7d/b3e885a3c8988833365cd80859d4687fb1db7a": "e3c759165e6c53442e3e3a398432c05c",
".git/objects/7d/7bbbaf3bd857f55aba3dc0ca137086ac6319ca": "6440e2a96270c9de675756edeb3cd011",
".git/objects/7d/e6cdd5cf6140e8a0fc5e6ab0efbb6ba30734f1": "9551adbc25bd7ac27667c3168778f7c0",
".git/objects/7d/03fd9c97c139b758fb040c2acbcb9eb6832723": "051ee8eecbddfec76241fc36159e9d90",
".git/objects/9a/78df4dcf012a2dcc5192804576152e89cdcbb8": "08bf140816dbd6710065c8a56731b79e",
".git/objects/b1/50596be4da46834ec1b31e6a78247d078a1b2e": "e9a73bdbc1a865596b47b0f95822eae1",
".git/objects/2c/ecb9a4225621c64028768378216c0d345ac3b9": "5717c461f079aec8dc5e89b0dd026d75",
".git/objects/16/58a2bf2771c4e9f0e238aa94ad226325ca69e7": "6f7d42c938f5dd9c6ecf4e17559aeae7",
".git/objects/16/72fdfa704371831be376712dcf06633324b1b3": "ad0e19a06c6b5bf37cb2d66136618868",
".git/objects/bd/5bd50fd10ec15b2d1113bc28b8475214333464": "0b08abcd55713c10f7638f5c1cd2f5c2",
".git/objects/db/c3a766d9cc3c9f34b73845cf9fc54be00e40ff": "80073716397ea4548260385c95a92966",
".git/objects/db/3be77896c96939e63a68869b3b733b63777106": "882a63b85e661f9981eb5dbff618e4ee",
".git/objects/85/d024709bc72cfaf569a6952ec931a302160918": "bc41361acd65f6af0a48a3cad839e992",
".git/objects/85/cc9a5b00af5123cc2d0eeb66091a3d61a65c68": "15dc8f5b5ec67d678d7a430b95a57132",
".git/objects/f1/5cad6c74ceeac37c6dd425e95856827d7d8e21": "c14a0a01cca1f95658836f31862a2fcd",
".git/objects/27/0d852dd24ef4925e30c05449355b0396b79fa8": "2e33345644c380519043e43c31d28229",
".git/objects/c9/fcf8d4343cc0db18fed4f683bbc7cfac111acd": "e197b04942af5e84e4ec063424c93b0a",
".git/objects/c9/a8697a6846e1da63f0cfa695558af08967b64e": "de1a772243c020f21329e2f437b02f05",
".git/objects/a6/04c12b453037efab00236387b29225860040f4": "80ffedfa857b649ef9a09719128ab172",
".git/objects/a6/2bf3523cca12dfe13137a579add4e146a47b4a": "5799e9c57dbcce1c6e4d0405fd655134",
".git/objects/e7/b5baf6e1057eb401f952e1c620ee542b2230ec": "07952e60684be3c34e840ef525c04f0c",
".git/objects/35/9d1df06180db55f518842309f472751d767ed2": "18b452b8b18a3dcf367a64f7a93b3f35",
".git/objects/28/048992fd48964d5998272218ea18467f766acd": "c3b8d5e41d3a4d64e2a67dd7e31c7184",
".git/objects/28/c259c56390a7e16a6ec66996eddfe291c6d2ba": "b41323bb648b0fc5208d815e8ba1e427",
".git/objects/71/d33b6ae2de4c2ea2da503f29ac27c48188a923": "40508c9658bcbf474545ad788f18de8f",
".git/objects/18/3343422243c1845b678f340a5140518dfc4f0d": "5ebdaf738e53eca6281417070c9b27df",
".git/objects/18/dfe779310b8f766ef612d4af38f26bd959efa9": "85d0d21b52893907aa4c21262e6c178a",
".git/objects/ac/e4bd7ed8b60b2c12b527355f4457385bbc9679": "ec2c25c3daa807d6e934eab116bd19e0",
".git/objects/ac/3016a61334284d981e79191d2d2c0ddd16b3b3": "eef0b72d99e58375fc478464504e6257",
".git/objects/8d/c8cb70b83004fb467e894f1ad27103e1419e62": "93890c17ea47c3f715b9bf10f1655f71",
".git/objects/59/4c6a7d74b65d5f6e57654a33bd0a0cbcaf9e0f": "00e46e1a404d858d42099333d3e91b71",
".git/objects/05/b461bde3910ee8b7dbd9fbf85aab2b90a6fc31": "f1f4eda4d5a4b9591832677855e4a92f",
".git/objects/05/547825695fab00fee673a21999f0e3e7538e4b": "0e3c5986069da889a746d2c95f1840f7",
".git/objects/cc/cfe04fce1f33eb29ebbdd1479ddcc7b066e70d": "0fd021aa2cedeb7f25262c85d0948766",
".git/objects/eb/0211f464491bdd9c29116223b0e87bfc4fa11e": "d6282b45177a4740ff3f7d1969d06923",
".git/objects/eb/2147e4eb65e1880ed149816bf02b5f470d617f": "90f6ced592d60f9653b53b3868448235",
".git/objects/eb/e7336ae7330316789101c08e4cf8082291bfbe": "e3fa129b9388cbba12d787c829a5ddb7",
".git/objects/0e/ca24a39923923bf340185b72f433c3c697fd6d": "c9a6ba1242a52d319a2e2e081a445162",
".git/objects/0e/7d43e7ef8954a2697cae7f5735ec33c4dd9cec": "7858bf553ea02a0e3fa78cfda17b4aeb",
".git/objects/17/caf729545568f9496a454eddaedf67b56155c4": "d08c0e3fe0b560ab2ed25ec705a09416",
".git/objects/17/778c715ef6b9ec312a2a15413aacf77621b028": "cb13a646b81d9575f86682cddfc39c71",
".git/objects/17/1c06054bf6acfc84a7258b1077ca9da4d6f63e": "cf015e8cc09df45bfb04bf0a3153cc75",
".git/objects/b9/cb8caaea28396ba6dfadbf04eebd0f16e4dbe8": "871347c4a7ff8526d0c4bc017f3e678d",
".git/objects/a7/f37dcc4ec0bbf50c3509e290748816d0865c29": "b1ccb7bbacd0a12ec8b4efd8b00caad1",
".git/objects/a7/8743076f444960f3a3fcf65cbdbbca81748e53": "55efac5733d4b6a8a4c095f5f4837f5a",
".git/objects/e8/fdb56ba2a5bfd37dc158803f3d8b919ec4199e": "59f3dcb4c5a1743a95fd8411ab48b7c7",
".git/objects/e8/c57c02d874a7fb619640fe739a96ed2993a9ed": "8fc615005fe926619ecd57b055795490",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8f20610f567f856bd5fb64f2989952a326813a": "07228784a2c6d1e33bf712c9ec7c0ab3",
".git/objects/20/69002bafc959555d5816e45a0e8444a31074d1": "7a38e951e5a06c6a231bd055484c95e3",
".git/objects/d6/8fc0dce4d1b2315f1a13d628eb4dc160dfe5d6": "9664edf5f6218cfa1e3c73d3695051cd",
".git/objects/d6/701ec1fb8ad600da11985db32888dde9b72035": "b49c5d380093f7829a5844acb0e34b62",
".git/objects/d6/1edd9a8549f03c4458e89a3df3e916f2bac449": "d429accecada20e0cdee9365d7c1ffdf",
".git/objects/1c/fef5c1290fb3c23e09b563d1ba3fc8bdc18729": "5ff22f134122b4d6b2ab8dd45786c181",
".git/objects/1c/df81ef9505a3d7f5be2d4d1fa2aa048f4d155e": "b9a736f61f4f994b183b13c4f5527e44",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/8b15855dade0158cbaa70e6a3b50048f541c4c": "1c7bd527cf4bacb458e579515430210f",
".git/objects/7b/6cf73c1836045a655cb3ffb89251b7fad3b889": "e6dc907cf37eea3212da18c4c8713798",
".git/objects/6e/a3eb86f5c693ff08aeb87cf2839c96fdf0d68d": "46722baef4cc8b9a2e2c1279e84f84c5",
".git/objects/b8/41f832b75777b83932c1acd3bcb9ffd5468d43": "b60cc817b9779fb66d228a20c5e33070",
".git/objects/5e/926587b90fd6480b8a15608b6670be1f4af0ad": "b6b5ac7652f1b0184c42bbbfa8409836",
".git/objects/aa/da2aebf697043e2a89125ec2f0d4de74388e4a": "9a5d0dc2df7663d6507d685297fa216d",
".git/objects/ba/3c00e27973f3da19c1697d6f87c9769e191a15": "c9e3420f9508e10e19dfe6f85fdfe96f",
".git/objects/8f/f45343bba9833f3b1775c5dfb0a5d7979c5157": "a18cbe2702a2b27c8f0e254f95e9cf2d",
".git/objects/8f/9a0aaa76bc432ba722550f264a1ded10d2f9b1": "67f8cd5749aad6aee38a9fd8ed56ddc7",
".git/objects/8f/6e865d5481cce0a80208a2f337b7f28def6719": "8daa5031d3c8e97b9864157a1e508da1",
".git/objects/8f/acee25c100fc0b58f4a6a649de8df87fe7ae1d": "5a927bf2129fc0c14cc4b4ec8d9081f7",
".git/objects/24/82ec708b8e4ca9d224b08aa345b756f0dd2468": "baf9483c78ea3742fe6d07c75c7eeefc",
".git/objects/2f/ede68225560d46a526f50668d9aa1b2067f498": "6fc0741990c89aafd2e6efc5d1a7b1a7",
".git/objects/2f/da2261299a0db2a9cba3f03adf9efa6f5a5b87": "7b4df703809cd035f3ab3feeba8fdae0",
".git/objects/3c/7a7cda68aa949c87b10bc37661c6d13806666b": "7c50a7096a1676bfb5763af37b0fba8a",
".git/objects/9c/47e2eb253e615eceaf131b401504719899d70f": "bf633a75175facf4181802808a826bba",
".git/objects/47/6581f0ce262263b1f9203089287f9d1d8065a5": "a626b1f3866fcdedc7e7e8aac7785b93",
".git/objects/47/a808ff17124d08651273a0f1b98b8bdbef9e7e": "2f9ab733124c7c786737e747ed33ec14",
".git/objects/d1/808a58ce83755205b752add0edf6221f5b2f3a": "64ad702fad5d02c3cb35540a99265782",
".git/objects/2b/c303eeb8d0c4d3b7b5052369669241e80acdba": "e81863c65cbd54a03db05e0e344b8a47",
".git/objects/32/797f5861b542499d716909cf3f1fdcae19e8a8": "a24e4c7bb2357f58ddbe821665de2ac2",
".git/objects/ae/a03e990594d5f6b809d5f437dfdf81fd6f7ff7": "d17ad5045ef1ac0a1d9496386b3d63f0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "ba55b0cb13c782f01c1f861b60b07224",
".git/refs/heads/master": "073fdc55a9ea589a71d8846b3eaaff0f",
".git/refs/remotes/origin/master": "073fdc55a9ea589a71d8846b3eaaff0f",
".git/logs/HEAD": "1d2562d646dc46ec922e68369290329b",
".git/logs/refs/heads/master": "1d2562d646dc46ec922e68369290329b",
".git/logs/refs/remotes/origin/master": "c5de60e2e9389253dd6ffef41351cf76",
".git/index": "47fb3c728b4db200777ed56f62989113",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"version.json": "f4e916a1982c6389b9363b0c80dcbe80",
"style.css": "9c86e930cc32776b1601d54c8a8b0e44",
"README.md": "2f7c3866aa657a84db06ee8eddc4dfed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"img/logo.png": "ad28bb1e46c327b93981209d84d8645e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
