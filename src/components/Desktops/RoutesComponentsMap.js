import React from 'react';

/* Импортируем компоненты рабочих столов */
import {
    ContactsContainer,
    DocumentFlowContainer,
    LeadsContainer,
    SalesOrdersContainer,
    SalesReportsContainer,
    ShipmentContainer,
    CounterpartiesContainer,
    CustomerInvoicesContainer
} from '../Desktops/Sales';

import {
    ProcessBidContainer,
    ProcessIncomeContainer,
    PurchasesOrdersContainer,
    IncomesContainer,
    ImportIncomes,
    PurchaseIncome,
    PurchaseProduction,
    GiveBackSupplier,
    ProvisionContainer
} from '../Desktops/Purchases';

// Создаем объект с именами ключей и компонентами
const componentsMap = {
    // Все столы Продаж
    contactsContainer: ContactsContainer,
    documentFlowContainer: DocumentFlowContainer,
    leadsContainer: LeadsContainer,
    salesOrdersContainer: SalesOrdersContainer,
    salesReportsContainer: SalesReportsContainer,
    shipmentContainer: ShipmentContainer,
    counterpartiesContainer: CounterpartiesContainer,
    customerInvoicesContainer: CustomerInvoicesContainer,

    // Все столы покупок
    processBidContainer: ProcessBidContainer,
    processIncomeContainer: ProcessIncomeContainer,
    purchasesOrdersContainer: PurchasesOrdersContainer,
    incomesContainer: IncomesContainer,
    importIncomes: ImportIncomes,
    purchaseIncome: PurchaseIncome,
    purchaseProduction: PurchaseProduction,
    giveBackSupplier: GiveBackSupplier,
    provisionContainer: ProvisionContainer
};

// Автоматически создаем объект с React-элементами
const RoutesComponentsMap = Object.fromEntries(
    Object.entries(componentsMap).map(([key, Component]) => [key, React.createElement(Component)])
);

export default RoutesComponentsMap;