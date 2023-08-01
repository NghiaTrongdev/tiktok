import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
    // faCloudUploadAlt,
    // faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import configs from '~/config';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Search from '../Search';

///
const MENU_ITEMS = [
    {
        title: 'Languages',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        type: 'feedback',
        title: 'Feedback and helps',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
    },
    {
        type: 'keyboard',
        title: 'Keyboards shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

const handleOnchange = (data) => {
    console.log(data);
};
const userMenu = [
    {
        type: 'user',
        title: 'View Profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '@/hoaa',
    },
    {
        type: 'get coins',
        title: 'Get coins',
        icon: <FontAwesomeIcon icon={faCoins} />,
        to: '/coins',
    },
    {
        type: 'setting',
        title: 'Setting',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        type: 'Log out',
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        to: '/log out',
        separate: true,
    },
];
const cx = classNames.bind(styles);
function Header() {
    const isSigIn = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={configs.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                <Search></Search>

                <div className={cx('action')}>
                    {isSigIn ? (
                        <>
                            <Tippy delay={(0, 200)} content="upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={isSigIn ? userMenu : MENU_ITEMS} onChange={handleOnchange}>
                        {isSigIn ? (
                            <div className={cx('action-avata')}>
                                <Image
                                    alt="Nguyen Van A"
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_300x300.webp?x-expires=1688101200&x-signature=URfLdnRQGqSitIXbyFHFl9ZSBcg%3D"
                                    // fallback="https://fullstack.edu.vn/assets/images/f8_avatar.png"
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
