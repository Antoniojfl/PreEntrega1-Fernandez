const listProductMock = [
  {
    id: "1",
    category: "electronic",
    name: "Smartphone Samsung Galaxy S21",
    price: 800,
    stock: 50,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Samsung Galaxy S21 is the latest addition to Samsung's flagship smartphone lineup. It features a stunning 6.2-inch AMOLED display, a powerful Snapdragon 888 processor, and an impressive camera system.",
    shortDescription: "Samsung Galaxy S21",
  },
  {
    id: "2",
    category: "electronic",
    name: "Apple AirPods Pro",
    price: 249,
    stock: 100,
    photo: "https://picsum.photos/200",
    longDescription:
      "The AirPods Pro are Apple's top-of-the-line wireless earbuds. They feature active noise cancellation, a comfortable in-ear design, and support for hands-free Siri commands.",
    shortDescription: "Apple AirPods Pro",
  },
  {
    id: "3",
    category: "electronic",
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 349,
    stock: 75,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Sony WH-1000XM4 are some of the best wireless headphones on the market. They feature excellent noise cancelling, long battery life, and a comfortable over-ear design.",
    shortDescription: "Sony WH-1000XM4 Headphones",
  },
  {
    id: "4",
    category: "electronic",
    name: "DJI Mavic Air 2 Drone",
    price: 799,
    stock: 25,
    photo: "https://picsum.photos/200",
    longDescription:
      "The DJI Mavic Air 2 is a powerful drone that features 4K video recording, a 48MP camera, and up to 34 minutes of flight time.",
    shortDescription: "DJI Mavic Air 2 Drone",
  },
  {
    id: "5",
    category: "electronic",
    name: "Samsung QLED Q80A 4K Smart TV",
    price: 1299,
    stock: 10,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Samsung QLED Q80A is a top-of-the-line smart TV with a stunning 4K display, support for HDR content, and built-in voice control.",
    shortDescription: "Samsung QLED Q80A Smart TV",
  },
  {
    id: "6",
    category: "electronic",
    name: "Nikon Z7 II Mirrorless Camera",
    price: 2999,
    stock: 5,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Nikon Z7 II is a professional-grade mirrorless camera with a full-frame sensor, 4K video recording, and built-in Wi-Fi and Bluetooth connectivity.",
    shortDescription: "Nikon Z7 II Camera",
  },
  {
    id: "7",
    category: "electronic",
    name: "Apple iPad Pro",
    price: 799,
    stock: 20,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Apple iPad Pro is a powerful tablet with a stunning 11-inch display, support for the Apple Pencil, and the ability to run professional-grade apps.",
    shortDescription: "Apple iPad Pro",
  },
  {
    id: "8",
    category: "electronic",
    name: "Razer Blade 15 Gaming Laptop",
    price: 1599,
    stock: 15,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Razer Blade 15 is a high-end gaming laptop with a powerful NVIDIA GeForce RTX graphics card, a 144Hz display, and a slim, sleek design.",
    shortDescription: "Razer Blade 15 Gaming Laptop",
  },
  {
    id: "9",
    category: "electronic",
    name: "Bose SoundLink Revolve+ Bluetooth Speaker",
    price: 299,
    stock: 30,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Bose SoundLink Revolve+ is a powerful Bluetooth speaker with 360-degree sound and up to 16 hours of battery life.",
    shortDescription: "Bose SoundLink Revolve+ Speaker",
  },
  {
    id: "10",
    category: "electronic",
    name: "Samsung Galaxy Tab S7",
    price: 649,
    stock: 20,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Samsung Galaxy Tab S7 is a high-end Android tablet with a stunning 11-inch display, support for the S Pen, and a powerful Snapdragon 865+ processor.",
    shortDescription: "Samsung Galaxy Tab S7",
  },
  {
    id: "11",
    category: "computer",
    name: "Apple MacBook Pro 16-inch",
    price: 2399,
    stock: 10,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Apple MacBook Pro 16-inch is a top-of-the-line laptop with a stunning Retina display, a powerful Intel Core i9 processor, and up to 64GB of RAM.",
    shortDescription: "Apple MacBook Pro 16-inch",
  },
  {
    id: "12",
    category: "computer",
    name: "Dell XPS 13 Laptop",
    price: 1199,
    stock: 20,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Dell XPS 13 is a sleek, powerful laptop with a stunning InfinityEdge display, a powerful Intel Core i7 processor, and up to 16GB of RAM.",
    shortDescription: "Dell XPS 13 Laptop",
  },
  {
    id: "13",
    category: "computer",
    name: "Microsoft Surface Book 3",
    price: 1699,
    stock: 15,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Microsoft Surface Book 3 is a high-end 2-in-1 laptop with a detachable display, a powerful Intel Core i7 processor, and up to 32GB of RAM.",
    shortDescription: "Microsoft Surface Book 3",
  },
  {
    id: "14",
    category: "computer",
    name: "HP Spectre x360",
    price: 1399,
    stock: 10,
    photo: "https://picsum.photos/200",
    longDescription:
      "The HP Spectre x360 is a premium 2-in-1 laptop with a stunning OLED display, a powerful Intel Core i7 processor, and up to 16GB of RAM.",
    shortDescription: "HP Spectre x360 Laptop",
  },
  {
    id: "15",
    category: "computer",
    name: "Lenov,o ThinkPad X1 Carbon",
    price: 1499,
    stock: 5,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Lenovo ThinkPad X1 Carbon is a powerful business laptop with a durable design, a stunning display, and up to 16GB of RAM.",
    shortDescription: "Lenovo ThinkPad X1 Carbon",
  },
  {
    id: "16",
    category: "home-deco",
    name: "Nest Learning Thermostat",
    price: 249,
    stock: 25,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Nest Learning Thermostat is a smart thermostat that learns your schedule and automatically adjusts the temperature to save energy.",
    shortDescription: "Nest Learning Thermostat",
  },
  {
    id: "17",
    category: "home-deco",
    name: "iRobot Roomba i7+ Robot Vacuum",
    price: 799,
    stock: 10,
    photo: "https://picsum.photos/200",
    longDescription:
      "The iRobot Roomba i7+ is a high-end robot vacuum with advanced navigation technology, automatic dirt disposal, and Alexa and Google Assistant compatibility.",
    shortDescription: "iRobot Roomba i7+ Robot Vacuum",
  },
  {
    id: "18",
    category: "home-deco",
    name: "Philips Hue Starter Kit",
    price: 199,
    stock: 15,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Philips Hue Starter Kit includes smart LED bulbs and a bridge that allows you to control your lights with your voice or smartphone.",
    shortDescription: "Philips Hue Starter Kit",
  },
  {
    id: "19",
    category: "home-deco",
    name: "Nespresso Vertuo Coffee and Espresso Maker",
    price: 199,
    stock: 20,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Nespresso Vertuo Coffee and Espresso Maker allows you to make delicious coffee and espresso with just the touch of a button.",
    shortDescription: "Nespresso Vertuo Coffee and Espresso Maker",
  },
  {
    id: "20",
    category: "home-deco",
    name: "Dyson V11 Animal Cordless Vacuum",
    price: 599,
    stock: 10,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Dyson V11 Animal Cordless Vacuum is a high-end vacuum cleaner with powerful suction, a long battery life, and advanced filtration technology.",
    shortDescription: "Dyson V11 Animal Cordless Vacuum",
  },
  {
    id: "21",
    category: "electronic",
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 349,
    stock: 30,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Sony WH-1000XM4 Wireless Headphones are top-of-the-line noise-cancelling headphones with up to 30 hours of battery life and support for high-resolution audio.",
    shortDescription: "Sony WH-1000XM4 Wireless Headphones",
  },
  {
    id: "22",
    category: "electronic",
    name: "Apple AirPods Pro",
    price: 249,
    stock: 40,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Apple AirPods Pro are high-end true wireless earbuds with active noise cancellation, a comfortable fit, and up to 24 hours of battery life.",
    shortDescription: "Apple AirPods Pro",
  },
  {
    id: "23",
    category: "electronic",
    name: "Samsung Galaxy S21 Ultra 5G",
    price: 1199,
    stock: 20,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Samsung Galaxy S21 Ultra 5G is a top-of-the-line smartphone with a stunning 6.8-inch display, 5G connectivity, and a powerful Exynos 2100 processor.",
    shortDescription: "Samsung Galaxy S21 Ultra 5G",
  },
  {
    id: "24",
    category: "electronic",
    name: "LG CX 65-inch OLED TV",
    price: 1999,
    stock: 5,
    photo: "https://picsum.photos/200",
    longDescription:
      "The LG CX 65-inch OLED TV is a premium television with stunning picture quality, support for Dolby Vision and Atmos, and smart features like built-in Google Assistant and Amazon Alexa.",
    shortDescription: "LG CX 65-inch OLED TV",
  },
  {
    id: "25",
    category: "electronic",
    name: "Xbox Series X",
    price: 499,
    stock: 15,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Xbox Series X is a next-generation gaming console with powerful hardware, support for 4K gaming, and a growing library of exclusive games.",
    shortDescription: "Xbox Series X",
  },
  {
    id: "26",
    category: "electronic",
    name: "Logitech MX Master 3 Mouse",
    price: 99,
    stock: 30,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Logitech MX Master 3 Mouse is a high-end wireless mouse with advanced features like gesture control, custom profiles, and support for multiple devices.",
    shortDescription: "Logitech MX Master 3 Mouse",
  },
  {
    id: "27",
    category: "computer",
    name: "Apple MacBook Pro 16-inch",
    price: 2399,
    stock: 10,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Apple MacBook Pro 16-inch is a powerful laptop with a stunning Retina display, a powerful 9th-generation Intel Core processor, and up to 64GB of RAM.",
    shortDescription: "Apple MacBook Pro 16-inch",
  },
  {
    id: "28",
    category: "computer",
    name: "Dell XPS 13",
    price: 1299,
    stock: 20,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Dell XPS 13 is a premium laptop with a slim, lightweight design, a stunning 4K display, and a powerful 11th-generation Intel Core processor.",
    shortDescription: "Dell XPS 13",
  },
  {
    id: "29",
    category: "computer",
    name: "Asus ROG Strix G15",
    price: 1299,
    stock: 15,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Asus ROG Strix G15 is a high-end gaming laptop with a powerful Nvidia GeForce RTX 3070 GPU, a fast 240Hz display, and a sleek design.",
    shortDescription: "Asus ROG Strix G15",
  },
  {
    id: "30",
    category: "computer",
    name: "Microsoft Surface Laptop 4",
    price: 1299,
    stock: 25,
    photo: "https://picsum.photos/200",
    longDescription:
      "The Microsoft Surface Laptop 4 is a versatile laptop with a slim design, a stunning touchscreen display, and a powerful 11th-generation Intel Core processor.",
    shortDescription: "Microsoft Surface Laptop 4",
  },
];

export default listProductMock;