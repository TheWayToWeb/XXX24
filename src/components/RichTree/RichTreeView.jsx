import React, { useState, useEffect, useRef } from 'react';
import ContainerFluid from "../Application/ContainerFluid/ContainerFluidView.jsx";
import TreeListView from "./TreeListView.jsx";
import RichTreeIconView from "./RichTreeIconView.jsx";
import { Folder, ChevronRight } from 'react-bootstrap-icons';
import './RichTreeStyles.css';
import './TreeListStyles.css';


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

const RichTreeView = () => {
    const [openTree, setOpenTree] = useState(false);
    const toggleTree = () => {
        setOpenTree(!openTree);
    };
    const dropdownRef = useRef(null);


    const handleClickOutsideTree = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenTree(false);
        }
    };

    useEffect(() => {
        // Добавляем обработчик события на документ
        document.addEventListener('mousedown', handleClickOutsideTree);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideTree);
        };
    }, []);


    return (
        <div ref={dropdownRef} className="dropdown RichTree">
            <button className="dropdown-button RichTree-Button" onClick={ toggleTree }>
                <ContainerFluid>
                    <div className="col-md-6 RichTree-Column">
                        <div className="RichTree-IconPair">
                            <RichTreeIconView icon={<ChevronRight />} />
                            <RichTreeIconView icon={<Folder />} />
                        </div>
                    </div>
                    <div className="col-md-6 RichTree-Column">
                        <div className="RichTree-HeadlineContainer">
                            <p className="RichTree-Text"> Text 1 </p>
                            <p className="RichTree-Text"> Text 2</p>
                        </div>

                    </div>
                </ContainerFluid>
            </button>
            {openTree && (
                <div className="dropdown-list RichTree-List">
                    <div className={`RichTree-Dropdown ${openTree ? 'RichTree-Dropdown_Visible' : ''}`}>
                        {data.map(item => (
                            <TreeListView
                                key={item.id}
                                title={item.name}
                                content={
                                    <div>
                                        <div>Email: {item.email}</div>
                                        <div>{item.body}</div>
                                    </div>
                                }
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RichTreeView;

