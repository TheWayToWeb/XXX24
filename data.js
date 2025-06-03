// Экспорт данных для выпадающего списка
export const data = [
    {
        id: 1,
        text: "Продажи",
        path: "/sales",
        children: [
            { text: "Заказы", path: "/orders" },
            { text: "Отгрузки", path: "/shipment" },
            { text: "Контакты", path: "/contacts" },
            { text: "Контрагенты", path: "/counterparties" },
            { text: "Отчеты продаж", path: "/sales_reports" },
            { text: "Лиды", path: "/leads" },
            { text: "Счета покупателям", path: "/customer_invoices" },
            { text: "Документооборот", path: "/document_flow" }
        ]
    },
    {
        id: 2,
        text: "Покупки",
        path: "/purchases",
        children: [
            { text: "Обработка заявок", path: "/process_bid" },
            { text: "Обработка поступлений", path: "/process_income" },
            { text: "Заказы", path: "/orders" },
            { text: "Поступления", path: "/incomes" },
            { text: "Импортные поступления", path: "/import_incomes" },
            { text: "Заявки на закупку", path: "/purchase_income" },
            { text: "Заявки на производство", path: "/purchase_production" },
            { text: "Возвраты поставщикам", path: "/give_back_supplier" },
            { text: "Снабжение", path: "/provision" }
        ]
    },
    {
        id: 3,
        text: "Производство",
        path: "/production",
        children: [
            { "text": "Производство", "path": "/production" },
            { "text": "Производственные операции", "path": "/production_operations" },
            { "text": "Межоперационный", "path": "/interoperational" },
            { "text": "Распиловка", "path": "/sawing" },
            { "text": "ЧПУ", "path": "/cnc" },
            { "text": "Токарка", "path": "/turning" },
            { "text": "Фрезеровка", "path": "/milling" },
            { "text": "Контровочные отверстия", "path": "/through_holes" },
            { "text": "Холодная высадка", "path": "/cold_landing" },
            { "text": "Горячая высадка", "path": "/hot_landing" },
            { "text": "Накатка резьбы", "path": "/thread_rolling" },
            { "text": "Маркировка", "path": "/marking" },
            { "text": "Лазер", "path": "/lazer" },
            { "text": "Термичка", "path": "/heat_treatment" },
            { "text": "Шлифовка", "path": "/grinding" }
        ]
    },
    {
        id: 4,
        text: "Склады",
        path: "/warehouses",
        children: [
            { text: "Приемка", path: "/acceptance" },
            { text: "Партии", path: "/batches" },
            { text: "Перемещения ТМЦ", path: "/transfer" },
            { text: "Выдача ТМЦ", path: "/give_out" },
            { text: "Списания", path: "/cancellation" },
            { text: "Склады", path: "/stocks" },
            { text: "Остатки склада", path: "/stock_balance" },
            { text: "Инвентаризация", path: "/inventory_audit" },
            { text: "Оприходование", path: "/posting" },
            { text: "Хранение сырья", path: "/storage" },
            { text: "Отгрузка", path: "/product_export" }
        ]
    },
    {
        id: 5,
        text: "Бухгалтерия",
        path: "/accounting",
        children: [
            { text: "Оплата", path: "/payment" },
            { text: "Заявка на оплату", path: "/payment_request" },
            { text: "Кассовые документы", path: "/cash_documents" },
            { text: "Импорт оплат", path: "import_payments" },
            { text: "Реализации (акты, УПД, накладные)", path: "/implementations" },
            { text: "Переработка сырья", path: "/materials_processing" },
            { text: "Начисления", path: "/cash_accruals" },
            { text: "Движения по счетам", path: "/account_movements" },
            { text: "Выгрузка", path: "/unloading" },
            { text: "Расчеты", path: "/calculations" },
            { text: "Виды операций", path: "/operation_types" }
        ]
    },
    {
        id: 6,
        text: "Справочники",
        path: "/directories",
        children: [
            { text: "Контакты", path: "/contacts" },
            { text: "Контрагенты", path: "" },
            { text: "Номенклатура", path: "" },
            { text: "Операции", path: "" },
            { text: "Места хранения", path: "" },
            { text: "Операционные коды", path: "" },
            { text: "Воронки", path: "" },
            { text: "Материалы", path: "" },
            { text: "Марки материалов", path: "" },
            { text: "Классы прочности материалов", path: "" },
            { text: "Группа материалов", path: "" },
            { text: "Сортаменты", path: "" },
            { text: "Исполнения", path: "" },
            { text: "Виды изделия", path: "" },
            { text: "ГОСТ/ОСТ", path: "" },
            { text: "Виды покрытий", path: "" }
        ]
    },
    {
        id: 7,
        text: "Отчеты",
        path: "/reports",
        children: [
            { text: "Анализ продукции", path: "/product_analysis" },
            { text: "Валовая прибыль", path: "/gross_profit" },
            { text: "Изменение цен", path: "/price_changes" },
            { text: "Отчеты сотрудников", path: "/employee_reports" },
        ]
    },
    {
        id: 8,
        text: "Настройки",
        path: "/settings",
        children: [
            { text: "Компании", path: "" },
            { text: "Организации", path: "" },
            { text: "Подразделения", path: "" },
            { text: "Должности", path: "" },
            { text: "Роли", path: "" },
            { text: "Сотрудники", path: "" },
            { text: "Отпуска", path: "" },
            { text: "Типы оборудования", path: "" },
            { text: "Типы производства", path: "" },
            { text: "Метки", path: "" }
        ]
    }
];