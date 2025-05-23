import React, { useState, useEffect } from 'react';
import ContainerFluid from "../Application/ContainerFluid/ContainerFluidView.jsx";
import TreeIconView from "./TreeIcon/TreeIconView.jsx";
import SubTreeView from "./SubTree/SubTreeView.jsx";
import NotifyLoaderView from "../Application/NotifyLoader/NotifyLoaderView.jsx";
import { ChevronRight, Folder } from "react-bootstrap-icons";
import InfiniteScroll from "react-infinite-scroll-component";
import './TreeStyles.css';

const TreeView = React.memo(({ dropdownRef, toggleTree, treeTitles, openTree, fetchMoreData, hasMore }) => {
    const [folderDataContent, setFolderDataContent] = useState([]);

    const fetchDataFolders = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();

            setFolderDataContent(data);
        } catch (error) {
            console.error("Ошибка при получении данных дерева директорий: ", error);
            setFolderDataContent([]);
        }
    };

    // Запрос данных по API
    useEffect(() => {
        fetchDataFolders();
    }, []);


    return (
        <InfiniteScroll
            dataLength={treeTitles.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<NotifyLoaderView text="Идет загрузка дерева каталогов..." />}
            endMessage={<p style={{ textAlign: 'center' }}><b>Yay! You've seen it all!</b></p>}
        >
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
                            <SubTreeView dataFolders={folderDataContent} openTree={openTree} />
                        )}
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    );
});

export default TreeView;