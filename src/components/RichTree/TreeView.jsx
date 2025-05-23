import React from 'react';
import ContainerFluid from "../Application/ContainerFluid/ContainerFluidView.jsx";
import TreeIconView from "./TreeIcon/TreeIconView.jsx";
import SubTreeView from "./SubTree/SubTreeView.jsx";
import { ChevronRight, Folder } from "react-bootstrap-icons";
import './TreeStyles.css';

const TreeView = ({ dropdownRef, toggleTree, treeTitles, openTree }) => {
    // Временные данные для внутреннего дерева
    const data = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        }
    ];

    return (
        <div ref={dropdownRef} className="dropdown Tree">
            {treeTitles.map(item => (
                <div key={item.id}>
                    <button
                        className="dropdown-button Tree-Button"
                        onClick={() => toggleTree(item.id)} // Передаем id элемента в функцию toggleTree
                    >
                        <ContainerFluid>
                            <div className="col-md-2 Tree-Column">
                                <div className="Tree-IconButton">
                                    <TreeIconView icon={<ChevronRight />} />
                                    <TreeIconView icon={<Folder />} />
                                </div>
                            </div>
                            <div className="col-md-10 Tree-Column">
                                <p className="Tree-MainTitle">{item.title}</p>
                            </div>
                        </ContainerFluid>
                    </button>
                    {/* Проверяем, раскрыт ли элемент */}
                    {openTree === item.id && (
                        <SubTreeView data={data} openTree={openTree} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TreeView;