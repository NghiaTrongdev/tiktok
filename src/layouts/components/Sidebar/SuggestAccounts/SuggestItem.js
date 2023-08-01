import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Suggest.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function SuggestItem() {
    return (
        <div className={cx('item')}>
            <div className={cx('item-img')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/623f30ba13901cc87fcf1eb57a8eba69~c5_100x100.jpeg?x-expires=1688659200&x-signature=72tCIgeTm2MvKWdoXyjWxq9M%2FxQ%3D"
                    alt="img"
                />
            </div>
            <div className={cx('item-infor')}>
                <h4 className={cx('item-nickname')}>
                    <strong> Nguyen Van A</strong>
                    <span className={cx('item-icon')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('item-username')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

export default SuggestItem;
