import React, { useState } from 'react';
import ContainerFluid from "../../Application/ContainerFluid/ContainerFluidView.jsx";
import TreeIconView from "../TreeIcon/TreeIconView.jsx";
import { Folder } from "react-bootstrap-icons";

const TreeListView = React.memo(({ title, content }) => {
    const [openTreeListItem, setOpenTreeListItem] = useState(false);

    const toggleTreeList = () => {
        setOpenTreeListItem(!openTreeListItem);
    };

    return (
        <div className="accordion TreeList">
            <div className="accordion-item TreeList-Item">
                <h2 className="accordion-header TreeList-Title">
                    <button
                        className="accordion-button TreeList-ButtonTitle"
                        onClick={() => toggleTreeList()}
                    >
                        <ContainerFluid>
                            <div className="col-md-2 TreeList-Column">
                                <TreeIconView icon={<Folder />} />
                            </div>
                            <div className="col-md-10 TreeList-Column">
                                <div className="TreeList-Title">
                                    { title }
                                </div>
                            </div>
                        </ContainerFluid>
                    </button>
                </h2>
                {openTreeListItem && (
                    <div className="accordion-body TreeList-Content">
                        { content }
                    </div>
                )}
            </div>
        </div>
    );
});

export default TreeListView;