import React, { useState, useEffect } from 'react';
import AdvancedDataCardFooterView from "./AdvancedDataCardFooterView.jsx";
import { EnvelopeAt, FileX, TelephoneOutbound } from "react-bootstrap-icons";
import './AdvancedDataCardList.css';
import './DataCardStyles.css';
import AdvancedDataCardHeaderView from "./AdvancedDataCardHeaderView.jsx";

const AdvancedDataCardListView = React.memo(({ renderedTypeList, rest, visibleCount, currentItemVisibleId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Симуляция загрузки данных для отображения loader
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));

            // Устанавливаем data
            setData(rest[0]);
        };

        fetchData();
    }, [rest]);

    const renderCommentDataList = () => {
        const { id, name, email, body } = data;

        return (
            <div className="col CardList" key={id}>
                <div className="card Card Card_Single">
                    <AdvancedDataCardHeaderView
                        currentItemVisibleId={currentItemVisibleId}
                        visibleCount={visibleCount}
                    />
                    <div className="card-body Card-Body">
                        <h5 className="card-title Card-Title">{name}</h5>
                        <h6 className="card-subtitle Card-Subtitle">{email}</h6>
                        <p className="card-text Card-Text">{body}</p>
                    </div>
                </div>
            </div>
        );
    };

    const renderTodoDataList = () => {
        const { id, name, address, hasTodosList, todosList } = data;

        return (
            <div className="col CardList" key={id}>
                <div className="card text-center Card Card_Single">
                    <AdvancedDataCardHeaderView
                        currentItemVisibleId={currentItemVisibleId}
                        visibleCount={visibleCount}
                    />
                    <div className="card-body Card-Body">
                        <h5 className="card-title Card-Title">{name}</h5>
                        <h6 className="card-subtitle Card-Subtitle">{address?.city}</h6>
                    </div>
                    <AdvancedDataCardFooterView
                        hasEntries={hasTodosList}
                        entries={todosList}
                        renderedTypeList={renderedTypeList}
                    />
                </div>
            </div>
        );
    };

    const renderPostDataList = () => {
      const { id, title, body, hasComments, comments: postComments } = data;

      return (
          <div className="col CardList" key={id}>
              <div className="card text-center Card Card_Single">
                  <AdvancedDataCardHeaderView
                      currentItemVisibleId={currentItemVisibleId}
                      visibleCount={visibleCount}
                  />
                  <div className="card-body Card-Body">
                      <h5 className="card-title Card-Title">{title}</h5>
                      <p className="card-text Card-Text">{body}</p>
                  </div>
                  <AdvancedDataCardFooterView
                      hasEntries={hasComments}
                      entries={postComments}
                      renderedTypeList={renderedTypeList}
                  />
              </div>
          </div>
      );
    };

    const renderUserDataList = () => {
        const { id, name, address, email, hasPosts, posts, phone } = data;

        return (
            <div className="CardList" key={id}>
                <div className="card text-center Card Card_Single">
                    <AdvancedDataCardHeaderView
                        currentItemVisibleId={currentItemVisibleId}
                        visibleCount={visibleCount}
                    />
                    <div className="card-body Card-Body">
                        <h5 className="card-title Card-Title">{name}</h5> {/* Используем name из деструктурированного user */}
                        <h6 className="card-subtitle Card-Subtitle">{address?.city}</h6> {/* Используем address из деструктурированного user */}
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <button type="button" className="btn btn-primary">
                                    <EnvelopeAt />
                                </button>
                                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 111 }}>
                                    <div className="toast hide show">
                                        <div className="toast-header">
                                            <button type="button" className="btn-close">
                                                <FileX />
                                            </button>
                                        </div>
                                        <div className="toast-body">{email}</div> {/* Используем email из деструктурированного user */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <button type="button" className="btn btn-primary">
                                    <TelephoneOutbound />
                                </button>
                                <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 111 }}>
                                    <div className="toast hide show">
                                        <div className="toast-header">
                                            <button type="button" className="btn-close">
                                                <FileX />
                                            </button>
                                        </div>
                                        <div className="toast-body">{phone}</div> {/* Используем phone из деструктурированного user */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AdvancedDataCardFooterView
                        hasEntries={hasPosts}
                        entries={posts}
                        renderedTypeList={renderedTypeList}
                    />
                </div>
            </div>
        );
    };

    const chooseRenderDataList = () => {
        switch (renderedTypeList) {
            case 'comment':
                return renderCommentDataList();
            case 'todo':
                return renderTodoDataList();
            case 'post':
                return renderPostDataList();
            case 'user':
                return renderUserDataList();
        }
    }


    return (
        <>
            {chooseRenderDataList()}
        </>
    );
});

export default AdvancedDataCardListView;