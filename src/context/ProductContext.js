import { useState } from "react";
import { createContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([
        {
            id: '1',
            name: 'Nike Air max 270',
            category: 'Sport',
            prevPrice: '150',
            price: '100',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_512w_512h(f/a/1/e/fa1ea5483a6e7c94ce0e3eb38ec905585b59ff85_0000206858092_01_sw,jpg)/obuvki-nike-air-max-270-ah6789-001-black-anthracite-white.jpg'
        },
        {
            id: '2',
            name: 'Nike Air Zoom',
            category: 'Sport',
            prevPrice: '200',
            price: '160',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_512w_512h(2/d/9/2/2d92b2315b5cd2fd24a5f8057481e6b8a4726c0d_0000207903661_01_rz.jpg,jpg)/obuvki-nike-air-zoom-pegasus-37-bq9647-002-black-white.jpg'
        },
        {
            id: '3',
            name: 'Adidas SuperStar',
            category: 'Sport',
            prevPrice: '120',
            price: '90',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(1/2/a/a/12aaf2a4086ec61790a58b67fc82d889e4eb3e58_0000206693174_6__1.jpg,jpg)/obuvki-adidas-superstar-j-fu7712-ftwwht-cblack-ftwwht-0000206693174.jpg'
        },
        {
            id: '4',
            name: 'Adidas Runfalcon 2.0',
            category: 'Sport',
            prevPrice: '180',
            price: '120',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(0/8/a/c/08ac25832af7bd5388561b847ac012e8c70e05a9_0000207769823_02_rz.jpg,jpg)/obuvki-adidas-runfalcon-2-0-fy5943-core-black-cloud-white-grey-six.jpg'
        },
        {
            id: '5',
            name: 'Adidas X SPEEDPORTAL',
            category: 'Sport',
            prevPrice: '250',
            price: '199',
            color: 'blue',
            img: 'https://www.sportvision.bg/files/thumbs/files/watermark/files/images/slike_proizvoda/media/GW8/GW8456/images/thumbs_w/thumbs_800/GW8456_w_800_800px.jpg'
        },
        {
            id: '6',
            name: 'Nike Air Force 1',
            category: 'Sport',
            prevPrice: '280',
            price: '210',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(c/c/e/b/cceb5bb46c608dd915a6183040594d966c6caa8a_0000199430411_nike_845052_100_ai_02,jpg)/obuvki-nike-air-force-1-ultraforce-lthr-845052-100-white-white-white.jpg'
        },
        {
            id: '7',
            name: 'Nike Air Max 2090',
            category: 'Sport',
            prevPrice: '280',
            price: '240',
            color: 'pink',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(8/b/8/6/8b86568c5847f5a30121710f3a2907e8a63b7fab_0000208905701_08_rz_2.jpg,jpg)/obuvki-nike-air-max-2090-ck2612-500-iced-lilac-black-fire-pink.jpg'
        },
        {
            id: '8',
            name: 'Nike Downshifter',
            category: 'Sport',
            prevPrice: '200',
            price: '100',
            color: 'red',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(c/0/7/3/c0737c7f17d87c570bb4c67f687a21d485039536_0000208617680_02_rz.jpg,jpg)/obuvki-nike-downshifter-10-ci9981-600-university-red-white-black.jpg'
        },
        {
            id: '9',
            name: 'Nike React',
            category: 'Sport',
            prevPrice: '190',
            price: '110',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(7/c/4/8/7c48a89d19509687d83f92b34534930f0e231502_0000209497434_04_rz_1.jpg,jpg)/obuvki-nike-react-vision-cd4373-004-black-anthracite-black.jpg'
        },
        {
            id: '10',
            name: 'Nike Air Max Excee',
            category: 'Sport',
            prevPrice: '210',
            price: '150',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(8/d/a/3/8da3535b1ac901c3b300239856af74e169116a5d_01_0000301785194_ki.jpg,jpg)/obuvki-nike-air-max-excee-gs-cd6894-100-white-white-white.jpg'
        },
        {
            id: '11',
            name: 'Nike Revolution 6',
            category: 'Sport',
            prevPrice: '180',
            price: '99',
            color: 'blue',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(8/4/5/8/8458ac31830c1fd83c43c1bd949e3dfcd6a4032f_03_0000300731994_rz.jpg,jpg)/obuvki-nike-revolution-6-nn-gs-dd1096-411-game-royal-white-black.jpg'
        },
        {
            id: '12',
            name: 'Tommy Hilfiger Casual',
            category: 'Casual',
            prevPrice: '300',
            price: '200',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(0/d/8/f/0d8fd5b358e7a3c43432a1c4cc6395b9e8db319a_04_0000303035150_kt.jpg,jpg)/snikrsi-tommy-hilfiger-casual-leather-runner-fw0fw07285-black-bds-0000303035150.jpg'
        },
        {
            id: '13',
            name: 'Calvin Klein Jeans',
            category: 'Casual',
            prevPrice: '350',
            price: '280',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(2/b/8/7/2b87603fc33c4355502515aa26551cb63b119ff6_03_0000301025429_ph,jpg)/snikrsi-calvin-klein-jeans-casual-cupsole-laceup-low-mono-ym0ym00496-triple-black-0gt.jpg'
        },
        {
            id: '14',
            name: 'Jack&Jones',
            category: 'Casual',
            prevPrice: '220',
            price: '95',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(1/f/b/3/1fb315505ca37aaf648a0edd8c101d93e933bb48_0000208552646_02_rz_1.jpg,jpg)/snikrsi-jack-jones-jfwstellar-casual-12177241-anthracite.jpg'
        },
        {
            id: '15',
            name: 'Jack&Jones',
            category: 'Casual',
            prevPrice: '220',
            price: '99',
            color: 'gray',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(2/1/0/0/21009c8089482e3b2d83889752e1deaa79faabb7_0000206826251_03_sw,jpg)/snikrsi-jack-jones-jfwstellar-casual-12169458-frost-grey.jpg'
        },
        {
            id: '16',
            name: 'Tommy Jeans',
            category: 'Casual',
            prevPrice: '150',
            price: '85',
            color: 'gray',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/5/9/b/a59b5726db3762a133c1737009691e5c041f24cf_0000200530062_07_jf_1,jpg)/snikrsi-tommy-jeans-casual-retro-sneaker-en0en00317-steel-gray-light-grey-904.jpg'
        },
        {
            id: '17',
            name: 'Tommy Jeans Blue Sky',
            category: 'Casual',
            prevPrice: '199',
            price: '105',
            color: 'blue',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/7/0/4/a7046609206f05f07bfd2a8b1c42376fcbdc3825_0000207170209_03_rz,jpg)/gumenki-tommy-hilfiger-lightweght-casual-sneaker-fw0fw05007-desert-sky-dw5.jpg'
        },
        {
            id: '18',
            name: 'Tommy Jeans Co White',
            category: 'Casual',
            prevPrice: '199',
            price: '149',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(d/c/3/6/dc36bb3ec059e5059f400f9cbad99e50bd796c49_0000207170223_03_rz.jpg,jpg)/snikrsi-tommy-hilfiger-casual-corporate-sneaker-fw0fw05008-white-ybr.jpg'
        },
        {
            id: '19',
            name: 'CK Jeans White',
            category: 'Casual',
            prevPrice: '350',
            price: '300',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/6/f/0/a6f0b689c8be77c5ca207007e058083d71705177_03_0000301025603_ph,jpg)/snikrsi-calvin-klein-jeans-casual-cupsole-laceup-low-mono-ym0ym00496-triple-white-0k8.jpg'
        },
        {
            id: '20',
            name: 'Timberland Gateway',
            category: 'Casual',
            prevPrice: '350',
            price: '310',
            color: 'gray',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(e/5/f/5/e5f56640474dffa863ad4e6fa8e3cb77b8ee7340_0000201367384_3__kb,jpg)/obuvki-timberland-gateway-pier-casual-oxford-tb0a21m1c24-medium-grey-canvas.jpg'
        },
        {
            id: '21',
            name: 'Tommy Jeans Runner',
            category: 'Casual',
            prevPrice: '199',
            price: '139',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(0/d/b/2/0db282c87c4c272b0b21406b03c19fa492f76be6_0000208570336_06_pl.jpg,jpg)/snikrsi-tommy-jeans-casual-runner-en0en01419-rwb-0gz.jpg'
        },
        {
            id: '22',
            name: 'Timberland Nite Flex',
            category: 'Casual',
            prevPrice: '350',
            price: '250',
            color: 'blue',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(6/5/c/4/65c47995acbbf1e69d3d160f73948526d7baac75_0000209438024_06_sw_2.jpg,jpg)/zimni-obuvki-timberland-nite-flex-chukka-tb0a2db10191-navy-nubuck.jpg'
        },
        {
            id: '23',
            name: 'Versace Jeans Black',
            category: 'Casual',
            prevPrice: null,
            price: '450',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(6/5/c/4/65c47995acbbf1e69d3d160f73948526d7baac75_0000209438024_06_sw_2.jpg,jpg)/zimni-obuvki-timberland-nite-flex-chukka-tb0a2db10191-navy-nubuck.jpg'
        },
        {
            id: '24',
            name: 'Versace Jeans White',
            category: 'Casual',
            prevPrice: null,
            price: '450',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(e/e/a/3/eea3a1c1caaf8761577dad7eadb26dfefb41179c_03_0000302588299_rz.jpg,jpg)/snikrsi-versace-jeans-couture-74ya3se1-zs658-g03.jpg'
        },
        {
            id: '25',
            name: 'Versace Jeans Coutre',
            category: 'Casual',
            prevPrice: null,
            price: '350',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/a/0/e/aa0e8cc5a907dda308c9fe170f6ab64443048a93_0000206667465_01_jc,jpg)/snikrsi-versace-jeans-couture-e0yvbse3-71355-899.jpg'
        },
        {
            id: '26',
            name: 'EA7 Black',
            category: 'Casual',
            prevPrice: null,
            price: '380',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_256w_256h(0/a/e/7/0ae7e335aa2310de289721c4faad58b33427a682_0000206624154_01_mt.jpg,jpg)/snikrsi-ea7-emporio-armani-x8x027-xk050-m701-triple-black-gold.jpg'
        },
        {
            id: '27',
            name: 'EA7 White X8',
            category: 'Casual',
            prevPrice: null,
            price: '400',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(d/3/b/b/d3bbb12359fd1994be94293326905569825430c8_03_0000209719727_fp.jpg,jpg)/snikrsi-ea7-emporio-armani-x8x113-xk269-white-black-q708.jpg'
        },
        {
            id: '28',
            name: 'EA7 Gray X5',
            category: 'Casual',
            prevPrice: null,
            price: '320',
            color: 'gray',
            img: 'https://img2.ans-media.com/i/840x1260/AA00-OBU00J_90X_F1.jpg@webp?v=1643178406'
        },
        {
            id: '29',
            name: 'EA7 Black X1',
            category: 'Casual',
            prevPrice: '500',
            price: '400',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_256w_256h(5/f/1/e/5f1eaf69979f4a74ef083acc863de3c404d91dc2_02_0000207287778_.jpg,jpg)/snikrsi-ea7-emporio-armani-x8x070-xk165-m701-triple-black-gold.jpg'
        },
        {
            id: '30',
            name: 'Reebok NFX',
            category: 'Sport',
            prevPrice: '190',
            price: '99',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(b/6/0/6/b6068042ba69469d3cc011b9f4cf921d5cee3df0_03_0000301196136_mg.jpg,jpg)/obuvki-reebok-nfx-trainer-hr0419-ftwwht-cblack-rbkle3.jpg'
        },

    ]);

    const [products, setProducts] = useState([
        {
            id: '1',
            name: 'Nike Air max 270',
            category: 'Sport',
            prevPrice: '150',
            price: '100',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_512w_512h(f/a/1/e/fa1ea5483a6e7c94ce0e3eb38ec905585b59ff85_0000206858092_01_sw,jpg)/obuvki-nike-air-max-270-ah6789-001-black-anthracite-white.jpg'
        },
        {
            id: '2',
            name: 'Nike Air Zoom',
            category: 'Sport',
            prevPrice: '200',
            price: '160',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_512w_512h(2/d/9/2/2d92b2315b5cd2fd24a5f8057481e6b8a4726c0d_0000207903661_01_rz.jpg,jpg)/obuvki-nike-air-zoom-pegasus-37-bq9647-002-black-white.jpg'
        },
        {
            id: '3',
            name: 'Adidas SuperStar',
            category: 'Sport',
            prevPrice: '120',
            price: '90',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(1/2/a/a/12aaf2a4086ec61790a58b67fc82d889e4eb3e58_0000206693174_6__1.jpg,jpg)/obuvki-adidas-superstar-j-fu7712-ftwwht-cblack-ftwwht-0000206693174.jpg'
        },
        {
            id: '4',
            name: 'Adidas Runfalcon 2.0',
            category: 'Sport',
            prevPrice: '180',
            price: '120',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(0/8/a/c/08ac25832af7bd5388561b847ac012e8c70e05a9_0000207769823_02_rz.jpg,jpg)/obuvki-adidas-runfalcon-2-0-fy5943-core-black-cloud-white-grey-six.jpg'
        },
        {
            id: '5',
            name: 'Adidas X SPEEDPORTAL',
            category: 'Sport',
            prevPrice: '250',
            price: '199',
            color: 'blue',
            img: 'https://www.sportvision.bg/files/thumbs/files/watermark/files/images/slike_proizvoda/media/GW8/GW8456/images/thumbs_w/thumbs_800/GW8456_w_800_800px.jpg'
        },
        {
            id: '6',
            name: 'Nike Air Force 1',
            category: 'Sport',
            prevPrice: '280',
            price: '210',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(c/c/e/b/cceb5bb46c608dd915a6183040594d966c6caa8a_0000199430411_nike_845052_100_ai_02,jpg)/obuvki-nike-air-force-1-ultraforce-lthr-845052-100-white-white-white.jpg'
        },
        {
            id: '7',
            name: 'Nike Air Max 2090',
            category: 'Sport',
            prevPrice: '280',
            price: '240',
            color: 'pink',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(8/b/8/6/8b86568c5847f5a30121710f3a2907e8a63b7fab_0000208905701_08_rz_2.jpg,jpg)/obuvki-nike-air-max-2090-ck2612-500-iced-lilac-black-fire-pink.jpg'
        },
        {
            id: '8',
            name: 'Nike Downshifter',
            category: 'Sport',
            prevPrice: '200',
            price: '100',
            color: 'red',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(c/0/7/3/c0737c7f17d87c570bb4c67f687a21d485039536_0000208617680_02_rz.jpg,jpg)/obuvki-nike-downshifter-10-ci9981-600-university-red-white-black.jpg'
        },
        {
            id: '9',
            name: 'Nike React',
            category: 'Sport',
            prevPrice: '190',
            price: '110',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(7/c/4/8/7c48a89d19509687d83f92b34534930f0e231502_0000209497434_04_rz_1.jpg,jpg)/obuvki-nike-react-vision-cd4373-004-black-anthracite-black.jpg'
        },
        {
            id: '10',
            name: 'Nike Air Max Excee',
            category: 'Sport',
            prevPrice: '210',
            price: '150',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(8/d/a/3/8da3535b1ac901c3b300239856af74e169116a5d_01_0000301785194_ki.jpg,jpg)/obuvki-nike-air-max-excee-gs-cd6894-100-white-white-white.jpg'
        },
        {
            id: '11',
            name: 'Nike Revolution 6',
            category: 'Sport',
            prevPrice: '180',
            price: '99',
            color: 'blue',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(8/4/5/8/8458ac31830c1fd83c43c1bd949e3dfcd6a4032f_03_0000300731994_rz.jpg,jpg)/obuvki-nike-revolution-6-nn-gs-dd1096-411-game-royal-white-black.jpg'
        },
        {
            id: '12',
            name: 'Tommy Hilfiger Casual',
            category: 'Casual',
            prevPrice: '300',
            price: '200',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(0/d/8/f/0d8fd5b358e7a3c43432a1c4cc6395b9e8db319a_04_0000303035150_kt.jpg,jpg)/snikrsi-tommy-hilfiger-casual-leather-runner-fw0fw07285-black-bds-0000303035150.jpg'
        },
        {
            id: '13',
            name: 'Calvin Klein Jeans',
            category: 'Casual',
            prevPrice: '350',
            price: '280',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(2/b/8/7/2b87603fc33c4355502515aa26551cb63b119ff6_03_0000301025429_ph,jpg)/snikrsi-calvin-klein-jeans-casual-cupsole-laceup-low-mono-ym0ym00496-triple-black-0gt.jpg'
        },
        {
            id: '14',
            name: 'Jack&Jones',
            category: 'Casual',
            prevPrice: '220',
            price: '95',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(1/f/b/3/1fb315505ca37aaf648a0edd8c101d93e933bb48_0000208552646_02_rz_1.jpg,jpg)/snikrsi-jack-jones-jfwstellar-casual-12177241-anthracite.jpg'
        },
        {
            id: '15',
            name: 'Jack&Jones',
            category: 'Casual',
            prevPrice: '220',
            price: '99',
            color: 'gray',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(2/1/0/0/21009c8089482e3b2d83889752e1deaa79faabb7_0000206826251_03_sw,jpg)/snikrsi-jack-jones-jfwstellar-casual-12169458-frost-grey.jpg'
        },
        {
            id: '16',
            name: 'Tommy Jeans',
            category: 'Casual',
            prevPrice: '150',
            price: '85',
            color: 'gray',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/5/9/b/a59b5726db3762a133c1737009691e5c041f24cf_0000200530062_07_jf_1,jpg)/snikrsi-tommy-jeans-casual-retro-sneaker-en0en00317-steel-gray-light-grey-904.jpg'
        },
        {
            id: '17',
            name: 'Tommy Jeans Blue Sky',
            category: 'Casual',
            prevPrice: '199',
            price: '105',
            color: 'blue',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/7/0/4/a7046609206f05f07bfd2a8b1c42376fcbdc3825_0000207170209_03_rz,jpg)/gumenki-tommy-hilfiger-lightweght-casual-sneaker-fw0fw05007-desert-sky-dw5.jpg'
        },
        {
            id: '18',
            name: 'Tommy Jeans Co White',
            category: 'Casual',
            prevPrice: '199',
            price: '149',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(d/c/3/6/dc36bb3ec059e5059f400f9cbad99e50bd796c49_0000207170223_03_rz.jpg,jpg)/snikrsi-tommy-hilfiger-casual-corporate-sneaker-fw0fw05008-white-ybr.jpg'
        },
        {
            id: '19',
            name: 'CK Jeans White',
            category: 'Casual',
            prevPrice: '350',
            price: '300',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/6/f/0/a6f0b689c8be77c5ca207007e058083d71705177_03_0000301025603_ph,jpg)/snikrsi-calvin-klein-jeans-casual-cupsole-laceup-low-mono-ym0ym00496-triple-white-0k8.jpg'
        },
        {
            id: '20',
            name: 'Timberland Gateway',
            category: 'Casual',
            prevPrice: '350',
            price: '310',
            color: 'gray',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(e/5/f/5/e5f56640474dffa863ad4e6fa8e3cb77b8ee7340_0000201367384_3__kb,jpg)/obuvki-timberland-gateway-pier-casual-oxford-tb0a21m1c24-medium-grey-canvas.jpg'
        },
        {
            id: '21',
            name: 'Tommy Jeans Runner',
            category: 'Casual',
            prevPrice: '199',
            price: '139',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(0/d/b/2/0db282c87c4c272b0b21406b03c19fa492f76be6_0000208570336_06_pl.jpg,jpg)/snikrsi-tommy-jeans-casual-runner-en0en01419-rwb-0gz.jpg'
        },
        {
            id: '22',
            name: 'Timberland Nite Flex',
            category: 'Casual',
            prevPrice: '350',
            price: '250',
            color: 'blue',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(6/5/c/4/65c47995acbbf1e69d3d160f73948526d7baac75_0000209438024_06_sw_2.jpg,jpg)/zimni-obuvki-timberland-nite-flex-chukka-tb0a2db10191-navy-nubuck.jpg'
        },
        {
            id: '23',
            name: 'Versace Jeans Black',
            category: 'Casual',
            prevPrice: null,
            price: '450',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(6/5/c/4/65c47995acbbf1e69d3d160f73948526d7baac75_0000209438024_06_sw_2.jpg,jpg)/zimni-obuvki-timberland-nite-flex-chukka-tb0a2db10191-navy-nubuck.jpg'
        },
        {
            id: '24',
            name: 'Versace Jeans White',
            category: 'Casual',
            prevPrice: null,
            price: '450',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(e/e/a/3/eea3a1c1caaf8761577dad7eadb26dfefb41179c_03_0000302588299_rz.jpg,jpg)/snikrsi-versace-jeans-couture-74ya3se1-zs658-g03.jpg'
        },
        {
            id: '25',
            name: 'Versace Jeans Coutre',
            category: 'Casual',
            prevPrice: null,
            price: '350',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(a/a/0/e/aa0e8cc5a907dda308c9fe170f6ab64443048a93_0000206667465_01_jc,jpg)/snikrsi-versace-jeans-couture-e0yvbse3-71355-899.jpg'
        },
        {
            id: '26',
            name: 'EA7 Black',
            category: 'Casual',
            prevPrice: null,
            price: '380',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_256w_256h(0/a/e/7/0ae7e335aa2310de289721c4faad58b33427a682_0000206624154_01_mt.jpg,jpg)/snikrsi-ea7-emporio-armani-x8x027-xk050-m701-triple-black-gold.jpg'
        },
        {
            id: '27',
            name: 'EA7 White X8',
            category: 'Casual',
            prevPrice: null,
            price: '400',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(d/3/b/b/d3bbb12359fd1994be94293326905569825430c8_03_0000209719727_fp.jpg,jpg)/snikrsi-ea7-emporio-armani-x8x113-xk269-white-black-q708.jpg'
        },
        {
            id: '28',
            name: 'EA7 Gray X5',
            category: 'Casual',
            prevPrice: null,
            price: '320',
            color: 'gray',
            img: 'https://img2.ans-media.com/i/840x1260/AA00-OBU00J_90X_F1.jpg@webp?v=1643178406'
        },
        {
            id: '29',
            name: 'EA7 Black X1',
            category: 'Casual',
            prevPrice: '500',
            price: '400',
            color: 'black',
            img: 'https://img.eobuwie.cloud/eob_product_256w_256h(5/f/1/e/5f1eaf69979f4a74ef083acc863de3c404d91dc2_02_0000207287778_.jpg,jpg)/snikrsi-ea7-emporio-armani-x8x070-xk165-m701-triple-black-gold.jpg'
        },
        {
            id: '30',
            name: 'Reebok NFX',
            category: 'Sport',
            prevPrice: '190',
            price: '99',
            color: 'white',
            img: 'https://img.eobuwie.cloud/eob_product_656w_656h(b/6/0/6/b6068042ba69469d3cc011b9f4cf921d5cee3df0_03_0000301196136_mg.jpg,jpg)/obuvki-reebok-nfx-trainer-hr0419-ftwwht-cblack-rbkle3.jpg'
        },

    ]);
    //state for items in bag counter
    const [itemsInBag, setItemsInBag] = useState(0)
    // state for the modal
    const [open, setIsOpen] = useState(false);

    function showModal() {
        setIsOpen(true)

        setTimeout(()=>{
            setIsOpen(false)
        },2000)
    }

    function addItemToBag() {
        setItemsInBag(state => state += 1);
        showModal();
    }

    function searchProductByText(text) {
        setProducts(allProducts.filter(product => product.name.toLowerCase().includes(text.toLowerCase())))
    }

    const value = {
        searchProductByText,
        addItemToBag,
        products,
        allProducts,
        itemsInBag,
        open
    }
    // create provider
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;