import React from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import DataCardFooterView from "../DataCardFooter/DataCardFooterView.jsx";
import { EnvelopeAt, FileX, TelephoneOutbound } from "react-bootstrap-icons";
import UserDataToastView from "../UserDataToast/UserDataToastView.jsx";
import './UserDataCardStyles.css';


const UserDataCardView = React.memo(({ renderedTypeList, data, currentItemVisibleId, visibleCount }) => {
    const { id, name, username, email, phone, company, hasPosts, posts } = data;

    return (
        <div className="UserDataList" key={id}>
            <div className="card text-center UserCard">
                <DataCardHeaderView
                    currentItemVisibleId={currentItemVisibleId}
                    visibleCount={visibleCount}
                />
                <div className="card-body UserCard-Body">
                    <h5 className="card-title UserCard-Title">{ name }</h5>
                    <h6 className="card-subtitle UserCard-Subtitle">{ username }</h6>
                    <p className="card-text UserCard-Text">{company.name}</p>
                    <div className="alert alert-secondary">{posts.length} записей</div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <button
                                    type="button"
                                    className="btn btn-primary"
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
                                    className="btn btn-primary"
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
                    renderedTypeList={renderedTypeList}
                />
            </div>
        </div>
    );
});

export default UserDataCardView;