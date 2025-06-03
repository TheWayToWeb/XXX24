import React, { useContext, memo } from 'react';
import {
    Book,
    Boxes,
    Briefcase,
    Buildings,
    CardList,
    Cart3,
    MicrosoftTeams,
    QuestionSquare,
    Wrench
} from "react-bootstrap-icons";

import SidebarNestedListView from './SidebarNestedListView.jsx';
import { ButtonStretchContext } from "../DropdownMenuSmart.jsx";

const iconMap = {
    0: <MicrosoftTeams />,
    1: <Cart3 />,
    2: <Buildings />,
    3: <Boxes />,
    4: <Briefcase />,
    5: <Book />,
    6: <CardList />,
    7: <Wrench />,
    8: <QuestionSquare />
};

const SidebarItemContainer = memo(({ item }) => {
    const { canStretch } = useContext(ButtonStretchContext);
    const icon = iconMap[item.id] || null;

    return (
        <SidebarNestedListView
            canStretch={canStretch}
            icon={icon}
            text={item.text}
        />
    );
});

export default SidebarItemContainer;