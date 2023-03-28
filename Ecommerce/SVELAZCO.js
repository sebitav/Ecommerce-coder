class ProductManager {
    constructor(products) {
      this.products = products || [];
      this.nextId = 1;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error('All fields are required');
        return;
      }
  
      if (this.products.find(p => p.code === product.code)) {
        console.error('Product code already exists');
        return;
      }
  
      product.id = this.nextId++;
      this.products.push(product);
      console.log('Product added successfully');
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.error('Product not found');
        return;
      }
      return product;
    }
  }
  
  const products = [
    {
      title: 'Camiseta estampada',
      description: 'Camiseta de algodón con estampado abstracto en tonos azules.',
      price: 25.99,
      thumbnail: 'https://example.com/camiseta-estampada.jpg',
      code: 'CT1001',
      stock: 50
    },
    {
      title: 'Pantalón chino',
      description: 'Pantalón de algodón en color beige con corte recto.',
      price: 39.99,
      thumbnail: 'https://example.com/pantalon-chino.jpg',
      code: 'PN2001',
      stock: 30
    },
    {
      title: 'Jersey de lana',
      description: 'Jersey de lana con cuello redondo en tono gris claro.',
      price: 49.99,
      thumbnail: 'https://example.com/jersey-lana.jpg',
      code: 'JR3001',
      stock: 20
    },
    {
      title: 'Chaqueta de cuero',
      description: 'Chaqueta de cuero sintético en color negro con cierre de cremallera.',
      price: 79.99,
      thumbnail: 'https://example.com/chaqueta-cuero.jpg',
      code: 'CJ4001',
      stock: 10
    }
  ];
  
  const productManager = new ProductManager(products);
  
  console.log(productManager.getProducts());
  
  const newProduct = {
    title: 'Polo de rayas',
    description: 'Polo de algodón en tonos rojos y blancos con cuello en V.',
    price: 19.99,
    thumbnail: 'https://example.com/polo-rayas.jpg',
    code: 'PL5001',
    stock: 15
  };
  
  productManager.addProduct(newProduct);
  
  console.log(productManager.getProducts());
  