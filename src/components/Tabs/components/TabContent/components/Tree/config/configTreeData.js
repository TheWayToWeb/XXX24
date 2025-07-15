// Объект данных комплексного дерева
export const treeDataItems = {
    root: {
        index:'root',
        data:'Производство',
        isFolder:true,
        children:['production']
    },
    production:{
        index:'production',
        data:'Отрасли производства',
        isFolder:true,
        children:['performers', 'facilities', 'orders', 'assortments']
    },
    performers: {
        index:'performers',
        data:'Раздел 1',
        isFolder:true,
        children:[]
    },
    orders: {
        index:'orders',
        data: 'Раздел 3',
        isFolder:true,
        children:[]
    },
    assortments: {
        index: 'assortments',
        data: 'Раздел 4',
        isFolder: true,
        children:[]
    },
    facilities: {
        index: 'facilities',
        data: 'Раздел 2',
        isFolder: true,
        children: []
    }
};