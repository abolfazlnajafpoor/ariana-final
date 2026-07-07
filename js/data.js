const STORAGE_KEY_MENU   = 'ariana_menu_v1';
const STORAGE_KEY_ORDERS = 'ariana_orders_v1';

const DEFAULT_MENU = [
  {
    id: 1,
    cat: 'hot',
    name: 'اسپرسو دوبل',
    desc: 'دو شات اسپرسو غلیظ با کرم طلایی',
    price: 45000,
    badge: 'popular',
    img: 'https://menufastfoodq.ir/wp-content/uploads/2025/12/1.jpg'
  },
  {
    id: 2,
    cat: 'hot',
    name: 'کاپوچینو کلاسیک',
    desc: 'اسپرسو با شیر بخار داده شده و فوم مخملی',
    price: 65000,
    badge: '',
    img: 'https://ghahvepakhsh.com/images/blog/what-is-cappuccino-powder-ingredients-made/what-is-cappuccino-powder-ingredients-made.jpg'
  },
  {
    id: 3,
    cat: 'hot',
    name: 'لاته وانیل',
    desc: 'اسپرسو با شیر خامه‌ای و سیروپ وانیل',
    price: 72000,
    badge: 'new',
    img: 'https://salizcoffee.com/wp-content/uploads/2022/01/vanilla-latte.jpg'
  },
  {
    id: 4,
    cat: 'hot',
    name: 'هات چاکلت',
    desc: 'شکلات بلژیکی، شیر گرم و خامه فرم‌گرفته',
    price: 68000,
    badge: '',
    img: 'https://fenjoonet.com/wp-content/uploads/2019/11/hot-chocolate-fenjoonet3.jpg'
  },
  {
    id: 5,
    cat: 'hot',
    name: 'چای ماسالا',
    desc: 'چای هندی با ادویه‌های گرم‌بخش و شیر',
    price: 48000,
    badge: '',
    img: 'https://mihansteel.ir/wp-content/uploads/2024/03/3-14-768x336.jpg'
  },
  {
    id: 6,
    cat: 'cold',
    name: 'آیس لاته',
    desc: 'اسپرسو روی یخ با شیر سرد و کارامل',
    price: 75000,
    badge: 'popular',
    img: 'https://alis.ir/wp-content/uploads/2021/06/3M3.jpeg'
  },
  {
    id: 7,
    cat: 'cold',
    name: 'فراپوچینو موکا',
    desc: 'قهوه سرد با شکلات، بستنی و خامه',
    price: 85000,
    badge: '',
    img: 'https://alis.ir/wp-content/uploads/2021/05/s-1.jpg'
  },
  {
    id: 8,
    cat: 'cold',
    name: 'لیموناد نعنا',
    desc: 'لیموناد خانگی با برگ‌های نعنا تازه و یخ',
    price: 58000,
    badge: 'new',
    img: 'https://alis.ir/wp-content/uploads/2020/09/Lemonade-Post.jpg'
  },
  {
    id: 9,
    cat: 'cold',
    name: 'آیس تی هلو',
    desc: 'چای سرد با طعم هلو و یخ خرد شده',
    price: 55000,
    badge: '',
    img: 'https://blog.okcs.com/wp-content/uploads/2022/09/er.jpg'
  },
  {
    id: 10,
    cat: 'cold',
    name: 'موهیتو بلوبری',
    desc: 'موهیتو بدون الکل با انگور بلوبری و نعنا',
    price: 62000,
    badge: '',
    img: 'https://jinocafe.ir/wp-content/uploads/2023/07/%D9%85%D9%88%D9%87%DB%8C%D8%AA%D9%88-%D8%A8%D9%84%D9%88%D8%A8%D8%B1%DB%8C.jpg'
  },
  {
    id: 11,
    cat: 'food',
    name: 'برگر کلاسیک',
    desc: 'گوشت ۱۸۰گ، پنیر چدار، سس مخصوص، کاهو و گوجه',
    price: 168000,
    badge: 'popular',
    img: 'https://majorelle.ir/wp-content/uploads/2023/08/%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A8%D8%B1%DA%AF%D8%B1.jpg'
  },
  {
    id: 12,
    cat: 'food',
    name: 'ساندویچ مرغ کریسپی',
    desc: 'مرغ سوخاری ترد با سس هانی موستارد و کلسلا',
    price: 145000,
    badge: '',
    img: 'https://maileloux.com/wp-content/uploads/2021/12/2021-12-15-23_49_21-Photos.png'
  },
  {
    id: 13,
    cat: 'food',
    name: 'پیتزا مارگاریتا',
    desc: 'سس گوجه خانگی، موزارلا تازه و ریحان',
    price: 195000,
    badge: 'new',
    img: 'https://chishi.ir/wp-content/uploads/2020/06/pitza-margarita.jpg'
  },
  {
    id: 14,
    cat: 'food',
    name: 'سیب‌زمینی سوخاری',
    desc: 'سیب‌زمینی ترد با نمک دریا و سس چیلی',
    price: 65000,
    badge: '',
    img: 'https://anbarpanir.com/wp-content/uploads/2025/07/%D8%B3%DB%8C%D8%A8-%D8%B2%D9%85%DB%8C%D9%86%DB%8C-%D8%B3%D9%88%D8%AE%D8%A7%D8%B1%DB%8C2.webp'
  },
  {
    id: 15,
    cat: 'food',
    name: 'هات‌داگ ویژه',
    desc: 'سوسیس گوشت گاو، خردل، کچاپ و پیاز کاراملی',
    price: 128000,
    badge: '',
    img: 'https://atawich.com/Content/images/765/news/crop/266088/%D9%87%D8%A7%D8%AA-%D8%AF%D8%A7%DA%AF.jpg'
  },
  {
    id: 16,
    cat: 'dessert',
    name: 'چیزکیک توت‌فرنگی',
    desc: 'بیسکوییت مکرون، کرم پنیر و سس توت‌فرنگی',
    price: 115000,
    badge: 'popular',
    img: 'https://tejaratfood.com/wp-content/uploads/2023/11/%D8%AA%D9%87%DB%8C%D9%87-%DA%86%DB%8C%D8%B2-%DA%A9%DB%8C%DA%A9-%D8%AA%D9%88%D8%AA-%D9%81%D8%B1%D9%86%DA%AF%DB%8C-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D9%81%D9%88%D8%AF-374x374.jpeg'
  },
  {
    id: 17,
    cat: 'dessert',
    name: 'تیرامیسو',
    desc: 'اسپرسو، لیدی فینگر، ماسکارپونه و پودر کاکائو',
    price: 125000,
    badge: '',
    img: 'https://chishi.ir/wp-content/uploads/2021/05/chiz-cake-tiramiso.jpg'
  },
  {
    id: 18,
    cat: 'dessert',
    name: 'مافین شکلات تلخ',
    desc: 'مافین خانگی با تکه‌های شکلات ۷۰٪',
    price: 72000,
    badge: 'new',
    img: 'https://siranggroup.com/Uploads/blog/d265ac867a0e42758567a7beea293101.jpg'
  },
  {
    id: 19,
    cat: 'dessert',
    name: 'پانا کوتا وانیل',
    desc: 'دسر ایتالیایی با سس شکلات تلخ',
    price: 98000,
    badge: '',
    img: 'https://images.food52.com/NJKEhLEsbpRF55aiOjRxoiUvPNw=/ce565c4c-e0e1-4c7f-bc94-0649b76c893c--images.jpeg'
  },
  {
    id: 20,
    cat: 'salad',
    name: 'سالاد سزار مرغ',
    desc: 'کاهو رومن، مرغ گریل، ترتیاق، پنیر پارمزان',
    price: 138000,
    badge: 'popular',
    img: 'https://kermany.com/wp-content/uploads/2020/11/cesar-salad-1.jpg'
  },
  {
    id: 21,
    cat: 'salad',
    name: 'سالاد فتا اسفناج',
    desc: 'اسفناج بیبی، پنیر فتا، گردو و زیتون',
    price: 118000,
    badge: '',
    img: 'https://kalleh.com/book/wp-content/uploads/sites/2/2025/06/%D8%B7%D8%B1%D8%B2-%D8%AA%D9%87%DB%8C%D9%87-%D8%B3%D8%A7%D9%84%D8%A7%D8%AF-%D8%A7%D8%B3%D9%81%D9%86%D8%A7%D8%AC-%D9%88-%D9%BE%D9%86%DB%8C%D8%B1-%D9%BE%D8%A7%D8%B1%D9%85%D8%B3%D8%A7%D9%86-1024x576.jpg'
  },
  {
    id: 22,
    cat: 'salad',
    name: 'سالاد آووکادو',
    desc: 'آووکادو، کینوا، گوجه گیلاسی و آبلیمو',
    price: 142000,
    badge: 'new',
    img: 'https://chishi.ir/wp-content/uploads/2021/10/salad-avekado.jpg'
  },
  {
    id: 23,
    cat: 'shake',
    name: 'شیک موز و عسل',
    desc: 'موز رسیده، عسل طبیعی، شیر و بستنی وانیل',
    price: 88000,
    badge: 'popular',
    img: 'https://parsiday.com/wp-content/uploads/2020/11/milk-shik-moz-480.jpg'
  },
  {
    id: 24,
    cat: 'shake',
    name: 'شیک توت‌فرنگی',
    desc: 'توت‌فرنگی تازه، بستنی خامه‌ای و شیر',
    price: 92000,
    badge: '',
    img: 'https://blog.okcs.com/wp-content/uploads/2023/06/Strawberry-Banana-Milkshake.jpg'
  },
  {
    id: 25,
    cat: 'shake',
    name: 'شیک شکلات اوره‌و',
    desc: 'شکلات، بیسکوییت اوره‌و، بستنی و شیر',
    price: 98000,
    badge: 'new',
    img: 'https://cafekojayi.ir/wp-content/uploads/2024/08/OIG4.jpg'
  }
];

