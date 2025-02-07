import CopyrightSymbol from "./Copyright";

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <img src="/images/faceboook-icon.svg" alt="icon"></img>
                <img src="/images/insta-icon.svg" alt="icon"></img>
                <img src="/images/x-icon.svg" alt="icon"></img>
                <img src="/images/pinterest.svg" alt="icon"></img>
                <img src="/images/tiktok.svg" alt="icon"></img>
                <img src="/images/whatsapp.svg" alt="icon"></img>
                <img src="/images/youtube.svg" alt="icon"></img>
            </div>
            <div>&copy</div>
            <div>{CopyrightSymbol}start</div>
        </div>
    );
}

export default Footer;