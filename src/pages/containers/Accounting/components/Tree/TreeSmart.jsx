import React, { useState } from 'react';
import TreeView from './TreeView.jsx';

const accountingData = {
    accounting: {
        accounts: [
            {
                id: "acc-001",
                name: "Расчетный счет",
                type: "расчетный",
                balance: 150000.75,
                currency: "RUB"
            },
            {
                id: "acc-002",
                name: "Касса",
                type: "касса",
                balance: 25000.00,
                currency: "RUB"
            },
            {
                id: "acc-003",
                name: "Депозитный счет",
                type: "депозит",
                balance: 500000.00,
                currency: "RUB"
            }
        ],
        transactions: [
            {
                id: "txn-1001",
                date: "2024-04-01",
                amount: -5000,
                currency: "RUB",
                description: "Оплата поставщику за материалы",
                fromAccountId: "acc-001",
                toAccountId: null,
                category: "Покупки"
            },
            {
                id: "txn-1002",
                date: "2024-04-02",
                amount: 20000,
                currency: "RUB",
                description: "Выручка от клиента А",
                fromAccountId: null,
                toAccountId: "acc-001",
                category: null
            },
            {
                id: "txn-1003",
                date: "2024-04-03",
                amount: -3000,
                currency: "RUB",
                description: "Оплата аренды офиса",
                fromAccountId: "acc-002",
                toAccountId: null,
                category: "Аренда"
            },
            {
                id: "txn-1004",
                date: "2024-04-04",
                amount: -15000,
                currency: "RUB",
                description: "Платеж поставщику за оборудование",
                fromAccountId: "acc-001",
                toAccountId: null,
                category: "Закупки"
            }
        ],
        clients: [
            {
                id: "client-001",
                name: "ООО Ромашка",
                contactPerson: "Иван Иванов",
                email: "ivanov@romashka.ru",
                phone: "+7 900 123 45 67"
            },
            {
                id: "client-002",
                name: "ЗАО Лотос",
                contactPerson: "Мария Петрова",
                email: "petr@lotos.ru",
                phone: "+7 901 234 56 78"
            }
        ],
        suppliers: [
            {
                id: "supplier-001",
                name: "Поставщик материалов А",
                contactPerson: "Петр Петров",
                email: "petr@materials.ru",
                phone: "+7 902 345 67 89"
            },
            {
                id: "supplier-002",
                name: "Поставщик оборудования Б",
                contactPerson: "Светлана Смирнова",
                email: "s.smirnova@equip.ru",
                phone: "+7 903 456 78 90"
            }
        ]
    }
};

const Tree = () => {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheck = (id) => {
        setCheckedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <TreeView
            data={accountingData}
            checkedItems={checkedItems}
            onCheck={handleCheck}
        />
    );
};

export default Tree;