import LeftSidebar from "./leftSidebar";
import Navbar from "./navbar";

const HomeContainer = (props: any) => {
    return (
    <div className="flex flex-col">
        <Navbar/>
        <div>{props.children}</div>
    </div>
    )
}

export default HomeContainer;