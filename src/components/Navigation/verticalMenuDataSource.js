import { v4 } from 'uuid';

// Экспорт данных для выпадающего списка
export const verticalMenuDataSource = [
    {
        id: 1,
        text: "Продажи",
        children: [
            {
                id: v4(),
                text: "Заказы",
                path: "/",
                routeComponentName: "salesOrders"
            },
            {
                id: v4(),
                text: "Отгрузки",
                path: "/shipment",
                routeComponentName: "shipment"
            },
            {
                id: v4(),
                text: "Контакты",
                path: "/contacts",
                routeComponentName: "contacts"
            },
            {
                id: v4(),
                text: "Контрагенты",
                path: "/counterparties",
                routeComponentName: "counterparties"
            },
            {
                id: v4(),
                text: "Отчеты продаж",
                path: "/sales_reports",
                routeComponentName: "salesReports"
            },
            {
                id: v4(),
                text: "Лиды",
                path: "/leads",
                routeComponentName: "leads"
            },
            {
                id: v4(),
                text: "Счета покупателям",
                path: "/customer_invoices",
                routeComponentName: "customerInvoices"
            },
            {
                id: v4(),
                text: "Документооборот",
                path: "/document_flow",
                routeComponentName: "documentFlow"
            }
        ]
    },
    {
        id: 2,
        text: "Покупки",
        children: [
            {
                id: v4(),
                text: "Обработка заявок",
                path: "/process_bid",
                routeComponentName: "processBid"
            },
            {
                id: v4(),
                text: "Обработка поступлений",
                path: "/process_income",
                routeComponentName: "processIncome"
            },
            {
                id: v4(),
                text: "Заказы",
                path: "/orders",
                routeComponentName: "purchasesOrders"
            },
            {
                id: v4(),
                text: "Поступления",
                path: "/incomes",
                routeComponentName: "incomes"
            },
            {
                id: v4(),
                text: "Импортные поступления",
                path: "/import_incomes",
                routeComponentName: "importIncomes"
            },
            {
                id: v4(),
                text: "Заявки на закупку",
                path: "/purchase_income",
                routeComponentName: "purchaseIncome"
            },
            {
                id: v4(),
                text: "Заявки на производство",
                path: "/purchase_production",
                routeComponentName: "purchaseProduction"
            },
            {
                id: v4(),
                text: "Возвраты поставщикам",
                path: "/give_back_supplier",
                routeComponentName: "giveBackSupplier"
            },
            {
                id: v4(),
                text: "Снабжение",
                path: "/provision",
                routeComponentName: "provision"
            }
        ]
    },
    {
        id: 3,
        text: "Производство",
        children: [
            {
                id: v4(),
                "text": "Производство",
                "path": "/production",
                routeComponentName: "production"
            },
            {
                id: v4(),
                "text": "Производственные операции",
                "path": "/production_operations",
                routeComponentName: "productionOperations"
            },
            {
                id: v4(),
                "text": "Межоперационный",
                "path": "/interoperational",
                routeComponentName: "interoperational"
            },
            {
                id: v4(),
                "text": "Распиловка",
                "path": "/sawing",
                routeComponentName: "sawing"
            },
            {
                id: v4(),
                "text": "ЧПУ",
                "path": "/cnc",
                routeComponentName: "cnc"
            },
            {
                id: v4(),
                "text": "Токарка",
                "path": "/turning",
                routeComponentName: "turning"
            },
            {
                id: v4(),
                "text": "Фрезеровка",
                "path": "/milling",
                routeComponentName: "milling"
            },
            {
                id: v4(),
                "text": "Контровочные отверстия",
                "path": "/through_holes",
                routeComponentName: "throughHoles"
            },
            {
                id: v4(),
                "text": "Холодная высадка",
                "path": "/cold_landing",
                routeComponentName: "coldLanding"
            },
            {
                id: v4(),
                "text": "Горячая высадка",
                "path": "/hot_landing",
                routeComponentName: "hotLanding"
            },
            {
                id: v4(),
                "text": "Накатка резьбы",
                "path": "/thread_rolling",
                routeComponentName: "threadRolling"
            },
            {
                id: v4(),
                "text": "Маркировка",
                "path": "/marking",
                routeComponentName: "marking"
            },
            {
                id: v4(),
                "text": "Лазер",
                "path": "/lazer",
                routeComponentName: "lazer"
            },
            {
                id: v4(),
                "text": "Термичка",
                "path": "/heat_treatment",
                routeComponentName: "heatTreatment"
            },
            {
                id: v4(),
                "text": "Шлифовка",
                "path": "/grinding",
                routeComponentName: "grinding"
            }
        ]
    },
    {
        id: 4,
        text: "Склады",
        children: [
            {
                id: v4(),
                text: "Приемка",
                path: "/acceptance",
                routeComponentName: "acceptance"
            },
            {
                id: v4(),
                text: "Партии",
                path: "/batches",
                routeComponentName: "batches"
            },
            {
                id: v4(),
                text: "Перемещения ТМЦ",
                path: "/transfer",
                routeComponentName: "transfer"
            },
            {
                id: v4(),
                text: "Выдача ТМЦ",
                path: "/give_out",
                routeComponentName: "giveOut"
            },
            {
                id: v4(),
                text: "Списания",
                path: "/cancellation",
                routeComponentName: "cancellation"
            },
            {
                id: v4(),
                text: "Склады",
                path: "/stocks",
                routeComponentName: "stocks"
            },
            {
                id: v4(),
                text: "Остатки склада",
                path: "/stock_balance",
                routeComponentName: "stockBalance"
            },
            {
                id: v4(),
                text: "Инвентаризация",
                path: "/inventory_audit",
                routeComponentName: "inventoryAudit"
            },
            {
                id: v4(),
                text: "Оприходование",
                path: "/posting",
                routeComponentName: "posting"
            },
            {
                id: v4(),
                text: "Хранение сырья",
                path: "/storage",
                routeComponentName: "storage"
            },
            {
                id: v4(),
                text: "Отгрузка",
                path: "/product_export",
                routeComponentName: "productExport"
            }
        ]
    },
    {
        id: 5,
        text: "Бухгалтерия",
        children: [
            {
                id: v4(),
                text: "Оплата",
                path: "/payment",
                routeComponentName: "payment"
            },
            {
                id: v4(),
                text: "Заявка на оплату",
                path: "/payment_request",
                routeComponentName: "paymentRequest"
            },
            {
                id: v4(),
                text: "Кассовые документы",
                path: "/cash_documents",
                routeComponentName: "cashDocuments"
            },
            {
                id: v4(),
                text: "Импорт оплат",
                path: "import_payments",
                routeComponentName: "importPayments"
            },
            {
                id: v4(),
                text: "Реализации (акты, УПД, накладные)",
                path: "/implementations",
                routeComponentName: "implementations"
            },
            {
                id: v4(),
                text: "Переработка сырья",
                path: "/materials_processing",
                routeComponentName: "materialsProcessing"
            },
            {
                id: v4(),
                text: "Начисления",
                path: "/cash_accruals",
                routeComponentName: "cashAccruals"
            },
            {
                id: v4(),
                text: "Движения по счетам",
                path: "/account_movements",
                routeComponentName: "accountMovements"

            },
            {
                id: v4(),
                text: "Выгрузка",
                path: "/unloading",
                routeComponentName: "unloading"
            },
            {
                id: v4(),
                text: "Расчеты",
                path: "/calculations",
                routeComponentName: "calculations"
            },
            {
                id: v4(),
                text: "Виды операций",
                path: "/operation_types",
                routeComponentName: "operationTypes"
            }
        ]
    },
    {
        id: 6,
        text: "Справочники",
        children: [
            {
                id: v4(),
                text: "Справочник контактов",
                path: "/directory_contacts",
                routeComponentName: "directoryContacts"

            },
            {
                id: v4(),
                text: "Справочник контрагентов",
                path: "/counterparty_registers",
                routeComponentName: "counterpartyRegisters"
            },
            {
                id: v4(),
                text: "Номенклатура",
                path: "/nomenclature",
                routeComponentName: "nomenclature"
            },
            {
                id: v4(),
                text: "Справочник производственных операций",
                path: "/production_operations_guides",
                routeComponentName: "productionOperationsGuides"
            },
            {
                id: v4(),
                text: "Места хранения",
                path: "/storage_space",
                routeComponentName: "storageSpace"
            },
            {
                id: v4(),
                text: "Справочник операционных кодов",
                path: "/directories_codes_operations",
                routeComponentName: "directoriesCodesOperations"
            },
            {
                id: v4(),
                text: "Воронки",
                path: "/sales_funnels",
                routeComponentName: "salesFunnels"
            },
            {
                id: v4(),
                text: "Справочник материалов",
                path: "/materials_handbook",
                routeComponentName: "materialsHandbook"
            },
            {
                id: v4(),
                text: "Марки материалов",
                path: "/material_grades",
                routeComponentName: "materialGrades"
            },
            {
                id: v4(),
                text: "Классы прочности материалов",
                path: "/material_strength_classes",
                routeComponentName: "materialStrengthClasses"
            },
            {
                id: v4(),
                text: "Группа материалов",
                path: "/material_group",
                routeComponentName: "materialGroup"
            },
            {
                id: v4(),
                text: "Сортаменты",
                path: "/classification",
                routeComponentName: "classification"
            },
            {
                id: v4(),
                text: "Исполнения",
                path: "/configurations",
                routeComponentName: "configurations"
            },
            {
                id: v4(),
                text: "Виды изделий",
                path: "/productTypes",
                routeComponentName: "productTypes"
            },
            {
                id: v4(),
                text: "ГОСТ/ОСТ",
                path: "/GOST_OST_Lists",
                routeComponentName: "gost_ost_lists"
            },
            {
                id: v4(),
                text: "Виды покрытий",
                path: "/coatingsTypes",
                routeComponentName: "coatingsTypes"
            }
        ]
    },
    {
        id: 7,
        text: "Отчеты",
        children: [
            {
                id: v4(),
                text: "Анализ продукции",
                path: "/product_analysis",
                routeComponentName: "productAnalysis"
            },
            {
                id: v4(),
                text: "Валовая прибыль",
                path: "/gross_profit",
                routeComponentName: "grossProfit"
            },
            {
                id: v4(),
                text: "Изменение цен",
                path: "/price_changes",
                routeComponentName: "priceChanges"
            },
            {
                id: v4(),
                text: "Отчеты сотрудников",
                path: "/employee_reports",
                routeComponentName: "employeeReports"
            },
        ]
    },
    {
        id: 8,
        text: "Настройки",
        children: [
            {
                id: v4(),
                text: "Компании",
                path: "/companies",
                routeComponentName: "companies"
            },
            {
                id: v4(),
                text: "Организации",
                path: "/organizations",
                routeComponentName: "organizations"
            },
            {
                id: v4(),
                text: "Подразделения",
                path: "/units",
                routeComponentName: "units"
            },
            {
                id: v4(),
                text: "Должности",
                path: "/positions",
                routeComponentName: "positions"
            },
            {
                id: v4(),
                text: "Роли",
                path: "/roles",
                routeComponentName: "roles"
            },
            {
                id: v4(),
                text: "Сотрудники",
                path: "/employees",
                routeComponentName: "employees"
            },
            {
                id: v4(),
                text: "Отпуска",
                path: "/vacations",
                routeComponentName: "vacations"
            },
            {
                id: v4(),
                text: "Типы оборудования",
                path: "/equipmentTypes",
                routeComponentName: "equipmentTypes"
            },
            {
                id: v4(),
                text: "Типы производства",
                path: "/productionTypes",
                routeComponentName: "productionTypes"
            },
            {
                id: v4(),
                text: "Метки",
                path: "/tags",
                routeComponentName: "tags"
            }
        ]
    }
];