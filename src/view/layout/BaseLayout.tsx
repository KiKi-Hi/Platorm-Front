import {Outlet} from "react-router-dom";

const BaseLayout = () => {
    return(
        <div className="layout">
            <Outlet />
        </div>
    )
}

export default BaseLayout