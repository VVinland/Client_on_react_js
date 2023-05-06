import gihHubIcon from './../../img/icons/gitHub-black.svg';
import './btnGitHub.css';

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gihHubIcon} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;