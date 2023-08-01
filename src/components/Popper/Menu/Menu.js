import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFun = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFun, ...passProps }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const handleonBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const handleonHide = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const renderData = () => {
        return current.data.map((item, index) => {
            const isParrent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onclick={() => {
                        console.log();
                        if (isParrent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item.type);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            {...passProps}
            interactive
            delay={[0, 70]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleonBack} />}

                        <div className={cx('menu-body')}>{renderData()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleonHide}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
