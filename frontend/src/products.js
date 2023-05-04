const products = [
  {
    _id: '1',
    name: 'Raspberry Pi 4',
    image: '/images/pi4.jpg',
    description:
      'The Raspberry Pi 4 Model B is a powerful and versatile single-board computer that can be used for various projects. It features a 1.5GHz quad-core 64-bit ARM Cortex-A72 CPU, up to 8GB of RAM, and multiple USB and HDMI ports. It can run various operating systems including Linux and Windows 10 IoT Core.',
    brand: 'Raspberry Pi Foundation',
    category: 'Electronics',
    price: 59.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 100,
  },
  {
    _id: '2',
    name: 'Hak5 Rubber Ducky',
    image: '/images/hackingUsb.jpg',
    description:
      'The Hak5 Rubber Ducky is a USB keystroke injection tool that can be used for various purposes including penetration testing and social engineering. It can emulate a keyboard and execute pre-programmed keystrokes on a target computer. It can also be used to steal passwords and other sensitive information.',
    brand: 'Hak5',
    category: 'Hardware',
    price: 44.99,
    countInStock: 7,
    rating: 4.9,
    numReviews: 80,
  },
  {
    _id: '3',
    name: 'Alfa AWUS036NH',
    image: '/images/alpha.jpg',
    description:
      'The Alfa AWUS036NH is a powerful and versatile wireless USB adapter that can be used for various purposes including penetration testing and wireless network monitoring. It features a high-gain 5dBi antenna and supports 802.11n wireless standard with up to 150Mbps data transfer rate.',
    brand: 'Alfa Network',
    category: 'Hardware',
    price: 29.99,
    countInStock: 5,
    rating: 4.7,
    numReviews: 120,
  },
  {
    _id: '4',
    name: 'HackerBox Kits',
    image: '/images/boxSet.jpg',
    description:
      'HackerBox Kits are monthly subscription boxes that contain various electronic components and tools for hacking and experimenting with electronics. Each kit has a different theme and includes detailed instructions and sample projects. It is a great way to learn and explore new technologies.',
    brand: 'HackerBoxes',
    category: 'Subscription',
    price: 44.95,
    countInStock: 11,
    rating: 4.9,
    numReviews: 120,
  },
  {
    _id: '5',
    name: 'USB Killer',
    image: '/images/usbTool.jpg',
    description:
      'The USB Killer v3 is a USB device that can be used to test the surge protection of various electronic devices including computers, smartphones, and tablets. It can deliver a high voltage pulse that can damage the device if it does not have proper surge protection. It can be used for various purposes including penetration testing and hardware testing.',
    brand: 'USBKill.com',
    category: 'Hardware',
    price: 49.95,
    countInStock: 7,
    rating: 4.5,
    numReviews: 100,
  },
  {
    _id: '6',
    name: 'Kali Linux Revealed',
    image: '/images/kali.jpg',
    description:
      'Kali Linux Revealed is a comprehensive guide to Kali Linux, an advanced penetration testing and security auditing platform. It covers various topics including information gathering, vulnerability assessment, exploitation, post exploitation, and wireless attacks. It also includes step-by-step tutorials and real-world examples.',
    brand: 'Offensive Security',
    category: 'Books',
    price: 39.95,
    countInStock: 8,
    rating: 4.7,
    numReviews: 90,
  }
]

export default products