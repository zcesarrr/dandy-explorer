import ICONS from "../../constants/icons";

export default function TabSpinner() {
    return (
        <div className="flex justify-center items-center">
            <ICONS.loader.node color="white" className="animate-spin w-8 h-8" />
        </div>
    );
}
