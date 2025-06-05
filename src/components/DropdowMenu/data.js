import { v4 } from 'uuid';

// Экспорт данных для выпадающего списка
export const data = [
    {
        id: 1,
        text: "Продажи",
        children: [
            {
                id: v4(),
                text: "Заказы",
                path: "/orders",
                routeComponentName: "salesOrdersContainer"
            },
            {
                id: v4(),
                text: "Отгрузки",
                path: "/shipment",
                routeComponentName: "shipmentContainer"
            },
            {
                id: v4(),
                text: "Контакты",
                path: "/contacts",
                routeComponentName: "contactsContainer"
            },
            {
                id: v4(),
                text: "Контрагенты",
                path: "/counterparties",
                routeComponentName: "counterpartiesContainer"
            },
            {
                id: v4(),
                text: "Отчеты продаж",
                path: "/sales_reports",
                routeComponentName: "salesReportsContainer"
            },
            {
                id: v4(),
                text: "Лиды",
                path: "/leads",
                routeComponentName: "leadsContainer"
            },
            {
                id: v4(),
                text: "Счета покупателям",
                path: "/customer_invoices",
                routeComponentName: "customerInvoicesContainer"
            },
            {
                id: v4(),
                text: "Документооборот",
                path: "/document_flow",
                routeComponentName: "documentFlowContainer"
            }
        ]
    },
    {
        id: 2,
        text: "Покупки",
        children: [
            { id: v4(), text: "Обработка заявок", path: "/process_bid" },
            { id: v4(), text: "Обработка поступлений", path: "/process_income" },
            { id: v4(), text: "Заказы", path: "/orders" },
            { id: v4(), text: "Поступления", path: "/incomes" },
            { id: v4(), text: "Импортные поступления", path: "/import_incomes" },
            { id: v4(), text: "Заявки на закупку", path: "/purchase_income" },
            { id: v4(), text: "Заявки на производство", path: "/purchase_production" },
            { id: v4(), text: "Возвраты поставщикам", path: "/give_back_supplier" },
            { id: v4(), text: "Снабжение", path: "/provision" }
        ]
    },
    {
        id: 3,
        text: "Производство",
        children: [
            { id: v4(), "text": "Производство", "path": "/production" },
            { id: v4(), "text": "Производственные операции", "path": "/production_operations" },
            { id: v4(), "text": "Межоперационный", "path": "/interoperational" },
            { id: v4(), "text": "Распиловка", "path": "/sawing" },
            { id: v4(), "text": "ЧПУ", "path": "/cnc" },
            { id: v4(), "text": "Токарка", "path": "/turning" },
            { id: v4(), "text": "Фрезеровка", "path": "/milling" },
            { id: v4(), "text": "Контровочные отверстия", "path": "/through_holes" },
            { id: v4(), "text": "Холодная высадка", "path": "/cold_landing" },
            { id: v4(), "text": "Горячая высадка", "path": "/hot_landing" },
            { id: v4(), "text": "Накатка резьбы", "path": "/thread_rolling" },
            { id: v4(), "text": "Маркировка", "path": "/marking" },
            { id: v4(), "text": "Лазер", "path": "/lazer" },
            { id: v4(), "text": "Термичка", "path": "/heat_treatment" },
            { id: v4(), "text": "Шлифовка", "path": "/grinding" }
        ]
    },
    {
        id: 4,
        text: "Склады",
        children: [
            { id: v4(), text: "Приемка", path: "/acceptance" },
            { id: v4(), text: "Партии", path: "/batches" },
            { id: v4(), text: "Перемещения ТМЦ", path: "/transfer" },
            { id: v4(), text: "Выдача ТМЦ", path: "/give_out" },
            { id: v4(), text: "Списания", path: "/cancellation" },
            { id: v4(), text: "Склады", path: "/stocks" },
            { id: v4(), text: "Остатки склада", path: "/stock_balance" },
            { id: v4(), text: "Инвентаризация", path: "/inventory_audit" },
            { id: v4(), text: "Оприходование", path: "/posting" },
            { id: v4(), text: "Хранение сырья", path: "/storage" },
            { id: v4(), text: "Отгрузка", path: "/product_export" }
        ]
    },
    {
        id: 5,
        text: "Бухгалтерия",
        children: [
            { id: v4(), text: "Оплата", path: "/payment" },
            { id: v4(), text: "Заявка на оплату", path: "/payment_request" },
            { id: v4(), text: "Кассовые документы", path: "/cash_documents" },
            { id: v4(), text: "Импорт оплат", path: "import_payments" },
            { id: v4(), text: "Реализации (акты, УПД, накладные)", path: "/implementations" },
            { id: v4(), text: "Переработка сырья", path: "/materials_processing" },
            { id: v4(), text: "Начисления", path: "/cash_accruals" },
            { id: v4(), text: "Движения по счетам", path: "/account_movements" },
            { id: v4(), text: "Выгрузка", path: "/unloading" },
            { id: v4(), text: "Расчеты", path: "/calculations" },
            { id: v4(), text: "Виды операций", path: "/operation_types" }
        ]
    },
    {
        id: 6,
        text: "Справочники",
        children: [
            { id: v4(), text: "Контакты", path: "/contacts" },
            { id: v4(), text: "Контрагенты", path: "" },
            { id: v4(), text: "Номенклатура", path: "" },
            { id: v4(), text: "Операции", path: "" },
            { id: v4(), text: "Места хранения", path: "" },
            { id: v4(), text: "Операционные коды", path: "" },
            { id: v4(), text: "Воронки", path: "" },
            { id: v4(), text: "Материалы", path: "" },
            { id: v4(), text: "Марки материалов", path: "" },
            { id: v4(), text: "Классы прочности материалов", path: "" },
            { id: v4(), text: "Группа материалов", path: "" },
            { id: v4(), text: "Сортаменты", path: "" },
            { id: v4(), text: "Исполнения", path: "" },
            { id: v4(), text: "Виды изделия", path: "" },
            { id: v4(), text: "ГОСТ/ОСТ", path: "" },
            { id: v4(), text: "Виды покрытий", path: "" }
        ]
    },
    {
        id: 7,
        text: "Отчеты",
        children: [
            { id: v4(), text: "Анализ продукции", path: "/product_analysis" },
            { id: v4(), text: "Валовая прибыль", path: "/gross_profit" },
            { id: v4(), text: "Изменение цен", path: "/price_changes" },
            { id: v4(), text: "Отчеты сотрудников", path: "/employee_reports" },
        ]
    },
    {
        id: 8,
        text: "Настройки",
        children: [
            { id: v4(), text: "Компании", path: "" },
            { id: v4(), text: "Организации", path: "" },
            { id: v4(), text: "Подразделения", path: "" },
            { id: v4(), text: "Должности", path: "" },
            { id: v4(), text: "Роли", path: "" },
            { id: v4(), text: "Сотрудники", path: "" },
            { id: v4(), text: "Отпуска", path: "" },
            { id: v4(), text: "Типы оборудования", path: "" },
            { id: v4(), text: "Типы производства", path: "" },
            { id: v4(), text: "Метки", path: "" }
        ]
    }
];