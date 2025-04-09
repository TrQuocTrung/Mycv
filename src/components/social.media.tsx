import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
interface Iprops {
    youtube: string,
    tiktok: string,
    facebook: string
}
const SocialMedia = (props: Iprops) => {
    const { youtube, tiktok, facebook } = props;
    return (
        <div className="my-4 d-flex  item-center gap-3">
            <a href={youtube} className="highlight" title="HomePage Youtube">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} className="highlight" title="HomePage Youtube">
                <FaTiktok size={30} />
            </a>
            <a href={facebook} className="highlight" title="FaceBook Youtube">
                <FaFacebook size={30} />
            </a>
        </div>

    );
}
export default SocialMedia;