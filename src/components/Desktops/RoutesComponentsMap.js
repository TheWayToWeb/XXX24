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
} from '../Desktops/Sales';

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
} from '../Desktops/Purchases';

import {
    GrindingContainer,
    HeatTreatmentContainer,
    HotLandingContainer,
    InteroperationalContainer,
    LazerContainer,
    MarkingContainer,
    MillingContainer,
    ProductionContainer,
    ProductionOperationsContainer,
    SawingContainer,
    ThreadRollingContainer,
    ThroughHolesContainer,
    TurningContainer,
    CncContainer,
    ColdLandingContainer
} from '../Desktops/Production';

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
} from '../Desktops/Accounting';

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
    grindingContainer: GrindingContainer,
    heatTreatmentContainer: HeatTreatmentContainer,
    hotLandingContainer: HotLandingContainer,
    interoperationalContainer: InteroperationalContainer,
    lazerContainer: LazerContainer,
    markingContainer: MarkingContainer,
    millingContainer: MillingContainer,
    productionContainer: ProductionContainer,
    productionOperationsContainer: ProductionOperationsContainer,
    sawingContainer: SawingContainer,
    threadRollingContainer: ThreadRollingContainer,
    throughHolesContainer: ThroughHolesContainer,
    turningContainer: TurningContainer,
    cncContainer: CncContainer,
    coldLandingContainer: ColdLandingContainer,

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
};

// Автоматически создаем объект с React-элементами
const RoutesComponentsMap = Object.fromEntries(
    Object.entries(componentsMap).map(([key, Component]) => [key, React.createElement(Component)])
);

export default RoutesComponentsMap;