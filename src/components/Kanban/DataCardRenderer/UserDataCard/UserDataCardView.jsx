import React, { useState } from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import DataCardFooterView from "../DataCardFooter/DataCardFooterView.jsx";
import { EnvelopeAt, FileX, TelephoneOutbound } from "react-bootstrap-icons";
import UserDataToastView from "../UserDataToast/UserDataToastView.jsx";
import classNames from "classnames";
import './UserDataCardStyles.css';

const UserDataCardView = React.memo(({
    id,
    name,
    username,
    email,
    phone,
    company,
    hasPosts,
    posts,
    toggleDataCard,
    listType,
    countVisibleItems,
    isListVisible,
    buttonsVisibleForId
                                     }) => {
    // отдельно состояния иконки EnvelopeAt
    const [isSuccessButtonEnvelopeAt, setIsSuccessButtonEnvelopeAt] = useState(false);
    const [isHighlightedButtonEnvelopeAt, setIsHighlightedButtonEnvelopeAt] = useState(true);
    // И отдельно состояния иконки TelephoneOutbound
    const [isSuccessButtonTelephoneOutbound, setIsSuccessButtonTelephoneOutbound] = useState(false);
    const [isHighlightedButtonTelephoneOutbound, setIsHighlightedButtonTelephoneOutbound] = useState(true);
    // условия для добавления классов к контейнеру с количеством постов
    const hasManyPosts = posts.length > 10;
    const hasSomePosts = posts.length > 0 && posts.length <= 10;
    const noPosts = posts.length === 0;

    return (
        <div className="UserDataList" key={id}>
            <div
                className="card text-center UserCard"
                onClick={toggleDataCard}
            >
                <DataCardHeaderView
                    currentItemVisibleId={buttonsVisibleForId}
                    visibleCount={countVisibleItems}
                />
                <div className="card-body UserCard-Body">
                    <h5 className="card-title UserCard-Title">{ name }</h5>
                    <h6 className="card-subtitle UserCard-Subtitle">{ username }</h6>
                    <p className="card-text UserCard-Text">{company.name}</p>
                    <div className={
                        classNames('alert', {
                            'alert-success': hasManyPosts,
                            'alert-info': hasSomePosts,
                            'alert-danger': noPosts
                        })}>
                        {posts.length} записей</div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <button
                                    type="button"
                                    className={classNames('btn', {
                                            'btn-outline-success': isSuccessButtonEnvelopeAt,
                                            'btn-outline-light': isHighlightedButtonEnvelopeAt,
                                    })}
                                    onClick={() => {
                                        setIsSuccessButtonEnvelopeAt(!isSuccessButtonEnvelopeAt);
                                        setIsHighlightedButtonEnvelopeAt(false);
                                    }}
                                >
                                    <EnvelopeAt />
                                </button>
                                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 111 }}>
                                    <UserDataToastView
                                        icon={<FileX />}
                                        text={email}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <button
                                    type="button"
                                    className={classNames('btn', {
                                      'btn-outline-success': isSuccessButtonTelephoneOutbound,
                                      'btn-outline-light': isHighlightedButtonTelephoneOutbound
                                    })}
                                    onClick={() => {
                                        setIsSuccessButtonTelephoneOutbound(!isSuccessButtonTelephoneOutbound);
                                        setIsHighlightedButtonTelephoneOutbound(false);
                                    }}
                                >
                                    <TelephoneOutbound />
                                </button>
                                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 111 }}>
                                    <UserDataToastView
                                        icon={<FileX />}
                                        text={phone}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DataCardFooterView
                    hasEntries={hasPosts}
                    entries={posts}
                    renderedTypeList={listType}
                    isListVisible={isListVisible}
                />
            </div>
        </div>
    );
});

export default UserDataCardView;