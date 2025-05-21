import React, { useState } from 'react';
import ContainerFluid from "../Application/ContainerFluid/ContainerFluidView.jsx";
import RichTreeIconView from "./RichTreeIconView.jsx";
import { Folder } from "react-bootstrap-icons";

const TreeListView = React.memo(({ title, content }) => {
    const [openTreeListItem, setOpenTreeListItem] = useState(false);

    const toggleTreeList = () => {
        setOpenTreeListItem(!openTreeListItem);
    };

    return (
        <div className="accordion TreeList">
            <div className="accordion-item TreeList-Item">
                <h2 className="accordion-header TreeList-Header">
                    <button
                        className="accordion-button TreeList-Title"
                        onClick={() => toggleTreeList()}
                    >
                        <ContainerFluid>
                            <div className="col-md-6 TreeList-Column">
                                <RichTreeIconView icon={<Folder />} />
                            </div>
                            <div className="col-md-6 TreeList-Column">
                                <div className="TreeList-Text">
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