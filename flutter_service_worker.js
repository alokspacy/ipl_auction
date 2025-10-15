'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5e37488743dc232d289ab068ff4bf69",
"assets/AssetManifest.bin.json": "6aeb1412fe8a0fde72f3f81b39df39c5",
"assets/AssetManifest.json": "af25716dd1a94852a269defd6fd33360",
"assets/assets/data.json": "cf91cab60fa0d29188cd28d53a94938d",
"assets/assets/pics/1.jpg": "a29545458541156f50b0fc6994d7ce0c",
"assets/assets/pics/10.jpg": "228c691be8a85fce2f25f78a107268cb",
"assets/assets/pics/100.jpg": "bd881af2dc89bdd9b184c110182b0c04",
"assets/assets/pics/101.png": "f593dfa081ab1cf43e7716e38dc0371f",
"assets/assets/pics/102.jpg": "163e5202cde9a883439e9cd15d01008a",
"assets/assets/pics/103.png": "aff9314178875a9e979b6c34ce195c4b",
"assets/assets/pics/104.jpg": "f00c4f91d9ee7ce6cba313cfcf4023a4",
"assets/assets/pics/105.jpg": "bd5f45b9ad359786e827e9da9450e924",
"assets/assets/pics/106.png": "3e5052db4b587ce6117d666e3d0cb5b4",
"assets/assets/pics/107.jpg": "e876f33b7039a8763b9ad14cb916e464",
"assets/assets/pics/108.png": "6653f5839ffd8b7daf511fb3eb9acfde",
"assets/assets/pics/109.jpg": "edc195703f261e058bb2bd78cfd6a242",
"assets/assets/pics/11.jpg": "de94a670131927477e860842b0cc3dc6",
"assets/assets/pics/110.jpg": "999af0966a9f09dec57639b520edf877",
"assets/assets/pics/111.jpg": "6d858b8569f52cee3a6cfad3caca2696",
"assets/assets/pics/112.jpg": "2d741520e8e93fc57d66bcf4e2546a40",
"assets/assets/pics/113.jpg": "dab9063a9bd828057e6b4f0dae3eb24f",
"assets/assets/pics/114.jpg": "1dae42b21273b62a4ad9bd0f957497f6",
"assets/assets/pics/115.jpg": "d23696b737823f6f19763eb075c950c6",
"assets/assets/pics/116.png": "7425b34a8d7ca69fbf10095c61df4235",
"assets/assets/pics/117.png": "946b23ca788638c7fd8652238ad7c822",
"assets/assets/pics/118.jpg": "58f9384949706852be3a9d9e19549f30",
"assets/assets/pics/119.jpg": "44594226d7066b809022b165ad66f5d1",
"assets/assets/pics/12.jpg": "378dc05595cf5ad05400b0dcce107bd4",
"assets/assets/pics/120.jpg": "611394a48b657b1162e19c613a3b29ec",
"assets/assets/pics/121.png": "edeb835ac2f0ed8fb427241aeddd58f9",
"assets/assets/pics/122.jpg": "949acfb379a146593e23766fff777e27",
"assets/assets/pics/123.png": "26cd08aaa2c7177a4626f053d44ad9c5",
"assets/assets/pics/124.png": "967e4ee35308f40a6a38b7d8a0b3d879",
"assets/assets/pics/125.jpg": "2d0ecf2587363f19d8368b797162d6ab",
"assets/assets/pics/126.jpg": "9592097cb5e9269f3fb2ccd20436d3fa",
"assets/assets/pics/127.jpg": "4ac3a162f791164fa85c978802c58437",
"assets/assets/pics/128.png": "02e9ac43ea04bd27b7bd71f92d311abd",
"assets/assets/pics/129.jpg": "a91a2df678eb509a1efe122d63ddad41",
"assets/assets/pics/13.jpg": "0e591bf8dc1270644aa8ab38048641bb",
"assets/assets/pics/130.png": "71ccbd833e8d08216f4a8344d8cb5908",
"assets/assets/pics/131.jpg": "f26503d38993f68ea8ef6bc44c486295",
"assets/assets/pics/132.jpg": "fc33bc5f8583a9e9405ad96baf3f6724",
"assets/assets/pics/133.jpg": "a694185a9b3ac5329658c556ec94b5cb",
"assets/assets/pics/134.jpg": "049cbf462a8c529676c0dae0163af91d",
"assets/assets/pics/135.jpg": "ae0c5e8b84773dc58c913e2d65187938",
"assets/assets/pics/136.jpg": "a25b53c4cd0bc00b44da33f4dccd8994",
"assets/assets/pics/137.jpg": "6c1849333baae912e1bb9509e11a3478",
"assets/assets/pics/138.jpg": "de6eb8a81f1ce689375b94a1609dc359",
"assets/assets/pics/139.jpg": "ee99d13f7bc1d2f77ba87ecef869f01d",
"assets/assets/pics/14.jpg": "97089446ee3ad68c2cda8a2ad5cb1381",
"assets/assets/pics/140.jpg": "d09aaa0d9387bf6a0115d6c392218bdd",
"assets/assets/pics/141.jpg": "84aa91e8e59e42686241b8252ad94544",
"assets/assets/pics/142.png": "0e281c7dc425371061b5813656f341a9",
"assets/assets/pics/143.png": "8a3c20648256bf75cba32992164de302",
"assets/assets/pics/144.jpg": "37e0906d416c80b9cf69d942286b9b80",
"assets/assets/pics/145.jpg": "620933faee300a5112d7e434fab554c4",
"assets/assets/pics/146.jpg": "2d5ecfa2a899044978384446f50d81b3",
"assets/assets/pics/147.jpg": "2e900875aebcfe1e90c1f3cefe95acd2",
"assets/assets/pics/148.png": "97d7e4d233256beaa7588e8c0b14fb87",
"assets/assets/pics/149.jpg": "0840f4fdb0b68be787c0ef0a250231f7",
"assets/assets/pics/15.png": "726007bfba9d9b494a77b7897d132722",
"assets/assets/pics/150.jpg": "6037583357a699796fc8159533a48c65",
"assets/assets/pics/151.jpg": "32ad06f72dec17a71b5e13e7b8b0c815",
"assets/assets/pics/152.jpg": "4dee0696d66eaec77570d1e97de7b51f",
"assets/assets/pics/153.png": "40842c16b7613124c61d465a0ad6cfa1",
"assets/assets/pics/154.jpg": "ca89084f809e1326aa57815761ddc301",
"assets/assets/pics/155.jpg": "70bf76ddccdd7c17759ab92576c22514",
"assets/assets/pics/156.png": "d2c6e127396f824bf05c73a0ff282653",
"assets/assets/pics/157.jpg": "90c9ec2029103d5d3ae4b20df820dcb2",
"assets/assets/pics/158.png": "31bc595f4b5ba5e7a560c1c8b6985ac3",
"assets/assets/pics/159.jpg": "b115259170348e05371adc40a3358947",
"assets/assets/pics/16.jpg": "6a044c8b19a2846d62db313368326942",
"assets/assets/pics/160.jpg": "60c3d6f114d74d3684178e4032aba34a",
"assets/assets/pics/161.jpg": "5b1d5574a4100316cb3c55fda3c9645c",
"assets/assets/pics/162.jpg": "e1a5f307b2e346303eb15293b82e0fb1",
"assets/assets/pics/163.jpg": "e64a52631c1fcf17e00d07feaaae55af",
"assets/assets/pics/164.jpg": "eb0670347486f58ac7fe969c49cedc74",
"assets/assets/pics/165.png": "41b78c120e5b01be09297013e9dba7a4",
"assets/assets/pics/166.png": "a2d9882eb0632587da51d84af1f21ad0",
"assets/assets/pics/167.jpg": "de5f01d15d39efdbdb2ec6ea0e1bad49",
"assets/assets/pics/168.png": "31582672dfe50caded6c0feb2199defe",
"assets/assets/pics/169.png": "55a67b92babb2c6b4c5ede785c5f8498",
"assets/assets/pics/17.jpg": "bac10e2a2146ebe8f869e8689ce17a68",
"assets/assets/pics/170.jpg": "58839e37a79d46c53d106d6fb42710ce",
"assets/assets/pics/171.png": "80fa8d56c4e5d83b2cddd529b7d88904",
"assets/assets/pics/172.jpg": "3ae87d0aab30ffd1e2f23316fc86b0c9",
"assets/assets/pics/173.jpg": "4eaa7663d1e8f5fe1f344a7b0019ae07",
"assets/assets/pics/174.png": "6d640f77eca4ba077ff648e3059787ee",
"assets/assets/pics/175.jpg": "a744ffbb1dd6638c44967d4cb9f14e50",
"assets/assets/pics/176.jpg": "515422a45b187eee25497ccef553de61",
"assets/assets/pics/177.png": "97b66ef9606737224827394d98ab2793",
"assets/assets/pics/178.jpg": "24fa4393c9d669101046dfa0c582b7b5",
"assets/assets/pics/179.png": "c18f390d3fefd59ca4de0faccb59020c",
"assets/assets/pics/18.jpg": "90b181be6f0a7afdf6ae64e5831f6c0d",
"assets/assets/pics/180.jpg": "6aa3d60481eb4d249249231685587fbd",
"assets/assets/pics/181.jpg": "131241aa4175e7a7ccd465ef55680782",
"assets/assets/pics/182.png": "3c46770e85db763cb42ea67cfa5e8eac",
"assets/assets/pics/183.png": "15cf40ee7553399374cea5b290036421",
"assets/assets/pics/184.jpg": "a5ea67a77120bf9db6a9240aff51e9cc",
"assets/assets/pics/185.jpg": "bf4ed35d6528104cd697e60250aa51a3",
"assets/assets/pics/186.jpg": "d2b628055695b69b18b4b864522c6944",
"assets/assets/pics/187.jpg": "b292e558d396c3bd382690759b3997c8",
"assets/assets/pics/188.png": "eec0dbfc90b5d1dc985acb4b825f8517",
"assets/assets/pics/189.jpg": "014a98981b2f34be4f3b0f115585e3c6",
"assets/assets/pics/19.jpg": "908751cc0f212aee36acab190ac49b9e",
"assets/assets/pics/190.png": "aa5bb329c0a40e47f5081785e2c66c35",
"assets/assets/pics/191.png": "f33f1d06af5c38a53eb4c2a4269f38c5",
"assets/assets/pics/2.jpg": "f8acc9bf92f1e8bf08acacb1f96e6b99",
"assets/assets/pics/20.jpg": "d197e2d4152750fb733cf67b0eafc2ac",
"assets/assets/pics/21.jpg": "1ddfa4d80a5b93bde91b52a2815ff97c",
"assets/assets/pics/22.jpg": "aca353b4f6ffc719af3bf915d43aede9",
"assets/assets/pics/23.jpg": "0d8c6cc1df58d16fc7ec4a166daf283a",
"assets/assets/pics/24.png": "da55208ea2dd8c4da0d792b44f39536c",
"assets/assets/pics/25.jpg": "beadd08da722dc4557976074464a001b",
"assets/assets/pics/26.jpg": "4df4bd596022ebae0ade80c1093ea125",
"assets/assets/pics/27.jpg": "771b55243f4a2aa1f653523aafd39273",
"assets/assets/pics/28.jpg": "f459bb209c24a2e916f8585473f1057f",
"assets/assets/pics/29.jpg": "c8cf7121ffed9335dc871d5d1fcf278e",
"assets/assets/pics/3.jpg": "be8690746a38089070bbc618bc3f7156",
"assets/assets/pics/30.jpg": "c267e3f6af59092108e3181ad6957b61",
"assets/assets/pics/31.jpg": "0971ca9f1677d05f16077e1e997537e4",
"assets/assets/pics/32.jpg": "969821be0efb5e1fa870bf114cffff3a",
"assets/assets/pics/33.jpg": "c23eede69a592325cc91b8b8446f919a",
"assets/assets/pics/34.jpg": "24fa4393c9d669101046dfa0c582b7b5",
"assets/assets/pics/35.jpg": "56e461636021d6409cd73bc3215a6c44",
"assets/assets/pics/36.jpg": "ceae981fbcd8a98418c208fdeb017495",
"assets/assets/pics/37.jpg": "49b4feb2b23fe1723ed0f463defa8fec",
"assets/assets/pics/38.jpg": "0747c5e6cc0ac88a34a8521d9303b7c8",
"assets/assets/pics/39.jpg": "764ac673bfb28c866325dfc146c9ecc5",
"assets/assets/pics/4.jpg": "b4be72dc0de3463678069b8869edd2c0",
"assets/assets/pics/40.jpg": "5897d344fca7b9bcde3215847f20135e",
"assets/assets/pics/41.jpg": "0bbcddcfee29972be5e2d5836f461a23",
"assets/assets/pics/42.jpg": "6c4a1bb7ce109123c1fde9d1c0c9619c",
"assets/assets/pics/43.jpg": "f81e6dd9f57e0e989e81ee093cb861d5",
"assets/assets/pics/44.jpg": "6c355ed8b4d89e7489d947db91181693",
"assets/assets/pics/45.jpg": "f2f4234ad492f3567260be6587f20268",
"assets/assets/pics/46.png": "d4a021cdc3fbeb091d5cb82fcd68d542",
"assets/assets/pics/47.jpg": "19b685cb0089593de804f2a4b7953256",
"assets/assets/pics/48.jpg": "df0b522ce6396a08a285cd50d5707f4c",
"assets/assets/pics/49.jpg": "2eba9f83e5f14eec4b31e208d3be6962",
"assets/assets/pics/5.jpg": "5b3bb1b2a9fa6668d9054fffa155ec84",
"assets/assets/pics/50.jpg": "fb6c2eb7e68df44d82dcca41b2f15c65",
"assets/assets/pics/51.jpg": "e42a4b1ddee29bb9e9364939fc1903e1",
"assets/assets/pics/52.jpg": "2daa8e0970e027314a724c0a6855d422",
"assets/assets/pics/53.jpg": "8d2db09da3da2ad521813594da80e5ab",
"assets/assets/pics/54.jpg": "340585a52831ac636c2cdc29a1abebac",
"assets/assets/pics/55.jpg": "9501c43515970064e282243be59a2550",
"assets/assets/pics/56.jpg": "a054833a8e59e190ac2ea523e181c664",
"assets/assets/pics/57.jpg": "3f647a65e970a9c8df085858ce801eba",
"assets/assets/pics/58.png": "4912295e02a89087fdad551749f41734",
"assets/assets/pics/59.jpg": "482349d205e8b419e66c4a3129d4b936",
"assets/assets/pics/6.jpg": "be3027e8ec3b0b3b0aaba310c98b142e",
"assets/assets/pics/60.jpg": "a3ae7cc904f65f559023031909351c82",
"assets/assets/pics/61.jpg": "17922802fea539177bcee1e54dd5dd27",
"assets/assets/pics/62.jpg": "ed113ddb6edc8188672cc8289f649a27",
"assets/assets/pics/63.jpg": "a4b34b30b3c0d5f0b68c04ee79b38ab2",
"assets/assets/pics/64.jpg": "94166ec25550573e38a91c9ae3a8eefb",
"assets/assets/pics/65.jpg": "0b2befc00f220b8776bd49318423da70",
"assets/assets/pics/66.jpg": "decab36709a60442edbcb4989e2c8fdd",
"assets/assets/pics/67.jpg": "66eb314b880c68493fa75bd86ff189fe",
"assets/assets/pics/68.jpg": "f34b07ce1ac0fda9b72dabbdb1a5347f",
"assets/assets/pics/69.png": "024e6b9333d15df7daf8b844b0ef6025",
"assets/assets/pics/7.jpg": "ff5d35e60fc2f0264d96a8fcdab7df19",
"assets/assets/pics/70.png": "4fa72807949586a95e40541c9eeea8a0",
"assets/assets/pics/71.jpg": "43889a34a7b9fa28e592c830b5097ab3",
"assets/assets/pics/72.jpg": "81eccbbd6d6afb6971d3eac7f77021fa",
"assets/assets/pics/73.jpg": "0fe9acbb5e576b3ea5e8033c82a1fcf2",
"assets/assets/pics/74.jpg": "c872843c7352b34944352f95ee64b0f3",
"assets/assets/pics/75.jpg": "6cfb74e07e0cc64c61124062600a8458",
"assets/assets/pics/76.jpg": "3abafc06d69881d948469e9056086a92",
"assets/assets/pics/77.jpg": "2ca6b618f163892217b6d7b74ed97557",
"assets/assets/pics/78.png": "17508b45e27ec9243e3564de4ae817b5",
"assets/assets/pics/79.png": "34e596ee942d4b3e706f7590510e0282",
"assets/assets/pics/8.jpg": "519330aad5c946c654ed411352237583",
"assets/assets/pics/80.jpg": "c3df92fa9a51dbb5f01ba74d0bb88f3e",
"assets/assets/pics/81.jpg": "da076087cca7023dcc0e9abd195dbc22",
"assets/assets/pics/82.jpg": "8c437698866381916ec58907f1671b8a",
"assets/assets/pics/83.png": "d78ef51fdd5e71650f27a3d25d64ea6d",
"assets/assets/pics/84.jpg": "0ef0c363ac3a3fbbec8c08dcd4b86782",
"assets/assets/pics/85.jpg": "1c58ca012f16511c03b76836491a8c53",
"assets/assets/pics/86.jpg": "2b5ee0923979419d677d33b59ed7c7e9",
"assets/assets/pics/87.png": "7a7c04acb9a49d5de3fdfcec2256b990",
"assets/assets/pics/88.jpg": "e0f5b5bb4242460d4abafdf0b0429216",
"assets/assets/pics/89.jpg": "17e92857eace37d5c3d7ae9aa0770096",
"assets/assets/pics/9.jpg": "490e634ba90b5386a20917e00c8a371e",
"assets/assets/pics/90.jpg": "ce294b7ca333370f874f422dc9717d90",
"assets/assets/pics/91.jpg": "094baff07f61c95769d10675b9d1f9e2",
"assets/assets/pics/92.jpg": "d9c353a6fec80649b756c30be05ba00c",
"assets/assets/pics/93.jpg": "cfff94911d392888925eb2deefb45d88",
"assets/assets/pics/94.jpg": "fb523170b3b1c02b7e4cd6f35ab4c1b4",
"assets/assets/pics/95.jpg": "bcdaf0a3c9889a986080d3b1e427eea5",
"assets/assets/pics/96.jpg": "56938fddc48fdae1327ad5482d5cc45d",
"assets/assets/pics/97.jpg": "b34c347d5dd210ddc900ae7e3315122b",
"assets/assets/pics/98.jpg": "67811075a0b35c9a125dbaf1071cca9f",
"assets/assets/pics/99.jpg": "bc1630150efeb51c4822de3806d1ec26",
"assets/assets/pics/bg.jpg": "051c114f45b973ed8d72a2a737c2e3ae",
"assets/assets/pics/bg.png": "b17ca1f0a1c77878509f2b08f070cbf3",
"assets/assets/pics/bg2.png": "55df8829b75fec9dd0c76bdc6c1438f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0404c59d68644f1076d19614ab3a84f4",
"assets/NOTICES": "2d9920ddb30eaf878dd6d18e47d4559f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f94658f57dc48f1fe5fa18643e7eb8cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "437450a9366e832a02510c280542824f",
"/": "437450a9366e832a02510c280542824f",
"main.dart.js": "1e2f591d78a42ce56135b1ebc9631011",
"manifest.json": "4dfdbc7a00ba2c86696540a702e37974",
"version.json": "1cff17200d1d0bb7f700239a465a4b76"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
