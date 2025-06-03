import React from 'react';
import classNames from "classnames";
import './DataRendererDropdownStyles.css';

const DataRendererDropdownView = React.memo(({
        hasEntries,
        entries,
        renderedTypeList,
        isListVisible,
    }) => {
    const renderItems = () => {
      switch (renderedTypeList) {
          case 'comment':
              return (
                  <>
                      {entries?.map((entry) => (
                          <ul
                              className={classNames(
                                  'list-group',
                                  'list-group-flush',
                                  'DataCardList',
                                  {
                                      'd-block': isListVisible,
                                      'd-none': !isListVisible
                                  }
                              )}
                          >
                              <li className="list-group-item DataCardList-Item">{entry.name}</li>
                              <li className="list-group-item DataCardList-Item">{entry.body}</li>
                          </ul>
                      ))}
                  </>
              );
          case 'todo':
              return (
                <>
                    {entries?.map((entry) => (
                        <ul
                            className={classNames(
                                'list-group',
                                'list-group-flush',
                                'DataCardList',
                                {
                                    'd-block': isListVisible,
                                    'd-none': !isListVisible
                                }
                            )}
                            key={entry.id}
                        >
                            <li className="list-group-item DataCardList-Item">{entry.title}</li>
                            <li className={classNames(
                                "list-group-item",
                                "DataCardList-Item",
                                "DataCardList-Item_Status",
                                {
                                    'bg-success': entry.completed,
                                    'bg-warning': !entry.completed // Или просто `entry.completed ? 'bg-success' : 'bg-warning'`
                                }
                            )}>
                                {entry.completed ? "Success" : "Warning"}
                            </li>
                        </ul>
                    ))}
                </>
              );
          case 'post':
              return (
                <>
                    {entries?.map(entry => (
                        <ul
                            className={classNames(
                                'list-group',
                                'list-group-flush',
                                'DataCardList',
                                {
                                    'd-block': isListVisible,
                                    'd-none': !isListVisible
                                }
                            )}
                            key={entry.id}
                        >
                            <li className="list-group-item DataCardList-Item">{entry.name}</li>
                            <li className="list-group-item DataCardList-Item">{entry.email}</li>
                            <li className="list-group-item DataCardList-Item">{entry.body}</li>
                        </ul>
                    ))}
                </>
              );
          case 'user':
              return (
                  <>
                      {entries?.map(entry => (
                          <ul
                              className={classNames(
                                  "list-group",
                                  "list-group-flush",
                                  "DataCardList",
                                  {
                                      'd-block': isListVisible,
                                      'd-none': !isListVisible
                                  }
                              )}
                              key={entry.id}
                          >
                              <li className="list-group-item DataCardList-Item">{entry.title}</li>
                              <li className="list-group-item DataCardList-Item">{entry.body}</li>
                          </ul>
                      ))}
                  </>
              );
      }
    };

    return (
        <>
            {hasEntries && entries.length > 0 && (
                <div className="card-footer DataCardFooter">
                    {renderItems()}
                </div>
            )}
        </>
    );
});

export default DataRendererDropdownView;