import React from 'react';
import classNames from "classnames";
import BootstrapGridView from "../../../../shared/BootstrapGrid/BootstrapGridView.jsx";
import KanbanListIndexView from "./KanbanList/KanbanListIndexView.jsx";

const KanbanBoardView = () => {
    return (
        <BootstrapGridView>
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    className={classNames(
                        'col-12',
                        'col-sm-12',
                        'col-md-4',
                        'col-lg-3'
                    )}
                    key={index}
                >
                    <div className="BoardSectionContainer">
                        <KanbanListIndexView
                            index={index}
                        />
                    </div>
                </div>
            ))}
        </BootstrapGridView>
    );
}

export default KanbanBoardView;