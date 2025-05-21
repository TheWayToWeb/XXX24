import React, { useState, useEffect, useRef } from 'react';
import ContainerFluid from "../Application/ContainerFluid/ContainerFluidView.jsx";
import { Folder, ChevronRight } from 'react-bootstrap-icons';
import './RichTreeStyles.css';
import './TreeListStyles.css';
import RichTreeIconView from "./RichTreeIconView.jsx";


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

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion TreeList">
            <div className="accordion-item TreeList-Item">
                <h2 className="accordion-header TreeList-Header">
                    <button
                        className="accordion-button TreeList-Title"
                        onClick={() => toggleAccordion()}
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
                {isOpen && (
                    <div className="accordion-body TreeList-Content">
                        { content }
                    </div>
                )}
            </div>
        </div>
    );
};

const RichTreeView = () => {
    const [isOpenTree, setIsOpenTree] = useState(false);
    const toggleTree = () => {
        setIsOpenTree(!isOpenTree);
    };
    const dropdownRef = useRef(null);


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpenTree(false);
        }
    };

    useEffect(() => {
        // Добавляем обработчик события на документ
        document.addEventListener('mousedown', handleClickOutside);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div ref={dropdownRef} className="dropdown RichTree">
            <button className="dropdown-button RichTree-Button" onClick={toggleTree}>
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
            {isOpenTree && (
                <div className="dropdown-list RichTree-List">
                    <div className="RichTree-AccordionBox">
                        {data.map(item => (
                            <AccordionItem
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

