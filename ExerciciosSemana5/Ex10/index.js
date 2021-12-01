import Produto from './modules/class.js'
import {cardProduto, addCardNaTela} from './modules/functions.js'

const ps5 = new Produto ("PS5", "https://s2.glbimg.com/5412ft5nc5QPrG44sEvPUay_-3A=/0x0:1279x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/v/p/BLZh9QQ62E0I8JEHb75g/ps5.jpg", 5000, 16)

const mac = new Produto ("Macbook", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000",
10000, 18)

let cardPS5 = cardProduto(ps5);
let cardMac = cardProduto(mac);

addCardNaTela(cardPS5);
addCardNaTela(cardMac);

