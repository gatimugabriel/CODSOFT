import {ColorRing} from "react-loader-spinner";

export default function Loader() {
    return (
        <div>
            <ColorRing
            visible={true}
            height={100}
            width={100}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#0085ff", "#0085ff", "#0085ff", "#0085ff", "#0085ff"]}
            />
        </div>
    );
}