const DB = (() => {

  function getAll() {
    const raw = localStorage.getItem(STORAGE_KEY_MENU);
    if (!raw) {
      save(DEFAULT_MENU);
      return DEFAULT_MENU;
    }
    return JSON.parse(raw);
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(items));
  }

  function getById(id) {
    return getAll().find(i => i.id === Number(id)) || null;
  }

  function add(data) {
    const items  = getAll();
    const newId  = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const newItem = {
      id:    newId,
      cat:   data.cat,
      name:  data.name,
      desc:  data.desc  || '',
      price: Number(data.price),
      badge: data.badge || '',
      img:   data.img   || ''
    };
    items.push(newItem);
    save(items);
    return newItem;
  }

  function update(id, data) {
    const items = getAll();
    const idx   = items.findIndex(i => i.id === Number(id));
    if (idx === -1) return null;
    ['name', 'cat', 'desc', 'badge', 'img'].forEach(k => {
      if (data[k] !== undefined) items[idx][k] = data[k];
    });
    if (data.price !== undefined) items[idx].price = Number(data.price);
    save(items);
    return items[idx];
  }

  function remove(id) {
    const items   = getAll();
    const idx     = items.findIndex(i => i.id === Number(id));
    if (idx === -1) return null;
    const deleted = items.splice(idx, 1)[0];
    save(items);
    return deleted;
  }

  function reset() {
    save(DEFAULT_MENU);
    return DEFAULT_MENU;
  }

  return { getAll, getById, add, update, remove, reset };

})();

const Orders = (() => {

  function getAll() {
    const raw = localStorage.getItem(STORAGE_KEY_ORDERS);
    return raw ? JSON.parse(raw) : [];
  }

  function save(orders) {
    localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(orders));
  }

  function addOrder(cartItems) {
    const orders = getAll();
    const now    = new Date().toISOString();
    const items  = Object.values(cartItems).map(it => ({
      id:    it.id,
      name:  it.name,
      cat:   it.cat,
      price: it.price,
      qty:   it.qty,
      total: it.price * it.qty
    }));
    const order = {
      orderId:    Date.now(),
      timestamp:  now,
      items:      items,
      grandTotal: items.reduce((s, i) => s + i.total, 0)
    };
    orders.push(order);
    save(orders);
    return order;
  }

  function clearAll() {
    save([]);
  }

  return { getAll, addOrder, clearAll };

})();