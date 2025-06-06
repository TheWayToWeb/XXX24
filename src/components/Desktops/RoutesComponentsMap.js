import React from 'react';

/* Импортируем компоненты рабочих столов */
import {
    Contacts,
    DocumentFlow,
    Leads,
    SalesOrders,
    SalesReports,
    Shipment,
    Counterparties,
    CustomerInvoices
} from './Sales';

import {
    ProcessBid,
    ProcessIncome,
    PurchasesOrders,
    Incomes,
    ImportIncomes,
    PurchaseIncome,
    PurchaseProduction,
    GiveBackSupplier,
    ProvisionContainer
} from './Purchases';

import {
    Grinding,
    HeatTreatment,
    HotLanding,
    Interoperational,
    Lazer,
    Marking,
    Milling,
    Production,
    ProductionOperations,
    Sawing,
    ThreadRolling,
    ThroughHoles,
    Turning,
    Cnc,
    ColdLanding
} from './Production';

import {
    AccountMovements,
    CashAccruals,
    Implementations,
    ImportPayments,
    MaterialsProcessing,
    OperationTypes,
    Payment,
    PaymentRequest,
    Unloading,
    Calculations,
    CashDocuments
} from './Accounting';

import {
    Acceptance,
    Batches,
    Cancellation,
    GiveOut,
    InventoryAudit,
    Posting,
    ProductExport, StockBalance, Stocks, Storage, Transfer
} from "./Warehouses";

import {
    Classification,
    CoatingsTypes,
    Configurations,
    CounterpartyRegisters,
    DirectoriesCodesOperations,
    DirectoryContacts,
    GOST_OST_Lists,
    MaterialGrades,
    MaterialGroup,
    MaterialsHandbook,
    MaterialStrengthClasses,
    Nomenclature,
    ProductionOperationsGuides,
    ProductTypes,
    SalesFunnels,
    StorageSpace
} from './References'

// Создаем объект с именами ключей и компонентами
const componentsMap = {
    // Все столы Продаж
    contacts: Contacts,
    documentFlow: DocumentFlow,
    leads: Leads,
    salesOrders: SalesOrders,
    salesReports: SalesReports,
    shipment: Shipment,
    counterparties: Counterparties,
    customerInvoices: CustomerInvoices,

    // Все столы покупок
    processBid: ProcessBid,
    processIncome: ProcessIncome,
    purchasesOrders: PurchasesOrders,
    incomes: Incomes,
    importIncomes: ImportIncomes,
    purchaseIncome: PurchaseIncome,
    purchaseProduction: PurchaseProduction,
    giveBackSupplier: GiveBackSupplier,
    provision: ProvisionContainer,

    // Все столы производства
    grinding: Grinding,
    heatTreatment: HeatTreatment,
    hotLanding: HotLanding,
    interoperational: Interoperational,
    lazer: Lazer,
    marking: Marking,
    milling: Milling,
    production: Production,
    productionOperations: ProductionOperations,
    sawing: Sawing,
    threadRolling: ThreadRolling,
    throughHoles: ThroughHoles,
    turning: Turning,
    cnc: Cnc,
    coldLanding: ColdLanding,

    /* Все столы склада */
    acceptance: Acceptance,
    batches: Batches,
    cancellation: Cancellation,
    giveOut: GiveOut,
    inventoryAudit: InventoryAudit,
    posting: Posting,
    productExport: ProductExport,
    stockBalance: StockBalance,
    stocks: Stocks,
    storage: Storage,
    transfer: Transfer,

    /* Все столы бухгалтерии */
    accountMovements: AccountMovements,
    cashAccruals: CashAccruals,
    implementations: Implementations,
    importPayments: ImportPayments,
    materialsProcessing: MaterialsProcessing,
    operationTypes: OperationTypes,
    payment: Payment,
    paymentRequest: PaymentRequest,
    unloading: Unloading,
    calculations: Calculations,
    cashDocuments: CashDocuments,

    /* Все справочники */
    classification: Classification,
    coatingsTypes: CoatingsTypes,
    configurations: Configurations,
    counterpartyRegisters: CounterpartyRegisters,
    directoriesCodesOperations: DirectoriesCodesOperations,
    directoryContacts: DirectoryContacts,
    gost_ost_lists: GOST_OST_Lists,
    materialGrades: MaterialGrades,
    materialGroup: MaterialGroup,
    materialsHandbook: MaterialsHandbook,
    materialStrengthClasses: MaterialStrengthClasses,
    nomenclature: Nomenclature,
    productionOperationsGuides: ProductionOperationsGuides,
    productTypes: ProductTypes,
    salesFunnels: SalesFunnels,
    storageSpace: StorageSpace,
};

// Автоматически создаем объект с React-элементами
const RoutesComponentsMap = Object.fromEntries(
    Object.entries(componentsMap).map(([key, Component]) => [key, React.createElement(Component)])
);

export default RoutesComponentsMap;