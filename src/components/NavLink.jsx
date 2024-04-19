import { FiChevronDown } from 'react-icons/fi';
const NavLink = ({ item }) => {
  const renderedDropdown = (item) => {
    if (item.submenu) {
      return (
        <a href={item.path} className="flex justify-start items-center gap-1">
          {item.title}
          <FiChevronDown size={20}/>
        </a>
      );
    } 
      return (
        <a href={item.href} className="flex justify-start items-center">
          {item.title}
        </a>
      );
    
  };
  return (
    <li className="flex flex-col group bg-black h-full justify-center">
      {/* <a href={item.path} className="flex justify-start items-center">
        {item.title}
        <BiChevronDown />
        {renderedDropdown(item)}
      </a> */}
      {renderedDropdown(item)}
      {item.submenu && (
        <ul className="group-hover:block hidden absolute list-none text-state top-[95px] bg-black translate-x-[-25px]">
          {item.submenu.map((dropdownItem, index) => (
            <li
              key={index}
              className="cursor-pointer text-white hover:bg-green-500/80"
            >
              <a
                href={dropdownItem.path}
                className="w-full block text-nowrap px-6 py-4"
              >
                {dropdownItem.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
