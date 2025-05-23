import React from 'react';
import TreeListView from "../TreeList/TreeListView.jsx";
import TreeListDataContentView from "../TreeListDataContent/TreeListDataContentView.jsx";

const SubTreeView = ({ data, openTree }) => {
    return (
        <div className="dropdown-list SubTree">
            <div className={`SubTree-DropdownTreeList ${openTree ? 'SubTree-DropdownTreeList_Visible' : ''}`}>
                {data.map(item => (
                    <TreeListView
                        key={item.id}
                        title={item.name}
                        content={
                            <TreeListDataContentView item={item}  />
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default SubTreeView;