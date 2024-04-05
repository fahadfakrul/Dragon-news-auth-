import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center mt- lg:mt-11'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg font-medium text-[#706F6F] mt-5'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium mt-2'>{moment().format(" dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;