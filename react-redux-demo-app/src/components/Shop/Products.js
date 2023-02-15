import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'The first book'
  },
  {
    id: 'p2',
    price: 7,
    title: 'My second book',
    description: 'The second book'
  },
  {
    id: 'p3',
    price: 8,
    title: 'My third book',
    description: 'The third book'
  },
  {
    id: 'p4',
    price: 9,
    title: 'My forth book',
    description: 'The forth book'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(item => {
          return <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        })}

      </ul>
    </section>
  );
};

export default Products;
