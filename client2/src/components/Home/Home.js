//import'./home.scss';
import'./homeOld.scss';

import { Items } from '../../utils/Items/Items'

export const Home = ({
    // icon = FontAwesomeIcon,
    items = Items
}) => {
  const categories = items.map((item) => (
    <li className="list-group-item" key={item.categoryName}>
      <i className="material-icons">{item.icon}</i>
      <span className='item-name'>{ item.name }</span>  
    </li>
  ));

  return (
    <div className="home">
      <ul className="list-group list-categories">{categories}</ul>
    </div>
  );
};
