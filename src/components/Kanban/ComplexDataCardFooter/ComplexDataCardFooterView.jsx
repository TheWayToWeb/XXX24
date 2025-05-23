import React from 'react';
import './ComplexDataCardFooterStyles.css';
import '../GeneralDataCardStyles.css';

const ComplexDataCardFooterView = React.memo(({ hasEntries, entries, renderedTypeList }) => {
    const renderItems = () => {
      switch (renderedTypeList) {
          case 'todo':
              return (
                <>
                    {entries?.map((entry) => (
                        <div className="card text-center Card" key={entry.id}>
                            <div className="card-body Card-Body">
                                <h5 className="card-title Card-Title">{entry.title}</h5>
                                <p className={`card-text Card-Text Card-Text_Visual ${entry.completed ? 'bg-success' : 'bg-warning'}`}>{entry.completed ? "Success" : "Warning"}</p>
                            </div>
                        </div>
                    ))}
                </>
              );
          case 'post':
              return (
                <>
                    {entries?.map(entry => (
                        <div className="card text-center Card" key={entry.id}>
                            <div className="card-body Card-Body">
                                <h5 className="card-title Card-Title">Пользователь: {entry.id}</h5>
                                <h6 className="card-subtitle Card-Subtitle">{entry.email}</h6>
                                <p className="card-text Card-Text">{entry.body}</p>
                            </div>
                        </div>
                    ))}
                </>
              );
          case 'user':
              return (
                  <>
                      {entries?.map(entry => (
                          <div className="card text-center Card" key={entry.id}>
                              <div className="card-body Card-Body">
                                  <h5 className="card-title Card-Title">{entry.title}</h5>
                                  <p className="card-text Card-Text">{entry.body}</p>
                              </div>
                          </div>
                      ))}
                  </>
              );
      }
    };

    return (
        <>
            {hasEntries && entries.length > 0 && (
                <div className="card-footer CardFooter CardFooter_Available">
                    {renderItems()}
                </div>
            )}
        </>
    );
});

export default ComplexDataCardFooterView;