import { Link } from "react-router-dom";

const links = [
    {id: 1, nameItem: "home", path: "/framermotionpractice/"},
    {id: 2, nameItem: "contact", path: "contact"},
]

const Navigation = () => {
  return (
    <nav>
        <ul className="flex">
            {
                links.map((item) => {
                    return(
                        <li key={item.id}>
                            <Link to={item.path}>{item.nameItem}</Link>
                        </li>
                    );
                })
            }
        </ul>
    </nav>
  )
}

export default Navigation