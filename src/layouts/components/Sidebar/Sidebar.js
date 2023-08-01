import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import configs from '~/config';
import { HomeIcon, UserGroupIcon, LiveIcon, ExploreIcon } from '~/components/Icons';
import Menu from './Menu';
import { MenuItem } from './Menu';
import SuggestList from './SuggestAccounts/SuggestList';
import { SuggestItem } from './SuggestAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={configs.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Folowing" to={configs.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Explore" to={configs.routes.explore} icon={<ExploreIcon />} />
                <MenuItem title="Live" to={configs.routes.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestList>
                <SuggestItem />
                <SuggestItem />

                <SuggestItem />
            </SuggestList>
        </div>
    );
}

export default Sidebar;
