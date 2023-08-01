import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Suggest.module.scss';
const cx = classNames.bind(styles);
function SuggestList({ children }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Suggest Accounts</h3>
            {children}
        </div>
    );
}
SuggestList.propTypes = {
    children: PropTypes.node.isRequired,
};
export default SuggestList;
