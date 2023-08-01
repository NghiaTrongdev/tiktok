import classNames from 'classnames/bind';
import styes from './Accounts.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styes);

function AccountItems({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <span className={cx('cirle-avata')}>
                <Image className={cx('avata')} src={data.avatar} alt={data.full_name} />
            </span>

            <div className={cx('infor')}>
                <h4 className={cx('username')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('name')}>{data.nickname}</p>
            </div>
        </Link>
    );
}
AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItems;
