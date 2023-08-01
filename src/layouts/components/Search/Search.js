import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/Accounts';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as SearchService from '~/services/SearchService';

const cx = classNames.bind(styles);

function Search() {
    const [_search, _setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [_isShow, _setIsShow] = useState(false);
    const [_loading, _setLoading] = useState(false);

    const _debounce = useDebounce(_search, 500);
    const handleShow = () => {
        _setIsShow(false);
    };
    const searchRef = useRef();

    const handleClear = () => {
        _setSearch('');
        setSearchResults([]);
        searchRef.current.focus();
    };

    useEffect(() => {
        if (!_debounce.trim()) {
            setSearchResults([]);
            return;
        }
        _setLoading(true);

        const fetchApi = async () => {
            const result = await SearchService.search(_debounce);

            setSearchResults(result);
            _setLoading(false);
        };
        fetchApi();
    }, [_debounce]);

    const handleInput = (e) => {
        const _searchValue = e.target.value;
        if (!_searchValue.startsWith(' ')) {
            _setSearch(_searchValue);
        }
    };
    return (
        <div>
            <Tippy
                interactive
                appendTo={() => document.body}
                visible={_isShow && searchResults.length > 0}
                delay={[0, 200]}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResults.map((item) => (
                                <AccountItems key={item.id} data={item} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleShow}
            >
                <div className={cx('search')}>
                    <input
                        ref={searchRef}
                        placeholder="Tim Kiem"
                        value={_search}
                        spellCheck={false}
                        onChange={handleInput}
                        onFocus={() => _setIsShow(true)}
                    />
                    {!!_search && !_loading && (
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
                        </button>
                    )}
                    {_loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    {/* load*/}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
