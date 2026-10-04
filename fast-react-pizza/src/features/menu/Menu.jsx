import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  //here useLoaderData is automatically call the loader function and get the data
  const menu = useLoaderData();
  //console.log(menu);
  return (
    <ul className="mt-2 divide-y divide-stone-200 px-4">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
