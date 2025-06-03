import React from 'react';
import TreeListView from "../TreeList/TreeListView.jsx";
import TreeContentListView from "../TreeDataContentList/TreeContentListView.jsx";

const SubTreeView = React.memo(({ dataFolders, openTree }) => {
    return (
        <div className="dropdown-list SubTree">
            <div className={`SubTree-DropdownTreeList ${openTree ? 'SubTree-DropdownTreeList_Visible' : ''}`}>
                {dataFolders.map(data => (
                    <TreeListView
                        key={data.id}
                        title={data.name}
                        content={
                            <TreeContentListView dataFolder={data}  />
                        }
                    />
                ))}
            </div>
        </div>
    );
});

export default SubTreeView;