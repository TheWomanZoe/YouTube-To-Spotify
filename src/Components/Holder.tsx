import Description from "./Description.tsx";
import MainFunction from "./MainFunction.tsx";
import './Holder.css';

function Holder() {
    return (
        <div id = "holder">
            <Description />
            <MainFunction />
        </div>
    )
}

export default Holder;